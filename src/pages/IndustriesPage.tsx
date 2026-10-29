import React, { useState } from "react";
import { Breadcrumbs } from "../components/ui/Breadcrumbs";
import { SectionHeading } from "../components/ui/SectionHeading";
import { CtaSection } from "../components/ui/CtaSection";
import { industriesData, IndustryItem } from "../content/industries";
import {
  Building2,
  Truck,
  Store,
  Factory,
  Sprout,
  ArrowRight,
  CheckCircle2,
  Lightbulb,
} from "lucide-react";
import { Button } from "../components/ui/Buttons";

interface IndustriesPageProps {
  onNavigate: (path: string) => void;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({ onNavigate }) => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("all");

  const getIcon = (name: string) => {
    switch (name) {
      case "Building2":
        return <Building2 className="w-6 h-6 text-[#1554A3]" />;
      case "Truck":
        return <Truck className="w-6 h-6 text-[#1554A3]" />;
      case "Store":
        return <Store className="w-6 h-6 text-[#1554A3]" />;
      case "Factory":
        return <Factory className="w-6 h-6 text-[#1554A3]" />;
      case "Sprout":
        return <Sprout className="w-6 h-6 text-[#1554A3]" />;
      default:
        return <Building2 className="w-6 h-6 text-[#1554A3]" />;
    }
  };

  const filteredIndustries =
    selectedIndustry === "all"
      ? industriesData
      : industriesData.filter((i) => i.id === selectedIndustry);

  return (
    <div className="space-y-16 md:space-y-24 pb-16">
      {/* Hero */}
      <section className="bg-white border-b border-slate-200/80 pt-6 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ label: "Industries" }]}
            onNavigate={onNavigate}
            className="mb-8"
          />

          <div className="max-w-3xl">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#1554A3] block mb-3">
              Sector Specialization
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0B1F3A] tracking-tight leading-tight text-balance">
              Technology Across Emerging Sectors
            </h1>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              We apply our problem-solving methodology across five vital domains. Rather than generic templates, we formulate focus areas and solution opportunities tailored to each sector's operational reality.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs / Segmented Controls (Per frontend-design rule: interactive tabs are allowed button elements) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl overflow-x-auto max-w-full">
          <button
            type="button"
            onClick={() => setSelectedIndustry("all")}
            className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              selectedIndustry === "all"
                ? "bg-white text-slate-900 shadow-xs font-semibold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            All 5 Sectors
          </button>
          {industriesData.map((ind) => (
            <button
              key={ind.id}
              type="button"
              onClick={() => setSelectedIndustry(ind.id)}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                selectedIndustry === ind.id
                  ? "bg-white text-[#1554A3] shadow-xs font-semibold"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {ind.name}
            </button>
          ))}
        </div>
      </section>

      {/* Detailed Industry Sections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {filteredIndustries.map((ind) => (
          <div
            key={ind.id}
            id={ind.id}
            className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-10 shadow-xs transition-all duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              {/* Left Column: Sector Header & Context (5 cols) */}
              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#F6F9FC] border border-slate-100 flex items-center justify-center">
                    {getIcon(ind.icon)}
                  </div>
                  <div>
                    <span className="font-mono text-xs font-bold text-[#1554A3] block">
                      Sector {ind.number}
                    </span>
                    <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                      {ind.name}
                    </h2>
                  </div>
                </div>

                <p className="text-sm font-semibold text-[#1554A3]">
                  {ind.tagline}
                </p>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {ind.overview}
                </p>

                <div className="pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onNavigate("/contact")}
                    icon={<ArrowRight className="w-3.5 h-3.5" />}
                  >
                    Inquire for {ind.name}
                  </Button>
                </div>
              </div>

              {/* Right Column: Focus Areas & Solution Opportunities (7 cols) */}
              <div className="lg:col-span-7 space-y-6 lg:border-l lg:border-slate-100 lg:pl-10">
                {/* Focus Areas */}
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                    Core Focus Areas
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {ind.focusAreas.map((area) => (
                      <div
                        key={area}
                        className="flex items-start gap-2 text-xs font-medium text-slate-800 bg-[#F6F9FC] p-3 rounded-lg border border-slate-200/60"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#1554A3] shrink-0 mt-0.5" />
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Solution Opportunities */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Lightbulb className="w-4 h-4 text-amber-500" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Solution Opportunities & Target Deliverables
                    </span>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-600">
                    {ind.solutionOpportunities.map((opp) => (
                      <li
                        key={opp}
                        className="flex items-start gap-2.5 p-2 rounded-md hover:bg-slate-50 transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1554A3] mt-1.5 shrink-0" />
                        <span className="leading-relaxed">{opp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CtaSection
          title="Operating in One of These Sectors?"
          subtitle="Let's discuss how an engineered, problem-first digital solution can streamline your processes and unlock scale."
          onNavigate={onNavigate}
        />
      </div>
    </div>
  );
};
