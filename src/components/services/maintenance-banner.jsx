import Link from "next/link";
import { ShieldCheck, ArrowRight } from "lucide-react";

export function MaintenanceBanner() {
  return (
    <section className="px-gutter pb-space-xl max-w-7xl mx-auto w-full">
      <div className="p-8 md:p-10 rounded-xl bg-surface-container border border-outline-variant flex flex-col md:flex-row items-start md:items-center justify-between gap-space-lg shadow-md">
        <div className="flex items-start gap-5">
          <div className="w-12 h-12 rounded-lg bg-primary-container/10 border border-primary-container/20 flex items-center justify-center shrink-0">
            <ShieldCheck className="h-6 w-6 text-primary-container" />
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-headline-sm text-headline-sm text-primary font-semibold">
                Need continuous ongoing maintenance &amp; security?
              </h3>
              <span className="inline-block px-2 py-0.5 rounded bg-primary-container/15 text-primary-container font-label-sm text-label-sm font-semibold">
                Dedicated Plans
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-2xl leading-relaxed">
              Our project services cover end-to-end builds. For round-the-clock
              updates, server monitoring, security patching, and proactive
              monthly enhancements, explore our structured maintenance contracts.
            </p>
          </div>
        </div>

        <Link
          href="/maintenance-plans"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-primary-container text-on-primary-fixed font-label-lg text-label-lg font-semibold hover:brightness-105 active:scale-95 transition-all shrink-0 shadow-sm group"
        >
          <span>View Maintenance Plans</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
