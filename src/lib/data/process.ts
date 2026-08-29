export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description: "Understand the business, current tools, bottlenecks, and goals before touching any technology.",
    icon: "Search",
  },
  {
    number: "02",
    title: "Design",
    description: "Design the workflow, system architecture, and user experience around the actual problem.",
    icon: "PenTool",
  },
  {
    number: "03",
    title: "Build",
    description: "Build and integrate the automation, website, or system using the right tools for the job.",
    icon: "Hammer",
  },
  {
    number: "04",
    title: "Optimize",
    description: "Test, refine, document, and improve the system so it keeps working as the business grows.",
    icon: "TrendingUp",
  },
];
