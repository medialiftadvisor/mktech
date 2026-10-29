export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  summary: string;
  category:
    | "Technology"
    | "Digital Transformation"
    | "Business"
    | "Innovation"
    | "Agriculture & Rural Technology"
    | "Quick Commerce"
    | "Startup Journey";
  author: string;
  date: string;
  readingTime: string;
  seoTitle: string;
  seoDescription: string;
  content: string[];
  isFeatured?: boolean;
}

export const blogCategories = [
  "All",
  "Technology",
  "Digital Transformation",
  "Business",
  "Innovation",
  "Agriculture & Rural Technology",
  "Quick Commerce",
  "Startup Journey",
] as const;

export const blogPosts: BlogPost[] = [
  {
    id: "problem-first-software-engineering",
    slug: "problem-first-software-engineering",
    title: "Why Problem-First Thinking Beats Technology-First Hype",
    summary:
      "Before writing a line of code or picking modern frameworks, engineering teams must deeply diagnose the underlying operational friction.",
    category: "Technology",
    author: "Mahesh",
    date: "September 2026",
    readingTime: "4 min read",
    seoTitle: "Why Problem-First Thinking Beats Technology Hype | MKTECH Insights",
    seoDescription:
      "Explore MKTECH's core philosophy on why understanding the real-world operational problem is the most vital step in software development.",
    isFeatured: true,
    content: [
      "In the modern technology landscape, it is easy to become enamored with novelty—new frameworks, trending buzzwords, and speculative architectures. Yet, software built around technology rather than user reality often becomes shelfware.",
      "At MKTECH, our fundamental premise is straightforward: understand the challenge before choosing the technology. When building for retail shop floors, food processing units, or village farmers, usability and resilience under real constraints matter far more than theoretical complexity.",
      "By isolating the exact point of friction—whether it is a delay in order dispatch, ambiguity in property inventory, or paper-based compliance logs—we can engineer practical digital tools that produce tangible operational clarity.",
    ],
  },
  {
    id: "digitizing-rural-grassroots-workflows",
    slug: "digitizing-rural-grassroots-workflows",
    title: "Designing for Practical Utility in Grassroots Environments",
    summary:
      "Building digital solutions for rural and semi-urban communities requires stripping away assumptions about connectivity, device uniformity, and digital literacy.",
    category: "Agriculture & Rural Technology",
    author: "MKTECH Research Desk",
    date: "September 2026",
    readingTime: "5 min read",
    seoTitle: "Designing for Utility in Grassroots Environments | MKTECH Insights",
    seoDescription:
      "A strategic look at building software for farmers, village stakeholders, and rural enterprises under intermittent network constraints.",
    isFeatured: false,
    content: [
      "Technology adoption outside metropolitan tech hubs is shaped by ground reality. Intermittent mobile internet, diverse regional dialects, and variable digital confidence define how everyday citizens engage with digital platforms.",
      "Grassroots software design demands clarity above all. Large touch targets, concise vernacular cues, instant offline feedback, and voice or messaging bridges bridge the gap between complex digital systems and human needs.",
      "Our ongoing explorations in rural problem solving center on listening first—understanding how farmers coordinate inputs, how village community requirements are registered, and where simple digital platforms can bring transparency.",
    ],
  },
  {
    id: "operational-clarity-for-growing-businesses",
    slug: "operational-clarity-for-growing-businesses",
    title: "From Spreadsheets to Systems: The Digitization Inflection Point",
    summary:
      "How emerging SMEs in real estate, boutique retail, and food processing recognize when manual spreadsheets are throttling their next stage of growth.",
    category: "Digital Transformation",
    author: "MKTECH Team",
    date: "August 2026",
    readingTime: "4 min read",
    seoTitle: "From Spreadsheets to Systems: Digitization Inflection Point | MKTECH",
    seoDescription:
      "Recognizing the transition signs when manual operations and informal communication channels hinder business scalability.",
    isFeatured: false,
    content: [
      "Most successful businesses begin with spreadsheets and messaging groups. They are flexible, free, and familiar. However, as order volumes grow, customer inquiries multiply, or multi-location branches open, the spreadsheet model begins to break down.",
      "Discrepancies creep into inventory counts, customer follow-ups get dropped, and business owners find themselves spending hours reconciling discrepancies rather than focusing on growth.",
      "Transitioning to a structured web platform does not require an unwieldy, expensive enterprise ERP. Lightweight, purpose-built business systems deliver 90% of the operational value with zero unnecessary overhead.",
    ],
  },
];
