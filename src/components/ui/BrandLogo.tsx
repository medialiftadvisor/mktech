import React from "react";

interface BrandLogoProps {
  className?: string;
  variant?: "light" | "dark" | "navy";
  size?: "sm" | "md" | "lg" | "xl";
  withTagline?: boolean;
  showWordmark?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = "",
  variant = "light",
  size = "md",
  withTagline = false,
  showWordmark = true,
}) => {
  const isDark = variant === "dark" || variant === "navy";

  const markSizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
    xl: "w-16 h-16",
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
    xl: "text-3xl",
  };

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Official logo rendered strictly from file /logo.png */}
      <img
        src="/logo.png"
        alt="MKTECH Logo"
        className={`${markSizes[size]} object-contain shrink-0 transition-transform duration-300 group-hover:scale-105 drop-shadow-xs`}
        loading="eager"
      />

      {/* Brand Wordmark matching exact brand typography */}
      {showWordmark && (
        <div className="flex flex-col leading-none">
          <div className={`font-black tracking-tight ${textSizes[size]} flex items-center font-sans`}>
            <span className={isDark ? "text-[#38BDF8]" : "text-[#1952A5]"}>MK</span>
            <span className={`font-normal ml-0.5 tracking-wide ${isDark ? "text-white" : "text-[#545A60]"}`}>
              TECH
            </span>
          </div>
          {withTagline && (
            <span
              className={`text-[10px] tracking-wider uppercase font-medium mt-1 ${
                isDark ? "text-slate-400" : "text-slate-500"
              }`}
            >
              Technology for a Better Tomorrow
            </span>
          )}
        </div>
      )}
    </div>
  );
};
