import React from "react";

interface SectionHeadingProps {
  kicker?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  kicker,
  title,
  subtitle,
  align = "left",
  theme = "light",
  className = "",
}) => {
  const isDark = theme === "dark";
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col ${alignClass} mb-12 max-w-3xl ${className}`}>
      {kicker && (
        <span
          className={`text-xs font-semibold tracking-wider uppercase mb-2 ${
            isDark ? "text-sky-400" : "text-[#1554A3]"
          }`}
        >
          {kicker}
        </span>
      )}
      <h2
        className={`text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-balance ${
          isDark ? "text-white" : "text-[#0B1F3A]"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 text-base md:text-lg leading-relaxed text-balance ${
            isDark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
