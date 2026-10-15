import { ContactSection } from "@/components/contact/contact-section";

export const metadata = {
  title: "Contact — Make4U Digital Solutions",
  description:
    "Get in touch with Make4U Digital Solutions. Discuss your project scope, pricing, and next steps with our team.",
};

export default function ContactPage() {
  return (
    <div className="flex w-full flex-col">
      <ContactSection />
    </div>
  );
}
