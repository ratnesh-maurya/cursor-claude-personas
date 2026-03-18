---
description: Auto-Skill Router and Manifest for SECURITY ENGINEER
globs: *
---

# 🦆 Auto-Skill Router (SECURITY ENGINEER)

As a **SECURITY ENGINEER**, you must **proactively** consult relevant local skill and agent documentation when the user asks for help, even without explicit slash commands.

## 🌯 Available Skills Library
Below is the index of available skills for your persona. When a user's intent matches one of these descriptions, you MUST explicitly read the corresponding `SKILL.md` file to load its instructions.

- **api-fuzzing-bug-bounty**: "This skill should be used when the user asks to \"test API security\", \"fuzz APIs\", \"find IDOR vulnerabilities\", \"test REST API\", \"test GraphQL\", \"API penetration testing\", \"bug b..."
- **api-security-best-practices**: "Implement secure API design patterns including authentication, authorization, input validation, rate limiting, and protection against common API vulnerabilities"
- **api-security-testing**: "API security testing workflow for REST and GraphQL APIs covering authentication, authorization, rate limiting, input validation, and security best practices."
- **attack-tree-construction**: "Build comprehensive attack trees to visualize threat paths. Use when mapping attack scenarios, identifying defense gaps, or communicating security risks to stakeholders."
- **auth-implementation-patterns**: "Master authentication and authorization patterns including JWT, OAuth2, session management, and RBAC to build secure, scalable access control systems. Use when implementing auth systems, securing A..."
- **aws-penetration-testing**: "This skill should be used when the user asks to \"pentest AWS\", \"test AWS security\", \"enumerate IAM\", \"exploit cloud infrastructure\", \"AWS privilege escalation\", \"S3 bucket testing..."
- **backend-security-coder**: Expert in secure backend coding practices specializing in input validation, authentication, and API security. Use PROACTIVELY for backend security implementations or security code reviews.
- **broken-authentication**: "This skill should be used when the user asks to \"test for broken authentication vulnerabilities\", \"assess session management security\", \"perform credential stuffing tests\", \"evaluate ..."
- **burp-suite-testing**: "This skill should be used when the user asks to \"intercept HTTP traffic\", \"modify web requests\", \"use Burp Suite for testing\", \"perform web vulnerability scanning\", \"test with Burp ..."
- **cloud-penetration-testing**: "This skill should be used when the user asks to \"perform cloud penetration testing\", \"assess Azure or AWS or GCP security\", \"enumerate cloud resources\", \"exploit cloud misconfiguratio..."
- **ethical-hacking-methodology**: "This skill should be used when the user asks to \"learn ethical hacking\", \"understand penetration testing lifecycle\", \"perform reconnaissance\", \"conduct security scanning\", \"exploit ..."
- **frontend-security-coder**: Expert in secure frontend coding practices specializing in XSS prevention, output sanitization, and client-side security patterns.
- **gdpr-data-handling**: "Implement GDPR-compliant data handling with consent management, data subject rights, and privacy by design. Use when building systems that process EU personal data, implementing privacy controls, o..."
- **linux-privilege-escalation**: "This skill should be used when the user asks to \"escalate privileges on Linux\", \"find privesc vectors on Linux systems\", \"exploit sudo misconfigurations\", \"abuse SUID binaries\", \"ex..."
- **mobile-security-coder**: Expert in secure mobile coding practices specializing in input validation, WebView security, and mobile-specific security patterns.
- **pci-compliance**: "Implement PCI DSS compliance requirements for secure handling of payment card data and payment systems. Use when securing payment processing, achieving PCI compliance, or implementing payment card ..."
- **pentest-checklist**: "This skill should be used when the user asks to \"plan a penetration test\", \"create a security assessment checklist\", \"prepare for penetration testing\", \"define pentest scope\", \"foll..."
- **privacy-by-design**: "Use when building apps that collect user data. Ensures privacy protections are built in from the start—data minimization, consent, encryption."
- **sast-configuration**: "Configure Static Application Security Testing (SAST) tools for automated vulnerability detection in application code. Use when setting up security scanning, implementing DevSecOps practices, or aut..."
- **scanning-tools**: "This skill should be used when the user asks to \"perform vulnerability scanning\", \"scan networks for open ports\", \"assess web application security\", \"scan wireless networks\", \"detec..."
- **secrets-management**: "Implement secure secrets management for CI/CD pipelines using Vault, AWS Secrets Manager, or native platform solutions. Use when handling sensitive credentials, rotating secrets, or securing CI/CD ..."
- **security-audit**: "Comprehensive security auditing workflow covering web application testing, API security, penetration testing, vulnerability scanning, and security hardening."
- **security-auditor**: Expert security auditor specializing in DevSecOps, comprehensive cybersecurity, and compliance frameworks.
- **security-requirement-extraction**: "Derive security requirements from threat models and business context. Use when translating threats into actionable requirements, creating security user stories, or building security test cases."
- **semgrep-rule-creator**: Creates custom Semgrep rules for detecting security vulnerabilities, bug patterns, and code patterns. Use when writing Semgrep rules or building custom static analysis detections.
- **senior-architect**: "Comprehensive software architecture skill for designing scalable, maintainable systems using ReactJS, NextJS, NodeJS, Express, React Native, Swift, Kotlin, Flutter, Postgres, GraphQL, Go, Python. I..."
- **software-architecture**: "Guide for quality focused software architecture. This skill should be used when users want to write code, design architecture, analyze code, in any case that relates to software development."
- **sql-injection-testing**: "This skill should be used when the user asks to \"test for SQL injection vulnerabilities\", \"perform SQLi attacks\", \"bypass authentication using SQL injection\", \"extract database inform..."
- **threat-mitigation-mapping**: "Map identified threats to appropriate security controls and mitigations. Use when prioritizing security investments, creating remediation plans, or validating control effectiveness."
- **threat-modeling-expert**: "Expert in threat modeling methodologies, security architecture review, and risk assessment. Masters STRIDE, PASTA, attack trees, and security requirement extraction. Use for security architecture r..."
- **top-web-vulnerabilities**: "This skill should be used when the user asks to \"identify web application vulnerabilities\", \"explain common security flaws\", \"understand vulnerability categories\", \"learn about inject..."
- **vulnerability-scanner**: "Advanced vulnerability analysis principles. OWASP 2025, Supply Chain Security, attack surface mapping, risk prioritization."
- **web-security-testing**: "Web application security testing workflow for OWASP Top 10 vulnerabilities including injection, XSS, authentication flaws, and access control issues."
- **xss-html-injection**: "This skill should be used when the user asks to \"test for XSS vulnerabilities\", \"perform cross-site scripting attacks\", \"identify HTML injection flaws\", \"exploit client-side injection..."


## 🥠 Behavior
1. **Analyze & Match:** Connect user intent to the skills listed above.
2. **Read the File:** Before writing code, use your file reading tools to explicitly read the `SKILL.md` file from `.cursor/skills/[skill-name]/SKILL.md` or `.claude/skills/[skill-name]/SKILL.md`.
3. **Execute Transparently:** Apply the rules learned from the skill file seamlessly.
4. **Limits:** Keep context concise—only load 1-5 max skills per task.
