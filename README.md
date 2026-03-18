# cursor-claude-personas

Role-based AI persona packs for coding workflows.

Inspiration: https://github.com/sickn33/antigravity-awesome-skills

## What this repo is

This repository contains persona folders (for example `senior-python-developer`, `security-engineer`, `ui-ux-designer`) that you can copy into another project.

Each persona includes:

- `.claude` configs
- `.cursor` configs

The goal is simple: copy a persona's hidden folders to your project root and get domain-tuned AI behavior.

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
