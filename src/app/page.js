import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Code2, Layers3, MessageCircle, Sparkles, Zap } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const services = [
  [Code2, "01", "Websites that work", "Clear, credible websites that make it easy for the right people to choose you."],
  [Layers3, "02", "Apps built for growth", "Useful digital products that simplify your work and create better customer experiences."],
  [Sparkles, "03", "A brand people remember", "Design, content and digital experiences that make your business look as good as it is."],
];

const steps = [
  ["01", "Tell us what you need", "A short conversation is enough to get started."],
  ["02", "We make a clear plan", "You get practical recommendations and a straightforward quote."],
  ["03", "We build and launch", "We take care of the details and keep you involved at the right moments."],
];

export const metadata = {
  title: "Work4U Digital Solutions — Click. Connect. Convert.",
  description: "Websites, apps and digital solutions that help businesses move forward.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-on-surface antialiased">
      <Navbar />
      <main className="pt-20">
        <section className="relative overflow-hidden border-b border-outline-variant bg-surface-container-lowest">
          <div className="absolute -right-40 -top-48 h-[34rem] w-[34rem] rounded-full bg-secondary-container/40 blur-3xl" aria-hidden="true" />
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-gutter py-16 md:py-24 lg:grid-cols-[1.02fr_.98fr] lg:gap-16 lg:py-28">
            <div className="relative z-10 flex flex-col items-start">
              <p className="mb-7 inline-flex items-center gap-2 rounded-full border border-outline-variant bg-surface-container px-3 py-1.5 text-label-sm uppercase tracking-[0.18em] text-primary-container"><span className="size-1.5 rounded-full bg-primary-container" />Digital solutions for ambitious businesses</p>
              <h1 className="max-w-3xl text-5xl font-bold leading-[0.98] tracking-[-0.055em] text-primary sm:text-6xl lg:text-7xl">Make your next move <span className="text-primary-container">make sense.</span></h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-on-surface-variant md:text-xl">Work4u Digital Solutions helps businesses turn good ideas into websites, apps and digital systems that bring in more of the right customers.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row"><Link href="/contact" className="group inline-flex items-center justify-center gap-2 rounded-lg bg-primary-container px-5 py-3.5 text-label-lg text-on-primary-fixed shadow-lg transition hover:-translate-y-0.5 hover:brightness-105">Start a conversation <ArrowRight className="transition-transform group-hover:translate-x-1" /></Link><Link href="#services" className="inline-flex items-center justify-center gap-2 rounded-lg border border-outline-variant bg-surface-container px-5 py-3.5 text-label-lg text-primary transition hover:border-primary-container">See what we do <ArrowRight /></Link></div>
              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-on-surface-variant">{["Clear communication", "Practical solutions", "Built around you"].map((item) => <span key={item} className="flex items-center gap-2"><Check className="text-primary-container" />{item}</span>)}</div>
            </div>
            <div className="relative z-10"><div className="overflow-hidden rounded-2xl border border-outline-variant bg-surface-container p-2 shadow-2xl"><Image src="/hero_image.png" alt="Website and mobile app experiences designed by Work4u" width={1536} height={1024} priority className="aspect-[4/3] w-full rounded-xl object-cover" /></div><div className="absolute -bottom-5 -left-4 flex items-center gap-3 rounded-xl border border-outline-variant bg-surface-bright px-4 py-3 shadow-xl sm:-left-8"><span className="flex size-10 items-center justify-center rounded-lg bg-secondary-container text-primary"><Zap /></span><div><p className="text-sm font-semibold text-primary">Built to move you forward</p><p className="text-xs text-on-surface-variant">Not just look good.</p></div></div></div>
          </div>
        </section>
        <section className="border-b border-outline-variant bg-background" id="services"><div className="mx-auto max-w-7xl px-gutter py-20 md:py-28"><div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div className="max-w-2xl"><p className="mb-4 text-label-sm uppercase tracking-[0.18em] text-primary-container">What we do</p><h2 className="text-4xl font-bold leading-tight tracking-[-0.04em] text-primary md:text-5xl">Everything you need to show up, stand out and grow.</h2></div><p className="max-w-sm text-base leading-7 text-on-surface-variant">One focused team for the digital work your business cannot afford to get wrong.</p></div><div className="mt-12 grid gap-4 md:grid-cols-3">{services.map(([Icon, number, title, description]) => <Link href="/services" key={number} className="group rounded-xl border border-outline-variant bg-surface-container p-6 transition hover:-translate-y-1 hover:border-primary-container hover:shadow-xl md:p-8"><div className="flex items-center justify-between"><span className="text-sm text-primary-container">{number}</span><Icon className="text-primary-container" /></div><h3 className="mt-16 text-2xl font-semibold tracking-tight text-primary">{title}</h3><p className="mt-3 leading-7 text-on-surface-variant">{description}</p><span className="mt-7 inline-flex items-center gap-2 text-label-lg text-primary">Explore service <ArrowRight className="transition-transform group-hover:translate-x-1" /></span></Link>)}</div></div></section>
        <section className="bg-primary py-20 text-on-primary md:py-28"><div className="mx-auto grid max-w-7xl gap-12 px-gutter lg:grid-cols-[.8fr_1.2fr]"><div><p className="mb-4 text-label-sm uppercase tracking-[0.18em] text-secondary-container">How it feels to work with us</p><h2 className="max-w-md text-4xl font-bold leading-tight tracking-[-0.04em] md:text-5xl">Simple process. Serious results.</h2></div><div className="grid gap-8 sm:grid-cols-3">{steps.map(([number, title, description]) => <div key={number} className="border-t border-on-primary/20 pt-5"><span className="text-sm text-secondary-container">{number}</span><h3 className="mt-8 text-xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-on-primary/70">{description}</p></div>)}</div></div></section>
        <section id="contact" className="bg-secondary-container"><div className="mx-auto flex max-w-7xl flex-col gap-8 px-gutter py-16 md:flex-row md:items-center md:justify-between md:py-20"><div><p className="mb-3 text-label-sm uppercase tracking-[0.18em] text-primary-container">Ready when you are</p><h2 className="max-w-2xl text-4xl font-bold leading-tight tracking-[-0.04em] text-primary md:text-5xl">Have a project in mind? Let&apos;s make it real.</h2></div><Link href="/contact" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3.5 text-label-lg text-on-primary transition hover:-translate-y-0.5 hover:bg-primary-container">Get a quote <MessageCircle /></Link></div></section>
      </main>
      <Footer />
    </div>
  );
}
