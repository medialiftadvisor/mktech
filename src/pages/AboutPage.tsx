import React from "react";
import { Breadcrumbs } from "../components/ui/Breadcrumbs";
import { SectionHeading } from "../components/ui/SectionHeading";
import { CtaSection } from "../components/ui/CtaSection";
import { TestimonialsReadiness } from "../components/ui/TestimonialsReadiness";
import { teamData } from "../content/team";
import {
  Compass,
  Eye,
  CheckCircle2,
  Workflow,
  ArrowRight,
  Shield,
  Layers,
  Users,
} from "lucide-react";
import { Button } from "../components/ui/Buttons";

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const approachStages = [
    "Problem",
    "Understand",
    "Design",
    "Build",
    "Deploy",
    "Improve",
    "Scale",
  ];

  return (
    <div className="space-y-16 md:space-y-24 pb-16">
      {/* Top Breadcrumb & Hero */}
      <section className="bg-white border-b border-slate-200/80 pt-6 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ label: "About MKTECH" }]}
            onNavigate={onNavigate}
            className="mb-8"
          />

          <div className="max-w-3xl">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#1554A3] block mb-3">
              About MKTECH
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0B1F3A] tracking-tight leading-tight text-balance">
              Building Technology Around Real-World Needs.
            </h1>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              MKTECH is a technology-driven startup focused on creating practical digital solutions for businesses and communities. We believe software is most powerful when it eliminates concrete daily friction.
            </p>
          </div>
        </div>
      </section>

      {/* Purpose, Vision, Mission Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Purpose */}
          <div className="rounded-2xl border border-slate-200/90 bg-white p-7 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#1554A3]/10 text-[#1554A3] flex items-center justify-center mb-4">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                Our Purpose
              </h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                "Our purpose is to make technology more practical, accessible and useful for solving real-world challenges."
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 font-medium">
              Practical Utility Over Speculation
            </div>
          </div>

          {/* Vision */}
          <div className="rounded-2xl border border-slate-200/90 bg-white p-7 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#1554A3]/10 text-[#1554A3] flex items-center justify-center mb-4">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                Our Vision
              </h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                "To build practical technology solutions that solve real-world problems and create scalable impact."
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 font-medium">
              Scalable Long-Term Value
            </div>
          </div>

          {/* Mission */}
          <div className="rounded-2xl border border-slate-200/90 bg-white p-7 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#1554A3]/10 text-[#1554A3] flex items-center justify-center mb-4">
                <Workflow className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                Our Mission
              </h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                "To combine technology and problem-solving to create useful digital experiences for businesses and communities."
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 font-medium">
              Execution for Business & Community
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach (Problem → Understand → Design → Build → Deploy → Improve → Scale) */}
      <section className="bg-white py-16 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Operating Model"
            title="Our Approach"
            subtitle="A systematic continuum connecting problem discovery directly to resilient technical execution."
          />

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {approachStages.map((stage, idx) => (
              <div
                key={stage}
                className="rounded-xl border border-slate-200/90 bg-[#F6F9FC] p-4 text-center flex flex-col items-center justify-center min-h-[110px]"
              >
                <span className="font-mono text-xs font-bold text-[#1554A3] mb-1">
                  0{idx + 1}
                </span>
                <span className="text-sm font-bold text-slate-900">{stage}</span>
                {idx < approachStages.length - 1 && (
                  <span className="hidden lg:block text-slate-400 text-xs mt-2">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 rounded-2xl bg-[#0B1F3A] text-white text-xs sm:text-sm leading-relaxed max-w-3xl">
            <span className="text-sky-400 font-semibold block mb-1">
              Practical Execution Rule
            </span>
            "We never jump straight to code without understanding who will touch the system, what happens when network connectivity drops, and how everyday business operations flow."
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Leadership"
          title="Meet the Founder"
          subtitle="Guided by grounded product thinking and direct engagement with business and community challenges."
        />

        <div className="rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-12 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Founder Photo Area */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center p-8 rounded-2xl bg-gradient-to-br from-[#0B1F3A] to-[#1554A3] text-white text-center">
              <div className="w-28 h-28 rounded-full overflow-hidden bg-white/10 border-2 border-white/20 mb-4 shadow-md flex items-center justify-center">
                <img
                  src={teamData.founder.photoUrl}
                  alt={teamData.founder.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-white">
                {teamData.founder.name}
              </h3>
              <span className="text-xs uppercase tracking-wider font-semibold text-sky-300 mt-1">
                {teamData.founder.title}
              </span>
              <span className="text-[11px] text-slate-300 mt-3 font-mono">
                MKTECH Leadership
              </span>
            </div>

            {/* Description & Leadership Focus */}
            <div className="lg:col-span-8 space-y-5">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Role & Direction
                </span>
                <p className="text-lg sm:text-xl font-medium text-slate-800 mt-1 leading-relaxed">
                  "{teamData.founder.bio}"
                </p>
              </div>

              <div className="pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1554A3] block mb-3">
                  Core Leadership Priorities
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {teamData.founder.leadershipFocus.map((focus) => (
                    <div
                      key={focus}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 bg-slate-50 border border-slate-200/60 rounded-lg p-3"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#1554A3] shrink-0 mt-0.5" />
                      <span>{focus}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onNavigate("/contact")}
                  icon={<ArrowRight className="w-3.5 h-3.5" />}
                >
                  Schedule Founder Discovery Call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section (A 5-Member Team) */}
      <section className="bg-slate-50 py-16 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Team Structure"
            title={teamData.teamSummary.headline}
            subtitle={teamData.teamSummary.description}
          />

          {/* 4 Core Operational Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {teamData.teamSummary.corePillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-xl border border-slate-200/90 bg-white p-5 shadow-2xs"
              >
                <div className="w-8 h-8 rounded-md bg-[#1554A3]/10 text-[#1554A3] flex items-center justify-center font-bold text-xs mb-3">
                  <Layers className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-slate-900">{pillar.title}</h4>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

          {/* Modern Team Visualization Cards (Structured & ready for future updates) */}
          <div className="space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
              Core Team Roles & Coordination Architecture
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {teamData.members.map((member) => (
                <div
                  key={member.id}
                  className={`rounded-xl border p-5 transition-all ${
                    member.isFounder
                      ? "bg-[#0B1F3A] text-white border-slate-800 shadow-sm"
                      : "bg-white border-slate-200/90 text-slate-800 shadow-2xs"
                  }`}
                >
                  <div
                    className={`w-14 h-14 rounded-xl overflow-hidden flex items-center justify-center font-bold text-sm mb-3 border ${
                      member.isFounder
                        ? "border-sky-400/40 bg-[#1554A3]"
                        : "border-slate-200 bg-slate-100"
                    }`}
                  >
                    {member.photoUrl ? (
                      <img
                        src={member.photoUrl}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className={member.isFounder ? "text-white" : "text-slate-700"}>
                        {member.avatarPlaceholder}
                      </span>
                    )}
                  </div>
                  <h5
                    className={`font-bold text-sm tracking-tight ${
                      member.isFounder ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {member.name}
                  </h5>
                  <span
                    className={`text-[11px] font-medium block mt-0.5 ${
                      member.isFounder ? "text-sky-300" : "text-[#1554A3]"
                    }`}
                  >
                    {member.role}
                  </span>
                  <p
                    className={`mt-2 text-[11px] leading-relaxed ${
                      member.isFounder ? "text-slate-300" : "text-slate-500"
                    }`}
                  >
                    {member.focus}
                  </p>
                  {member.isSlotPending && (
                    <span className="inline-block mt-3 text-[10px] text-slate-400 font-mono">
                      Active Operational Role
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study & Governance Notice */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TestimonialsReadiness onNavigateToContact={() => onNavigate("/contact")} />
      </section>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CtaSection onNavigate={onNavigate} />
      </div>
    </div>
  );
};
