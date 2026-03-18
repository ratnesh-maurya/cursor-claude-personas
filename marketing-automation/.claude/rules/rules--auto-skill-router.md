---
description: Auto-Skill Router and Manifest for MARKETING AUTOMATION
globs: *
---

# 🦸 Auto-Skill Router (MARKETING AUTOMATION)

As a **MARKETING AUTOMATION**, you must **proactively** consult relevant local skill and agent documentation when the user asks for help, even without explicit slash commands.

## 🗂️ Available Skills Library
Below is the index of available skills for your persona. When a user's intent matches one of these descriptions, you MUST explicitly read the corresponding `SKILL.md` file to load its instructions.

- **ab-test-setup**: ""Structured guide for setting up A/B tests with mandatory gates for hypothesis, metrics, and execution readiness.""
- **algolia-search**: ""Expert patterns for Algolia search implementation, indexing strategies, React InstantSearch, and relevance tuning Use when: adding search to, algolia, instantsearch, search api, search functionality.""
- **analytics-tracking**: "Design, audit, and improve analytics tracking systems that produce reliable, decision-ready data."
- **apify-actor-development**: ""Develop, debug, and deploy Apify Actors - serverless cloud programs for web scraping, automation, and data processing. Use when creating new Actors, modifying existing ones, or troubleshooting Acto...""
- **apify-actorization**: ""Convert existing projects into Apify Actors - serverless cloud programs. Actorize JavaScript/TypeScript (SDK with Actor.init/exit), Python (async context manager), or any language (CLI wrapper). Us...""
- **apify-audience-analysis**: "Understand audience demographics, preferences, behavior patterns, and engagement quality across Facebook, Instagram, YouTube, and TikTok."
- **apify-brand-reputation-monitoring**: ""Track reviews, ratings, sentiment, and brand mentions across Google Maps, Booking.com, TripAdvisor, Facebook, Instagram, YouTube, and TikTok. Use when user asks to monitor brand reputation, analyze...""
- **apify-competitor-intelligence**: "Analyze competitor strategies, content, pricing, ads, and market positioning across Google Maps, Booking.com, Facebook, Instagram, YouTube, and TikTok."
- **apify-content-analytics**: "Track engagement metrics, measure campaign ROI, and analyze content performance across Instagram, Facebook, YouTube, and TikTok."
- **apify-ecommerce**: ""Scrape e-commerce data for pricing intelligence, customer reviews, and seller discovery across Amazon, Walmart, eBay, IKEA, and 50+ marketplaces. Use when user asks to monitor prices, track competi...""
- **apify-influencer-discovery**: "Find and evaluate influencers for brand partnerships, verify authenticity, and track collaboration performance across Instagram, Facebook, YouTube, and TikTok."
- **apify-lead-generation**: ""Generates B2B/B2C leads by scraping Google Maps, websites, Instagram, TikTok, Facebook, LinkedIn, YouTube, and Google Search. Use when user asks to find leads, prospects, businesses, build lead lis...""
- **apify-market-research**: "Analyze market conditions, geographic opportunities, pricing, consumer behavior, and product validation across Google Maps, Facebook, Instagram, Booking.com, and TripAdvisor."
- **apify-trend-analysis**: "Discover and track emerging trends across Google Trends, Instagram, Facebook, YouTube, and TikTok to inform content strategy."
- **apify-ultimate-scraper**: ""Universal AI-powered web scraper for any platform. Scrape data from Instagram, Facebook, TikTok, YouTube, Google Maps, Google Search, Google Trends, Booking.com, and TripAdvisor. Use for lead gener...""
- **brand-guidelines-anthropic**: ""Applies Anthropic's official brand colors and typography to any sort of artifact that may benefit from having Anthropic's look-and-feel. Use it when brand colors or style guidelines, visual formatt...""
- **brevo-automation**: ""Automate Brevo (Sendinblue) tasks via Rube MCP (Composio): manage email campaigns, create/edit templates, track senders, and monitor campaign performance. Always search tools first for current sche...""
- **content-creator**: ""Create SEO-optimized marketing content with consistent brand voice. Includes brand voice analyzer, SEO optimizer, content frameworks, and social media templates. Use when writing blog posts, creati...""
- **content-marketer**: "Elite content marketing strategist specializing in AI-powered content creation, omnichannel distribution, SEO optimization, and data-driven performance marketing."
- **convertkit-automation**: ""Automate ConvertKit (Kit) tasks via Rube MCP (Composio): manage subscribers, tags, broadcasts, and broadcast stats. Always search tools first for current schemas.""
- **copywriting**: "Write rigorous, conversion-focused marketing copy for landing pages and emails. Enforces brief confirmation and strict no-fabrication rules."
- **email-sequence**: ""When the user wants to create or optimize an email sequence, drip campaign, automated email flow, or lifecycle email program. Also use when the user mentions \"email sequence,\" \"drip campa...""
- **email-systems**: "Email has the highest ROI of any marketing channel. $36 for every $1 spent. Yet most startups treat it as an afterthought - bulk blasts, no personalization, landing in spam folders. This skill cov..."
- **firecrawl-scraper**: ""Deep web scraping, screenshots, PDF parsing, and website crawling using Firecrawl API""
- **form-cro**: "Optimize any form that is NOT signup or account registration — including lead capture, contact, demo request, application, survey, quote, and checkout forms."
- **google-analytics-automation**: ""Automate Google Analytics tasks via Rube MCP (Composio): run reports, list accounts/properties, funnels, pivots, key events. Always search tools first for current schemas.""
- **growth-engine**: "'Motor de crescimento para produtos digitais -- growth hacking, SEO, ASO, viral loops, email marketing, CRM, referral programs e aquisicao organica. Ativar para: criar estrategia de growth,"
- **hubspot-automation**: ""Automate HubSpot CRM operations (contacts, companies, deals, tickets, properties) via Rube MCP using Composio integration.""
- **hubspot-integration**: ""Expert patterns for HubSpot CRM integration including OAuth authentication, CRM objects, associations, batch operations, webhooks, and custom objects. Covers Node.js and Python SDKs. Use when: hubs...""
- **keyword-extractor**: ">"
- **klaviyo-automation**: ""Automate Klaviyo tasks via Rube MCP (Composio): manage email/SMS campaigns, inspect campaign messages, track tags, and monitor send jobs. Always search tools first for current schemas.""
- **landing-page-generator**: ""Generates high-converting Next.js/React landing pages with Tailwind CSS. Uses PAS, AIDA, and BAB frameworks for optimized copy/components (Heroes, Features, Pricing). Focuses on Core Web Vitals/SEO.""
- **mailchimp-automation**: ""Automate Mailchimp email marketing including campaigns, audiences, subscribers, segments, and analytics via Rube MCP (Composio). Always search tools first for current schemas.""
- **marketing-ideas**: ""Provide proven marketing strategies and growth ideas for SaaS and software products, prioritized using a marketing feasibility scoring system.""
- **marketing-psychology**: ""Apply behavioral science and mental models to marketing decisions, prioritized using a psychological leverage and feasibility scoring system.""
- **paid-ads**: ""When the user wants help with paid advertising campaigns on Google Ads, Meta (Facebook/Instagram), LinkedIn, Twitter/X, or other ad platforms. Also use when the user mentions 'PPC,' 'paid media,' '...""
- **podcast-generation**: ""Generate AI-powered podcast-style audio narratives using Azure OpenAI's GPT Realtime Mini model via WebSocket. Use when building text-to-speech features, audio narrative generation, podcast creatio...""
- **programmatic-seo**: "Design and evaluate programmatic SEO strategies for creating SEO-driven pages at scale using templates and structured data."
- **referral-program**: ""When the user wants to create, optimize, or analyze a referral program, affiliate program, or word-of-mouth strategy. Also use when the user mentions 'referral,' 'affiliate,' 'ambassador,' 'word of...""
- **seo-audit**: "Diagnose and audit SEO issues affecting crawlability, indexation, rankings, and organic performance."
- **seo-content-writer**: "Writes SEO-optimized content based on provided keywords and topic briefs. Creates engaging, comprehensive content following best practices. Use PROACTIVELY for content creation tasks."
- **seo-keyword-strategist**: "Analyzes keyword usage in provided content, calculates density, suggests semantic variations and LSI keywords based on the topic. Prevents over-optimization. Use PROACTIVELY for content optimization."
- **social-content**: ""When the user wants help creating, scheduling, or optimizing social media content for LinkedIn, Twitter/X, Instagram, TikTok, Facebook, or other platforms. Also use when the user mentions 'LinkedIn...""
- **social-orchestrator**: "Orquestrador unificado de canais sociais — coordena Instagram, Telegram e WhatsApp em um unico fluxo de trabalho. Publicacao cross-channel, metricas unificadas, reutilizacao de conteudo por..."
- **viral-generator-builder**: ""Expert in building shareable generator tools that go viral - name generators, quiz makers, avatar creators, personality tests, and calculator tools. Covers the psychology of sharing, viral mechanic...""
- **web-scraper**: "Web scraping inteligente multi-estrategia. Extrai dados estruturados de paginas web (tabelas, listas, precos). Paginacao, monitoramento e export CSV/JSON."
- **x-article-publisher-skill**: ""Publish articles to X/Twitter""
- **x-twitter-scraper**: ""X (Twitter) data platform skill — tweet search, user lookup, follower extraction, engagement metrics, giveaway draws, monitoring, webhooks, 19 extraction tools, MCP server.""


## 🧠 Behavior
1. **Analyze & Match:** Connect user intent to the skills listed above.
2. **Read the File:** Before writing code, use your file reading tools to explicitly read the `SKILL.md` file from `.cursor/skills/[skill-name]/SKILL.md` or `.claude/skills/[skill-name]/SKILL.md`.
3. **Execute Transparently:** Apply the rules learned from the skill file seamlessly.
4. **Limits:** Keep context concise—only load 1-5 max skills per task.
