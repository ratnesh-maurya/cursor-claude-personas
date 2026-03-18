const owner = "ratnesh-maurya";
const repo = "cursor-claude-personas";
const branch = "main";

/** Full fallback list used when personas.json fails to load */
const fallbackPersonas = [
  { slug: "3d-frontend-developer",      title: "3D Frontend Developer",      description: "Three.js, WebGL, and interactive 3D UI for the modern web.",                              tags: ["frontend", "engineering"] },
  { slug: "ai-agent-developer",         title: "AI Agent Developer",          description: "LLM agents, tool use, multi-step orchestration, and agentic systems.",                    tags: ["ai", "engineering"] },
  { slug: "ai-ml-engineer",             title: "AI / ML Engineer",            description: "Model training, ML pipelines, MLOps, and production AI systems.",                         tags: ["ai", "data", "engineering"] },
  { slug: "azure-developer",            title: "Azure Developer",             description: "Azure services, ARM/Bicep templates, AKS, and cloud-native patterns.",                    tags: ["infra", "engineering"] },
  { slug: "blockchain-web3-developer",  title: "Blockchain / Web3 Developer", description: "Smart contracts, DeFi protocols, and Web3 tooling.",                                      tags: ["web3", "engineering"] },
  { slug: "blog-website-developer",     title: "Blog & Website Developer",    description: "Content sites, CMS integrations, and static site generators.",                            tags: ["frontend", "content"] },
  { slug: "data-engineer",              title: "Data Engineer",               description: "Pipelines, dbt, Spark, and data warehouse architecture.",                                  tags: ["data", "engineering"] },
  { slug: "devops-cloud-engineer",      title: "DevOps / Cloud Engineer",     description: "CI/CD, Kubernetes, IaC, and production observability.",                                   tags: ["devops", "infra"] },
  { slug: "ecommerce-specialist",       title: "Ecommerce Specialist",        description: "Shopify, WooCommerce, checkout flows, and revenue optimization.",                          tags: ["frontend", "product"] },
  { slug: "fullstack-saas-mvp",         title: "Fullstack SaaS MVP",          description: "Rapid full-stack SaaS prototyping from zero to deployed product.",                        tags: ["engineering", "product"] },
  { slug: "functional-programming",     title: "Functional Programming",      description: "Haskell, Clojure, Elm, and functional design patterns.",                                   tags: ["engineering", "backend"] },
  { slug: "game-developer",             title: "Game Developer",              description: "Unity, Godot, game loops, and interactive experience design.",                             tags: ["engineering", "frontend"] },
  { slug: "health-tech-developer",      title: "Health Tech Developer",       description: "FHIR, HL7, medical data systems, and healthcare compliance.",                              tags: ["engineering", "data"] },
  { slug: "legal-finance-analyst",      title: "Legal & Finance Analyst",     description: "Contracts, compliance workflows, and financial modeling.",                                 tags: ["product", "data"] },
  { slug: "marketing-automation",       title: "Marketing Automation",        description: "Email flows, CRM integrations, and analytics-driven campaigns.",                           tags: ["automation", "product"] },
  { slug: "mobile-developer",           title: "Mobile Developer",            description: "React Native, Flutter, and cross-platform iOS/Android development.",                       tags: ["mobile", "engineering"] },
  { slug: "n8n-automation-specialist",  title: "n8n Automation Specialist",   description: "n8n workflow design, low-code automation, and integration pipelines.",                    tags: ["automation", "devops"] },
  { slug: "odoo-erp-specialist",        title: "Odoo ERP Specialist",         description: "Odoo modules, ERP customization, and business process automation.",                       tags: ["automation", "product"] },
  { slug: "open-source-maintainer",     title: "Open Source Maintainer",      description: "OSS governance, PR reviews, release automation, and community health.",                   tags: ["oss", "engineering"] },
  { slug: "platform-integrations",      title: "Platform Integrations",       description: "APIs, webhooks, OAuth flows, and third-party service connectors.",                        tags: ["engineering", "backend"] },
  { slug: "product-manager",            title: "Product Manager",             description: "Roadmaps, specs, user stories, and cross-functional coordination.",                        tags: ["product"] },
  { slug: "qa-testing-engineer",        title: "QA / Testing Engineer",       description: "Test strategy, automation frameworks, coverage, and quality gates.",                      tags: ["engineering", "devops"] },
  { slug: "saas-startup-founder",       title: "SaaS Startup Founder",        description: "GTM strategy, growth metrics, and early-stage product decisions.",                        tags: ["product"] },
  { slug: "security-engineer",          title: "Security Engineer",           description: "Threat modeling, security hardening, and vulnerability audits.",                           tags: ["security", "engineering"] },
  { slug: "senior-dotnet-developer",    title: "Senior .NET Developer",       description: "C#, ASP.NET Core, and enterprise Azure application patterns.",                            tags: ["backend", "engineering"] },
  { slug: "senior-elixir-developer",    title: "Senior Elixir Developer",     description: "Elixir, Phoenix, OTP, and fault-tolerant distributed systems.",                           tags: ["backend", "engineering"] },
  { slug: "senior-frontend-developer",  title: "Senior Frontend Developer",   description: "React, TypeScript, design systems, and frontend architecture.",                           tags: ["frontend", "engineering"] },
  { slug: "senior-golang-developer",    title: "Senior Go Developer",         description: "Go, microservices, concurrency patterns, and high-throughput systems.",                   tags: ["backend", "engineering"] },
  { slug: "senior-java-developer",      title: "Senior Java Developer",       description: "Java, Spring Boot, and enterprise microservice patterns.",                                tags: ["backend", "engineering"] },
  { slug: "senior-python-developer",    title: "Senior Python Developer",     description: "Python, APIs, automation scripts, and data workflows.",                                   tags: ["backend", "engineering", "data"] },
  { slug: "senior-rust-developer",      title: "Senior Rust Developer",       description: "Rust, systems programming, WebAssembly, and low-level performance.",                     tags: ["backend", "engineering"] },
  { slug: "seo-specialist",             title: "SEO Specialist",              description: "Technical SEO, Core Web Vitals, structured data, and search strategy.",                  tags: ["content", "frontend"] },
  { slug: "system-architect",           title: "System Architect",            description: "Service boundaries, scalability tradeoffs, and distributed system design.",               tags: ["engineering", "infra"] },
  { slug: "system-designer",            title: "System Designer",             description: "Low-level system design, algorithms, and performance-critical code.",                     tags: ["engineering", "backend"] },
  { slug: "technical-writer",           title: "Technical Writer",            description: "Docs, onboarding guides, API references, and developer clarity.",                         tags: ["content", "oss"] },
  { slug: "ui-ux-designer",             title: "UI / UX Designer",            description: "Design systems, accessibility, prototyping, and user experience.",                        tags: ["design", "frontend"] },
  { slug: "voice-ai-developer",         title: "Voice AI Developer",          description: "Voice interfaces, TTS, STT, ASR, and conversational AI pipelines.",                      tags: ["ai", "engineering"] },
  { slug: "wordpress-specialist",       title: "WordPress Specialist",        description: "WordPress, WooCommerce, Gutenberg, and theme/plugin development.",                        tags: ["frontend", "content"] }
];

