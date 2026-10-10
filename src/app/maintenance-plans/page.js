import { Navbar } from "@/components/navbar";
import { MaintenanceHero } from "@/components/maintenance/maintenance-hero";
import { MaintenanceIncludes } from "@/components/maintenance/maintenance-includes";
import { PricingTiers } from "@/components/maintenance/pricing-tiers";
import { SupportRules } from "@/components/maintenance/support-rules";
import { OutOfScope } from "@/components/maintenance/out-of-scope";
import { MaintenanceSteps } from "@/components/maintenance/maintenance-steps";
import { MaintenanceCta } from "@/components/maintenance/maintenance-cta";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Maintenance Plans & Subscriptions — Work4U Digital Solutions",
  description:
    "Keep your digital services running smoothly. Quarterly, Half-Yearly, and Yearly ongoing maintenance plans with security patching, core health, and dedicated support hours.",
};

export default function MaintenancePlansPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-on-surface antialiased transition-colors duration-200">
      {/* Fixed Sticky Header with Theme Toggle */}
      <Navbar />

      {/* Main Page Content */}
      <main className="w-full pt-20 bg-background min-h-screen">
        <div className="flex flex-col w-full">
          {/* Section 1: Header & Scope Distinction Banner */}
          <MaintenanceHero />

          {/* Section 2: Technical Deliverables (What Maintenance Includes) */}
          <MaintenanceIncludes />

          {/* Section 3: Subscription Commitments & Pricing Matrix */}
          <PricingTiers />

          {/* Section 4: Operational Standards (Support Rules) */}
          <SupportRules />

          {/* Section 5: Out of Scope & Transparent Overage Costs */}
          <OutOfScope />

          {/* Section 6: 3-Step Lifecycle Workflow */}
          <MaintenanceSteps />

          {/* Section 7: Final Call to Action */}
          <MaintenanceCta />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
