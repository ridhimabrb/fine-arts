# Ledger & Ribbon

A personal finance/fintech writing archive. Plain HTML/CSS/JS — no build step, no framework, no server required. Free to host, free to keep updating.

## What's in here

```
fintech-blog/
├── index.html          ← landing page
├── articles.html        ← full archive with category filters
├── article.html         ← template that renders one article (reads ?slug=... in the URL)
├── css/style.css        ← all styling, built from the Wealthsimple-style design tokens
├── js/site.js            ← loads posts/index.json and renders the lists + article pages
├── posts/
│   ├── index.json        ← ⭐ THE FILE YOU EDIT TO ADD A NEW ARTICLE
│   ├── understanding-duration-risk.md
│   ├── yield-curve-inversions.md
│   ├── dcf-valuation-primer.md
│   └── neobanks-same-wheel.md
└── .nojekyll
```

The four `.md` files are placeholder essays I wrote to demonstrate the system and show what the archive looks like with real content in it. **Swap them out for your own writing** — see below.

---

## How to publish it for free (GitHub Pages)

This takes about 5 minutes and gives you a public link like `https://yourusername.github.io/fintech-blog/`.

1. **Create a GitHub account** if you don't have one: [github.com/join](https://github.com/join)
2. **Create a new repository**
   - Click the `+` in the top right → "New repository"
   - Name it something like `fintech-blog`
   - Set it to **Public**
   - Don't initialize with a README (you already have one)
3. **Upload these files**
   - On the new repo's page, click "uploading an existing file"
   - Drag in every file and folder from this project (keep the folder structure — `css/`, `js/`, `posts/` need to stay as folders)
   - Commit the upload
4. **Turn on Pages**
   - Go to the repo's **Settings** tab → **Pages** (left sidebar)
   - Under "Build and deployment," set **Source** to `Deploy from a branch`
   - Set **Branch** to `main` and folder to `/ (root)`
   - Click **Save**
5. **Wait \~1 minute**, then refresh that Pages settings page — it'll show your live URL at the top:
   `https://yourusername.github.io/fintech-blog/`

That link is what you share with people (recruiters, on your resume, on LinkedIn). It updates automatically every time you push new files to the repo.

### Alternative: Netlify Drop (even faster, no GitHub account needed)

Go to [app.netlify.com/drop](https://app.netlify.com/drop) and drag the whole `fintech-blog` folder onto the page. It deploys instantly and gives you a public URL. To update it later, drag the folder again. (GitHub Pages is the better long-term choice if you want to keep editing regularly, since it's just "edit a file → it's live.")

---

## How to add a new article (the part you'll do most often)

1. **Write your article** in Markdown (plain text with `## Headings`, `**bold**`, `- lists`, etc.) and save it as a new file in `posts/`, e.g. `posts/my-new-article.md`. Just write the body — no title needed inside the file, the title lives in the index (next step).
2. **Add one entry** to `posts/index.json` — copy an existing entry and edit it:
   ```json
   {
     "slug": "my-new-article",
     "title": "The Title You Want Displayed",
     "excerpt": "One sentence describing the article, shown in the list view.",
     "category": "Markets",
     "date": "2026-07-05",
     "readTime": "5 min read",
     "file": "my-new-article.md"
   }
   ```
   - `slug` must be unique and URL-safe (lowercase, hyphens, no spaces) — it becomes the article's link.
   - `category` can be one of the existing three (Markets / Portfolio Theory / Fintech & Policy) or a brand-new one — the archive's filter buttons update automatically.
   - `file` must exactly match the filename you created in step 1.
3. **Upload both files** (the new `.md` and the updated `index.json`) to your GitHub repo — either drag-and-drop them in the GitHub web UI, or if you're using Git locally:
   ```bash
   git add posts/my-new-article.md posts/index.json
   git commit -m "Add new article: My New Article"
   git push
   ```
4. Refresh the site — it's live. Nothing else needs to change; the homepage, archive page, and filters all read from `posts/index.json` automatically.

To remove or unpublish an article, just delete its entry from `index.json` (you can leave the `.md` file in place, it just won't be linked anywhere).

---

## Design notes

The visual system (colors, type, spacing, button shapes) is ported directly from the supplied Wealthsimple-style design reference:
- **Typography:** Tiempos → substituted with **Source Serif 4** (Google Fonts, same "editorial serif" character) for headings; The Future / Wealthsimple Sans → substituted with **Inter** for body copy and tracked-out UI labels — both are free, open-source, and loaded via Google Fonts / no license needed.
- **Color:** the warm graphite/cream/bronze palette, unchanged.
- **Components:** pill buttons (1600px radius), hairline-divided article rows instead of boxed cards (to keep the "editorial whitespace" feel the reference calls for), the segmented utility bar, and the Bronze Field hero with an original SVG sculptural illustration (no stock imagery, nothing copyrighted).

If you ever want to change the palette, every value lives as a CSS custom property at the top of `css/style.css` — one edit there updates the whole site.

## Before you share the link

- Replace the 4 sample articles with your own writing (or keep one or two as-is if you like them — they're original, not filler text).
- Update the `mailto:hello@example.com` links in `index.html`, `articles.html`, and `article.html` to your real email.
- Consider adding a custom domain later via GitHub Pages' custom domain setting, if you want `yourname.com` instead of the `github.io` link — not necessary for sharing with recruiters, the default link works fine.
