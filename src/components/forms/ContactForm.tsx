import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "../ui/Buttons";

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  organization: string;
  industry: string;
  projectType: string;
  message: string;
  honeypot?: string; // Bot protection
}

interface ContactFormProps {
  initialIndustry?: string;
  initialProjectType?: string;
  className?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  initialIndustry = "",
  initialProjectType = "",
  className = "",
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    email: "",
    phone: "",
    organization: "",
    industry: initialIndustry || "Real Estate",
    projectType: initialProjectType || "Digital Platform",
    message: "",
    honeypot: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState<string>("");

  const industries = [
    "Real Estate",
    "Quick Commerce",
    "Boutique / Retail",
    "Food Processing",
    "Farmer / Village",
    "Other",
  ];

  const projectTypes = [
    "Digital Platform",
    "Web Application",
    "Mobile Application",
    "Business Automation",
    "Customer Experience",
    "Technology Consulting",
    "Other",
  ];

  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = "Full name is required";
    } else if (formData.fullName.trim().length < 2) {
      errs.fullName = "Please enter your full name";
    }

    if (!formData.email.trim()) {
      errs.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address";
    }

    if (formData.phone.trim()) {
      // Basic phone format validation (at least 7 digits)
      const digitsOnly = formData.phone.replace(/\D/g, "");
      if (digitsOnly.length < 7 || digitsOnly.length > 15) {
        errs.phone = "Please enter a valid phone number (7-15 digits)";
      }
    }

    if (!formData.message.trim()) {
      errs.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      errs.message = "Please describe your requirement in at least 10 characters";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Spam honeypot check
    if (formData.honeypot) {
      setStatus("success");
      setServerMessage(
        "Thank you. Your enquiry has been received. Our team will get back to you."
      );
      return;
    }

    if (!validate()) {
      return;
    }

    setStatus("submitting");
    setServerMessage("");

    try {
      // Store submission locally in browser for safe keeping and review
      try {
        const submissions = JSON.parse(
          localStorage.getItem("mktech_enquiries") || "[]"
        );
        submissions.push({
          ...formData,
          recipient: "my150417@gmail.com",
          timestamp: new Date().toISOString(),
        });
        localStorage.setItem("mktech_enquiries", JSON.stringify(submissions));
      } catch {
        // ignore local storage restrictions
      }

      // Also construct direct mailto link to open user's email client addressed to my150417@gmail.com
      const subject = encodeURIComponent(
        `[MKTECH Enquiry] ${formData.projectType} - ${formData.organization || formData.fullName}`
      );
      const body = encodeURIComponent(
        `Full Name: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone || "N/A"}\nOrganization: ${formData.organization || "N/A"}\nIndustry: ${formData.industry}\nProject Type: ${formData.projectType}\n\nMessage / Requirement:\n${formData.message}\n`
      );

      // Trigger mailto link seamlessly in client
      const mailtoUrl = `mailto:my150417@gmail.com?subject=${subject}&body=${body}`;
      
      // Delay slightly for smooth UI feedback
      setTimeout(() => {
        window.location.href = mailtoUrl;
      }, 500);

      setStatus("success");
      setServerMessage(
        "Thank you! Your enquiry has been prepared and routed to my150417@gmail.com. If your email application didn't open automatically, you can also write to us directly at my150417@gmail.com."
      );

      // Clear form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        organization: "",
        industry: "Real Estate",
        projectType: "Digital Platform",
        message: "",
        honeypot: "",
      });
    } catch {
      setStatus("error");
      setServerMessage(
        "Please send your enquiry directly to my150417@gmail.com."
      );
    }
  };

  return (
    <div
      className={`rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 md:p-10 shadow-xs ${className}`}
    >
      {status === "success" ? (
        <div className="py-8 text-center flex flex-col items-center">
          <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">Enquiry Received</h3>
          <p className="mt-2 text-slate-600 max-w-md leading-relaxed text-sm md:text-base">
            {serverMessage ||
              "Thank you. Your enquiry has been received. Our team will get back to you."}
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setStatus("idle");
                setServerMessage("");
              }}
            >
              Send Another Enquiry
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          {/* Honeypot field for bot protection */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="honeypot">Leave blank</label>
            <input
              type="text"
              id="honeypot"
              name="honeypot"
              value={formData.honeypot}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          {status === "error" && (
            <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-800 text-sm flex items-start gap-3">
              <AlertCircle className="w-5 h-5 shrink-0 text-red-600 mt-0.5" />
              <div>
                <span className="font-semibold block">Submission Error</span>
                <span>{serverMessage}</span>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
              >
                Full Name <span className="text-[#1554A3]">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Ramesh Sharma"
                className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 bg-white placeholder:text-slate-400 focus:outline-2 focus:outline-[#1554A3] transition-colors ${
                  errors.fullName ? "border-red-500 bg-red-50/20" : "border-slate-300"
                }`}
                disabled={status === "submitting"}
              />
              {errors.fullName && (
                <span className="text-xs text-red-600 mt-1 block font-medium">
                  {errors.fullName}
                </span>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
              >
                Email Address <span className="text-[#1554A3]">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@company.com"
                className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 bg-white placeholder:text-slate-400 focus:outline-2 focus:outline-[#1554A3] transition-colors ${
                  errors.email ? "border-red-500 bg-red-50/20" : "border-slate-300"
                }`}
                disabled={status === "submitting"}
              />
              {errors.email && (
                <span className="text-xs text-red-600 mt-1 block font-medium">
                  {errors.email}
                </span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
              >
                Phone (Optional)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 bg-white placeholder:text-slate-400 focus:outline-2 focus:outline-[#1554A3] transition-colors ${
                  errors.phone ? "border-red-500 bg-red-50/20" : "border-slate-300"
                }`}
                disabled={status === "submitting"}
              />
              {errors.phone && (
                <span className="text-xs text-red-600 mt-1 block font-medium">
                  {errors.phone}
                </span>
              )}
            </div>

            {/* Company / Organization */}
            <div>
              <label
                htmlFor="organization"
                className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
              >
                Company / Organization
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                placeholder="Your organization or project name"
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 bg-white placeholder:text-slate-400 focus:outline-2 focus:outline-[#1554A3] transition-colors"
                disabled={status === "submitting"}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Industry */}
            <div>
              <label
                htmlFor="industry"
                className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
              >
                Industry
              </label>
              <select
                id="industry"
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 bg-white focus:outline-2 focus:outline-[#1554A3] transition-colors cursor-pointer"
                disabled={status === "submitting"}
              >
                {industries.map((ind) => (
                  <option key={ind} value={ind}>
                    {ind}
                  </option>
                ))}
              </select>
            </div>

            {/* Project Type */}
            <div>
              <label
                htmlFor="projectType"
                className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
              >
                Project Type
              </label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 bg-white focus:outline-2 focus:outline-[#1554A3] transition-colors cursor-pointer"
                disabled={status === "submitting"}
              >
                {projectTypes.map((pt) => (
                  <option key={pt} value={pt}>
                    {pt}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
            >
              Message / Problem Description <span className="text-[#1554A3]">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe the operational challenge, system requirements, or digital goal you would like to explore..."
              className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 bg-white placeholder:text-slate-400 focus:outline-2 focus:outline-[#1554A3] transition-colors ${
                errors.message ? "border-red-500 bg-red-50/20" : "border-slate-300"
              }`}
              disabled={status === "submitting"}
            />
            {errors.message && (
              <span className="text-xs text-red-600 mt-1 block font-medium">
                {errors.message}
              </span>
            )}
          </div>

          <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span className="text-xs text-slate-500">
              * Required fields · Inquiries reviewed by founding team
            </span>
            <Button
              type="submit"
              variant="primary"
              size="md"
              disabled={status === "submitting"}
              icon={
                status === "submitting" ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )
              }
            >
              {status === "submitting" ? "Sending..." : "Send Enquiry"}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};
