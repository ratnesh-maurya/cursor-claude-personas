---
description: Automatically consult relevant local skills without requiring explicit user invocation.
---

## Auto skill router (no explicit invocation)

When the user asks for help, you must **proactively consult** any relevant local skill documentation, even if the user does not type a slash command or explicitly request a skill.

### Skills to consult

- `.claude/skills/**/SKILL.md`
- `.cursor/skills/**/SKILL.md`

### Routing behavior

- Select the most relevant skill(s) based on the user’s request and intent (keywords + task type).
- Prefer specific skills over general ones.
- Apply “process” skills automatically when applicable (e.g. commit conventions, PR writing, lint/validation, verification before completion).

### Practical limits

- Read **1–3** skills maximum per request unless the task genuinely spans multiple domains.
- If no skill is a strong match, proceed normally without forcing it.

