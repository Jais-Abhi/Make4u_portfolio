import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ServiceDetailPage } from "@/components/pricing/ServiceDetailPage";
import { pricingServiceMap } from "@/data/pricing";

export const metadata = {
  title: "AI & Business Integration Pricing — Work4U Digital Solutions",
  description:
    "Transparent setup pricing for AI workflows, automation, chatbot, and business integrations.",
};

export default function AiBusinessIntegrationServicePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-on-surface antialiased">
      <Navbar />
      <div className="flex-1">
        <ServiceDetailPage service={pricingServiceMap["ai-business-integration"]} />
      </div>
      <Footer />
    </div>
  );
}
