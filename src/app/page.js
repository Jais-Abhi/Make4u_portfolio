import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { AboutPreview } from "@/components/about-preview";
import { ServicesOverview } from "@/components/services-overview";
import { ContactPreview } from "@/components/contact-preview";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-on-surface antialiased transition-colors duration-200">
      {/* Fixed Sticky Header */}
      <Navbar />

      {/* Main Page Content */}
      <main className="w-full pt-20 bg-background min-h-screen">
        <div className="flex flex-col w-full">
          {/* Section A: Hero Section */}
          <HeroSection />

          {/* Section B: About Preview */}
          <AboutPreview />

          {/* Section C: Services Overview */}
          <ServicesOverview />

          {/* Section D: Contact Preview with Interactive Form */}
          <ContactPreview />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
