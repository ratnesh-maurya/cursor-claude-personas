const owner = "ratnesh-maurya";
const repo = "cursor-claude-personas";
const branch = "main";

const fallbackPersonas = [
  "3d-frontend-developer",
  "ai-ml-engineer",
  "blog-website-developer",
  "data-engineer",
  "devops-cloud-engineer",
  "ecommerce-specialist",
  "fullstack-saas-mvp",
  "game-developer",
  "marketing-automation",
  "mobile-developer",
  "n8n-automation-specialist",
  "odoo-erp-specialist",
  "open-source-maintainer",
  "qa-testing-engineer",
  "security-engineer",
  "senior-dotnet-developer",
  "senior-elixir-developer",
  "senior-frontend-developer",
  "senior-golang-developer",
  "senior-java-developer",
  "senior-python-developer",
  "senior-rust-developer",
  "seo-specialist",
  "system-architect",
  "system-designer",
  "technical-writer",
  "ui-ux-designer",
  "voice-ai-developer",
  "wordpress-specialist"
];

const cardsEl = document.querySelector("#cards");
const searchEl = document.querySelector("#search");
const resultCountEl = document.querySelector("#result-count");

function toTitle(slug) {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function getPersonaLink(slug) {
  return `https://github.com/${owner}/${repo}/tree/${branch}/${slug}`;
}

function render(personas) {
  const query = searchEl.value.trim().toLowerCase();
  const filtered = personas.filter((slug) => slug.toLowerCase().includes(query));

  resultCountEl.textContent = `${filtered.length} persona${filtered.length === 1 ? "" : "s"} shown`;

  cardsEl.innerHTML = filtered
    .map(
      (slug, index) => `
      <article class="card" style="animation-delay:${index * 18}ms">
        <h3><a href="${getPersonaLink(slug)}" target="_blank" rel="noreferrer">${toTitle(slug)}</a></h3>
        <p>${slug}</p>
      </article>
    `
    )
    .join("");
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

    return data.personas;
  } catch (_error) {
    return fallbackPersonas;
  }
}

loadPersonas().then((personas) => {
  render(personas);
  searchEl.addEventListener("input", () => render(personas));
});
