import Link from "next/link";
import {
  BriefcaseBusiness,
  CalendarRange,
  Check,
  ChevronRight,
  CircleCheckBig,
  MessageSquareText,
  Rocket,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Smartphone,
  Star,
  X,
} from "lucide-react";

import {
  appSolutions,
  comparisonRows,
  faqs,
  packages,
  platformOptions,
  processSteps,
  transparencyNotes,
} from "@/components/services/app-development-data";

const iconMap = {
  BriefcaseBusiness,
  CalendarRange,
  ShoppingBag,
  Rocket,
};

export const metadata = {
  title: "App Development Services | MAKE4U Digital Solutions",
  description:
    "Explore app development services from MAKE4U Digital Solutions, from MVPs and business apps to custom digital products and platform strategies.",
};

function AppMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[260px] overflow-hidden sm:max-w-[430px]">
      <div className="absolute -left-6 top-10 h-32 w-32 rounded-full bg-[#C8F169]/12 blur-3xl sm:h-52 sm:w-52" />
      <div className="absolute -right-10 bottom-8 h-28 w-28 rounded-full bg-[#7DD3FC]/10 blur-3xl sm:h-48 sm:w-48" />

      <div className="relative mx-auto flex scale-[0.82] items-center justify-center gap-2 sm:scale-100 sm:gap-4">
        <div className="w-[140px] rounded-[28px] border border-[#3b3f38] bg-[#1d201d] p-2.5 shadow-[0_22px_60px_rgba(0,0,0,0.35)] sm:w-[168px] sm:rounded-[32px] sm:p-3">
          <div className="rounded-[24px] bg-[#2b2f2a] p-3 text-left">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#B8BDB5]">Booking</span>
              <span className="rounded-full bg-[#C8F169]/14 px-2 py-1 text-[9px] font-semibold text-[#C8F169]">Live</span>
            </div>

            <div className="rounded-2xl bg-[#171a17] p-3">
              <div className="mb-3 flex items-center justify-between">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-[#B8BDB5]">Today</p>
                  <p className="mt-1 text-sm font-semibold text-[#F5F5F0]">8:30 AM</p>
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#C8F169]/18 text-[#C8F169]">
                  <CalendarRange className="h-4 w-4" />
                </div>
              </div>

              <div className="space-y-2">
                <div className="rounded-xl bg-[#262b27] p-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-[#B8BDB5]">Consultation</span>
                    <span className="text-[9px] text-[#C8F169]">Booked</span>
                  </div>
                  <p className="mt-1 text-xs font-medium text-[#F5F5F0]">Team Sync</p>
                </div>
                <div className="rounded-xl bg-[#262b27] p-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-[#B8BDB5]">Design</span>
                    <span className="text-[9px] text-[#7DD3FC]">Review</span>
                  </div>
                  <p className="mt-1 text-xs font-medium text-[#F5F5F0]">Landing Page</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[170px] rounded-[28px] border border-[#3b3f38] bg-[#111412] p-2.5 shadow-[0_28px_70px_rgba(0,0,0,0.42)] sm:w-[206px] sm:rounded-[34px] sm:p-3">
          <div className="rounded-[24px] bg-[#1d201d] p-2.5 sm:rounded-[28px] sm:p-3">
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#C8F169]/20 text-[#C8F169]">
                  <Star className="h-3.5 w-3.5 fill-current" />
                </div>
                <p className="text-xs font-semibold text-[#F5F5F0]">M4U</p>
              </div>
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#B8BDB5]">App</span>
            </div>

            <div className="rounded-2xl bg-[#242924] p-3">
              <div className="mb-3 flex items-center justify-between">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-[#B8BDB5]">Revenue</p>
                  <p className="mt-1 text-lg font-semibold text-[#F5F5F0]">₹48.2k</p>
                </div>
                <div className="rounded-full bg-[#C8F169]/16 px-2 py-1 text-[8px] font-semibold text-[#C8F169]">+18.6%</div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between rounded-xl bg-[#121612] p-2">
                  <span className="text-[10px] text-[#B8BDB5]">Sales</span>
                  <span className="text-[10px] font-medium text-[#F5F5F0]">₹12.8k</span>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-[#121612] p-2">
                  <span className="text-[10px] text-[#B8BDB5]">Orders</span>
                  <span className="text-[10px] font-medium text-[#F5F5F0]">328</span>
                </div>
              </div>
            </div>

            <div className="mt-3 rounded-2xl bg-[#101311] p-3">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[9px] uppercase tracking-[0.2em] text-[#B8BDB5]">Tasks</span>
                <span className="text-[9px] text-[#C8F169]">4 active</span>
              </div>
              <div className="space-y-2">
                <div className="h-2.5 rounded-full bg-[#2a2d29]">
                  <div className="h-full w-[76%] rounded-full bg-[#C8F169]" />
                </div>
                <div className="h-2.5 rounded-full bg-[#2a2d29]">
                  <div className="h-full w-[58%] rounded-full bg-[#7DD3FC]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AppDevelopmentPage() {
  return (
    <div className="min-h-screen bg-[color:var(--background)] text-[color:var(--on-surface)]">
      <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-gutter pt-8">
        <div className="inline-flex flex-wrap items-center gap-2 text-sm text-[color:var(--on-surface-variant)]">
          <Link href="/" className="transition-colors hover:text-[color:var(--primary)]">
            Home
          </Link>
          <span>/</span>
          <Link href="/#services" className="transition-colors hover:text-[color:var(--primary)]">
            Services
          </Link>
          <span>/</span>
          <span className="text-[color:var(--primary)]">App Development</span>
        </div>
      </nav>

      <section className="relative mx-auto max-w-7xl overflow-x-hidden px-gutter pb-14 pt-10 md:pb-20 md:pt-14">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(200,241,105,0.12),_transparent_35%)]" />
        <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          <div className="max-w-xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#2d4d12] dark:text-[#C8F169]">
              App Development
            </p>
            <h1 className="mt-5 text-3xl font-semibold tracking-tight text-[#111d14] dark:text-[color:var(--primary)] sm:text-4xl md:text-5xl xl:text-6xl">
              Apps Built Around Your Business.
            </h1>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-[color:var(--on-surface-variant)] sm:text-base md:text-lg">
              From customer-facing mobile apps to business management tools, we build digital products designed around your goals.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact?package=app-development"
                className="inline-flex items-center justify-center rounded-lg bg-[#C8F169] px-5 py-3 text-sm font-semibold text-[#151f00] shadow-[0_12px_24px_rgba(200,241,105,0.18)] transition-transform duration-200 hover:-translate-y-0.5"
              >
                Discuss Your App
              </Link>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-lg border border-[color:var(--outline-variant)] bg-[color:var(--surface-container)] px-5 py-3 text-sm font-semibold text-[color:var(--primary)] transition-colors hover:border-[#C8F169] hover:text-[#C8F169]"
              >
                Explore Packages
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4 text-xs text-[color:var(--on-surface-variant)] sm:text-sm">
              <span className="inline-flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2d4d12]/12 text-[#2d4d12] dark:bg-[#C8F169]/12 dark:text-[#C8F169]">
                  <Check className="h-3.5 w-3.5 stroke-[3]" />
                </span>
                Business-first strategy
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2d4d12]/12 text-[#2d4d12] dark:bg-[#C8F169]/12 dark:text-[#C8F169]">
                  <Check className="h-3.5 w-3.5 stroke-[3]" />
                </span>
                Scalable product planning
              </span>
            </div>
          </div>

          <div className="relative mt-2 flex justify-center lg:mt-0">
            <AppMockup />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl overflow-x-hidden px-gutter py-16 md:py-20">
        <div className="max-w-2xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#2d4d12] dark:text-[#C8F169]">
            What we build
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#111d14] dark:text-[color:var(--primary)] md:text-4xl">
            App Solutions for Different Needs
          </h2>
        </div>

        <div className="mt-8 grid min-w-0 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {appSolutions.map((item) => {
            const Icon = iconMap[item.icon];

            return (
              <div
                key={item.title}
                className="min-w-0 rounded-[24px] border border-[color:var(--outline-variant)] bg-[color:var(--surface-container)] p-5 shadow-[0_16px_38px_rgba(0,0,0,0.08)]"
              >
                <div className="mb-4 flex min-w-0 items-start gap-3">
                  <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${item.accent}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="min-w-0 flex-1 text-base font-semibold leading-snug text-[color:var(--primary)] break-words md:text-xl">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-0 text-sm leading-relaxed text-[color:var(--on-surface-variant)] break-words">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="border-y border-[color:var(--outline-variant)] bg-[color:var(--surface-container-low)]/80 py-16 md:py-20">
        <div className="mx-auto max-w-7xl overflow-x-hidden px-gutter">
          <div className="max-w-xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#2d4d12] dark:text-[#C8F169]">
              Platforms and tech
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#111d14] dark:text-[color:var(--primary)] md:text-4xl">
              Built for the Right Platform
            </h2>
          </div>

          <div className="mt-8 grid min-w-0 gap-4 md:grid-cols-3">
            {platformOptions.map((platform) => (
              <div
                key={platform.title}
                className="min-w-0 rounded-[24px] border border-[color:var(--outline-variant)] bg-[color:var(--surface-container)] p-5"
              >
                <div className="mb-4 flex min-w-0 items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#2d4d12]/12 text-[#2d4d12] dark:bg-[#C8F169]/12 dark:text-[#C8F169]">
                    <Smartphone className="h-5 w-5" />
                  </div>
                  <h3 className="min-w-0 flex-1 text-base font-semibold leading-snug text-[#111d14] break-words dark:text-[color:var(--primary)] md:text-xl">
                    {platform.title}
                  </h3>
                </div>
                <p className="mt-0 text-sm leading-relaxed text-[color:var(--on-surface-variant)] break-words">
                  {platform.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-[22px] border border-[color:var(--outline-variant)] bg-[color:var(--surface-container)] px-5 py-4 text-sm leading-relaxed text-[color:var(--on-surface-variant)]">
            The platform and technology depend on your project requirements. We do not assume every app includes native Android and iOS builds.
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl overflow-x-hidden px-gutter py-16 md:py-20">
        <div className="max-w-xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#2d4d12] dark:text-[#C8F169]">
            Process
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#111d14] dark:text-[color:var(--primary)] md:text-4xl">
            App Development Process
          </h2>
        </div>

        <div className="mt-8 grid min-w-0 gap-4 md:grid-cols-4">
          {processSteps.map((process, index) => (
            <div key={process.step} className="relative min-w-0 rounded-[24px] border border-[color:var(--outline-variant)] bg-[color:var(--surface-container)] p-5">
              {index < processSteps.length - 1 && (
                <div className="pointer-events-none absolute -right-2 top-1/2 hidden h-px w-6 -translate-y-1/2 bg-[color:var(--outline-variant)] md:block" />
              )}
              <div className="mb-4 flex min-w-0 items-center gap-3">
                <div className="inline-flex shrink-0 rounded-full bg-[#2d4d12]/12 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#2d4d12] dark:bg-[#C8F169]/12 dark:text-[#C8F169]">
                  {process.step}
                </div>
                <h3 className="min-w-0 flex-1 text-base font-semibold leading-snug text-[#111d14] break-words dark:text-[color:var(--primary)] md:text-xl">
                  {process.title}
                </h3>
              </div>
              <p className="mt-0 text-sm leading-relaxed text-[color:var(--on-surface-variant)] break-words">
                {process.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="pricing" className="bg-[color:var(--surface-container-low)] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-gutter">
          <div className="max-w-2xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#2d4d12] dark:text-[#C8F169]">
              Pricing
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#111d14] dark:text-[color:var(--primary)] md:text-4xl">
              Choose the Right App Package
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[color:var(--on-surface-variant)]">
              Start with the essentials or build a custom application around your business requirements.
            </p>
          </div>

          <div className="mt-8 grid gap-5 xl:grid-cols-3">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={[
                  "relative rounded-[28px] border p-6",
                  pkg.highlight
                    ? "border-[#C8F169] bg-[color:var(--surface-container)] shadow-[0_18px_45px_rgba(200,241,105,0.08)]"
                    : "border-[color:var(--outline-variant)] bg-[color:var(--surface-container)]",
                ].join(" ")}
              >
                {pkg.badge && (
                  <div className="absolute -top-3 left-5 rounded-full bg-[#C8F169] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#151f00]">
                    {pkg.badge}
                  </div>
                )}

                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#2d4d12] dark:text-[#C8F169]">
                      {pkg.name}
                    </p>
                    <p className="mt-2 text-3xl font-semibold text-[#111d14] dark:text-[color:var(--primary)]">{pkg.price}</p>
                  </div>
                  {pkg.highlight ? (
                    <span className="rounded-full border border-[#2d4d12]/50 bg-[#2d4d12]/10 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#2d4d12] dark:border-[#C8F169]/50 dark:bg-[#C8F169]/10 dark:text-[#C8F169]">
                      Best value
                    </span>
                  ) : null}
                </div>

                <p className="mt-4 text-sm leading-relaxed text-[color:var(--on-surface-variant)]">
                  {pkg.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm leading-relaxed text-[color:var(--on-surface)]">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#2d4d12]/12 text-[#2d4d12] dark:bg-[#C8F169]/12 dark:text-[#C8F169]">
                        <Check className="h-3.5 w-3.5 stroke-[3]" />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={pkg.ctaHref}
                  className={[
                    "mt-7 inline-flex w-full items-center justify-center rounded-lg px-4 py-3 text-sm font-semibold transition-transform duration-200 hover:-translate-y-0.5",
                    pkg.highlight
                      ? "bg-[#C8F169] text-[#151f00]"
                      : "border border-[color:var(--outline-variant)] bg-[color:var(--surface-container-low)] text-[color:var(--primary)]",
                  ].join(" ")}
                >
                  {pkg.cta}
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-[20px] border border-[color:var(--outline-variant)] bg-[color:var(--surface-container)] p-4 text-sm leading-relaxed text-[color:var(--on-surface-variant)]">
            Final pricing depends on features, platforms, integrations, and project complexity. Native Android and iOS apps, backend services, admin panels, and third-party components are scoped separately unless explicitly included.
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-gutter py-16 md:py-20">
        <div className="max-w-xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#2d4d12] dark:text-[#C8F169]">
            Comparison
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#111d14] dark:text-[color:var(--primary)] md:text-4xl">
            What’s Included by Package
          </h2>
        </div>

        <div className="mt-8 overflow-x-auto pb-2">
          <table className="min-w-[760px] w-full overflow-hidden rounded-[28px] border border-[color:var(--outline-variant)] bg-[color:var(--surface-container)] text-left">
            <thead className="bg-[color:var(--surface-container-low)]">
              <tr>
                <th className="px-4 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--on-surface-variant)]">
                  Feature
                </th>
                <th className="px-4 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--on-surface-variant)]">
                  Basic
                </th>
                <th className="px-4 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--on-surface-variant)]">
                  Professional
                </th>
                <th className="px-4 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--on-surface-variant)]">
                  Custom
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.feature} className="border-t border-[color:var(--outline-variant)]">
                  <td className="px-4 py-4 align-top text-sm font-medium text-[color:var(--primary)]">{row.feature}</td>
                  <td className="px-4 py-4 align-top text-sm text-[color:var(--on-surface-variant)]">
                    {row.basic === "Not included" ? (
                      <span className="inline-flex items-center gap-2 text-[#8f2f2f] dark:text-[#F2A5A5]">
                        <X className="h-4 w-4 stroke-[3]" /> {row.basic}
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-2 text-[#2d4d12] dark:text-[#C8F169]">
                        <CircleCheckBig className="h-4 w-4 stroke-[3]" /> {row.basic}
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-4 align-top text-sm text-[color:var(--on-surface-variant)]">
                    {row.professional === "Optional extra" || row.professional === "Limited, as agreed" ? (
                      <span className="inline-flex items-center gap-2 text-[#8f2f2f] dark:text-[#F2A5A5]">
                        <X className="h-4 w-4 stroke-[3]" /> {row.professional}
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-2 text-[#2d4d12] dark:text-[#C8F169]">
                        <CircleCheckBig className="h-4 w-4 stroke-[3]" /> {row.professional}
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-4 align-top text-sm text-[color:var(--on-surface-variant)]">
                    {row.custom === "Not included" || row.custom === "Optional extra" ? (
                      <span className="inline-flex items-center gap-2 text-[#8f2f2f] dark:text-[#F2A5A5]">
                        <X className="h-4 w-4 stroke-[3]" /> {row.custom}
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-2 text-[#2d4d12] dark:text-[#C8F169]">
                        <CircleCheckBig className="h-4 w-4 stroke-[3]" /> {row.custom}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="border-y border-[color:var(--outline-variant)] bg-[color:var(--surface-container-low)]/80 py-16 md:py-20">
        <div className="mx-auto max-w-7xl overflow-x-hidden px-gutter">
          <div className="max-w-2xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#2d4d12] dark:text-[#C8F169]">
              Transparency
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#111d14] dark:text-[color:var(--primary)] md:text-4xl">
              What’s Included and What’s Extra
            </h2>
          </div>

          <div className="mt-8 grid min-w-0 gap-4 md:grid-cols-2 xl:grid-cols-5">
            {transparencyNotes.map((item) => (
              <div key={item} className="min-w-0 rounded-[20px] border border-[color:var(--outline-variant)] bg-[color:var(--surface-container)] p-4 text-sm leading-relaxed text-[color:var(--on-surface-variant)]">
                <div className="mb-3 flex min-w-0 items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#2d4d12] dark:text-[#C8F169]" />
                  <p className="min-w-0 flex-1 break-words">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-gutter py-16 md:py-20">
        <div className="max-w-xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#2d4d12] dark:text-[#C8F169]">
            FAQs
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#111d14] dark:text-[color:var(--primary)] md:text-4xl">
            Questions Before You Start
          </h2>
        </div>

        <div className="mt-8 space-y-3">
          {faqs.map((faq, index) => (
            <details key={faq.question} open={index === 0} className="group rounded-[22px] border border-[color:var(--outline-variant)] bg-[color:var(--surface-container)] p-4 md:p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-medium text-[color:var(--primary)]">
                <span>{faq.question}</span>
                <ChevronRight className="h-4 w-4 shrink-0 text-[color:var(--on-surface-variant)] transition-transform duration-200 group-open:rotate-90" />
              </summary>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[color:var(--on-surface-variant)]">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-gutter pb-20 pt-8 md:pb-24">
        <div className="rounded-[30px] border border-[color:var(--outline-variant)] bg-[color:var(--surface-container)] p-8 md:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#2d4d12] dark:text-[#C8F169]">
                Build with us
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#111d14] dark:text-[color:var(--primary)] md:text-4xl">
                Have an App Idea? Let’s Build It.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[color:var(--on-surface-variant)]">
                Tell us what you want to build, and we’ll help you define the right approach, features, and budget.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact?package=app-development"
                className="inline-flex items-center justify-center rounded-lg bg-[#C8F169] px-5 py-3 text-sm font-semibold text-[#151f00] transition-transform duration-200 hover:-translate-y-0.5"
              >
                Get an App Quote
              </Link>

              <a
                href="https://wa.me/15550192834"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[color:var(--outline-variant)] bg-[color:var(--surface-container-low)] px-5 py-3 text-sm font-semibold text-[color:var(--primary)] transition-colors hover:border-[#C8F169] hover:text-[#C8F169]"
              >
                <MessageSquareText className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="mt-8 flex items-center gap-2 text-sm text-[color:var(--on-surface-variant)]">
            <Sparkles className="h-4 w-4 text-[#2d4d12] dark:text-[#C8F169]" />
            <span>Define the right product. Build the right app.</span>
          </div>
        </div>
      </section>
    </div>
  );
}
