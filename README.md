# Elite Housing

Single-page marketing site for Elite Housing, a housing and property management brand. The page is built with Next.js (App Router), TypeScript (strict), and CSS Modules, and is configured for static export (`out/`).

## Prerequisites

- Node.js 20.x or newer (recommended for Next.js 16)

## Install

```bash
npm install
```

## Development

```bash
npm run dev
```

## Production build (static export)

This project uses `output: "export"` in `next.config.ts`, which generates a fully static site in the `out/` directory.

```bash
npm run build
```

After a successful build, deploy the contents of `out/` to any static host (S3 + CloudFront, Netlify, GitHub Pages, etc.).

## Lint

```bash
npm run lint
```

## Project structure

```
project-root/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── layout.module.css
│   ├── page.module.css
│   └── icon.svg
├── components/
│   ├── Navbar/
│   ├── Hero/
│   ├── TrustedBy/
│   ├── Features/
│   ├── HowItWorks/
│   ├── Showcase/
│   ├── Testimonials/
│   ├── Stats/
│   ├── Pricing/
│   ├── FAQ/
│   ├── FinalCTA/
│   ├── ContactForm/
│   ├── Footer/
│   ├── ScrollToTop/
│   ├── WhatsAppFloat/
│   ├── MobileStickyCta/
│   ├── CookieConsent/
│   ├── CountdownBar/
│   └── ScrollReveal/
├── hooks/
│   └── useScrollReveal.ts
├── public/
│   └── images/
├── next.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

## Sections (top to bottom)

1. Navbar (sticky, anchor navigation, mobile menu)
2. Countdown ribbon (launch date: September 11, 2026)
3. Hero (`#hero`) with looping background video, Product Hunt-style badge, CTAs, and product visual
4. Trusted-by bar (`#trusted-by`)
5. Features (`#features`) alternating image and copy
6. How it works (`#how-it-works`) three-step flow
7. Showcase (`#showcase`) large visual with headline
8. Testimonials (`#testimonials`) carousel
9. Stats (`#stats`) animated counters
10. Pricing (`#pricing`) tier cards with monthly/yearly toggle
11. FAQ (`#faq`) accordion
12. Final CTA (`#cta`) with contact form (front-end validation)
13. Footer

Additional UI: WhatsApp floating button, scroll-to-top control, cookie consent dialog, mobile sticky CTA bar (after the hero).

## Credits

- Typography: [Sora](https://fonts.google.com/specimen/Sora) and [Inter](https://fonts.google.com/specimen/Inter) via `next/font/google`
- Placeholder photography: [Picsum Photos](https://picsum.photos)
- Background video: remote MP4 source (replace with a licensed asset for production)
