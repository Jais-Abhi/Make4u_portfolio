import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export function WebsitePricing({ packages }) {
  return (
    <section id="pricing" className="mx-auto max-w-7xl px-gutter py-12 md:py-20">
      <div className="max-w-2xl">
        <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-[#C8F169] sm:text-[10px]">
          Straightforward pricing
        </p>
        <h2 className="mt-4 text-2xl font-semibold tracking-tight text-[color:var(--primary)] sm:text-3xl md:text-4xl">
          Choose the Right Website Package
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-[color:var(--on-surface-variant)] sm:text-base">
          Whether you need a simple online presence or a custom website, choose a package that matches your business goals.
        </p>
      </div>

      <div className="mt-8 grid gap-4 xl:grid-cols-3">
        {packages.map((plan) => (
          <div
            key={plan.id}
            className={[
              "relative rounded-[24px] border p-4 sm:rounded-[28px] sm:p-6",
              plan.featured
                ? "border-[#C8F169] bg-[color:var(--surface-container)] shadow-[0_18px_45px_rgba(200,241,105,0.08)]"
                : "border-[color:var(--outline-variant)] bg-[color:var(--surface-container)]",
            ].join(" ")}
          >
            {plan.featured && (
              <div className="absolute -top-3 left-5 rounded-full bg-[#C8F169] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#151f00]">
                Popular choice
              </div>
            )}

            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#C8F169]">
                  {plan.name}
                </p>
                <p className="mt-2 text-3xl font-semibold tracking-tight text-[color:var(--primary)]">
                  {plan.price}
                </p>
              </div>

              {plan.featured && (
                <span className="rounded-full border border-[#C8F169]/50 bg-[#C8F169]/10 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#C8F169]">
                  Best value
                </span>
              )}
            </div>

            <p className="mt-4 text-sm leading-relaxed text-[color:var(--on-surface-variant)]">
              {plan.description}
            </p>

            <ul className="mt-6 space-y-3">
              {plan.features.slice(0, 5).map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-[color:var(--on-surface)]">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#C8F169]/12 text-[#C8F169]">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-2xl border border-[color:var(--outline-variant)] bg-[color:var(--surface-container-low)] p-3 text-sm leading-relaxed text-[color:var(--on-surface-variant)]">
              <span className="font-medium text-[color:var(--primary)]">Delivery:</span> {plan.timeline}
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <Link
                href={plan.href}
                className={[
                  "inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition-transform duration-200 hover:-translate-y-0.5",
                  plan.featured
                    ? "bg-[#C8F169] text-[#151f00]"
                    : "border border-[color:var(--outline-variant)] bg-[color:var(--surface-container-low)] text-[color:var(--primary)]",
                ].join(" ")}
              >
                {plan.cta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>

              <Link
                href="#comparison"
                className="inline-flex items-center justify-center text-sm font-medium text-[#C8F169]"
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
