
## Customer Aftercare Page — C11 Recovery

Replace the placeholder home at `/` with a full editorial Aftercare page matching the C11 brand system.

### Design tokens (src/styles.css)
Add brand colors as semantic tokens:
- `--stone-base: #F3EDE5`
- `--obsidian: #121212`
- `--thermal-rose: #F5BAD3`
- `--deep-current: #204296`
- `--soft-mineral: #C9C9C9`

Map to Tailwind via `@theme inline` so `bg-stone-base`, `text-obsidian`, `bg-thermal-rose`, `text-deep-current`, `border-soft-mineral` all work.

Set global background to Stone Base, text to Obsidian, sharp corners (2–4px max), no drop shadows.

### Typography
Load via `<link>` in `__root.tsx` head (never `@import` URL in styles.css):
- **Headlines**: Inter (700–900) as fallback for PP Neue Montreal, with font stack `"PP Neue Montreal", "Helvetica Neue", Inter, sans-serif`
- **Editorial**: EB Garamond (Google Fonts) for sublines
- **Body**: Inter (400–500)

Register three `--font-*` tokens: `--font-display`, `--font-editorial`, `--font-body`.

### Route
Rewrite `src/routes/index.tsx` (placeholder replacement rule — the Aftercare page IS the index). Update `head()` with title "Aftercare & Support — C11 Recovery" and matching description/OG tags.

### Central link config
Top of the route file, one object for easy later swap:
```
const LINKS = {
  videos: "#",
  productCards: "#",
  manuals: "#",
  filters: "#",
  review: "#",
  instagram: "#",
  linkedin: "#",
  tiktok: "#",
};
```
A small `<AftercareLink href>` component renders `<a>` with hover underline + color shift to Deep Current, and applies `target="_blank" rel="noopener"` automatically when href starts with `http`.

### Page sections

**1. Hero** — Obsidian bg, Stone Base text, full-viewport min-height, generous padding.
- Top-left small label: `✳ Customer Aftercare` (tracked uppercase, small)
- H1: `AFTERCARE & SUPPORT` — bold display font, huge (clamp 3rem → 7rem), tight leading, uppercase
- EB Garamond subline: "Everything you need to set up, maintain, and get the most from your C11 recovery equipment." — italic-ish editorial feel, max-width constrained
- 1px Obsidian/Stone rule at bottom of section

**2. Resource cards** — Stone Base bg. Section label `✳ Resources` top.
- 3-column grid on desktop, stack on mobile
- Each card: 1px Obsidian border, sharp 2px radius, generous padding
  - Large number `01` / `02` / `03` in display font
  - Title in display sans
  - Description in body sans
  - Button-style link "Watch Videos →" etc. with hover underline / Deep Current
- Content per spec (Installation Videos, Product Cards, Manuals & Warranty)

**3. What the manuals cover** — Stone Base bg. Section label `✳ Inside the manuals`.
- Heading + intro line
- Two-column list of 17 items separated by thin 1px Obsidian rules between rows
- Responsive: single column on mobile

**4. Replacement Filters banner** — Thermal Rose bg, Obsidian text.
- Headline `KEEP YOUR WATER PRISTINE` display bold uppercase
- Body copy
- Button: Obsidian bg / Stone Base text, sharp 2px radius, "Order Replacement Filters →"

**5. Reviews** — Obsidian bg, Stone Base text.
- Section label `✳ Reviews`
- EB Garamond line "Thank you for your purchase — we hope you love your new ice bath."
- Body invite paragraph
- Button: Stone Base bg / Obsidian text, "Leave a Google Review →"

**6. Socials footer strip** — Stone Base bg.
- `✳ Follow C11` label
- Three link buttons: Instagram · LinkedIn · TikTok (1px Obsidian border, hover fills Obsidian / text Stone Base)
- Bottom rule
- Footer line: "©2026 C11® All Rights Reserved · engineered to restore." — small, tracked

### Responsive
- Mobile first; grids collapse to single column
- Fluid type via `clamp()` on hero
- Section padding scales down on mobile

### Non-goals
- No stock imagery
- No drop shadows
- No radius > 4px
- No real URLs yet — all links use `LINKS` map

### Technical notes
- Single file: `src/routes/index.tsx` for the page + inline components (Section, Card, PrimaryButton, GhostButton, AftercareLink)
- Fonts loaded in `src/routes/__root.tsx` head `links`
- Tokens in `src/styles.css` under `@theme inline` + `:root`
- Default body bg/text set to Stone Base / Obsidian in styles.css so section-level bg overrides work cleanly
