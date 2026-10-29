import React from "react";
import { Breadcrumbs } from "../components/ui/Breadcrumbs";
import { siteConfig } from "../content/site";
import { FileText } from "lucide-react";

interface TermsPageProps {
  onNavigate: (path: string) => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-12 pb-20">
      <section className="bg-white border-b border-slate-200/80 pt-6 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ label: "Terms & Conditions" }]}
            onNavigate={onNavigate}
            className="mb-6"
          />

          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1554A3] mb-2">
            <FileText className="w-4 h-4" />
            <span>Legal Agreement</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] tracking-tight">
            Terms & Conditions
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
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using the MKTECH website (mktech.ai.studio), you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree, please discontinue using this site.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              2. Website Usage & Purpose
            </h2>
            <p>
              This website provides informational material regarding MKTECH’s technology capabilities, client focus domains, and problem-solving methodology. You agree to use this website only for lawful business evaluation purposes and not to compromise its security or attempt unauthorized access.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              3. Intellectual Property Rights
            </h2>
            <p>
              The trademarks, brand identity, logos, code architecture, text content, and graphics published on this website are the property of MKTECH, unless otherwise indicated. Unauthorized reproduction, modification, or distribution without prior written authorization is prohibited.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              4. Accuracy of Information & Disclosures
            </h2>
            <p>
              MKTECH strives to provide accurate and factual descriptions of its capabilities and industry focus areas. Information on this site is provided for general evaluation and does not constitute a formal binding commercial contract until formalized through mutual statements of work (SOW).
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              5. External Links
            </h2>
            <p>
              Any links to third-party services or external platforms are provided solely for user convenience. MKTECH does not control or endorse the content or policies of third-party websites.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              6. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by applicable law, MKTECH and its directors, founders, and team members shall not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use this website.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              7. Changes to Terms
            </h2>
            <p>
              We reserve the right to modify these Terms and Conditions as our startup operations and legal frameworks evolve. Updated terms will be posted with a revised effective date.
            </p>
          </div>

          <div className="pt-6 border-t border-slate-200">
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              8. Contact
            </h2>
            <p>
              For legal inquiries or questions about these terms, reach us at:
            </p>
            <div className="mt-3 p-4 rounded-xl bg-slate-50 border border-slate-200/70 text-xs space-y-1 text-slate-800">
              <p className="font-bold">MKTECH</p>
              <p>Email: <a href={`mailto:${siteConfig.contact.email}`} className="text-[#1554A3] hover:underline">{siteConfig.contact.email}</a></p>
              <p>Headquarters: {siteConfig.contact.address}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
