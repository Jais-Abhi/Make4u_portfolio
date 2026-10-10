import { ArrowUpRight, Laptop, Megaphone, Network } from "lucide-react";

export function AboutPreview() {
  const features = [
    {
      icon: Laptop,
      tag: "Core Product",
      title: "We build digital products and websites.",
      description:
        "From high-conversion corporate web presences to tailor-made web applications, engineered for maximum performance, responsiveness, and speed.",
    },
    {
      icon: Megaphone,
      tag: "Growth & Identity",
      title: "We help businesses present and promote their services.",
      description:
        "Sharp visual collateral, targeted SEO strategies, and tailored commercial media designed to capture inbound market share and build trust.",
    },
    {
      icon: Network,
      tag: "Operations",
      title: "We connect useful tools to simplify business operations.",
      description:
        "Automating customer workflows, WhatsApp conversational funnels, and CRM integrations to eliminate repetitive operational overhead.",
    },
  ];

  return (
    <section
      id="about"
      className="w-full py-20 md:py-28 px-gutter bg-surface-container-low border-y border-outline-variant transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-lg">
          <div className="max-w-2xl flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container border border-outline-variant mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
              <span className="font-label-sm text-label-sm text-primary-container uppercase tracking-widest font-semibold">
                ABOUT WORK4U
              </span>
            </div>
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary font-semibold tracking-tight">
              Your digital partner.
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-4 leading-relaxed">
              Work4U Digital Solutions helps businesses build their online
              presence, create professional content and simplify everyday work
              through practical digital solutions.
            </p>
          </div>

          <a
            href="#services"
            className="inline-flex items-center gap-2 text-primary font-label-lg text-label-lg font-semibold hover:text-primary-container transition-colors group shrink-0"
          >
            Learn More About Us{" "}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* 3 Feature Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="flex flex-col p-space-lg rounded-lg bg-surface-container border border-outline-variant group hover:border-primary-container/60 hover:-translate-y-1 transition-all duration-300 shadow-sm"
              >
                <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary-container mb-6 border border-outline-variant group-hover:scale-110 transition-transform">
                  <Icon className="h-6 w-6 text-primary-container" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-1.5 h-1.5 rounded-sm bg-primary-container"></span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">
                    {feature.tag}
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary font-semibold leading-snug">
                  {feature.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-3 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
