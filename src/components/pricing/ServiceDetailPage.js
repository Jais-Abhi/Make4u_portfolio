import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { PricingCard } from "@/components/pricing/PricingCard";
import { PricingFAQ } from "@/components/pricing/PricingFAQ";
import { pricingServices } from "@/data/pricing";

export function ServiceDetailPage({ service }) {
  const relatedServices = pricingServices.filter((item) => item.id !== service.id).slice(0, 3);

  return (
    <main className="w-full bg-background text-on-surface antialiased">
      <section className="mx-auto max-w-7xl px-gutter pt-20 pb-10">
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 rounded-full border border-outline-variant bg-surface-container px-4 py-2 text-sm font-medium text-on-surface-variant hover:border-primary-container hover:text-primary-container"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to pricing
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-on-surface-variant">{service.shortLabel}</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-primary sm:text-5xl">
              {service.heroTitle}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-on-surface-variant">{service.description}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={`/contact?service=${service.id}`}
                className="inline-flex items-center justify-center rounded-lg bg-primary-container px-5 py-3 text-sm font-semibold text-on-primary-fixed"
              >
                Get a custom quote
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-lg border border-outline-variant bg-surface-container-lowest px-5 py-3 text-sm font-semibold text-primary"
              >
                View pricing plans
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-outline-variant bg-surface-container p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-primary">Why businesses choose this service</h2>
            <ul className="mt-5 space-y-4 text-sm text-on-surface-variant">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary-container" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-gutter pb-12">
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-on-surface-variant">Deliverables</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary">Key features and scope</h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {service.plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} service={service} billingLabel={service.billingLabel} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-gutter pb-12">
        <div className="rounded-2xl border border-outline-variant bg-surface-container p-6 shadow-sm">
          <h2 className="text-2xl font-bold tracking-tight text-primary">Billing model</h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-on-surface-variant">
            {service.billingLabel}. {service.plans[0].disclaimer}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-gutter pb-12">
        <div className="rounded-2xl border border-outline-variant bg-surface-container p-6 shadow-sm">
          <h2 className="text-2xl font-bold tracking-tight text-primary">FAQs</h2>
          <div className="mt-6">
            <PricingFAQ items={service.faq} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-gutter pb-20">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-on-surface-variant">Related services</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary">Explore more options</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {relatedServices.map((related) => (
            <Link
              key={related.id}
              href={`/services/${related.id}`}
              className="group rounded-2xl border border-outline-variant bg-surface-container p-5 shadow-sm transition hover:border-primary-container hover:bg-surface-container-high"
            >
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-on-surface-variant">{related.shortLabel}</p>
                <ArrowRight className="h-4 w-4 text-primary-container transition group-hover:translate-x-1" />
              </div>
              <h3 className="mt-3 text-xl font-semibold text-primary">{related.name}</h3>
              <p className="mt-2 text-sm leading-6 text-on-surface-variant">{related.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-gutter pb-20">
        <div className="rounded-2xl border border-outline-variant bg-surface-container p-8 shadow-sm">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-on-surface-variant">Need help choosing?</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary">Let’s plan the right fit for your business.</h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href={`/contact?service=${service.id}`}
                className="inline-flex items-center justify-center rounded-lg bg-primary-container px-5 py-3 text-sm font-semibold text-on-primary-fixed"
              >
                Choose this plan
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-outline-variant bg-surface-container-lowest px-5 py-3 text-sm font-semibold text-primary"
              >
                Get a custom quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
