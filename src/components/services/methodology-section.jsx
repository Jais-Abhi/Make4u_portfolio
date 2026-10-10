export function MethodologySection() {
  const phases = [
    {
      phase: "PHASE 01",
      title: "Discovery",
      description:
        "Technical scoping, competitor mapping, and defined key performance goals.",
    },
    {
      phase: "PHASE 02",
      title: "Execution",
      description:
        "Iterative production sprints, transparent previews, and stakeholder review.",
    },
    {
      phase: "PHASE 03",
      title: "QA & Deploy",
      description:
        "Rigorous stress testing, conversion tracking verification, and launch signoff.",
    },
    {
      phase: "PHASE 04",
      title: "Handover",
      description:
        "Full documentation, credential handoff, and optional transition to maintenance.",
    },
  ];

  return (
    <section className="px-gutter py-space-xl max-w-7xl mx-auto w-full">
      <div className="p-8 md:p-12 rounded-xl bg-surface-container-lowest border border-outline-variant shadow-md flex flex-col gap-space-lg">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div>
            <span className="font-label-sm text-label-sm text-primary-container tracking-widest uppercase font-semibold">
              Our Methodology
            </span>
            <h3 className="font-headline-lg text-headline-lg text-primary tracking-tight font-bold mt-1">
              Built for speed, structured for results
            </h3>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md leading-relaxed">
            Every capability above follows our standardized sprint-based
            engagement model to deliver commercial impact with zero guesswork.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pt-4">
          {phases.map((p, idx) => (
            <div
              key={idx}
              className="p-5 rounded-lg bg-surface-container border border-outline-variant/60 flex flex-col gap-2 hover:border-primary-container/40 transition-colors"
            >
              <div className="font-label-sm text-label-sm text-primary-container font-semibold font-mono">
                {p.phase}
              </div>
              <h4 className="font-headline-sm text-headline-sm text-primary font-semibold">
                {p.title}
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
