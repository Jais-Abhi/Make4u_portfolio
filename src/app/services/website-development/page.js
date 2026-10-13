import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ServiceDetailPage } from "@/components/pricing/ServiceDetailPage";
import { pricingServiceMap } from "@/data/pricing";

export const metadata = {
  title: "Website Development Pricing — Work4U Digital Solutions",
  description:
    "Transparent pricing for website development packages, including Starter, Growth, and Premium options.",
};

export default function WebsiteDevelopmentServicePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-on-surface antialiased">
      <Navbar />
      <div className="flex-1">
        <ServiceDetailPage service={pricingServiceMap["website-development"]} />
      </div>
      <Footer />
    </div>
  );
}
