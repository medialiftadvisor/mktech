import React, { useState } from "react";
import { Breadcrumbs } from "../components/ui/Breadcrumbs";
import { SectionHeading } from "../components/ui/SectionHeading";
import { ProjectCard } from "../components/ui/ProjectCard";
import { CtaSection } from "../components/ui/CtaSection";
import { projectsData } from "../content/projects";
import { ShieldCheck, Info, FileCode2 } from "lucide-react";
import { Button } from "../components/ui/Buttons";

interface ProjectsPageProps {
  onNavigate: (path: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigate }) => {
  const [filter, setFilter] = useState<string>("all");

  const filteredProjects =
    filter === "all"
      ? projectsData
      : projectsData.filter((p) => p.industryId === filter);

  return (
    <div className="space-y-16 md:space-y-24 pb-16">
      {/* Hero */}
      <section className="bg-white border-b border-slate-200/80 pt-6 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ label: "Projects & Selected Work" }]}
            onNavigate={onNavigate}
            className="mb-8"
          />

          <div className="max-w-3xl">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#1554A3] block mb-3">
              Case Portfolio Architecture
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0B1F3A] tracking-tight leading-tight text-balance">
              Selected Work & Problem-Solving Experience
            </h1>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              Explore our structured solutions across five core sectors. We maintain strict disclosure integrity: factual problem definitions and technical scopes are documented, while verified outcomes are updated following client sign-off.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Governance Notice */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
          {/* Segmented Filter Control */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl overflow-x-auto">
            <button
              type="button"
              onClick={() => setFilter("all")}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                filter === "all"
                  ? "bg-white text-slate-900 shadow-xs font-semibold"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              All Projects ({projectsData.length})
            </button>
            {projectsData.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setFilter(p.industryId)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  filter === p.industryId
                    ? "bg-white text-[#1554A3] shadow-xs font-semibold"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {p.industry}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-500">
            <Info className="w-4 h-4 text-[#1554A3] shrink-0" />
            <span>Factual disclosures · Ready for multimedia case attachments</span>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onNavigateToContact={(projectName) => onNavigate(`/contact?project=${encodeURIComponent(projectName)}`)}
            />
          ))}
        </div>
      </section>

      {/* Architecture Readiness Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200/90 bg-white p-8 md:p-10 shadow-xs">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center shrink-0 text-[#1554A3]">
              <FileCode2 className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-slate-900">
                Extensible Case Study & Media Architecture
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed max-w-2xl">
                The MKTECH project repository is built to integrate verified client screenshots, workflow walkthrough videos, and technical audit reports as projects advance through live production milestones.
              </p>
              <div className="pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onNavigate("/contact")}
                >
                  Request Technical Whitepaper / Architecture Walkthrough
                </Button>
              </div>
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
