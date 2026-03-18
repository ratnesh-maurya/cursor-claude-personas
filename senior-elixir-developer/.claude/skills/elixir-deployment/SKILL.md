---
name: elixir-deployment
description: "Elixir deployment patterns: Mix releases, Docker multi-stage builds, clustering with libcluster, runtime config, health checks, observability. Use when deploying Elixir/Phoenix to production."
risk: safe
source: community
date_added: "2026-03-18"
tags:
- elixir
- deployment
- docker
- clustering
- releases
---

# Elixir Deployment Patterns

Production deployment strategies for Elixir and Phoenix applications.

## When to Use

- Building release artifacts for production deployment
- Containerizing Elixir apps with Docker
- Setting up BEAM clustering across nodes
- Configuring observability and health checks

## Mix Releases

```elixir
# mix.exs
def project do
  [
    app: :my_app,
    releases: [
      my_app: [
        include_executables_for: [:unix],
        steps: [:assemble, :tar]
      ]
    ]
  ]
end
```

Build:
```bash
MIX_ENV=prod mix release
```

Run migrations in production:
```bash
bin/my_app eval "MyApp.Release.migrate()"
```

### Release Migration Module

```elixir
defmodule MyApp.Release do
  @app :my_app

  def migrate do
    load_app()
    for repo <- repos() do
      {:ok, _, _} = Ecto.Migrator.with_repo(repo, &Ecto.Migrator.run(&1, :up, all: true))
    end
  end

  defp repos, do: Application.fetch_env!(@app, :ecto_repos)
  defp load_app, do: Application.load(@app)
end
```

## Runtime Config

Always use `config/runtime.exs` for production values (reads env vars at boot, not compile time):

```elixir
# config/runtime.exs
import Config

if config_env() == :prod do
  config :my_app, MyApp.Repo,
    url: System.fetch_env!("DATABASE_URL"),
    pool_size: String.to_integer(System.get_env("POOL_SIZE", "10"))

  config :my_app, MyAppWeb.Endpoint,
    url: [host: System.fetch_env!("PHX_HOST"), port: 443, scheme: "https"],
    http: [port: String.to_integer(System.get_env("PORT", "4000"))],
    secret_key_base: System.fetch_env!("SECRET_KEY_BASE")
end
```

## Docker Multi-Stage Build

```dockerfile
# Stage 1: Build
FROM hexpm/elixir:1.17.3-erlang-27.1-debian-bookworm-20240904-slim AS build

RUN apt-get update && apt-get install -y build-essential git && rm -rf /var/lib/apt/lists/*

WORKDIR /app
ENV MIX_ENV=prod

COPY mix.exs mix.lock ./
RUN mix deps.get --only prod && mix deps.compile

COPY config config
COPY lib lib
COPY priv priv
COPY assets assets

RUN mix assets.deploy && mix compile && mix release

# Stage 2: Runtime
FROM debian:bookworm-slim AS runtime

RUN apt-get update && apt-get install -y libssl3 libncurses6 locales && rm -rf /var/lib/apt/lists/*
RUN sed -i '/en_US.UTF-8/s/^# //g' /etc/locale.gen && locale-gen
ENV LANG=en_US.UTF-8

WORKDIR /app
COPY --from=build /app/_build/prod/rel/my_app ./

ENV PHX_SERVER=true
EXPOSE 4000
HEALTHCHECK CMD wget -q --spider http://localhost:4000/healthz || exit 1

CMD ["bin/my_app", "start"]
```

## Health Check Endpoint

```elixir
# In router
get "/healthz", HealthController, :check

# Controller
defmodule MyAppWeb.HealthController do
  use MyAppWeb, :controller

  def check(conn, _params) do
    case Ecto.Adapters.SQL.query(MyApp.Repo, "SELECT 1") do
      {:ok, _} -> json(conn, %{status: "ok"})
      {:error, _} -> conn |> put_status(503) |> json(%{status: "unhealthy"})
    end
  end
end
```

## Clustering

### libcluster Setup

```elixir
# In Application supervision tree
children = [
  {Cluster.Supervisor, [topologies(), [name: MyApp.ClusterSupervisor]]},
  # ... other children
]

defp topologies do
  [
    my_app: [
      strategy: Cluster.Strategy.Kubernetes.DNS,
      config: [
        service: "my-app-headless",
        application_name: "my_app"
      ]
    ]
  ]
end
```

### Strategies

| Strategy | Use For |
|----------|---------|
| `Cluster.Strategy.Gossip` | Local dev, LAN multicast |
| `Cluster.Strategy.Kubernetes.DNS` | K8s headless services |
| `Cluster.Strategy.Epmd` | Static host list |
| `dns_cluster` (Phoenix 1.8) | Simple DNS-based discovery |

### Environment Variables

```bash
RELEASE_DISTRIBUTION=name
RELEASE_NODE=my_app@hostname
RELEASE_COOKIE=super_secret_cookie  # Always set explicitly
```

## Observability

### Telemetry + Prometheus

```elixir
# In Application
children = [
  MyApp.Telemetry,  # Your telemetry supervisor
  {TelemetryMetricsPrometheus, metrics: MyApp.Telemetry.metrics()}
]

defmodule MyApp.Telemetry do
  def metrics do
    [
      counter("phoenix.router.dispatch.stop.duration"),
      summary("phoenix.endpoint.stop.duration", unit: {:native, :millisecond}),
      counter("my_app.repo.query.total_time", unit: {:native, :millisecond}),
    ]
  end
end
```

### Structured Logging

```elixir
# config/prod.exs
config :logger, :console,
  format: {Jason, :encode!},
  metadata: [:request_id, :user_id]
```

## Hosting Options

| Platform | Clustering | Notes |
|----------|-----------|-------|
| **Fly.io** | Built-in | First-class Elixir support |
| **Gigalixir** | Built-in | Hot upgrades, native BEAM |
| **AWS ECS/Fargate** | libcluster DNS | Standard container deploy |
| **Render** | Manual | Simple for single-node |

## Production Checklist

- [ ] `config/runtime.exs` for all env vars (not compile-time config)
- [ ] `RELEASE_COOKIE` set explicitly
- [ ] Health endpoint exposed at `/healthz`
- [ ] Database migrations in deployment pipeline
- [ ] Graceful shutdown (Phoenix drains connections by default)
- [ ] Structured logging configured
- [ ] Telemetry metrics exported
- [ ] `Sobelow` security scan in CI
- [ ] `MixAudit` dependency vulnerability check in CI
- [ ] `Credo` code quality check in CI

## Anti-Patterns

- **Compile-time config for runtime values**: Use `config/runtime.exs`, not `config/config.exs`
- **Default RELEASE_COOKIE**: Always set explicitly — default is insecure
- **Skipping health checks**: Load balancers need them
- **No migration strategy**: Always automate migrations in deploy pipeline
