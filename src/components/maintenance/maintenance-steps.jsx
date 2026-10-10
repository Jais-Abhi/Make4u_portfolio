import { CheckCircle2 } from "lucide-react";

export function MaintenanceSteps() {
  const steps = [
    {
      num: "01",
      title: "Select Duration",
      description:
        "Pick your billing cadence (Quarterly, Half-Yearly, or Yearly). Complete verification and receive your customized client dashboard keys.",
      feature: "Immediate active onboarding",
    },
    {
      num: "02",
      title: "Submit Requests",
      description:
        "Submit text updates, bug alerts, or file replacements via the dedicated portal or direct support inbox with clear specifications.",
      feature: "4h SLA confirmation guarantee",
    },
    {
      num: "03",
      title: "Review & Deploy",
      description:
        "Our engineering team audits changes in staging, executes automated regression tests, and deploys updates live with zero downtime.",
      feature: "Verified production sign-off",
    },
  ];

  return (
    <section className="w-full py-20 bg-surface-container-lowest border-t border-surface-variant transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-gutter">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-label-md text-label-md text-primary-container uppercase tracking-wider font-semibold">
            Frictionless Lifecycle
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight font-bold mt-1">
            How Maintenance Works
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
            From sign-up to deployment, three straightforward operational steps
            keep your systems healthy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-8 rounded-xl bg-surface-container border border-surface-variant flex flex-col relative shadow-sm hover:border-primary-container/40 transition-colors"
            >
              <span className="font-display text-display text-surface-variant dark:text-zinc-700/60 font-bold leading-none mb-4 select-none">
                {step.num}
              </span>
              <h3 className="font-headline-sm text-headline-sm text-primary font-semibold mb-2">
                {step.title}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                {step.description}
              </p>
              <div className="mt-6 pt-4 border-t border-surface-variant text-on-surface-variant font-label-sm text-label-sm flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary-container shrink-0" />
                <span>{step.feature}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
