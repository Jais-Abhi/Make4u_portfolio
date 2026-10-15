import Link from "next/link";
import { ArrowRight, Check, MonitorSmartphone, Star } from "lucide-react";

export function WebsiteHero() {
  return (
    <section className="relative overflow-hidden border-b border-[color:var(--outline-variant)] bg-[color:var(--surface)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(200,241,105,0.12),_transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl overflow-x-hidden px-gutter py-12 md:py-20 lg:py-24">
        <div className="grid items-center gap-6 lg:grid-cols-[1.1fr_1fr] lg:gap-10">
          <div className="max-w-xl">
            <span className="inline-flex items-center rounded-full border border-[color:var(--outline-variant)] bg-[color:var(--surface-container)] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-[color:var(--primary-container)] sm:text-[10px]">
              Website Development
            </span>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-[color:var(--primary)] sm:text-4xl md:text-5xl lg:text-6xl">
              Your Business Deserves a Better Website.
            </h1>

            <p className="mt-4 max-w-lg text-sm leading-relaxed text-[color:var(--on-surface-variant)] sm:text-base md:text-lg">
              We design and develop fast, responsive websites that help businesses build trust, showcase their services, and turn visitors into enquiries.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row">
              <Link
                href="#pricing"
                className="inline-flex w-full items-center justify-center rounded-lg bg-[color:var(--primary-container)] px-4 py-3 text-sm font-semibold text-[color:var(--on-primary)] transition-transform duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[color:var(--primary-container)] focus:ring-offset-2 focus:ring-offset-[color:var(--background)] sm:w-auto sm:px-5"
              >
                Explore Website Packages
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>

              <Link
                href="/contact?package=website-development"
                className="inline-flex w-full items-center justify-center rounded-lg border border-[color:var(--outline-variant)] bg-[color:var(--surface-container)] px-4 py-3 text-sm font-semibold text-[color:var(--primary)] transition-colors hover:border-[color:var(--primary-container)] hover:text-[color:var(--primary-container)] sm:w-auto sm:px-5"
              >
                Get a Free Quote
              </Link>
            </div>

            <div className="mt-6 flex items-center gap-3 text-xs text-[color:var(--on-surface-variant)] sm:mt-8 sm:text-sm">
              <div className="flex items-center -space-x-2">
                {[1, 2, 3].map((item) => (
                  <span
                    key={item}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-[color:var(--surface)] bg-[color:var(--surface-container-high)] text-[10px] font-semibold text-[color:var(--primary)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <span>From simple business websites to custom digital experiences.</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[420px] overflow-hidden sm:max-w-[620px]">
            <div className="relative w-full rounded-[20px] border border-[color:var(--outline-variant)] bg-[color:var(--surface-container)] p-2 shadow-[0_20px_60px_rgba(0,0,0,0.18)] sm:rounded-[30px] sm:p-3">
              <div className="flex items-center gap-2 border-b border-[color:var(--outline-variant)] pb-3">
                <span className="h-3 w-3 rounded-full bg-[#f87171]" />
                <span className="h-3 w-3 rounded-full bg-[#fbbf24]" />
                <span className="h-3 w-3 rounded-full bg-[#4ade80]" />
              </div>

              <div className="mt-4 grid gap-3 lg:grid-cols-[1.5fr_0.7fr] lg:gap-4">
                <div className="rounded-2xl border border-[color:var(--outline-variant)] bg-[color:var(--surface-container-low)] p-3 sm:p-4">
                  <div className="mb-3 flex items-center justify-between sm:mb-4">
                    <div>
                      <p className="text-[9px] uppercase tracking-[0.2em] text-[color:var(--on-surface-variant)] sm:text-[10px]">
                        Business
                      </p>
                      <h2 className="mt-1 text-lg font-semibold text-[color:var(--primary)] sm:text-xl">
                        Growth Studio
                      </h2>
                    </div>
                    <span className="rounded-full bg-[color:var(--primary-container)]/10 px-2 py-1 text-[8px] font-semibold uppercase tracking-[0.18em] text-[color:var(--primary-container)] sm:text-[10px]">
                      Featured
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="h-20 rounded-xl bg-[color:var(--surface-container-high)] p-3 sm:h-24">
                      <div className="flex h-full items-end justify-between">
                        <div className="space-y-2">
                          <div className="h-2 w-20 rounded-full bg-[color:var(--primary-container)]/60" />
                          <div className="h-2 w-28 rounded-full bg-[color:var(--outline-variant)]" />
                        </div>
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[color:var(--primary-container)]/15 text-[color:var(--primary-container)]">
                          <Star className="h-5 w-5" />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 sm:gap-3">
                      {[1, 2, 3].map((item) => (
                        <div key={item} className="rounded-xl border border-[color:var(--outline-variant)] bg-[color:var(--surface-container)] p-2 sm:p-3">
                          <div className="mb-2 h-2 w-8 rounded-full bg-[color:var(--primary-container)]/60 sm:w-10" />
                          <div className="h-2 w-full rounded-full bg-[color:var(--outline-variant)]" />
                          <div className="mt-2 h-2 w-10 rounded-full bg-[color:var(--outline-variant)] sm:w-14" />
                        </div>
                      ))}
                    </div>

                    <div className="rounded-xl border border-[color:var(--outline-variant)] bg-[color:var(--surface-container)] p-2.5 sm:p-3">
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-[9px] font-medium uppercase tracking-[0.18em] text-[color:var(--on-surface-variant)] sm:text-xs">
                          Services
                        </span>
                        <span className="text-[8px] uppercase tracking-[0.18em] text-[color:var(--primary-container)] sm:text-[10px]">
                          Live
                        </span>
                      </div>
                      <div className="space-y-2">
                        {["Branding", "Web Design", "SEO"].map((item) => (
                          <div key={item} className="flex items-center gap-2 text-xs text-[color:var(--on-surface-variant)] sm:text-sm">
                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[color:var(--primary-container)]/10 text-[color:var(--primary-container)]">
                              <Check className="h-3 w-3" />
                            </span>
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3 sm:gap-4">
                  <div className="rounded-2xl border border-[color:var(--outline-variant)] bg-[color:var(--surface-container-low)] p-3 sm:p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] uppercase tracking-[0.2em] text-[color:var(--on-surface-variant)] sm:text-[10px]">
                        Mobile
                      </span>
                      <MonitorSmartphone className="h-4 w-4 text-[color:var(--primary-container)]" />
                    </div>
                    <div className="mt-3 rounded-[22px] border border-[color:var(--outline-variant)] bg-[color:var(--surface)] p-2.5 sm:p-3">
                      <div className="mx-auto h-2 w-16 rounded-full bg-[color:var(--outline-variant)]" />
                      <div className="mt-4 space-y-2">
                        <div className="h-8 rounded-lg bg-[color:var(--surface-container-high)] sm:h-10" />
                        <div className="h-12 rounded-lg bg-[color:var(--surface-container-high)] sm:h-16" />
                        <div className="grid grid-cols-2 gap-2">
                          <div className="h-10 rounded-lg bg-[color:var(--primary-container)]/15 sm:h-12" />
                          <div className="h-10 rounded-lg bg-[color:var(--surface-container-high)] sm:h-12" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-[color:var(--outline-variant)] bg-[color:var(--surface-container-low)] p-3 sm:p-4">
                    <p className="text-[9px] uppercase tracking-[0.2em] text-[color:var(--on-surface-variant)] sm:text-[10px]">
                      Conversion
                    </p>
                    <div className="mt-3 flex items-end gap-2">
                      <span className="text-2xl font-semibold text-[color:var(--primary)] sm:text-3xl">28%</span>
                      <span className="pb-1 text-[10px] text-[color:var(--primary-container)] sm:text-xs">growth</span>
                    </div>
                    <div className="mt-3 h-2 w-full rounded-full bg-[color:var(--surface-container-high)]">
                      <div className="h-full w-[72%] rounded-full bg-[color:var(--primary-container)]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
