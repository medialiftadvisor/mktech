import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { ErrorBoundary } from "./components/ui/ErrorBoundary";
import { RouteProgressBar } from "./components/ui/RouteProgressBar";

// Pages
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { SolutionsPage } from "./pages/SolutionsPage";
import { PortfolioPage } from "./pages/PortfolioPage";
import { IndustriesPage } from "./pages/IndustriesPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { TechnologyPage } from "./pages/TechnologyPage";
import { InsightsPage } from "./pages/InsightsPage";
import { ContactPage } from "./pages/ContactPage";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import { TermsPage } from "./pages/TermsPage";
import { NotFoundPage } from "./pages/NotFoundPage";

export const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== "undefined") {
      return window.location.pathname || "/";
    }
    return "/";
  });
  const [isNavigating, setIsNavigating] = useState<boolean>(false);
  const navigationTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Trigger loading progress indicator briefly on route transitions
  const triggerNavigationProgress = () => {
    if (navigationTimerRef.current) {
      clearTimeout(navigationTimerRef.current);
    }
    setIsNavigating(true);
    navigationTimerRef.current = setTimeout(() => {
      setIsNavigating(false);
    }, 400);
  };

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (navigationTimerRef.current) {
        clearTimeout(navigationTimerRef.current);
      }
    };
  }, []);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      triggerNavigationProgress();
      setCurrentPath(window.location.pathname || "/");
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Sync document title and meta per page for strong technical SEO
  useEffect(() => {
    const path = currentPath.toLowerCase();

    if (path === "/" || path === "") {
      document.title = "MKTECH | Technology for a Better Tomorrow";
    } else if (path.startsWith("/about")) {
      document.title = "About MKTECH | Building Technology Around Real-World Needs";
    } else if (path.startsWith("/solutions")) {
      document.title = "Solutions | Practical Digital Platforms & Systems | MKTECH";
    } else if (path.startsWith("/portfolio")) {
      document.title = "Client Portfolio & Live Sites | Success RJ, Sevazo, Ghar Singaar & More | MKTECH";
    } else if (path.startsWith("/industries")) {
      document.title = "Industries & Sectors | Real Estate, Commerce, Retail & Rural | MKTECH";
    } else if (path.startsWith("/projects")) {
      document.title = "Selected Work & Experience | Problem-Solving Portfolio | MKTECH";
    } else if (path.startsWith("/technology")) {
      document.title = "Technology Ecosystem | Architecture & Engineering Standards | MKTECH";
    } else if (path.startsWith("/insights")) {
      document.title = "Insights & Field Notes | Thought Leadership | MKTECH";
    } else if (path.startsWith("/contact")) {
      document.title = "Contact MKTECH | Let's Build Something Meaningful";
    } else if (path.startsWith("/privacy")) {
      document.title = "Privacy Policy | MKTECH";
    } else if (path.startsWith("/terms")) {
      document.title = "Terms & Conditions | MKTECH";
    } else {
      document.title = "404 Page Not Found | MKTECH";
    }
  }, [currentPath]);

  const navigate = (path: string) => {
    // Preserve query parameters if present
    const target = path.startsWith("/") ? path : `/${path}`;
    const nextCleanPath = target.split("?")[0].toLowerCase();
    const currentCleanPath = currentPath.split("?")[0].toLowerCase();

    if (nextCleanPath !== currentCleanPath) {
      triggerNavigationProgress();
    }

    window.history.pushState({}, "", target);
    setCurrentPath(target.split("?")[0]);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Route dispatcher
  const renderCurrentPage = () => {
    const cleanPath = currentPath.split("?")[0].toLowerCase();

    switch (cleanPath) {
      case "/":
        return <HomePage onNavigate={navigate} />;
      case "/about":
        return <AboutPage onNavigate={navigate} />;
      case "/solutions":
        return <SolutionsPage onNavigate={navigate} />;
      case "/portfolio":
        return <PortfolioPage onNavigate={navigate} />;
      case "/industries":
        return <IndustriesPage onNavigate={navigate} />;
      case "/projects":
        return <ProjectsPage onNavigate={navigate} />;
      case "/technology":
        return <TechnologyPage onNavigate={navigate} />;
      case "/insights":
        return <InsightsPage onNavigate={navigate} />;
      case "/contact":
        return <ContactPage onNavigate={navigate} />;
      case "/privacy":
        return <PrivacyPolicyPage onNavigate={navigate} />;
      case "/terms":
        return <TermsPage onNavigate={navigate} />;
      default:
        return <NotFoundPage onNavigate={navigate} />;
    }
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen flex flex-col bg-[#F6F9FC] text-[#0B1F3A] font-sans selection:bg-[#1554A3] selection:text-white">
        {/* Global Loading Progress Bar using Framer Motion */}
        <RouteProgressBar isLoading={isNavigating} />

        {/* Global Navigation */}
        <Navbar currentPath={currentPath} onNavigate={navigate} />

        {/* Dynamic Route View with Framer Motion Page Transition */}
        <main className="flex-1 w-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPath.split("?")[0].toLowerCase()}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{
                duration: 0.28,
                ease: [0.22, 1, 0.36, 1], // Custom smooth ease-out curve
              }}
              className="w-full"
            >
              {renderCurrentPage()}
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Global Footer */}
        <Footer onNavigate={navigate} />
      </div>
    </ErrorBoundary>
  );
};

export default App;
