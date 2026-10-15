import { HeroSection } from "@/components/hero-section";
import { AboutPreview } from "@/components/about-preview";
import { WhyChooseMake4U } from "@/components/why-choose-make4u";
import { ServicesOverview } from "@/components/services-overview";
import { HowWeWork } from "@/components/how-we-work";
import { FaqSection } from "@/components/why-choose-make4u";
import { ContactPreview } from "@/components/contact-preview";

export default function Home() {
  return (
    <div className="flex w-full flex-col">
      <HeroSection />
      <AboutPreview />
      {/* <WhyChooseMake4U /> */}
      <ServicesOverview />
      <HowWeWork />
      <FaqSection />
      <ContactPreview />
    </div>
  );
}
