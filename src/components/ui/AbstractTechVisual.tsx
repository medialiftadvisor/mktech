import React, { useState } from "react";

interface AbstractTechVisualProps {
  className?: string;
  variant?: "hero" | "banner" | "compact";
}

export const AbstractTechVisual: React.FC<AbstractTechVisualProps> = ({
  className = "",
  variant = "hero",
}) => {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const nodes = [
    {
      id: "hub",
      label: "MKTECH Core Engine",
      sub: "Problem-Solving Architecture",
      x: 350,
      y: 200,
      r: 34,
      color: "#1554A3",
      isCenter: true,
    },
    {
      id: "real-estate",
      label: "Real Estate",
      sub: "Property Workflows & Portals",
      x: 160,
      y: 110,
      r: 22,
      color: "#0B1F3A",
    },
    {
      id: "quick-commerce",
      label: "Quick Commerce",
      sub: "Dispatch & Fulfillment Sync",
      x: 540,
      y: 100,
      r: 22,
      color: "#0B1F3A",
    },
    {
      id: "retail",
      label: "Boutique & Retail",
      sub: "Interactive Catalogs & Inquiries",
      x: 140,
      y: 300,
      r: 22,
      color: "#0B1F3A",
    },
    {
      id: "food-processing",
      label: "Food Processing",
      sub: "Batch Tracking & QA Logs",
      x: 550,
      y: 290,
      r: 22,
      color: "#0B1F3A",
    },
    {
      id: "rural",
      label: "Farmer & Village Solutions",
      sub: "Grassroots Access & Issue Tracking",
      x: 350,
      y: 340,
      r: 24,
      color: "#0B1F3A",
    },
  ];

  const connections = [
    { from: "hub", to: "real-estate" },
    { from: "hub", to: "quick-commerce" },
    { from: "hub", to: "retail" },
    { from: "hub", to: "food-processing" },
    { from: "hub", to: "rural" },
    { from: "real-estate", to: "retail" },
    { from: "quick-commerce", to: "food-processing" },
    { from: "rural", to: "food-processing" },
  ];

  return (
    <div
      className={`relative w-full rounded-2xl bg-gradient-to-b from-[#0B1F3A] to-[#071324] border border-slate-800 p-6 md:p-8 overflow-hidden shadow-xl text-white select-none ${className}`}
    >
      {/* Background ambient grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#1554A3]/20 rounded-full blur-3xl pointer-events-none" />

      {/* Header bar within the visual container */}
      <div className="relative z-10 flex items-center justify-between pb-4 border-b border-slate-800/80 mb-2 text-xs">
        <div className="flex items-center gap-2 text-slate-400">
          <span className="w-2 h-2 rounded-full bg-[#1554A3] animate-pulse" />
          <span className="font-mono uppercase tracking-wider text-[11px] text-slate-300">
            MKTECH Connected Ecosystem
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-3 text-slate-400 text-[11px]">
          <span>5 Emerging Sectors</span>
          <span>·</span>
          <span>Practical Digital Solutions</span>
        </div>
      </div>

      {/* SVG Diagram */}
      <div className="relative z-10 w-full overflow-x-auto">
        <svg
          viewBox="0 0 700 400"
          className="w-full h-auto min-w-[540px] max-h-[460px] mx-auto"
          aria-label="MKTECH Interactive Technology Architecture Diagram"
        >
          <defs>
            <linearGradient id="hubGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E6CD9" />
              <stop offset="100%" stopColor="#1554A3" />
            </linearGradient>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1554A3" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.2" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Connection Lines */}
          {connections.map((c, i) => {
            const startNode = nodes.find((n) => n.id === c.from)!;
            const endNode = nodes.find((n) => n.id === c.to)!;
            const isHighlighted =
              activeNode === startNode.id || activeNode === endNode.id;

            return (
              <g key={i}>
                <line
                  x1={startNode.x}
                  y1={startNode.y}
                  x2={endNode.x}
                  y2={endNode.y}
                  stroke={isHighlighted ? "#38BDF8" : "rgba(255,255,255,0.14)"}
                  strokeWidth={isHighlighted ? 2.5 : 1.2}
                  strokeDasharray={c.from !== "hub" ? "4 4" : undefined}
                  className="transition-colors duration-300"
                />
                {/* Subtle moving packet dot */}
                {i < 5 && (
                  <circle
                    r="2.5"
                    fill="#38BDF8"
                    opacity={isHighlighted ? "0.9" : "0.5"}
                  >
                    <animateMotion
                      path={`M${startNode.x},${startNode.y} L${endNode.x},${endNode.y}`}
                      dur={`${3 + i * 0.8}s`}
                      repeatCount="indefinite"
                    />
                  </circle>
                )}
              </g>
            );
          })}

          {/* Interactive Nodes */}
          {nodes.map((node) => {
            const isHovered = activeNode === node.id;
            const isCenter = node.isCenter;

            return (
              <g
                key={node.id}
                className="cursor-pointer transition-transform duration-200"
                onMouseEnter={() => setActiveNode(node.id)}
                onMouseLeave={() => setActiveNode(null)}
                tabIndex={0}
                role="button"
                aria-label={`${node.label}: ${node.sub}`}
                onFocus={() => setActiveNode(node.id)}
                onBlur={() => setActiveNode(null)}
              >
                {/* Outer Ring */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={node.r + (isHovered ? 8 : 4)}
                  fill="none"
                  stroke={isCenter ? "#1554A3" : isHovered ? "#38BDF8" : "rgba(255,255,255,0.18)"}
                  strokeWidth="1.5"
                  opacity={isHovered ? 1 : 0.6}
                  className="transition-all duration-300"
                />

                {/* Main Node Circle */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={node.r}
                  fill={isCenter ? "url(#hubGradient)" : isHovered ? "#132C52" : "#0E2442"}
                  stroke={isHovered ? "#38BDF8" : "rgba(255,255,255,0.25)"}
                  strokeWidth={isCenter ? 2.5 : 1.5}
                  filter={isCenter || isHovered ? "url(#glow)" : undefined}
                  className="transition-colors duration-200"
                />

                {/* Node Center Glyph / Indicator */}
                {isCenter ? (
                  <text
                    x={node.x}
                    y={node.y + 5}
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontSize="13"
                    fontWeight="700"
                    fontFamily="inherit"
                  >
                    MK
                  </text>
                ) : (
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={isHovered ? 4.5 : 3.5}
                    fill={isHovered ? "#38BDF8" : "#94A3B8"}
                    className="transition-all duration-200"
                  />
                )}

                {/* Node Label Text */}
                <text
                  x={node.x}
                  y={node.y + node.r + 16}
                  textAnchor="middle"
                  fill={isHovered ? "#FFFFFF" : "#E2E8F0"}
                  fontSize={isCenter ? "13" : "12"}
                  fontWeight={isCenter ? "700" : "600"}
                  className="transition-colors duration-200"
                >
                  {node.label}
                </text>

                {/* Node Subtitle */}
                <text
                  x={node.x}
                  y={node.y + node.r + 30}
                  textAnchor="middle"
                  fill="#94A3B8"
                  fontSize="10"
                  fontWeight="400"
                  className="transition-colors duration-200"
                >
                  {node.sub}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Bottom informational caption */}
      <div className="relative z-10 pt-4 mt-2 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-sky-400"></span>
          <span>Hover or tap any sector node to view connectivity</span>
        </div>
        <div className="text-slate-500 font-mono text-[11px]">
          Execution-Led · Practical Architecture
        </div>
      </div>
    </div>
  );
};
