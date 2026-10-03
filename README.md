# Md Abu Souyeb — Portfolio

Static single-page portfolio built with Next.js 16 (static export), TypeScript and Tailwind CSS 4.

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static site in ./out
```

## Before deploying

Set your real domain so canonical URLs, Open Graph images, the sitemap and JSON-LD are absolute and correct:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com npm run build
```

`out/` can be hosted anywhere static: Vercel, Netlify, Cloudflare Pages, GitHub Pages, S3 + CloudFront.

## Editing content

All text lives in `src/data/profile.ts`, and every claim there is sourced from the resume or the GitHub repositories.
Components in `src/components/sections/` only render that data.

GitHub metadata (language, last push) is a snapshot in `src/data/github.json`, so the page makes no API calls at load.
Refresh it with:

```bash
npm run github:sync   # optional: GITHUB_TOKEN=... for higher rate limits
```

The repositories shown, and their descriptions, are listed in `REPOS` in `scripts/fetch-github.mjs` and in `repoNotes` in `profile.ts`.

## Private source material

Put your CV, resume, original photos and any other personal documents in `source-docs/`. That folder is in
`.gitignore`, so it is never committed. The optimized images the site actually serves are in `public/`.
