import React, { useState } from "react";
import { Breadcrumbs } from "../components/ui/Breadcrumbs";
import { SectionHeading } from "../components/ui/SectionHeading";
import { CtaSection } from "../components/ui/CtaSection";
import { Button } from "../components/ui/Buttons";
import { clientPortfolioData, ClientPortfolioItem } from "../content/clients";
import {
  ExternalLink,
  Globe,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Layers,
  Building2,
  ShoppingBag,
  Wrench,
  Search,
  SlidersHorizontal,
} from "lucide-react";

interface PortfolioPageProps {
  onNavigate: (path: string) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeModalItem, setActiveModalItem] = useState<ClientPortfolioItem | null>(null);

  const categories = [
    "All",
    "Services & Logistics",
    "Interior & Home Decor",
    "Enterprise & Trading",
  ];

  const filteredClients = clientPortfolioData.filter((item) => {
    const matchesCat =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.displayUrl.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <div className="space-y-16 md:space-y-24 pb-16">
      {/* Hero Section */}
      <section className="bg-white border-b border-slate-200/80 pt-6 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ label: "Live Client Portfolio" }]}
            onNavigate={onNavigate}
            className="mb-8"
          />

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1554A3]/10 text-[#1554A3] text-xs font-semibold mb-4">
              <span className="w-2 h-2 rounded-full bg-[#1554A3] animate-pulse" />
              Verified Production Deployments
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0B1F3A] tracking-tight leading-tight text-balance">
              Client Portfolio & Live Platforms
            </h1>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              Explore digital platforms, high-conversion commercial portals, and tailored business software engineered by MKTECH. Every client solution is built with speed, reliability, and operational alignment.
            </p>
          </div>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 pt-8 border-t border-slate-100">
            <div>
              <span className="block font-mono text-2xl sm:text-3xl font-extrabold text-[#1554A3]">
                100%
              </span>
              <span className="text-xs text-slate-500 font-medium">
                Live Production Websites
              </span>
            </div>
            <div>
              <span className="block font-mono text-2xl sm:text-3xl font-extrabold text-slate-900">
                &lt; 1.5s
              </span>
              <span className="text-xs text-slate-500 font-medium">
                Average Page Load Time
              </span>
            </div>
            <div>
              <span className="block font-mono text-2xl sm:text-3xl font-extrabold text-slate-900">
                Custom
              </span>
              <span className="text-xs text-slate-500 font-medium">
                Tailored Business Workflows
              </span>
            </div>
            <div>
              <span className="block font-mono text-2xl sm:text-3xl font-extrabold text-emerald-600">
                99.9%
              </span>
              <span className="text-xs text-slate-500 font-medium">
                Continuous Uptime & Support
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Client Cards Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Controls Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-slate-200">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-white text-slate-900 shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search client or domain..."
              className="w-full pl-10 pr-4 py-2 text-xs rounded-xl border border-slate-200 bg-white focus:outline-2 focus:outline-[#1554A3] text-slate-800 placeholder-slate-400"
            />
          </div>
        </div>

        {/* Client Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {filteredClients.map((client) => {
            return (
              <div
                key={client.id}
                className="group rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-9 shadow-xs hover:shadow-xl hover:border-[#1554A3]/40 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
              >
                {/* Subtle top accent gradient */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#1554A3] via-[#38BDF8] to-slate-400 opacity-80" />

                <div>
                  {/* Category and Live Badge */}
                  <div className="flex items-center justify-between gap-2 pb-5 border-b border-slate-100">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1554A3] bg-[#1554A3]/10 px-3 py-1 rounded-full">
                      <Globe className="w-3.5 h-3.5" />
                      {client.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                      Live Website
                    </span>
                  </div>

                  {/* Header Title & Direct Link */}
                  <div className="mt-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-black text-slate-900 tracking-tight group-hover:text-[#1554A3] transition-colors">
                          {client.name}
                        </h3>
                        <a
                          href={client.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm font-mono text-[#1554A3] hover:underline mt-1 font-semibold"
                        >
                          {client.displayUrl}
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                      <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center text-[#1554A3] group-hover:bg-[#1554A3] group-hover:text-white transition-all shadow-xs">
                        <Globe className="w-6 h-6" />
                      </div>
                    </div>

                    <p className="mt-3 text-sm font-medium text-slate-700">
                      {client.tagline}
                    </p>
                    <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                      {client.description}
                    </p>
                  </div>

                  {/* Challenge Solved Box */}
                  <div className="mt-5 p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Problem Solved by MKTECH
                    </span>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      {client.challengeSolved}
                    </p>
                  </div>

                  {/* Feature Highlights */}
                  <div className="mt-5 space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Key Highlights & Architecture
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                      {client.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Badges */}
                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {client.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-[11px] font-medium rounded-lg bg-slate-100 text-slate-700 border border-slate-200/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Actions & Metrics */}
                <div className="mt-8 pt-5 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  {/* Metrics preview */}
                  {client.metrics && (
                    <div className="flex items-center gap-4 text-xs">
                      <div>
                        <span className="font-bold text-slate-900 block">
                          {client.metrics[0].value}
                        </span>
                        <span className="text-[10px] text-slate-400">
                          {client.metrics[0].label}
                        </span>
                      </div>
                      <div className="h-6 w-px bg-slate-200" />
                      <div>
                        <span className="font-bold text-[#1554A3] block">
                          {client.metrics[1].value}
                        </span>
                        <span className="text-[10px] text-slate-400">
                          {client.metrics[1].label}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Open Live Client Website */}
                  <a
                    href={client.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#1554A3] text-white hover:bg-[#0B1F3A] transition-all text-xs font-semibold shadow-xs"
                  >
                    <span>Visit Live Site</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty Search Fallback */}
        {filteredClients.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 my-8">
            <Globe className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800">No client portfolio found</h3>
            <p className="text-sm text-slate-500 mt-1 max-w-sm mx-auto">
              We couldn't find any portfolio items matching your search. Clear your filters or explore our full suite.
            </p>
            <Button
              variant="outline"
              size="sm"
              className="mt-4"
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
            >
              Reset Filters
            </Button>
          </div>
        )}
      </section>

      {/* Why Choose MKTECH for Client Portals */}
      <section className="bg-slate-50 py-16 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Client Delivery Standard"
            title="How We Build For Growing Businesses"
            subtitle="From local service enterprises to luxury decor studios, our websites are designed to convert visitors into inquiries with zero friction."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="p-7 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#1554A3]/10 text-[#1554A3] flex items-center justify-center mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-base">Sub-Second Speed</h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Clean, unbloated codebases ensure lightning-fast mobile loading even on low-bandwidth networks across Tier-2 and Tier-3 regions.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#1554A3]/10 text-[#1554A3] flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-base">Conversion Architecture</h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Direct WhatsApp integration, one-tap calling, and structured inquiry capture ensure you never lose a prospective buyer.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#1554A3]/10 text-[#1554A3] flex items-center justify-center mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-base">Continuous Support</h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Reliable maintenance, regular SEO updates, and dedicated engineering support to scale your digital presence as you expand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection onNavigate={onNavigate} />
    </div>
  );
};
