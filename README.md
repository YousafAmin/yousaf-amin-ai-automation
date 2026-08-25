# Yousaf Amin — AI Automation & Business Systems

Personal business website for Yousaf Amin, an AI Automation & Business Systems Specialist. Built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — start the development server
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — lint the project

## Project Structure

```
src/
  app/            App Router pages, layout, SEO files (sitemap, robots, OG image, icon)
  components/
    layout/       Navbar, Footer
    sections/     Page sections (Hero, Services, Solutions, Projects, Process, About, FAQ, Contact, ...)
    ui/           Reusable UI primitives (Button, Badge, Container, GlowCard, ...)
  lib/
    data/         Editable content (services, solutions, projects, FAQ, tech stack, contact info)
    icons.tsx     Icon name → lucide-react component registry
```

## Content Editing

Nearly all copy lives in `src/lib/data/*.ts` as typed data — update those files to change services, solutions, projects, FAQ answers, or tech stack without touching component markup.

## Placeholders to Replace

`src/lib/data/contact.ts` contains placeholder contact links (email, WhatsApp, LinkedIn, Fiverr, Upwork) clearly marked with `isPlaceholder: true`. Replace these with real profile links before launch. The contact form in `src/components/sections/Contact.tsx` opens a pre-filled `mailto:` link — swap in a real backend/email service when ready.

Portfolio items in `src/lib/data/projects.ts` are labeled Demo/Portfolio/Automation/Web Development projects — replace with real case studies as they become available.

`src/lib/site.ts` holds the site's production domain as `SITE_URL`. It currently falls back to the placeholder `https://YOUR-DOMAIN.com` — set the real domain there (or via the `NEXT_PUBLIC_SITE_URL` environment variable) before launch. Every consumer of the domain (page metadata, Open Graph/Twitter tags, `sitemap.ts`, `robots.ts`) reads from this one constant.
