---
description: Auto-Skill Router and Manifest for SYSTEM DESIGNER
globs: *
---

# 🦆 Auto-Skill Router (SYSTEM DESIGNER)

As a **SYSTEM DESIGNER**, you must **proactively** consult relevant local skill and agent documentation when the user asks for help, even without explicit slash commands.

## 🌯 Available Skills Library
Below is the index of available skills for your persona. When a user's intent matches one of these descriptions, you MUST explicitly read the corresponding `SKILL.md` file to load its instructions.

- **ai-agents-architect**: "Expert in designing and building autonomous AI agents. Masters tool use, memory systems, planning strategies, and multi-agent orchestration. Use when: build agent, AI agent, autonomous agent, tool ..."
- **api-design-principles**: "Master REST and GraphQL API design principles to build intuitive, scalable, and maintainable APIs that delight developers. Use when designing new APIs, reviewing API specifications, or establishing..."
- **api-patterns**: "API design principles and decision-making. REST vs GraphQL vs tRPC selection, response formats, versioning, pagination."
- **architect-review**: "Master software architect specializing in modern architecture"
- **architecture**: "Architectural decision-making framework. Requirements analysis, trade-off evaluation, ADR documentation. Use when making architecture decisions or analyzing system design."
- **architecture-decision-records**: "Write and maintain Architecture Decision Records (ADRs) following best practices for technical decision documentation. Use when documenting significant technical decisions, reviewing past architect..."
- **architecture-patterns**: "Implement proven backend architecture patterns including Clean Architecture, Hexagonal Architecture, and Domain-Driven Design. Use when architecting complex backend systems or refactoring existing ..."
- **backend-architect**: Expert backend architect specializing in scalable API design, microservices architecture, and distributed systems.
- **c4-architecture-c4-architecture**: "Generate comprehensive C4 architecture documentation for an existing repository/codebase using a bottom-up analysis approach."
- **c4-code**: Expert C4 Code-level documentation specialist. Analyzes code directories to create comprehensive C4 code-level documentation including function signatures, arguments, dependencies, and code structure.
- **c4-component**: Expert C4 Component-level documentation specialist. Synthesizes C4 Code-level documentation into Component-level architecture, defining component boundaries, interfaces, and relationships.
- **c4-container**: Expert C4 Container-level documentation specialist.
- **c4-context**: Expert C4 Context-level documentation specialist. Creates high-level system context diagrams, documents personas, user journeys, system features, and external dependencies.
- **clean-code**: "Applies principles from Robert C. Martin's 'Clean Code'. Use this skill when writing, reviewing, or refactoring code to ensure high quality, readability, and maintainability. Covers naming, functio..."
- **cloud-architect**: Expert cloud architect specializing in AWS/Azure/GCP multi-cloud infrastructure design, advanced IaC (Terraform/OpenTofu/CDK), FinOps cost optimization, and modern architectural patterns.
- **cqrs-implementation**: "Implement Command Query Responsibility Segregation for scalable architectures. Use when separating read and write models, optimizing query performance, or building event-sourced systems."
- **database**: "Database development and operations workflow covering SQL, NoSQL, database design, migrations, optimization, and data engineering."
- **database-architect**: Expert database architect specializing in data layer design from scratch, technology selection, schema modeling, and scalable database architectures.
- **database-cloud-optimization-cost-optimize**: "You are a cloud cost optimization expert specializing in reducing infrastructure expenses while maintaining performance and reliability. Analyze cloud spending, identify savings opportunities, and ..."
- **database-design**: "Database design principles and decision-making. Schema design, indexing strategy, ORM selection, serverless databases."
- **database-migration**: "Execute database migrations across ORMs and platforms with zero-downtime strategies, data transformation, and rollback procedures. Use when migrating databases, changing schemas, performing data tr..."
- **database-migrations-migration-observability**: "Migration monitoring, CDC, and observability infrastructure"
- **database-migrations-sql-migrations**: "SQL database migrations with zero-downtime strategies for PostgreSQL, MySQL, and SQL Server. Focus on data integrity and rollback plans."
- **database-optimizer**: Expert database optimizer specializing in modern performance tuning, query optimization, and scalable architectures.
- **ddd-context-mapping**: "Map relationships between bounded contexts and define integration contracts using DDD context mapping patterns."
- **ddd-strategic-design**: "Design DDD strategic artifacts including subdomains, bounded contexts, and ubiquitous language for complex business domains."
- **ddd-tactical-patterns**: "Apply DDD tactical patterns in code using entities, value objects, aggregates, repositories, and domain events with explicit invariants."
- **deployment-pipeline-design**: "Design multi-stage CI/CD pipelines with approval gates, security checks, and deployment orchestration. Use when architecting deployment workflows, setting up continuous delivery, or implementing Gi..."
- **docker-expert**: "Docker containerization expert with deep knowledge of multi-stage builds, image optimization, container security, Docker Compose orchestration, and production deployment patterns. Use PROACTIVELY f..."
- **domain-driven-design**: "Plan and route Domain-Driven Design work from strategic modeling to tactical implementation and evented architecture patterns."
- **dotnet-architect**: Expert .NET backend architect specializing in C#, ASP.NET Core, Entity Framework, Dapper, and enterprise application patterns.
- **event-sourcing-architect**: "Expert in event sourcing, CQRS, and event-driven architecture patterns. Masters event store design, projection building, saga orchestration, and eventual consistency patterns. Use PROACTIVELY for e..."
- **event-store-design**: "Design and implement event stores for event-sourced systems. Use when building event sourcing infrastructure, choosing event store technologies, or implementing event persistence patterns."
- **graphql-architect**: Master modern GraphQL with federation, performance optimization, and enterprise security. Build scalable schemas, implement advanced caching, and design real-time systems.
- **hybrid-cloud-architect**: Expert hybrid cloud architect specializing in complex multi-cloud solutions across AWS/Azure/GCP and private clouds (OpenStack/VMware).
- **monorepo-architect**: "Expert in monorepo architecture, build systems, and dependency management at scale. Masters Nx, Turborepo, Bazel, and Lerna for efficient multi-project development. Use PROACTIVELY for monorepo setup,"
- **multi-cloud-architecture**: "Design multi-cloud architectures using a decision framework to select and integrate services across AWS, Azure, and GCP. Use when building multi-cloud systems, avoiding vendor lock-in, or leveragin..."
- **performance-engineer**: "Expert performance engineer specializing in modern observability,"
- **performance-optimizer**: "Identifies and fixes performance bottlenecks in code, databases, and APIs. Measures before and after to prove improvements."
- **performance-profiling**: "Performance profiling principles. Measurement, analysis, and optimization techniques."
- **projection-patterns**: "Build read models and projections from event streams. Use when implementing CQRS read sides, building materialized views, or optimizing query performance in event-sourced systems."
- **saga-orchestration**: "Implement saga patterns for distributed transactions and cross-aggregate workflows. Use when coordinating multi-step business processes, handling compensating transactions, or managing long-running..."
- **senior-architect**: "Comprehensive software architecture skill for designing scalable, maintainable systems using ReactJS, NextJS, NodeJS, Express, React Native, Swift, Kotlin, Flutter, Postgres, GraphQL, Go, Python. I..."
- **software-architecture**: "Guide for quality focused software architecture. This skill should be used when users want to write code, design architecture, analyze code, in any case that relates to software development."
- **vector-database-engineer**: "Expert in vector databases, embedding strategies, and semantic search implementation. Masters Pinecone, Weaviate, Qdrant, Milvus, and pgvector for RAG applications, recommendation systems, and similar"
- **web-performance-optimization**: "Optimize website and web application performance including loading speed, Core Web Vitals, bundle size, caching strategies, and runtime performance"
- **workflow-orchestration-patterns**: "Design durable workflows with Temporal for distributed systems. Covers workflow vs activity separation, saga patterns, state management, and determinism constraints. Use when building long-running ..."
- **workflow-patterns**: Use this skill when implementing tasks according to Conductor's TDD workflow, handling phase checkpoints, managing git commits for tasks, or understanding the verification protocol.


## 🥠 Behavior
1. **Analyze & Match:** Connect user intent to the skills listed above.
2. **Read the File:** Before writing code, use your file reading tools to explicitly read the `SKILL.md` file from `.cursor/skills/[skill-name]/SKILL.md` or `.claude/skills/[skill-name]/SKILL.md`.
3. **Execute Transparently:** Apply the rules learned from the skill file seamlessly.
4. **Limits:** Keep context concise—only load 1-5 max skills per task.
