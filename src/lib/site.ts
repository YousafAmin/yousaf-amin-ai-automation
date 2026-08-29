// Central site configuration.
//
// SITE_URL is intentionally a placeholder — this project has not been
// assigned a real production domain yet. Replace the fallback below (or
// set the NEXT_PUBLIC_SITE_URL environment variable) with the real domain
// before launch. Every consumer of the site URL (layout metadata,
// sitemap.ts, robots.ts) reads from this single constant so there is only
// one place to update.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://YOUR-DOMAIN.com").replace(/\/$/, "");

export const SITE_NAME = "Yousaf Amin";
export const SITE_TITLE = "Yousaf Amin | AI Automation, Voice Agents, Websites & Data Analytics";
export const SITE_DESCRIPTION =
  "Yousaf Amin helps businesses automate workflows, deploy AI voice agents, build high-converting websites, and turn data into actionable business insights.";
