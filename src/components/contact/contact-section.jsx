"use client";

import { useState } from "react";
import {
  MessageCircle,
  ArrowUpRight,
  Mail,
  Globe,
  Clock,
  ShieldCheck,
  Lock,
  ArrowRight,
  CheckCircle2,
  Search,
  Headphones,
  Rocket,
  Zap,
  ChevronDown,
} from "lucide-react";

const BUDGET_OPTIONS = [
  { value: "<2k", label: "< $2,000" },
  { value: "2k-5k", label: "$2k – $5k" },
  { value: "5k-10k", label: "$5k – $10k" },
  { value: "10k+", label: "$10,000+" },
  { value: "retainer", label: "Monthly" },
];

const SERVICE_OPTIONS = [
  { value: "web-app", label: "Website & App Development" },
  { value: "seo-growth", label: "SEO & Digital Growth" },
  { value: "design-video", label: "Graphic Design & Video Editing" },
  { value: "photo-video", label: "Photography & Videography" },
  { value: "ai-automation", label: "AI & Business Automation" },
  { value: "subscription", label: "Monthly Subscription Plan" },
  { value: "custom", label: "Other / Custom Enterprise Scope" },
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    contactNumber: "",
    serviceSelect: "",
    budget: "2k-5k",
    projectDetails: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) {
      errs.fullName = "Please enter your full name.";
    }
    if (!formData.workEmail.trim()) {
      errs.workEmail = "Please enter your work email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail)) {
      errs.workEmail = "Please enter a valid email address.";
    }
    if (!formData.serviceSelect) {
      errs.serviceSelect = "Please select a capability area.";
    }
    if (!formData.projectDetails.trim()) {
      errs.projectDetails = "Please outline your project scope or goals.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        fullName: "",
        workEmail: "",
        contactNumber: "",
        serviceSelect: "",
        budget: "2k-5k",
        projectDetails: "",
      });
    }, 900);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Ambient Glow & Editorial Header */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[840px] h-[340px] bg-primary-container/10 blur-[120px] rounded-full pointer-events-none -z-10" />

        <section className="max-w-[1320px] mx-auto px-gutter pt-12 pb-8 w-full">
          <div className="flex flex-col gap-space-sm max-w-3xl">
            <div className="inline-flex items-center gap-2 self-start bg-surface-container-low border border-outline-variant/60 px-3.5 py-1.5 rounded-full shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
              <span className="font-label-sm text-label-sm tracking-widest text-on-surface-variant uppercase font-semibold">
                GET IN TOUCH
              </span>
              <span className="text-on-surface-variant/40 text-xs px-0.5">/</span>
              <span className="font-label-sm text-label-sm text-primary-container font-semibold">
                ENGINEERING QUEUE OPEN
              </span>
            </div>

            <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight font-bold mt-2">
              Let&apos;s build something{" "}
              <span className="text-primary-container">remarkable</span> together.
            </h1>

            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed mt-1">
              Tell us about your project, timeline, and goals. We typically respond
              within 4 hours with an actionable technical roadmap and transparent scope breakdown.
            </p>
          </div>
        </section>
      </div>

      {/* Two-Column Master Work Area */}
      <section className="max-w-[1320px] mx-auto px-gutter pb-space-xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          {/* Left Column: Direct Ingestion Channels & Agency Metrics */}
          <div className="lg:col-span-5 flex flex-col gap-space-lg">
            {/* Primary Direct Connect Surface */}
            <div className="bg-surface-container border border-outline-variant p-space-lg rounded-xl shadow-md flex flex-col gap-space-lg">
              <div className="flex items-center justify-between">
                <span className="font-label-md text-label-md text-primary font-semibold tracking-wide uppercase">
                  Direct Channels
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-surface-container-low border border-outline-variant/50 text-primary-container rounded-full font-label-sm text-label-sm font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-container" />
                  Avg. response 2.4 hrs
                </span>
              </div>

              {/* WhatsApp Direct Card */}
              <div className="bg-surface-container-low border border-outline-variant/60 p-space-md rounded-lg flex flex-col gap-space-sm hover:border-primary-container/60 transition-colors">
                <div className="flex items-center gap-space-sm">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary-container shrink-0">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-md text-label-md text-primary font-semibold">
                      WhatsApp Direct
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Instant chat with lead engineers
                    </span>
                  </div>
                </div>

                <p className="font-label-md text-label-md text-primary font-mono tracking-wide pt-1">
                  +1 (800) 967-5480
                </p>

                <a
                  href="https://wa.me/18009675480"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-primary-container text-on-primary-fixed font-label-md text-label-md rounded font-semibold hover:brightness-105 active:scale-[0.99] transition-all shadow-sm"
                >
                  <span>Open Instant Chat</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>

              {/* Email Direct Card */}
              <div className="bg-surface-container-low border border-outline-variant/60 p-space-md rounded-lg flex flex-col gap-space-xs hover:border-primary-container/60 transition-colors">
                <div className="flex items-center gap-space-sm">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-on-surface-variant shrink-0">
                    <Mail className="h-5 w-5 text-primary-container" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-md text-label-md text-primary font-semibold">
                      Direct Inbox
                    </span>
                    <a
                      href="mailto:hello@work4udigital.com"
                      className="font-body-sm text-body-sm text-primary-container hover:underline"
                    >
                      hello@work4udigital.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Operational Logistics */}
              <div className="grid grid-cols-2 gap-space-sm pt-1">
                <div className="bg-surface-container-low border border-outline-variant/60 p-space-md rounded-lg flex flex-col gap-1">
                  <div className="flex items-center gap-1.5 text-on-surface-variant">
                    <Globe className="h-4 w-4 text-primary-container" />
                    <span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">
                      Agency Base
                    </span>
                  </div>
                  <p className="font-label-md text-label-md text-primary font-medium mt-1">
                    Remote-first
                  </p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-tight">
                    Serving clients worldwide
                  </p>
                </div>

                <div className="bg-surface-container-low border border-outline-variant/60 p-space-md rounded-lg flex flex-col gap-1">
                  <div className="flex items-center gap-1.5 text-on-surface-variant">
                    <Clock className="h-4 w-4 text-primary-container" />
                    <span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">
                      Working Hours
                    </span>
                  </div>
                  <p className="font-label-md text-label-md text-primary font-medium mt-1">
                    Mon – Sat
                  </p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-tight">
                    9:00 AM – 7:00 PM EST
                  </p>
                </div>
              </div>

              {/* Zero Pressure Guarantee Box */}
              <div className="bg-surface-container-lowest border border-outline-variant/60 p-space-md rounded-lg flex gap-space-md items-start">
                <ShieldCheck className="h-6 w-6 text-primary-container shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <span className="font-label-md text-label-md text-primary font-semibold">
                    Our Guarantee
                  </span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-normal">
                    No spam. No aggressive multi-tier sales reps. Direct, pragmatic conversations
                    with system architects and product designers who treat your capital like their own.
                  </p>
                </div>
              </div>

              {/* Verified Presence (Social Ecosystem) */}
              <div className="flex items-center justify-between pt-1 border-t border-outline-variant/40">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">
                  Verified Presence
                </span>
                <div className="flex items-center gap-1.5">
                  {/* LinkedIn */}
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="LinkedIn"
                    aria-label="LinkedIn"
                    className="w-9 h-9 rounded-lg bg-surface-container-low border border-outline-variant/60 hover:border-primary-container hover:text-primary-container text-on-surface-variant flex items-center justify-center transition-all"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                    </svg>
                  </a>
                  {/* Twitter / X */}
                  <a
                    href="https://x.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Twitter / X"
                    aria-label="Twitter / X"
                    className="w-9 h-9 rounded-lg bg-surface-container-low border border-outline-variant/60 hover:border-primary-container hover:text-primary-container text-on-surface-variant flex items-center justify-center transition-all"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  {/* GitHub */}
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub"
                    aria-label="GitHub"
                    className="w-9 h-9 rounded-lg bg-surface-container-low border border-outline-variant/60 hover:border-primary-container hover:text-primary-container text-on-surface-variant flex items-center justify-center transition-all"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                    </svg>
                  </a>
                  {/* Instagram */}
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Instagram"
                    aria-label="Instagram"
                    className="w-9 h-9 rounded-lg bg-surface-container-low border border-outline-variant/60 hover:border-primary-container hover:text-primary-container text-on-surface-variant flex items-center justify-center transition-all"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Studio Credential Card */}
            <div className="bg-surface-container-low border border-outline-variant/60 p-space-lg rounded-xl flex flex-col gap-space-md shadow-sm">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">
                  Delivery Velocity
                </span>
                <span className="font-label-md text-label-md text-primary font-mono font-semibold">
                  2024 / 2025
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="bg-surface-container border border-outline-variant/40 p-space-sm rounded">
                  <div className="font-headline-sm text-headline-sm text-primary font-bold">
                    99.4%
                  </div>
                  <div className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">
                    On-Time SLA
                  </div>
                </div>

                <div className="bg-surface-container border border-outline-variant/40 p-space-sm rounded">
                  <div className="font-headline-sm text-headline-sm text-primary-container font-bold">
                    &lt; 4 hrs
                  </div>
                  <div className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">
                    Initial Scope
                  </div>
                </div>

                <div className="bg-surface-container border border-outline-variant/40 p-space-sm rounded">
                  <div className="font-headline-sm text-headline-sm text-primary font-bold">
                    140+
                  </div>
                  <div className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">
                    Launches
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Project Inquiry Intake Engine */}
          <div className="lg:col-span-7">
            <form
              id="project-intake-form"
              onSubmit={handleSubmit}
              className="bg-surface-container border border-outline-variant p-space-lg lg:p-space-xl rounded-xl shadow-xl flex flex-col gap-space-lg"
            >
              <div className="flex items-center justify-between pb-1 border-b border-outline-variant/40">
                <div className="flex flex-col">
                  <h2 className="font-headline-sm text-headline-sm text-primary font-bold">
                    Project Inquiry Intake
                  </h2>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Fill in the fundamentals. We architect the solution.
                  </p>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1.5 font-label-sm text-label-sm text-primary-container bg-surface-container-low border border-outline-variant/50 px-3 py-1 rounded-full font-medium">
                  <Lock className="h-3.5 w-3.5" />
                  Confidential
                </span>
              </div>

              {/* Row 1: Full Name & Work Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                <div className="flex flex-col gap-space-xs">
                  <label
                    htmlFor="fullName"
                    className="font-label-md text-label-md text-on-surface font-semibold flex items-center justify-between"
                  >
                    Full Name
                    <span className="text-primary-container font-label-sm text-label-sm">*</span>
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Jane Doe"
                    className={`w-full bg-surface-container-lowest border ${
                      errors.fullName ? "border-red-500" : "border-outline-variant/60"
                    } text-primary placeholder-on-surface-variant/50 font-body-md text-body-md px-space-md py-3 rounded-lg transition-all outline-none focus:border-primary-container focus:bg-surface-container-high`}
                  />
                  {errors.fullName && (
                    <span className="text-xs text-red-500">{errors.fullName}</span>
                  )}
                </div>

                <div className="flex flex-col gap-space-xs">
                  <label
                    htmlFor="workEmail"
                    className="font-label-md text-label-md text-on-surface font-semibold flex items-center justify-between"
                  >
                    Work Email
                    <span className="text-primary-container font-label-sm text-label-sm">*</span>
                  </label>
                  <input
                    id="workEmail"
                    name="workEmail"
                    type="email"
                    required
                    value={formData.workEmail}
                    onChange={handleInputChange}
                    placeholder="jane@enterprise.com"
                    className={`w-full bg-surface-container-lowest border ${
                      errors.workEmail ? "border-red-500" : "border-outline-variant/60"
                    } text-primary placeholder-on-surface-variant/50 font-body-md text-body-md px-space-md py-3 rounded-lg transition-all outline-none focus:border-primary-container focus:bg-surface-container-high`}
                  />
                  {errors.workEmail && (
                    <span className="text-xs text-red-500">{errors.workEmail}</span>
                  )}
                </div>
              </div>

              {/* Row 2: Phone / WhatsApp & Service Required Dropdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                <div className="flex flex-col gap-space-xs">
                  <label
                    htmlFor="contactNumber"
                    className="font-label-md text-label-md text-on-surface font-semibold flex items-center justify-between"
                  >
                    Phone or WhatsApp
                    <span className="font-label-sm text-label-sm text-on-surface-variant font-normal">
                      Optional
                    </span>
                  </label>
                  <input
                    id="contactNumber"
                    name="contactNumber"
                    type="tel"
                    value={formData.contactNumber}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-surface-container-lowest border border-outline-variant/60 text-primary placeholder-on-surface-variant/50 font-body-md text-body-md px-space-md py-3 rounded-lg transition-all outline-none focus:border-primary-container focus:bg-surface-container-high"
                  />
                </div>

                <div className="flex flex-col gap-space-xs">
                  <label
                    htmlFor="serviceSelect"
                    className="font-label-md text-label-md text-on-surface font-semibold flex items-center justify-between"
                  >
                    Primary Capability Needed
                    <span className="text-primary-container font-label-sm text-label-sm">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="serviceSelect"
                      name="serviceSelect"
                      required
                      value={formData.serviceSelect}
                      onChange={handleInputChange}
                      className={`w-full bg-surface-container-lowest border ${
                        errors.serviceSelect ? "border-red-500" : "border-outline-variant/60"
                      } text-primary font-body-md text-body-md px-space-md py-3 rounded-lg appearance-none cursor-pointer outline-none focus:border-primary-container focus:bg-surface-container-high pr-10`}
                    >
                      <option value="" disabled className="text-on-surface-variant">
                        Select an engagement area...
                      </option>
                      {SERVICE_OPTIONS.map((opt) => (
                        <option
                          key={opt.value}
                          value={opt.value}
                          className="bg-surface-container text-primary"
                        >
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="h-5 w-5 absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none" />
                  </div>
                  {errors.serviceSelect && (
                    <span className="text-xs text-red-500">{errors.serviceSelect}</span>
                  )}
                </div>
              </div>

              {/* Row 3: Budget Range Pill Selectors */}
              <div className="flex flex-col gap-space-xs">
                <label className="font-label-md text-label-md text-on-surface font-semibold flex items-center justify-between">
                  Approximate Investment Range
                  <span className="font-label-sm text-label-sm text-on-surface-variant font-normal">
                    USD
                  </span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 pt-1">
                  {BUDGET_OPTIONS.map((b) => (
                    <label key={b.value} className="cursor-pointer">
                      <input
                        type="radio"
                        name="budget"
                        value={b.value}
                        checked={formData.budget === b.value}
                        onChange={handleInputChange}
                        className="peer sr-only"
                      />
                      <div className="h-11 px-2.5 rounded-lg border border-outline-variant/60 bg-surface-container-lowest text-on-surface-variant peer-checked:bg-primary-container peer-checked:text-on-primary-fixed peer-checked:border-primary-container font-label-md text-label-md font-semibold flex items-center justify-center text-center transition-all hover:border-primary-container/60">
                        {b.label}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Row 4: Project Scope Textarea */}
              <div className="flex flex-col gap-space-xs">
                <label
                  htmlFor="projectDetails"
                  className="font-label-md text-label-md text-on-surface font-semibold flex items-center justify-between"
                >
                  Project Scope &amp; Target Launch
                  <span className="text-primary-container font-label-sm text-label-sm">*</span>
                </label>
                <textarea
                  id="projectDetails"
                  name="projectDetails"
                  rows={4}
                  required
                  value={formData.projectDetails}
                  onChange={handleInputChange}
                  placeholder="Tell us about your business goals, current challenges, technical stack expectations, and target launch date..."
                  className={`w-full bg-surface-container-lowest border ${
                    errors.projectDetails ? "border-red-500" : "border-outline-variant/60"
                  } text-primary placeholder-on-surface-variant/50 font-body-md text-body-md p-space-md rounded-lg transition-all outline-none resize-y focus:border-primary-container focus:bg-surface-container-high`}
                />
                {errors.projectDetails && (
                  <span className="text-xs text-red-500">{errors.projectDetails}</span>
                )}
              </div>

              {/* Submit Section & Security Reassurance */}
              <div className="flex flex-col gap-space-md pt-1">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-space-lg rounded-lg bg-primary-container text-on-primary-fixed font-headline-sm text-headline-sm font-semibold tracking-tight hover:brightness-105 active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-lg ${
                    isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                  }`}
                >
                  <span>
                    {isSubmitting ? "Transmitting Scope..." : "Send Inquiry & Request Roadmap"}
                  </span>
                  <ArrowRight className="h-5 w-5" />
                </button>

                <div className="flex items-center justify-center gap-1.5 text-on-surface-variant text-center">
                  <ShieldCheck className="h-4 w-4 text-primary-container shrink-0" />
                  <span className="font-body-sm text-body-sm">
                    Mutual NDA signed upon request. 100% intellectual property confidentiality guaranteed.
                  </span>
                </div>
              </div>

              {/* Interactive Inline Notification Box */}
              {isSubmitted && (
                <div className="bg-surface-container-low border border-primary-container/40 p-space-md rounded-lg flex items-center gap-space-md animate-in fade-in duration-300">
                  <CheckCircle2 className="h-6 w-6 text-primary-container shrink-0" />
                  <div className="flex flex-col">
                    <span className="font-label-md text-label-md text-primary font-semibold">
                      Inquiry Dispatch Logged
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Our team has been notified. You will receive an acknowledgment receipt within minutes.
                    </span>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Section 3: "What Happens Next" 3-Step Execution Sequence */}
      <section className="max-w-[1320px] mx-auto px-gutter pb-space-xl w-full">
        <div className="bg-surface-container-low border border-outline-variant p-space-lg lg:p-space-xl rounded-xl flex flex-col gap-space-xl shadow-md">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm">
            <div className="flex flex-col gap-1">
              <span className="font-label-sm text-label-sm text-primary-container tracking-wider uppercase font-semibold">
                THE WORK4U PLAYBOOK
              </span>
              <h3 className="font-headline-md text-headline-md text-primary font-bold">
                What happens next?
              </h3>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              Our pipeline is engineered for zero friction. No waiting weeks for an ambiguous statement of work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
            {/* Step 1 */}
            <div className="bg-surface-container border border-outline-variant/60 p-space-lg rounded-xl flex flex-col gap-space-md justify-between group hover:border-primary-container/60 transition-colors">
              <div className="flex flex-col gap-space-sm">
                <div className="flex items-center justify-between">
                  <span className="font-headline-md text-headline-md text-primary-container font-mono font-bold">
                    01
                  </span>
                  <span className="font-label-sm text-label-sm bg-surface-container-low border border-outline-variant/40 px-2 py-0.5 rounded text-on-surface-variant font-medium">
                    Within 4 Hours
                  </span>
                </div>
                <h4 className="font-title-md text-title-md text-primary font-semibold">
                  Scope Assessment
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  A senior solutions engineer reviews your architecture, business goals, and current infrastructure to formulate an initial high-fidelity scope estimate.
                </p>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-outline-variant/40 text-primary font-label-sm text-label-sm">
                <Search className="h-4 w-4 text-primary-container" />
                <span>Technical Feasibility Audit</span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-surface-container border border-outline-variant/60 p-space-lg rounded-xl flex flex-col gap-space-md justify-between group hover:border-primary-container/60 transition-colors">
              <div className="flex flex-col gap-space-sm">
                <div className="flex items-center justify-between">
                  <span className="font-headline-md text-headline-md text-primary-container font-mono font-bold">
                    02
                  </span>
                  <span className="font-label-sm text-label-sm bg-surface-container-low border border-outline-variant/40 px-2 py-0.5 rounded text-on-surface-variant font-medium">
                    Sync / Async
                  </span>
                </div>
                <h4 className="font-title-md text-title-md text-primary font-semibold">
                  20-Min Discovery
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  A high-yield conversation focused purely on technical constraints, conversion benchmarks, and milestone checkpoints. (Or handled asynchronously via WhatsApp if you prefer).
                </p>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-outline-variant/40 text-primary font-label-sm text-label-sm">
                <Headphones className="h-4 w-4 text-primary-container" />
                <span>Zero High-Pressure Sales</span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-surface-container border border-outline-variant/60 p-space-lg rounded-xl flex flex-col gap-space-md justify-between group hover:border-primary-container/60 transition-colors">
              <div className="flex flex-col gap-space-sm">
                <div className="flex items-center justify-between">
                  <span className="font-headline-md text-headline-md text-primary-container font-mono font-bold">
                    03
                  </span>
                  <span className="font-label-sm text-label-sm bg-surface-container-low border border-outline-variant/40 px-2 py-0.5 rounded text-on-surface-variant font-medium">
                    Within 24 Hours
                  </span>
                </div>
                <h4 className="font-title-md text-title-md text-primary font-semibold">
                  Fixed-Scope Proposal
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  You receive a transparent, itemized proposal detailing deliverables, timeline stages, fixed milestone investments, and launch criteria.
                </p>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-outline-variant/40 text-primary font-label-sm text-label-sm">
                <Rocket className="h-4 w-4 text-primary-container" />
                <span>Ready for Immediate Sprint 1</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Quick Strip */}
      <section className="max-w-[1320px] mx-auto px-gutter pb-space-xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
          <div className="bg-surface-container border border-outline-variant/60 p-space-lg rounded-xl flex items-start gap-space-md shadow-sm">
            <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex-shrink-0 flex items-center justify-center text-primary-container">
              <Zap className="h-6 w-6" />
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="font-title-md text-title-md text-primary font-semibold">
                Zero Bureaucracy
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                You collaborate directly with our designers and full-stack software architects via dedicated Slack or WhatsApp channels. No middlemen or diluted briefs.
              </p>
            </div>
          </div>

          <div className="bg-surface-container border border-outline-variant/60 p-space-lg rounded-xl flex items-start gap-space-md shadow-sm">
            <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex-shrink-0 flex items-center justify-center text-primary-container">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="font-title-md text-title-md text-primary font-semibold">
                Institutional Grade NDA
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Every concept, design draft, database schema, and line of code remains 100% your proprietary business asset with complete intellectual assignment on delivery.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
