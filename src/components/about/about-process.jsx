import {
  Ear,
  ClipboardCheck,
  Wrench,
  RefreshCw,
} from "lucide-react";

const steps = [
  {
    stage: "Stage 01",
    Icon: Ear,
    title: "Understand Needs",
    desc: "We listen to your business goals, target audience profile, and operational bottlenecks before writing a line of code or drafting designs.",
    output: "Output: Discovery Brief",
    active: true,
  },
  {
    stage: "Stage 02",
    Icon: ClipboardCheck,
    title: "Agree Scope & Costs",
    desc: "A transparent itemized proposal outlining exact deliverables, milestones, and fixed pricing before any work begins.",
    output: "Output: Fixed Scope Agreement",
    active: false,
  },
  {
    stage: "Stage 03",
    Icon: Wrench,
    title: "Deliver Work",
    desc: "High-craft execution with regular progress updates and review checkpoints, ensuring total alignment throughout the build cycle.",
    output: "Output: Production Staging",
    active: false,
  },
  {
    stage: "Stage 04",
    Icon: RefreshCw,
    title: "Support & Maintain",
    desc: "Seamless deployment handover with full access, documentation, and optional structured ongoing support subscriptions.",
    output: "Output: Live Asset & Care Plan",
    active: false,
  },
];

export function AboutProcess() {
  return (
    <section className="w-full bg-surface-container-lowest py-space-xl border-t border-surface-variant/40">
      <div className="max-w-7xl mx-auto px-gutter flex flex-col gap-space-xl">
        {/* Header */}
        <div className="flex flex-col gap-space-xs">
          <span className="font-label-sm text-label-sm text-primary-container uppercase tracking-widest font-semibold">
            Direct Collaboration
          </span>
          <h2 className="font-headline-xl text-headline-xl text-primary">
            How We Work.
          </h2>
          <p className="font-body-md text-body-md text-secondary max-w-xl">
            A predictable, transparent engagement model with defined stages and
            no surprise invoices.
          </p>
        </div>

        {/* 4-Step Process Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
          {steps.map(({ stage, Icon, title, desc, output, active }) => (
            <div
              key={stage}
              className={`p-space-lg bg-surface-container rounded-xl flex flex-col justify-between relative shadow-sm border-l-2 ${
                active ? "border-primary-container" : "border-surface-variant"
              }`}
            >
              <div className="flex flex-col gap-space-sm">
                <div className="flex items-center justify-between">
                  <span
                    className={`font-label-sm text-label-sm font-mono uppercase tracking-widest font-bold ${
                      active ? "text-primary-container" : "text-secondary"
                    }`}
                  >
                    {stage}
                  </span>
                  <Icon className="h-4 w-4 text-secondary" />
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mt-2">
                  {title}
                </h3>
                <p className="font-body-sm text-body-sm text-secondary leading-relaxed">
                  {desc}
                </p>
              </div>
              <div className="pt-space-md mt-space-md border-t border-surface-variant/50">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                  {output}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
