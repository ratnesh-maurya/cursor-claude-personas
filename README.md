# cursor-claude-personas

Role-based AI persona packs for coding workflows.

Inspiration: https://github.com/sickn33/antigravity-awesome-skills

## Why this repo

- Portable persona packs you can copy directly into any project.
- Mirrored `.claude` and `.cursor` structures for predictable behavior.
- Wide role coverage across engineering, product, design, security, and growth.
- Minimal setup: copy folders, reopen session, start working.

## What this repo is

This repository contains persona folders (for example `senior-python-developer`, `security-engineer`, `ui-ux-designer`) that you can copy into another project.

Each persona includes:

- `.claude` configs
- `.cursor` configs

The goal is simple: copy a persona's hidden folders to your project root and get domain-tuned AI behavior.

## Choose a persona quickly

| Persona | Best for | Copy path | Notes |
|---|---|---|---|
| `senior-frontend-developer` | React/TypeScript UI systems | `senior-frontend-developer/` | UI architecture and frontend quality |
| `senior-python-developer` | APIs, automation, data workflows | `senior-python-developer/` | Strong backend and scripting focus |
| `security-engineer` | Threat modeling, hardening, audits | `security-engineer/` | Security-first guidance |
| `system-architect` | Service boundaries and scalability | `system-architect/` | High-level design and tradeoffs |
| `technical-writer` | Docs, onboarding, API clarity | `technical-writer/` | Documentation quality and consistency |

Browse all persona folders from repo root:

```bash
ls -1
```

## Quick usage

### 1) Pick a persona

```bash
ls -1
```

### 2) Copy into your target project

```bash
TARGET=/absolute/path/to/your-project
PERSONA=senior-frontend-developer

cp -R "$PERSONA/.claude" "$TARGET/"
cp -R "$PERSONA/.cursor" "$TARGET/"
```

### 3) Reopen your editor/chat session

Most tools reload instructions at session start.

## “I don’t want to type /skills”

Some tools expose skills as slash-commands, but you can make behavior effectively automatic by relying on **rules** that tell the agent to proactively consult local skill docs.

- **Cursor**: copy `.cursor/` into your project root. Cursor rules are always-on, so a rule can instruct the agent to read matching `SKILL.md` files without you typing `/...`.
- **Claude-style**: copy `.claude/` into your project root. Rules can also instruct automatic skill consultation.

This repo now includes an **auto-skill router rule** you can copy:

- `.cursor/rules/rules--auto-skill-router.md`
- `.claude/rules/rules--auto-skill-router.md`

If you’re copying a persona folder, you can also copy these two files into the target project’s `.cursor/rules/` and `.claude/rules/` to get the same “no slash commands” behavior.

## Compatibility matrix

| Tool | Rules | Skills | Agents | Recommended copy |
|---|---|---|---|---|
| Claude Code | Yes (`.claude/rules`) | Yes (`.claude/skills`) | Yes (`.claude/agents`, when present) | `.claude` |
| Cursor | Yes (`.cursor/rules`) | Yes (`.cursor/skills`) | Through project instruction files/patterns | `.cursor` + `.claude` |
| VS Code (GitHub Copilot) | Uses compatible instruction paths | Works with compatible skill/rule layouts | Through Copilot customization flow | `.claude` (plus optional `.github/copilot-instructions.md`) |

## Usage by tool

### Claude Code

- Uses `.claude/CLAUDE.md`, `.claude/rules`, `.claude/skills`, `.claude/agents`
- Minimal setup: copy only `.claude`

### Cursor

- Uses `.cursor/rules` and `.cursor/skills`
- Recommended setup: copy both `.claude` and `.cursor`

### VS Code (GitHub Copilot)

- Works with Claude-compatible paths in VS Code customization flow
- Recommended minimal setup for this repo style: copy `.claude`
- If you also want native Copilot repository instructions, add `.github/copilot-instructions.md` in your target project

## Starter personas (recommended)

If you are not sure where to begin, start with one of these:

1. `senior-frontend-developer` for modern web frontend work
2. `senior-python-developer` for general backend and automation
3. `security-engineer` for security-sensitive projects
4. `system-architect` for greenfield system design
5. `technical-writer` for docs-heavy repositories

## Applicable repository skills

This repo includes many root-level skills in `.claude/skills`. The most applicable skills for maintaining this repository are:

- `readme`
- `wiki-changelog`
- `documentation`
- `documentation-templates`
- `skill-creator`
- `skill-improver`
- `lint-and-validate`
- `requesting-code-review`
- `commit`
- `pr-writer`

## Repository shape

```text
cursor-claude-personas/
├── .claude/                   # Root reusable skills/rules
├── 3d-frontend-developer/
├── ai-ml-engineer/
├── ... 27 more persona folders
└── wordpress-specialist/
```

Persona folder shape:

```text
<persona>/
├── .claude/
│   ├── rules/
│   └── skills/
└── .cursor/
    ├── rules/
    └── skills/
```

## Automation and GitHub Actions

This repo includes a small set of GitHub Actions workflows under `.github/workflows`:

- **`ci.yml`**: Basic CI pipeline that checks out the code, sets up Node.js, installs npm dependencies if a `package.json` is present, and runs lint/tests when configured.
- **`deploy-pages.yml`**: Deploys the `site/` directory to GitHub Pages on pushes to `main`.
- **`labels-and-comments.yml`**: Adds labels to pull requests based on their title keywords and posts a friendly guidance comment on first-time contributor PRs (no AI involved).
- **`maintenance.yml`**: Runs weekly to mark long-inactive issues/PRs as stale and close them after a grace period, with clear explanatory comments.

All of these workflows are intentionally simple and AI-free so they can run in any fork without extra configuration.

## GitHub graphs and activity

- **Contributors & commit history**: View the GitHub contributors graph for this repo at  
  `https://github.com/OWNER/cursor-claude-personas/graphs/contributors`  
  (replace `OWNER` with the actual GitHub username or org if you’ve forked this repository).

- **Optional README activity graph embed (for forks)** – you can add a live activity graph badge to your own fork’s README:

```markdown
[![GitHub activity graph](https://github-readme-activity-graph.vercel.app/graph?username=OWNER&repo=cursor-claude-personas&theme=github-compact)](https://github.com/OWNER/cursor-claude-personas/graphs/contributors)
```

Replace `OWNER` with your GitHub username or organization. You can also tweak the `theme` parameter; see the `github-readme-activity-graph` project for more theme options.

## Validation commands

Check `.claude` and `.cursor` parity for every persona:

```bash
for d in */; do
  d=${d%/}
  if [ -d "$d/.claude" ] && [ -d "$d/.cursor" ]; then
    diff -qr "$d/.claude" "$d/.cursor" >/dev/null || echo "$d differs"
  fi
done
```

Count skills in root shared library:

```bash
find .claude/skills -name 'SKILL.md' -type f | wc -l
```

## Open source docs

- Contributing guide: [CONTRIBUTING.md](CONTRIBUTING.md)
- Code of conduct: [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md)
- Security policy: [SECURITY.md](SECURITY.md)
- Changelog: [CHANGELOG.md](CHANGELOG.md)
- License: [LICENSE](LICENSE)
