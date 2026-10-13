import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ServiceDetailPage } from "@/components/pricing/ServiceDetailPage";
import { pricingServiceMap } from "@/data/pricing";

export const metadata = {
  title: "App Development Pricing — Work4U Digital Solutions",
  description:
    "Simple app development pricing packages for MVP, growth, and premium product builds.",
};

export default function AppDevelopmentServicePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-on-surface antialiased">
      <Navbar />
      <div className="flex-1">
        <ServiceDetailPage service={pricingServiceMap["app-development"]} />
      </div>
      <Footer />
    </div>
  );
}
