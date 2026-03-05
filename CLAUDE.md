# London Grove Commons

A community resource site bringing transparency and accessibility to local government in London Grove Township, Pennsylvania. **Not an official township website.**

## Tech Stack

- **Framework**: Astro (static site generator)
- **Styling**: Tailwind CSS via `@astrojs/tailwind`
- **Fonts**: Google Fonts — PT Sans (body), Antic Slab (headings)

## Commands

- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run preview` — Preview production build

## Project Structure

- `src/layouts/BaseLayout.astro` — Main layout (header, footer, nav, mobile menu)
- `src/pages/` — Astro pages (file-based routing)
- `src/styles/global.css` — Tailwind directives and base styles
- `tailwind.config.mjs` — Custom theme (colors, fonts)
- `public/` — Static assets

## Design System

### Colors (defined in `tailwind.config.mjs`)
- `navy` (#11254d) — Header background, headings, primary buttons
- `accent` (#0693e3) — Links, highlight buttons
- `warm` (#e8a435) — Friendly accent, hover states in nav
- `dark` (#32373c) — Body text
- `light` (#f5f5f5) — Light backgrounds
- `sage` (#cdcfc1) — Main page background (set via raw CSS in global.css, not `@apply`, due to Tailwind `@layer` limitation)

### Typography
- Body: PT Sans (`font-sans`)
- Headings: Antic Slab (`font-heading`)

## Known Gotchas

- The sage background color is applied via raw CSS (`background-color: #cdcfc1`) in `global.css` rather than `@apply bg-sage` because Tailwind's custom colors can't be used with `@apply` inside `@layer base` directives.

## Git

- Remote: `git@github.com:sipple/london_grove_commons.git` (SSH)
- Branch: `main`
