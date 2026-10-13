import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PricingPageContent } from "@/components/pricing/PricingPageContent";

export const metadata = {
  title: "Pricing — Work4U Digital Solutions",
  description:
    "Explore transparent pricing for website development, app development, SEO, design, photography, and AI integration services.",
};

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-on-surface antialiased">
      <Navbar />
      <div className="flex-1 pt-20">
        <PricingPageContent />
      </div>
      <Footer />
    </div>
  );
}
