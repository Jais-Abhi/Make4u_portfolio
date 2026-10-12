"use client";

import * as React from "react";
import {
  Plus,
  Minus,
  Sparkles,
  ShieldCheck,
  Zap,
  ArrowUpRight,
  Headphones,
} from "lucide-react";

export function WhyChooseMake4U() {
  const [openIndex, setOpenIndex] = React.useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const faqs = [
    {
      question: "What makes Make4U different from other agencies?",
      answer:
        "We focus on practical business results rather than confusing technical jargon. From day one, you get transparent communication, predictable timelines, direct collaboration with our dedicated developers and creators, and solutions custom-tailored to your real-world business needs—without agency overhead or surprise costs.",
    },
    {
      question: "What services do you offer?",
      answer:
        "Make4U delivers comprehensive digital solutions: custom website and web app development, search engine optimization (SEO), creative digital content (graphic design, video editing, branding), photography/videography, and smart workflow automation (WhatsApp routing, lead funnels, and CRM integration).",
    },
    {
      question: "Can you build a website tailored to my business?",
      answer:
        "Yes, 100%. We never rely on rigid, cookie-cutter templates. Every website is engineered from the ground up to reflect your unique brand identity, engage your exact target market, perform lightning-fast on mobile devices, and effectively convert visitors into inquiries and paying customers.",
    },
    {
      question: "Do you provide ongoing website maintenance and support?",
      answer:
        "Absolutely. Launching your website is just the beginning. We provide proactive maintenance plans that include high-speed hosting management, continuous security monitoring, regular data backups, software updates, and rapid content edits so you never have to worry about downtime or technical maintenance.",
    },
    {
      question: "How do your pricing and subscription plans work?",
      answer:
        "We prioritize full cost transparency. For project-based work, you receive a clear, itemized proposal with upfront pricing and zero hidden fees. For ongoing support and iterative enhancements, we offer predictable, flexible monthly plans designed to scale affordably with your business.",
    },
    {
      question: "How can Make4U help my business grow online?",
      answer:
        "We build a cohesive digital ecosystem for your brand: high-converting web experiences that rank prominently in search results, eye-catching visual content that commands attention on social channels, and automated customer routing tools so your business never misses an inbound lead.",
    },
  ];

  const valuePillars = [
    {
      icon: ShieldCheck,
      title: "Reliable & Transparent",
      desc: "Clear upfront quotes, fixed milestones, and honest guidance.",
    },
    {
      icon: Zap,
      title: "High Performance",
      desc: "Fast, modern websites engineered to convert visitors into clients.",
    },
    {
      icon: Headphones,
      title: "Ongoing Support",
      desc: "Continuous technical care and quick turnaround assistance.",
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="w-full py-20 md:py-28 px-4 sm:px-6 lg:px-8 xl:px-12 bg-background border-t border-outline-variant transition-colors duration-200"
    >
      <div className="max-w-7xl xl:max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading, Context & Trust Highlights */}
          <div className="lg:col-span-5 flex flex-col items-start lg:sticky lg:top-28">
            {/* Blue-accented badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400"></span>
              <span className="font-label-sm text-label-sm text-blue-600 dark:text-blue-400 uppercase tracking-widest font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                WHY CHOOSE MAKE4U
              </span>
            </div>

            <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary font-bold tracking-tight">
              A reliable digital partner built for your growth
              <span className="text-blue-600 dark:text-blue-400">.</span>
            </h2>

            <p className="font-body-lg text-body-lg text-on-surface-variant mt-4 leading-relaxed max-w-xl">
              We make the digital transformation process simple, clear, and
              focused on measurable outcomes. Here is what you can expect when
              partnering with Make4U Digital Solutions.
            </p>

            {/* Value Highlights Cards */}
            <div className="w-full mt-8 flex flex-col gap-3.5">
              {valuePillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 p-3.5 rounded-xl bg-surface-container-low border border-outline-variant/80 transition-all duration-200 hover:border-blue-500/30"
                  >
                    <div className="p-2 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-primary">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-on-surface-variant mt-0.5 leading-normal">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Contact CTA Card */}
            <div className="mt-8 p-5 rounded-2xl bg-surface-container border border-outline-variant w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
              <div>
                <p className="text-sm font-semibold text-primary">
                  Have a specific question?
                </p>
                <p className="text-xs text-on-surface-variant mt-0.5">
                  Talk directly with our solutions team.
                </p>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold tracking-wide transition-colors shrink-0 shadow-sm group"
              >
                Get in Touch
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Accordion FAQs */}
          <div className="lg:col-span-7 w-full flex flex-col gap-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "bg-surface-container border-blue-500/40 shadow-md ring-1 ring-blue-500/20"
                      : "bg-surface-container-low/70 border-outline-variant hover:border-blue-500/30 hover:bg-surface-container-low"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    id={`faq-question-${index}`}
                    className="w-full py-5 px-5 sm:px-6 flex items-center justify-between gap-4 text-left cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  >
                    <span
                      className={`text-base sm:text-lg font-semibold tracking-tight transition-colors duration-200 ${
                        isOpen
                          ? "text-blue-600 dark:text-blue-400"
                          : "text-primary group-hover:text-blue-600 dark:group-hover:text-blue-400"
                      }`}
                    >
                      {faq.question}
                    </span>

                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen
                          ? "bg-blue-600 text-white rotate-0"
                          : "bg-surface-container border border-outline-variant text-on-surface-variant group-hover:border-blue-500/40 group-hover:text-blue-600 dark:group-hover:text-blue-400"
                      }`}
                      aria-hidden="true"
                    >
                      {isOpen ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </span>
                  </button>

                  <div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-outline-variant/40">
                        <p className="font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
