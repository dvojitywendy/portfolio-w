# Scraped portfolio content

Everything pulled from **https://kellerova.myportfolio.com/** (Ludmila Kellerová / "DvojityWendy"),
to be rebuilt into a custom static site hosted on GitHub Pages.

## Folder structure

```
scrape/
├── README.md                 ← this file
├── parse.mjs                 ← HTML → manifest parser (re-runnable)
├── gen-content.mjs           ← manifest → readable content files
├── raw-html/                 ← original downloaded pages (source of truth)
│   ├── index.html            ← the "Work" gallery grid
│   ├── contact.html
│   └── <project-slug>.html   ← one per project
├── assets/                   ← downloaded media, numbered in gallery order
│   ├── the-spark/            ← 7 images
│   ├── coffee-fundraiser/    ← 5 images + video.mp4 (1080p)
│   ├── drawing-paintings/    ← 12 images
│   ├── web-vyuka-jazyku/     ← 4 images
│   └── global-hackathon-2019/← video.mp4 (1080p)
└── content/
    ├── projects.json         ← structured manifest (titles, dates, descriptions,
    │                            ordered items with captions + asset filenames)
    ├── contact.json          ← name, role, email, phone, social links
    ├── SUMMARY.md            ← human-readable overview of all projects
    ├── image-downloads.tsv   ← folder / file / source-url for every image
    └── <project>.md          ← per-project readable breakdown
```

## What was captured

| Project | Date | Images | Video | Notes |
|---|---|---|---|---|
| The Spark – Procreate course | 2025 | 7 | – | incl. an animated `.gif`; koi-carp final piece |
| Coffee Fundraiser Campaign | 2026 | 5 | ✅ | self-founded workplace campaign |
| Drawing & Paintings | 2026 | 12 | – | physical media; one 4K (3840px) scan |
| Web Výuka jazyků (graphics & CSS) | 2026 | 4 | – | 2011 Photoshop logo/web visuals |
| Global Hackathon 2019 video | 2026 | – | ✅ | Siemens, 1st-prize film (Premiere Pro) |

- **Images**: downloaded at the highest resolution offered in each `<img>`'s `srcset`
  (mostly 1920px wide; up to 3840px where available).
- **Videos**: originally embedded via Adobe Creative Cloud Video (CCV) iframes.
  Pulled the **1080p** progressive MP4 (the embed default was only 576p).
- **Text**: every title, the per-project description, and in-gallery captions are in
  `projects.json` / the `.md` files. Verbatim, including the original Czech.

## Reproduce / refresh

```bash
# (1) re-download pages into raw-html/  — see the curl loop in the chat history
# (2) rebuild the manifest + content files:
node scrape/parse.mjs
node scrape/gen-content.mjs
# images:  read content/image-downloads.tsv and curl each row
# videos:  CCV signed URLs expire (~3 days); re-fetch the embed page to refresh,
#          then swap `_576.mp4` → `_1080.mp4` in the stream URL.
```

> ⚠️ Personal source docs (LinkedIn export, cover letter) live in the repo-root
> `_private/` folder, which is **git-ignored** so it never reaches the public site.
