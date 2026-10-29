import React, { useState } from "react";

export const ProcessLine: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: "01",
      name: "Discover",
      tagline: "Understand the problem.",
      detail:
        "We immerse ourselves in your operational realities, stakeholder pain-points, and technical constraints before recommending any technology.",
    },
    {
      step: "02",
      name: "Define",
      tagline: "Translate requirement into clear solution.",
      detail:
        "We define precise user stories, functional milestones, and data scopes to eliminate ambiguity and establish measurable outcomes.",
    },
    {
      step: "03",
      name: "Design",
      tagline: "Create experience and architecture.",
      detail:
        "We draft intuitive user journeys, high-contrast accessible layouts, and scalable database schemas that respect real usage conditions.",
    },
    {
      step: "04",
      name: "Develop",
      tagline: "Build and test the solution.",
      detail:
        "We build clean, typed software with zero bloat, enforcing automated checks, robust error boundaries, and rapid load times.",
    },
    {
      step: "05",
      name: "Deploy",
      tagline: "Launch and validate.",
      detail:
        "We roll out the platform in production, verify real user adoption, and ensure uninterrupted data continuity and security.",
    },
    {
      step: "06",
      name: "Evolve",
      tagline: "Improve and scale.",
      detail:
        "We review live usage patterns, optimize bottlenecks, and systematically introduce scalable capabilities as your operations grow.",
    },
  ];

  return (
    <div className="w-full">
      {/* Horizontal process line on medium+ screens */}
      <div className="relative hidden lg:block mb-8">
        {/* Track Line */}
        <div className="absolute top-5 left-8 right-8 h-0.5 bg-slate-200 -z-0" />
        {/* Active Progress Line */}
        <div
          className="absolute top-5 left-8 h-0.5 bg-[#1554A3] transition-all duration-500 -z-0"
          style={{ width: `${(activeStep / (steps.length - 1)) * 88}%` }}
        />

        <div className="grid grid-cols-6 gap-3 relative z-10">
          {steps.map((item, index) => {
            const isCurrent = activeStep === index;
            const isCompleted = index <= activeStep;

            return (
              <button
                key={item.step}
                type="button"
                onClick={() => setActiveStep(index)}
                className="flex flex-col items-center text-center group cursor-pointer focus:outline-hidden"
              >
                {/* Step Circle */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-300 ${
                    isCurrent
                      ? "bg-[#1554A3] text-white ring-4 ring-[#1554A3]/20 scale-110 shadow-sm"
                      : isCompleted
                      ? "bg-[#0B1F3A] text-white"
                      : "bg-white border-2 border-slate-300 text-slate-500 group-hover:border-[#1554A3] group-hover:text-[#1554A3]"
                  }`}
                >
                  {item.step}
                </div>

                {/* Step Name */}
                <span
                  className={`mt-3 text-sm font-semibold transition-colors duration-200 ${
                    isCurrent ? "text-[#1554A3]" : "text-slate-800 group-hover:text-[#1554A3]"
                  }`}
                >
                  {item.name}
                </span>

                {/* Short Tagline */}
                <span className="text-xs text-slate-500 mt-1 max-w-[130px] leading-snug">
                  {item.tagline}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Mobile & Tablet vertical or card step view */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-4 mb-8">
        {steps.map((item, index) => (
          <div
            key={item.step}
            onClick={() => setActiveStep(index)}
            className={`p-5 rounded-xl border transition-all cursor-pointer ${
              activeStep === index
                ? "bg-white border-[#1554A3] shadow-sm"
                : "bg-white/80 border-slate-200 hover:border-slate-300"
            }`}
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="w-7 h-7 rounded-full bg-[#1554A3] text-white flex items-center justify-center text-xs font-bold">
                {item.step}
              </span>
              <span className="font-bold text-slate-900 text-base">{item.name}</span>
            </div>
            <p className="text-sm font-medium text-slate-700">{item.tagline}</p>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">{item.detail}</p>
          </div>
        ))}
      </div>

      {/* Active step spotlight card for deep dive */}
      <div className="p-6 md:p-7 rounded-xl bg-white border border-slate-200/90 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg bg-[#0B1F3A] text-white flex items-center justify-center font-bold text-lg shrink-0">
            {steps[activeStep].step}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="text-lg font-bold text-slate-900">
                Phase {steps[activeStep].step}: {steps[activeStep].name}
              </h4>
              <span className="text-xs font-medium text-[#1554A3]">
                · {steps[activeStep].tagline}
              </span>
            </div>
            <p className="text-sm text-slate-600 mt-1.5 leading-relaxed max-w-2xl">
              {steps[activeStep].detail}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            disabled={activeStep === 0}
            onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
            className="px-3 py-1.5 text-xs font-medium rounded-md border border-slate-200 bg-slate-50 hover:bg-white text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <button
            type="button"
            disabled={activeStep === steps.length - 1}
            onClick={() => setActiveStep((prev) => Math.min(steps.length - 1, prev + 1))}
            className="px-3 py-1.5 text-xs font-medium rounded-md bg-[#1554A3] text-white hover:bg-[#0F3F7A] disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Next Stage
          </button>
        </div>
      </div>
    </div>
  );
};
