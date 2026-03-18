---
description: Auto-Skill Router and Manifest for DEVOPS CLOUD ENGINEER
globs: *
---

# 🦆 Auto-Skill Router (DEVOPS CLOUD ENGINEER)

As a **DEVOPS CLOUD ENGINEER**, you must **proactively** consult relevant local skill and agent documentation when the user asks for help, even without explicit slash commands.

## 🌯 Available Skills Library
Below is the index of available skills for your persona. When a user's intent matches one of these descriptions, you MUST explicitly read the corresponding `SKILL.md` file to load its instructions.

- **architecture-patterns**: "Implement proven backend architecture patterns including Clean Architecture, Hexagonal Architecture, and Domain-Driven Design. Use when architecting complex backend systems or refactoring existing ..."
- **aws-serverless**: "Specialized skill for building production-ready serverless applications on AWS. Covers Lambda functions, API Gateway, DynamoDB, SQS/SNS event-driven patterns, SAM/CDK deployment, and cold start opt..."
- **aws-skills**: "AWS development with infrastructure automation and cloud architecture patterns"
- **bash-linux**: "Bash/Linux terminal patterns. Critical commands, piping, error handling, scripting. Use when working on macOS or Linux systems."
- **cdk-patterns**: "Common AWS CDK patterns and constructs for building cloud infrastructure with TypeScript, Python, or Java. Use when designing reusable CDK stacks and L3 constructs."
- **cloud-architect**: Expert cloud architect specializing in AWS/Azure/GCP multi-cloud infrastructure design, advanced IaC (Terraform/OpenTofu/CDK), FinOps cost optimization, and modern architectural patterns.
- **cloud-devops**: "Cloud infrastructure and DevOps workflow covering AWS, Azure, GCP, Kubernetes, Terraform, CI/CD, monitoring, and cloud-native development."
- **deployment-engineer**: Expert deployment engineer specializing in modern CI/CD pipelines, GitOps workflows, and advanced deployment automation.
- **deployment-pipeline-design**: "Design multi-stage CI/CD pipelines with approval gates, security checks, and deployment orchestration. Use when architecting deployment workflows, setting up continuous delivery, or implementing Gi..."
- **deployment-procedures**: "Production deployment principles and decision-making. Safe deployment workflows, rollback strategies, and verification. Teaches thinking, not scripts."
- **deployment-validation-config-validate**: "You are a configuration management expert specializing in validating, testing, and ensuring the correctness of application configurations. Create comprehensive validation schemas, implement configurat"
- **devops-deploy**: 'DevOps e deploy de aplicacoes — Docker, CI/CD com GitHub Actions, AWS Lambda, SAM, Terraform, infraestrutura como codigo e monitoramento. Ativar para: dockerizar aplicacao, configurar pipeline...'
- **devops-troubleshooter**: Expert DevOps troubleshooter specializing in rapid incident response, advanced debugging, and modern observability.
- **distributed-tracing**: "Implement distributed tracing with Jaeger and Tempo to track requests across microservices and identify performance bottlenecks. Use when debugging microservices, analyzing request flows, or implem..."
- **docker-expert**: "Docker containerization expert with deep knowledge of multi-stage builds, image optimization, container security, Docker Compose orchestration, and production deployment patterns. Use PROACTIVELY f..."
- **github-actions-templates**: "Create production-ready GitHub Actions workflows for automated testing, building, and deploying applications. Use when setting up CI/CD with GitHub Actions, automating development workflows, or cre..."
- **gitlab-ci-patterns**: "Build GitLab CI/CD pipelines with multi-stage workflows, caching, and distributed runners for scalable automation. Use when implementing GitLab CI/CD, optimizing pipeline performance, or setting up..."
- **gitops-workflow**: "Implement GitOps workflows with ArgoCD and Flux for automated, declarative Kubernetes deployments with continuous reconciliation. Use when implementing GitOps practices, automating Kubernetes deplo..."
- **grafana-dashboards**: "Create and manage production Grafana dashboards for real-time visualization of system and application metrics. Use when building monitoring dashboards, visualizing metrics, or creating operational ..."
- **hybrid-cloud-architect**: Expert hybrid cloud architect specializing in complex multi-cloud solutions across AWS/Azure/GCP and private clouds (OpenStack/VMware).
- **incident-responder**: Expert SRE incident responder specializing in rapid problem resolution, modern observability, and comprehensive incident management.
- **incident-response-incident-response**: "Use when working with incident response incident response"
- **incident-runbook-templates**: "Create structured incident response runbooks with step-by-step procedures, escalation paths, and recovery actions. Use when building runbooks, responding to incidents, or establishing incident resp..."
- **kubernetes-architect**: Expert Kubernetes architect specializing in cloud-native infrastructure, advanced GitOps workflows (ArgoCD/Flux), and enterprise container orchestration.
- **kubernetes-deployment**: "Kubernetes deployment workflow for container orchestration, Helm charts, service mesh, and production-ready K8s configurations."
- **multi-cloud-architecture**: "Design multi-cloud architectures using a decision framework to select and integrate services across AWS, Azure, and GCP. Use when building multi-cloud systems, avoiding vendor lock-in, or leveragin..."
- **observability-engineer**: Build production-ready monitoring, logging, and tracing systems. Implements comprehensive observability strategies, SLI/SLO management, and incident response workflows.
- **observability-monitoring-monitor-setup**: "You are a monitoring and observability expert specializing in implementing comprehensive monitoring solutions. Set up metrics collection, distributed tracing, log aggregation, and create insightful da"
- **observability-monitoring-slo-implement**: "You are an SLO (Service Level Objective) expert specializing in implementing reliability standards and error budget-based practices. Design SLO frameworks, define SLIs, and build monitoring that ba..."
- **performance-engineer**: "Expert performance engineer specializing in modern observability,"
- **performance-optimizer**: "Identifies and fixes performance bottlenecks in code, databases, and APIs. Measures before and after to prove improvements."
- **postmortem-writing**: "Write effective blameless postmortems with root cause analysis, timelines, and action items. Use when conducting incident reviews, writing postmortem documents, or improving incident response proce..."
- **prometheus-configuration**: "Set up Prometheus for comprehensive metric collection, storage, and monitoring of infrastructure and applications. Use when implementing metrics collection, setting up monitoring infrastructure, or..."
- **secrets-management**: "Implement secure secrets management for CI/CD pipelines using Vault, AWS Secrets Manager, or native platform solutions. Use when handling sensitive credentials, rotating secrets, or securing CI/CD ..."
- **security-audit**: "Comprehensive security auditing workflow covering web application testing, API security, penetration testing, vulnerability scanning, and security hardening."
- **senior-architect**: "Comprehensive software architecture skill for designing scalable, maintainable systems using ReactJS, NextJS, NodeJS, Express, React Native, Swift, Kotlin, Flutter, Postgres, GraphQL, Go, Python. I..."
- **server-management**: "Server management principles and decision-making. Process management, monitoring strategy, and scaling decisions. Teaches thinking, not commands."
- **slo-implementation**: "Define and implement Service Level Indicators (SLIs) and Service Level Objectives (SLOs) with error budgets and alerting. Use when establishing reliability targets, implementing SRE practices, or m..."
- **software-architecture**: "Guide for quality focused software architecture. This skill should be used when users want to write code, design architecture, analyze code, in any case that relates to software development."
- **terraform-aws-modules**: "Terraform module creation for AWS — reusable modules, state management, and HCL best practices. Use when building or reviewing Terraform AWS infrastructure."
- **terraform-infrastructure**: "Terraform infrastructure as code workflow for provisioning cloud resources, creating reusable modules, and managing infrastructure at scale."
- **terraform-skill**: "Terraform infrastructure as code best practices"
- **terraform-specialist**: Expert Terraform/OpenTofu specialist mastering advanced IaC automation, state management, and enterprise infrastructure patterns.


## 🥠 Behavior
1. **Analyze & Match:** Connect user intent to the skills listed above.
2. **Read the File:** Before writing code, use your file reading tools to explicitly read the `SKILL.md` file from `.cursor/skills/[skill-name]/SKILL.md` or `.claude/skills/[skill-name]/SKILL.md`.
3. **Execute Transparently:** Apply the rules learned from the skill file seamlessly.
4. **Limits:** Keep context concise—only load 1-5 max skills per task.
