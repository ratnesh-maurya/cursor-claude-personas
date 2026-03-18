# Contributing

Thanks for contributing to cursor-claude-personas.

## Scope

Contributions should improve:

- persona quality (clearer rules, better skill docs)
- portability across Claude Code, Cursor, and VS Code
- parity between `.claude` and `.cursor` directories
- repository tooling and documentation

## Getting started

1. Fork the repository
2. Create a feature branch (see [Branch naming](#branch-naming))
3. Make focused changes
4. Run validation (see [Validation before PR](#validation-before-pr))
5. Open a pull request using the [PR template](.github/PULL_REQUEST_TEMPLATE.md)

## Branch naming

Use a short, lowercase, hyphen-separated name that reflects the change:

```text
add-voice-ai-developer
fix-senior-rust-parity
docs-update-readme
chore-stale-workflow
```

## Commit messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```text
feat: add voice-ai-developer persona
fix: sync senior-rust-developer .cursor rules with .claude
docs: update README persona table
chore: bump stale action to v9
refactor: consolidate shared skill frontmatter
```

Types: `feat`, `fix`, `docs`, `chore`, `refactor`, `test`, `ci`

Use `BREAKING CHANGE:` in the commit body if the persona folder structure changes in a non-backward-compatible way.

## Persona contribution checklist

- [ ] Added or updated files under a specific persona folder only
- [ ] `.claude` and `.cursor` content are synchronized (same rules, same skills)
- [ ] Skill files include valid YAML frontmatter (`name`, `description`, `type`)
- [ ] Instructions are concrete, actionable, and free of contradictions
- [ ] No secrets, tokens, or sensitive data committed

## Validation before PR

Run from the repo root before opening a PR:

```bash
# Check .claude/.cursor parity for every persona
for d in */; do
  d=${d%/}
  if [ -d "$d/.claude" ] && [ -d "$d/.cursor" ]; then
    diff -qr "$d/.claude" "$d/.cursor" >/dev/null || echo "$d differs"
  fi
done

# Count root shared skills
find .claude/skills -name 'SKILL.md' -type f | wc -l
```

No diff output means all personas are in sync.

## Style guidance

- Use plain ASCII text unless Unicode is explicitly needed
- Keep markdown concise — short sections with clear headings
- Prefer examples when describing new workflows or skill patterns
- Avoid duplicating content between `.claude` and `.cursor` — keep them in sync instead

## Reporting bugs or requesting features

Open an [issue](https://github.com/ratnesh-maurya/cursor-claude-personas/issues/new/choose) using the provided templates.
Include the persona name, affected tool (Claude Code / Cursor / VS Code), and steps to reproduce unexpected behavior.

## Pull request expectations

Your PR description should cover:

- what changed and why
- which persona(s) are affected
- validation steps and output
- any compatibility notes (Claude Code, Cursor, VS Code)
