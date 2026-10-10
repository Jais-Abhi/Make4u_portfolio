import Link from "next/link";

export function AboutCta() {
  return (
    <section className="w-full max-w-7xl mx-auto px-gutter py-space-xl">
      <div className="relative bg-surface-container rounded-xl p-space-xl md:p-16 overflow-hidden shadow-xl border-t border-surface-variant">
        {/* Minimal Architectural Background Grid */}
        <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none translate-x-12 translate-y-12">
          <svg
            className="text-primary-container"
            fill="none"
            height="400"
            stroke="currentColor"
            viewBox="0 0 100 100"
            width="400"
          >
            <path d="M0 0h100v100H0z" strokeWidth="0.5" />
            <path
              d="M0 25h100M0 50h100M0 75h100M25 0v100M50 0v100M75 0v100"
              strokeWidth="0.25"
            />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-space-xl">
          <div className="flex flex-col gap-space-sm max-w-2xl">
            <div className="flex items-center gap-space-xs text-primary-container font-label-sm text-label-sm uppercase tracking-widest font-semibold">
              <span className="w-2 h-2 rounded-full bg-primary-container" />
              Ready to collaborate
            </div>
            <h2 className="font-headline-xl text-headline-xl text-primary tracking-tight">
              Let&apos;s build something useful for your business.
            </h2>
            <p className="font-body-md text-body-md text-secondary">
              Get an honest review of your current setup and a straightforward
              plan with clear costs.
            </p>
          </div>

          <div className="flex items-center shrink-0">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-space-xs px-space-xl py-4 bg-primary-container text-on-primary-fixed rounded-lg font-label-lg text-label-lg font-semibold hover:brightness-105 active:scale-95 transition-all shadow-md"
            >
              <span>Start a Project</span>
              <span className="text-lg leading-none">↗</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