const ALL_TAGS = ["all", "ai", "automation", "backend", "content", "data", "design", "devops", "engineering", "frontend", "infra", "mobile", "oss", "product", "security", "web3"];

const cardsEl      = document.querySelector("#cards");
const searchEl     = document.querySelector("#search");
const resultCountEl = document.querySelector("#result-count");
const tagBarEl     = document.querySelector("#tag-bar");

let activeTag = "all";

function getPersonaLink(slug) {
  return `https://github.com/${owner}/${repo}/tree/${branch}/${slug}`;
}

function getCopyCommand(slug) {
  return `cp -R ${slug}/.claude $TARGET/ && cp -R ${slug}/.cursor $TARGET/`;
}

function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function renderTags(tags) {
  return tags
    .map((t) => `<span class="tag tag--${escapeHtml(t)}">${escapeHtml(t)}</span>`)
    .join("");
}

function render(personas) {
  const query = searchEl.value.trim().toLowerCase();

  const filtered = personas.filter((p) => {
    const matchesSearch =
      p.slug.toLowerCase().includes(query) ||
      p.title.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.tags.some((t) => t.toLowerCase().includes(query));

    const matchesTag = activeTag === "all" || p.tags.includes(activeTag);

    return matchesSearch && matchesTag;
  });

  resultCountEl.textContent = `${filtered.length} persona${filtered.length === 1 ? "" : "s"} shown`;

  cardsEl.innerHTML = filtered
    .map(
      (p, index) => `
      <article class="card" style="animation-delay:${index * 18}ms">
        <div class="card-tags">${renderTags(p.tags)}</div>
        <h3><a href="${getPersonaLink(p.slug)}" target="_blank" rel="noreferrer">${escapeHtml(p.title)}</a></h3>
        <p class="card-desc">${escapeHtml(p.description)}</p>
        <div class="card-footer">
          <code class="card-slug">${escapeHtml(p.slug)}</code>
          <button class="copy-btn" data-slug="${escapeHtml(p.slug)}" title="Copy install command" aria-label="Copy install command for ${escapeHtml(p.title)}">
            Copy
          </button>
        </div>
      </article>
    `
    )
    .join("");

  // Wire up copy buttons
  cardsEl.querySelectorAll(".copy-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const slug = btn.dataset.slug;
      const cmd = getCopyCommand(slug);
      navigator.clipboard.writeText(cmd).then(() => {
        btn.textContent = "Copied!";
        setTimeout(() => { btn.textContent = "Copy"; }, 1800);
      }).catch(() => {
        btn.textContent = "Error";
        setTimeout(() => { btn.textContent = "Copy"; }, 1800);
      });
    });
  });
}

function renderTagBar() {
  if (!tagBarEl) return;
  tagBarEl.innerHTML = ALL_TAGS.map((tag) => `
    <button
      class="tag-btn${tag === activeTag ? " tag-btn--active" : ""}"
      data-tag="${escapeHtml(tag)}"
      aria-pressed="${tag === activeTag}"
    >${escapeHtml(tag)}</button>
  `).join("");

  tagBarEl.querySelectorAll(".tag-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      activeTag = btn.dataset.tag;
      renderTagBar();
      render(window.__personas__);
    });
  });
}

async function loadPersonas() {
  try {
    const response = await fetch("./data/personas.json", { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`Failed to load personas data: ${response.status}`);
    }
    const data = await response.json();
    if (!Array.isArray(data.personas)) {
      throw new Error("Invalid personas.json structure");
    }
    // Normalise: support both rich objects and legacy string slugs
    return data.personas.map((p) =>
      typeof p === "string"
        ? { slug: p, title: p.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" "), description: "", tags: [] }
        : p
    );
  } catch (_error) {
    return fallbackPersonas;
  }
}

loadPersonas().then((personas) => {
  window.__personas__ = personas;
  renderTagBar();
  render(personas);
  searchEl.addEventListener("input", () => render(personas));
});
