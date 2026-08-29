export interface ContactChannel {
  label: string;
  value: string;
  href: string;
  icon: string;
  isPlaceholder: boolean;
}

const WHATSAPP_MESSAGE = "Hello Yousaf, I found your website and would like to discuss a project.";

export const contactChannels: ContactChannel[] = [
  {
    label: "Email",
    value: "aminautomationsupp@gmail.com",
    href: "mailto:aminautomationsupp@gmail.com",
    icon: "Mail",
    isPlaceholder: false,
  },
  {
    label: "WhatsApp",
    value: "+92 317 5065626",
    href: `https://wa.me/923175065626?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
    icon: "MessageCircle",
    isPlaceholder: false,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/yousaf-amin",
    href: "https://www.linkedin.com/in/yousaf-amin-556a502bb",
    icon: "Link2",
    isPlaceholder: false,
  },
  {
    label: "Fiverr",
    value: "fiverr.com/s/2pGDDj8",
    href: "https://www.fiverr.com/s/2pGDDj8",
    icon: "Star",
    isPlaceholder: false,
  },
  {
    label: "Upwork",
    value: "upwork.com/freelancers",
    href: "https://www.upwork.com/freelancers/~01943e39915eac8650?mp_source=share",
    icon: "Briefcase",
    isPlaceholder: false,
  },
];

export const serviceOptions = [
  "AI Automation",
  "AI Voice Agent",
  "Website / Landing Page",
  "Data Analytics / Dashboard",
  "Digital Product / Template",
  "Multiple Services",
  "Not Sure Yet",
];

export const budgetRanges = [
  "Under $100",
  "$100 – $300",
  "$300 – $750",
  "$750 – $1,500",
  "$1,500+",
  "Let's Discuss",
];

export const contactMethods = ["Email", "WhatsApp", "LinkedIn", "Fiverr", "Upwork"];
