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
import { Card3D } from "../components/ui/Card3D";
import { motion } from "framer-motion";
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
          1. HERO SECTION WITH 3D DEPTH & AMBIENT ORBS
          ================================================== */}
      <section className="relative pt-6 sm:pt-12 pb-10 overflow-hidden">
        {/* Floating 3D Ambient Orbs in Background */}
        <div className="absolute top-10 left-1/4 w-72 h-72 rounded-full bg-gradient-to-tr from-[#1554A3]/20 to-sky-400/20 blur-3xl pointer-events-none animate-float-slow" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 rounded-full bg-gradient-to-br from-indigo-500/15 to-[#1554A3]/15 blur-3xl pointer-events-none animate-float-reverse" />
        <div className="absolute inset-0 bg-grid-tech pointer-events-none opacity-60" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content (7 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 space-y-6"
            >
              {/* Clean Pre-title (3D Glass Badge) */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/90 border border-slate-200 shadow-xs text-xs font-semibold tracking-wider uppercase text-[#1554A3] backdrop-blur-md">
                <span className="w-2.5 h-2.5 rounded-full bg-[#1554A3] animate-pulse" />
                <span>Pre-Seed Technology Startup</span>
                <span className="text-slate-300">|</span>
                <span className="text-slate-600 font-medium lowercase first-letter:uppercase">Problem-Solving Architecture</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#0B1F3A] tracking-tight leading-[1.12] text-balance">
                Technology for a <span className="bg-gradient-to-r from-[#1554A3] via-[#2563EB] to-[#38BDF8] bg-clip-text text-transparent">Better Tomorrow.</span>
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
                  onClick={() => onNavigate("/portfolio")}
                >
                  View Client Portfolio
                </Button>
              </div>

              {/* Verified Trust Strip */}
              <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-500">
                <div className="flex items-center gap-1.5 font-semibold text-slate-700">
                  <ShieldCheck className="w-4 h-4 text-[#1554A3]" />
                  <span>5 Client Domains</span>
                </div>
                <span>·</span>
                <span>Sub-Second Page Loads</span>
                <span>·</span>
                <span>100% Production Tested</span>
              </div>
            </motion.div>

            {/* Right Hero Visual (5 cols) with 3D Tilt perspective */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-3xl p-2 bg-gradient-to-b from-white/90 to-slate-100/60 shadow-2xl border border-slate-200/90 backdrop-blur-xl">
                <AbstractTechVisual variant="hero" />
              </div>
            </motion.div>
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

          {/* 5 Featured Client Cards with 3D Tilt Physics & Glow */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {clientPortfolioData.map((client, idx) => (
              <Card3D
                key={client.id}
                depth={10}
                glowColor={
                  idx === 0
                    ? "rgba(14, 165, 233, 0.25)"
                    : idx === 1
                    ? "rgba(21, 84, 163, 0.25)"
                    : idx === 2
                    ? "rgba(16, 185, 129, 0.25)"
                    : "rgba(245, 158, 11, 0.25)"
                }
                className="h-full"
              >
                <div className="p-6 flex flex-col justify-between h-full bg-gradient-to-b from-white to-slate-50/50">
                  <div>
                    <div className="flex items-center justify-between text-xs pb-3 border-b border-slate-100">
                      <span className="font-bold text-[#1554A3] truncate max-w-[170px] uppercase tracking-wider text-[11px]">
                        {client.category}
                      </span>
                      <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full font-semibold text-[10px] flex items-center gap-1 border border-emerald-200/50">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                        Live
                      </span>
                    </div>

                    <h3 className="font-black text-xl text-slate-900 mt-4 group-hover:text-[#1554A3] transition-colors tracking-tight">
                      {client.name}
                    </h3>
                    <a
                      href={client.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-mono text-[#1554A3] hover:underline mt-1 font-semibold"
                    >
                      {client.displayUrl}
                      <ExternalLink className="w-3 h-3" />
                    </a>

                    <p className="text-xs text-slate-600 mt-3 line-clamp-2 leading-relaxed">
                      {client.tagline}
                    </p>

                    {/* Metric Tag */}
                    {client.metrics && (
                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                          {client.metrics[0].label}:
                        </span>
                        <span className="text-xs font-mono font-bold text-[#1554A3]">
                          {client.metrics[0].value}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <a
                      href={client.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1554A3] text-white hover:bg-[#0B1F3A] text-xs font-bold transition-all shadow-xs"
                    >
                      <span>Visit Site</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <button
                      type="button"
                      onClick={() => onNavigate("/portfolio")}
                      className="text-xs text-slate-500 hover:text-[#1554A3] font-semibold cursor-pointer"
                    >
                      Case Details &rarr;
                    </button>
                  </div>
                </div>
              </Card3D>
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
            <Card3D depth={14} glowColor="rgba(21, 84, 163, 0.2)">
              <div className="p-8 flex flex-col justify-between h-full bg-gradient-to-b from-white to-[#F8FAFD]">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#1554A3]/10 text-[#1554A3] flex items-center justify-center font-mono text-xl font-black mb-5 shadow-xs">
                    01
                  </div>
                  <h3 className="text-xl font-black text-slate-900 tracking-tight">
                    PROBLEM FIRST
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    Understand the challenge before choosing the technology. We never force speculative tools onto straightforward business problems.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-slate-100 text-xs font-semibold text-[#1554A3] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1554A3]" />
                  <span>Deconstruct operational bottlenecks</span>
                </div>
              </div>
            </Card3D>

            {/* Card 2 */}
            <Card3D depth={14} glowColor="rgba(37, 99, 235, 0.2)">
              <div className="p-8 flex flex-col justify-between h-full bg-gradient-to-b from-white to-[#F8FAFD]">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-mono text-xl font-black mb-5 shadow-xs">
                    02
                  </div>
                  <h3 className="text-xl font-black text-slate-900 tracking-tight">
                    PRACTICAL SOLUTIONS
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    Build solutions around actual user and business requirements. Interfaces are engineered to be clear, responsive, and easy to adopt.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-slate-100 text-xs font-semibold text-blue-600 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  <span>Intuitive, field-tested workflows</span>
                </div>
              </div>
            </Card3D>

            {/* Card 3 */}
            <Card3D depth={14} glowColor="rgba(16, 185, 129, 0.2)">
              <div className="p-8 flex flex-col justify-between h-full bg-gradient-to-b from-white to-[#F8FAFD]">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-mono text-xl font-black mb-5 shadow-xs">
                    03
                  </div>
                  <h3 className="text-xl font-black text-slate-900 tracking-tight">
                    BUILT TO SCALE
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    Design with future growth and adaptability in mind. Clean modular codebases that handle increasing transactions gracefully.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-slate-100 text-xs font-semibold text-emerald-600 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  <span>Long-term architecture integrity</span>
                </div>
              </div>
            </Card3D>
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
