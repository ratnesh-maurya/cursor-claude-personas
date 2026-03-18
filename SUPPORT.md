# Support

## Ask a question

Use [GitHub Discussions](https://github.com/ratnesh-maurya/cursor-claude-personas/discussions) for questions, ideas, and sharing how you use personas.

## Report a bug or request a feature

Open an [issue](https://github.com/ratnesh-maurya/cursor-claude-personas/issues/new/choose) using the provided templates.

## Report a security issue

See [SECURITY.md](SECURITY.md) — use private vulnerability reporting, not a public issue.

## Common questions

**How do I use a persona with Claude Code?**

```bash
cp -R senior-python-developer/.claude /path/to/your-project/
```

Then reopen your Claude Code session.

**How do I use a persona with Cursor?**

```bash
cp -R senior-python-developer/.cursor /path/to/your-project/
```

Cursor rules reload automatically on next file open.

**Can I use both `.claude` and `.cursor` together?**

Yes. Copy both directories into the same project root. Each tool reads its own directory.

**What is the auto-skill router?**

A rule file that tells the AI to proactively load skill docs without requiring a slash command.
Copy `.claude/rules/rules--auto-skill-router.md` or `.cursor/rules/rules--auto-skill-router.md` into your project alongside a persona.
