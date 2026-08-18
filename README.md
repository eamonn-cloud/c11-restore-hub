# C11 Aftercare Hub

Build a "Customer Aftercare" page for C11 Recovery, a premium sports recovery brand (c11recovery.com). The page should match the brand's rebranded identity — clean, editorial, premium, minimal.

Brand system:

Colours: Stone Base #F3EDE5 (main background), Obsidian #121212 (text and dark sections), Thermal Rose #F5BAD3 (accent, used sparingly), Deep Current #204296 (secondary accent, links), Soft Mineral #C9C9C9 (subtle dividers/cards)

Typography: Bold grotesque sans for headlines in the style of Neue Montreal Bold (use "PP Neue Montreal" with fallback to Helvetica Neue / Inter), EB Garamond for subheadings/editorial lines, regular grotesque sans for body copy

Headlines in large uppercase or sentence case, generous whitespace, thin 1px Obsidian rules between sections

Use an asterisk-style brand mark (✳) as a small section motif next to section labels

Tone: confident, minimal, performance-led. Tagline style: "engineered to restore."

Page structure:

Hero (Obsidian background, Stone Base text): Small label "✳ Customer Aftercare" top left. H1 in bold sans: "AFTERCARE & SUPPORT". EB Garamond subline: "Everything you need to set up, maintain, and get the most from your C11 recovery equipment."

Resource cards section (Stone Base background): A grid of 3 large cards (stack on mobile), each with a number (01/02/03), title, short description, and a button — use # placeholder links for now, actual documents will be added later:

01 — Installation & Maintenance Videos · "Step-by-step guidance on setup, connecting and commissioning your system, routine maintenance, filter changes, cleaning procedures, troubleshooting, and best practices for performance and longevity." Button: "Watch Videos →" (placeholder link)

02 — Product Cards · "A quick overview of each product: key features, technical specs, dimensions, capacity, power requirements, included accessories, warranty details, and main benefits." Button: "View Product Cards →" (placeholder link)

03 — Manuals & Warranty Information · "Full product manuals covering safety, technical specifications, installation, electrical and water connections, commissioning, controller operation, filter and UV lamp maintenance, error codes, troubleshooting, and warranty." Button: "Open Manuals →" (placeholder link)

What the manuals cover (two-column list or accordion, Stone Base): General safety · Product overview & key components · Technical specifications · Transportation & installation · Electrical connection requirements · Hose, drain & water connections · Pool setup & commissioning · Filling, priming & circulation · Controller operation & settings · Temperature modes & timers · Safe pool use · Water level management · Filter maintenance & replacement · UV lamp replacement · Water replacement & ongoing maintenance · Error codes & troubleshooting · Warranty information.

Replacement Filters banner (Thermal Rose background, Obsidian text): Headline: "KEEP YOUR WATER PRISTINE". Body: "Easily order genuine replacement filters for your ice bath to maintain optimal water quality, filtration performance, and long-term reliability." Button (Obsidian, Stone Base text): "Order Replacement Filters →" — placeholder link.

Reviews section (Obsidian background, Stone Base text): EB Garamond line: "Thank you for your purchase — we hope you love your new ice bath." Body: invite the customer to read reviews and leave one of their own; it helps others discover C11 Recovery. Button: "Leave a Google Review →" — placeholder link.

Socials footer strip (Stone Base): "✳ Follow C11" with three buttons: Instagram, LinkedIn, TikTok — placeholder links. Footer line: "©2026 C11® All Rights Reserved · engineered to restore."

Details: Build all buttons/links so URLs are easy to swap in one place later. External links should open in new tabs once added. Subtle hover states (underline or colour shift to Deep Current). Fully responsive. No stock imagery — the design should carry itself with type, colour blocks, and spacing. Avoid drop shadows; keep corners sharp (2–4px max radius), editorial feel throughout.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://c11-restore-hub.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/187cb04b-2235-49e1-9705-a525a123cb19).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
