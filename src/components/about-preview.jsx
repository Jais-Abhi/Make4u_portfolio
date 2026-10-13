import Link from "next/link";

export function AboutPreview() {
  const stats = [
    { value: "4+", label: "Years of digital support" },
    { value: "50+", label: "Projects shaped for growth" },
    { value: "100%", label: "Business-first thinking" },
  ];

  return (
    <section
      id="about"
      className="relative w-full overflow-hidden border-y border-outline-variant bg-surface-container-low px-gutter py-20 transition-colors duration-200 md:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(to right, color-mix(in srgb, var(--outline-variant) 65%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in srgb, var(--outline-variant) 65%, transparent) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.15))",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-outline-variant bg-surface-container px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-container">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-container" />
            About Work4U
          </span>

          <p className="text-body-sm uppercase tracking-[0.18em] text-on-surface-variant">
            Strategic digital growth partner
          </p>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div className="max-w-3xl">
            <h2 className="max-w-[14ch] text-[clamp(2.7rem,4vw,5rem)] font-black leading-[0.9] tracking-[-0.06em] text-primary">
              Your business deserves a digital presence that works as hard as you do.
            </h2>

            <p className="mt-6 max-w-2xl text-body-xl leading-relaxed text-on-surface-variant lg:text-[1.125rem] lg:leading-8">
              At Work4U Digital Solutions, we help businesses turn ideas into clear, practical online experiences. From websites and automation to branding and ongoing support, we build smart systems that create confidence, improve customer journeys, and support long-term growth.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary-container px-5 py-3 text-label-lg font-semibold text-on-primary-fixed shadow-sm transition-all duration-200 hover:brightness-105 active:scale-[0.99]"
              >
                Get to Know Us
                <span aria-hidden="true">↗</span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-outline-variant bg-surface-container px-5 py-3 text-label-lg font-semibold text-primary transition-all duration-200 hover:border-primary-container hover:text-primary-container"
              >
                Book a Consultation
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-outline-variant bg-surface-container p-4 shadow-sm"
                >
                  <div className="text-[2rem] font-black leading-none tracking-tighter text-primary">
                    {stat.value}
                  </div>
                  <p className="mt-2 text-body-sm leading-relaxed text-on-surface-variant">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-4xl bg-primary-container/8 blur-2xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-outline-variant bg-surface-container shadow-[0_24px_70px_rgba(17,24,19,0.08)]">
              <div className="border-b border-outline-variant/70 bg-surface-container-low p-5">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm uppercase tracking-[0.18em] text-on-surface-variant">
                    Why Work4U
                  </span>
                  <span className="rounded-full border border-primary-container/40 bg-primary-container/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary-container">
                    Partnership
                  </span>
                </div>
              </div>

              <div className="space-y-4 p-5">
                {[
                  {
                    title: "Business-first strategy",
                    text: "We align every recommendation with your goals, customers, and the realities of running a business.",
                  },
                  {
                    title: "Clear communication",
                    text: "No confusing jargon, no vague timelines — just transparent guidance and practical next steps.",
                  },
                  {
                    title: "Solutions that fit",
                    text: "We design approaches that are usable, scalable, and built around what your business actually needs.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-outline-variant/70 bg-surface-container-low p-4"
                  >
                    <h3 className="text-headline-sm font-semibold leading-tight text-primary">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-body-sm leading-relaxed text-on-surface-variant">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
