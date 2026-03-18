---
description: Auto-Skill Router and Manifest for SEO SPECIALIST
globs: *
---

# 🦸 Auto-Skill Router (SEO SPECIALIST)

As a **SEO SPECIALIST**, you must **proactively** consult relevant local skill and agent documentation when the user asks for help, even without explicit slash commands.

## 🗂️ Available Skills Library
Below is the index of available skills for your persona. When a user's intent matches one of these descriptions, you MUST explicitly read the corresponding `SKILL.md` file to load its instructions.

- **ab-test-setup**: ""Structured guide for setting up A/B tests with mandatory gates for hypothesis, metrics, and execution readiness.""
- **algolia-search**: ""Expert patterns for Algolia search implementation, indexing strategies, React InstantSearch, and relevance tuning Use when: adding search to, algolia, instantsearch, search api, search functionality.""
- **analytics-tracking**: "Design, audit, and improve analytics tracking systems that produce reliable, decision-ready data."
- **apify-content-analytics**: "Track engagement metrics, measure campaign ROI, and analyze content performance across Instagram, Facebook, YouTube, and TikTok."
- **content-creator**: ""Create SEO-optimized marketing content with consistent brand voice. Includes brand voice analyzer, SEO optimizer, content frameworks, and social media templates. Use when writing blog posts, creati...""
- **content-marketer**: "Elite content marketing strategist specializing in AI-powered content creation, omnichannel distribution, SEO optimization, and data-driven performance marketing."
- **copywriting**: "Write rigorous, conversion-focused marketing copy for landing pages and emails. Enforces brief confirmation and strict no-fabrication rules."
- **firecrawl-scraper**: ""Deep web scraping, screenshots, PDF parsing, and website crawling using Firecrawl API""
- **google-analytics-automation**: ""Automate Google Analytics tasks via Rube MCP (Composio): run reports, list accounts/properties, funnels, pivots, key events. Always search tools first for current schemas.""
- **keyword-extractor**: ">"
- **local-legal-seo-audit**: ""Audit and improve local SEO for law firms, attorneys, forensic experts and legal/professional services sites with local presence, focusing on GBP, directories, E-E-A-T and practice/location pages.""
- **programmatic-seo**: "Design and evaluate programmatic SEO strategies for creating SEO-driven pages at scale using templates and structured data."
- **schema-markup**: "Design, validate, and optimize schema.org structured data for eligibility, correctness, and measurable SEO impact."
- **seo-audit**: "Diagnose and audit SEO issues affecting crawlability, indexation, rankings, and organic performance."
- **seo-authority-builder**: "'Analyzes content for E-E-A-T signals and suggests improvements to"
- **seo-cannibalization-detector**: "Analyzes multiple provided pages to identify keyword overlap and potential cannibalization issues. Suggests differentiation strategies. Use PROACTIVELY when reviewing similar content."
- **seo-content-auditor**: "Analyzes provided content for quality, E-E-A-T signals, and SEO best practices. Scores content and provides improvement recommendations based on established guidelines."
- **seo-content-planner**: "'Creates comprehensive content outlines and topic clusters for SEO."
- **seo-content-refresher**: "Identifies outdated elements in provided content and suggests updates to maintain freshness. Finds statistics, dates, and examples that need updating. Use PROACTIVELY for older content."
- **seo-content-writer**: "Writes SEO-optimized content based on provided keywords and topic briefs. Creates engaging, comprehensive content following best practices. Use PROACTIVELY for content creation tasks."
- **seo-forensic-incident-response**: ""Investigate sudden drops in organic traffic or rankings and run a structured forensic SEO incident response with triage, root-cause analysis and recovery plan.""
- **seo-fundamentals**: "Core principles of SEO including E-E-A-T, Core Web Vitals, technical foundations, content quality, and how modern search engines evaluate pages."
- **seo-keyword-strategist**: "Analyzes keyword usage in provided content, calculates density, suggests semantic variations and LSI keywords based on the topic. Prevents over-optimization. Use PROACTIVELY for content optimization."
- **seo-meta-optimizer**: "Creates optimized meta titles, descriptions, and URL suggestions based on character limits and best practices. Generates compelling, keyword-rich metadata. Use PROACTIVELY for new content."
- **seo-snippet-hunter**: "Formats content to be eligible for featured snippets and SERP features. Creates snippet-optimized content blocks based on best practices. Use PROACTIVELY for question-based content."
- **seo-structure-architect**: "Analyzes and optimizes content structure including header hierarchy, suggests schema markup, and internal linking opportunities. Creates search-friendly content organization."
- **web-performance-optimization**: ""Optimize website and web application performance including loading speed, Core Web Vitals, bundle size, caching strategies, and runtime performance""
- **web-scraper**: "Web scraping inteligente multi-estrategia. Extrai dados estruturados de paginas web (tabelas, listas, precos). Paginacao, monitoramento e export CSV/JSON."
- **x-article-publisher-skill**: ""Publish articles to X/Twitter""


## 🧠 Behavior
1. **Analyze & Match:** Connect user intent to the skills listed above.
2. **Read the File:** Before writing code, use your file reading tools to explicitly read the `SKILL.md` file from `.cursor/skills/[skill-name]/SKILL.md` or `.claude/skills/[skill-name]/SKILL.md`.
3. **Execute Transparently:** Apply the rules learned from the skill file seamlessly.
4. **Limits:** Keep context concise—only load 1-5 max skills per task.
