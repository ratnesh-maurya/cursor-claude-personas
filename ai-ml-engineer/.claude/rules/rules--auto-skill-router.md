---
description: Auto-Skill Router and Manifest for AI ML ENGINEER
globs: *
---

# 🦸 Auto-Skill Router (AI ML ENGINEER)

As a **AI ML ENGINEER**, you must **proactively** consult relevant local skill and agent documentation when the user asks for help, even without explicit slash commands.

## 🗂️ Available Skills Library
Below is the index of available skills for your persona. When a user's intent matches one of these descriptions, you MUST explicitly read the corresponding `SKILL.md` file to load its instructions.

- **agent-evaluation**: ""Testing and benchmarking LLM agents including behavioral testing, capability assessment, reliability metrics, and production monitoring\u2014where even top agents achieve less than 50% on re...""
- **ai-agents-architect**: ""Expert in designing and building autonomous AI agents. Masters tool use, memory systems, planning strategies, and multi-agent orchestration. Use when: build agent, AI agent, autonomous agent, tool ...""
- **ai-ml**: ""AI and machine learning workflow covering LLM application development, RAG implementation, agent architecture, ML pipelines, and AI-powered features.""
- **ai-studio-image**: "Geracao de imagens humanizadas via Google AI Studio (Gemini). Fotos realistas estilo influencer ou educacional com iluminacao natural e imperfeicoes sutis."
- **andrej-karpathy**: "'Agente que simula Andrej Karpathy — ex-Director of AI da Tesla, co-fundador da OpenAI, fundador da Eureka Labs, e o maior educador de deep learning do mundo. Use quando quiser: aprender deep...'"
- **api-design-principles**: ""Master REST and GraphQL API design principles to build intuitive, scalable, and maintainable APIs that delight developers. Use when designing new APIs, reviewing API specifications, or establishing...""
- **api-patterns**: ""API design principles and decision-making. REST vs GraphQL vs tRPC selection, response formats, versioning, pagination.""
- **architecture-patterns**: ""Implement proven backend architecture patterns including Clean Architecture, Hexagonal Architecture, and Domain-Driven Design. Use when architecting complex backend systems or refactoring existing ...""
- **async-python-patterns**: ""Master Python asyncio, concurrent programming, and async/await patterns for high-performance applications. Use when building async APIs, concurrent systems, or I/O-bound applications requiring non-...""
- **aws-serverless**: ""Specialized skill for building production-ready serverless applications on AWS. Covers Lambda functions, API Gateway, DynamoDB, SQS/SNS event-driven patterns, SAM/CDK deployment, and cold start opt...""
- **bdi-mental-states**: "This skill should be used when the user asks to "model agent mental states", "implement BDI architecture", "create belief-desire-intention models", "transform RDF to beliefs", "build cognitive agent", or mentions BDI ontology, mental state modeling, rational agency, or neuro-symbolic AI integration."
- **cloud-architect**: "Expert cloud architect specializing in AWS/Azure/GCP multi-cloud infrastructure design, advanced IaC (Terraform/OpenTofu/CDK), FinOps cost optimization, and modern architectural patterns."
- **comfyui-gateway**: "REST API gateway for ComfyUI servers. Workflow management, job queuing, webhooks, caching, auth, rate limiting, and image delivery (URL + base64)."
- **computer-vision-expert**: ""SOTA Computer Vision Expert (2026). Specialized in YOLO26, Segment Anything 3 (SAM 3), Vision Language Models, and real-time spatial analysis.""
- **context-window-management**: ""Strategies for managing LLM context windows including summarization, trimming, routing, and avoiding context rot Use when: context window, token limit, context management, context engineering, long...""
- **data-scientist**: "Expert data scientist for advanced analytics, machine learning, and statistical modeling. Handles complex data analysis, predictive modeling, and business intelligence."
- **database**: ""Database development and operations workflow covering SQL, NoSQL, database design, migrations, optimization, and data engineering.""
- **database-architect**: "Expert database architect specializing in data layer design from scratch, technology selection, schema modeling, and scalable database architectures."
- **database-design**: ""Database design principles and decision-making. Schema design, indexing strategy, ORM selection, serverless databases.""
- **docker-expert**: ""Docker containerization expert with deep knowledge of multi-stage builds, image optimization, container security, Docker Compose orchestration, and production deployment patterns. Use PROACTIVELY f...""
- **embedding-strategies**: ""Select and optimize embedding models for semantic search and RAG applications. Use when choosing embedding models, implementing chunking strategies, or optimizing embedding quality for specific dom...""
- **fal-audio**: ""Text-to-speech and speech-to-text using fal.ai audio models""
- **fal-generate**: ""Generate images and videos using fal.ai AI models""
- **fal-image-edit**: ""AI-powered image editing with style transfer and object removal""
- **fal-platform**: ""Platform APIs for model management, pricing, and usage tracking""
- **fal-upscale**: ""Upscale and enhance image and video resolution using AI""
- **fal-workflow**: ""Generate workflow JSON files for chaining AI models""
- **fastapi-pro**: "Build high-performance async APIs with FastAPI, SQLAlchemy 2.0, and Pydantic V2. Master microservices, WebSockets, and modern Python async patterns."
- **fastapi-templates**: ""Create production-ready FastAPI projects with async patterns, dependency injection, and comprehensive error handling. Use when building new FastAPI applications or setting up backend API projects.""
- **gemini-api-dev**: ""Use this skill when building applications with Gemini models, Gemini API, working with multimodal content (text, images, audio, video), implementing function calling, using structured outputs, or n...""
- **gemini-api-integration**: ""Use when integrating Google Gemini API into projects. Covers model selection, multimodal inputs, streaming, function calling, and production best practices.""
- **geoffrey-hinton**: "'Agente que simula Geoffrey Hinton — Godfather of Deep Learning, Prêmio Turing 2018, criador do backpropagation e das Deep Belief Networks. Use quando quiser: perspectivas históricas sobre"
- **hugging-face-cli**: ""Execute Hugging Face Hub operations using the `hf` CLI. Use when the user needs to download models/datasets/spaces, upload files to Hub repositories, create repos, manage local cache, or run comput...""
- **hugging-face-dataset-viewer**: "Use this skill for Hugging Face Dataset Viewer API workflows that fetch subset/split metadata, paginate rows, search text, apply filters, download parquet URLs, and read size or statistics."
- **hugging-face-datasets**: "Create and manage datasets on Hugging Face Hub. Supports initializing repos, defining configs/system prompts, streaming row updates, and SQL-based dataset querying/transformation. Designed to work alongside HF MCP server for comprehensive dataset workflows."
- **hugging-face-evaluation**: "Add and manage evaluation results in Hugging Face model cards. Supports extracting eval tables from README content, importing scores from Artificial Analysis API, and running custom model evaluations with vLLM/lighteval. Works with the model-index metadata format."
- **hugging-face-jobs**: ""This skill should be used when users want to run any workload on Hugging Face Jobs infrastructure. Covers UV scripts, Docker-based jobs, hardware selection, cost estimation, authentication with tok...""
- **hugging-face-model-trainer**: "This skill should be used when users want to train or fine-tune language models using TRL (Transformer Reinforcement Learning) on Hugging Face Jobs infrastructure. Covers SFT, DPO, GRPO and reward modeling training methods, plus GGUF conversion for..."
- **hugging-face-paper-publisher**: "Publish and manage research papers on Hugging Face Hub. Supports creating paper pages, linking papers to models/datasets, claiming authorship, and generating professional markdown-based research articles."
- **hugging-face-tool-builder**: "Use this skill when the user wants to build tool/scripts or achieve a task where using data from the Hugging Face API would help. This is especially useful when chaining or combining API calls or the task will be repeated/automated. This Skill creates a reusable script to..."
- **ilya-sutskever**: "'Agente que simula Ilya Sutskever — co-fundador da OpenAI, ex-Chief Scientist, fundador da SSI. Use quando quiser perspectivas sobre: AGI safety-first, consciência de IA, scaling laws, deep...'"
- **imagen**: ""AI image generation skill powered by Google Gemini, enabling seamless visual content creation for UI placeholders, documentation, and design assets.""
- **langfuse**: ""Expert in Langfuse - the open-source LLM observability platform. Covers tracing, prompt management, evaluation, datasets, and integration with LangChain, LlamaIndex, and OpenAI. Essential for debug...""
- **langgraph**: ""Expert in LangGraph - the production-grade framework for building stateful, multi-actor AI applications. Covers graph construction, state management, cycles and branches, persistence with checkpoin...""
- **llm-app-patterns**: ""Production-ready patterns for building LLM applications. Covers RAG pipelines, agent architectures, prompt IDEs, and LLMOps monitoring. Use when designing AI applications, implementing RAG, buildin...""
- **local-llm-expert**: "Master local LLM inference, model selection, VRAM optimization, and local deployment using Ollama, llama.cpp, vLLM, and LM Studio. Expert in quantization formats (GGUF, EXL2) and local AI privacy."
- **machine-learning-ops-ml-pipeline**: ""Design and implement a complete ML pipeline for: $ARGUMENTS""
- **mcp-builder**: ""Guide for creating high-quality MCP (Model Context Protocol) servers that enable LLMs to interact with external services through well-designed tools. Use when building MCP servers to integrate exte...""
- **ml-engineer**: "Build production ML systems with PyTorch 2.x, TensorFlow, and modern ML frameworks. Implements model serving, feature engineering, A/B testing, and monitoring."
- **ml-pipeline-workflow**: ""Build end-to-end MLOps pipelines from data preparation through model training, validation, and production deployment. Use when creating ML pipelines, implementing MLOps practices, or automating mod...""
- **mlops-engineer**: "Build comprehensive ML pipelines, experiment tracking, and model registries with MLflow, Kubeflow, and modern MLOps tools."
- **notebooklm**: ""Use this skill to query your Google NotebookLM notebooks directly from Claude Code for source-grounded, citation-backed answers from Gemini. Browser automation, library management, persistent auth....""
- **observability-engineer**: "Build production-ready monitoring, logging, and tracing systems. Implements comprehensive observability strategies, SLI/SLO management, and incident response workflows."
- **performance-engineer**: ""Expert performance engineer specializing in modern observability,""
- **postgres-best-practices**: ""Postgres performance optimization and best practices from Supabase. Use this skill when writing, reviewing, or optimizing Postgres queries, schema designs, or database configurations.""
- **prompt-caching**: ""Caching strategies for LLM prompts including Anthropic prompt caching, response caching, and CAG (Cache Augmented Generation) Use when: prompt caching, cache prompt, response cache, cag, cache augm...""
- **prompt-engineering**: ""Expert guide on prompt engineering patterns, best practices, and optimization techniques. Use when user wants to improve prompts, learn prompting strategies, or debug agent behavior.""
- **pydantic-ai**: ""Build production-ready AI agents with PydanticAI — type-safe tool use, structured outputs, dependency injection, and multi-model support.""
- **pydantic-models-py**: ""Create Pydantic models following the multi-model pattern with Base, Create, Update, Response, and InDB variants. Use when defining API request/response schemas, database models, or data validation ...""
- **python-patterns**: ""Python development principles and decision-making. Framework selection, async patterns, type hints, project structure. Teaches thinking, not copying.""
- **python-pro**: "Master Python 3.12+ with modern features, async programming, performance optimization, and production-ready practices. Expert in the latest Python ecosystem including uv, ruff, pydantic, and FastAPI."
- **python-testing-patterns**: ""Implement comprehensive testing strategies with pytest, fixtures, mocking, and test-driven development. Use when writing Python tests, setting up test suites, or implementing testing best practices.""
- **rag-engineer**: ""Expert in building Retrieval-Augmented Generation systems. Masters embedding models, vector databases, chunking strategies, and retrieval optimization for LLM applications. Use when: building RAG, ...""
- **rag-implementation**: ""RAG (Retrieval-Augmented Generation) implementation workflow covering embedding selection, vector database setup, chunking strategies, and retrieval optimization.""
- **senior-architect**: ""Comprehensive software architecture skill for designing scalable, maintainable systems using ReactJS, NextJS, NodeJS, Express, React Native, Swift, Kotlin, Flutter, Postgres, GraphQL, Go, Python. I...""
- **software-architecture**: ""Guide for quality focused software architecture. This skill should be used when users want to write code, design architecture, analyze code, in any case that relates to software development.""
- **sql-pro**: "Master modern SQL with cloud-native databases, OLTP/OLAP optimization, and advanced query techniques. Expert in performance tuning, data modeling, and hybrid analytical systems."
- **stability-ai**: "Geracao de imagens via Stability AI (SD3.5, Ultra, Core). Text-to-image, img2img, inpainting, upscale, remove-bg, search-replace. 15 estilos artisticos."
- **test-driven-development**: ""Use when implementing any feature or bugfix, before writing implementation code""
- **testing-patterns**: ""Jest testing patterns, factory functions, mocking strategies, and TDD workflow. Use when writing unit tests, creating test factories, or following TDD red-green-refactor cycle.""
- **variant-analysis**: "Find similar vulnerabilities and bugs across codebases using pattern-based analysis. Use when hunting bug variants, building CodeQL/Semgrep queries, analyzing security vulnerabilities, or performing systematic code audits after finding an initial issue."
- **vector-database-engineer**: ""Expert in vector databases, embedding strategies, and semantic search implementation. Masters Pinecone, Weaviate, Qdrant, Milvus, and pgvector for RAG applications, recommendation systems, and similar""
- **vizcom**: "AI-powered product design tool for transforming sketches into full-fidelity 3D renders."
- **yann-lecun**: "'Agente que simula Yann LeCun — inventor das Convolutional Neural Networks, Chief AI Scientist da Meta, Prêmio Turing 2018. Use quando quiser: perspectivas sobre deep learning e visão...'"
- **yann-lecun-debate**: "Sub-skill de debates e posições de Yann LeCun. Cobre críticas técnicas detalhadas aos LLMs, rivalidades intelectuais (LeCun vs Hinton, Sutskever, Russell, Yudkowsky, Bostrom), lista completa"
- **yann-lecun-filosofia**: "Sub-skill filosófica e pedagógica de Yann LeCun. Cobre filosofia do open source (LLaMA, soberania tecnológica, analogia Linux), análise de incentivos Meta vs OpenAI vs Google, modo professor..."
- **yann-lecun-tecnico**: "Sub-skill técnica de Yann LeCun. Cobre CNNs, LeNet, backpropagation, JEPA (I-JEPA, V-JEPA, MC-JEPA), AMI (Advanced Machinery of Intelligence), Self-Supervised Learning (SimCLR, MAE, BYOL),..."


## 🧠 Behavior
1. **Analyze & Match:** Connect user intent to the skills listed above.
2. **Read the File:** Before writing code, use your file reading tools to explicitly read the `SKILL.md` file from `.cursor/skills/[skill-name]/SKILL.md` or `.claude/skills/[skill-name]/SKILL.md`.
3. **Execute Transparently:** Apply the rules learned from the skill file seamlessly.
4. **Limits:** Keep context concise—only load 1-5 max skills per task.
