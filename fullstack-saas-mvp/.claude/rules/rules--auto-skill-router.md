---
description: Auto-Skill Router and Manifest for FULLSTACK SAAS MVP
globs: *
---

# 🦆 Auto-Skill Router (FULLSTACK SAAS MVP)

As a **FULLSTACK SAAS MVP**, you must **proactively** consult relevant local skill and agent documentation when the user asks for help, even without explicit slash commands.

## 🌯 Available Skills Library
Below is the index of available skills for your persona. When a user's intent matches one of these descriptions, you MUST explicitly read the corresponding `SKILL.md` file to load its instructions.

- **analytics-tracking**: Design, audit, and improve analytics tracking systems that produce reliable, decision-ready data.
- **api-design-principles**: "Master REST and GraphQL API design principles to build intuitive, scalable, and maintainable APIs that delight developers. Use when designing new APIs, reviewing API specifications, or establishing..."
- **api-patterns**: "API design principles and decision-making. REST vs GraphQL vs tRPC selection, response formats, versioning, pagination."
- **auth-implementation-patterns**: "Master authentication and authorization patterns including JWT, OAuth2, session management, and RBAC to build secure, scalable access control systems. Use when implementing auth systems, securing A..."
- **backend-dev-guidelines**: "Opinionated backend development standards for Node.js + Express + TypeScript microservices. Covers layered architecture, BaseController pattern, dependency injection, Prisma repositories, Zod valid..."
- **database-design**: "Database design principles and decision-making. Schema design, indexing strategy, ORM selection, serverless databases."
- **deployment-procedures**: "Production deployment principles and decision-making. Safe deployment workflows, rollback strategies, and verification. Teaches thinking, not scripts."
- **docker-expert**: "Docker containerization expert with deep knowledge of multi-stage builds, image optimization, container security, Docker Compose orchestration, and production deployment patterns. Use PROACTIVELY f..."
- **e2e-testing-patterns**: "Master end-to-end testing with Playwright and Cypress to build reliable test suites that catch bugs, improve confidence, and enable fast deployment. Use when implementing E2E tests, debugging flaky..."
- **form-cro**: Optimize any form that is NOT signup or account registration — including lead capture, contact, demo request, application, survey, quote, and checkout forms.
- **frontend-developer**: Build React components, implement responsive layouts, and handle client-side state management. Masters React 19, Next.js 15, and modern frontend architecture.
- **landing-page-generator**: "Generates high-converting Next.js/React landing pages with Tailwind CSS. Uses PAS, AIDA, and BAB frameworks for optimized copy/components (Heroes, Features, Pricing). Focuses on Core Web Vitals/SEO."
- **nextjs-app-router-patterns**: "Master Next.js 14+ App Router with Server Components, streaming, parallel routes, and advanced data fetching. Use when building Next.js applications, implementing SSR/SSG, or optimizing React Serve..."
- **nextjs-best-practices**: "Next.js App Router principles. Server Components, data fetching, routing patterns."
- **nextjs-supabase-auth**: "Expert integration of Supabase Auth with Next.js App Router Use when: supabase auth next, authentication next.js, login supabase, auth middleware, protected route."
- **nodejs-backend-patterns**: "Build production-ready Node.js backend services with Express/Fastify, implementing middleware patterns, error handling, authentication, database integration, and API design best practices. Use when..."
- **nodejs-best-practices**: "Node.js development principles and decision-making. Framework selection, async patterns, security, and architecture. Teaches thinking, not copying."
- **postgres-best-practices**: "Postgres performance optimization and best practices from Supabase. Use this skill when writing, reviewing, or optimizing Postgres queries, schema designs, or database configurations."
- **postgresql**: "Design a PostgreSQL-specific schema. Covers best-practices, data types, indexing, constraints, performance patterns, and advanced features"
- **prisma-expert**: "Prisma ORM expert for schema design, migrations, query optimization, relations modeling, and database operations. Use PROACTIVELY for Prisma schema issues, migration problems, query performance, re..."
- **react-best-practices**: "React and Next.js performance optimization guidelines from Vercel Engineering. This skill should be used when writing, reviewing, or refactoring React/Next.js code to ensure optimal performance pat..."
- **react-patterns**: "Modern React patterns and principles. Hooks, composition, performance, TypeScript best practices."
- **react-state-management**: "Master modern React state management with Redux Toolkit, Zustand, Jotai, and React Query. Use when setting up global state, managing server state, or choosing between state management solutions."
- **senior-architect**: "Comprehensive software architecture skill for designing scalable, maintainable systems using ReactJS, NextJS, NodeJS, Express, React Native, Swift, Kotlin, Flutter, Postgres, GraphQL, Go, Python. I..."
- **senior-frontend**: Frontend development skill for React, Next.js, TypeScript, and Tailwind CSS applications. Use when building React components, optimizing Next.js performance, analyzing bundle sizes, scaffolding frontend projects, implementing accessibility, or reviewing frontend code quality.
- **senior-fullstack**: "Comprehensive fullstack development skill for building complete web applications with React, Next.js, Node.js, GraphQL, and PostgreSQL. Includes project scaffolding, code quality analysis, architec..."
- **seo-audit**: Diagnose and audit SEO issues affecting crawlability, indexation, rankings, and organic performance.
- **shadcn**: Manages shadcn/ui components and projects, providing context, documentation, and usage patterns for building modern design systems.
- **software-architecture**: "Guide for quality focused software architecture. This skill should be used when users want to write code, design architecture, analyze code, in any case that relates to software development."
- **stripe-integration**: "Implement Stripe payment processing for robust, PCI-compliant payment flows including checkout, subscriptions, and webhooks. Use when integrating Stripe payments, building subscription systems, or ..."
- **tailwind-patterns**: "Tailwind CSS v4 principles. CSS-first configuration, container queries, modern patterns, design token architecture."
- **tanstack-query-expert**: "Expert in TanStack Query (React Query) — asynchronous state management. Covers data fetching, stale time configuration, mutations, optimistic updates, and Next.js App Router (SSR) integration."
- **test-driven-development**: "Use when implementing any feature or bugfix, before writing implementation code"
- **testing-patterns**: "Jest testing patterns, factory functions, mocking strategies, and TDD workflow. Use when writing unit tests, creating test factories, or following TDD red-green-refactor cycle."
- **trpc-fullstack**: "Build end-to-end type-safe APIs with tRPC — routers, procedures, middleware, subscriptions, and Next.js/React integration patterns."
- **typescript-expert**: TypeScript and JavaScript expert with deep knowledge of type-level programming, performance optimization, monorepo management, migration strategies, and modern tooling.
- **typescript-pro**: Master TypeScript with advanced types, generics, and strict type safety. Handles complex type systems, decorators, and enterprise-grade patterns.
- **vercel-deployment**: "Expert knowledge for deploying to Vercel with Next.js Use when: vercel, deploy, deployment, hosting, production."
- **zod-validation-expert**: "Expert in Zod — TypeScript-first schema validation. Covers parsing, custom errors, refinements, type inference, and integration with React Hook Form, Next.js, and tRPC."
- **zustand-store-ts**: "Create Zustand stores with TypeScript, subscribeWithSelector middleware, and proper state/action separation. Use when building React state management, creating global stores, or implementing reacti..."


## 🥠 Behavior
1. **Analyze & Match:** Connect user intent to the skills listed above.
2. **Read the File:** Before writing code, use your file reading tools to explicitly read the `SKILL.md` file from `.cursor/skills/[skill-name]/SKILL.md` or `.claude/skills/[skill-name]/SKILL.md`.
3. **Execute Transparently:** Apply the rules learned from the skill file seamlessly.
4. **Limits:** Keep context concise—only load 1-5 max skills per task.
