export interface Service {
  id: string;
  icon: string;
  name: string;
  tagline: string;
  description: string;
  useCases: string[];
  technologies: string[];
  ctaLabel: string;
}

export const services: Service[] = [
  {
    id: "ai-workflow-automation",
    icon: "Workflow",
    name: "AI Workflow Automation",
    tagline: "Stop doing manually what a system can do for you.",
    description:
      "Automated workflows that connect your tools, move data where it needs to go, and remove repetitive manual work from your day.",
    useCases: [
      "Lead capture automation",
      "Email & follow-up automation",
      "CRM workflows",
      "AI document processing",
      "Form → AI → CRM → notification pipelines",
      "Multi-step approval & reporting workflows",
    ],
    technologies: ["n8n", "Webhooks", "APIs", "Google Sheets", "Notion", "CRM systems", "Email platforms"],
    ctaLabel: "Automate My Business",
  },
  {
    id: "ai-voice-receptionist",
    icon: "PhoneCall",
    name: "AI Voice Receptionists",
    tagline: "Never miss another customer call.",
    description:
      "AI-powered voice agents that answer calls around the clock, capture caller information, and move qualified leads straight into your workflow.",
    useCases: [
      "Answer calls 24/7",
      "Handle common customer questions",
      "Capture caller information",
      "Qualify leads",
      "Book appointments",
      "Transfer calls when needed",
    ],
    technologies: ["AI voice agents", "AI APIs", "CRM integration", "Automation workflows"],
    ctaLabel: "Discuss a Voice Agent",
  },
  {
    id: "websites-landing-pages",
    icon: "LayoutTemplate",
    name: "Websites & Landing Pages",
    tagline: "A modern site built to convert, not just exist.",
    description:
      "Fast, modern, conversion-focused websites and landing pages built with current AI-assisted development practices, designed around your business goals.",
    useCases: [
      "Business websites",
      "Lead-generation landing pages",
      "Website redesigns",
      "Conversion-focused funnels",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    ctaLabel: "Start a Website Project",
  },
  {
    id: "data-analytics-dashboards",
    icon: "BarChart3",
    name: "Data Analytics & Dashboards",
    tagline: "Turn raw business data into decisions.",
    description:
      "Clean, structured data and clear dashboards that show what's actually happening in your business — sales, KPIs, and performance in one view.",
    useCases: [
      "Excel & Power BI dashboards",
      "Data cleaning & transformation",
      "KPI tracking",
      "Sales & financial reporting",
    ],
    technologies: ["Excel", "Power BI", "SQL", "Python", "Google Sheets"],
    ctaLabel: "Build My Dashboard",
  },
  {
    id: "ai-business-systems",
    icon: "Cpu",
    name: "AI Business Systems",
    tagline: "Where automation, AI, and data come together.",
    description:
      "End-to-end systems that combine automation, AI, and analytics — built to handle a real business process from start to finish, not just one task.",
    useCases: [
      "Lead management systems",
      "AI customer support systems",
      "Automated reporting systems",
      "Internal business assistants",
    ],
    technologies: ["n8n", "AI APIs", "CRM systems", "Databases", "Dashboards"],
    ctaLabel: "Design My System",
  },
];
