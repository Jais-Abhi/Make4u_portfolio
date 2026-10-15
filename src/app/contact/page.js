import { ContactSection } from "@/components/contact/contact-section";

export const metadata = {
  title: "Contact — Work4U Digital Solutions",
  description:
    "Get in touch with Work4U Digital Solutions. Discuss your project scope, pricing, and next steps with our team.",
};

export default function ContactPage() {
  return (
    <div className="flex w-full flex-col">
      <ContactSection />
    </div>
  );
}
