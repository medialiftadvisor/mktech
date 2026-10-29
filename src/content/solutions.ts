export interface SolutionItem {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  capabilities: string[];
  useCases: string[];
  icon: string;
}

export const solutionsData: SolutionItem[] = [
  {
    id: "digital-platforms",
    number: "01",
    title: "Digital Platforms",
    shortDescription:
      "Web-based platforms designed around specific operational and customer requirements.",
    fullDescription:
      "We architect unified web platforms that integrate core operational workflows, multi-role access controls, and customer-facing touchpoints into dependable systems built for sustained daily use.",
    capabilities: [
      "Custom multi-tenant web architecture",
      "Role-based access management & portals",
      "API integrations & third-party service bridging",
      "Centralized activity reporting and auditing",
    ],
    useCases: [
      "Property inventory and broker collaboration platforms",
      "Wholesale-to-retail commerce portals",
      "Grassroots community service coordination portals",
    ],
    icon: "LayoutGrid",
  },
  {
    id: "web-mobile-applications",
    number: "02",
    title: "Web & Mobile Applications",
    shortDescription: "Modern digital experiences for businesses and users.",
    fullDescription:
      "Responsive web applications and mobile-optimized interfaces engineered for swift performance, low latency, and clear usability across diverse devices and field conditions.",
    capabilities: [
      "Responsive, cross-device single page & progressive web apps",
      "Field-ready touch interfaces with offline tolerance",
      "Intuitive customer journeys designed for low-friction completion",
      "Secure authentication and session management",
    ],
    useCases: [
      "Mobile order placement for neighborhood merchants",
      "Field data collection tools for rural problem solving",
      "Customer booking and catalog viewing interfaces",
    ],
    icon: "Smartphone",
  },
  {
    id: "business-automation",
    number: "03",
    title: "Business Automation",
    shortDescription:
      "Technology that helps simplify repetitive processes and improve operational efficiency.",
    fullDescription:
      "We pinpoint manual friction points in daily operations and build reliable automation layers that reduce administrative bottlenecks, prevent human entry error, and accelerate turnaround times.",
    capabilities: [
      "Automated notification and transaction alert pipelines",
      "Document processing and record generation workflows",
      "Inventory sync and stock threshold notifications",
      "Task assignment and dispatch coordination logic",
    ],
    useCases: [
      "Automated order routing in fast-paced commerce hubs",
      "Batch status tracking in food processing units",
      "Customer enquiry distribution to domain specialists",
    ],
    icon: "Cpu",
  },
  {
    id: "customer-experience",
    number: "04",
    title: "Customer Experience Solutions",
    shortDescription:
      "Digital interfaces designed to improve how customers discover, interact and engage.",
    fullDescription:
      "Thoughtfully structured frontends and digital interaction journeys that build credibility, provide frictionless browsing, and turn visitor interest into genuine business relationships.",
    capabilities: [
      "Purpose-built discovery and inquiry funnels",
      "Interactive digital product catalogs and showpieces",
      "Responsive communication and query tracking channels",
      "Performance-tuned page delivery with zero layout shifts",
    ],
    useCases: [
      "Boutique retail interactive catalog and fitting enquiry flows",
      "Real estate project showcase with site-visit scheduling",
      "Direct farmer-to-buyer produce specification displays",
    ],
    icon: "Users",
  },
  {
    id: "data-management-systems",
    number: "05",
    title: "Data & Management Systems",
    shortDescription:
      "Centralized systems for organizing, managing and presenting business information.",
    fullDescription:
      "Reliable data repositories, administrative dashboards, and structured registries that give business founders and managers real-time visibility into operational health.",
    capabilities: [
      "Structured operational databases and schema design",
      "Operational dashboards with key health indicators",
      "Exportable reporting and audit-compliant log trails",
      "Secure multi-tiered data storage and automated backups",
    ],
    useCases: [
      "Food processing batch quality logs and compliance records",
      "Multi-store inventory reconciliation for retail boutiques",
      "Village problem registry and resolution monitoring",
    ],
    icon: "Database",
  },
  {
    id: "technology-consulting",
    number: "06",
    title: "Technology Consulting",
    shortDescription:
      "Problem discovery, solution planning and technology direction.",
    fullDescription:
      "Collaborative advisory sessions where we deconstruct your operational bottleneck, evaluate feasibility, define technical blueprints, and map an affordable, practical execution roadmap.",
    capabilities: [
      "In-depth operational problem discovery and constraint audits",
      "System architecture blueprinting and tech stack evaluation",
      "Execution roadmap planning tailored for emerging startups and SMEs",
      "Security, scalability, and integration feasibility reviews",
    ],
    useCases: [
      "Assisting traditional businesses transitioning to digital workflows",
      "Technical scoping for early-stage startup founders",
      "Evaluating technology feasibility for community development initiatives",
    ],
    icon: "Compass",
  },
];
