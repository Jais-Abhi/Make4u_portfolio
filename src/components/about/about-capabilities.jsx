const pillars = [
  {
    num: "01",
    icon: "terminal",
    title: "Build",
    desc: "Websites, applications, landing pages, and digital tools built for speed and conversion.",
    bullets: [
      "High-performance Web Frameworks",
      "Responsive Client Portals & Web Apps",
      "Conversion-Optimized Funnels",
    ],
  },
  {
    num: "02",
    icon: "movie_edit",
    title: "Create",
    desc: "High-fidelity graphics, video assets, brand content, and commercial photography.",
    bullets: [
      "Commercial Photography & Video",
      "Design Systems & Brand Toolkits",
      "Social Content Kits & Launch Assets",
    ],
  },
  {
    num: "03",
    icon: "hub",
    title: "Connect",
    desc: "AI chatbots, WhatsApp business tools, CRM systems, and automated lead workflows.",
    bullets: [
      "Automated WhatsApp CRM Ingestion",
      "Custom AI Assistants & Support Triage",
      "Multi-Platform Data Synchronization",
    ],
  },
];

export function AboutCapabilities() {
  return (
    <section className="w-full bg-surface-container-lowest py-space-xl relative border-y border-surface-variant/40">
      <div className="max-w-7xl mx-auto px-gutter flex flex-col gap-space-xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div>
            <span className="font-label-sm text-label-sm text-primary-container tracking-widest uppercase font-semibold">
              Capability Matrix
            </span>
            <h2 className="font-headline-xl text-headline-xl text-primary mt-1">
              What We Do.
            </h2>
          </div>
          <p className="font-body-sm text-body-sm text-secondary max-w-md">
            Three specialized capabilities combined under one operational roof
            to eliminate handoff friction and fragmented vendors.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          {pillars.map((pillar) => (
            <div
              key={pillar.num}
              className="group relative flex flex-col justify-between p-space-xl bg-surface-container rounded-xl shadow-md transition-all duration-300 hover:bg-surface-container-high"
            >
              <div className="flex flex-col gap-space-md">
                <div className="flex items-center justify-between">
                  <span className="font-headline-sm text-headline-sm text-primary-container font-mono">
                    {pillar.num}
                  </span>
                  <div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary-container shadow-inner">
                    <span className="material-symbols-outlined text-2xl">
                      {pillar.icon}
                    </span>
                  </div>
                </div>
                <h3 className="font-headline-lg text-headline-lg text-primary tracking-tight mt-2">
                  {pillar.title}
                </h3>
                <p className="font-body-md text-body-md text-secondary leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="pt-space-xl mt-space-lg border-t border-surface-variant/60 flex flex-col gap-2">
                {pillar.bullets.map((b) => (
                  <div
                    key={b}
                    className="flex items-center gap-2 text-on-surface-variant font-label-md text-label-md"
                  >
                    <span className="w-1.5 h-1.5 bg-primary-container rounded-sm flex-shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
