# cursor-claude-personas

> Role-based AI persona packs for Claude Code, Cursor, and VS Code — copy a folder, unlock domain-tuned AI behavior.

[![CI](https://github.com/ratnesh-maurya/cursor-claude-personas/actions/workflows/ci.yml/badge.svg)](https://github.com/ratnesh-maurya/cursor-claude-personas/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

Inspired by [antigravity-awesome-skills](https://github.com/sickn33/antigravity-awesome-skills).

---

## Table of Contents

- [cursor-claude-personas](#cursor-claude-personas)
  - [Table of Contents](#table-of-contents)
  - [What this is](#what-this-is)
  - [How it works](#how-it-works)
  - [Quick start](#quick-start)
    - [1. Browse available personas](#1-browse-available-personas)
    - [2. Copy a persona into your project](#2-copy-a-persona-into-your-project)
    - [3. Reopen your editor or chat session](#3-reopen-your-editor-or-chat-session)
  - [All personas](#all-personas)
  - [Compatibility matrix](#compatibility-matrix)
  - [Auto-skill router (no slash commands)](#auto-skill-router-no-slash-commands)
  - [Repository structure](#repository-structure)
  - [GitHub Actions](#github-actions)
  - [Validation](#validation)
  - [Contributing](#contributing)
  - [License](#license)

---

## What this is

**cursor-claude-personas** is a library of portable persona packs you copy directly into any project. Each persona is a pair of hidden config directories (`.claude/` and `.cursor/`) pre-loaded with role-specific rules, skills, and agent instructions.

**Why it exists:**

- Portable — copy any persona folder into any project; no install required
- Mirrored `.claude` / `.cursor` structures for consistent behavior across tools
- 38 roles covering engineering, product, design, security, data, and growth
- Minimal friction: copy folders, reopen session, start working

---

## How it works

```text
cursor-claude-personas/
└── senior-python-developer/
    ├── .claude/
    │   ├── rules/          <- always-on instructions for Claude Code
    │   └── skills/         <- slash-command or auto-triggered skill docs
    └── .cursor/
        ├── rules/          <- Cursor rules (always-on)
        └── skills/         <- Cursor skill docs
```

When you copy `.claude/` or `.cursor/` into your project root, the AI tool loads those files at session start. Rules run automatically; skills can be invoked by name or auto-triggered by the router rule.

---

## Quick start

### 1. Browse available personas

```bash
ls -1
```

### 2. Copy a persona into your project

```bash
TARGET=/absolute/path/to/your-project
PERSONA=senior-python-developer

cp -R "$PERSONA/.claude" "$TARGET/"
cp -R "$PERSONA/.cursor" "$TARGET/"
```

### 3. Reopen your editor or chat session

Most tools reload instructions at session start. In Claude Code, `/reset` also reloads.

> **Tip:** If you are unsure which persona to pick, start with `senior-python-developer` for backend/automation work or `senior-frontend-developer` for UI work.

---

## All personas

| Persona folder | Best for |
| --- | --- |
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

---

## Compatibility matrix

| Tool | Config path | Rules | Skills |
| --- | --- | --- | --- |
| **Claude Code** | `.claude/` | `.claude/rules/` (always-on) | `.claude/skills/` |
| **Cursor** | `.cursor/` | `.cursor/rules/` (always-on) | `.cursor/skills/` |
| **VS Code (Copilot)** | `.claude/` or `.github/copilot-instructions.md` | Compatible instruction paths | Works via compatible skill layouts |

**Recommended copy per tool:**

- Claude Code only → copy `.claude/`
- Cursor only → copy `.cursor/`
- VS Code Copilot → copy `.claude/` and optionally add `.github/copilot-instructions.md` in target project

---

## Auto-skill router (no slash commands)

Some tools expose skills as slash commands (e.g., `/commit`, `/pr-writer`). You can make behavior automatic instead by using the **auto-skill router rule**, which tells the agent to proactively read matching `SKILL.md` files without requiring a slash command.

Two copies are included in this repo:

```text
.cursor/rules/rules--auto-skill-router.md
.claude/rules/rules--auto-skill-router.md
```

Copy these into your target project's rules directory alongside the persona to enable automatic skill consultation.

---

## Repository structure

```text
cursor-claude-personas/
├── .claude/                      # Root reusable skills and rules (apply to this repo itself)
│   ├── rules/
│   └── skills/
├── .github/
│   ├── ISSUE_TEMPLATE/
│   ├── workflows/
│   └── PULL_REQUEST_TEMPLATE.md
├── <persona-folder>/             # One folder per persona (38 total)
│   ├── .claude/
│   │   ├── rules/
│   │   └── skills/
│   └── .cursor/
│       ├── rules/
│       └── skills/
├── site/                         # GitHub Pages site (deployed via deploy-pages.yml)
├── CHANGELOG.md
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── LICENSE
├── README.md
├── SECURITY.md
└── SUPPORT.md
```

---

## GitHub Actions

| Workflow | Trigger | Purpose |
| --- | --- | --- |
| `ci.yml` | Push / PR | Lint and test (skips gracefully if unconfigured) |
| `deploy-pages.yml` | Push to `main` | Deploy `site/` to GitHub Pages |
| `labels-and-comments.yml` | PR open/edit | Auto-label by title keywords; welcome first-time contributors |
| `maintenance.yml` | Weekly | Mark stale issues/PRs; close after grace period |

All workflows are AI-free and run without extra configuration in forks.

---

## Validation

Check `.claude` / `.cursor` parity for every persona:

```bash
for d in */; do
  d=${d%/}
  if [ -d "$d/.claude" ] && [ -d "$d/.cursor" ]; then
    diff -qr "$d/.claude" "$d/.cursor" >/dev/null || echo "$d differs"
  fi
done
```

Count skills in the root shared library:

```bash
find .claude/skills -name 'SKILL.md' -type f | wc -l
```

List all personas:

```bash
ls -d */ | grep -v '^\.' | grep -v '^site'
```

---

## Contributing

Contributions are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md) for the full guide.

Quick checklist for persona contributions:

1. Fork → branch → change → PR
2. Keep `.claude` and `.cursor` content synchronized
3. Use clear skill names and frontmatter
4. Run the parity validation script before opening a PR

For bugs, questions, or ideas, open an [issue](https://github.com/ratnesh-maurya/cursor-claude-personas/issues).

---

## License

MIT — see [LICENSE](LICENSE).
