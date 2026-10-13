import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ServiceDetailPage } from "@/components/pricing/ServiceDetailPage";
import { pricingServiceMap } from "@/data/pricing";

export const metadata = {
  title: "Photography & Videography Pricing — Work4U Digital Solutions",
  description:
    "Per-shoot pricing for product, portrait, and commercial photography and videography packages.",
};

export default function PhotographyVideographyServicePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-on-surface antialiased">
      <Navbar />
      <div className="flex-1">
        <ServiceDetailPage service={pricingServiceMap["photography-videography"]} />
      </div>
      <Footer />
    </div>
  );
}
