---
description: Auto-Skill Router and Manifest for OPEN SOURCE MAINTAINER
globs: *
---

# 🦆 Auto-Skill Router (OPEN SOURCE MAINTAINER)

As a **OPEN SOURCE MAINTAINER**, you must **proactively** consult relevant local skill and agent documentation when the user asks for help, even without explicit slash commands.

## 🌯 Available Skills Library
Below is the index of available skills for your persona. When a user's intent matches one of these descriptions, you MUST explicitly read the corresponding `SKILL.md` file to load its instructions.

- **address-github-comments**: "Use when you need to address review or issue comments on an open GitHub Pull Request using the gh CLI."
- **api-documentation**: "API documentation workflow for generating OpenAPI specs, creating developer guides, and maintaining comprehensive API documentation."
- **api-documenter**: Master API documentation with OpenAPI 3.1, AI-powered tools, and modern developer experience practices. Create interactive docs, generate SDKs, and build comprehensive developer portals.
- **architecture-decision-records**: "Write and maintain Architecture Decision Records (ADRs) following best practices for technical decision documentation. Use when documenting significant technical decisions, reviewing past architect..."
- **brand-guidelines-community**: "Applies Anthropic's official brand colors and typography to any sort of artifact that may benefit from having Anthropic's look-and-feel. Use it when brand colors or style guidelines, visual formatt..."
- **changelog-automation**: "Automate changelog generation from commits, PRs, and releases following Keep a Changelog format. Use when setting up release workflows, generating release notes, or standardizing commit conventions."
- **cicd-automation-workflow-automate**: "You are a workflow automation expert specializing in creating efficient CI/CD pipelines, GitHub Actions workflows, and automated development processes. Design automation that reduces manual work, i..."
- **code-review-checklist**: "Comprehensive checklist for conducting thorough code reviews covering functionality, security, performance, and maintainability"
- **code-review-excellence**: "Master effective code review practices to provide constructive feedback, catch bugs early, and foster knowledge sharing while maintaining team morale. Use when reviewing pull requests, establishing..."
- **code-reviewer**: "Elite code review expert specializing in modern AI-powered code"
- **commit**: ALWAYS use this skill when committing code changes — never commit directly without it. Creates commits following Sentry conventions with proper conventional commit format and issue references. Trigger on any commit, git commit, save changes, or commit message task.
- **comprehensive-review-full-review**: "Use when working with comprehensive review full review"
- **comprehensive-review-pr-enhance**: >
- **create-branch**: Create a git branch following Sentry naming conventions. Use when asked to "create a branch", "new branch", "start a branch", "make a branch", "switch to a new branch", or when starting new work on the default branch.
- **create-issue-gate**: Use when starting a new implementation task and an issue must be created with strict acceptance criteria gating before execution.
- **differential-review**: >
- **docs-architect**: Creates comprehensive technical documentation from existing codebases. Analyzes architecture, design patterns, and implementation details to produce long-form technical manuals and ebooks.
- **documentation**: "Documentation generation workflow covering API docs, architecture docs, README files, code comments, and technical writing."
- **documentation-generation-doc-generate**: "You are a documentation expert specializing in creating comprehensive, maintainable documentation from code. Generate API docs, architecture diagrams, user guides, and technical references using AI..."
- **documentation-templates**: "Documentation templates and structure guidelines. README, API docs, code comments, and AI-friendly documentation."
- **finishing-a-development-branch**: "Use when implementation is complete, all tests pass, and you need to decide how to integrate the work - guides completion of development work by presenting structured options for merge, PR, or cleanup"
- **gha-security-review**: GitHub Actions security review for workflow exploitation vulnerabilities. Use when asked to "review GitHub Actions", "audit workflows", "check CI security", "GHA security", "workflow security review", or review .github/workflows/ for pwn requests, expression injection,...
- **git-advanced-workflows**: "Master advanced Git workflows including rebasing, cherry-picking, bisect, worktrees, and reflog to maintain clean history and recover from any situation. Use when managing complex Git histories, co..."
- **git-hooks-automation**: "Master Git hooks setup with Husky, lint-staged, pre-commit framework, and commitlint. Automate code quality gates, formatting, linting, and commit message enforcement before code reaches CI."
- **git-pr-workflows-git-workflow**: "Orchestrate a comprehensive git workflow from code review through PR creation, leveraging specialized agents for quality assurance, testing, and deployment readiness. This workflow implements modern g"
- **git-pr-workflows-pr-enhance**: "You are a PR optimization expert specializing in creating high-quality pull requests that facilitate efficient code reviews. Generate comprehensive PR descriptions, automate review processes, and ensu"
- **git-pushing**: "Stage, commit, and push git changes with conventional commit messages. Use when user wants to commit and push changes, mentions pushing to remote, or asks to save and push their work. Also activate..."
- **github-actions-templates**: "Create production-ready GitHub Actions workflows for automated testing, building, and deploying applications. Use when setting up CI/CD with GitHub Actions, automating development workflows, or cre..."
- **github-automation**: "Automate GitHub repositories, issues, pull requests, branches, CI/CD, and permissions via Rube MCP (Composio). Manage code workflows, review PRs, search code, and handle deployments programmatically."
- **github-issue-creator**: "Convert raw notes, error logs, voice dictation, or screenshots into crisp GitHub-flavored markdown issue reports. Use when the user pastes bug info, error messages, or informal descriptions and wan..."
- **github-workflow-automation**: "Automate GitHub workflows with AI assistance. Includes PR reviews, issue triage, CI/CD integration, and Git operations. Use when automating GitHub workflows, setting up PR review automation, creati..."
- **gitlab-ci-patterns**: "Build GitLab CI/CD pipelines with multi-stage workflows, caching, and distributed runners for scalable automation. Use when implementing GitLab CI/CD, optimizing pipeline performance, or setting up..."
- **issues**: Interact with GitHub issues - create, list, and view issues.
- **lint-and-validate**: "Automatic quality control, linting, and static analysis procedures. Use after every code modification to ensure syntax correctness and project standards. Triggers onKeywords: lint, format, check, v..."
- **monorepo-architect**: "Expert in monorepo architecture, build systems, and dependency management at scale. Masters Nx, Turborepo, Bazel, and Lerna for efficient multi-project development. Use PROACTIVELY for monorepo setup,"
- **monorepo-management**: "Master monorepo management with Turborepo, Nx, and pnpm workspaces to build efficient, scalable multi-package repositories with optimized builds and dependency management. Use when setting up monor..."
- **pr-writer**: ALWAYS use this skill when creating or updating pull requests — never create or edit a PR directly without it. Follows Sentry conventions for PR titles, descriptions, and issue references. Trigger on any create PR, open PR, submit PR, make PR,...
- **readme**: "When the user wants to create or update a README.md file for a project. Also use when the user says 'write readme,' 'create readme,' 'document this project,' 'project documentation,' or asks for he..."
- **receiving-code-review**: "Use when receiving code review feedback, before implementing suggestions, especially if feedback seems unclear or technically questionable - requires technical rigor and verification, not performat..."
- **requesting-code-review**: "Use when completing tasks, implementing major features, or before merging to verify work meets requirements"
- **security-audit**: "Comprehensive security auditing workflow covering web application testing, API security, penetration testing, vulnerability scanning, and security hardening."
- **security-scanning-security-dependencies**: "You are a security expert specializing in dependency vulnerability analysis, SBOM generation, and supply chain security. Scan project dependencies across ecosystems to identify vulnerabilities, ass..."
- **skill-creator**: "This skill should be used when the user asks to create a new skill, build a skill, make a custom skill, develop a CLI skill, or wants to extend the CLI with new capabilities. Automates the entire s..."
- **skill-developer**: "Create and manage Claude Code skills following Anthropic best practices. Use when creating new skills, modifying skill-rules.json, understanding trigger patterns, working with hooks, debugging skil..."
- **skill-improver**: Iteratively reviews and fixes Claude Code skill quality issues until they meet standards. Runs automated fix-review cycles using the skill-reviewer agent. Use to fix skill quality issues, improve skill descriptions, run automated skill review loops, or iteratively refine a...
- **skill-writer**: Create and improve agent skills following the Agent Skills specification. Use when asked to create, write, or update skills.
- **using-git-worktrees**: "Use when starting feature work that needs isolation from current workspace or before executing implementation plans - creates isolated git worktrees with smart directory selection and safety verifi..."
- **verification-before-completion**: "Use when about to claim work is complete, fixed, or passing, before committing or creating PRs - requires running verification commands and confirming output before making any success claims; evide..."
- **wiki-changelog**: "Analyzes git commit history and generates structured changelogs categorized by change type. Use when the user asks about recent changes, wants a changelog, or needs to understand what changed in th..."


## 🥠 Behavior
1. **Analyze & Match:** Connect user intent to the skills listed above.
2. **Read the File:** Before writing code, use your file reading tools to explicitly read the `SKILL.md` file from `.cursor/skills/[skill-name]/SKILL.md` or `.claude/skills/[skill-name]/SKILL.md`.
3. **Execute Transparently:** Apply the rules learned from the skill file seamlessly.
4. **Limits:** Keep context concise—only load 1-5 max skills per task.
