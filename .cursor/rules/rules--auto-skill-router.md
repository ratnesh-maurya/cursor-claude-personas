---
description: Automatically consult relevant local skills without slash commands.
---

## Auto skill router (no slash commands)

When the user asks for help, you must **proactively load and follow** any relevant skill docs that already exist in this repository, without requiring the user to invoke a slash-command.

### What counts as a “skill”

- `.cursor/skills/**/SKILL.md`
- `.claude/skills/**/SKILL.md`

### How to apply this

- If the user request clearly matches a skill by **name**, **description**, or obvious **topic overlap**, read the relevant `SKILL.md` and follow it.
- If multiple skills match, prefer the most specific one first (e.g. `pr-writer` over generic `documentation`).
- If a “guardrail” skill applies (commit/PR/security/lint/verification), treat it as mandatory guidance even if the user didn’t ask explicitly.

### When not to do this

- Don’t read dozens of skills. Load **at most 1–3** skills per user request unless the task truly spans domains.
- Don’t block on uncertainty: pick the best-matching skill, proceed, and adjust if later evidence conflicts.

