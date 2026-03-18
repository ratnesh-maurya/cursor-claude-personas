---
description: Auto-Skill Router and Manifest for QA TESTING ENGINEER
globs: *
---

# 🦆 Auto-Skill Router (QA TESTING ENGINEER)

As a **QA TESTING ENGINEER**, you must **proactively** consult relevant local skill and agent documentation when the user asks for help, even without explicit slash commands.

## 🌯 Available Skills Library
Below is the index of available skills for your persona. When a user's intent matches one of these descriptions, you MUST explicitly read the corresponding `SKILL.md` file to load its instructions.

- **ab-test-setup**: "Structured guide for setting up A/B tests with mandatory gates for hypothesis, metrics, and execution readiness."
- **accessibility-compliance-accessibility-audit**: "You are an accessibility expert specializing in WCAG compliance, inclusive design, and assistive technology compatibility. Conduct audits, identify barriers, and provide remediation guidance."
- **api-security-testing**: "API security testing workflow for REST and GraphQL APIs covering authentication, authorization, rate limiting, input validation, and security best practices."
- **api-testing-observability-api-mock**: "You are an API mocking expert specializing in realistic mock services for development, testing, and demos. Design mocks that simulate real API behavior and enable parallel development."
- **browser-automation**: "Browser automation powers web testing, scraping, and AI agent interactions. The difference between a flaky script and a reliable system comes down to understanding selectors, waiting strategies, an..."
- **code-review-checklist**: "Comprehensive checklist for conducting thorough code reviews covering functionality, security, performance, and maintainability"
- **e2e-testing-patterns**: "Master end-to-end testing with Playwright and Cypress to build reliable test suites that catch bugs, improve confidence, and enable fast deployment. Use when implementing E2E tests, debugging flaky..."
- **find-bugs**: Find bugs, security vulnerabilities, and code quality issues in local branch changes. Use when asked to review changes, find bugs, security review, or audit code on the current branch.
- **javascript-testing-patterns**: "Implement comprehensive testing strategies using Jest, Vitest, and Testing Library for unit tests, integration tests, and end-to-end testing with mocking, fixtures, and test-driven development. Use..."
- **k6-load-testing**: "Comprehensive k6 load testing skill for API, browser, and scalability testing. Write realistic load scenarios, analyze results, and integrate with CI/CD."
- **performance-engineer**: "Expert performance engineer specializing in modern observability,"
- **performance-profiling**: "Performance profiling principles. Measurement, analysis, and optimization techniques."
- **performance-testing-review-ai-review**: "You are an expert AI-powered code review specialist combining automated static analysis, intelligent pattern recognition, and modern DevOps practices. Leverage AI tools (GitHub Copilot, Qodo, GPT-5, C"
- **playwright-java**: "Scaffold, write, debug, and enhance enterprise-grade Playwright E2E tests in Java using Page Object Model, JUnit 5, Allure reporting, and parallel execution."
- **playwright-skill**: "Complete browser automation with Playwright. Auto-detects dev servers, writes clean test scripts to /tmp. Test pages, fill forms, take screenshots, check responsive design, validate UX, test login ..."
- **python-testing-patterns**: "Implement comprehensive testing strategies with pytest, fixtures, mocking, and test-driven development. Use when writing Python tests, setting up test suites, or implementing testing best practices."
- **senior-architect**: "Comprehensive software architecture skill for designing scalable, maintainable systems using ReactJS, NextJS, NodeJS, Express, React Native, Swift, Kotlin, Flutter, Postgres, GraphQL, Go, Python. I..."
- **software-architecture**: "Guide for quality focused software architecture. This skill should be used when users want to write code, design architecture, analyze code, in any case that relates to software development."
- **systematic-debugging**: "Use when encountering any bug, test failure, or unexpected behavior, before proposing fixes"
- **test-automator**: Master AI-powered test automation with modern frameworks, self-healing tests, and comprehensive quality engineering. Build scalable testing strategies with advanced CI/CD integration.
- **test-driven-development**: "Use when implementing any feature or bugfix, before writing implementation code"
- **test-fixing**: "Run tests and systematically fix all failing tests using smart error grouping. Use when user asks to fix failing tests, mentions test failures, runs test suite and failures occur, or requests to ma..."
- **testing-patterns**: "Jest testing patterns, factory functions, mocking strategies, and TDD workflow. Use when writing unit tests, creating test factories, or following TDD red-green-refactor cycle."
- **testing-qa**: "Comprehensive testing and QA workflow covering unit testing, integration testing, E2E testing, browser automation, and quality assurance."
- **unit-testing-test-generate**: "Generate comprehensive, maintainable unit tests across languages with strong coverage and edge case focus."
- **webapp-testing**: "Toolkit for interacting with and testing local web applications using Playwright. Supports verifying frontend functionality, debugging UI behavior, capturing browser screenshots, and viewing browse..."


## 🥠 Behavior
1. **Analyze & Match:** Connect user intent to the skills listed above.
2. **Read the File:** Before writing code, use your file reading tools to explicitly read the `SKILL.md` file from `.cursor/skills/[skill-name]/SKILL.md` or `.claude/skills/[skill-name]/SKILL.md`.
3. **Execute Transparently:** Apply the rules learned from the skill file seamlessly.
4. **Limits:** Keep context concise—only load 1-5 max skills per task.
