import { MaintenanceHero } from "@/components/maintenance/maintenance-hero";
import { MaintenanceIncludes } from "@/components/maintenance/maintenance-includes";
import { PricingTiers } from "@/components/maintenance/pricing-tiers";
import { SupportRules } from "@/components/maintenance/support-rules";
import { OutOfScope } from "@/components/maintenance/out-of-scope";
import { MaintenanceSteps } from "@/components/maintenance/maintenance-steps";
import { MaintenanceCta } from "@/components/maintenance/maintenance-cta";

export const metadata = {
  title: "Maintenance Plans & Subscriptions — Make4U Digital Solutions",
  description:
    "Keep your digital services running smoothly. Quarterly, Half-Yearly, and Yearly ongoing maintenance plans with security patching, core health, and dedicated support hours.",
};

export default function MaintenancePlansPage() {
  return (
    <div className="flex w-full flex-col">
      <MaintenanceHero />
      <MaintenanceIncludes />
      <PricingTiers />
      <SupportRules />
      <OutOfScope />
      <MaintenanceSteps />
      <MaintenanceCta />
    </div>
  );
}
