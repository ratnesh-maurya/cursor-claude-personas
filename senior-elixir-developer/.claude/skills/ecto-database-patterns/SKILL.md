---
name: ecto-database-patterns
description: "Ecto database patterns: changesets, composable queries, Multi transactions, migrations, multi-tenancy. Use when designing database interactions in Elixir applications."
risk: safe
source: community
date_added: "2026-03-18"
tags:
- elixir
- ecto
- database
- postgresql
- changesets
---

# Ecto Database Patterns

Production-ready database interaction patterns with Ecto for Elixir applications.

## When to Use

- Designing database schemas and relationships in Elixir
- Building composable query pipelines
- Implementing complex transactions with Ecto.Multi
- Writing safe migrations for production databases
- Multi-tenant database architectures

## Changesets

### Purpose-Specific Changesets

Create multiple changesets per schema — never one monolithic changeset:

```elixir
defmodule MyApp.Accounts.User do
  use Ecto.Schema
  import Ecto.Changeset

  schema "users" do
    field :email, :string
    field :name, :string
    field :password_hash, :string
    field :role, Ecto.Enum, values: [:user, :admin]
    timestamps()
  end

  def registration_changeset(user, attrs) do
    user
    |> cast(attrs, [:email, :name, :password])
    |> validate_required([:email, :name, :password])
    |> validate_format(:email, ~r/@/)
    |> validate_length(:password, min: 8)
    |> unique_constraint(:email)
    |> hash_password()
  end

  def profile_changeset(user, attrs) do
    user
    |> cast(attrs, [:name])
    |> validate_required([:name])
    |> validate_length(:name, min: 2, max: 100)
  end

  def admin_changeset(user, attrs) do
    user
    |> cast(attrs, [:role])
    |> validate_inclusion(:role, [:user, :admin])
  end
end
```

### Key Rules

- `cast/4` for external (untrusted) data — validates and coerces types
- `change/2` for internal (trusted) data — no validation needed
- `unique_constraint/3` catches DB-level errors after insert
- Compose changesets by piping smaller functions together

## Composable Queries

Build queries incrementally:

```elixir
defmodule MyApp.Products do
  import Ecto.Query

  def list_products(filters \\ %{}) do
    Product
    |> maybe_filter_category(filters[:category])
    |> maybe_filter_price(filters[:min_price], filters[:max_price])
    |> maybe_search(filters[:search])
    |> order_by([p], desc: p.inserted_at)
    |> Repo.all()
  end

  defp maybe_filter_category(query, nil), do: query
  defp maybe_filter_category(query, cat), do: where(query, [p], p.category == ^cat)

  defp maybe_filter_price(query, nil, nil), do: query
  defp maybe_filter_price(query, min, max) do
    query
    |> then(fn q -> if min, do: where(q, [p], p.price >= ^min), else: q end)
    |> then(fn q -> if max, do: where(q, [p], p.price <= ^max), else: q end)
  end

  defp maybe_search(query, nil), do: query
  defp maybe_search(query, term) do
    where(query, [p], ilike(p.name, ^"%#{term}%"))
  end
end
```

### Avoid N+1 — Always Preload

```elixir
# Query-level preload (preferred — single query with JOIN)
from(p in Post, join: a in assoc(p, :author), preload: [author: a])

# Separate preload (two queries)
Repo.all(Post) |> Repo.preload(:author)
```

## Ecto.Multi (Transactions)

```elixir
def create_order(user, cart_items) do
  Ecto.Multi.new()
  |> Ecto.Multi.insert(:order, Order.changeset(%Order{}, %{user_id: user.id}))
  |> Ecto.Multi.run(:line_items, fn repo, %{order: order} ->
    items = Enum.map(cart_items, &Map.put(&1, :order_id, order.id))
    {count, _} = repo.insert_all(LineItem, items)
    {:ok, count}
  end)
  |> Ecto.Multi.run(:update_stock, fn repo, %{order: _order} ->
    # Decrement stock for each item
    Enum.each(cart_items, fn item ->
      repo.update_all(
        from(p in Product, where: p.id == ^item.product_id),
        inc: [stock: -item.quantity]
      )
    end)
    {:ok, :done}
  end)
  |> Repo.transaction()
  |> case do
    {:ok, %{order: order, line_items: count}} -> {:ok, order}
    {:error, failed_op, changeset, _changes} -> {:error, failed_op, changeset}
  end
end
```

## Migrations

### Rules

- Migrations are **immutable history** — never edit existing migrations in production
- **Never use Ecto schemas in migrations** (schema changes break old migrations)
- Use `execute/2` for raw SQL forward/backward

```elixir
defmodule MyApp.Repo.Migrations.AddProductsTable do
  use Ecto.Migration

  def change do
    create table(:products) do
      add :name, :string, null: false
      add :price, :decimal, precision: 10, scale: 2, null: false
      add :category_id, references(:categories, on_delete: :restrict)
      timestamps()
    end

    create index(:products, [:category_id])
    create index(:products, [:name])
  end
end
```

### Concurrent Index (no table lock)

```elixir
@disable_ddl_transaction true
@disable_migration_lock true

def change do
  create index(:products, [:name], concurrently: true)
end
```

## Multi-Tenancy

### Foreign Key Approach (simpler)

```elixir
# Add org_id to all tenant resources
schema "projects" do
  belongs_to :organization, Organization
  field :name, :string
end

# Always scope queries
def list_projects(org_id) do
  from(p in Project, where: p.organization_id == ^org_id)
  |> Repo.all()
end
```

### Query Prefix Approach (PostgreSQL schemas)

```elixir
# Per-query prefix
Repo.all(Project, prefix: "tenant_#{tenant_id}")

# Per-changeset prefix
%Project{} |> Ecto.put_meta(prefix: "tenant_#{tenant_id}") |> Project.changeset(attrs)
```

## Anti-Patterns

- **Mass assignment**: Always use `cast/4` with explicit field list
- **Schemas in migrations**: Couples migrations to current code — breaks when schema changes
- **N+1 queries**: Always preload associations
- **Single monolithic changeset**: Create purpose-specific changesets
- **Skipping Ecto.Multi**: Individual inserts without transactions leave data inconsistent on failure
- **Dynamic atom creation**: Never `String.to_atom/1` on external data

## Key Libraries

- `Ecto` (3.13+), `Ecto.SQL`, `Postgrex`
- `Flop` — declarative filtering, sorting, pagination
- `Triplex` — multi-tenancy with query prefixes
