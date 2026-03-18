---
name: elixir-otp-patterns
description: "OTP architecture patterns for Elixir: GenServer, Supervisor, DynamicSupervisor, Registry, Application. Use when designing fault-tolerant process architectures, supervision trees, or stateful services."
risk: safe
source: community
date_added: "2026-03-18"
tags:
- elixir
- otp
- genserver
- supervisor
- beam
---

# Elixir OTP Patterns

OTP architecture patterns for building fault-tolerant, supervised process trees in Elixir.

## When to Use

- Designing supervision trees and process hierarchies
- Implementing stateful services with GenServer
- Managing dynamic process pools with DynamicSupervisor
- Building named process registries
- Architecting fault-tolerant BEAM applications

## Do Not Use When

- Simple stateless data transformations (use modules/functions)
- You need a different language runtime
- Basic scripting without concurrency needs

## GenServer Patterns

### Client API Module

Centralize all GenServer interactions — never scatter `GenServer.call/cast` across the codebase:

```elixir
defmodule MyApp.Counter do
  use GenServer

  # ── Client API ──
  def start_link(opts) do
    name = Keyword.get(opts, :name, __MODULE__)
    GenServer.start_link(__MODULE__, opts, name: name)
  end

  def increment(server \\ __MODULE__), do: GenServer.call(server, :increment)
  def get_count(server \\ __MODULE__), do: GenServer.call(server, :get_count)
  def reset(server \\ __MODULE__), do: GenServer.cast(server, :reset)

  # ── Server Callbacks ──
  @impl true
  def init(_opts), do: {:ok, 0}

  @impl true
  def handle_call(:increment, _from, count), do: {:reply, count + 1, count + 1}
  def handle_call(:get_count, _from, count), do: {:reply, count, count}

  @impl true
  def handle_cast(:reset, _count), do: {:noreply, 0}
end
```

### Callback Guidelines

| Callback | Use For | Return |
|----------|---------|--------|
| `handle_call` | Synchronous request/reply | `{:reply, response, new_state}` |
| `handle_cast` | Async fire-and-forget | `{:noreply, new_state}` |
| `handle_info` | System/external messages, timers | `{:noreply, new_state}` |
| `handle_continue` | Post-init work without blocking | `{:noreply, new_state}` |
| `terminate` | Cleanup (only with `trap_exit`) | Any |

### Deferred Replies

```elixir
def handle_call(:expensive_op, from, state) do
  Task.start(fn ->
    result = do_expensive_work()
    GenServer.reply(from, result)
  end)
  {:noreply, state}
end
```

## Supervisor Strategies

| Strategy | Behavior | Use When |
|----------|----------|----------|
| `:one_for_one` | Restart only crashed child | Children are independent |
| `:one_for_all` | Restart all children | Children are tightly coupled |
| `:rest_for_one` | Restart crashed + those started after | Ordered dependencies |

```elixir
defmodule MyApp.Application do
  use Application

  def start(_type, _args) do
    children = [
      {Registry, keys: :unique, name: MyApp.Registry},  # Start first
      MyApp.Repo,                                         # Database
      {Phoenix.PubSub, name: MyApp.PubSub},              # PubSub
      MyApp.Worker,                                       # Application worker
      MyAppWeb.Endpoint                                   # HTTP (last)
    ]

    Supervisor.start_link(children, strategy: :one_for_one, name: MyApp.Supervisor)
  end
end
```

## DynamicSupervisor

For runtime-spawned children (one process per user/room/session):

```elixir
defmodule MyApp.SessionSupervisor do
  use DynamicSupervisor

  def start_link(init_arg), do: DynamicSupervisor.start_link(__MODULE__, init_arg, name: __MODULE__)
  def init(_init_arg), do: DynamicSupervisor.init(strategy: :one_for_one)

  def start_session(session_id) do
    spec = {MyApp.SessionWorker, session_id: session_id}
    DynamicSupervisor.start_child(__MODULE__, spec)
  end
end
```

**Bottleneck fix**: Use `PartitionSupervisor` (Elixir 1.14+) to distribute across multiple instances:

```elixir
{PartitionSupervisor, child_spec: DynamicSupervisor, name: MyApp.PartitionedSessions}
```

## Registry + DynamicSupervisor (Singleton Pattern)

```elixir
def get_or_start_session(session_id) do
  case Registry.lookup(MyApp.Registry, {:session, session_id}) do
    [{pid, _}] -> {:ok, pid}
    [] -> SessionSupervisor.start_session(session_id)
  end
end
```

## child_spec Options

| Restart | Behavior |
|---------|----------|
| `:permanent` | Always restart (default) |
| `:temporary` | Never restart |
| `:transient` | Restart only on abnormal exit |

## Anti-Patterns

- **Processes for code organization**: Use modules for namespacing, processes for runtime concerns (state, concurrency, fault isolation)
- **Single GenServer bottleneck**: One process = one sequential mailbox. Partition state across multiple processes for high throughput
- **Processes outside supervision**: Never use raw `spawn/1` for long-running work — always supervise
- **Oversized state**: Keep GenServer state lean; offload large data to ETS or persistent storage
- **Spreading GenServer.call/cast**: Always wrap in a client API module

## Key Libraries

- `Registry`, `DynamicSupervisor`, `PartitionSupervisor` (stdlib)
- `Horde` — distributed Registry and DynamicSupervisor for clustered environments
