import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://yousafamin.example.com";
const title = "Yousaf Amin | AI Automation & Business Systems Specialist";
const description =
  "I help small businesses, service businesses, and startups automate workflows, deploy AI voice receptionists, build high-converting websites, and turn raw data into business analytics dashboards.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Yousaf Amin",
  },
  description,
  keywords: [
    "AI automation specialist",
    "AI business automation",
    "n8n automation",
    "AI voice receptionist",
    "AI voice agent",
    "business process automation",
    "workflow automation",
    "Power BI dashboard",
    "Excel dashboard",
    "data analytics",
    "business analytics",
    "AI website development",
    "lead automation",
    "business automation systems",
  ],
  authors: [{ name: "Yousaf Amin" }],
  creator: "Yousaf Amin",
  openGraph: {
    type: "website",
    url: siteUrl,
    title,
    description,
    siteName: "Yousaf Amin",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

export const viewport: Viewport = {
  themeColor: "#05060a",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <a
          href="#home"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
