import React, { useState, useEffect } from "react";
import { BrandLogo } from "../ui/BrandLogo";
import { siteConfig } from "../../content/site";
import { Menu, X, ArrowRight, ExternalLink, Globe, Phone, Mail, ChevronRight } from "lucide-react";
import { Button } from "../ui/Buttons";
import { clientPortfolioData } from "../../content/clients";

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when side menu is open
  useEffect(() => {
    if (isSideMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isSideMenuOpen]);

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setIsSideMenuOpen(false);
    onNavigate(href);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/80 py-3"
            : "bg-white/85 backdrop-blur-xs border-b border-slate-200/50 py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Brand Logo strictly from /logo.png */}
            <a
              href="/"
              onClick={(e) => handleLinkClick(e, "/")}
              className="flex items-center group focus-visible:outline-2 focus-visible:outline-[#1554A3] rounded-md"
              aria-label="MKTECH Home"
            >
              <BrandLogo size="md" />
            </a>

            {/* Desktop Navigation Links */}
            <nav
              aria-label="Primary Navigation"
              className="hidden lg:flex items-center gap-5 xl:gap-7"
            >
              {siteConfig.navigation.map((item) => {
                const isActive =
                  currentPath === item.href ||
                  (item.href !== "/" && currentPath.startsWith(item.href));

                const isPortfolio = item.href === "/portfolio";

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className={`text-sm font-medium transition-colors relative py-1 hover:text-[#1554A3] flex items-center gap-1.5 ${
                      isActive ? "text-[#1554A3] font-bold" : "text-slate-600"
                    }`}
                  >
                    {item.name}
                    {isPortfolio && (
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    )}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1554A3] rounded-full" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Right Action & Menu Toggle Button */}
            <div className="flex items-center gap-3">
              <div className="hidden sm:block">
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => {
                    onNavigate("/contact");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  icon={<ArrowRight className="w-3.5 h-3.5" />}
                >
                  Let's Build
                </Button>
              </div>

              {/* Side Menu Drawer Toggle Button (Visible on mobile and tablet) */}
              <button
                type="button"
                onClick={() => setIsSideMenuOpen(!isSideMenuOpen)}
                className="p-2.5 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-2 focus:outline-[#1554A3] flex items-center gap-2 cursor-pointer border border-slate-200/80 bg-white shadow-xs"
                aria-expanded={isSideMenuOpen}
                aria-label="Toggle Side Menu"
              >
                {isSideMenuOpen ? (
                  <X className="w-5 h-5 text-slate-900" />
                ) : (
                  <Menu className="w-5 h-5 text-slate-900" />
                )}
                <span className="hidden md:inline-block text-xs font-semibold text-slate-700">
                  Menu
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Modern Slide-In Side Menu Bar & Overlay */}
      {isSideMenuOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop Blur Overlay */}
          <div
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs transition-opacity duration-300"
            onClick={() => setIsSideMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Side Drawer Panel */}
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between overflow-y-auto border-l border-slate-200">
              {/* Drawer Header */}
              <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img src="/logo.png" alt="MKTECH" className="w-8 h-8 object-contain" />
                  <div className="font-extrabold text-slate-900 tracking-tight text-lg">
                    MK<span className="text-[#545A60] font-normal">TECH</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsSideMenuOpen(false)}
                  className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Body */}
              <div className="p-6 space-y-6 flex-1">
                {/* Navigation Links */}
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-3">
                    Main Navigation
                  </span>
                  <div className="space-y-1">
                    {siteConfig.navigation.map((item) => {
                      const isActive =
                        currentPath === item.href ||
                        (item.href !== "/" && currentPath.startsWith(item.href));

                      return (
                        <a
                          key={item.name}
                          href={item.href}
                          onClick={(e) => handleLinkClick(e, item.href)}
                          className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                            isActive
                              ? "bg-[#1554A3] text-white shadow-xs"
                              : "text-slate-700 hover:bg-slate-100"
                          }`}
                        >
                          <span className="flex items-center gap-2">
                            {item.name}
                            {item.href === "/portfolio" && (
                              <span
                                className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                                  isActive
                                    ? "bg-white/20 text-white"
                                    : "bg-emerald-100 text-emerald-800"
                                }`}
                              >
                                Live Sites
                              </span>
                            )}
                          </span>
                          <ChevronRight
                            className={`w-4 h-4 ${
                              isActive ? "text-white" : "text-slate-400"
                            }`}
                          />
                        </a>
                      );
                    })}
                  </div>
                </div>

                {/* Direct Client Portfolio Quick Links */}
                <div className="pt-4 border-t border-slate-100">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Live Client Portfolios
                    </span>
                    <a
                      href="/portfolio"
                      onClick={(e) => handleLinkClick(e, "/portfolio")}
                      className="text-[11px] font-bold text-[#1554A3] hover:underline"
                    >
                      View All
                    </a>
                  </div>

                  <div className="space-y-2">
                    {clientPortfolioData.map((client) => (
                      <a
                        key={client.id}
                        href={client.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200/70 hover:border-[#1554A3]/50 hover:bg-[#1554A3]/5 transition-all text-xs"
                      >
                        <div className="min-w-0 pr-2">
                          <p className="font-bold text-slate-800 group-hover:text-[#1554A3] truncate">
                            {client.name}
                          </p>
                          <p className="text-[11px] font-mono text-slate-500 truncate">
                            {client.displayUrl}
                          </p>
                        </div>
                        <div className="flex items-center gap-1 text-[11px] font-medium text-emerald-600 shrink-0">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          <ExternalLink className="w-3.5 h-3.5" />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Direct Help / Contact */}
                <div className="pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#1554A3]" />
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="hover:text-[#1554A3] hover:underline"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#1554A3]" />
                    <a
                      href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
                      className="hover:text-[#1554A3] hover:underline"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Drawer Footer CTA */}
              <div className="p-6 bg-slate-50 border-t border-slate-200/80">
                <Button
                  variant="primary"
                  size="md"
                  fullWidth
                  onClick={() => {
                    setIsSideMenuOpen(false);
                    onNavigate("/contact");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Start a Project
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
