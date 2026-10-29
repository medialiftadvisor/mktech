import React, { useState } from "react";
import { FAQItem } from "../../content/faq";
import { ChevronDown } from "lucide-react";

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ items, className = "" }) => {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className={`divide-y divide-slate-200 border-y border-slate-200 ${className}`}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id} className="py-5 transition-colors">
            <button
              type="button"
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              className="flex w-full items-start justify-between text-left gap-4 group cursor-pointer focus-visible:outline-2 focus-visible:outline-[#1554A3]"
            >
              <span className="text-base sm:text-lg font-semibold text-slate-900 group-hover:text-[#1554A3] transition-colors leading-snug">
                {item.question}
              </span>
              <span
                className={`mt-1 rounded-full p-1 text-slate-400 group-hover:text-[#1554A3] transition-transform duration-200 shrink-0 ${
                  isOpen ? "rotate-180 text-[#1554A3]" : ""
                }`}
              >
                <ChevronDown className="w-5 h-5" />
              </span>
            </button>
            {isOpen && (
              <div className="mt-3 pr-8 text-sm sm:text-base text-slate-600 leading-relaxed animate-fadeIn">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
