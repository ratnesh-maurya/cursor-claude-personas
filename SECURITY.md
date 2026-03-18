# Security Policy

## Supported versions

This repository contains configuration templates, not executable software.
Security updates are applied on the `main` branch.

| Version | Supported |
| --- | --- |
| `main` | Yes |
| older branches | No |

## Reporting a vulnerability

**Please do not open a public GitHub issue for security reports.**

Use GitHub's private vulnerability reporting instead:
[Report a vulnerability](https://github.com/ratnesh-maurya/cursor-claude-personas/security/advisories/new)

If private reporting is unavailable, contact the maintainer directly via the email on the GitHub profile.

Include in your report:

- affected file path(s) or persona folder
- reproducible steps
- potential impact
- suggested fix (optional)

Maintainers will acknowledge the report within 5 business days and aim to resolve confirmed issues within 30 days.

## Security notes for this repository

- Review skills before running any scripts referenced in skill docs
- Do not commit secrets, tokens, or API keys to persona folders
- Keep hidden config directories (`.claude/`, `.cursor/`) scoped to intended projects
- Validate third-party snippets and imported skills before adopting them
- The `.gitignore` intentionally excludes `.cursor` at the root to avoid leaking local tool config
