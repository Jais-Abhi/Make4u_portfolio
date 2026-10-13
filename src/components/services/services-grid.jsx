import Link from "next/link";
import {
  Globe,
  Smartphone,
  TrendingUp,
  Palette,
  Camera,
  Bot,
  ArrowUpRight,
} from "lucide-react";

export function ServicesGrid() {
  const services = [
    {
      badge: "Development",
      icon: Globe,
      code: "01 / Architecture",
      title: "Website Development",
      description:
        "Professional websites that help customers understand your business and get in touch. Built for maximum speed, SEO readiness, and conversion.",
      deliverables: [
        "Custom Business Websites & Redesigns",
        "High-Converting Landing Pages",
        "Secure E-commerce Systems",
      ],
      ctaText: "Explore Website Development",
      href: "/services/website-development",
    },
    {
      badge: "Engineering",
      icon: Smartphone,
      code: "02 / Software",
      title: "App Development",
      description:
        "Applications and digital tools built around your business requirements. Scalable, performant stacks designed to power internal tools and customer platforms.",
      deliverables: [
        "iOS & Android Mobile Applications",
        "Interactive Web Applications & Portals",
        "Custom Dashboards & Database Integrations",
      ],
      ctaText: "Explore App Development",
      href: "/services/app-development",
    },
    {
      badge: "Marketing",
      icon: TrendingUp,
      code: "03 / Growth",
      title: "SEO & Digital Growth",
      description:
        "Improve your website's visibility and help more potential customers discover your business. Data-driven optimization targeted at high-intent commercial traffic.",
      deliverables: [
        "Deep Technical SEO & Core Web Vitals",
        "Keyword Strategy & Competitor Audits",
        "Local Google Business Rank Domination",
      ],
      ctaText: "Explore SEO Services",
      href: "/services/seo-digital-growth",
    },
    {
      badge: "Creative",
      icon: Palette,
      code: "04 / Visuals",
      title: "Graphic Design & Video",
      description:
        "Create professional graphics, social media content, videos and promotional materials. Consistent brand assets that captivate audiences and lift CTR.",
      deliverables: [
        "Brand Identity & Graphic Assets",
        "High-Engagement Social Creatives & Banners",
        "Short-Form Video Editing (Reels, TikTok)",
      ],
      ctaText: "Explore Creative Services",
      href: "/services/graphic-design-video-editing",
    },
    {
      badge: "Media",
      icon: Camera,
      code: "05 / Production",
      title: "Photography & Videography",
      description:
        "Capture products, businesses, events and promotional content through professional production. Sharp commercial imagery tailored for digital and print deployment.",
      deliverables: [
        "Studio & On-Location Product Shoots",
        "Corporate Portraits & Workspace Stories",
        "Full Commercial Video Production & Color Grading",
      ],
      ctaText: "Explore Photography & Videography",
      href: "/services/photography-videography",
    },
    {
      badge: "Automation",
      icon: Bot,
      code: "06 / AI Ops",
      title: "AI & Business Integration",
      description:
        "Connect chatbots, WhatsApp, CRM systems and lead workflows to make business operations more organized. Eliminate manual rep tasks with autonomous intelligence.",
      deliverables: [
        "Conversational AI Chatbots & RAG Systems",
        "WhatsApp CRM & Instant Inquiry Dispatch",
        "End-to-End Zapier & Make Workflow Pipelines",
      ],
      ctaText: "Explore AI & Integration",
      href: "/services/ai-business-integration",
    },
  ];

  return (
    <section className="px-gutter pb-space-xl max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, idx) => {
          const Icon = service.icon;
          return (
            <div
              key={idx}
              className="group relative flex flex-col justify-between p-8 rounded-xl bg-surface-container border border-outline-variant shadow-md hover:bg-surface-container-high hover:border-primary-container/60 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex flex-col gap-5">
                {/* Header: Badge & Icon */}
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded bg-surface-container-lowest font-label-sm text-label-sm text-primary-container uppercase tracking-wider font-semibold border border-outline-variant/40">
                    {service.badge}
                  </span>
                  <Icon className="h-6 w-6 text-on-surface-variant group-hover:text-primary-container transition-colors" />
                </div>

                {/* Subtitle code & Main title */}
                <div>
                  <span className="font-label-sm text-label-sm text-on-surface-variant/70 tracking-widest uppercase font-mono">
                    {service.code}
                  </span>
                  <h2 className="font-headline-md text-headline-md text-primary mt-1 group-hover:text-primary-container transition-colors font-semibold">
                    {service.title}
                  </h2>
                </div>

                {/* Description */}
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {service.description}
                </p>

                {/* Included Deliverables checklist */}
                <div className="pt-4 flex flex-col gap-3 border-t border-outline-variant/30">
                  <span className="font-label-sm text-label-sm text-on-surface uppercase tracking-wider font-semibold">
                    Included Deliverables:
                  </span>
                  <ul className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant">
                    {service.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-sm bg-primary-container shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Action Button */}
              <div className="pt-8 mt-6">
                <Link
                  href={service.href || "/contact"}
                  className="inline-flex items-center justify-between w-full px-5 py-3 rounded-lg bg-surface-container-lowest border border-outline-variant/40 text-primary font-label-md text-label-md group-hover:bg-primary-container group-hover:text-on-primary-fixed transition-all shadow-sm"
                >
                  <span>{service.ctaText}</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
