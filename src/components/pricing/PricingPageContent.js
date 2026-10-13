"use client";

import { useMemo, useState } from "react";
import { pricingServices } from "@/data/pricing";
import { PricingHero } from "@/components/pricing/PricingHero";
import { ServiceSelector } from "@/components/pricing/ServiceSelector";
import { BillingSelector } from "@/components/pricing/BillingSelector";
import { PricingCard } from "@/components/pricing/PricingCard";
import { PricingComparison } from "@/components/pricing/PricingComparison";
import { PricingFAQ } from "@/components/pricing/PricingFAQ";
import { CustomQuoteCTA } from "@/components/pricing/CustomQuoteCTA";

export function PricingPageContent() {
  const [selectedServiceId, setSelectedServiceId] = useState(pricingServices[0].id);
  const [selectedBillingOptionId, setSelectedBillingOptionId] = useState(
    pricingServices[0].billingOptions[0]?.id || ""
  );

  const selectedService = useMemo(
    () => pricingServices.find((service) => service.id === selectedServiceId) || pricingServices[0],
    [selectedServiceId]
  );

  const handleServiceSelect = (serviceId) => {
    const nextService = pricingServices.find((service) => service.id === serviceId) || pricingServices[0];
    setSelectedServiceId(nextService.id);
    setSelectedBillingOptionId(nextService.billingOptions[0]?.id || "");
  };

  const billingLabel =
    selectedService.billingOptions.find((option) => option.id === selectedBillingOptionId)?.label ||
    selectedService.billingLabel;

  return (
    <main className="w-full bg-background text-on-surface antialiased">
      <PricingHero />

      <section className="mx-auto max-w-7xl px-gutter pb-12">
        <div className="rounded-2xl border border-outline-variant bg-surface-container p-6 shadow-sm">
          <ServiceSelector
            services={pricingServices}
            selectedServiceId={selectedServiceId}
            onSelect={handleServiceSelect}
          />

          <div className="mt-6 border-t border-outline-variant/70 pt-5">
            <div className="mb-3 flex items-center justify-between gap-3">
              <h3 className="text-lg font-semibold text-primary">Billing</h3>
            </div>
            <BillingSelector
              options={selectedService.billingOptions}
              selectedOption={selectedBillingOptionId}
              onChange={setSelectedBillingOptionId}
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-gutter pb-16">
        <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-on-surface-variant">{selectedService.shortLabel}</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary">{selectedService.name}</h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-on-surface-variant">{selectedService.description}</p>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {selectedService.plans.map((plan) => (
            <PricingCard
              key={plan.name}
              plan={plan}
              service={selectedService}
              billingLabel={billingLabel}
            />
          ))}
        </div>
      </section>

      <PricingComparison service={selectedService} />
      <PricingFAQ items={selectedService.faq} />
      <CustomQuoteCTA service={selectedService} />
    </main>
  );
}
