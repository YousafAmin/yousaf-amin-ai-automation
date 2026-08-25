export interface TechCategory {
  category: string;
  icon: string;
  items: string[];
}

export const techStack: TechCategory[] = [
  {
    category: "Automation",
    icon: "Workflow",
    items: ["n8n", "Webhooks", "APIs", "AI Agents"],
  },
  {
    category: "AI",
    icon: "Sparkles",
    items: ["Claude", "Gemini", "AI APIs", "LLM Workflows"],
  },
  {
    category: "Development",
    icon: "Code2",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Analytics",
    icon: "BarChart3",
    items: ["Excel", "Power BI", "SQL", "Python", "Google Sheets"],
  },
  {
    category: "Design & Productivity",
    icon: "Layers",
    items: ["Figma", "Canva", "Notion"],
  },
];

export const trustItems = [
  "AI Automation",
  "AI Voice Agents",
  "Business Analytics",
  "Web Development",
  "Data Systems",
  "Workflow Automation",
];

export interface WhyPoint {
  title: string;
  description: string;
  icon: string;
}

export const whyPoints: WhyPoint[] = [
  {
    title: "Business-First Thinking",
    description: "I focus on the actual business problem before selecting any technology.",
    icon: "Target",
  },
  {
    title: "Practical Automation",
    description: "Systems are built to reduce repetitive work and improve day-to-day operations.",
    icon: "Zap",
  },
  {
    title: "AI + Analytics",
    description: "AI automation is combined with data-driven decision making, not used for its own sake.",
    icon: "BrainCircuit",
  },
  {
    title: "Custom Systems",
    description: "Solutions are designed around your workflow, not forced into a generic template.",
    icon: "SlidersHorizontal",
  },
  {
    title: "Clear Communication",
    description: "Technical complexity stays understandable, so you always know what's being built and why.",
    icon: "MessageSquare",
  },
  {
    title: "Continuous Improvement",
    description: "Systems can be tested, refined, and expanded as the business grows.",
    icon: "RefreshCw",
  },
];

export const problems = [
  "Repetitive manual work",
  "Missed calls and leads",
  "Disconnected tools",
  "Messy spreadsheets",
  "Slow reporting",
  "Outdated websites",
  "Manual follow-ups",
];
