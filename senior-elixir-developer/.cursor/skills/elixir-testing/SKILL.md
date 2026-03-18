---
name: elixir-testing
description: "Elixir testing patterns: ExUnit, Mox behaviour-based mocking, StreamData property testing, Phoenix integration tests. Use when writing tests for Elixir/Phoenix applications."
risk: safe
source: community
date_added: "2026-03-18"
tags:
- elixir
- testing
- exunit
- mox
- property-testing
---

# Elixir Testing Patterns

Comprehensive testing strategies for Elixir and Phoenix applications.

## When to Use

- Writing unit, integration, or property-based tests for Elixir code
- Setting up behaviour-based mocking with Mox
- Testing Phoenix controllers, LiveViews, and channels
- Designing test factories and fixtures

## ExUnit Fundamentals

```elixir
defmodule MyApp.AccountsTest do
  use MyApp.DataCase, async: true  # async for concurrent test execution

  alias MyApp.Accounts

  describe "create_user/1" do
    test "with valid attrs creates a user" do
      attrs = %{email: "test@example.com", name: "Test", password: "password123"}
      assert {:ok, user} = Accounts.create_user(attrs)
      assert user.email == "test@example.com"
    end

    test "with invalid email returns error changeset" do
      assert {:error, changeset} = Accounts.create_user(%{email: "bad"})
      assert %{email: ["has invalid format"]} = errors_on(changeset)
    end
  end
end
```

### Key Practices

| Practice | Details |
|----------|---------|
| `async: true` | Use when tests don't share global state (most unit tests) |
| `describe` blocks | Group related tests logically |
| `@tag :slow` | Tag slow/integration tests for filtering: `mix test --exclude slow` |
| `setup` | Runs before each test; return map merged into test context |
| `setup_all` | Runs once per module |
| Doctests | `doctest MyModule` to verify documentation examples |

## Mox (Behaviour-Based Mocking)

Only mock at integration boundaries — never mock internal modules.

### 1. Define a behaviour

```elixir
defmodule MyApp.HTTPClient do
  @callback get(String.t()) :: {:ok, map()} | {:error, term()}
end
```

### 2. Create mock in test_helper.exs

```elixir
Mox.defmock(MyApp.MockHTTPClient, for: MyApp.HTTPClient)
```

### 3. Use in tests

```elixir
defmodule MyApp.WeatherTest do
  use ExUnit.Case, async: true
  import Mox

  setup :verify_on_exit!

  test "fetches weather for city" do
    expect(MyApp.MockHTTPClient, :get, fn url ->
      assert url =~ "london"
      {:ok, %{"temp" => 15, "condition" => "cloudy"}}
    end)

    assert {:ok, weather} = MyApp.Weather.fetch("london")
    assert weather.temp == 15
  end
end
```

### 4. Configure in config/test.exs

```elixir
config :my_app, :http_client, MyApp.MockHTTPClient
```

## Property-Based Testing (StreamData)

Test invariants across random inputs instead of specific cases:

```elixir
defmodule MyApp.SortTest do
  use ExUnit.Case, async: true
  use ExUnitProperties

  property "sorting is idempotent" do
    check all list <- list_of(integer()) do
      sorted = Enum.sort(list)
      assert Enum.sort(sorted) == sorted
    end
  end

  property "sorted list preserves length" do
    check all list <- list_of(integer()) do
      assert length(Enum.sort(list)) == length(list)
    end
  end

  property "email validation accepts valid emails" do
    check all name <- string(:alphanumeric, min_length: 1),
              domain <- string(:alphanumeric, min_length: 1) do
      email = "#{name}@#{domain}.com"
      changeset = User.registration_changeset(%User{}, %{email: email, name: "T", password: "password1"})
      assert changeset.valid? || Keyword.has_key?(changeset.errors, :email)
    end
  end
end
```

## Phoenix LiveView Testing

```elixir
defmodule MyAppWeb.UserLiveTest do
  use MyAppWeb.ConnCase, async: true
  import Phoenix.LiveViewTest

  test "renders user list", %{conn: conn} do
    user = insert(:user, name: "Alice")
    {:ok, view, html} = live(conn, ~p"/users")

    assert html =~ "Alice"
  end

  test "creates user via form", %{conn: conn} do
    {:ok, view, _html} = live(conn, ~p"/users/new")

    view
    |> form("#user-form", user: %{name: "Bob", email: "bob@test.com"})
    |> render_submit()

    assert_redirect(view, ~p"/users")
  end

  test "live updates on PubSub broadcast", %{conn: conn} do
    {:ok, view, _html} = live(conn, ~p"/dashboard")

    Phoenix.PubSub.broadcast(MyApp.PubSub, "stats", {:update, %{count: 42}})

    assert render(view) =~ "42"
  end
end
```

## Phoenix Controller Testing

```elixir
defmodule MyAppWeb.UserControllerTest do
  use MyAppWeb.ConnCase, async: true

  describe "GET /api/users" do
    test "returns list of users", %{conn: conn} do
      insert(:user, name: "Alice")

      conn = get(conn, ~p"/api/users")
      assert [%{"name" => "Alice"}] = json_response(conn, 200)["data"]
    end
  end
end
```

## Test Factories (ExMachina)

```elixir
defmodule MyApp.Factory do
  use ExMachina.Ecto, repo: MyApp.Repo

  def user_factory do
    %MyApp.Accounts.User{
      email: sequence(:email, &"user#{&1}@example.com"),
      name: sequence(:name, &"User #{&1}"),
      password_hash: Bcrypt.hash_pwd_salt("password123")
    }
  end

  def post_factory do
    %MyApp.Blog.Post{
      title: sequence(:title, &"Post #{&1}"),
      body: "Content",
      author: build(:user)
    }
  end
end
```

## External HTTP Mocking (Bypass)

```elixir
test "handles API timeout" do
  bypass = Bypass.open()

  Bypass.expect(bypass, fn conn ->
    Process.sleep(5_000)  # Simulate timeout
    Plug.Conn.send_resp(conn, 200, "")
  end)

  assert {:error, :timeout} = MyApp.API.fetch("http://localhost:#{bypass.port}/data")
end
```

## Anti-Patterns

- **Mocking internal modules**: Only mock at boundaries (HTTP, email, external APIs)
- **Ad-hoc mocks without behaviours**: Mox enforces contracts; ad-hoc mocks drift
- **Not using async**: Most tests can run concurrently — default to `async: true`
- **Testing implementation details**: Test behavior and outcomes, not internal calls
- **Slow tests without tags**: Tag with `@tag :slow` so devs can exclude them

## Key Libraries

- `ExUnit` (stdlib), `Mox`, `StreamData` (property testing)
- `ExMachina` (factories), `Faker` (fake data)
- `Bypass` (HTTP mock server), `Wallaby` (browser testing)
- `Hammox` (Mox + typespec checking)
