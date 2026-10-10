import { SlidersHorizontal } from "lucide-react";

export function ServicesHero() {
  return (
    <section className="relative px-gutter pt-12 pb-10 max-w-7xl mx-auto w-full overflow-hidden">
      {/* Subtle architectural glow accent */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary-container/10 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-col items-start gap-space-md max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface-container-high border border-outline-variant/60 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-primary-container" />
          <span className="font-label-sm text-label-sm tracking-widest uppercase text-on-surface-variant font-semibold">
            Our Capabilities
          </span>
        </div>

        <h1 className="font-headline-xl text-headline-xl text-primary tracking-tight font-bold">
          Services built around <br />
          <span className="text-primary-container">your business.</span>
        </h1>

        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
          Choose what you need and explore the details of each service.
          Transparent deliverables, clear processes, and tailored solutions
          built for high-growth operations.
        </p>
      </div>

      {/* Live Capabilities Filter / Scope Ticker */}
      <div className="mt-space-xl pt-space-lg flex flex-wrap items-center justify-between gap-space-md border-t border-outline-variant/40">
        <div className="flex items-center gap-space-sm text-on-surface-variant font-label-md text-label-md uppercase tracking-wider">
          <SlidersHorizontal className="h-4 w-4 text-primary-container" />
          <span>Standard Deliverables Matrix</span>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-on-surface-variant font-body-sm text-body-sm">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-container" />{" "}
            Fully Custom Code
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-container" />{" "}
            Dedicated PM
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-container" />{" "}
            Enterprise SLA Ready
          </span>
        </div>
      </div>
    </section>
  );
}
