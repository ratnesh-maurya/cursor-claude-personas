---
name: elixir-concurrency
description: "Elixir concurrency patterns: Tasks, GenStage pipelines, Broadway data ingestion, Flow parallel processing, Oban background jobs. Use when building concurrent or parallel data processing systems."
risk: safe
source: community
date_added: "2026-03-18"
tags:
- elixir
- concurrency
- genstage
- broadway
- oban
---

# Elixir Concurrency Patterns

Concurrency and parallel processing patterns for the BEAM VM.

## When to Use

- Running concurrent operations (API calls, file processing)
- Building data ingestion pipelines from message queues
- Parallel processing of large datasets
- Background job processing
- Fan-out/fan-in computation patterns

## Tasks

### Async/Await (Concurrent Computation)

```elixir
task1 = Task.async(fn -> fetch_user_profile(user_id) end)
task2 = Task.async(fn -> fetch_user_orders(user_id) end)
task3 = Task.async(fn -> fetch_user_notifications(user_id) end)

profile = Task.await(task1)
orders = Task.await(task2)
notifications = Task.await(task3)
```

### Async Stream (Parallel with Back-Pressure)

```elixir
urls
|> Task.async_stream(&HTTPClient.get/1, max_concurrency: 10, timeout: 30_000)
|> Enum.map(fn
  {:ok, {:ok, response}} -> response
  {:ok, {:error, reason}} -> {:error, reason}
  {:exit, reason} -> {:error, {:crashed, reason}}
end)
```

### Supervised Tasks (Fault-Isolated)

```elixir
# In supervision tree
{Task.Supervisor, name: MyApp.TaskSupervisor}

# Fire-and-forget (supervised)
Task.Supervisor.start_child(MyApp.TaskSupervisor, fn ->
  send_welcome_email(user)
end)

# Async with isolation (won't crash caller)
task = Task.Supervisor.async_nolink(MyApp.TaskSupervisor, fn ->
  expensive_computation()
end)

case Task.yield(task, 5_000) || Task.shutdown(task) do
  {:ok, result} -> result
  nil -> {:error, :timeout}
end
```

## GenStage (Custom Pipelines)

Demand-driven producer-consumer with built-in back-pressure:

```elixir
# Producer
defmodule MyApp.DataProducer do
  use GenStage

  def init(:ok), do: {:producer, %{}}

  def handle_demand(demand, state) when demand > 0 do
    events = fetch_batch(demand)
    {:noreply, events, state}
  end
end

# Consumer
defmodule MyApp.DataConsumer do
  use GenStage

  def init(:ok) do
    {:consumer, %{}, subscribe_to: [{MyApp.DataProducer, max_demand: 50, min_demand: 10}]}
  end

  def handle_events(events, _from, state) do
    Enum.each(events, &process_event/1)
    {:noreply, [], state}
  end
end
```

## Broadway (Data Ingestion)

High-level pipeline for message queue ingestion:

```elixir
defmodule MyApp.Pipeline do
  use Broadway

  def start_link(_opts) do
    Broadway.start_link(__MODULE__,
      name: __MODULE__,
      producer: [
        module: {BroadwaySQS.Producer, queue_url: System.fetch_env!("SQS_QUEUE_URL")},
        concurrency: 2
      ],
      processors: [
        default: [concurrency: 10]
      ],
      batchers: [
        default: [batch_size: 100, batch_timeout: 1_000, concurrency: 5]
      ]
    )
  end

  @impl true
  def handle_message(_processor, message, _context) do
    message
    |> Broadway.Message.update_data(&Jason.decode!/1)
    |> Broadway.Message.put_batcher(:default)
  end

  @impl true
  def handle_batch(:default, messages, _batch_info, _context) do
    rows = Enum.map(messages, fn msg -> msg.data end)
    MyApp.Repo.insert_all(Event, rows)
    messages
  end
end
```

Broadway supports: SQS, Kafka, RabbitMQ, Google Cloud PubSub out of the box.

## Flow (Parallel Data Processing)

MapReduce-style for large enumerables:

```elixir
# Word frequency count across files
File.ls!("./data")
|> Flow.from_enumerable(max_demand: 5)
|> Flow.flat_map(fn file ->
  File.read!("./data/#{file}")
  |> String.split(~r/\s+/)
  |> Enum.map(&String.downcase/1)
end)
|> Flow.partition()
|> Flow.reduce(fn -> %{} end, fn word, acc ->
  Map.update(acc, word, 1, &(&1 + 1))
end)
|> Enum.to_list()
```

Flow works in batches of 500 by default — only shows improvement on larger datasets.

## Oban (Background Jobs)

PostgreSQL-backed job queue with ACID guarantees:

```elixir
# Define a worker
defmodule MyApp.Workers.SendEmail do
  use Oban.Worker, queue: :mailers, max_attempts: 3

  @impl true
  def perform(%Oban.Job{args: %{"to" => to, "template" => template}}) do
    case MyApp.Mailer.deliver(to, template) do
      {:ok, _} -> :ok
      {:error, reason} -> {:error, reason}  # Will retry
    end
  end
end

# Enqueue a job
%{to: "user@example.com", template: "welcome"}
|> MyApp.Workers.SendEmail.new()
|> Oban.insert()

# Schedule for later
%{report_id: 123}
|> MyApp.Workers.GenerateReport.new(schedule_in: 3600)
|> Oban.insert()
```

### Oban Configuration

```elixir
config :my_app, Oban,
  repo: MyApp.Repo,
  queues: [
    default: 10,
    mailers: 5,
    critical: 20,
    reports: 3
  ],
  plugins: [
    {Oban.Plugins.Pruner, max_age: 60 * 60 * 24 * 7},  # Clean jobs older than 7 days
    {Oban.Plugins.Cron, crontab: [
      {"0 * * * *", MyApp.Workers.HourlySync},
      {"0 0 * * *", MyApp.Workers.DailyReport}
    ]}
  ]
```

### Key Rules

- Keep job args small: pass IDs, not full records
- Design workers to be **idempotent** (safe for retries)
- Use `Oban.Testing` for test assertions

## Choosing the Right Tool

| Need | Tool |
|------|------|
| 2-10 concurrent operations | `Task.async/await` |
| Process a list in parallel | `Task.async_stream` |
| Fire-and-forget background work | `Task.Supervisor.start_child` |
| Custom producer-consumer pipeline | `GenStage` |
| Message queue ingestion (SQS/Kafka) | `Broadway` |
| Parallel data crunching | `Flow` |
| Reliable background jobs with retries | `Oban` |
| Scheduled/cron jobs | `Oban` with Cron plugin |

## Anti-Patterns

- **Processes for code organization**: Processes model runtime concerns, not code structure
- **Unbounded spawning**: Always use supervisors; prefer `Task.Supervisor` over raw `Task.async`
- **Ignoring back-pressure**: Raw message passing can overflow mailboxes; use GenStage/Broadway
- **Large Oban payloads**: Pass IDs, not data blobs
- **Non-idempotent workers**: Jobs may retry; design for safe re-execution
- **`Task.async` without `await`/`yield`**: Linked tasks crash the caller on failure

## Key Libraries

- `Task`, `Task.Supervisor` (stdlib)
- `GenStage`, `Flow` (Dashbit)
- `Broadway` + producers: `broadway_sqs`, `broadway_kafka`, `broadway_rabbitmq`
- `Oban` (background jobs), `Oban.Pro` (workflows, batch jobs, Web UI)
