export interface Solution {
  id: string;
  icon: string;
  industry: string;
  businesses: string;
  items: string[];
}

export const solutions: Solution[] = [
  {
    id: "home-services",
    icon: "Wrench",
    industry: "Home Services",
    businesses: "Plumbers, HVAC, roofers, contractors",
    items: [
      "AI receptionist for incoming calls",
      "Missed-call automation & text-back",
      "Lead capture from website & ads",
      "Appointment booking workflows",
      "Automated follow-ups",
    ],
  },
  {
    id: "healthcare-dental",
    icon: "Stethoscope",
    industry: "Healthcare / Dental",
    businesses: "Dental clinics, medical practices",
    items: [
      "AI receptionist for patient calls",
      "Appointment scheduling workflows",
      "Lead & inquiry qualification",
      "Automated patient communication",
    ],
  },
  {
    id: "professional-services",
    icon: "Briefcase",
    industry: "Professional Services",
    businesses: "Lawyers, accountants, consultants",
    items: [
      "Lead & inquiry automation",
      "Client intake workflows",
      "Document processing automation",
      "Internal reporting systems",
    ],
  },
  {
    id: "real-estate",
    icon: "Building2",
    industry: "Real Estate",
    businesses: "Agents, brokerages, property managers",
    items: [
      "Lead capture from listings & forms",
      "Lead qualification workflows",
      "CRM automation",
      "Automated follow-up sequences",
    ],
  },
  {
    id: "ecommerce-online",
    icon: "ShoppingCart",
    industry: "E-commerce / Online Businesses",
    businesses: "Online stores, digital brands",
    items: [
      "Automated sales & performance reporting",
      "Customer service workflows",
      "AI-assisted customer support",
      "Content & fulfillment automation",
    ],
  },
];
