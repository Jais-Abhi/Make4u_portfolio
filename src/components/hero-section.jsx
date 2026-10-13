import { ArrowUpRight, ArrowDown } from "lucide-react";

const serviceItems = [
  "Websites & Apps",
  "SEO ",
  "Graphic Design & Video Editing",
  "Photography & Videography",
  "AI Chatbots & Agents",
  "Business Automation",
];

export function HeroSection() {
  return (
    <section className="hero-section relative isolate w-full overflow-hidden border-b border-outline-variant/80 bg-background">
      <div className="hero-grid" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1600px] px-4 pb-10 pt-5 sm:px-6 md:pb-12 md:pt-6 lg:px-8 xl:px-12">
        <div className="mb-6 flex flex-col gap-4 sm:mb-8 md:mb-10 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
          {/* <div className="inline-flex w-fit items-center gap-2 rounded-full border border-outline-variant bg-surface-container-low px-3 py-1.5 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-container" />
            <span className="text-label-sm font-semibold uppercase tracking-[0.18em] text-primary-container">
              DIGITAL SOLUTIONS FOR BUSINESSES
            </span>
          </div> */}

          <div className="self-start text-[0.68rem] font-black uppercase tracking-[0.18em] text-on-surface-variant sm:text-[0.8rem] md:text-[0.9rem] lg:self-auto">
            <span className="text-primary-container">CLICK.</span> CONNECT. CONVERT.
          </div>
        </div>

        <div className="max-w-[1350px] pb-7 md:pb-10 lg:pb-12">
          <h1 className="max-w-[1200px] text-balance text-[clamp(2.25rem,9vw,8.5rem)] font-black leading-[0.82] tracking-[-0.01em] text-primary sm:text-[clamp(2.8rem,8vw,8.5rem)] md:text-[clamp(3.3rem,7vw,8.5rem)]">
            WE BUILD DIGITAL
            <span className="mt-2 block text-primary md:mt-3">
              <span className="text-primary-container">SOLUTIONS</span>
              <span className="inline-block px-2 sm:px-4 md:px-6">THAT</span>
            </span>
            <span className="mt-2 block text-primary md:mt-3 tracking-[-0.05em]">
              GROW YOUR BUSINESS.
            </span>
          </h1>
        </div>

        <div className="max-w-[760px]">
          <p className="text-[0.94rem] leading-relaxed text-on-surface-variant sm:text-[1rem] md:text-[1.125rem]">
            Websites, apps, SEO, WhatsApp automation and more — everything your
            business needs to get more customers, save time and grow faster.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-container px-5 py-3 text-label-lg font-semibold text-on-primary-fixed shadow-sm transition-all duration-200 hover:brightness-105 active:scale-[0.99]"
          >
            Start a Project
            <ArrowUpRight className="h-4 w-4" />
          </a>

          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-outline-variant bg-surface-container px-5 py-3 text-label-lg font-medium text-primary transition-all duration-200 hover:border-secondary hover:bg-surface-bright"
          >
            Explore Our Services
            <ArrowDown className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="relative border-t border-outline-variant/80 bg-background/70 backdrop-blur-[1px]">
        <div className="mx-auto grid max-w-[1600px] grid-cols-3 gap-0 px-4 py-3 sm:px-6 md:grid-cols-3 lg:grid-cols-6 lg:px-8 xl:px-12">
          {serviceItems.map((service, index) => (
            <div
              key={service}
              className={[
                "flex items-center justify-center px-3 py-3 text-center text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-on-surface-variant md:text-[0.7rem] lg:text-[0.76rem]",
                index !== 0 ? "border-t border-outline-variant/70 sm:border-t-0 sm:border-l sm:border-outline-variant/70 lg:border-t-0" : "",
              ].join(" ")}
            >
              {service}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
