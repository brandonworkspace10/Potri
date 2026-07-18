# Topri — AI callers for real estate

Marketing site for **Topri** (topri.io), outbound AI callers + follow-up systems for
real estate investors and wholesalers. Styled after lindy.ai.

## How this repo is laid out

- **Repo root = the deployed site.** `index.html`, `assets/`, `robots.txt`, `sitemap.xml`
  are a pre-rendered static build. Vercel serves it as-is (no build step, `cleanUrls` on).
- **`source/`** holds the real source: a React 19 + TanStack Start app (`source/app/`)
  plus the Lindy reference boards and design brief (`source/refs/`, `source/app/design-brief.md`).

## Editing

Small copy tweaks can be made directly in `index.html` (it is plain HTML/CSS), but the
proper flow is to edit `source/app/src/` and re-render:

```bash
cd source/app
bun install
bun run build          # builds the SSR server + client assets
bun render-static.ts   # writes static-out/index.html, robots.txt, sitemap.xml
```

Then copy `static-out/*` to the repo root and `dist/client/assets/` to `assets/`, commit, push.
Vercel redeploys on push to main.

## Notes

- Canonical domain is **topri.io** (sitemap, robots and the static renderer all point to it).
  Add the domain to the Vercel project so it serves this deployment.
- All "Book a demo" CTAs currently point to `calendly.com/realleadin/30min`.
- Social share image (og:image) and cover are hosted on CloudFront (see `source/app/src/app-meta.json`).
