"use client";

import * as React from "react";
import {
  Mail,
  MessageSquare,
  ArrowUpRight,
  BadgeCheck,
  ChevronDown,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";

export function ContactPreview() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [error, setError] = React.useState(null);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (error) setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setError(null);
    setSubmitted(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          details: formData.description,
        }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok || !data?.success) {
        throw new Error(data?.error || "Failed to submit inquiry. Please try again.");
      }

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        description: "",
      });
    } catch (err) {
      setError(err.message || "An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-20 md:py-28 px-gutter bg-surface-container-low border-t border-outline-variant transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
          {/* Contact Context & Direct Links */}
          <div className="lg:col-span-5 flex flex-col gap-space-lg">
            <div className="flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container border border-outline-variant mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
                <span className="font-label-sm text-label-sm text-primary-container uppercase tracking-widest font-semibold">
                  GET IN TOUCH
                </span>
              </div>
              <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary font-semibold tracking-tight">
                Have a project in mind?
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-4 leading-relaxed">
                Tell us what your business needs, and let&apos;s discuss how we
                can help.
              </p>
            </div>

            {/* Direct Channels Box */}
            <div className="flex flex-col gap-space-md p-space-lg rounded-lg bg-surface-container border border-outline-variant shadow-sm">
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">
                Direct Communication Channels
              </span>

              <a
                href="mailto:make4udigitalsolutions@gmail.com"
                className="flex items-center justify-between p-3 rounded bg-surface-container-high border border-outline-variant hover:border-primary-container transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary-container" />
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      Email Inquiry
                    </span>
                    <span className="font-body-sm text-body-sm text-primary font-medium">
                      make4udigitalsolutions@gmail.com
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-outline group-hover:text-primary-container transition-colors" />
              </a>

              <a
                href="https://wa.me/917390813440?text=Hello%20Make4U%20Digital%20Solutions%2C%20I%20need%20help%20with%20my%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded bg-surface-container-high border border-outline-variant hover:border-primary-container transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <MessageSquare className="h-5 w-5 text-primary-container" />
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      WhatsApp
                    </span>
                    <span className="font-body-sm text-body-sm text-primary font-medium">
                      Chat with our team
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-outline group-hover:text-primary-container transition-colors" />
              </a>
            </div>

            <div className="p-4 rounded-lg bg-surface-container/50 border border-outline-variant flex items-center gap-3">
              <BadgeCheck className="h-5 w-5 text-primary-container shrink-0" />
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Initial consultations are free with transparent scoped proposals
                delivered within 24 hours.
              </p>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-space-lg md:p-space-xl rounded-lg bg-surface-container border border-outline-variant shadow-lg">
              <form
                id="project-inquiry-form"
                onSubmit={handleSubmit}
                className="flex flex-col gap-space-md"
              >
                {/* Row 1: Full Name & Email Address */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                  {/* Full Name */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="contact-name"
                      className="font-label-md text-label-md text-primary font-medium"
                    >
                      Full Name{" "}
                      <span className="text-primary-container">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Alex Mercer"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="w-full h-12 px-4 rounded bg-surface-container-high border border-outline-variant text-primary font-body-sm text-body-sm placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all"
                    />
                  </div>

                  {/* Email Address */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="contact-email"
                      className="font-label-md text-label-md text-primary font-medium"
                    >
                      Email Address{" "}
                      <span className="text-primary-container">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="w-full h-12 px-4 rounded bg-surface-container-high border border-outline-variant text-primary font-body-sm text-body-sm placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all"
                    />
                  </div>
                </div>

                {/* Row 2: Phone / Contact Number & Service Required */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                  {/* Phone / Contact Number */}
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="contact-phone"
                        className="font-label-md text-label-md text-primary font-medium"
                      >
                        Phone / WhatsApp
                      </label>
                      <span className="font-label-sm text-label-sm text-on-surface-variant font-normal">
                        Optional
                      </span>
                    </div>
                    <input
                      id="contact-phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="w-full h-12 px-4 rounded bg-surface-container-high border border-outline-variant text-primary font-body-sm text-body-sm placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all"
                    />
                  </div>

                  {/* Service Required */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="contact-service"
                      className="font-label-md text-label-md text-primary font-medium"
                    >
                      Service Required{" "}
                      <span className="text-primary-container">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="contact-service"
                        required
                        value={formData.service}
                        onChange={(e) => handleInputChange("service", e.target.value)}
                        className="w-full h-12 px-4 rounded bg-surface-container-high border border-outline-variant text-primary font-body-sm text-body-sm appearance-none focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all"
                      >
                        <option
                          value=""
                          disabled
                          className="bg-surface-container text-on-surface-variant"
                        >
                          Select a service discipline...
                        </option>
                        <option
                          value="web-app"
                          className="bg-surface-container text-primary"
                        >
                          Website &amp; App Development
                        </option>
                        <option
                          value="app-development"
                          className="bg-surface-container text-primary"
                        >
                          App Development
                        </option>
                        <option
                          value="seo-growth"
                          className="bg-surface-container text-primary"
                        >
                          SEO &amp; Digital Growth
                        </option>
                        <option
                          value="design-video"
                          className="bg-surface-container text-primary"
                        >
                          Graphic Design &amp; Video Editing
                        </option>
                        <option
                          value="photo-video"
                          className="bg-surface-container text-primary"
                        >
                          Photography &amp; Videography
                        </option>
                        <option
                          value="ai-automation"
                          className="bg-surface-container text-primary"
                        >
                          AI &amp; Business Automation
                        </option>
                        <option
                          value="subscription"
                          className="bg-surface-container text-primary"
                        >
                          Monthly Subscription Plan
                        </option>
                        <option
                          value="custom"
                          className="bg-surface-container text-primary"
                        >
                          Other / Custom Enterprise Scope
                        </option>
                      </select>
                      <ChevronDown className="absolute right-4 top-3.5 pointer-events-none text-outline h-5 w-5" />
                    </div>
                  </div>
                </div>

                {/* Short Project Description */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contact-desc"
                    className="font-label-md text-label-md text-primary font-medium"
                  >
                    Short Project Description{" "}
                    <span className="text-primary-container">*</span>
                  </label>
                  <textarea
                    id="contact-desc"
                    rows={4}
                    required
                    placeholder="Briefly outline your goals, timeline, or current bottlenecks..."
                    value={formData.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                    className="w-full p-4 rounded bg-surface-container-high border border-outline-variant text-primary font-body-sm text-body-sm placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container resize-none transition-all"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-primary-container text-on-primary-fixed font-label-lg text-label-lg font-semibold hover:brightness-105 active:scale-95 transition-all shadow-md disabled:opacity-75 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>Sending inquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Let&apos;s Talk</span>
                        <ArrowUpRight className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </div>

                {/* Success Notification Feedback */}
                {submitted && (
                  <div
                    id="form-feedback"
                    className="p-4 rounded bg-surface-container-high border border-primary-container/60 flex items-center gap-3 animate-in fade-in"
                  >
                    <CheckCircle2 className="h-5 w-5 text-primary-container shrink-0" />
                    <p className="font-body-sm text-body-sm text-primary">
                      Thank you. Your message has been received and our
                      technical lead will follow up shortly.
                    </p>
                  </div>
                )}

                {/* Error Notification Feedback */}
                {error && (
                  <div
                    className="p-4 rounded bg-surface-container-high border border-red-500/60 flex items-center gap-3 animate-in fade-in"
                  >
                    <AlertCircle className="h-5 w-5 text-red-500 shrink-0" />
                    <p className="font-body-sm text-body-sm text-red-400">
                      {error}
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
