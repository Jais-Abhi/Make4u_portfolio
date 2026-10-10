export function AboutHero() {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-gutter pt-space-xl pb-space-xl overflow-hidden">
      {/* Ambient Backdrop Accents */}
      <div className="absolute -top-24 right-0 w-96 h-96 bg-primary-container/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-surface-container-high/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
        {/* Left: Heading & Lead */}
        <div className="lg:col-span-8 flex flex-col gap-space-lg">
          {/* Badge */}
          <div className="inline-flex items-center gap-space-xs self-start px-3 py-1 bg-surface-container-low rounded border border-outline-variant/40 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse" />
            <span className="font-label-sm text-label-sm tracking-widest text-primary-container uppercase font-semibold">
              About The Agency
            </span>
          </div>

          {/* Display Heading */}
          <h1 className="font-display text-display text-primary tracking-tight max-w-3xl leading-[1.08]">
            We make digital work{" "}
            <span className="text-primary-container italic font-normal">
              simpler.
            </span>
          </h1>

          {/* Lead Paragraph */}
          <p className="font-body-lg text-body-lg text-secondary max-w-2xl leading-relaxed">
            Work4U Digital Solutions brings development, creative services, and
            business automation together to help businesses establish a stronger
            digital presence.
          </p>
        </div>

        {/* Right: Stat Strip */}
        <div className="lg:col-span-4 flex flex-col gap-space-md w-full mt-4 lg:mt-8">
          <div className="p-space-lg bg-surface-container rounded-xl shadow-md border-t-2 border-primary-container">
            <div className="flex items-center justify-between pb-space-sm border-b border-surface-variant/60">
              <span className="font-label-md text-label-md uppercase tracking-wider text-secondary">
                System Methodology
              </span>
              <span className="font-label-sm text-label-sm text-primary-container font-mono">
                STABLE // 2025
              </span>
            </div>
            <div className="pt-space-md flex flex-col gap-space-sm">
              <div className="flex items-baseline justify-between">
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Core Disciplines
                </span>
                <span className="font-headline-sm text-headline-sm text-primary font-mono">
                  03
                </span>
              </div>
              <div className="flex items-baseline justify-between">
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Execution Model
                </span>
                <span className="font-body-sm text-body-sm text-primary font-medium">
                  Modular End-to-End
                </span>
              </div>
              <div className="flex items-baseline justify-between">
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Philosophy
                </span>
                <span className="font-body-sm text-body-sm text-primary-container font-semibold">
                  Utility First
                </span>
              </div>
            </div>
          </div>

          <div className="px-space-lg py-space-md bg-surface-container-low rounded-xl flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-space-sm">
              <span className="material-symbols-outlined text-primary-container text-xl">
                bolt
              </span>
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">
                No bloat. No jargon. Pure execution.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
