import { Navbar } from "@/components/navbar";
import { ServicesHero } from "@/components/services/services-hero";
import { ServicesGrid } from "@/components/services/services-grid";
import { MethodologySection } from "@/components/services/methodology-section";
import { MaintenanceBanner } from "@/components/services/maintenance-banner";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Services Overview — Work4U Digital Solutions",
  description:
    "Explore our complete range of capabilities: Website Development, App Development, SEO, Graphic Design & Video, Media Production, and AI Automation.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-on-surface antialiased transition-colors duration-200">
      {/* Fixed Sticky Header with Theme Toggle */}
      <Navbar />

      {/* Main Page Content */}
      <main className="w-full pt-20 bg-background min-h-screen">
        <div className="flex flex-col w-full">
          {/* Header & Capabilities Intro with Deliverables Matrix */}
          <ServicesHero />

          {/* 6 Comprehensive Service Cards Grid */}
          <ServicesGrid />

          {/* 4-Phase Sprint Methodology */}
          <MethodologySection />

          {/* Dedicated Maintenance Plans Banner */}
          <MaintenanceBanner />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
