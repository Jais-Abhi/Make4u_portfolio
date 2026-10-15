export function DevelopmentProcess({ steps }) {
  return (
    <section className="mx-auto max-w-7xl px-gutter py-16 md:py-20">
      <div className="max-w-2xl">
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[color:var(--primary-container)]">
          From first conversation to launch
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[color:var(--primary)] md:text-4xl">
          Our Development Process
        </h2>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
        {steps.map((step, index) => (
          <div key={step.title} className="relative rounded-[24px] border border-[color:var(--outline-variant)] bg-[color:var(--surface-container)] p-5">
            <div className="mb-4 flex items-center justify-between">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[color:var(--primary-container)] text-xs font-semibold text-[color:var(--on-primary)]">
                0{index + 1}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-[color:var(--primary)]">{step.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-[color:var(--on-surface-variant)]">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
