"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function PricingFAQ({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="mx-auto max-w-4xl px-gutter pb-16">
      <div className="mb-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-on-surface-variant">FAQ</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary">Pricing questions</h2>
      </div>

      <div className="space-y-3">
        {items.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={item.question} className="overflow-hidden rounded-xl border border-outline-variant bg-surface-container shadow-sm">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                aria-expanded={isOpen}
              >
                <span className="text-base font-semibold text-primary">{item.question}</span>
                <ChevronDown className={`h-5 w-5 shrink-0 text-on-surface-variant transition-transform ${isOpen ? "rotate-180" : ""}`} />
              </button>
              {isOpen && (
                <div className="border-t border-outline-variant/70 px-5 py-4 text-sm leading-7 text-on-surface-variant">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
