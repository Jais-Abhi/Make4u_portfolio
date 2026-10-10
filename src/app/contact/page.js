import { Navbar } from "@/components/navbar";
import { ContactSection } from "@/components/contact/contact-section";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Contact — Work4U Digital Solutions",
  description:
    "Get in touch with Work4U Digital Solutions. Discuss your project scope, pricing, and next steps with our team.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-on-surface antialiased transition-colors duration-200">
      <Navbar />

      <main className="w-full pt-20 bg-background min-h-screen">
        <div className="flex flex-col w-full">
          <ContactSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}
