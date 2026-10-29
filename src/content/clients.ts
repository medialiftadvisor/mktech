export interface ClientPortfolioItem {
  id: string;
  name: string;
  url: string;
  displayUrl: string;
  category: "Real Estate & Infra" | "Hyperlocal & Quick Commerce" | "Interior & Home Decor" | "Solar & Clean Energy" | "Services & Logistics";
  tagline: string;
  description: string;
  challengeSolved: string;
  techStack: string[];
  features: string[];
  deliverables: string[];
  clientSector: string;
  year: string;
  status: "Live & Active";
  metrics?: { label: string; value: string }[];
  featured?: boolean;
}

export const clientPortfolioData: ClientPortfolioItem[] = [
  {
    id: "successrj",
    name: "Success RJ Infra",
    url: "https://www.successrj.com",
    displayUrl: "www.successrj.com",
    category: "Real Estate & Infra",
    clientSector: "Real Estate & Infrastructure Development (Dholera SIR)",
    tagline: "Premier plotted development & smart city infrastructure firm in Dholera SIR, Gujarat",
    description:
      "A specialized real estate and infrastructure development platform showcasing verified plotted developments, industrial zoning opportunities, and high-growth land investments within India's first greenfield smart city — Dholera Special Investment Region (SIR), Gujarat.",
    challengeSolved:
      "Transformed complex smart city master plans, TP schemes, and plotted layouts into a transparent, interactive digital investor portal. Replaced manual WhatsApp follow-ups with automated site visit scheduling, plot inventory visualization, and verified legal documentation downloads.",
    techStack: ["Next-Gen Web Portal", "Interactive Plot Masterplans", "Lead Capture Engine", "Secure Cloud CDN"],
    features: [
      "Dholera SIR smart city investment guide & plotted layout showcase",
      "Interactive Town Planning (TP) scheme & expressway proximity maps",
      "Instant site visit appointment booking & investor inquiry desk",
      "Comprehensive project verification & documentation repository",
    ],
    deliverables: [
      "Custom Real Estate & Infrastructure Web Portal",
      "Plotted Project Gallery & Interactive Showcase",
      "Investor Lead Capture & CRM Routing Integration",
      "Geo-Targeted Smart City Search Engine Optimization (SEO)",
    ],
    year: "2024",
    status: "Live & Active",
    featured: true,
    metrics: [
      { label: "Target Region", value: "Dholera SIR" },
      { label: "Investor Inquiries", value: "+180%" },
      { label: "Site Visit Bookings", value: "Active Daily" },
    ],
  },
  {
    id: "sevazo",
    name: "SEVAZO",
    url: "https://www.sevazo.in",
    displayUrl: "www.sevazo.in",
    category: "Hyperlocal & Quick Commerce",
    clientSector: "Indian Hyperlocal Quick Commerce & Instant Delivery",
    tagline: "Indian hyperlocal delivery network powering 15-to-30-minute delivery for daily essentials",
    description:
      "A fast-paced Indian hyperlocal delivery network engineered for rapid 15-to-30-minute fulfillment across groceries, fresh produce, daily household needs, authentic sweets, and OTC pharmacy essentials.",
    challengeSolved:
      "Engineered an ultra-fast, lightweight ordering web interface capable of handling split-second cart updates, store availability checks, dynamic delivery time slot calculations, and order routing across local merchant hubs and riders.",
    techStack: ["React Ecosystem", "Low-Latency State Store", "Live Geo-Dispatching", "Dynamic Cart & Checkout"],
    features: [
      "15-to-30-minute express hyperlocal delivery routing",
      "Multi-category catalog: groceries, sweets, daily needs & pharmacy",
      "Real-time basket management and instant WhatsApp order dispatches",
      "Optimized for high-concurrency order placement and mobile touchscreens",
    ],
    deliverables: [
      "Consumer Instant-Ordering Web Application",
      "Hyperlocal Hub & Merchant Dispatch Interface",
      "Dynamic Multi-Category Inventory Engine",
      "Speed-Optimized Mobile Experience (Sub-second FCP)",
    ],
    year: "2024",
    status: "Live & Active",
    featured: true,
    metrics: [
      { label: "Delivery Speed", value: "15 - 30 Mins" },
      { label: "Product Categories", value: "4 Essential Stacks" },
      { label: "Mobile Checkout", value: "< 25 Seconds" },
    ],
  },
  {
    id: "gharsingaar",
    name: "Ghar Singaar",
    url: "https://www.gharsingaar.com",
    displayUrl: "www.gharsingaar.com",
    category: "Interior & Home Decor",
    clientSector: "Home Decor, Curated Furnishings & Luxury Interiors",
    tagline: "Curated home aesthetics, bespoke furnishings & interior styling studio",
    description:
      "An evocative digital showroom and visual commerce portal highlighting artisanal home decor, room styling collections, luxury furnishing fabrics, and interior customization consultations.",
    challengeSolved:
      "Elevated an offline retail showroom into an aspirational online visual gallery that enables catalog browsing, custom quotation requests, and design consultations.",
    techStack: ["High-Res Visual Gallery", "E-Commerce Architecture", "Consultation Scheduler", "Tailwind UI"],
    features: [
      "High-definition product visuals with zoom & room preview",
      "Custom room aesthetic curation (Living, Bed, Decor)",
      "Instant inquiry with product SKU preservation",
      "Designer consultation request workflow",
    ],
    deliverables: [
      "Bespoke Lifestyle E-Catalog",
      "Product Showcase with Filterable Attributes",
      "WhatsApp Business Direct Purchase Flow",
      "Brand Aesthetic Visual Architecture",
    ],
    year: "2024",
    status: "Live & Active",
    featured: true,
    metrics: [
      { label: "Catalog Engagement", value: "3.4 min" },
      { label: "Inquiry Conversion", value: "+85%" },
      { label: "Digital Catalog Items", value: "250+" },
    ],
  },
  {
    id: "enterpriseslakshay",
    name: "Enterprises Lakshay",
    url: "https://www.enterpriseslakshay.com",
    displayUrl: "www.enterpriseslakshay.com",
    category: "Solar & Clean Energy",
    clientSector: "Solar Energy Solutions, Rooftop PV & Clean Power Infrastructure",
    tagline: "End-to-end solar service provider offering rooftop, commercial & industrial solar systems",
    description:
      "A comprehensive solar service provider platform delivering turnkey residential rooftop solar installations, commercial & industrial (C&I) clean power solutions, solar water pumping, and ongoing renewable energy operations & maintenance.",
    challengeSolved:
      "Simplified solar adoption for property owners and industrial facilities by creating an interactive solar ROI calculator, subsidy guidance desk, project capacity visualizer, and streamlined engineering survey request system.",
    techStack: ["Clean Tech Web Architecture", "Solar Capacity & ROI Estimator", "Turnkey Project Showcase", "Lead Routing Engine"],
    features: [
      "Residential rooftop and commercial solar installation showcase",
      "Government subsidy (PM Surya Ghar / State incentives) eligibility guide",
      "Direct technical site survey request & feasibility assessment pipeline",
      "Industrial solar project portfolio & component warranty documentation",
    ],
    deliverables: [
      "High-Conversion Solar Services Corporate Portal",
      "Interactive Solar Consultation & Quotation Engine",
      "Commercial & Residential Solar Case Gallery",
      "Clean Energy Regional Search & Lead Funnel",
    ],
    year: "2023 - 2024",
    status: "Live & Active",
    featured: true,
    metrics: [
      { label: "Domain", value: "Solar & Clean Energy" },
      { label: "Installation Scope", value: "Rooftop to C&I" },
      { label: "Consultation Inquiries", value: "+160%" },
    ],
  },
];
