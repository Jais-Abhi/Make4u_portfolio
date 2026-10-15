import { AboutHero } from "@/components/about/about-hero";
import { AboutCapabilities } from "@/components/about/about-capabilities";
import { AboutDeliverables } from "@/components/about/about-deliverables";
import { AboutProcess } from "@/components/about/about-process";
import { AboutCta } from "@/components/about/about-cta";

export const metadata = {
  title: "About — Work4U Digital Solutions",
  description:
    "Learn how Work4U Digital Solutions combines web development, creative services, and business automation to help businesses build a stronger digital presence.",
};

export default function AboutPage() {
  return (
    <div className="flex w-full flex-col">
      <AboutHero />
      <AboutCapabilities />
      <AboutDeliverables />
      <AboutProcess />
      <AboutCta />
    </div>
  );
}
