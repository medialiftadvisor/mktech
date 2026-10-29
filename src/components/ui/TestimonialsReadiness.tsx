import React from "react";
import { MessageSquareQuote, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "./Buttons";

interface TestimonialItem {
  id: string;
  quote: string;
  clientRole: string;
  organization: string;
  industry: string;
}

interface TestimonialsProps {
  testimonials?: TestimonialItem[];
  onNavigateToContact?: () => void;
}

export const TestimonialsReadiness: React.FC<TestimonialsProps> = ({
  testimonials = [],
  onNavigateToContact,
}) => {
  // If no approved testimonials exist yet, display the authentic governance card
  if (testimonials.length === 0) {
    return (
      <div className="rounded-2xl border border-slate-200/90 bg-white p-8 md:p-10 shadow-xs">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1554A3] mb-3">
            <ShieldCheck className="w-4 h-4" />
            <span>Verification & Case Governance</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
            Client Attributions & Validated Case Studies
          </h3>
          <p className="mt-3 text-slate-600 text-sm md:text-base leading-relaxed">
            In accordance with MKTECH’s strict disclosure principles, client names, metrics, and production case studies are published only following mutual verification and client-authorized reviews.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-500 border-t border-slate-100 pt-5">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Direct Discovery Engagements</span>
            </div>
            <span>·</span>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#1554A3]"></span>
              <span>5 Emerging Domains</span>
            </div>
            <span>·</span>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-slate-400"></span>
              <span>Pre-Seed Technology Partner</span>
            </div>
          </div>
          {onNavigateToContact && (
            <div className="mt-6">
              <Button
                variant="outline"
                size="sm"
                icon={<ArrowRight className="w-3.5 h-3.5" />}
                onClick={onNavigateToContact}
              >
                Inquire About Pilot References
              </Button>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {testimonials.map((t) => (
        <div
          key={t.id}
          className="rounded-xl border border-slate-200 bg-white p-6 shadow-xs flex flex-col justify-between"
        >
          <div>
            <MessageSquareQuote className="w-8 h-8 text-[#1554A3]/30 mb-3" />
            <p className="text-slate-700 italic text-sm md:text-base leading-relaxed">
              "{t.quote}"
            </p>
          </div>
          <div className="mt-6 border-t border-slate-100 pt-4 text-xs text-slate-500 flex items-center justify-between">
            <div>
              <span className="font-semibold text-slate-900 block">{t.clientRole}</span>
              <span>{t.organization}</span>
            </div>
            <span className="text-[#1554A3] font-medium">{t.industry}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
