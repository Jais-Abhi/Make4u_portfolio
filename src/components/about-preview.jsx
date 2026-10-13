import Link from "next/link";

export function AboutPreview() {
  const reasons = [
    {
      number: "01",
      title: "Built Around Your Needs",
      description:
        "We take time to understand your business and tailor our solutions to your goals.",
    },
    {
      number: "02",
      title: "Simple, Clear Communication",
      description:
        "No unnecessary complexity or confusing technical jargon. Just clear conversations and practical solutions.",
    },
    {
      number: "03",
      title: "One Partner, Less Hassle",
      description:
        "Work with one team that understands your business and helps bring your digital needs together.",
    },
    {
      number: "04",
      title: "Here Beyond Launch",
      description:
        "We aim to build lasting relationships and provide ongoing support as your business evolves.",
    },
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
        <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <div className="max-w-3xl">
            {/* <div className="inline-flex items-center gap-2 rounded-full border border-outline-variant bg-surface-container px-3 py-1.5 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-container" />
              <span className="font-label-sm text-label-sm uppercase tracking-[0.18em] text-primary-container font-semibold">
                ABOUT WORK4U
              </span>
            </div> */}

            <h2 className="mt-5 max-w-2xl font-headline-lg-mobile text-headline-lg-mobile text-primary tracking-tight md:text-headline-lg md:font-headline-lg lg:text-[2.4rem] lg:leading-[1.05] lg:tracking-[-0.04em]">
              Your Business Matters. <span className="text-primary-container">That's Why We Work for You.</span>
            </h2>

            <p className="mt-5 max-w-2xl text-body-xl leading-relaxed text-on-surface-variant lg:text-[1.125rem] lg:leading-8">
              At Work4U Digital Solutions, we believe technology should make running a
              business easier, not more complicated. We work closely with you to
              understand your goals, find the right solutions, and turn your ideas into
              meaningful digital experiences. From strategy and design to websites,
              automation, and ongoing support, we help bring clarity and momentum to the
              digital side of your business.
            </p>

            <p className="mt-4 max-w-2xl text-body-md leading-relaxed text-on-surface-variant lg:text-[1.05rem] lg:leading-8">
              <span className="font-semibold text-primary">Your goals guide our work.</span>{" "}
              Your customers inspire our approach. And your growth is what we work towards.
              We focus on practical, sustainable solutions that fit your business today
              and support where you want to go next.
            </p>

            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary-container px-5 py-3 text-label-lg font-semibold text-on-primary-fixed shadow-sm transition-all duration-200 hover:brightness-105 active:scale-[0.99]"
            >
              Get to Know Us
              <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-4xl bg-primary-container/5 blur-2xl" aria-hidden="true" />
            <div className="relative rounded-2xl border border-outline-variant bg-surface-container p-4 shadow-md md:p-6">
              <div className="mb-4 flex items-center justify-between border-b border-outline-variant/60 pb-3">
                <span className="font-label-sm text-label-sm uppercase tracking-[0.18em] text-on-surface-variant">
                  Why choose us
                </span>
                <span className="font-label-md text-label-md text-primary-container">
                  Partnership
                </span>
              </div>

              <div className="grid gap-3">
                {reasons.map((reason) => (
                  <div
                    key={reason.number}
                    className="rounded-xl border border-outline-variant/70 bg-surface-container-low p-4 transition-colors duration-200 hover:border-primary-container/50 hover:bg-surface-container"
                  >
                    <div className="flex items-start gap-3">
                      <span className="font-label-md text-label-md text-primary-container">
                        {reason.number}
                      </span>
                      <div className="min-w-0">
                        <h3 className="font-headline-sm text-headline-sm text-primary font-semibold leading-tight">
                          {reason.title}
                        </h3>
                        <p className="mt-2 font-body-sm text-body-sm leading-relaxed text-on-surface-variant">
                          {reason.description}
                        </p>
                      </div>
                    </div>
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
