export function AboutHero() {
  const pillars = [
    "Strategy",
    "Design",
    "Automation",
    "Support",
  ];

  return (
    <section className="relative w-full overflow-hidden border-b border-outline-variant bg-surface-container-low px-gutter py-20 md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "linear-gradient(to right, color-mix(in srgb, var(--outline-variant) 60%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in srgb, var(--outline-variant) 60%, transparent) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(circle at center, black 35%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="relative">
            

            <h1 className="max-w-xl text-4xl font-semibold leading-tight tracking-[-0.06em] text-primary md:text-5xl">
              We help businesses grow with clearer digital systems.
            </h1>

            <p className="mt-5 max-w-xl text-base leading-8 text-on-surface-variant md:text-lg">
              Work4U Digital Solutions brings strategy, design, development, and
              support together to help businesses build a digital presence that feels
              intentional, consistent, and easy to trust.
            </p>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {pillars.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-outline-variant bg-surface-container px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-on-surface-variant"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-4xl bg-primary-container/8 blur-3xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-outline-variant bg-surface-container p-5 shadow-[0_20px_60px_rgba(17,24,19,0.08)] md:p-6">
              <div className="flex items-center justify-between border-b border-outline-variant/70 pb-4">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-on-surface-variant">
                  Our approach
                </span>
                <span className="rounded-full border border-primary-container/40 bg-primary-container/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary-container">
                  Human-led
                </span>
              </div>

              <div className="mt-5 space-y-4">
                <div className="rounded-2xl border border-outline-variant/70 bg-surface-container-low p-4">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-on-surface-variant">
                    01 — Understand
                  </div>
                  <p className="mt-2 text-sm leading-7 text-on-surface-variant">
                    We start by learning how your business works, what customers expect,
                    and what matters most to your growth.
                  </p>
                </div>

                <div className="rounded-2xl border border-outline-variant/70 bg-surface-container-low p-4">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-on-surface-variant">
                    02 — Build
                  </div>
                  <p className="mt-2 text-sm leading-7 text-on-surface-variant">
                    We turn that clarity into systems and experiences that are practical,
                    useful, and built to last.
                  </p>
                </div>

                <div className="rounded-2xl border border-outline-variant/70 bg-surface-container-low p-4">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-on-surface-variant">
                    03 — Support
                  </div>
                  <p className="mt-2 text-sm leading-7 text-on-surface-variant">
                    We stay involved after launch to refine, improve, and keep everything
                    moving smoothly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
