const deliverables = [
  {
    icon: "devices",
    title: "Professional digital experiences",
    desc: "Engineered against modern, responsive web standards for immediate responsiveness, low latency, and cross-device parity.",
    tag: "SPECIFICATION",
    badge: "AAA ACCESSIBLE",
    wide: false,
  },
  {
    icon: "format_quote",
    title: "Clear presentation of products and services",
    desc: "Structured copywriting and architectural layout hierarchy that removes friction and guides buyers to take action.",
    tag: "STRUCTURE",
    badge: "CONVERSION-LED",
    wide: false,
  },
  {
    icon: "perm_media",
    title: "Content for your online presence",
    desc: "Ready-to-publish digital media designed specifically for your brand voice across website channels, social, and search.",
    tag: "FORMAT",
    badge: "PRODUCTION-READY",
    wide: false,
  },
  {
    icon: "alt_route",
    title: "Connected business tools and organized leads",
    desc: "Automatic synchronization to your CRM, WhatsApp channels, and instant lead notification streams so zero prospective clients fall through manual operational cracks.",
    tag: "INTEGRATION",
    badge: "ZERO MANUAL ENTRY",
    wide: true,
  },
  {
    icon: "verified_user",
    title: "Ongoing maintenance where agreed",
    desc: "Reliable, SLA-backed technical support keeping your systems updated, monitored, protected, and fully functional.",
    tag: "CONTINUITY",
    badge: "UPTIME GUARANTEED",
    wide: false,
  },
];

export function AboutDeliverables() {
  return (
    <section className="w-full max-w-7xl mx-auto px-gutter py-space-xl">
      {/* Header */}
      <div className="flex flex-col gap-space-lg mb-space-xl">
        <div className="inline-flex items-center gap-space-xs self-start px-3 py-1 bg-surface-container rounded">
          <span className="font-label-sm text-label-sm text-primary-container uppercase tracking-widest font-semibold">
            Measurable Results
          </span>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md">
          <h2 className="font-headline-xl text-headline-xl text-primary tracking-tight max-w-xl">
            What We Deliver.
          </h2>
          <p className="font-body-md text-body-md text-secondary max-w-md">
            Every project is scoped around tangible business utility, eliminating
            vague billables and cosmetic work that doesn&apos;t yield measurable
            operations.
          </p>
        </div>
      </div>

      {/* Asymmetrical 5-Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
        {deliverables.map((d) => (
          <div
            key={d.title}
            className={`p-space-lg bg-surface-container rounded-xl shadow-sm flex flex-col justify-between hover:bg-surface-container-high transition-colors${
              d.wide ? " lg:col-span-2" : ""
            }`}
          >
            <div>
              <div className="w-8 h-8 rounded-lg bg-surface-container-low flex items-center justify-center text-primary-container mb-space-md">
                <span className="material-symbols-outlined text-lg">
                  {d.icon}
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-space-xs">
                {d.title}
              </h3>
              <p className="font-body-sm text-body-sm text-secondary leading-relaxed">
                {d.desc}
              </p>
            </div>
            <div className="mt-space-lg pt-space-sm border-t border-surface-variant/40 flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
              <span>{d.tag}</span>
              <span className="text-primary-container font-mono">{d.badge}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
