import { ArrowUpRight, ArrowDown } from "lucide-react";

const serviceItems = [
  "Websites & Apps",
  "SEO",
  "Graphic Design & Video Editing",
  "Photography & Videography",
  "AI Chatbots & Agents",
  "Business Automation",
];

const marqueeItems = [...serviceItems, ...serviceItems];

export function HeroSection() {
  return (
    <section className="hero-section relative isolate w-full overflow-hidden border-b border-outline-variant/80 bg-background">
      <div className="hero-grid" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1600px] px-4 pb-10 pt-5 text-center sm:px-6 md:pb-12 md:pt-6 lg:px-8 xl:px-12">
        <div className="mb-6 flex flex-col items-center gap-4 sm:mb-8 md:mb-10 lg:flex-row lg:items-center lg:justify-center lg:gap-8">
          {/* <div className="inline-flex w-fit items-center gap-2 rounded-full border border-outline-variant bg-surface-container-low px-3 py-1.5 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-container" />
            <span className="text-label-sm font-semibold uppercase tracking-[0.18em] text-primary-container">
              DIGITAL SOLUTIONS FOR BUSINESSES
            </span>
          </div> */}

          
        </div>

        <div className="mx-auto max-w-[1350px] pb-7 md:pb-10 lg:pb-12">
          <h1 className="mx-auto max-w-[1200px] text-balance text-[clamp(1.9rem,5vw,5.5rem)] font-black leading-[0.9] tracking-[-0.02em] text-primary sm:text-[clamp(2.3rem,5vw,6.2rem)] md:text-[clamp(2.7rem,5vw,6.8rem)] lg:text-[clamp(3rem,4.8vw,7rem)]">
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
        <div className="text-center mb-8 text-[0.62rem] font-black uppercase tracking-[0.18em] text-on-surface-variant sm:text-[0.72rem] md:text-[0.8rem] lg:self-auto">
            <span className="text-primary-container">CLICK.</span> CONNECT. CONVERT.
          </div>

        <div className="mx-auto max-w-[760px]">
          <p className="text-center text-[0.82rem] leading-relaxed text-on-surface-variant sm:text-[0.9rem] md:text-[1rem] lg:text-[1.05rem]">
            Websites, apps, SEO, WhatsApp automation and more — everything your
            business needs to get more customers, save time and grow faster.
          </p>
        </div>
        

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:items-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-container px-5 py-3 text-label-md font-semibold text-on-primary-fixed shadow-sm transition-all duration-200 hover:brightness-105 active:scale-[0.99]"
          >
            Start a Project
            <ArrowUpRight className="h-4 w-4" />
          </a>

          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-outline-variant bg-surface-container px-5 py-3 text-label-md font-medium text-primary transition-all duration-200 hover:border-secondary hover:bg-surface-bright"
          >
            Explore Our Services
            <ArrowDown className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="relative overflow-hidden border-t border-outline-variant/80 bg-background/70 backdrop-blur-[1px]">
        <div className="mx-auto max-w-[1600px] px-4 py-3 sm:px-6 lg:px-8 xl:px-12">
          <div className="marquee-mask">
            <div className="marquee-track flex w-max items-center whitespace-nowrap">
              {marqueeItems.map((service, index) => (
                <div
                  key={`${service}-${index}`}
                  className={[
                    "group flex shrink-0 items-center justify-center px-7 py-3 text-center text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-on-surface-variant transition-all duration-200 ease-out hover:-translate-y-0.5 hover:text-primary hover:bg-surface-container/80 md:px-8 md:text-[0.7rem] lg:px-15 lg:text-[0.76rem]",
                    index !== 0 ? "border-t border-outline-variant/70 sm:border-t-0 sm:border-l sm:border-outline-variant/70 lg:border-t-0" : "",
                  ].join(" ")}
                >
                  <span className="relative flex items-center justify-center after:absolute after:-bottom-1 after:h-px after:w-0 after:bg-primary-container after:transition-all after:duration-200 group-hover:after:w-full">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
