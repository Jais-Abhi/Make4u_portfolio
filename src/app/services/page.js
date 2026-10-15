import { ServicesHero } from "@/components/services/services-hero";
import { ServicesGrid } from "@/components/services/services-grid";
import { MethodologySection } from "@/components/services/methodology-section";
import { MaintenanceBanner } from "@/components/services/maintenance-banner";

export const metadata = {
  title: "Services Overview — Make4U Digital Solutions",
  description:
    "Explore our complete range of capabilities: Website Development, App Development, SEO, Graphic Design & Video, Media Production, and AI Automation.",
};

export default function ServicesPage() {
  return (
    <div className="flex w-full flex-col">
      <ServicesHero />
      <ServicesGrid />
      <MethodologySection />
      <MaintenanceBanner />
    </div>
  );
}
