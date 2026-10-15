import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";

export function WebsitePricing({ packages }) {
  return (
    <section id="pricing" className="mx-auto max-w-7xl px-gutter py-16 md:py-20">
      <div className="max-w-2xl">
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[color:var(--primary-container)]">
          Straightforward pricing
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[color:var(--primary)] md:text-4xl">
          Choose the Right Website Package
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[color:var(--on-surface-variant)]">
          Whether you need a simple online presence or a custom website, choose a package that matches your business goals.
        </p>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {packages.map((plan) => (
          <div
            key={plan.id}
            className={`rounded-[30px] border p-6 transition-all duration-200 ${
              plan.featured
                ? "border-[color:var(--primary-container)] bg-[color:var(--surface-container)] shadow-[0_18px_40px_rgba(200,241,105,0.08)]"
                : "border-[color:var(--outline-variant)] bg-[color:var(--surface-container)]"
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xl font-semibold text-[color:var(--primary)]">{plan.name}</p>
                <p className="mt-2 text-sm text-[color:var(--on-surface-variant)]">{plan.subtitle}</p>
              </div>

              {plan.featured && (
                <span className="inline-flex items-center rounded-full border border-[color:var(--primary-container)] bg-[color:var(--primary-container)]/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-[color:var(--primary-container)]">
                  Popular choice
                </span>
              )}
            </div>

            <div className="mt-6">
              <div className="text-4xl font-semibold tracking-tight text-[color:var(--primary)]">
                {plan.price}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-[color:var(--on-surface-variant)]">
                {plan.description}
              </p>
            </div>

            <ul className="mt-6 space-y-3">
              {plan.features.slice(0, 5).map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-[color:var(--on-surface)]">
                  <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-[color:var(--primary-container)]/10 text-[color:var(--primary-container)]">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-2xl border border-[color:var(--outline-variant)] bg-[color:var(--surface-container-low)] p-3 text-sm text-[color:var(--on-surface-variant)]">
              <span className="font-medium text-[color:var(--primary)]">Delivery:</span> {plan.timeline}
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <Link
                href={plan.href}
                className={`inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition-all ${
                  plan.featured
                    ? "bg-[color:var(--primary-container)] text-[color:var(--on-primary)] hover:-translate-y-0.5"
                    : "border border-[color:var(--outline-variant)] bg-[color:var(--surface-container-low)] text-[color:var(--primary)] hover:border-[color:var(--primary-container)]"
                }`}
              >
                {plan.cta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>

              <Link
                href="#comparison"
                className="inline-flex items-center justify-center text-sm font-medium text-[color:var(--primary-container)]"
              >
                View all features
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
