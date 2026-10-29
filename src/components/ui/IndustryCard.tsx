import React from "react";
import { IndustryItem } from "../../content/industries";
import {
  Building2,
  Truck,
  Store,
  Factory,
  Sprout,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

interface IndustryCardProps {
  industry: IndustryItem;
  onSelect?: (industryId: string) => void;
  featured?: boolean;
}

export const IndustryCard: React.FC<IndustryCardProps> = ({
  industry,
  onSelect,
  featured = false,
}) => {
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

  return (
    <div
      onClick={() => onSelect && onSelect(industry.id)}
      className={`group rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-[#1554A3]/50 transition-all duration-300 flex flex-col justify-between cursor-pointer ${
        featured ? "md:col-span-2 bg-gradient-to-br from-white to-slate-50/50" : ""
      }`}
    >
      <div>
        {/* Top Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center group-hover:bg-[#1554A3]/10 transition-colors">
            {getIcon(industry.icon)}
          </div>
          <span className="font-mono text-xs font-bold text-slate-400 group-hover:text-[#1554A3] transition-colors">
            {industry.number}
          </span>
        </div>

        {/* Title & Tagline */}
        <h3 className="text-xl font-bold text-slate-900 tracking-tight mt-4 group-hover:text-[#1554A3] transition-colors">
          {industry.name}
        </h3>
        <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
          {industry.tagline}
        </p>

        {/* Focus Areas list */}
        <div className="mt-5 space-y-1.5">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
            Focus Areas
          </span>
          {industry.focusAreas.map((focus) => (
            <div key={focus} className="flex items-start gap-2 text-xs text-slate-600">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#1554A3] shrink-0 mt-0.5" />
              <span>{focus}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Explore link */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-700 group-hover:text-[#1554A3] transition-colors">
        <span>Explore Focus & Opportunities</span>
        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  );
};
