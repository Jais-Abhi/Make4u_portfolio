"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function WebsiteFAQs({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="mx-auto max-w-5xl px-gutter py-12 md:py-20">
      <div className="max-w-2xl">
        <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[color:var(--primary-container)] sm:text-[10px]">
          Frequently asked questions
        </p>
        <h2 className="mt-4 text-2xl font-semibold tracking-tight text-[color:var(--primary)] sm:text-3xl md:text-4xl">
          Website Development FAQs
        </h2>
      </div>

      <div className="mt-8 space-y-3 md:mt-10">
        {items.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={item.question}
              className="overflow-hidden rounded-[22px] border border-[color:var(--outline-variant)] bg-[color:var(--surface-container)]"
            >
              <button
                type="button"
                className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left sm:px-5 sm:py-4"
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${index}`}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                <span className="text-sm font-medium text-[color:var(--primary)] sm:text-base">{item.question}</span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-[color:var(--primary-container)] transition-transform duration-200 sm:h-5 sm:w-5 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div id={`faq-panel-${index}`} className="border-t border-[color:var(--outline-variant)] px-4 py-3 sm:px-5 sm:py-4">
                  <p className="text-xs leading-relaxed text-[color:var(--on-surface-variant)] sm:text-sm">{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
