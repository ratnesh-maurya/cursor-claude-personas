---
name: phoenix-liveview
description: "Phoenix LiveView patterns for real-time web apps: components, streams, hooks, PubSub, Presence. Use when building interactive server-rendered UIs with Phoenix."
risk: safe
source: community
date_added: "2026-03-18"
tags:
- elixir
- phoenix
- liveview
- real-time
- websocket
---

# Phoenix LiveView

Real-time, server-rendered interactive web applications with Phoenix LiveView.

## When to Use

- Building real-time interactive UIs without client-side JavaScript frameworks
- Server-rendered pages that need dynamic updates (forms, dashboards, chat)
- Implementing collaborative features with PubSub/Presence
- Progressive enhancement on top of server-rendered HTML

## Do Not Use When

- Offline-first applications requiring full client-side state
- Heavy client-side computation (video editing, complex animations)
- Static content sites with no interactivity

## Architecture

```
[Browser] ←──WebSocket──→ [LiveView Process (1 per client)]
                               ├── State (assigns)
                               ├── HEEx Template (render)
                               └── Event Handlers
```

- Initial render: full server-side HTML (SEO-friendly)
- Subsequent updates: only diffs sent over WebSocket (5-10x smaller)
- Each connected client spawns a lightweight BEAM process

## Function Components vs LiveComponents

**Prefer function components** (stateless) for most UI:

```elixir
# Function component — stateless, pure
attr :name, :string, required: true
attr :class, :string, default: ""

def greeting(assigns) do
  ~H"""
  <div class={@class}>Hello, {@name}!</div>
  """
end
```

**Use LiveComponents** only when you need isolated state:

```elixir
defmodule MyAppWeb.SearchBox do
  use MyAppWeb, :live_component

  def mount(socket), do: {:ok, assign(socket, query: "", results: [])}

  def handle_event("search", %{"query" => query}, socket) do
    results = MyApp.Search.run(query)
    {:noreply, assign(socket, query: query, results: results)}
  end

  def render(assigns) do
    ~H"""
    <form phx-submit="search" phx-target={@myself}>
      <input name="query" value={@query} phx-debounce="300" />
      <div :for={result <- @results}>{result.title}</div>
    </form>
    """
  end
end
```

## Streams (Large Lists)

Never store large collections in assigns. Use streams:

```elixir
def mount(_params, _session, socket) do
  {:ok, stream(socket, :messages, Messages.list_recent())}
end

def handle_info({:new_message, message}, socket) do
  {:noreply, stream_insert(socket, :messages, message, at: -1)}
end

def handle_info({:delete_message, message}, socket) do
  {:noreply, stream_delete(socket, :messages, message)}
end
```

In template:
```heex
<div id="messages" phx-update="stream">
  <div :for={{dom_id, message} <- @streams.messages} id={dom_id}>
    {message.body}
  </div>
</div>
```

## Async Operations

```elixir
# assign_async — for data loading
def mount(_params, _session, socket) do
  {:ok, assign_async(socket, :user_stats, fn -> {:ok, %{user_stats: fetch_stats()}} end)}
end

# In template
<.async_result :let={stats} assign={@user_stats}>
  <:loading>Loading...</:loading>
  <:failed :let={_reason}>Failed to load</:failed>
  {stats.total_users} users
</.async_result>
```

## PubSub for Real-Time

```elixir
# Subscribe in mount
def mount(%{"room_id" => room_id}, _session, socket) do
  if connected?(socket) do
    Phoenix.PubSub.subscribe(MyApp.PubSub, "room:#{room_id}")
  end
  {:ok, assign(socket, room_id: room_id)}
end

# Handle broadcasts
def handle_info({:new_message, message}, socket) do
  {:noreply, stream_insert(socket, :messages, message)}
end

# Broadcast from context
def create_message(attrs) do
  case Repo.insert(Message.changeset(%Message{}, attrs)) do
    {:ok, message} ->
      Phoenix.PubSub.broadcast(MyApp.PubSub, "room:#{message.room_id}", {:new_message, message})
      {:ok, message}
    error -> error
  end
end
```

## JavaScript Hooks

```elixir
# In template
<div id="chart" phx-hook="Chart" data-points={Jason.encode!(@points)}></div>
```

```javascript
// In app.js
let Hooks = {}
Hooks.Chart = {
  mounted() {
    this.renderChart(JSON.parse(this.el.dataset.points))
  },
  updated() {
    this.renderChart(JSON.parse(this.el.dataset.points))
  },
  renderChart(points) { /* D3/Chart.js rendering */ }
}

let liveSocket = new LiveSocket("/live", Socket, {hooks: Hooks})
```

Push events from hooks:
```javascript
this.pushEvent("chart_clicked", {point_id: id})
```

## Navigation

```elixir
# Patch (same LiveView, update params)
<.link patch={~p"/users?#{[page: @page + 1]}"}>Next</.link>

# Navigate (different LiveView)
<.link navigate={~p"/settings"}>Settings</.link>

# Handle in LiveView
def handle_params(%{"page" => page}, _uri, socket) do
  {:noreply, assign(socket, page: String.to_integer(page))}
end
```

## Form Handling

```elixir
def mount(_params, _session, socket) do
  changeset = Accounts.change_user(%User{})
  {:ok, assign(socket, form: to_form(changeset))}
end

def handle_event("validate", %{"user" => params}, socket) do
  changeset = Accounts.change_user(%User{}, params) |> Map.put(:action, :validate)
  {:noreply, assign(socket, form: to_form(changeset))}
end

def handle_event("save", %{"user" => params}, socket) do
  case Accounts.create_user(params) do
    {:ok, _user} -> {:noreply, push_navigate(socket, to: ~p"/users")}
    {:error, changeset} -> {:noreply, assign(socket, form: to_form(changeset))}
  end
end
```

## Anti-Patterns

- **Storing large lists in assigns**: Use streams for any collection that grows
- **Blocking in mount/3**: Use `connected?/1` to defer expensive work; use `assign_async` for slow data
- **Too many LiveComponents**: Each has lifecycle overhead — prefer function components
- **Not subscribing in mount**: Always subscribe to PubSub in `mount/3` (handles cleanup on disconnect)
- **Missing `phx-debounce`**: Add debounce to text inputs to avoid excessive server roundtrips

## Key Libraries

- `Phoenix.LiveView` (1.1+), `Phoenix.Component`, `Phoenix.PubSub`, `Phoenix.Presence`
- `Flop` / `Flop.Phoenix` — declarative filtering, sorting, pagination
- `LiveSvelte`, `LiveVue` — embed JS framework components inside LiveView
