import React, { useState } from "react";
import { ProjectItem } from "../../content/projects";
import { ArrowRight, Layers, CheckCircle, ChevronDown } from "lucide-react";
import { Button } from "./Buttons";

interface ProjectCardProps {
  project: ProjectItem;
  onNavigateToContact?: (projectName: string) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onNavigateToContact,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Industry-specific subtle color accent
  const industryColors: Record<string, string> = {
    "Real Estate": "border-l-sky-600",
    "Quick Commerce": "border-l-indigo-600",
    "Boutique & Retail": "border-l-teal-600",
    "Food Processing": "border-l-amber-600",
    "Farmer & Village Problem Solving": "border-l-emerald-600",
  };

  const borderAccent = industryColors[project.industry] || "border-l-[#1554A3]";

  return (
    <div
      className={`rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between border-l-4 ${borderAccent}`}
    >
      <div>
        {/* Top Header metadata */}
        <div className="flex items-center justify-between gap-2 pb-4 border-b border-slate-100 text-xs text-slate-500">
          <div className="flex items-center gap-2 font-mono">
            <span className="font-bold text-[#1554A3]">{project.number}</span>
            <span>·</span>
            <span className="font-medium text-slate-700">{project.industry}</span>
          </div>
          <span className="text-[11px] font-medium text-slate-500">
            {project.status}
          </span>
        </div>

        {/* Project Title */}
        <h3 className="text-xl font-bold text-slate-900 tracking-tight mt-4 leading-snug">
          {project.title}
        </h3>

        {/* Problem Statement */}
        <div className="mt-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-1">
            Operational Problem
          </span>
          <p className="text-sm text-slate-600 leading-relaxed">
            {project.problem}
          </p>
        </div>

        {/* Solution Direction */}
        <div className="mt-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#1554A3] block mb-1">
            MKTECH Solution Direction
          </span>
          <p className="text-sm text-slate-700 leading-relaxed font-medium">
            {project.solution}
          </p>
        </div>

        {/* Expandable Technical Scope */}
        {isExpanded && (
          <div className="mt-5 p-4 rounded-xl bg-slate-50 border border-slate-200/70 text-xs space-y-3 animate-fadeIn">
            <div>
              <span className="font-semibold text-slate-800 block mb-1">
                Architecture & Scope
              </span>
              <p className="text-slate-600 leading-relaxed">
                Engineered with modular micro-components, client-side caching, and secure API boundaries tailored to field deployment constraints.
              </p>
            </div>
            <div>
              <span className="font-semibold text-slate-800 block mb-1">
                Verified Outcome Policy
              </span>
              <p className="text-slate-600">
                {project.outcome} — Quantitative metrics are published strictly after client validation.
              </p>
            </div>
          </div>
        )}

        {/* Technology Stack tags: clean text with dividers */}
        <div className="mt-5 pt-4 border-t border-slate-100">
          <div className="flex items-center gap-2 text-xs text-slate-500 flex-wrap">
            <Layers className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="font-medium text-slate-700">Technology:</span>
            {project.technology.map((tech, idx) => (
              <span key={tech} className="inline-flex items-center gap-1.5">
                <span className="text-slate-600 font-mono text-[11px]">{tech}</span>
                {idx < project.technology.length - 1 && (
                  <span className="text-slate-300">·</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="inline-flex items-center gap-1 text-xs font-medium text-slate-600 hover:text-[#1554A3] transition-colors cursor-pointer"
        >
          <span>{isExpanded ? "Hide Architecture" : "View Scope"}</span>
          <ChevronDown
            className={`w-3.5 h-3.5 transition-transform duration-200 ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        </button>

        {onNavigateToContact && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onNavigateToContact(project.title)}
            icon={<ArrowRight className="w-3.5 h-3.5" />}
          >
            Inquire Solution
          </Button>
        )}
      </div>
    </div>
  );
};
