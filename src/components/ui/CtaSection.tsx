import React from "react";
import { ArrowRight, MessageSquare } from "lucide-react";
import { Button } from "./Buttons";

interface CtaSectionProps {
  title?: string;
  subtitle?: string;
  primaryCtaText?: string;
  secondaryCtaText?: string;
  onNavigate: (path: string) => void;
  className?: string;
}

export const CtaSection: React.FC<CtaSectionProps> = ({
  title = "Have a Problem Worth Solving?",
  subtitle = "Let's explore how technology can turn it into an opportunity. We build practical digital solutions for businesses and communities.",
  primaryCtaText = "Start a Conversation",
  secondaryCtaText = "View Our Solutions",
  onNavigate,
  className = "",
}) => {
  return (
    <section
      className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0B1F3A] via-[#0E2442] to-[#071324] text-white p-8 sm:p-12 md:p-16 border border-slate-800 shadow-xl ${className}`}
    >
      {/* Background ambient accents */}
      <div className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full bg-[#1554A3]/25 blur-3xl pointer-events-none" />
      <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400 mb-4">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Let's Build Together</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
          {title}
        </h2>

        <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
          {subtitle}
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
          <Button
            variant="primary"
            size="lg"
            onClick={() => onNavigate("/contact")}
            icon={<ArrowRight className="w-4 h-4" />}
          >
            {primaryCtaText}
          </Button>

          <button
            type="button"
            onClick={() => onNavigate("/solutions")}
            className="px-6 py-3 text-base min-h-[48px] rounded-lg font-medium text-white border border-slate-700 hover:border-slate-500 hover:bg-white/5 transition-all text-center cursor-pointer whitespace-nowrap"
          >
            {secondaryCtaText}
          </button>
        </div>
      </div>
    </section>
  );
};
