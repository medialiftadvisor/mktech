export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "Engagement" | "Technical" | "General";
}

export const faqData: FAQItem[] = [
  {
    id: "faq-1",
    question: "What types of problems does MKTECH help businesses solve?",
    answer:
      "MKTECH focuses on operational bottlenecks, customer touchpoints, and business digitization. Whether you need a web platform for property workflows, order orchestration for fast commerce, showroom inventory management for a retail boutique, or a grassroots platform for community problem solving, we build practical software tailored to your specific requirements.",
    category: "General",
  },
  {
    id: "faq-2",
    question: "How does the engagement process work from problem discovery to launch?",
    answer:
      "We follow a disciplined 6-stage methodology: 01 Discover (understand the challenge), 02 Define (scope the exact solution), 03 Design (architect user journeys and system schema), 04 Develop (build and rigorously test), 05 Deploy (launch smoothly in your environment), and 06 Evolve (iterate based on real user feedback).",
    category: "Engagement",
  },
  {
    id: "faq-3",
    question: "We currently manage our operations on spreadsheets and messaging apps. Can MKTECH help us transition?",
    answer:
      "Yes. Most of our client engagements begin precisely at this transition point. We design systems that preserve the flexibility your team is accustomed to while eliminating human entry errors, data loss, and communication gaps.",
    category: "Engagement",
  },
  {
    id: "faq-4",
    question: "What technologies does MKTECH use to build solutions?",
    answer:
      "We choose modern, resilient, and widely supported open architectures. For web and cloud platforms, we leverage React, TypeScript, Node.js, Tailwind CSS, PostgreSQL, and scalable cloud hosting. We prioritize technologies that are easy to maintain, scale, and hand over to your internal team if needed.",
    category: "Technical",
  },
  {
    id: "faq-5",
    question: "Who owns the code and intellectual property developed for our project?",
    answer:
      "You retain full ownership of the intellectual property, application code, databases, and custom assets developed for your bespoke business solution upon project completion.",
    category: "Technical",
  },
  {
    id: "faq-6",
    question: "How do we get started with a conversation or requirement review?",
    answer:
      "You can reach out through our Contact page or send an enquiry with an overview of your requirement. Our founding team will schedule a discovery conversation within 24-48 business hours to understand your operational challenge and evaluate feasibility.",
    category: "General",
  },
];
