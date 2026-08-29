import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site (no API routes, no dynamic/SSR pages) — export plain
  // HTML/CSS/JS so it can be hosted on Netlify (or any static host) without
  // needing Netlify's Next.js Runtime plugin. Also required for Netlify
  // Forms' static build-time form detection to reliably find the form.
  output: "export",
};

export default nextConfig;
