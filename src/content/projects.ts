export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  industry: string;
  industryId: string;
  problem: string;
  solution: string;
  technology: string[];
  outcome: string;
  status: "In Development" | "Pilot Stage" | "Discovery & Scoping";
  isDetailsPending?: boolean;
}

export const projectsData: ProjectItem[] = [
  {
    id: "real-estate-solution",
    number: "01",
    title: "Real Estate Digital Workflow Solution",
    industry: "Real Estate",
    industryId: "real-estate",
    problem:
      "Property developers and brokerage teams frequently grapple with fragmented inquiry records, manual follow-ups across spreadsheets, and delayed buyer communications.",
    solution:
      "A centralized web platform that synchronizes property availability, structures inbound inquiries, and provides verified property documentation directly to prospective buyers.",
    technology: ["React", "TypeScript", "Tailwind CSS", "Node.js API", "PostgreSQL Ready"],
    outcome: "Project details coming soon",
    status: "Pilot Stage",
    isDetailsPending: true,
  },
  {
    id: "quick-commerce-solution",
    number: "02",
    title: "Quick Commerce Hub & Dispatch Solution",
    industry: "Quick Commerce",
    industryId: "quick-commerce",
    problem:
      "Micro-fulfillment centers need immediate clarity on pending item picks, rack assignments, and runner dispatches to prevent fulfillment delays.",
    solution:
      "A high-speed, lightweight touch interface optimized for hub workers to track incoming baskets, verify items, and coordinate rapid order handoffs.",
    technology: ["Web Applications", "Low-Latency State Sync", "Responsive Touch UI"],
    outcome: "Project details coming soon",
    status: "In Development",
    isDetailsPending: true,
  },
  {
    id: "boutique-retail-solution",
    number: "03",
    title: "Boutique & Retail Experience Suite",
    industry: "Boutique & Retail",
    industryId: "boutique-retail",
    problem:
      "Specialty boutique owners spend hours manually cataloging unique inventory on phone messaging apps without unified stock control or professional digital presentation.",
    solution:
      "An interactive digital showroom and inquiry orchestration portal that showcases artisanal collections while syncing stock levels across showroom counters.",
    technology: ["Interactive Frontend", "Cloud Data Store", "Automated Messaging Bridge"],
    outcome: "Project details coming soon",
    status: "Pilot Stage",
    isDetailsPending: true,
  },
  {
    id: "food-processing-solution",
    number: "04",
    title: "Food Processing Quality & Batch Management",
    industry: "Food Processing",
    industryId: "food-processing",
    problem:
      "Mid-sized agro and food processing facilities face compliance risks and inventory waste due to paper-based batch records and delayed expiry alerts.",
    solution:
      "A structured batch registration system with guided supervisor checklists, digital temperature logging, and dispatch traceability.",
    technology: ["Modular Web System", "Role-Based Permissions", "Audit Logging"],
    outcome: "Project details coming soon",
    status: "Discovery & Scoping",
    isDetailsPending: true,
  },
  {
    id: "farmer-village-solution",
    number: "05",
    title: "Farmer & Village Problem-Solving System",
    industry: "Farmer & Village Problem Solving",
    industryId: "farmer-village-solutions",
    problem:
      "Rural communities and smallholder farmers encounter significant friction accessing verified local agricultural inputs, registering community issues, and obtaining transparent updates.",
    solution:
      "An accessible, community-first digital portal engineered for low-bandwidth environments, allowing straightforward issue reporting and agricultural requirement coordination.",
    technology: ["Accessible Web Interface", "Offline-Tolerant Cache", "SMS/Voice Bridge Architecture"],
    outcome: "Project details coming soon",
    status: "Discovery & Scoping",
    isDetailsPending: true,
  },
];
