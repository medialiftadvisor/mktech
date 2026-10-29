import React from "react";
import { Breadcrumbs } from "../components/ui/Breadcrumbs";
import { SectionHeading } from "../components/ui/SectionHeading";
import { AbstractTechVisual } from "../components/ui/AbstractTechVisual";
import { CtaSection } from "../components/ui/CtaSection";
import {
  Code2,
  Palette,
  Cpu,
  Database,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Lock,
  Layers,
} from "lucide-react";
import { Button } from "../components/ui/Buttons";

interface TechnologyPageProps {
  onNavigate: (path: string) => void;
}

export const TechnologyPage: React.FC<TechnologyPageProps> = ({ onNavigate }) => {
  const techPillars = [
    {
      title: "Product Development",
      icon: Code2,
      description:
        "Building dependable software architectures that withstand everyday business operations with minimal latency and high availability.",
      capabilities: [
        "Web applications",
        "Mobile applications",
        "Digital platforms",
      ],
      standards: [
        "Strict TypeScript typing & linting",
        "Modular component architecture",
        "Component error boundaries & graceful fallbacks",
      ],
    },
    {
      title: "Digital Experience",
      icon: Palette,
      description:
        "Designing intuitive customer interfaces that prioritize cognitive clarity, fast interaction response, and cross-device responsiveness.",
      capabilities: [
        "UI/UX architecture",
        "Customer interfaces",
        "Responsive experiences",
      ],
      standards: [
        "WCAG-conscious contrast & keyboard navigation",
        "Sub-200ms interaction feedback",
        "Mobile-optimized touch targets & layouts",
      ],
    },
    {
      title: "Business Technology",
      icon: Cpu,
      description:
        "Eliminating manual data handoffs and repetitive operational drag through structured automation and dependable workflows.",
      capabilities: [
        "Automation pipelines",
        "Management systems",
        "Workflow solutions",
      ],
      standards: [
        "Asynchronous task queues & notification triggers",
        "Role-based permission controls",
        "Operational event logging & audit trails",
      ],
    },
    {
      title: "Data Systems",
      icon: Database,
      description:
        "Establishing normalized schemas and centralized records that give founders and operations teams verified visibility.",
      capabilities: [
        "Operational dashboards",
        "Data management",
        "Business intelligence-ready architecture",
      ],
      standards: [
        "Structured relational data modeling (PostgreSQL ready)",
        "Zero data duplication & integrity constraints",
        "Exportable reports & compliant data policies",
      ],
    },
  ];

  return (
    <div className="space-y-16 md:space-y-24 pb-16">
      {/* Hero */}
      <section className="bg-white border-b border-slate-200/80 pt-6 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ label: "Technology" }]}
            onNavigate={onNavigate}
            className="mb-8"
          />

          <div className="max-w-3xl">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#1554A3] block mb-3">
              Engineering Architecture
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0B1F3A] tracking-tight leading-tight text-balance">
              Technology That Enables Possibility
            </h1>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              We select software tools based on empirical reliability, operational security, and long-term maintainability. Our technical ecosystem is organized around four foundational pillars.
            </p>
          </div>
        </div>
      </section>

      {/* Visual Tech Ecosystem */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <SectionHeading
            kicker="System Topography"
            title="Connected Architectural Ecosystem"
            subtitle="How MKTECH links user interfaces, business logic, automation layers, and structured databases into a coherent whole."
            className="mb-0"
          />
        </div>
        <AbstractTechVisual variant="banner" />
      </section>

      {/* 4 Pillars Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Core Disciplines"
          title="Four Pillars of MKTECH Engineering"
          subtitle="A disciplined division of responsibilities ensuring robust frontend experiences and secure backend foundations."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-9 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#1554A3]/10 text-[#1554A3] flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                    {pillar.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>

                  {/* Capabilities */}
                  <div className="mt-6 pt-5 border-t border-slate-100">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      Primary Capabilities
                    </span>
                    <div className="flex flex-wrap gap-2 text-xs font-medium text-slate-700">
                      {pillar.capabilities.map((cap, i) => (
                        <span key={cap} className="inline-flex items-center gap-1.5">
                          <span className="text-[#1554A3] font-semibold">{cap}</span>
                          {i < pillar.capabilities.length - 1 && (
                            <span className="text-slate-300">·</span>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Engineering Standards */}
                  <div className="mt-5 space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Engineering Standards
                    </span>
                    {pillar.standards.map((std) => (
                      <div key={std} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{std}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Security & Reliability Standards */}
      <section className="bg-slate-50 py-16 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Standards"
            title="Non-Negotiable Technical Principles"
            subtitle="We adhere to rigorous software quality guidelines to prevent technical debt and ensure predictable delivery."
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-2xs">
              <Lock className="w-6 h-6 text-[#1554A3] mb-3" />
              <h4 className="text-base font-bold text-slate-900">Zero-Secret Exposure</h4>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                All external API integrations and transactional keys reside strictly in secure server-side environments or environment variables. No client-side leaks.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-2xs">
              <Zap className="w-6 h-6 text-[#1554A3] mb-3" />
              <h4 className="text-base font-bold text-slate-900">Performance First</h4>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Targeting excellent Core Web Vitals, code-splitting, and minimal JavaScript bundle overhead for swift loading on all network speeds.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-2xs">
              <ShieldCheck className="w-6 h-6 text-[#1554A3] mb-3" />
              <h4 className="text-base font-bold text-slate-900">Defensive Validation</h4>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Client and server-side schema verification for every input form, with explicit error handling and automated sanitization.
              </p>
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
