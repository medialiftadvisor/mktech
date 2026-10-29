import React from "react";
import { Breadcrumbs } from "../components/ui/Breadcrumbs";
import { ContactForm } from "../components/forms/ContactForm";
import { siteConfig } from "../content/site";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Calendar,
} from "lucide-react";

interface ContactPageProps {
  onNavigate: (path: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 md:space-y-24 pb-16">
      {/* Hero */}
      <section className="bg-white border-b border-slate-200/80 pt-6 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ label: "Contact & Discovery" }]}
            onNavigate={onNavigate}
            className="mb-8"
          />

          <div className="max-w-3xl">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#1554A3] block mb-3">
              Direct Inquiries
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0B1F3A] tracking-tight leading-tight text-balance">
              Let's Build Something Meaningful.
            </h1>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed text-balance">
              "Have a problem, idea or digital transformation requirement? Let's start a conversation."
            </p>
          </div>
        </div>
      </section>

      {/* Main Content: Form + Contact Information */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Details & SLA (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Direct Contact Points
              </span>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                Connect with the MKTECH Team
              </h2>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Whether you run an established regional business or an early-stage venture, we are eager to hear about your operational bottlenecks and explore technology solutions.
              </p>
            </div>

            {/* Configurable Contact Information Cards */}
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#1554A3]/10 text-[#1554A3] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase text-slate-400 block">
                    Email Inquiries
                  </span>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-sm font-bold text-slate-900 hover:text-[#1554A3] transition-colors"
                  >
                    {siteConfig.contact.email}
                  </a>
                  <span className="text-[11px] text-slate-500 block mt-0.5">
                    Direct routing to founding desk
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#1554A3]/10 text-[#1554A3] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase text-slate-400 block">
                    Phone / Direct Desk
                  </span>
                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`}
                    className="text-sm font-bold text-slate-900 hover:text-[#1554A3] transition-colors"
                  >
                    {siteConfig.contact.phone}
                  </a>
                  <span className="text-[11px] text-slate-500 block mt-0.5">
                    {siteConfig.contact.workingHours}
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#1554A3]/10 text-[#1554A3] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase text-slate-400 block">
                    Registered Headquarters
                  </span>
                  <span className="text-sm font-bold text-slate-900">
                    {siteConfig.contact.address}
                  </span>
                  <span className="text-[11px] text-slate-500 block mt-0.5">
                    Serving regional and pan-India projects
                  </span>
                </div>
              </div>
            </div>

            {/* Discovery Process & Commitment */}
            <div className="p-6 rounded-2xl bg-[#0B1F3A] text-white space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-wider">
                <Clock className="w-4 h-4" />
                <span>Our Response Commitment</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Every inquiry is reviewed by founder Mahesh and our technical architecture team. You can expect a thoughtful response within 24 to 48 business hours with preliminary discovery questions or a proposed video consultation.
              </p>
              <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero spam · Strictly confidential requirement handling</span>
              </div>
            </div>
          </div>

          {/* Right Column: Functional Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-slate-900">
                Submit Project Requirement
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Fill in the details below to schedule an initial architecture and problem review.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};
