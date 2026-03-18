# Assets

All brand and marketing assets for cursor-claude-personas.

## What's here

| File | Size | Use for |
| --- | --- | --- |
| `logo.svg` | 512x512 | GitHub profile, docs, anywhere a square icon fits |
| `favicon.svg` | 32x32 | Browser tab icon for the GitHub Pages site |
| `og-image.html` | 1200x630 | GitHub social preview, Twitter cards, generic OG image |
| `social-card-twitter.html` | 1200x675 | Twitter/X summary_large_image |
| `social-card-linkedin.html` | 1200x627 | LinkedIn link preview image |
| `social-card-producthunt.html` | 1270x760 | Product Hunt gallery image |

## How to generate PNG/JPG from the HTML files

The HTML files are designed to be screenshotted at exact pixel dimensions. Three options:

### Option A — Browser DevTools (quickest)

1. Open the HTML file in Chrome
2. Open DevTools (F12)
3. Toggle device toolbar (Ctrl+Shift+M)
4. Set dimensions to the exact size listed above
5. Cmd+Shift+P > "Capture full size screenshot"

### Option B — Playwright (automated, from `screenshots` skill)

```bash
npx playwright screenshot --viewport-size="1200,630" assets/og-image.html assets/og-image.png
```

### Option C — Puppeteer one-liner

```bash
node -e "
const p = require('puppeteer');
(async () => {
  const b = await p.launch();
  const pg = await b.newPage();
  await pg.setViewport({width:1200,height:630});
  await pg.goto('file://$(pwd)/assets/og-image.html');
  await pg.screenshot({path:'assets/og-image.png'});
  await b.close();
})()
"
```

## Setting the GitHub social preview

1. Generate `og-image.png` using any method above
2. Go to repo Settings > General > Social preview
3. Upload the PNG
4. This image appears when the repo link is shared on Twitter, LinkedIn, Slack, etc.

## External tools for richer assets

These skills exist in the repo but need API keys or external services:

| Skill | What it does | Where | API needed |
| --- | --- | --- | --- |
| `stability-ai` | AI image generation (artistic styles) | `3d-frontend-developer` | Stability AI API key |
| `fal-generate` | Image + video generation | `3d-frontend-developer` | fal.ai API key |
| `imagen` | Google Gemini image generation | `3d-frontend-developer` | Google AI Studio key |
| `ai-studio-image` | Realistic photo generation | `3d-frontend-developer` | Google AI Studio key |
| `remotion` | Programmatic video from React | `3d-frontend-developer` | Node.js (local) |
| `screenshots` | Playwright screenshots | `senior-frontend-developer` | Playwright (local) |
| `magic-animator` | Logo/icon animation | `3d-frontend-developer` | Depends on setup |
| `canvas-design` | PDF/PNG poster design | `3d-frontend-developer` | None (code-based) |

To use any of these, copy the persona's `.claude/` folder into this project, then follow the instructions in the skill's SKILL.md file.
