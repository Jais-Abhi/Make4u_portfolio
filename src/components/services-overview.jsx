import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function ServicesOverview() {
  const services = [
    {
      code: "01 / WEB",
      title: "Website Development",
      description:
        "Professional websites that help customers understand your business and get in touch.",
      feature: "Fast, SEO-ready, responsive",
    },
    {
      code: "02 / APPS",
      title: "App Development",
      description:
        "Applications and digital tools built around your business requirements.",
      feature: "Custom architectures",
    },
    {
      code: "03 / SEO",
      title: "SEO & Digital Growth",
      description:
        "Improve your website's visibility and help more potential customers discover your business.",
      feature: "High-intent conversion focus",
    },
    {
      code: "04 / CREATIVE",
      title: "Graphic Design & Video Editing",
      description:
        "Create professional graphics, social media content, videos and promotional materials.",
      feature: "Brand-consistent assets",
    },
    {
      code: "05 / MEDIA",
      title: "Photography & Videography",
      description:
        "Capture products, businesses, events and promotional content through professional photography and video.",
      feature: "High-resolution capture",
    },
    {
      code: "06 / AI & OPS",
      title: "AI & Business Integration",
      description:
        "Connect chatbots, WhatsApp, CRM systems and lead workflows to make business operations more organized.",
      feature: "Automated customer routing",
    },
  ];

  return (
    <section id="services" className="w-full py-20 md:py-28 px-gutter">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
        {/* Section Header */}
        <div className="max-w-3xl flex flex-col items-start">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container border border-outline-variant mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
            <span className="font-label-sm text-label-sm text-primary-container uppercase tracking-widest font-semibold">
              OUR SERVICES
            </span>
          </div>
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary font-semibold tracking-tight">
            What can we help you with?
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-3 leading-relaxed">
            Choose the service your business needs. Explore what&apos;s included,
            see the available options and request a quote.
          </p>
        </div>

        {/* 6-Card Services Grid (3x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {services.map((svc, idx) => (
            <Link
              key={idx}
              href="/services"
              className="group flex flex-col justify-between p-space-xl rounded-lg bg-surface-container border border-outline-variant hover:border-primary-container hover:-translate-y-1 transition-all duration-300 shadow-sm"
            >
              <div className="flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <span className="px-2.5 py-1 rounded bg-surface-container-high border border-outline-variant font-label-sm text-label-sm text-on-surface-variant font-mono">
                    {svc.code}
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-outline group-hover:text-primary-container group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary font-semibold mb-3">
                  {svc.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {svc.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-outline-variant flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                <span>{svc.feature}</span>
                <span className="text-primary-container font-medium group-hover:underline">
                  Explore Specs →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
