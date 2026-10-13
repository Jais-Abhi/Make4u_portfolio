import Link from "next/link";

export function CustomQuoteCTA({ service }) {
  const quoteHref = service ? `/contact?service=${service.id}` : "/contact";

  return (
    <section className="mx-auto max-w-7xl px-gutter pb-20">
      <div className="rounded-2xl border border-outline-variant bg-surface-container p-8 shadow-sm sm:p-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-on-surface-variant">Custom quote</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary">
              Need a solution tailored to your exact scope?
            </h2>
            <p className="mt-3 text-base leading-7 text-on-surface-variant">
              Tell us about your service, timeline, and goals, and we will propose the right plan for your business.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href={quoteHref}
              className="inline-flex items-center justify-center rounded-lg bg-primary-container px-5 py-3 text-sm font-semibold text-on-primary-fixed transition hover:brightness-105"
            >
              Request a custom quote
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center rounded-lg border border-outline-variant bg-surface-container-lowest px-5 py-3 text-sm font-semibold text-primary transition hover:border-primary-container hover:text-primary-container"
            >
              Compare plans
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
