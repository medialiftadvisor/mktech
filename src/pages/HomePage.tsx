import React from "react";
import { AbstractTechVisual } from "../components/ui/AbstractTechVisual";
import { Button } from "../components/ui/Buttons";
import { SectionHeading } from "../components/ui/SectionHeading";
import { ProcessLine } from "../components/ui/ProcessLine";
import { FAQAccordion } from "../components/ui/FAQAccordion";
import { CtaSection } from "../components/ui/CtaSection";
import { IndustryCard } from "../components/ui/IndustryCard";
import { SolutionCard } from "../components/ui/SolutionCard";
import { industriesData } from "../content/industries";
import { solutionsData } from "../content/solutions";
import { faqData } from "../content/faq";
import { clientPortfolioData } from "../content/clients";
import {
  ArrowRight,
  Target,
  Sparkles,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  Workflow,
  Code2,
  Users2,
  ChevronRight,
  ExternalLink,
  Globe,
} from "lucide-react";

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const whyCards = [
    {
      title: "Problem-First Thinking",
      desc: "We diagnose the operational friction before deciding any software architecture.",
      icon: Target,
    },
    {
      title: "Customer-Centric Approach",
      desc: "Every interface is tailored around the genuine workflows of users and operators.",
      icon: Users2,
    },
    {
      title: "Multi-Sector Exposure",
      desc: "Practical cross-learnings from retail, property, food processing, logistics, and rural sectors.",
      icon: Workflow,
    },
    {
      title: "Agile Execution",
      desc: "Rapid iterative build cycles with rapid feedback loops and milestone transparency.",
      icon: Sparkles,
    },
    {
      title: "Scalable Architecture",
      desc: "Clean modular codebases designed to expand smoothly as your transaction volume multiplies.",
      icon: Code2,
    },
    {
      title: "Long-Term Technology Mindset",
      desc: "We build enduring systems designed for maintainability, stability, and zero technical bloat.",
      icon: TrendingUp,
    },
  ];

  return (
    <div className="space-y-20 md:space-y-28 pb-16">
      {/* ==================================================
          1. HERO SECTION
          ================================================== */}
      <section className="relative pt-6 sm:pt-10 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Clean Pre-title (No pill badges) */}
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#1554A3]">
                <span className="w-2 h-2 rounded-full bg-[#1554A3]" />
                <span>Pre-Seed Technology Startup</span>
                <span className="text-slate-400">·</span>
                <span className="text-slate-600 font-medium">Built for Real-World Impact</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#0B1F3A] tracking-tight leading-[1.12] text-balance">
                Technology for a Better Tomorrow.
              </h1>

              {/* Supporting Headline */}
              <p className="text-lg sm:text-xl font-semibold text-[#1554A3] text-balance">
                "Turning real-world problems into practical digital solutions."
              </p>

              {/* Supporting Paragraph */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                MKTECH is a problem-solving technology startup building practical digital solutions for businesses and communities. We bridge operational realities with dependable digital execution.
              </p>

              {/* CTA Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => onNavigate("/solutions")}
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Explore Our Solutions
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => onNavigate("/contact")}
                >
                  Let's Build Together
                </Button>
              </div>

              {/* Verified Trust Strip */}
              <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-500">
                <div className="flex items-center gap-1.5 font-medium text-slate-700">
                  <ShieldCheck className="w-4 h-4 text-[#1554A3]" />
                  <span>5 Client Domains</span>
                </div>
                <span>·</span>
                <span>Frictionless User Journeys</span>
                <span>·</span>
                <span>Zero Technical Slop</span>
              </div>
            </div>

            {/* Right Hero Visual (5 cols) */}
            <div className="lg:col-span-5">
              <AbstractTechVisual variant="hero" />
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          CLIENT PORTFOLIO SHOWCASE STRIP & SECTION
          ================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-10 shadow-xs relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 pb-6 border-b border-slate-100">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold mb-3">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Live Client Deployments
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] tracking-tight">
                Existing Client Portfolio & Live Systems
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
                Explore operational websites and customized commercial portals engineered by MKTECH for real businesses.
              </p>
            </div>
            <Button
              variant="primary"
              size="sm"
              onClick={() => onNavigate("/portfolio")}
              icon={<ArrowRight className="w-3.5 h-3.5" />}
            >
              Explore Full Portfolio
            </Button>
          </div>

          {/* 4 Featured Client Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {clientPortfolioData.map((client) => (
              <div
                key={client.id}
                className="group rounded-2xl border border-slate-200/80 bg-[#F6F9FC] p-5 hover:bg-white hover:border-[#1554A3]/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs pb-3 border-b border-slate-200/60">
                    <span className="font-semibold text-[#1554A3] truncate max-w-[140px]">
                      {client.category}
                    </span>
                    <span className="text-emerald-700 font-medium text-[11px] flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      Live
                    </span>
                  </div>

                  <h3 className="font-extrabold text-lg text-slate-900 mt-3 group-hover:text-[#1554A3] transition-colors">
                    {client.name}
                  </h3>
                  <a
                    href={client.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono text-[#1554A3] hover:underline mt-0.5 font-semibold"
                  >
                    {client.displayUrl}
                    <ExternalLink className="w-3 h-3" />
                  </a>

                  <p className="text-xs text-slate-600 mt-3 line-clamp-2 leading-relaxed">
                    {client.tagline}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200/60 flex items-center justify-between">
                  <a
                    href={client.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[#1554A3] hover:text-[#0B1F3A] flex items-center gap-1"
                  >
                    <span>Visit Website</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <button
                    type="button"
                    onClick={() => onNavigate("/portfolio")}
                    className="text-[11px] text-slate-500 hover:text-slate-800 font-medium cursor-pointer"
                  >
                    Case Details &rarr;
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          2. TRUST / QUICK INTRO SECTION
          ================================================== */}
      <section className="bg-white py-16 md:py-20 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Our Core Philosophy"
            title="Technology Built Around Real Problems"
            subtitle="Every solution begins with understanding the problem. We combine technology, business understanding and practical execution to build solutions designed for real-world use."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="rounded-2xl border border-slate-200/90 bg-[#F6F9FC] p-7 transition-all duration-300 hover:border-slate-300 flex flex-col justify-between">
              <div>
                <span className="font-mono text-2xl font-bold text-[#1554A3] block mb-3">
                  01
                </span>
                <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                  PROBLEM FIRST
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Understand the challenge before choosing the technology. We never force speculative tools onto straightforward business problems.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200/60 text-xs text-slate-500">
                Deconstruct operational bottlenecks
              </div>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl border border-slate-200/90 bg-[#F6F9FC] p-7 transition-all duration-300 hover:border-slate-300 flex flex-col justify-between">
              <div>
                <span className="font-mono text-2xl font-bold text-[#1554A3] block mb-3">
                  02
                </span>
                <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                  PRACTICAL SOLUTIONS
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Build solutions around actual user and business requirements. Interfaces are engineered to be clear, responsive, and easy to adopt.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200/60 text-xs text-slate-500">
                Intuitive, field-tested workflows
              </div>
            </div>

            {/* Card 3 */}
            <div className="rounded-2xl border border-slate-200/90 bg-[#F6F9FC] p-7 transition-all duration-300 hover:border-slate-300 flex flex-col justify-between">
              <div>
                <span className="font-mono text-2xl font-bold text-[#1554A3] block mb-3">
                  03
                </span>
                <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                  BUILT TO SCALE
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Design with future growth and adaptability in mind. Clean modular codebases that handle increasing transactions gracefully.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200/60 text-xs text-slate-500">
                Long-term architecture integrity
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          3. FOCUS AREAS (5 CLIENT DOMAINS)
          ================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <SectionHeading
            kicker="Target Domains"
            title="Where We Create Solutions"
            subtitle="MKTECH focuses on operational workflows across five key sectors, engineering practical digital systems that solve real daily challenges."
            className="mb-0"
          />
          <Button
            variant="outline"
            size="sm"
            onClick={() => onNavigate("/industries")}
            icon={<ArrowRight className="w-3.5 h-3.5" />}
          >
            All Industry Focus
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industriesData.map((ind, idx) => (
            <IndustryCard
              key={ind.id}
              industry={ind}
              onSelect={() => onNavigate("/industries")}
              featured={idx === 4}
            />
          ))}
        </div>
      </section>

      {/* ==================================================
          4. HOW WE WORK (HORIZONTAL PROCESS)
          ================================================== */}
      <section className="bg-slate-50 py-16 md:py-20 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Methodology"
            title="From Problem to Possibility"
            subtitle="A disciplined, transparent delivery framework designed to minimize friction and ensure every line of code serves an actual operational purpose."
          />
          <ProcessLine />
        </div>
      </section>

      {/* ==================================================
          5. SOLUTIONS PREVIEW
          ================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <SectionHeading
            kicker="Capabilities"
            title="Technology Solutions That Move Ideas Forward"
            subtitle="From purpose-built digital portals to automated management systems, explore our primary capability domains."
            className="mb-0"
          />
          <Button
            variant="outline"
            size="sm"
            onClick={() => onNavigate("/solutions")}
            icon={<ArrowRight className="w-3.5 h-3.5" />}
          >
            View All 6 Solutions
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutionsData.map((sol) => (
            <SolutionCard
              key={sol.id}
              solution={sol}
              onNavigateToContact={() => onNavigate("/contact")}
            />
          ))}
        </div>
      </section>

      {/* ==================================================
          6. WHY MKTECH
          ================================================== */}
      <section className="bg-white py-16 md:py-20 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="The MKTECH Advantage"
            title="Why Build With MKTECH?"
            subtitle="We are an emerging technology partner committed to deep problem discovery, clean architecture, and responsive execution."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyCards.map((card) => {
              const IconComp = card.icon;
              return (
                <div
                  key={card.title}
                  className="rounded-xl border border-slate-200/90 p-6 bg-white hover:border-[#1554A3]/50 transition-colors shadow-2xs"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#1554A3]/10 text-[#1554A3] flex items-center justify-center mb-4">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 tracking-tight">
                    {card.title}
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================================================
          7. EARLY VALIDATION
          ================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#0B1F3A] text-white p-8 sm:p-12 border border-slate-800 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Metric Column (4 cols) */}
            <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-slate-800 pb-8 lg:pb-0 lg:pr-8">
              <span className="text-xs font-semibold uppercase tracking-widest text-sky-400 block mb-2">
                Multi-Sector Exposure
              </span>
              <div className="font-mono text-5xl sm:text-6xl font-extrabold text-white tracking-tight">
                5
              </div>
              <span className="text-sm font-bold text-slate-300 uppercase tracking-wider block mt-1">
                Client Domains
              </span>
              <p className="mt-4 text-xs text-slate-400 leading-relaxed">
                "Our early work across diverse sectors gives us practical exposure to different business and community challenges."
              </p>
            </div>

            {/* Sectors Grid (8 cols) */}
            <div className="lg:col-span-8 lg:pl-4 space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Built Through Real-World Problems
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Rather than limiting our expertise to a single template, we have actively engaged with challenges across distinctive operational landscapes:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Real Estate Digital Processes",
                  "Quick Commerce Hub & Dispatch",
                  "Boutique & Retail Showroom Tech",
                  "Food Processing Batch & Quality",
                  "Farmer & Village Problem Solving",
                ].map((domain) => (
                  <div
                    key={domain}
                    className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200 bg-white/5 border border-white/10 rounded-lg px-3.5 py-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>{domain}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          8. FREQUENTLY ASKED QUESTIONS
          ================================================== */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Common Questions"
          title="Understanding How MKTECH Works"
          subtitle="Answers to common questions regarding our problem-first engagement model, technical standards, and delivery cycle."
          align="center"
        />
        <FAQAccordion items={faqData.slice(0, 4)} />
      </section>

      {/* ==================================================
          9. BOTTOM CTA
          ================================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CtaSection onNavigate={onNavigate} />
      </div>
    </div>
  );
};
