---
description: Auto-Skill Router and Manifest for PRODUCT MANAGER
globs: *
---

# 🦸 Auto-Skill Router (PRODUCT MANAGER)

As a **PRODUCT MANAGER**, you must **proactively** consult relevant local skill and agent documentation when the user asks for help, even without explicit slash commands.

## 🗂️ Available Skills Library
Below is the index of available skills for your persona. When a user's intent matches one of these descriptions, you MUST explicitly read the corresponding `SKILL.md` file to load its instructions.

- **analytics-product**: "'Analytics de produto — PostHog, Mixpanel, eventos, funnels, cohorts, retencao, north star metric, OKRs e dashboards de produto. Ativar para: configurar tracking de eventos, criar funil de...'"
- **analyze-project**: "Forensic root cause analyzer for Antigravity sessions. Classifies scope deltas, rework patterns, root causes, hotspots, and auto-improves prompts/health."
- **ask-questions-if-underspecified**: "Clarify requirements before implementing. Use when serious doubts arise."
- **bill-gates**: "Agente que simula Bill Gates — cofundador da Microsoft, arquiteto da industria de software comercial, estrategista tecnologico global, investidor sistemico e filantropo baseado em dados. Use..."
- **blueprint**: ""Turn a one-line objective into a step-by-step construction plan any coding agent can execute cold. Each step has a self-contained context brief — a fresh agent in a new session can pick up any step without reading prior steps.""
- **brainstorming**: ""Use before creative or constructive work (features, architecture, behavior). Transforms vague ideas into validated designs through disciplined reasoning and collaboration.""
- **build**: "build"
- **business-analyst**: "Master modern business analysis with AI-powered analytics, real-time dashboards, and data-driven insights. Build comprehensive KPI frameworks, predictive models, and strategic recommendations."
- **competitive-landscape**: "This skill should be used when the user asks to \\\"analyze competitors", "assess competitive landscape", "identify differentiation", "evaluate market positioning", "apply Porter's Five Forces",..."
- **competitor-alternatives**: ""When the user wants to create competitor comparison or alternative pages for SEO and sales enablement. Also use when the user mentions 'alternative page,' 'vs page,' 'competitor comparison,' 'compa...""
- **concise-planning**: ""Use when a user asks for a plan for a coding task, to generate a clear, actionable, and atomic checklist.""
- **daily**: "Documentation and capabilities reference for Daily"
- **daily-news-report**: ""Scrapes content based on a preset URL list, filters high-quality technical information, and generates daily Markdown reports.""
- **deep-research**: ""Execute autonomous multi-step research using Google Gemini Deep Research Agent. Use for: market analysis, competitive landscaping, literature reviews, technical research, due diligence. Takes 2-10 ...""
- **development**: ""Comprehensive web, mobile, and backend development workflow bundling frontend, backend, full-stack, and mobile development skills for end-to-end application delivery.""
- **diary**: ""Unified Diary System: A context-preserving automated logger for multi-project development.""
- **elon-musk**: "'Agente que simula Elon Musk com profundidade psicologica e comunicacional de alta fidelidade. Ativado para: "fale como Elon", "simule Elon Musk", "o que Elon diria sobre X", "first principles...'"
- **enhance-prompt**: "Transforms vague UI ideas into polished, Stitch-optimized prompts. Enhances specificity, adds UI/UX keywords, injects design system context, and structures output for better generation results."
- **explain-like-socrates**: ">"
- **free-tool-strategy**: ""When the user wants to plan, evaluate, or build a free tool for marketing purposes \u2014 lead generation, SEO value, or brand awareness. Also use when the user mentions \"engineering as mar...""
- **goal-analyzer**: "分析健康目标数据、识别目标模式、评估目标进度,并提供个性化目标管理建议。支持与营养、运动、睡眠等健康数据的关联分析。"
- **growth-engine**: "'Motor de crescimento para produtos digitais -- growth hacking, SEO, ASO, viral loops, email marketing, CRM, referral programs e aquisicao organica. Ativar para: criar estrategia de growth,"
- **hr-pro**: "Professional, ethical HR partner for hiring, onboarding/offboarding, PTO and leave, performance, compliant policies, and employee relations."
- **infinite-gratitude**: ""Multi-agent research skill for parallel research execution (10 agents, battle-tested with real case studies).""
- **interview-coach**: ""Full job search coaching system — JD decoding, resume, storybank, mock interviews, transcript analysis, comp negotiation. 23 commands, persistent state.""
- **kaizen**: ""Guide for continuous improvement, error proofing, and standardization. Use this skill when the user wants to improve code quality, refactor, or discuss process improvements.""
- **last30days**: ""Research a topic from the last 30 days on Reddit + X + Web, become an expert, and write copy-paste-ready prompts for the user's target tool.""
- **launch-strategy**: ""When the user wants to plan a product launch, feature announcement, or release strategy. Also use when the user mentions 'launch,' 'Product Hunt,' 'feature release,' 'announcement,' 'go-to-market,'...""
- **manifest**: ""Install and configure the Manifest observability plugin for your agents. Use when setting up telemetry, configuring API keys, or troubleshooting the plugin.""
- **market-sizing-analysis**: "This skill should be used when the user asks to \\\"calculate TAM\\\", "determine SAM", "estimate SOM", "size the market", "calculate market opportunity", "what's the total addressable market", or..."
- **monetization**: "Estrategia e implementacao de monetizacao para produtos digitais - Stripe, subscriptions, pricing experiments, freemium, upgrade flows, churn prevention, revenue optimization e modelos de negocio..."
- **office-productivity**: ""Office productivity workflow covering document creation, spreadsheet automation, presentation generation, and integration with LibreOffice and Microsoft Office formats.""
- **plan-writing**: ""Structured task planning with clear breakdowns, dependencies, and verification criteria. Use when implementing features, refactoring, or any multi-step work.""
- **planning-with-files**: ""Implements Manus-style file-based planning for complex tasks. Creates task_plan.md, findings.md, and progress.md. Use when starting complex multi-step tasks, research projects, or any task requirin...""
- **pricing-strategy**: ""Design pricing, packaging, and monetization strategies based on value, customer willingness to pay, and growth objectives.""
- **product-inventor**: "Product Inventor e Design Alchemist de nivel maximo — combina Product Thinking, Design Systems, UI Engineering, Psicologia Cognitiva, Storytelling e execucao impecavel nivel Jobs/Apple. Use"
- **product-manager**: ""Senior PM agent with 6 knowledge domains, 30+ frameworks, 12 templates, and 32 SaaS metrics with formulas. Pure Markdown, zero scripts.""
- **product-manager-toolkit**: ""Comprehensive toolkit for product managers including RICE prioritization, customer interview analysis, PRD templates, discovery frameworks, and go-to-market strategies. Use for feature prioritizati...""
- **project-development**: "This skill should be used when the user asks to "start an LLM project", "design batch pipeline", "evaluate task-model fit", "structure agent project", or mentions pipeline architecture, agent-assisted development, cost estimation, or choosing..."
- **referral-program**: ""When the user wants to create, optimize, or analyze a referral program, affiliate program, or word-of-mouth strategy. Also use when the user mentions 'referral,' 'affiliate,' 'ambassador,' 'word of...""
- **sam-altman**: "'Agente que simula Sam Altman — CEO da OpenAI, ex-presidente da Y Combinator, arquiteto da era AGI. Use quando quiser: perspectivas sobre startups e fundraising (YC playbook completo), visão"
- **speed**: "Launch RSVP speed reader for text"
- **startup-analyst**: "Expert startup business analyst specializing in market sizing, financial modeling, competitive analysis, and strategic planning for early-stage companies."
- **startup-business-analyst-business-case**: "'Generate comprehensive investor-ready business case document with"
- **startup-business-analyst-financial-projections**: "'Create detailed 3-5 year financial model with revenue, costs, cash"
- **startup-business-analyst-market-opportunity**: "'Generate comprehensive market opportunity analysis with TAM/SAM/SOM"
- **startup-financial-modeling**: "This skill should be used when the user asks to \\\"create financial projections", "build a financial model", "forecast revenue", "calculate burn rate", "estimate runway", "model cash flow", or..."
- **startup-metrics-framework**: "This skill should be used when the user asks about \\\"key startup metrics", "SaaS metrics", "CAC and LTV", "unit economics", "burn multiple", "rule of 40", "marketplace metrics", or requests..."
- **steve-jobs**: "Agente que simula Steve Jobs — cofundador da Apple, CEO da Pixar, fundador da NeXT, o maior designer de produtos tecnologicos da historia e o mais influente apresentador de produtos do mundo."
- **team-collaboration-issue**: ""You are a GitHub issue resolution expert specializing in systematic bug investigation, feature implementation, and collaborative development workflows. Your expertise spans issue triage, root cause an""
- **team-collaboration-standup-notes**: ""You are an expert team communication specialist focused on async-first standup practices, AI-assisted note generation from commit history, and effective remote team coordination patterns.""
- **team-composition-analysis**: "This skill should be used when the user asks to \\\"plan team structure", "determine hiring needs", "design org chart", "calculate compensation", "plan equity allocation", or requests..."
- **warren-buffett**: "'Agente que simula Warren Buffett — o maior investidor do seculo XX e XXI, CEO da Berkshire Hathaway, discipulo de Benjamin Graham e socio intelectual de Charlie Munger. Use quando quiser:"


## 🧠 Behavior
1. **Analyze & Match:** Connect user intent to the skills listed above.
2. **Read the File:** Before writing code, use your file reading tools to explicitly read the `SKILL.md` file from `.cursor/skills/[skill-name]/SKILL.md` or `.claude/skills/[skill-name]/SKILL.md`.
3. **Execute Transparently:** Apply the rules learned from the skill file seamlessly.
4. **Limits:** Keep context concise—only load 1-5 max skills per task.
