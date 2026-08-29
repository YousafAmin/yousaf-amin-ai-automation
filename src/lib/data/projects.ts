export type ProjectBadge = "Demo Project" | "Portfolio Project" | "Automation Demo" | "Web Development Demo";

export interface Project {
  id: string;
  title: string;
  badge: ProjectBadge;
  icon: string;
  summary: string;
  highlights: string[];
  tags: string[];
}

export const projects: Project[] = [
  {
    id: "ai-voice-receptionist-demo",
    title: "AI Voice Receptionist",
    badge: "Demo Project",
    icon: "PhoneCall",
    summary: "A demo AI receptionist built for a service-business scenario, showing call handling and lead qualification end to end.",
    highlights: [
      "Call handling & greeting flow",
      "Lead qualification questions",
      "Appointment booking logic",
      "Automated workflow hand-off",
    ],
    tags: ["AI Voice", "Automation", "Lead Qualification"],
  },
  {
    id: "business-analytics-dashboard",
    title: "Business Analytics Dashboard",
    badge: "Portfolio Project",
    icon: "BarChart3",
    summary: "A Power BI / Excel dashboard sample focused on turning raw sales data into clear, decision-ready visuals.",
    highlights: [
      "KPI summary tiles",
      "Sales & revenue trend charts",
      "Interactive filtering",
      "Business insight callouts",
    ],
    tags: ["Power BI", "Excel", "Data Visualization"],
  },
  {
    id: "ai-lead-automation-system",
    title: "AI Lead Automation System",
    badge: "Automation Demo",
    icon: "Workflow",
    summary: "An automation pipeline that takes a form submission, processes it with AI, and routes it into a CRM with a follow-up trigger.",
    highlights: [
      "Website / form intake",
      "AI-based lead scoring & summary",
      "CRM / Google Sheets sync",
      "Notification & follow-up automation",
    ],
    tags: ["n8n", "AI", "CRM Automation"],
  },
  {
    id: "modern-business-website",
    title: "Modern Business Website",
    badge: "Web Development Demo",
    icon: "LayoutTemplate",
    summary: "A sample modern business website / landing page showcasing conversion-focused layout and current web design practices.",
    highlights: [
      "Responsive, fast-loading layout",
      "Clear conversion path",
      "Modern component design",
      "Built with Next.js & Tailwind CSS",
    ],
    tags: ["Next.js", "Tailwind CSS", "Web Design"],
  },
];

export const badgeStyles: Record<ProjectBadge, string> = {
  "Demo Project": "bg-accent/15 text-accent border-accent/30",
  "Portfolio Project": "bg-accent-2/15 text-accent-2 border-accent-2/30",
  "Automation Demo": "bg-accent-3/15 text-accent-3 border-accent-3/30",
  "Web Development Demo": "bg-success/15 text-success border-success/30",
};
