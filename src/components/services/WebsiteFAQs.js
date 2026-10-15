"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function WebsiteFAQs({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="mx-auto max-w-5xl px-gutter py-16 md:py-20">
      <div className="max-w-2xl">
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[color:var(--primary-container)]">
          Frequently asked questions
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[color:var(--primary)] md:text-4xl">
          Website Development FAQs
        </h2>
      </div>

      <div className="mt-10 space-y-3">
        {items.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={item.question}
              className="overflow-hidden rounded-[22px] border border-[color:var(--outline-variant)] bg-[color:var(--surface-container)]"
            >
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${index}`}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                <span className="text-base font-medium text-[color:var(--primary)]">{item.question}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-[color:var(--primary-container)] transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div id={`faq-panel-${index}`} className="border-t border-[color:var(--outline-variant)] px-5 py-4">
                  <p className="text-sm leading-relaxed text-[color:var(--on-surface-variant)]">{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
