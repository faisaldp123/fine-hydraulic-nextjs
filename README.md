# Fine Hydraulic — Website

A full Next.js 16 (App Router + TypeScript + Tailwind CSS v4) website for a heavy-equipment
hydraulic parts business, covering 12 product categories, a section-wise photo gallery,
About/Contact pages, and complete SEO (titles, descriptions, canonical URLs, Open Graph +
Twitter cards, dynamic OG images, sitemap.xml, robots.txt, JSON-LD).

## 1. Setup

Requires Node.js 18.18+ (Node 20 LTS recommended).

```bash
npm install
npm run dev
```

Open http://localhost:3000

## 2. Production build

```bash
npm run build
npm start
```

## 3. Project structure

```
app/
  layout.tsx                 Global metadata, fonts, header/footer, JSON-LD
  page.tsx                   Homepage
  about/page.tsx             About Us
  contact/page.tsx           Contact Us (form + map)
  gallery/page.tsx           Section-wise photo gallery (all 12 categories)
  products/[slug]/page.tsx   Dynamic product/category page (12 pages, generated from lib/data.ts)
  products/[slug]/opengraph-image.tsx   Per-category social share image
  sitemap.ts / robots.ts     SEO files, auto-served at /sitemap.xml and /robots.txt
components/
  Header.tsx                 Sticky nav with the Products mega-menu dropdown
  Footer.tsx
  CategoryVisual.tsx         The blueprint-style illustration used as "photos" everywhere
  ContactForm.tsx
  PageHero.tsx
lib/
  data.ts                    single source of truth: all 12 categories, site info, contact details
  og.tsx                     Shared builder for the static pages' OG images
```

## 4. Things to customize before you launch

- **Real photos**: every image on the site right now is a custom-drawn technical "blueprint"
  illustration (`components/CategoryVisual.tsx`), not a stock photo — this avoids using anyone
  else's copyrighted photography. To use your own product photos instead, drop files into
  `public/images/`, and swap the `<CategoryVisual ... />` usages for a normal `<Image src="..." />`
  from `next/image` in `app/page.tsx`, `app/products/[slug]/page.tsx`, `app/gallery/page.tsx`,
  and `app/about/page.tsx`.
- **Company details**: phone, email, address, hours, social links, founding year — all in
  `lib/data.ts` under `siteConfig`. Update `siteConfig.url` to your real domain once you deploy.
- **Category copy**: descriptions, specs, applications and keywords per category are in
  `lib/data.ts` under `categories` — edit freely, every page regenerates from this file.
- **Contact form**: currently opens the visitor's email app with a pre-filled message
  (`components/ContactForm.tsx`) since there's no backend yet. To collect submissions directly,
  wire the `handleSubmit` function to an API route, or a form service (Formspree, Resend, etc.).
- **Favicon**: replace `app/favicon.ico` with your logo mark.

## 5. Deployment

This is a standard Next.js app — deploy to Vercel, Netlify, or any Node host. No environment
variables are required for the current feature set.
