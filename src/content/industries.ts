export interface IndustryItem {
  id: string;
  number: string;
  name: string;
  tagline: string;
  focusAreas: string[];
  solutionOpportunities: string[];
  overview: string;
  icon: string;
}

export const industriesData: IndustryItem[] = [
  {
    id: "real-estate",
    number: "01",
    name: "Real Estate",
    tagline: "Streamlining property workflows and buyer engagement.",
    focusAreas: [
      "Digital business processes",
      "Customer engagement",
      "Property-related digital experiences",
      "Management solutions",
    ],
    solutionOpportunities: [
      "Interactive property showcase and inquiry management platforms",
      "Lead qualification pipelines with automated site-visit scheduling",
      "Broker network collaboration tools and document registries",
      "Centralized project status updates for prospective buyers",
    ],
    overview:
      "Modern real estate operations involve multiple stakeholders—developers, agents, legal teams, and home buyers. MKTECH focuses on crafting digital workflows that eliminate miscommunication, organize property portfolios, and make customer interactions direct and transparent.",
    icon: "Building2",
  },
  {
    id: "quick-commerce",
    number: "02",
    name: "Quick Commerce",
    tagline: "Enabling high-speed order orchestration and fulfillment clarity.",
    focusAreas: [
      "Digital commerce",
      "Ordering experiences",
      "Delivery ecosystem",
      "Customer engagement",
    ],
    solutionOpportunities: [
      "Lightweight catalog and rapid item-picker interfaces",
      "Order lifecycle tracking from warehouse dispatch to customer doorstep",
      "Inventory synchronization systems for dark stores and micro-hubs",
      "Customer status updates and instant support connectivity",
    ],
    overview:
      "Quick commerce demands precision under tight timelines. MKTECH focuses on designing low-latency ordering interfaces, clear status feeds, and dispatch coordination tools that help local commerce units operate with operational discipline.",
    icon: "Truck",
  },
  {
    id: "boutique-retail",
    number: "03",
    name: "Boutique & Retail",
    tagline: "Empowering distinctive retailers with modern digital touchpoints.",
    focusAreas: [
      "Digital presence",
      "Customer engagement",
      "Retail operations",
      "Online experiences",
    ],
    solutionOpportunities: [
      "Custom brand showpiece web experiences reflecting craftsmanship",
      "Direct WhatsApp and digital booking inquiry integrations",
      "Boutique inventory tracking across showroom and studio locations",
      "Personalized customer outreach and repeat order management",
    ],
    overview:
      "Specialty boutiques and lifestyle retailers succeed through personal relationships and unique visual appeal. MKTECH builds digital storefronts and showroom management tools that preserve high-touch customer care while extending digital reach.",
    icon: "Store",
  },
  {
    id: "food-processing",
    number: "04",
    name: "Food Processing",
    tagline: "Digitizing batch tracking, compliance records, and distribution.",
    focusAreas: [
      "Business digitization",
      "Operational systems",
      "Customer-facing technology",
      "Digital growth",
    ],
    solutionOpportunities: [
      "Raw material intake, batch tracking, and expiry record systems",
      "Quality assurance checklist interfaces for shop-floor supervisors",
      "B2B ordering portals for institutional distributors and retailers",
      "Digital compliance documentation and traceability archives",
    ],
    overview:
      "Food processing units require stringent quality control, hygiene audits, and predictable batch handoffs. MKTECH designs operational software that replaces paper-bound registries with accessible digital records and order tracking.",
    icon: "Factory",
  },
  {
    id: "farmer-village-solutions",
    number: "05",
    name: "Farmer & Village Problem Solving",
    tagline: "Grassroots technology designed for rural practicality and community impact.",
    focusAreas: [
      "Technology for grassroots problems",
      "Digital access",
      "Problem-solving platforms",
      "Community-focused solutions",
    ],
    solutionOpportunities: [
      "Low-bandwidth accessible interfaces for rural citizens and farmers",
      "Village problem tracking, grievance logging, and resolution monitoring",
      "Direct agricultural input requirement aggregation platforms",
      "Localized advisory and market price discovery tools",
    ],
    overview:
      "Grassroots communities face unique constraints: varied digital literacy, variable network connectivity, and fragmented local systems. MKTECH actively prioritizes ground-level problem discovery to engineer intuitive, practical tools that bridge these gaps.",
    icon: "Sprout",
  },
];
