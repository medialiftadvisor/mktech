import React from "react";
import { Breadcrumbs } from "../components/ui/Breadcrumbs";
import { SectionHeading } from "../components/ui/SectionHeading";
import { SolutionCard } from "../components/ui/SolutionCard";
import { CtaSection } from "../components/ui/CtaSection";
import { solutionsData } from "../content/solutions";
import { CheckCircle2, ShieldAlert } from "lucide-react";
import { Button } from "../components/ui/Buttons";

interface SolutionsPageProps {
  onNavigate: (path: string) => void;
}

export const SolutionsPage: React.FC<SolutionsPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 md:space-y-24 pb-16">
      {/* Hero */}
      <section className="bg-white border-b border-slate-200/80 pt-6 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ label: "Solutions" }]}
            onNavigate={onNavigate}
            className="mb-8"
          />

          <div className="max-w-3xl">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#1554A3] block mb-3">
              Capabilities & Architecture
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0B1F3A] tracking-tight leading-tight text-balance">
              Solutions Designed Around Real Problems
            </h1>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              We do not build generic templates. Each solution category is structured to resolve tangible operational bottlenecks, streamline manual workflows, and scale alongside business demands.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Core Offerings"
          title="Engineered for Practical Business Impact"
          subtitle="Explore our six primary solution disciplines, each backed by modular codebases and direct stakeholder alignment."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutionsData.map((sol) => (
            <SolutionCard
              key={sol.id}
              solution={sol}
              expanded={true}
              onNavigateToContact={() => onNavigate("/contact")}
            />
          ))}
        </div>
      </section>

      {/* Engineering Discipline Statement */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200/90 bg-[#F6F9FC] p-8 md:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#1554A3]">
                Deployment Standards
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Transparent Execution with Verified Technical Scope
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed max-w-2xl">
                Every software delivery includes documented codebase architecture, environment setup guides, and direct onboarding. We do not make unsupported performance claims or lock clients into opaque vendor dependencies.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1554A3]" /> Full Client Code Ownership
                </span>
                <span>·</span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1554A3]" /> Open Standard Frameworks
                </span>
                <span>·</span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1554A3]" /> Dedicated Sprint Milestones
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <Button
                variant="primary"
                size="md"
                onClick={() => onNavigate("/contact")}
              >
                Discuss a Custom Solution
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CtaSection onNavigate={onNavigate} />
      </div>
    </div>
  );
};
