# cursor-claude-personas: Give Your AI Coding Assistant a Domain Expert Brain in 30 Seconds

> **TL;DR** — `cursor-claude-personas` is a free, open-source collection of 38 role-based AI persona packs for Claude Code, Cursor, and VS Code. Copy one folder into your project, reopen your editor, and your AI assistant instantly behaves like a seasoned specialist — whether that's a senior Python developer, a DevOps engineer, a security expert, or a UI/UX designer.

---

## The Problem: Generic AI Gives Generic Code

You have Claude Code or Cursor open. You ask it to add an endpoint. It writes something that works — but it doesn't know your preferred framework patterns, it doesn't follow your domain conventions, and it certainly doesn't remember that you care deeply about SQL index hygiene or GraphQL schema design.

The usual fix is a long system prompt you paste in every time. Or a `.cursorrules` file you spend hours writing. Or endless back-and-forth corrections.

**cursor-claude-personas solves this with a dead-simple copy-paste.**

---

## What Is cursor-claude-personas?

[cursor-claude-personas](https://github.com/ratnesh-maurya/cursor-claude-personas) is a GitHub repository containing **38 ready-made persona packs** for AI coding tools. Each persona is a folder with two hidden subdirectories:

```text
senior-python-developer/
├── .claude/
│   ├── rules/       ← always-on instructions Claude Code reads at session start
│   └── skills/      ← auto-triggered skill docs for specific tasks
└── .cursor/
    ├── rules/       ← always-on instructions Cursor reads at session start
    └── skills/      ← auto-triggered skill docs for specific tasks
```

When you copy `.claude/` or `.cursor/` (or both) into the root of your project, your editor loads those configs automatically. No slash commands. No system prompts. The persona is live the moment you start a new chat session.

### Supported tools

| Tool | What to copy |
|---|---|
| **Claude Code** | `.claude/` folder |
| **Cursor** | `.cursor/` folder |
| **VS Code** | `.claude/` folder (when using Claude-based extensions) |

---

## How to Use It — Step by Step

### Step 1: Clone the repo

```bash
git clone https://github.com/ratnesh-maurya/cursor-claude-personas.git
```

You only need to clone it once. Keep it around as your personal AI persona library.

### Step 2: Pick the persona that matches your current work

Browse the table in the next section or visit the [GitHub Pages site](https://ratnesh-maurya.github.io/cursor-claude-personas/) to filter by technology or tag.

### Step 3: Copy the persona into your project

Navigate to your cloned copy and run:

```bash
# Claude Code only
cp -R cursor-claude-personas/senior-python-developer/.claude /path/to/your-project/

# Cursor only
cp -R cursor-claude-personas/senior-python-developer/.cursor /path/to/your-project/

# Both tools
cp -R cursor-claude-personas/senior-python-developer/.claude /path/to/your-project/
cp -R cursor-claude-personas/senior-python-developer/.cursor /path/to/your-project/
```

Replace `senior-python-developer` with any persona slug from the list below.

### Step 4: Reopen your editor or start a new session

Claude Code and Cursor reload configuration at session start. From that point on, the AI follows the persona's rules, applies its skills automatically, and behaves as a domain expert — without you typing a single extra word.

### Bonus: Enable the auto-skill router

Each persona includes a special rule file called `rules--auto-skill-router.mdc` (`.mdc` is the Cursor/Claude rule file format — it is just Markdown with optional YAML frontmatter). This rule tells the AI to automatically select the right skill doc based on what you're working on — so you never need to type `/skill` commands manually.

It is already included when you copy the persona folders. No extra steps required.

---

## All 38 Personas

| Persona | Best for |
|---|---|
| `3d-frontend-developer` | Three.js, WebGL, 3D UI |
| `ai-agent-developer` | LLM agents, tool use, orchestration |
| `ai-ml-engineer` | Model training, pipelines, MLOps |
| `azure-developer` | Azure services, ARM/Bicep, AKS |
| `blockchain-web3-developer` | Smart contracts, DeFi, Web3 tooling |
| `blog-website-developer` | Content sites, CMS, static generators |
| `data-engineer` | Pipelines, dbt, Spark, warehouses |
| `devops-cloud-engineer` | CI/CD, Kubernetes, IaC, observability |
| `ecommerce-specialist` | Shopify, WooCommerce, checkout flows |
| `fullstack-saas-mvp` | Rapid SaaS prototyping, full-stack |
| `functional-programming` | Haskell, Clojure, FP patterns |
| `game-developer` | Unity, Godot, game loops |
| `health-tech-developer` | FHIR, HL7, medical data systems |
| `legal-finance-analyst` | Contracts, compliance, financial models |
| `marketing-automation` | Email, CRM integrations, analytics |
| `mobile-developer` | React Native, Flutter, iOS/Android |
| `n8n-automation-specialist` | n8n workflows, low-code automation |
| `odoo-erp-specialist` | Odoo modules, ERP customization |
| `open-source-maintainer` | OSS governance, reviews, releases |
| `platform-integrations` | APIs, webhooks, third-party services |
| `product-manager` | Roadmaps, specs, user stories |
| `qa-testing-engineer` | Test strategy, automation, coverage |
| `saas-startup-founder` | GTM, metrics, early-stage decisions |
| `security-engineer` | Threat modeling, hardening, audits |
| `senior-dotnet-developer` | C#, ASP.NET Core, Azure |
| `senior-elixir-developer` | Elixir, Phoenix, OTP |
| `senior-frontend-developer` | React, TypeScript, frontend architecture |
| `senior-golang-developer` | Go, microservices, concurrency |
| `senior-java-developer` | Java, Spring Boot, enterprise patterns |
| `senior-python-developer` | Python, APIs, automation, data |
| `senior-rust-developer` | Rust, systems programming, WASM |
| `seo-specialist` | Technical SEO, Core Web Vitals, schema |
| `system-architect` | Service boundaries, scalability, design |
| `system-designer` | Low-level system design, algorithms |
| `technical-writer` | Docs, onboarding, API clarity |
| `ui-ux-designer` | Design systems, accessibility, UX |
| `voice-ai-developer` | Voice interfaces, TTS, STT, ASR |
| `wordpress-specialist` | WordPress, WooCommerce, theme dev |

Not sure where to start? Try `senior-python-developer` or `senior-frontend-developer` — both are polished starting points that work for a wide range of projects.

---

## What Makes This Different From a `.cursorrules` File?

A `.cursorrules` file (a single plain-text file at the project root) you write yourself usually contains two or three paragraphs of general instructions. Cursor also supports a `.cursor/rules/` directory of individual rule files for more granular control. Both are fine for broad guidance, but neither gives your AI assistant real domain depth out of the box.

cursor-claude-personas packs in:

- **Multiple focused rule files** — each covering a specific concern (schema design, security, pagination, query patterns, etc.) rather than one sprawling blob of text.
- **Skill documents** — structured reference files that are automatically surfaced when the AI detects it needs them, without you prompting it.
- **Both tool formats simultaneously** — the same expertise loads whether you are using Claude Code, Cursor, or VS Code Copilot.
- **Zero prompt engineering on your part** — you copy two folders and you are done.

The key design principle is **depth over breadth**: one sharp specialist beats five vague generalists.

---

## Real-World Example

Imagine you are building a Python REST API with PostgreSQL. You copy in the `senior-python-developer` persona. From that point on, when you write a query, the AI:

- Warns you against `WHERE id IN (SELECT ...)` and rewrites it as `WHERE id = ANY(ARRAY[...])` with a note about the 10× speedup.
- Adds `WHERE deleted_at IS NULL` partial indexes automatically when it sees soft-delete columns.
- Flags missing foreign key indexes before you even run `EXPLAIN ANALYZE`.
- Enforces proper connection pool limits and prepared statement patterns.

None of that required you to type a single instruction. It was all encoded in the rules and skills you copied in.

---

## How the Folder Structure Works Under the Hood

Each persona ships with two kinds of config files:

### Rules (`rules/`)
Rules are always-on markdown files the editor reads at the start of every session. They define the persona's defaults, code style, anti-patterns to avoid, and domain-specific best practices. They are named with a `rules--` prefix so they sort together and are easy to identify.

### Skills (`skills/`)
Skill documents are structured markdown files with YAML frontmatter. The auto-skill router rule tells the AI to load the relevant skill when it detects you are working on a related task. For example, if you start writing an index migration, the SQL indexing skill is surfaced automatically. If you start wiring up an authentication flow, the auth skill fires.

This means the AI pulls in deep, specific guidance exactly when it is relevant — not all at once, cluttering its context.

---

## Switching Personas Mid-Project

You can swap personas at any time. Just delete the existing `.claude/` and `.cursor/` folders in your project and copy in a different persona. Reopen your session and the new persona is live.

You can even mix rules from multiple personas manually if you know what you are doing, but most of the time a single focused persona is all you need.

---

## Contributing a New Persona

The project is open source under the MIT license and welcomes contributions. If you want to add a new persona:

1. Fork the repository.
2. Create a new folder named after the role (e.g., `data-science-researcher`).
3. Add matching `.claude/` and `.cursor/` subdirectories with rules and skills.
4. Make sure the two directories are in sync — the parity check in `CONTRIBUTING.md` validates this.
5. Open a pull request.

See [CONTRIBUTING.md](CONTRIBUTING.md) for branch naming conventions, commit message format, and the full persona checklist.

---

## Where to Get It

- **GitHub repository**: <https://github.com/ratnesh-maurya/cursor-claude-personas>
- **GitHub Pages site** (browse and filter personas): <https://ratnesh-maurya.github.io/cursor-claude-personas/>
- **License**: MIT — free for personal and commercial use.

If it saves you time, star the repo. It helps other developers discover it.

---

## Summary

| | |
|---|---|
| **What it is** | 38 role-based AI persona packs for Claude Code, Cursor, and VS Code |
| **What it does** | Shapes your AI coding assistant into a domain specialist — instantly |
| **How to install** | Clone the repo, copy one persona folder, reopen your editor |
| **Time to set up** | Under 30 seconds |
| **Cost** | Free and open source (MIT) |
| **Requires** | Claude Code, Cursor, or VS Code with Copilot |

Clone it, copy a persona, and ship better code.
