import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function ComingSoonPage({ serviceName = "This service" }) {
  return (
    <main className="min-h-screen bg-[color:var(--background)] px-gutter pt-28 pb-20">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-[32px] border border-[color:var(--outline-variant)] bg-[color:var(--surface-container)] p-8 shadow-[0_20px_60px_rgba(19,29,22,0.06)] md:p-12">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[color:var(--outline-variant)] bg-[color:var(--surface-container-low)] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[color:var(--primary-container)]">
            <Sparkles className="h-3.5 w-3.5" />
            Coming soon
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-[color:var(--primary)] md:text-5xl">
            {serviceName} is on the way.
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[color:var(--on-surface-variant)] md:text-lg">
            We&apos;re preparing this service offering for launch. For now, we&apos;re building the experience and packages to match the quality of our other solutions.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[color:var(--primary-container)] px-5 py-3 text-sm font-semibold text-[color:var(--on-primary-fixed)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              Ask about this service
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-xl border border-[color:var(--outline-variant)] bg-[color:var(--surface-container-low)] px-5 py-3 text-sm font-semibold text-[color:var(--primary)] transition-colors hover:border-[color:var(--primary-container)]"
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
