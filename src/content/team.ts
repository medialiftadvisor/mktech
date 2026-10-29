export interface TeamMember {
  id: string;
  name: string;
  role: string;
  focus: string;
  isFounder?: boolean;
  avatarPlaceholder?: string;
  isSlotPending?: boolean;
}

export interface TeamContent {
  founder: {
    name: string;
    role: string;
    title: string;
    bio: string;
    leadershipFocus: string[];
  };
  teamSummary: {
    headline: string;
    size: string;
    description: string;
    corePillars: Array<{
      title: string;
      description: string;
    }>;
  };
  members: TeamMember[];
}

export const teamData: TeamContent = {
  founder: {
    name: "Mahesh",
    role: "Founder",
    title: "Founder, MKTECH",
    bio: "Mahesh leads MKTECH's business direction, product thinking, client relationships and growth initiatives.",
    leadershipFocus: [
      "Real-world problem discovery & user research",
      "Strategic business direction & roadmap planning",
      "Client relationships & cross-sector engagements",
      "Execution agility & team synchronization",
    ],
  },
  teamSummary: {
    headline: "A 5-Member Team",
    size: "5 Members",
    description:
      "MKTECH operates with a five-member team focused on technology, execution, business requirements and customer problem solving.",
    corePillars: [
      {
        title: "Technology & Engineering",
        description:
          "Designing resilient frontend architectures, dependable APIs, and scalable database schemas.",
      },
      {
        title: "Product & Architecture",
        description:
          "Translating messy operational pain-points into clear, intuitive product roadmaps.",
      },
      {
        title: "Execution & Delivery",
        description:
          "Ensuring on-time sprint milestones, rigorous quality checks, and clean deployment.",
      },
      {
        title: "Customer Problem Discovery",
        description:
          "Conducting on-ground requirement gathering with business operators, retailers, and rural stakeholders.",
      },
    ],
  },
  members: [
    {
      id: "founder-mahesh",
      name: "Mahesh",
      role: "Founder",
      focus: "Business Direction, Product Thinking & Client Relationships",
      isFounder: true,
      avatarPlaceholder: "M",
      isSlotPending: false,
    },
    {
      id: "sachin-yadav",
      name: "Sachin Yadav",
      role: "Project Manager",
      focus: "Project Planning, Sprint Governance & Client Delivery",
      isFounder: false,
      avatarPlaceholder: "SY",
      isSlotPending: false,
    },
    {
      id: "prashant-boyal",
      name: "Prashant Boyal",
      role: "Team Leader",
      focus: "Technical Leadership, Code Quality & Architecture Execution",
      isFounder: false,
      avatarPlaceholder: "PB",
      isSlotPending: false,
    },
    {
      id: "pradhyuman-saini",
      name: "Pradhyuman Saini",
      role: "Project Developer",
      focus: "Full-Stack Development, Feature Engineering & System Integration",
      isFounder: false,
      avatarPlaceholder: "PS",
      isSlotPending: false,
    },
    {
      id: "member-5",
      name: "Domain Research Specialist",
      role: "Problem Discovery & Field Studies",
      focus: "Ground-level requirement gathering across target industries",
      isFounder: false,
      avatarPlaceholder: "05",
      isSlotPending: true,
    },
  ],
};
