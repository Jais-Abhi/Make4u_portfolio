import Link from "next/link";
import { Check, ShieldCheck, Sparkles } from "lucide-react";

import { WebsiteHero } from "@/components/services/WebsiteHero";
import { WebsiteTypes } from "@/components/services/WebsiteTypes";
import { WebsiteFeatures } from "@/components/services/WebsiteFeatures";
import { WebsitePricing } from "@/components/services/WebsitePricing";
import { WebsiteComparison } from "@/components/services/WebsiteComparison";
import { DevelopmentProcess } from "@/components/services/DevelopmentProcess";
import { WebsiteFAQs } from "@/components/services/WebsiteFAQs";
import {
  additionalCosts,
  websiteEssentials,
  websiteFeatures,
  websitePackages,
  comparisonGroups,
  processSteps,
  faqs,
  websiteTypes,
} from "@/components/services/website-data";

export const metadata = {
  title: "Website Development Services | MAKE4U Digital Solutions",
  description:
    "Explore website development packages from MAKE4U Digital Solutions, from basic business websites to custom web solutions. Compare features and request a quote.",
};

export default function WebsiteDevelopmentPage() {
  return (
    <div className="bg-[color:var(--background)] text-[color:var(--on-surface)]">
      <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-gutter pt-8">
        <div className="inline-flex flex-wrap items-center gap-2 text-sm text-[color:var(--on-surface-variant)]">
          <Link href="/" className="transition-colors hover:text-[color:var(--primary)]">
            Home
          </Link>
          <span>/</span>
          <Link href="/#services" className="transition-colors hover:text-[color:var(--primary)]">
            Services
          </Link>
          <span>/</span>
          <span className="text-[color:var(--primary)]">Website Development</span>
        </div>
      </nav>

      <WebsiteHero />
      <WebsiteFeatures items={websiteFeatures} />
      <WebsitePricing packages={websitePackages} />
      <WebsiteTypes items={websiteTypes} />
      <WebsiteComparison groups={comparisonGroups} />

      <section className="mx-auto max-w-7xl px-gutter py-16 md:py-20">
        <div className="max-w-2xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#2d4d12] dark:text-[#C8F169]">
            Every website starts with the essentials
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[color:var(--primary)] md:text-4xl">
            Every Website Starts with the Essentials
          </h2>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {websiteEssentials.map((item) => (
            <div key={item} className="flex items-start gap-3 rounded-[20px] border border-[color:var(--outline-variant)] bg-[color:var(--surface-container)] p-4">
              <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#2d4d12]/12 text-[#2d4d12] dark:bg-[#C8F169]/12 dark:text-[#C8F169]">
                <Check className="h-3.5 w-3.5 stroke-[3]" />
              </span>
              <span className="text-sm leading-relaxed text-[color:var(--on-surface)]">{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-[color:var(--outline-variant)] bg-[color:var(--surface-container-low)]/80">
        <div className="mx-auto max-w-7xl px-gutter py-16 md:py-20">
          <div className="max-w-2xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#2d4d12] dark:text-[#C8F169]">
              No hidden surprises
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[color:var(--primary)] md:text-4xl">
              Clear, Transparent Pricing
            </h2>
          </div>

          <div className="mt-10 grid min-w-0 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {additionalCosts.map((item) => (
              <div key={item.title} className="min-w-0 rounded-[24px] border border-[color:var(--outline-variant)] bg-[color:var(--surface-container)] p-5">
                <div className="mb-4 flex min-w-0 items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#2d4d12]/12 text-[#2d4d12] dark:bg-[#C8F169]/12 dark:text-[#C8F169]">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <h3 className="min-w-0 flex-1 text-base font-semibold leading-snug text-[color:var(--primary)] break-words md:text-lg">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-0 text-sm leading-relaxed text-[color:var(--on-surface-variant)] break-words">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DevelopmentProcess steps={processSteps} />
      <WebsiteFAQs items={faqs} />

      <section className="mx-auto max-w-7xl px-gutter pb-20 pt-8 md:pb-24">
        <div className="rounded-[32px] border border-[color:var(--outline-variant)] bg-[color:var(--surface-container)] p-8 md:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#2d4d12] dark:text-[#C8F169]">
                Ready to build your business website?
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[color:var(--primary)] md:text-4xl">
                Ready to Build Your Business Website?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[color:var(--on-surface-variant)]">
                Tell us about your business, and we’ll help you choose the right website package for your goals and budget.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact?package=website-development"
                className="inline-flex items-center justify-center rounded-lg bg-[#2d4d12] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(45,77,18,0.18)] transition-transform duration-200 hover:-translate-y-0.5 dark:bg-[#C8F169] dark:text-[#151f00] dark:shadow-[0_12px_24px_rgba(200,241,105,0.18)]"
              >
                Get a Free Quote
              </Link>

              <a
                href="https://wa.me/15550192834"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-[color:var(--outline-variant)] bg-[color:var(--surface-container-low)] px-5 py-3 text-sm font-semibold text-[color:var(--primary)] transition-colors hover:border-[#2d4d12] hover:text-[#2d4d12] dark:hover:border-[#C8F169] dark:hover:text-[#C8F169]"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="mt-8 flex items-center gap-2 text-sm text-[color:var(--on-surface-variant)]">
            <Sparkles className="h-4 w-4 text-[#2d4d12] dark:text-[#C8F169]" />
            <span>Click. Connect. Convert.</span>
          </div>
        </div>
      </section>
    </div>
  );
}
