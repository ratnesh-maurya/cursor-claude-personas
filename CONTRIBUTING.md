# Contributing

Thanks for contributing to this repository.

## Scope

This project stores persona templates for AI coding tools. Contributions should improve:

- persona quality
- portability
- clarity of rules and skills
- parity between `.claude` and `.cursor`

## How to contribute

1. Fork the repository.
2. Create a feature branch.
3. Make focused changes.
4. Validate parity and structure.
5. Open a pull request.

## Persona contribution checklist

- Add or update files under a specific persona folder.
- Keep `.claude` and `.cursor` content synchronized.
- Use clear skill names and frontmatter.
- Keep instructions concrete and actionable.
- Avoid contradictory rules.

## Validation before PR

Run these commands from the repo root:

```bash
# Check all persona folders for .claude/.cursor parity
for d in */; do
  d=${d%/}
  if [ -d "$d/.claude" ] && [ -d "$d/.cursor" ]; then
    diff -qr "$d/.claude" "$d/.cursor" >/dev/null || echo "$d differs"
  fi
done

# Count root shared skills
find .claude/skills -name 'SKILL.md' -type f | wc -l
```

## Style guidance

- Use ASCII text unless Unicode is required.
- Keep markdown concise.
- Prefer short sections and clear headings.
- Use examples when adding new workflows.

## Pull request expectations

Please include:

- summary of what changed
- why the change is needed
- validation steps and output
- any compatibility notes (Claude, Cursor, VS Code)
