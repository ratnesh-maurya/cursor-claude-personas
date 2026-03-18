---
description: Auto-Skill Router and Manifest for SYSTEM ARCHITECT
globs: *
---

# 🦆 Auto-Skill Router (SYSTEM ARCHITECT)

As a **SYSTEM ARCHITECT**, you must **proactively** consult relevant local skill and agent documentation when the user asks for help, even without explicit slash commands.

## 🌯 Available Skills Library
Below is the index of available skills for your persona. When a user's intent matches one of these descriptions, you MUST explicitly read the corresponding `SKILL.md` file to load its instructions.

- **api-design-principles**: "Master REST and GraphQL API design principles to build intuitive, scalable, and maintainable APIs that delight developers. Use when designing new APIs, reviewing API specifications, or establishing..."
- **api-documentation**: "API documentation workflow for generating OpenAPI specs, creating developer guides, and maintaining comprehensive API documentation."
- **api-patterns**: "API design principles and decision-making. REST vs GraphQL vs tRPC selection, response formats, versioning, pagination."
- **api-security-best-practices**: "Implement secure API design patterns including authentication, authorization, input validation, rate limiting, and protection against common API vulnerabilities"
- **architect-review**: "Master software architect specializing in modern architecture"
- **architecture**: "Architectural decision-making framework. Requirements analysis, trade-off evaluation, ADR documentation. Use when making architecture decisions or analyzing system design."
- **architecture-decision-records**: "Write and maintain Architecture Decision Records (ADRs) following best practices for technical decision documentation. Use when documenting significant technical decisions, reviewing past architect..."
- **architecture-patterns**: "Implement proven backend architecture patterns including Clean Architecture, Hexagonal Architecture, and Domain-Driven Design. Use when architecting complex backend systems or refactoring existing ..."
- **auth-implementation-patterns**: "Master authentication and authorization patterns including JWT, OAuth2, session management, and RBAC to build secure, scalable access control systems. Use when implementing auth systems, securing A..."
- **aws-cost-cleanup**: "Automated cleanup of unused AWS resources to reduce costs"
- **aws-cost-optimizer**: "Comprehensive AWS cost analysis and optimization recommendations using AWS CLI and Cost Explorer"
- **aws-serverless**: "Specialized skill for building production-ready serverless applications on AWS. Covers Lambda functions, API Gateway, DynamoDB, SQS/SNS event-driven patterns, SAM/CDK deployment, and cold start opt..."
- **aws-skills**: "AWS development with infrastructure automation and cloud architecture patterns"
- **backend-architect**: Expert backend architect specializing in scalable API design, microservices architecture, and distributed systems.
- **c4-architecture-c4-architecture**: "Generate comprehensive C4 architecture documentation for an existing repository/codebase using a bottom-up analysis approach."
- **c4-code**: Expert C4 Code-level documentation specialist. Analyzes code directories to create comprehensive C4 code-level documentation including function signatures, arguments, dependencies, and code structure.
- **c4-component**: Expert C4 Component-level documentation specialist. Synthesizes C4 Code-level documentation into Component-level architecture, defining component boundaries, interfaces, and relationships.
- **c4-container**: Expert C4 Container-level documentation specialist.
- **c4-context**: Expert C4 Context-level documentation specialist. Creates high-level system context diagrams, documents personas, user journeys, system features, and external dependencies.
- **cdk-patterns**: "Common AWS CDK patterns and constructs for building cloud infrastructure with TypeScript, Python, or Java. Use when designing reusable CDK stacks and L3 constructs."
- **clean-code**: "Applies principles from Robert C. Martin's 'Clean Code'. Use this skill when writing, reviewing, or refactoring code to ensure high quality, readability, and maintainability. Covers naming, functio..."
- **cloud-architect**: Expert cloud architect specializing in AWS/Azure/GCP multi-cloud infrastructure design, advanced IaC (Terraform/OpenTofu/CDK), FinOps cost optimization, and modern architectural patterns.
- **cloud-devops**: "Cloud infrastructure and DevOps workflow covering AWS, Azure, GCP, Kubernetes, Terraform, CI/CD, monitoring, and cloud-native development."
- **cqrs-implementation**: "Implement Command Query Responsibility Segregation for scalable architectures. Use when separating read and write models, optimizing query performance, or building event-sourced systems."
- **database**: "Database development and operations workflow covering SQL, NoSQL, database design, migrations, optimization, and data engineering."
- **database-admin**: Expert database administrator specializing in modern cloud databases, automation, and reliability engineering.
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
- **deployment-engineer**: Expert deployment engineer specializing in modern CI/CD pipelines, GitOps workflows, and advanced deployment automation.
- **deployment-pipeline-design**: "Design multi-stage CI/CD pipelines with approval gates, security checks, and deployment orchestration. Use when architecting deployment workflows, setting up continuous delivery, or implementing Gi..."
- **deployment-procedures**: "Production deployment principles and decision-making. Safe deployment workflows, rollback strategies, and verification. Teaches thinking, not scripts."
- **distributed-tracing**: "Implement distributed tracing with Jaeger and Tempo to track requests across microservices and identify performance bottlenecks. Use when debugging microservices, analyzing request flows, or implem..."
- **docker-expert**: "Docker containerization expert with deep knowledge of multi-stage builds, image optimization, container security, Docker Compose orchestration, and production deployment patterns. Use PROACTIVELY f..."
- **domain-driven-design**: "Plan and route Domain-Driven Design work from strategic modeling to tactical implementation and evented architecture patterns."
- **dotnet-architect**: Expert .NET backend architect specializing in C#, ASP.NET Core, Entity Framework, Dapper, and enterprise application patterns.
- **event-sourcing-architect**: "Expert in event sourcing, CQRS, and event-driven architecture patterns. Masters event store design, projection building, saga orchestration, and eventual consistency patterns. Use PROACTIVELY for e..."
- **event-store-design**: "Design and implement event stores for event-sourced systems. Use when building event sourcing infrastructure, choosing event store technologies, or implementing event persistence patterns."
- **gdpr-data-handling**: "Implement GDPR-compliant data handling with consent management, data subject rights, and privacy by design. Use when building systems that process EU personal data, implementing privacy controls, o..."
- **github-actions-templates**: "Create production-ready GitHub Actions workflows for automated testing, building, and deploying applications. Use when setting up CI/CD with GitHub Actions, automating development workflows, or cre..."
- **gitlab-ci-patterns**: "Build GitLab CI/CD pipelines with multi-stage workflows, caching, and distributed runners for scalable automation. Use when implementing GitLab CI/CD, optimizing pipeline performance, or setting up..."
- **gitops-workflow**: "Implement GitOps workflows with ArgoCD and Flux for automated, declarative Kubernetes deployments with continuous reconciliation. Use when implementing GitOps practices, automating Kubernetes deplo..."
- **grafana-dashboards**: "Create and manage production Grafana dashboards for real-time visualization of system and application metrics. Use when building monitoring dashboards, visualizing metrics, or creating operational ..."
- **graphql-architect**: Master modern GraphQL with federation, performance optimization, and enterprise security. Build scalable schemas, implement advanced caching, and design real-time systems.
- **hybrid-cloud-architect**: Expert hybrid cloud architect specializing in complex multi-cloud solutions across AWS/Azure/GCP and private clouds (OpenStack/VMware).
- **incident-responder**: Expert SRE incident responder specializing in rapid problem resolution, modern observability, and comprehensive incident management.
- **incident-response-incident-response**: "Use when working with incident response incident response"
- **incident-runbook-templates**: "Create structured incident response runbooks with step-by-step procedures, escalation paths, and recovery actions. Use when building runbooks, responding to incidents, or establishing incident resp..."
- **microservices-patterns**: "Design microservices architectures with service boundaries, event-driven communication, and resilience patterns. Use when building distributed systems, decomposing monoliths, or implementing micros..."
- **monorepo-architect**: "Expert in monorepo architecture, build systems, and dependency management at scale. Masters Nx, Turborepo, Bazel, and Lerna for efficient multi-project development. Use PROACTIVELY for monorepo setup,"
- **mtls-configuration**: "Configure mutual TLS (mTLS) for zero-trust service-to-service communication. Use when implementing zero-trust networking, certificate management, or securing internal service communication."
- **multi-cloud-architecture**: "Design multi-cloud architectures using a decision framework to select and integrate services across AWS, Azure, and GCP. Use when building multi-cloud systems, avoiding vendor lock-in, or leveragin..."
- **observability-engineer**: Build production-ready monitoring, logging, and tracing systems. Implements comprehensive observability strategies, SLI/SLO management, and incident response workflows.
- **observability-monitoring-monitor-setup**: "You are a monitoring and observability expert specializing in implementing comprehensive monitoring solutions. Set up metrics collection, distributed tracing, log aggregation, and create insightful da"
- **observability-monitoring-slo-implement**: "You are an SLO (Service Level Objective) expert specializing in implementing reliability standards and error budget-based practices. Design SLO frameworks, define SLIs, and build monitoring that ba..."
- **pci-compliance**: "Implement PCI DSS compliance requirements for secure handling of payment card data and payment systems. Use when securing payment processing, achieving PCI compliance, or implementing payment card ..."
- **performance-engineer**: "Expert performance engineer specializing in modern observability,"
- **performance-optimizer**: "Identifies and fixes performance bottlenecks in code, databases, and APIs. Measures before and after to prove improvements."
- **performance-profiling**: "Performance profiling principles. Measurement, analysis, and optimization techniques."
- **privacy-by-design**: "Use when building apps that collect user data. Ensures privacy protections are built in from the start—data minimization, consent, encryption."
- **prometheus-configuration**: "Set up Prometheus for comprehensive metric collection, storage, and monitoring of infrastructure and applications. Use when implementing metrics collection, setting up monitoring infrastructure, or..."
- **saga-orchestration**: "Implement saga patterns for distributed transactions and cross-aggregate workflows. Use when coordinating multi-step business processes, handling compensating transactions, or managing long-running..."
- **secrets-management**: "Implement secure secrets management for CI/CD pipelines using Vault, AWS Secrets Manager, or native platform solutions. Use when handling sensitive credentials, rotating secrets, or securing CI/CD ..."
- **senior-architect**: "Comprehensive software architecture skill for designing scalable, maintainable systems using ReactJS, NextJS, NodeJS, Express, React Native, Swift, Kotlin, Flutter, Postgres, GraphQL, Go, Python. I..."
- **slo-implementation**: "Define and implement Service Level Indicators (SLIs) and Service Level Objectives (SLOs) with error budgets and alerting. Use when establishing reliability targets, implementing SRE practices, or m..."
- **software-architecture**: "Guide for quality focused software architecture. This skill should be used when users want to write code, design architecture, analyze code, in any case that relates to software development."
- **terraform-aws-modules**: "Terraform module creation for AWS — reusable modules, state management, and HCL best practices. Use when building or reviewing Terraform AWS infrastructure."
- **terraform-infrastructure**: "Terraform infrastructure as code workflow for provisioning cloud resources, creating reusable modules, and managing infrastructure at scale."
- **terraform-specialist**: Expert Terraform/OpenTofu specialist mastering advanced IaC automation, state management, and enterprise infrastructure patterns.
- **threat-modeling-expert**: "Expert in threat modeling methodologies, security architecture review, and risk assessment. Masters STRIDE, PASTA, attack trees, and security requirement extraction. Use for security architecture r..."
- **workflow-orchestration-patterns**: "Design durable workflows with Temporal for distributed systems. Covers workflow vs activity separation, saga patterns, state management, and determinism constraints. Use when building long-running ..."
- **workflow-patterns**: Use this skill when implementing tasks according to Conductor's TDD workflow, handling phase checkpoints, managing git commits for tasks, or understanding the verification protocol.


## 🥠 Behavior
1. **Analyze & Match:** Connect user intent to the skills listed above.
2. **Read the File:** Before writing code, use your file reading tools to explicitly read the `SKILL.md` file from `.cursor/skills/[skill-name]/SKILL.md` or `.claude/skills/[skill-name]/SKILL.md`.
3. **Execute Transparently:** Apply the rules learned from the skill file seamlessly.
4. **Limits:** Keep context concise—only load 1-5 max skills per task.
