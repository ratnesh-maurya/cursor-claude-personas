## Summary

<!-- What changed and why? -->

## Affected persona(s)

<!-- List the persona folder(s) this PR touches, or "none" for repo-only changes -->

## Checklist

- [ ] `.claude` and `.cursor` are in sync (run parity check below)
- [ ] Skill files have valid frontmatter (`name`, `description`, `type`)
- [ ] No secrets or tokens committed
- [ ] Commit messages follow Conventional Commits (`feat:`, `fix:`, `docs:`, etc.)

## Parity validation output

```text
# Paste output of:
# for d in */; do d=${d%/}; if [ -d "$d/.claude" ] && [ -d "$d/.cursor" ]; then diff -qr "$d/.claude" "$d/.cursor" >/dev/null || echo "$d differs"; fi; done
```

## Notes

<!-- Compatibility notes, breaking changes, or anything reviewers should know -->
