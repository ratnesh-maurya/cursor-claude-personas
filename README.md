# cursor-claude-personas

> 38 role-based AI persona packs for Claude Code, Cursor, and VS Code. Clone. Copy. Code.

[![CI](https://github.com/ratnesh-maurya/cursor-claude-personas/actions/workflows/ci.yml/badge.svg)](https://github.com/ratnesh-maurya/cursor-claude-personas/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![GitHub stars](https://img.shields.io/github/stars/ratnesh-maurya/cursor-claude-personas?style=social)](https://github.com/ratnesh-maurya/cursor-claude-personas)

---

## What is this?

Each persona is a folder with `.claude/` and `.cursor/` configs — rules, skills, and agent instructions for a specific domain. Copy one into your project and your AI coding tool becomes a domain expert.

No prompt engineering. No system prompts to paste. Just copy and code.

---

## Get started in 30 seconds

### 1. Clone the repo

```bash
git clone https://github.com/ratnesh-maurya/cursor-claude-personas.git
```

### 2. Copy a persona into your project

Pick any persona folder and copy its hidden directories into your project root:

- For **Claude Code** — copy the `.claude/` folder
- For **Cursor** — copy the `.cursor/` folder
- For **both** — copy both

### 3. Reload your editor

Reopen your editor or start a new chat session. The persona is live.

> Not sure which one to pick? Start with `senior-python-developer` or `senior-frontend-developer`.

---

## All 38 personas

| Persona | Best for |
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

## How it works

Each persona folder looks like this:

```text
senior-python-developer/
├── .claude/
│   ├── rules/       <- always-on instructions
│   └── skills/      <- auto-triggered skill docs
└── .cursor/
    ├── rules/       <- always-on instructions
    └── skills/      <- auto-triggered skill docs
```

When your editor loads, it reads these config files and shapes the AI's behavior to match the role — without you typing anything extra.

---

## Compatibility

| Tool | What to copy |
| --- | --- |
| **Claude Code** | `.claude/` folder |
| **Cursor** | `.cursor/` folder |
| **VS Code (Copilot)** | `.claude/` folder |

---

## Like this project?

If this saves you time, **[give it a star](https://github.com/ratnesh-maurya/cursor-claude-personas)**. It helps others discover it.

---

## Contributing

PRs are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md).

- [Code of Conduct](CODE_OF_CONDUCT.md)
- [Security Policy](SECURITY.md)
- [Changelog](CHANGELOG.md)
- [Support](SUPPORT.md)

---

## License

MIT — see [LICENSE](LICENSE).

---

Inspired by [antigravity-awesome-skills](https://github.com/sickn33/antigravity-awesome-skills).
