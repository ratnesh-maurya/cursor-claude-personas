---
description: Auto-Skill Router and Manifest for N8N AUTOMATION SPECIALIST
globs: *
---

# 🦸 Auto-Skill Router (N8N AUTOMATION SPECIALIST)

As a **N8N AUTOMATION SPECIALIST**, you must **proactively** consult relevant local skill and agent documentation when the user asks for help, even without explicit slash commands.

## 🗂️ Available Skills Library
Below is the index of available skills for your persona. When a user's intent matches one of these descriptions, you MUST explicitly read the corresponding `SKILL.md` file to load its instructions.

- **api-design-principles**: ""Master REST and GraphQL API design principles to build intuitive, scalable, and maintainable APIs that delight developers. Use when designing new APIs, reviewing API specifications, or establishing...""
- **api-patterns**: ""API design principles and decision-making. REST vs GraphQL vs tRPC selection, response formats, versioning, pagination.""
- **bullmq-specialist**: ""BullMQ expert for Redis-backed job queues, background processing, and reliable async execution in Node.js/TypeScript applications. Use when: bullmq, bull queue, redis queue, background job, job queue.""
- **inngest**: ""Inngest expert for serverless-first background jobs, event-driven workflows, and durable execution without managing queues or workers. Use when: inngest, serverless background job, event-driven wor...""
- **javascript-pro**: "Master modern JavaScript with ES6+, async patterns, and Node.js APIs. Handles promises, event loops, and browser/Node compatibility."
- **make-automation**: ""Automate Make (Integromat) tasks via Rube MCP (Composio): operations, enums, language and timezone lookups. Always search tools first for current schemas.""
- **n8n-code-javascript**: "Write JavaScript code in n8n Code nodes. Use when writing JavaScript in n8n, using $input/$json/$node syntax, making HTTP requests with $helpers, working with dates using DateTime, troubleshooting Code node errors, or choosing between Code node modes."
- **n8n-code-python**: "Write Python code in n8n Code nodes. Use when writing Python in n8n, using _input/_json/_node syntax, working with standard library, or need to understand Python limitations in n8n Code nodes."
- **n8n-expression-syntax**: "Validate n8n expression syntax and fix common errors. Use when writing n8n expressions, using {{}} syntax, accessing $json/$node variables, troubleshooting expression errors, or working with webhook data in workflows."
- **n8n-mcp-tools-expert**: "Expert guide for using n8n-mcp MCP tools effectively. Use when searching for nodes, validating configurations, accessing templates, managing workflows, or using any n8n-mcp tool. Provides tool selection guidance, parameter formats, and common patterns."
- **n8n-node-configuration**: "Operation-aware node configuration guidance. Use when configuring nodes, understanding property dependencies, determining required fields, choosing between get_node detail levels, or learning common configuration patterns by node type."
- **n8n-validation-expert**: "Interpret validation errors and guide fixing them. Use when encountering validation errors, validation warnings, false positives, operator structure issues, or need help understanding validation results. Also use when asking about validation..."
- **n8n-workflow-patterns**: "Proven workflow architectural patterns from real n8n workflows. Use when building new workflows, designing workflow structure, choosing workflow patterns, planning workflow architecture, or asking about webhook processing, HTTP API integration,..."
- **python-pro**: "Master Python 3.12+ with modern features, async programming, performance optimization, and production-ready practices. Expert in the latest Python ecosystem including uv, ruff, pydantic, and FastAPI."
- **senior-architect**: ""Comprehensive software architecture skill for designing scalable, maintainable systems using ReactJS, NextJS, NodeJS, Express, React Native, Swift, Kotlin, Flutter, Postgres, GraphQL, Go, Python. I...""
- **software-architecture**: ""Guide for quality focused software architecture. This skill should be used when users want to write code, design architecture, analyze code, in any case that relates to software development.""
- **temporal-python-pro**: "Master Temporal workflow orchestration with Python SDK. Implements durable workflows, saga patterns, and distributed transactions. Covers async/await, testing strategies, and production deployment."
- **temporal-python-testing**: ""Test Temporal workflows with pytest, time-skipping, and mocking strategies. Covers unit testing, integration testing, replay testing, and local development setup. Use when implementing Temporal wor...""
- **trigger-dev**: ""Trigger.dev expert for background jobs, AI workflows, and reliable async execution with excellent developer experience and TypeScript-first design. Use when: trigger.dev, trigger dev, background ta...""
- **typescript-pro**: "Master TypeScript with advanced types, generics, and strict type safety. Handles complex type systems, decorators, and enterprise-grade patterns."
- **workflow-automation**: ""Workflow automation is the infrastructure that makes AI agents reliable. Without durable execution, a network hiccup during a 10-step payment flow means lost money and angry customers. With it, wor...""
- **workflow-orchestration-patterns**: ""Design durable workflows with Temporal for distributed systems. Covers workflow vs activity separation, saga patterns, state management, and determinism constraints. Use when building long-running ...""
- **workflow-patterns**: "Use this skill when implementing tasks according to Conductor's TDD workflow, handling phase checkpoints, managing git commits for tasks, or understanding the verification protocol."
- **zapier-make-patterns**: ""No-code automation democratizes workflow building. Zapier and Make (formerly Integromat) let non-developers automate business processes without writing code. But no-code doesn't mean no-complexity ...""


## 🧠 Behavior
1. **Analyze & Match:** Connect user intent to the skills listed above.
2. **Read the File:** Before writing code, use your file reading tools to explicitly read the `SKILL.md` file from `.cursor/skills/[skill-name]/SKILL.md` or `.claude/skills/[skill-name]/SKILL.md`.
3. **Execute Transparently:** Apply the rules learned from the skill file seamlessly.
4. **Limits:** Keep context concise—only load 1-5 max skills per task.
