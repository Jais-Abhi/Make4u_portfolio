export function DevelopmentProcess({ steps }) {
  return (
    <section className="mx-auto max-w-7xl overflow-x-hidden px-gutter py-12 md:py-20">
      <div className="max-w-2xl">
        <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#2d4d12] dark:text-[#C8F169] sm:text-[10px]">
          From first conversation to launch
        </p>
        <h2 className="mt-4 text-2xl font-semibold tracking-tight text-[color:var(--primary)] sm:text-3xl md:text-4xl">
          Our Development Process
        </h2>
      </div>

      <div className="mt-8 grid min-w-0 gap-4 md:mt-10 md:grid-cols-2 xl:grid-cols-5">
        {steps.map((step, index) => (
          <div key={step.title} className="relative min-w-0 rounded-[20px] border border-[color:var(--outline-variant)] bg-[color:var(--surface-container)] p-4 md:rounded-[24px] md:p-5">
            <div className="mb-3 flex min-w-0 items-center gap-3 md:mb-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#2d4d12] text-[10px] font-semibold text-white dark:bg-[#C8F169] dark:text-[#151f00] md:h-9 md:w-9 md:text-xs">
                0{index + 1}
              </span>
              <h3 className="min-w-0 flex-1 text-base font-semibold leading-snug text-[color:var(--primary)] break-words md:text-lg">
                {step.title}
              </h3>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-[color:var(--on-surface-variant)] md:mt-3 md:text-sm">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
