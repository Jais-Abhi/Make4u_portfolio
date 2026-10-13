import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ServiceDetailPage } from "@/components/pricing/ServiceDetailPage";
import { pricingServiceMap } from "@/data/pricing";

export const metadata = {
  title: "SEO & Digital Growth Pricing — Work4U Digital Solutions",
  description:
    "Monthly SEO plans designed for growing businesses that want more visibility and stronger conversion opportunities.",
};

export default function SeoDigitalGrowthServicePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-on-surface antialiased">
      <Navbar />
      <div className="flex-1">
        <ServiceDetailPage service={pricingServiceMap["seo-digital-growth"]} />
      </div>
      <Footer />
    </div>
  );
}
