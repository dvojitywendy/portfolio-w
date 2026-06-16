# Ludmila Kellerová — Portfolio

An immersive, bilingual (🇨🇿 / 🇬🇧) portfolio for **Ludmila Kellerová** ("DvojityWendy"),
graphic designer. Static site, zero build step, **GitHub Pages–ready**.

**Design language:** Sin City / noir comic — ink black, paper white, and one blood-red
accent (`#b32121`, sampled from her own coffee-fundraiser poster). Her artwork is shown in
grayscale and **blooms into full colour on hover** (the spot-colour device). Headlines in
Anton, body in Archivo, comic-narration captions in Space Mono.

## Run locally

It's plain HTML/CSS/JS — any static server works:

```bash
# Node (used by the preview tooling)
node .claude/preview-server.mjs        # → http://localhost:8080

# …or Python, if you have it
python -m http.server 8080
```

Then open <http://localhost:8080>. (Opening `index.html` via `file://` mostly works too,
but a server is needed for the videos to stream.)

## Project structure

```
index.html              # app shell: fonts, meta/OG tags, mounts the SPA
css/styles.css          # the whole noir design system
js/app.js               # data + bilingual copy + hash router + views
assets/                 # web-optimised images & videos (this is what ships)
  the-spark/  coffee-fundraiser/  drawing-paintings/  web-vyuka-jazyku/  global-hackathon-2019/
  portrait.jpg          # About-page portrait  ← see note below
scrape/                 # provenance: how the content was pulled from the old site
  content/projects.json #   structured manifest + per-project text
  raw-html/             #   original Adobe Portfolio pages
```

The site is a single hash-routed SPA — `#/` home, `#/work`, `#/p/<slug>` projects,
`#/about`, `#/contact`. The **CZ / EN** button (top-right) flips the entire site and the
choice is remembered. No framework, no dependencies, ~1 small JS file.

## Deploy to GitHub Pages

1. Push this repo to GitHub (e.g. a `portfolio` repo, or `dvojitywendy.github.io` for a
   user site).
2. **Settings → Pages → Build and deployment → Deploy from a branch**, branch `main`, folder `/ (root)`.
3. Done. It's live at the Pages URL in a minute or two.

Everything the site needs is committed — including both videos, already compressed to
web-friendly sizes (coffee 16 MB, hackathon 58 MB; both well under GitHub's 100 MB/file
limit, with `+faststart` so they start playing before fully downloaded).

## Two notes for the final polish

- **Portrait** — `assets/portrait.jpg` is currently her LinkedIn "#OPENTOWORK" framed photo
  (fitting for a job hunt, but it carries the LinkedIn banner). To swap it, just drop a new
  image at that exact path — the About frame styles it automatically.
- **Source masters** — the original full-resolution scrape (and the raw 135 MB video) live in
  `scrape/assets/` and the Claude Design bundle in `design/`. Both are **git-ignored** (too
  large / not needed to publish); they stay on your machine as backups. The masters were
  re-encoded/downscaled into `assets/` for the web.

---

Built from a [Claude Design](https://claude.ai/design) handoff. Content scraped from her
original [Adobe Portfolio](https://kellerova.myportfolio.com/); poems site at
<https://dvojitywendy.github.io/poe/>.
