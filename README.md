# Shazad Arshad — Portfolio

Personal portfolio for [Shazad Arshad](https://www.shazadarshad.com), rebuilt in an Apple-inspired, Durowave-style design language: monochrome surfaces, one typeface (Inter), frosted-glass cards, alternating light/dark sections and subtle scroll motion.

**Stack:** Next.js 16 (App Router, static) · React 19 · Tailwind CSS v4 · Framer Motion · Lucide icons

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Editing content

All copy, links, projects, education and certifications live in one file:

```
src/content/site.ts
```

Components read from it, so you never need to touch layout code to update text.

## Structure

```
src/
  app/            layout, page, global styles + design tokens, icon
  components/     one file per section (Hero, Skills, FeaturedNeurativo, …)
  content/site.ts all portfolio content
public/
  profile.png     portrait
  icons/          self-hosted tech logos (devicon)
```

## Design tokens

Defined in `src/app/globals.css` under `@theme`:

| Token | Value | Use |
|---|---|---|
| `ink` | `#1d1d1f` | primary text, dark buttons |
| `ink-2` | `#6e6e73` | secondary text |
| `canvas` | `#f5f5f7` | light section background |
| `link` / `link-dark` | `#0066cc` / `#2997ff` | text links on light / dark |

Display headings use the `.display` class (600 weight, −0.028em tracking) everywhere for a consistent hierarchy.

## Deploy

Zero-config on [Vercel](https://vercel.com/new): import the repo and deploy.
