import { Navbar } from "@/components/navbar";
import { AboutHero } from "@/components/about/about-hero";
import { AboutCapabilities } from "@/components/about/about-capabilities";
import { AboutDeliverables } from "@/components/about/about-deliverables";
import { AboutProcess } from "@/components/about/about-process";
import { AboutCta } from "@/components/about/about-cta";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "About — Work4U Digital Solutions",
  description:
    "Learn how Work4U Digital Solutions combines web development, creative services, and business automation to help businesses build a stronger digital presence.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-on-surface antialiased transition-colors duration-200">
      {/* Sticky header with theme toggle */}
      <Navbar />

      {/* Main content */}
      <main className="w-full pt-20 bg-background min-h-screen">
        <div className="flex flex-col w-full">
          {/* Section 1: Intro & headline */}
          <AboutHero />

          {/* Section 2: 3 Core Pillars (Build / Create / Connect) */}
          <AboutCapabilities />

          {/* Section 3: What We Deliver (5-card deliverable grid) */}
          <AboutDeliverables />

          {/* Section 4: How We Work (4-step transparent process) */}
          <AboutProcess />

          {/* Section 5: Call to Action */}
          <AboutCta />
        </div>
      </main>

      <Footer />
    </div>
  );
}
