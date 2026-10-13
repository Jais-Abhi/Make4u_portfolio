export function PricingHero() {
  return (
    <section className="relative overflow-hidden px-gutter pt-16 pb-8 max-w-7xl mx-auto w-full">
      <div className="absolute inset-x-0 top-0 h-72 bg-primary-container/8 blur-3xl" />
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center gap-2 border border-outline-variant bg-surface-container px-3 py-1.5 rounded-full shadow-sm">
          <span className="h-2 w-2 rounded-full bg-primary-container" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-on-surface-variant">
            Pricing
          </span>
        </div>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          Simple Plans. Solutions That Fit.
        </h1>
        <p className="mt-4 text-base leading-7 text-on-surface-variant sm:text-lg">
          Choose the right solution for your business, with transparent pricing designed for growing businesses in India.
        </p>
      </div>
    </section>
  );
}
