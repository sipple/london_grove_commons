# London Grove Commons

A community resource site bringing transparency and accessibility to local government in London Grove Township, Pennsylvania. **Not an official township website.**

The site features **Stories** — people-first content following committees into their work, interviewing the people who serve, and documenting local government in a human way.

## Tech Stack

- **Framework**: Astro (static site generator)
- **Styling**: Tailwind CSS v4 + DaisyUI v5
- **Typography plugin**: `@tailwindcss/typography` (prose styling for story content)
- **Fonts**: Google Fonts — Inter (body), Playfair Display (headings), loaded via `<link>` tags
- **SEO**: `astro-seo` for meta tags, `@astrojs/sitemap` for sitemap, `@astrojs/rss` for RSS feed
- **Theme**: Custom DaisyUI theme `londongrove` (light mode only)

## Commands

- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run preview` — Preview production build

## Project Structure

- `src/layouts/Layout.astro` — Main layout (SEO, navbar, footer, `data-theme="londongrove"`)
- `src/layouts/Markdown.astro` — Layout for static markdown pages (about, contact)
- `src/components/Navbar.astro` — DaisyUI drawer (mobile) + navbar (desktop)
- `src/components/Footer.astro` — 3-column DaisyUI footer
- `src/components/Landing.astro` — Hero section for homepage
- `src/pages/` — Astro pages (file-based routing)
- `src/content/config.ts` — Content collection schema (`stories`)
- `src/content/stories/` — Story markdown files
- `src/styles/global.css` — Tailwind v4 directives, DaisyUI theme config
- `public/` — Static assets (favicons)

## Design System

### DaisyUI Theme (`londongrove`, defined in `global.css`)
- `primary` (#11254d) — Navy, headings, primary buttons
- `secondary` (#0693e3) — Blue accent, links, secondary buttons
- `accent` (#e8a435) — Warm gold, friendly accent, hover states
- `base-100` (#ffffff) — White, main page background
- `base-200` (#f8f9fa) — Light gray, subtle sections
- `base-300` (#e9ecef) — Borders, dividers
- `base-content` (#32373c) — Dark, body text
- `neutral` (#32373c) — Dark, same as base-content

### Typography
- Body: Inter (`font-sans`)
- Headings: Playfair Display (`font-heading`)

## Content Collections

### Stories (`src/content/stories/`)
Frontmatter schema:
- `title` (string, required)
- `description` (string, required)
- `date` (date, required)
- `cover` (string, optional) — cover image path
- `tags` (string[], defaults to [])
- `draft` (boolean, defaults to false)

## Nav Links
Home, Stories, About, Contact

## Git

- Remote: `git@github.com:sipple/london_grove_commons.git` (SSH)
- Branch: `main`
