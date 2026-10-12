import { ArrowUpRight, ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative w-full pt-12 pb-24 md:py-32 px-gutter overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-low border border-outline-variant mb-6 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
              <span className="font-label-sm text-label-sm text-primary-container uppercase tracking-widest font-semibold">
                DIGITAL SOLUTIONS FOR BUSINESSES
              </span>
            </div>

            <h1 className="font-display text-display-mobile md:text-display text-primary tracking-tight font-bold mb-4">
              Click. Connect. Convert
              <span className="text-primary-container">.</span>
            </h1>

            <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary font-semibold tracking-tight mb-4">
              Simple digital solutions for your business.
            </h2>

            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed mb-8">
              We build websites, create digital content and connect useful tools
              to help businesses grow online and work more efficiently.
            </p>

            <div className="flex flex-wrap items-center gap-space-md w-full sm:w-auto">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-space-lg py-3 rounded-lg bg-primary-container text-on-primary-fixed font-label-lg text-label-lg font-semibold hover:brightness-105 active:scale-95 transition-all shadow-sm group"
              >
                Start a Project{" "}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-space-lg py-3 rounded-lg bg-surface-container border border-outline-variant text-primary font-label-lg text-label-lg font-medium hover:border-secondary hover:bg-surface-bright transition-all group"
              >
                Explore Our Services{" "}
                <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Hero Visual Mockup */}
          <div className="lg:col-span-5 w-full flex items-center justify-center">
            <div className="relative w-full max-w-lg lg:max-w-none group">
              {/* Subtle ambient glow behind the transparent graphic */}
              <div
                className="absolute inset-0 bg-gradient-to-tr from-primary-container/20 to-secondary-container/20 rounded-full blur-3xl -z-10 pointer-events-none opacity-60 dark:opacity-40 transition-opacity duration-500 group-hover:opacity-80"
                aria-hidden="true"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-full h-auto object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                alt="Modern digital solutions dashboard and mobile interface preview"
                src="/hero.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
