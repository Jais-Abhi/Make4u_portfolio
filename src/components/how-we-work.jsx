import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Let's Talk",
    description:
      "Tell us about your business, your goals, and the challenges you want to solve. We listen first to understand what you need.",
  },
  {
    number: "02",
    title: "Plan It Together",
    description:
      "We define the right approach, project scope, timeline, and pricing so you know exactly what to expect before work begins.",
  },
  {
    number: "03",
    title: "Bring It to Life",
    description:
      "Our team builds your solution, shares progress, and works with you to refine the result based on your feedback.",
  },
  {
    number: "04",
    title: "Launch & Support",
    description:
      "Once approved, we launch your project and provide ongoing support according to your agreed plan.",
  },
];

export function HowWeWork() {
  return (
    <section className="relative w-full overflow-hidden border-t border-outline-variant/70 bg-surface-container-low py-20 md:py-28 px-gutter">
      <div className="absolute inset-0 opacity-60" aria-hidden="true">
        <div className="h-full w-full bg-[linear-gradient(to_right,rgba(120,132,121,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(120,132,121,0.08)_1px,transparent_1px)] bg-size-[34px_34px] mask-[radial-gradient(circle_at_center,black,transparent_92%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-outline-variant bg-surface-container px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-container">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-container" />
            HOW WE WORK
          </span>

          <h2 className="mt-5 text-headline-lg-mobile md:text-headline-lg text-primary font-semibold tracking-tight">
            Great Results Start With a Simple Process.
          </h2>

          <p className="mt-4 max-w-2xl text-body-lg text-on-surface-variant leading-relaxed">
            From the first conversation to the final launch, we keep things clear,
            collaborative, and focused on what your business needs.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 right-8 top-7 hidden h-px bg-outline-variant/80 xl:block" aria-hidden="true" />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="group relative rounded-2xl border border-outline-variant bg-surface-container p-5 shadow-[0_16px_42px_rgba(17,24,19,0.04)] transition-transform duration-200 hover:-translate-y-1 hover:border-primary-container/60 md:p-6"
              >
                <div className="mb-6 flex items-center justify-between gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-outline-variant bg-surface-container-low text-lg font-semibold text-primary-container shadow-sm">
                    {step.number}
                  </span>

                  {index < steps.length - 1 && (
                    <span className="hidden h-px flex-1 bg-outline-variant/80 xl:block" aria-hidden="true" />
                  )}
                </div>

                <div className="mb-3 flex items-center gap-2 text-primary-container">
                  <span className="h-2 w-2 rounded-full bg-primary-container" aria-hidden="true" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em]">
                    Step {step.number}
                  </span>
                </div>

                <h3 className="text-headline-sm text-primary font-semibold leading-tight">
                  {step.title}
                </h3>

                <p className="mt-3 text-body-sm text-on-surface-variant leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-outline-variant bg-surface-container p-5 shadow-[0_14px_38px_rgba(17,24,19,0.04)] md:p-7">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <p className="text-headline-sm text-primary font-semibold">
                Have a Project in Mind?
              </p>
              <p className="mt-2 text-body-md text-on-surface-variant leading-relaxed">
                Let&apos;s talk about your goals and find the right solution for your business.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary-container px-5 py-3 text-label-lg font-semibold text-on-primary-fixed transition-all duration-200 hover:brightness-105 active:translate-y-px"
            >
              Let&apos;s Talk About Your Project
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
