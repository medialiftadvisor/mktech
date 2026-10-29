import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  depth?: number;
  glowColor?: string;
}

export const Card3D: React.FC<Card3DProps> = ({
  children,
  className = "",
  onClick,
  depth = 12,
  glowColor = "rgba(21, 84, 163, 0.15)",
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse tilt physics using spring motion
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 220 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [depth, -depth]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-depth, depth]), springConfig);
  const scale = useSpring(isHovered ? 1.02 : 1, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        rotateX,
        rotateY,
        scale,
        transformStyle: "preserve-3d",
      }}
      className={`perspective-1000 relative group cursor-pointer transition-shadow duration-300 ${className}`}
    >
      {/* 3D Dynamic Ambient Glow */}
      <motion.div
        className="pointer-events-none absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${glowColor}, transparent 70%)`,
        }}
      />

      {/* Card Content with 3D Pop Out */}
      <div
        className="relative h-full w-full rounded-2xl bg-white border border-slate-200/90 shadow-sm transition-all duration-300 group-hover:shadow-2xl group-hover:border-[#1554A3]/40 overflow-hidden flex flex-col justify-between"
        style={{
          transform: isHovered ? "translateZ(20px)" : "translateZ(0px)",
          transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* Shimmer light bar across top edge on hover */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#1554A3]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {children}
      </div>
    </motion.div>
  );
};
