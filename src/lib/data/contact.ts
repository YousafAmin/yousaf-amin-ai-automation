export interface ContactChannel {
  label: string;
  value: string;
  href: string;
  icon: string;
  isPlaceholder: boolean;
}

// NOTE: These are placeholders. Replace href/value with real links before launch.
export const contactChannels: ContactChannel[] = [
  {
    label: "Email",
    value: "your-email@example.com",
    href: "mailto:your-email@example.com",
    icon: "Mail",
    isPlaceholder: true,
  },
  {
    label: "WhatsApp",
    value: "Add WhatsApp number",
    href: "https://wa.me/00000000000",
    icon: "MessageCircle",
    isPlaceholder: true,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/your-profile",
    href: "https://linkedin.com/in/your-profile",
    icon: "Link2",
    isPlaceholder: true,
  },
  {
    label: "Fiverr",
    value: "fiverr.com/your-profile",
    href: "https://fiverr.com/your-profile",
    icon: "Star",
    isPlaceholder: true,
  },
  {
    label: "Upwork",
    value: "upwork.com/freelancers/your-profile",
    href: "https://upwork.com/freelancers/your-profile",
    icon: "Briefcase",
    isPlaceholder: true,
  },
];

export const serviceOptions = [
  "AI Workflow Automation",
  "AI Voice Receptionist",
  "Website / Landing Page",
  "Data Analytics & Dashboards",
  "AI Business System",
  "Not sure yet",
];

export const budgetRanges = [
  "Under $250",
  "$250 – $500",
  "$500 – $1,500",
  "$1,500 – $5,000",
  "Let's discuss",
];

export const contactMethods = ["Email", "WhatsApp", "LinkedIn", "Phone call"];
