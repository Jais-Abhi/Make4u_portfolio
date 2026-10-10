import { ShieldCheck } from "lucide-react";

export function MaintenanceHero() {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-gutter pt-12 pb-16 overflow-hidden">
      {/* Subtle background blur accent */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary-container/10 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-col gap-space-lg max-w-4xl relative z-10">
        <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-surface-container-low border border-surface-variant shadow-sm">
          <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary-container font-semibold">
            Ongoing Support &amp; Care
          </span>
        </div>

        <h1 className="font-headline-xl text-headline-xl text-primary tracking-tight font-bold">
          Keep your digital services running smoothly
          <span className="text-primary-container">.</span>
        </h1>

        <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed max-w-3xl">
          Our maintenance subscriptions help you keep your website and agreed
          digital services updated, supported, and working as expected without
          unexpected technical friction.
        </p>

        {/* Crucial Scope Clarification Banner */}
        <div className="mt-4 p-space-lg rounded-xl bg-surface-container border-l-4 border-primary-container flex flex-col sm:flex-row items-start sm:items-center gap-space-md shadow-lg">
          <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center shrink-0 text-primary-container">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-label-lg text-label-lg text-primary font-semibold">
              Scope Distinction Protocol
            </span>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-normal">
              <span className="text-primary font-medium">Important note:</span>{" "}
              Maintenance plans cover ongoing technical health, continuous
              security updates, and minor content adjustments. Initial website
              builds, custom web application architecture, and professional video
              production shoots are quoted and contracted separately.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
