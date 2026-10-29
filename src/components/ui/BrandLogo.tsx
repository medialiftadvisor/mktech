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

  // Sizing for the official brand logo emblem
  const markSizes = {
    sm: "h-9 w-auto",
    md: "h-11 w-auto",
    lg: "h-14 w-auto",
    xl: "h-16 w-auto",
  };

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Official MKTECH Brand Emblem (strictly loaded from /public/logo.png) */}
      <img
        src="/logo.png"
        alt="MKTECH Logo"
        className={`${markSizes[size]} object-contain shrink-0 transition-transform duration-300 group-hover:scale-105 rounded-lg`}
        loading="eager"
      />

      {withTagline && (
        <span
          className={`text-[10px] tracking-wider uppercase font-medium ml-1 hidden sm:inline-block ${
            isDark ? "text-slate-400" : "text-slate-500"
          }`}
        >
          Technology for a Better Tomorrow
        </span>
      )}
    </div>
  );
};
