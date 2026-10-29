import React from "react";
import { ArrowLeft, Home, Search, Compass, MessageSquare } from "lucide-react";
import { Button } from "../components/ui/Buttons";

interface NotFoundPageProps {
  onNavigate: (path: string) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl w-full text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-[#1554A3]/10 text-[#1554A3] flex items-center justify-center mx-auto text-2xl font-mono font-bold">
          404
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] tracking-tight">
            Page Not Found
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-md mx-auto leading-relaxed">
            The page you are looking for may have been moved, renamed, or does not exist within the MKTECH digital portal.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            variant="primary"
            size="md"
            icon={<Home className="w-4 h-4" />}
            onClick={() => onNavigate("/")}
          >
            Return to Home
          </Button>

          <Button
            variant="outline"
            size="md"
            icon={<Compass className="w-4 h-4" />}
            onClick={() => onNavigate("/solutions")}
          >
            Explore Solutions
          </Button>
        </div>

        <div className="pt-8 border-t border-slate-200/80 text-xs text-slate-500 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => onNavigate("/industries")}
            className="hover:text-[#1554A3] underline transition-colors cursor-pointer"
          >
            Industries
          </button>
          <span>·</span>
          <button
            onClick={() => onNavigate("/projects")}
            className="hover:text-[#1554A3] underline transition-colors cursor-pointer"
          >
            Projects
          </button>
          <span>·</span>
          <button
            onClick={() => onNavigate("/contact")}
            className="hover:text-[#1554A3] underline transition-colors cursor-pointer"
          >
            Contact Desk
          </button>
        </div>
      </div>
    </div>
  );
};
