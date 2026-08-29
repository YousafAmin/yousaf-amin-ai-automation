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

## Contact Info & Form

`src/lib/data/contact.ts` holds the real contact channels (email, WhatsApp, LinkedIn, Fiverr, Upwork) — all `isPlaceholder: false`. Update this file if any of those links or the WhatsApp pre-filled message ever change.

The contact form (`src/components/sections/Contact.tsx`) submits to **Netlify Forms** via an AJAX POST to `/` with `form-name: contact`. It requires no backend and no API keys. See "Netlify Forms" below for where submissions land after deployment.

## Netlify Forms

The contact form is wired for [Netlify Forms](https://docs.netlify.com/manage/forms/setup/):

- The `<form name="contact" data-netlify="true" netlify-honeypot="bot-field">` markup is server-rendered (the page is statically generated), so Netlify's build-time form detection picks it up automatically — no extra configuration needed on Netlify's side beyond deploying the site.
- After deploying, submissions appear under **Site configuration → Forms** in the Netlify dashboard for this site.
- To get notified by email for each new submission: **Site configuration → Forms → Form notifications → Add notification → Email notification**, then enter the destination email address. This is a one-time manual step in the Netlify UI (not something committed to the repo).
- A hidden honeypot field (`bot-field`) provides basic spam filtering.

If the site is ever deployed somewhere other than Netlify, this form's POST will not be captured anywhere — it would need to be pointed at a different form backend (e.g. Formspree, a serverless function, etc.) in `handleSubmit` inside `Contact.tsx`.

## Other Placeholders

Portfolio items in `src/lib/data/projects.ts` are labeled Demo/Portfolio/Automation/Web Development projects — replace with real case studies as they become available.

`src/lib/site.ts` holds the site's production domain as `SITE_URL`. It currently falls back to the placeholder `https://YOUR-DOMAIN.com` — set the real domain there (or via the `NEXT_PUBLIC_SITE_URL` environment variable) once the site has a permanent domain. Every consumer of the domain (page metadata, Open Graph/Twitter tags, `sitemap.ts`, `robots.ts`) reads from this one constant.

`src/lib/data/digitalProducts.ts` controls the "Digital Products & Tools" section's CTA — it shows a "Coming Soon" badge until `href` is set to a real destination page.
