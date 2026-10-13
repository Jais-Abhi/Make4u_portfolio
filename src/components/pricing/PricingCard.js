import Link from "next/link";
import { Check } from "lucide-react";

export function PricingCard({ plan, service, billingLabel, ctaLabel = "Choose This Plan" }) {
  const isRecommended = Boolean(plan.recommended);
  const planSlug = plan.name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return (
    <article
      className={`relative flex h-full flex-col rounded-2xl border p-6 shadow-sm transition-all duration-200 ${
        isRecommended
          ? "border-primary-container bg-primary-container/5 shadow-md"
          : "border-outline-variant bg-surface-container"
      }`}
    >
      {isRecommended && (
        <div className="absolute right-4 top-4 rounded-full bg-primary-container px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-on-primary-fixed">
          Recommended
        </div>
      )}

      <div className="flex flex-1 flex-col">
        <div className="mb-5">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-on-surface-variant">
            {plan.name}
          </p>
        </div>

        <div className="mb-4 flex items-end gap-2">
          <span className="text-4xl font-bold tracking-tight text-primary">₹{plan.price.toLocaleString("en-IN")}</span>
          {plan.priceSuffix && (
            <span className="pb-1 text-sm font-medium text-on-surface-variant">{plan.priceSuffix}</span>
          )}
        </div>

        <p className="mb-5 text-sm leading-6 text-on-surface-variant">{plan.description}</p>

        <div className="mb-5 rounded-xl border border-outline-variant bg-surface-container-lowest p-3">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-on-surface-variant">Billing</p>
          <p className="mt-1 text-sm font-medium text-primary">{billingLabel}</p>
        </div>

        <ul className="space-y-3 text-sm text-on-surface-variant">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-container text-on-primary-fixed">
                <Check className="h-3.5 w-3.5" />
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 border-t border-outline-variant pt-5">
        <Link
          href={
            service
              ? `/contact?service=${service.id}&plan=${planSlug}`
              : "/contact"
          }
          className={`inline-flex w-full items-center justify-center rounded-lg px-4 py-3 text-sm font-semibold transition-all ${
            isRecommended
              ? "bg-primary-container text-on-primary-fixed hover:brightness-105"
              : "border border-outline-variant bg-surface-container-lowest text-primary hover:border-primary-container hover:text-primary-container"
          }`}
        >
          {ctaLabel}
        </Link>
        {plan.disclaimer && (
          <p className="mt-4 text-xs leading-5 text-on-surface-variant">{plan.disclaimer}</p>
        )}
      </div>
    </article>
  );
}
