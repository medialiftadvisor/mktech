import React from "react";
import { SolutionItem } from "../../content/solutions";
import {
  LayoutGrid,
  Smartphone,
  Cpu,
  Users,
  Database,
  Compass,
  ArrowRight,
  Check,
} from "lucide-react";
import { Button } from "./Buttons";

interface SolutionCardProps {
  solution: SolutionItem;
  onNavigateToContact?: (solutionTitle: string) => void;
  expanded?: boolean;
}

export const SolutionCard: React.FC<SolutionCardProps> = ({
  solution,
  onNavigateToContact,
  expanded = false,
}) => {
  const getIcon = (name: string) => {
    switch (name) {
      case "LayoutGrid":
        return <LayoutGrid className="w-6 h-6 text-[#1554A3]" />;
      case "Smartphone":
        return <Smartphone className="w-6 h-6 text-[#1554A3]" />;
      case "Cpu":
        return <Cpu className="w-6 h-6 text-[#1554A3]" />;
      case "Users":
        return <Users className="w-6 h-6 text-[#1554A3]" />;
      case "Database":
        return <Database className="w-6 h-6 text-[#1554A3]" />;
      case "Compass":
        return <Compass className="w-6 h-6 text-[#1554A3]" />;
      default:
        return <LayoutGrid className="w-6 h-6 text-[#1554A3]" />;
    }
  };

  return (
    <div className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Top Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="w-12 h-12 rounded-xl bg-[#F6F9FC] border border-slate-100 flex items-center justify-center">
            {getIcon(solution.icon)}
          </div>
          <span className="font-mono text-xs font-bold text-slate-400">
            {solution.number}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-900 tracking-tight mt-4">
          {solution.title}
        </h3>
        <p className="mt-2 text-sm text-slate-600 leading-relaxed">
          {expanded ? solution.fullDescription : solution.shortDescription}
        </p>

        {/* Key capabilities */}
        <div className="mt-5 space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
            Key Capabilities
          </span>
          {solution.capabilities.map((cap) => (
            <div key={cap} className="flex items-start gap-2 text-xs text-slate-600">
              <Check className="w-3.5 h-3.5 text-[#1554A3] shrink-0 mt-0.5" />
              <span>{cap}</span>
            </div>
          ))}
        </div>

        {/* Example use cases if expanded or on full page */}
        {expanded && solution.useCases.length > 0 && (
          <div className="mt-5 pt-4 border-t border-slate-100">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
              Example Practical Applications
            </span>
            <ul className="space-y-1.5 text-xs text-slate-600">
              {solution.useCases.map((uc) => (
                <li key={uc} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1554A3] mt-1.5 shrink-0" />
                  <span>{uc}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Action footer */}
      {onNavigateToContact && (
        <div className="mt-6 pt-4 border-t border-slate-100">
          <Button
            variant="outline"
            size="sm"
            fullWidth
            onClick={() => onNavigateToContact(solution.title)}
            icon={<ArrowRight className="w-3.5 h-3.5" />}
          >
            Inquire Solution
          </Button>
        </div>
      )}
    </div>
  );
};
