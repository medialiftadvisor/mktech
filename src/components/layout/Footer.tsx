import React from "react";
import { BrandLogo } from "../ui/BrandLogo";
import { siteConfig } from "../../content/site";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0B1F3A] text-white border-t border-slate-800">
      {/* Top Banner / Early Validation Summary */}
      <div className="border-b border-slate-800/80 py-6 bg-[#071324]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-2">
              <span className="font-mono text-sky-400 font-bold">5 CLIENT DOMAINS:</span>
              <span className="text-slate-300">
                Real Estate · Quick Commerce · Boutique & Retail · Food Processing · Farmer & Village Solutions
              </span>
            </div>
            <div className="text-slate-400">
              Stage: <span className="text-white font-medium">Pre-Seed Technology Startup</span> · 5-Member Core Team
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Col (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <a
              href="/"
              onClick={(e) => handleNav(e, "/")}
              className="inline-block"
              aria-label="MKTECH Home"
            >
              <BrandLogo variant="navy" size="md" />
            </a>
            <p className="text-sm font-medium text-slate-200">
              {siteConfig.tagline}
            </p>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {siteConfig.positioning}
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>{siteConfig.contact.address}</span>
              </div>
            </div>
          </div>

          {/* Nav Col: Company */}
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
              Company
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="/about"
                  onClick={(e) => handleNav(e, "/about")}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  About MKTECH
                </a>
              </li>
              <li>
                <a
                  href="/technology"
                  onClick={(e) => handleNav(e, "/technology")}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Technology Ecosystem
                </a>
              </li>
              <li>
                <a
                  href="/insights"
                  onClick={(e) => handleNav(e, "/insights")}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Insights & Perspectives
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  onClick={(e) => handleNav(e, "/contact")}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Contact & Inquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Solutions & Sectors */}
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
              Solutions & Sectors
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="/solutions"
                  onClick={(e) => handleNav(e, "/solutions")}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  All Solutions
                </a>
              </li>
              <li>
                <a
                  href="/portfolio"
                  onClick={(e) => handleNav(e, "/portfolio")}
                  className="text-sky-300 hover:text-white transition-colors font-semibold flex items-center gap-1"
                >
                  <span>Client Portfolio (Live Sites)</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                </a>
              </li>
              <li>
                <a
                  href="/industries"
                  onClick={(e) => handleNav(e, "/industries")}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Client Domains
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  onClick={(e) => handleNav(e, "/projects")}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Selected Work
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  onClick={(e) => handleNav(e, "/contact")}
                  className="text-slate-300 hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>Start a Conversation</span>
                  <ArrowUpRight className="w-3 h-3 text-sky-400" />
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Governance */}
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
              Legal & Policy
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="/privacy"
                  onClick={(e) => handleNav(e, "/privacy")}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  onClick={(e) => handleNav(e, "/terms")}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Terms & Conditions
                </a>
              </li>
              <li className="pt-2 text-[11px] text-slate-400 leading-normal">
                Enterprise integrity: No fabricated metrics or unsupported claims.
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="mt-12 pt-6 border-t border-slate-800 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 MKTECH. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a
              href="/privacy"
              onClick={(e) => handleNav(e, "/privacy")}
              className="hover:text-slate-200 transition-colors"
            >
              Privacy Policy
            </a>
            <span>·</span>
            <a
              href="/terms"
              onClick={(e) => handleNav(e, "/terms")}
              className="hover:text-slate-200 transition-colors"
            >
              Terms & Conditions
            </a>
            <span>·</span>
            <span className="text-slate-300">Technology for a Better Tomorrow</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
