import React from "react";
import { Breadcrumbs } from "../components/ui/Breadcrumbs";
import { siteConfig } from "../content/site";
import { Shield, Lock } from "lucide-react";

interface PrivacyPolicyPageProps {
  onNavigate: (path: string) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({
  onNavigate,
}) => {
  return (
    <div className="space-y-12 pb-20">
      <section className="bg-white border-b border-slate-200/80 pt-6 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ label: "Privacy Policy" }]}
            onNavigate={onNavigate}
            className="mb-6"
          />

          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1554A3] mb-2">
            <Shield className="w-4 h-4" />
            <span>Governance & Trust</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-2 text-xs text-slate-500">
            Last Updated: September 2026 · Effective for MKTECH
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/90 shadow-xs space-y-8 text-sm text-slate-700 leading-relaxed">
          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              1. Overview & Commitment
            </h2>
            <p>
              MKTECH ("we", "us", or "our") respects the privacy of visitors and clients who engage with our website and digital services. This policy outlines how we handle information submitted through our contact forms and during visits to our web properties.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              2. Information Collected
            </h2>
            <p className="mb-2">We collect only necessary information required to understand your project requirements and communicate with you effectively:</p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-600">
              <li>
                <strong>Contact Form Data:</strong> Name, business email address, phone number (optional), organization name, target industry, and project specifications.
              </li>
              <li>
                <strong>Website Usage Information:</strong> Anonymous standard browser telemetry such as device type, screen viewport, referring URL, and pages viewed, used solely to optimize website responsiveness.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              3. Cookies and Tracking
            </h2>
            <p>
              Our website uses essential session cookies and performance telemetry to maintain security, prevent automated form abuse (spam bots), and ensure swift page rendering. We do not sell user data to advertising networks or employ behavioral tracking cookies.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              4. How Information Is Used
            </h2>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-600">
              <li>To evaluate project feasibility and prepare technical consultation responses.</li>
              <li>To contact you regarding your submitted inquiry.</li>
              <li>To maintain the security, uptime, and integrity of our web services.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              5. Data Security & Storage
            </h2>
            <p>
              We apply defensive security standards: encrypted TLS transmission for all web sessions, server-side data sanitization, and restricted internal access to inquiries. Information submitted through contact forms is accessible solely by our core founding and engineering team.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              6. Third-Party Services
            </h2>
            <p>
              We do not transfer personal information to external commercial vendors, except for secure hosting providers and transactional email routing infrastructure strictly required to operate our communications.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              7. Data Retention & User Rights
            </h2>
            <p>
              We retain business inquiries only as long as necessary to address your consultation requirements. You have the right to request access to the information you provided, or request its prompt deletion, by writing to our designated privacy desk.
            </p>
          </div>

          <div className="pt-6 border-t border-slate-200">
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              8. Contact & Privacy Inquiries
            </h2>
            <p>
              For any questions regarding this Privacy Policy or data handling practices, please contact:
            </p>
            <div className="mt-3 p-4 rounded-xl bg-slate-50 border border-slate-200/70 text-xs space-y-1 text-slate-800">
              <p className="font-bold">MKTECH Inquiries Desk</p>
              <p>Email: <a href={`mailto:${siteConfig.contact.email}`} className="text-[#1554A3] hover:underline">{siteConfig.contact.email}</a></p>
              <p>Location: {siteConfig.contact.address}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
