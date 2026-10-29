import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "white";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  icon,
  iconPosition = "right",
  fullWidth = false,
  className = "",
  disabled,
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 cursor-pointer select-none whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1554A3] disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]";

  const sizeClasses = {
    sm: "px-3.5 py-1.5 text-xs min-h-[36px] gap-1.5",
    md: "px-5 py-2.5 text-sm min-h-[44px] gap-2",
    lg: "px-6 py-3 text-base min-h-[48px] gap-2.5",
  };

  const variantClasses = {
    primary:
      "bg-[#1554A3] text-white hover:bg-[#0F3F7A] shadow-xs hover:shadow-sm active:bg-[#0B3363]",
    secondary:
      "bg-[#0B1F3A] text-white hover:bg-[#132C52] shadow-xs active:bg-[#08172C]",
    outline:
      "border border-slate-300 bg-white text-[#0B1F3A] hover:bg-slate-50 hover:border-slate-400 active:bg-slate-100",
    ghost:
      "text-slate-700 hover:text-[#1554A3] hover:bg-slate-100/80 active:bg-slate-200/80",
    white:
      "bg-white text-[#0B1F3A] hover:bg-slate-50 shadow-xs hover:shadow-sm active:bg-slate-100",
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${widthClass} ${className}`}
      disabled={disabled}
      {...props}
    >
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      <span className="truncate">{children}</span>
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </button>
  );
};
