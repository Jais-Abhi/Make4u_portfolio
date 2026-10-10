import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function PricingTiers() {
  const plans = [
    {
      title: "Quarterly Maintenance",
      label: "Standard Commitment",
      price: "$749",
      period: "/ quarter",
      effective: "Effective: $249 / month",
      discount: null,
      description:
        "3 months billing interval. Ideal for newly launched initiatives testing support rhythm.",
      specs: [
        "All 6 core maintenance inclusions",
        "Standard ticket resolution queue",
        "3 hours allocated minor work / month",
        "Weekly automated backups",
      ],
      featured: false,
      badge: null,
      cta: "Choose Quarterly Plan",
    },
    {
      title: "Half-Yearly Maintenance",
      label: "6 Months Commitment",
      price: "$1,349",
      period: "/ half-year",
      effective: "Effective: $224 / month",
      discount: "Save 10%",
      description:
        "Billed semi-annually. Streamlined operations with elevated turnaround expectations.",
      specs: [
        "All 6 core maintenance inclusions",
        "Priority engineering queue placement",
        "4 hours allocated minor work / month",
        "Twice-weekly cloud backups",
      ],
      featured: true,
      badge: "Most Popular",
      cta: "Choose Half-Yearly Plan",
    },
    {
      title: "Yearly Maintenance",
      label: "12 Months Commitment",
      price: "$2,390",
      period: "/ year",
      effective: "Effective: $199 / month",
      discount: "Save 20%",
      description:
        "Billed annually. Full peace of mind with structured strategic technical reviews.",
      specs: [
        "All 6 core maintenance inclusions",
        "Expedited VIP resolution queue",
        "5 hours allocated minor work / month",
        "Dedicated monthly security & SEO audit",
      ],
      featured: false,
      badge: "Best Value",
      cta: "Choose Yearly Plan",
    },
  ];

  return (
    <section className="w-full py-24 bg-background relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-gutter">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-label-md text-label-md text-primary-container uppercase tracking-wider font-semibold">
            Contract Tiers
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight font-bold mt-1">
            Subscription Commitments
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-3 leading-relaxed">
            Identical technical inclusions across all plans. Longer commitments
            unlock priority SLA responsiveness and reduced effective rates.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-xl p-8 flex flex-col relative transition-all duration-300 ${
                plan.featured
                  ? "bg-surface-container-high border-2 border-primary-container shadow-2xl scale-[1.02]"
                  : "bg-surface-container border border-surface-variant shadow-md hover:border-primary-container/40"
              }`}
            >
              {plan.badge && (
                <div
                  className={`absolute -top-3.5 ${
                    plan.featured
                      ? "left-1/2 -translate-x-1/2 bg-primary-container text-on-primary-fixed font-bold"
                      : "right-6 bg-surface-container-highest border border-surface-variant text-on-surface font-semibold"
                  } px-4 py-0.5 rounded-full font-label-sm text-label-sm uppercase tracking-wider shadow-sm`}
                >
                  {plan.badge}
                </div>
              )}

              <div className="flex justify-between items-start mb-6">
                <div>
                  <span
                    className={`font-label-sm text-label-sm uppercase tracking-wider ${
                      plan.featured
                        ? "text-primary-container"
                        : "text-on-surface-variant"
                    }`}
                  >
                    {plan.label}
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-primary text-2xl font-bold mt-1">
                    {plan.title}
                  </h3>
                </div>
              </div>

              <div className="mb-6 pb-6 border-b border-surface-variant">
                <div className="flex items-baseline gap-2">
                  <span className="font-headline-xl text-headline-xl text-primary font-bold">
                    {plan.price}
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    {plan.period}
                  </span>
                </div>

                <div className="flex items-center gap-2 mt-1">
                  <span className="font-label-md text-label-md text-primary-container font-mono">
                    {plan.effective}
                  </span>
                  {plan.discount && (
                    <span className="px-2 py-0.5 rounded bg-primary-container/20 text-primary-container font-label-sm text-label-sm font-bold">
                      {plan.discount}
                    </span>
                  )}
                </div>

                <p className="font-body-sm text-body-sm text-on-surface-variant mt-3 leading-relaxed">
                  {plan.description}
                </p>
              </div>

              <div className="flex flex-col gap-3 mb-8">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant mb-1">
                  Package Specifications
                </span>
                {plan.specs.map((spec, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center gap-3 text-body-sm font-body-sm text-on-surface"
                  >
                    <span className="w-1.5 h-1.5 rounded bg-primary-container shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto">
                <Link
                  href="/#contact"
                  className={`w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-label-lg text-label-lg font-bold transition-all shadow-sm ${
                    plan.featured
                      ? "bg-primary-container text-on-primary-fixed hover:brightness-105 active:scale-95"
                      : "bg-surface-container-high border border-surface-variant text-primary hover:border-primary-container/60 hover:bg-surface-bright"
                  }`}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
