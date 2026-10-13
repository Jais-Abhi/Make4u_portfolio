import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ServiceDetailPage } from "@/components/pricing/ServiceDetailPage";
import { pricingServiceMap } from "@/data/pricing";

export const metadata = {
  title: "Graphic Design & Video Editing Pricing — Work4U Digital Solutions",
  description:
    "Flexible monthly pricing for social media design and short-form video editing support.",
};

export default function GraphicDesignVideoEditingServicePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-on-surface antialiased">
      <Navbar />
      <div className="flex-1">
        <ServiceDetailPage service={pricingServiceMap["graphic-design-video-editing"]} />
      </div>
      <Footer />
    </div>
  );
}
