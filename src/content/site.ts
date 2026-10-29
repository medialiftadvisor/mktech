export interface SiteConfig {
  name: string;
  domain: string;
  url: string;
  tagline: string;
  subheadline: string;
  positioning: string;
  purpose: string;
  vision: string;
  mission: string;
  stage: string;
  teamSize: string;
  contact: {
    email: string;
    phone: string;
    address: string;
    workingHours: string;
  };
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
  navigation: Array<{
    name: string;
    href: string;
  }>;
}

export const siteConfig: SiteConfig = {
  name: "MKTECH",
  domain: "mktech.ai.studio",
  url: "https://mktech.ai.studio",
  tagline: "Technology for a Better Tomorrow",
  subheadline: "Turning real-world problems into practical digital solutions.",
  positioning:
    "MKTECH is a problem-solving technology startup building practical digital solutions for businesses and communities.",
  purpose:
    "Our purpose is to make technology more practical, accessible and useful for solving real-world challenges.",
  vision:
    "To build practical technology solutions that solve real-world problems and create scalable impact.",
  mission:
    "To combine technology and problem-solving to create useful digital experiences for businesses and communities.",
  stage: "Pre-Seed Technology Startup",
  teamSize: "5 Members",
  contact: {
    email: "my150417@gmail.com",
    phone: "+91 9660686394",
    address: "Rajasthan, India",
    workingHours: "Monday – Friday: 9:30 AM – 6:30 PM IST",
  },
  social: {
    // Configurable social links. Unset values remain hidden or lead to contact.
    linkedin: "",
    twitter: "",
    github: "",
  },
  navigation: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Solutions", href: "/solutions" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Industries", href: "/industries" },
    { name: "Projects", href: "/projects" },
    { name: "Technology", href: "/technology" },
    { name: "Insights", href: "/insights" },
    { name: "Contact", href: "/contact" },
  ],
};
