import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function ServicesOverview() {
  const services = [
    {
      code: "01 / WEB",
      title: "Website Development",
      description:
        "Professional websites that turn visitors into enquiries with polished messaging and seamless UX.",
      feature: "Fast, SEO-ready, responsive",
      tag: "Brand presence",
      accent: "from-emerald-400/30 via-emerald-500/10 to-transparent",
      glow: "bg-emerald-400/45",
      badge: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
      dot: "bg-emerald-500",
      icon: "from-emerald-300 via-lime-200 to-emerald-400",
    },
    {
      code: "02 / APPS",
      title: "App Development",
      description:
        "Applications and digital tools built around your business requirements and customer journey.",
      feature: "Custom architectures",
      tag: "Product build",
      accent: "from-cyan-400/30 via-sky-500/10 to-transparent",
      glow: "bg-cyan-400/45",
      badge: "bg-cyan-500/10 text-cyan-700 dark:text-cyan-300",
      dot: "bg-cyan-500",
      icon: "from-cyan-300 via-sky-200 to-cyan-400",
    },
    {
      code: "03 / SEO",
      title: "SEO & Digital Growth",
      description:
        "Improve your search visibility and help more qualified buyers discover your business online.",
      feature: "High-intent conversion focus",
      tag: "Growth engine",
      accent: "from-violet-400/30 via-fuchsia-500/10 to-transparent",
      glow: "bg-violet-400/45",
      badge: "bg-violet-500/10 text-violet-700 dark:text-violet-300",
      dot: "bg-violet-500",
      icon: "from-violet-300 via-fuchsia-200 to-violet-400",
    },
    {
      code: "04 / CREATIVE",
      title: "Graphic Design & Video Editing",
      description:
        "Create standout visuals, campaigns, and motion content that keep your brand memorable.",
      feature: "Brand-consistent assets",
      tag: "Creative system",
      accent: "from-amber-300/30 via-orange-500/10 to-transparent",
      glow: "bg-amber-300/45",
      badge: "bg-amber-500/10 text-amber-700 dark:text-amber-300",
      dot: "bg-amber-500",
      icon: "from-amber-200 via-orange-200 to-amber-400",
    },
    {
      code: "05 / MEDIA",
      title: "Photography & Videography",
      description:
        "Capture polished product, brand, and event content that feels premium across every channel.",
      feature: "High-resolution capture",
      tag: "Visual storytelling",
      accent: "from-pink-400/30 via-rose-500/10 to-transparent",
      glow: "bg-pink-400/45",
      badge: "bg-pink-500/10 text-pink-700 dark:text-pink-300",
      dot: "bg-pink-500",
      icon: "from-pink-300 via-rose-200 to-pink-400",
    },
    {
      code: "06 / AI & OPS",
      title: "AI & Business Integration",
      description:
        "Connect CRM, chats, automations, and lead flows so your team works faster and smarter.",
      feature: "Automated customer routing",
      tag: "Automation flow",
      accent: "from-teal-400/30 via-emerald-500/10 to-transparent",
      glow: "bg-teal-400/45",
      badge: "bg-teal-500/10 text-teal-700 dark:text-teal-300",
      dot: "bg-teal-500",
      icon: "from-teal-300 via-emerald-200 to-teal-400",
    },
  ];

  return (
    <section id="services" className="relative w-full px-gutter py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(35,92,57,0.14),_transparent_35%)] dark:bg-[radial-gradient(circle_at_top,_rgba(200,241,105,0.12),_transparent_28%)]" />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-space-xl">
        <div className="max-w-3xl flex flex-col items-start">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[color:var(--outline-variant)] bg-[color:var(--surface-container)]/80 px-3 py-1.5 shadow-sm backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-[color:var(--primary-container)]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[color:var(--primary-container)]">
              Our services
            </span>
          </div>

          <h2 className="text-headline-lg-mobile md:text-headline-lg text-primary font-semibold tracking-tight">
            What does your business need?
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-[color:var(--on-surface-variant)] md:text-lg">
            From building your website to growing your online presence, we help you find the right digital solutions for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-gutter md:grid-cols-2 lg:grid-cols-3">
          {services.map((svc, idx) => (
            <Link
              key={idx}
              href="/services"
              className="service-card group relative flex min-h-[360px] flex-col justify-between overflow-hidden rounded-[28px] border border-[color:var(--outline-variant)] bg-[color:var(--surface-container)] p-space-xl shadow-[0_18px_45px_rgba(18,29,22,0.05)] transition-all duration-500 hover:-translate-y-2 hover:border-[color:var(--primary-container)] hover:shadow-[0_25px_55px_rgba(35,92,57,0.18)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.22)]"
            >
              <div className={`absolute inset-x-0 top-0 h-28 bg-gradient-to-br ${svc.accent}`} />
              <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full blur-3xl ${svc.glow} transition-transform duration-700 group-hover:scale-125`} />

              <div className="relative z-10 flex flex-col">
                <div className="mb-6 flex items-center justify-between">
                  <span className="inline-flex rounded-full border border-[color:var(--outline-variant)] bg-[color:var(--surface-container-lowest)]/80 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-[color:var(--on-surface-variant)] backdrop-blur-sm">
                    {svc.code}
                  </span>

                  <div className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${svc.icon} text-[color:var(--on-primary)] shadow-lg shadow-black/10`}>
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                </div>

                <div className={`mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 px-2.5 py-1.5 ${svc.badge}`}>
                  <span className={`h-2 w-2 rounded-full ${svc.dot}`} />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em]">
                    {svc.tag}
                  </span>
                </div>

                <h3 className="mb-3 text-headline-sm font-semibold tracking-tight text-[color:var(--primary)]">
                  {svc.title}
                </h3>
                <p className="text-sm leading-relaxed text-[color:var(--on-surface-variant)] md:text-[15px]">
                  {svc.description}
                </p>
              </div>

              <div className="relative z-10 mt-8">
                <div className="mb-3 flex items-center justify-between text-[10px] font-medium uppercase tracking-[0.2em] text-[color:var(--on-surface-variant)]">
                  <span>Outcome</span>
                  <span className="text-[color:var(--primary)]">Explore</span>
                </div>

                <div className="group/feature relative flex items-center justify-between overflow-hidden rounded-2xl border border-[color:var(--outline-variant)] bg-[color:var(--surface-container-low)] px-3.5 py-3 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-[color:var(--primary-container)] group-hover:bg-[color:var(--surface-container)] group-hover:shadow-[0_10px_25px_rgba(35,92,57,0.08)]">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[color:var(--primary-container)]/8 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="relative text-sm font-medium text-[color:var(--on-surface)] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[color:var(--primary)]">
                    {svc.feature}
                  </span>
                  <span className="relative text-[10px] font-semibold uppercase tracking-[0.18em] text-[color:var(--primary-container)] transition-all duration-300 group-hover:translate-x-1 group-hover:scale-105">
                    View
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
