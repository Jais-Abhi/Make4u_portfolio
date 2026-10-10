import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function MaintenanceCta() {
  return (
    <section className="w-full py-20 bg-background transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-gutter">
        <div className="rounded-2xl bg-surface-container p-8 md:p-14 border border-surface-variant flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-xl">
          {/* Accent Glow Element */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-primary-container/15 blur-3xl pointer-events-none" />

          <div className="flex flex-col gap-3 max-w-2xl relative z-10 text-center md:text-left">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary-container font-semibold">
              Proactive Protection
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight font-bold">
              Need ongoing support for your website?
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Avoid downtime emergencies and unpatched vulnerabilities. Lock in
              your dedicated engineering capacity today.
            </p>
          </div>

          <div className="shrink-0 relative z-10 w-full md:w-auto flex flex-col sm:flex-row gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-primary-container text-on-primary-fixed font-label-lg text-label-lg font-bold hover:brightness-105 active:scale-95 transition-all text-center shadow-md group"
            >
              <span>Choose a Maintenance Plan</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
