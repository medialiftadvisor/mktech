export interface ClientPortfolioItem {
  id: string;
  name: string;
  url: string;
  displayUrl: string;
  category: "E-Commerce" | "Services & Logistics" | "Interior & Home Decor" | "Enterprise & Trading" | "Digital Solutions";
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
    name: "Success RJ",
    url: "https://www.successrj.com",
    displayUrl: "www.successrj.com",
    category: "Services & Logistics",
    clientSector: "Professional Services & Regional Solutions",
    tagline: "Educational, career empowerment & service platform for Rajasthan",
    description:
      "A high-performing, mobile-responsive web platform designed for regional engagement, course access, and structured career development workflows.",
    challengeSolved:
      "Replaced disjointed inquiry channels and slow mobile experiences with an optimized, lightweight portal with clear action funnels and secure service access.",
    techStack: ["Next-Gen Web UI", "Responsive Architecture", "SEO Optimization", "Cloud Hosting"],
    features: [
      "Fast-loading mobile-first user experience",
      "Streamlined candidate & client enrollment",
      "Direct WhatsApp and call dispatch integration",
      "Structured regional service catalogs",
    ],
    deliverables: [
      "Custom Brand Responsive Website",
      "Inquiry & Lead Capture Automation",
      "On-Page Technical SEO & Social Meta",
      "Performance Tuning (95+ Mobile Score)",
    ],
    year: "2024",
    status: "Live & Active",
    featured: true,
    metrics: [
      { label: "Uptime & Availability", value: "99.9%" },
      { label: "Mobile Speed", value: "< 1.2s" },
      { label: "Client Inquiries", value: "+140%" },
    ],
  },
  {
    id: "sevazo",
    name: "Sevazo",
    url: "https://www.sevazo.in",
    displayUrl: "www.sevazo.in",
    category: "Services & Logistics",
    clientSector: "On-Demand Home Services & Lifestyle",
    tagline: "Reliable home, personal & essential on-demand services platform",
    description:
      "A modern, high-trust digital booking and service facilitation portal connecting urban households with verified local service professionals.",
    challengeSolved:
      "Solved fragmented customer booking phone trees and scheduling chaos with an intuitive service picker, real-time requests, and automated service coordination.",
    techStack: ["React Ecosystem", "Interactive Service Matrix", "Instant Booking Flow", "REST APIs"],
    features: [
      "Interactive category browsing and instant booking",
      "Transparent pricing breakdowns & service packages",
      "Automated WhatsApp inquiry and dispatch bridge",
      "Verified technician and service partner showcase",
    ],
    deliverables: [
      "Customer-Facing Booking Web App",
      "Operator Dispatch Interface",
      "Dynamic Service Catalog CMS",
      "Local Search SEO Architecture",
    ],
    year: "2024",
    status: "Live & Active",
    featured: true,
    metrics: [
      { label: "Booking Speed", value: "3 Steps" },
      { label: "Customer Satisfaction", value: "4.9/5" },
      { label: "Monthly Users", value: "Active Growth" },
    ],
  },
  {
    id: "gharsingaar",
    name: "Ghar Singaar",
    url: "https://www.gharsingaar.com",
    displayUrl: "www.gharsingaar.com",
    category: "Interior & Home Decor",
    clientSector: "Home Decor, Furnishings & Boutique Lifestyle",
    tagline: "Curated home aesthetics, luxury decor & furnishing studio",
    description:
      "An elegant digital showroom and visual commerce experience highlighting artisanal home decor, room styling collections, and boutique furnishings.",
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
    category: "Enterprise & Trading",
    clientSector: "B2B Industrial Supplies, Wholesale & Corporate Procurement",
    tagline: "Industrial equipment, procurement supplies & commercial trade solutions",
    description:
      "A robust enterprise web portal engineered for commercial procurement, bulk product inquiries, wholesale catalog distribution, and client contract management.",
    challengeSolved:
      "Streamlined complex B2B procurement inquiries, replaced paper product sheets with downloadable digital specifications, and established credible enterprise branding.",
    techStack: ["Enterprise Web Portal", "B2B Inquiry System", "Specification Sheets Hub", "Security Hardening"],
    features: [
      "Comprehensive industrial & commercial equipment directory",
      "Bulk quotation request system with file attachment support",
      "Downloadable technical datasheets and compliance certifications",
      "Corporate procurement verification flow",
    ],
    deliverables: [
      "Enterprise Corporate Portal",
      "B2B Quotation Management Pipeline",
      "Product Documentation Repository",
      "Industrial SEO & Lead Generation Framework",
    ],
    year: "2023 - 2024",
    status: "Live & Active",
    featured: true,
    metrics: [
      { label: "Procurement Requests", value: "100+ B2B" },
      { label: "Catalog Page Speed", value: "98/100" },
      { label: "Corporate Clients", value: "National Reach" },
    ],
  },
];
