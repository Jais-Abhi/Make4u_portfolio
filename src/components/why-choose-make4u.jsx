"use client";

import * as React from "react";
import Link from "next/link";
import { Plus, Minus, ArrowUpRight } from "lucide-react";

// export function WhyChooseMake4U() {
//   const reasons = [
//     {
//       number: "01",
//       title: "Built Around Your Business",
//       description:
//         "We understand your goals and tailor our approach to your needs instead of offering a one-size-fits-all solution.",
//     },
//     {
//       number: "02",
//       title: "Simple and Transparent",
//       description:
//         "Clear communication, straightforward explanations, and an agreed project scope help you know what to expect.",
//     },
//     {
//       number: "03",
//       title: "Everything Working Together",
//       description:
//         "From your online presence to business automation, we help connect the right digital solutions for your business.",
//     },
//     {
//       number: "04",
//       title: "A Team You Can Rely On",
//       description:
//         "We value long-term relationships and provide support according to your project's agreed requirements and plan.",
//     },
//   ];

//   return (
//     <section
//       id="why-choose-us"
//       className="relative w-full overflow-hidden border-t border-outline-variant bg-background py-20 px-gutter md:py-28"
//     >
//       <div className="absolute inset-0 opacity-60" aria-hidden="true">
//         <div className="h-full w-full bg-[linear-gradient(to_right,rgba(120,132,121,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(120,132,121,0.08)_1px,transparent_1px)] bg-size-[32px_32px] mask-[radial-gradient(circle_at_center,black,transparent_92%)]" />
//       </div>

//       <div className="relative mx-auto max-w-7xl">
//         <div className="mb-10 max-w-3xl">
//           <span className="inline-flex items-center gap-2 rounded-full border border-outline-variant bg-surface-container px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-container">
//             <span className="h-1.5 w-1.5 rounded-full bg-primary-container" />
//             WHY MAKE4U
//           </span>

//           <h2 className="mt-5 text-headline-lg-mobile md:text-headline-lg text-primary font-semibold tracking-tight">
//             More Than a Service Provider. A Partner in Your Growth.
//           </h2>

//           <p className="mt-4 max-w-2xl text-body-lg text-on-surface-variant leading-relaxed">
//             We believe great digital solutions start with understanding your business. At Make4U Digital Solutions, we work closely with you to create practical solutions, simplify your digital journey, and support your business as it grows.
//           </p>
//         </div>

//         <div className="grid gap-5 md:grid-cols-2">
//           {reasons.map((reason) => (
//             <div
//               key={reason.number}
//               className="rounded-2xl border border-outline-variant bg-surface-container p-5 shadow-[0_16px_40px_rgba(17,24,19,0.04)] transition-transform duration-200 hover:-translate-y-1 md:p-6"
//             >
//               <div className="mb-5 flex items-center justify-between gap-3 border-b border-outline-variant/80 pb-3">
//                 <span className="text-3xl font-semibold tracking-tight text-primary-container">
//                   {reason.number}
//                 </span>
//                 <span className="h-px flex-1 bg-outline-variant/80" aria-hidden="true" />
//               </div>

//               <h3 className="text-headline-sm text-primary font-semibold leading-tight">
//                 {reason.title}
//               </h3>

//               <p className="mt-3 text-body-sm text-on-surface-variant leading-relaxed">
//                 {reason.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

export function WhyChooseMake4U() {
  const reasons = [
    {
      number: "01",
      title: "Built Around Your Business",
      description:
        "We understand your goals and tailor our approach to your needs instead of offering a one-size-fits-all solution.",
    },
    {
      number: "02",
      title: "Simple and Transparent",
      description:
        "Clear communication, straightforward explanations, and an agreed project scope help you know what to expect.",
    },
    {
      number: "03",
      title: "Everything Working Together",
      description:
        "From your online presence to business automation, we help connect the right digital solutions for your business.",
    },
    {
      number: "04",
      title: "A Team You Can Rely On",
      description:
        "We value long-term relationships and provide support according to your project's agreed requirements and plan.",
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="relative w-full overflow-hidden border-t border-outline-variant bg-background py-20 px-gutter md:py-28"
    >
      <div className="absolute inset-0 opacity-60" aria-hidden="true">
        <div className="h-full w-full bg-[linear-gradient(to_right,rgba(120,132,121,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(120,132,121,0.08)_1px,transparent_1px)] bg-size-[32px_32px] mask-[radial-gradient(circle_at_center,black,transparent_92%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-outline-variant bg-surface-container px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-container">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-container" />
            WHY MAKE4U
          </span>

          <h2 className="mt-5 text-[clamp(2.5rem,3.8vw,4.5rem)] font-black leading-[0.94] tracking-[-0.06em] text-primary">
            More Than a Service Provider. A Partner in Your Growth.
          </h2>

          <p className="mt-4 max-w-2xl text-body-lg text-on-surface-variant leading-relaxed">
            We believe great digital solutions start with understanding your business. At Make4U Digital Solutions, we work closely with you to create practical solutions, simplify your digital journey, and support your business as it grows.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {reasons.map((reason) => (
            <div
              key={reason.number}
              className="rounded-2xl border border-outline-variant bg-surface-container p-5 shadow-[0_16px_40px_rgba(17,24,19,0.04)] transition-transform duration-200 hover:-translate-y-1 md:p-6"
            >
              <div className="mb-5 flex items-center justify-between gap-3 border-b border-outline-variant/80 pb-3">
                <span className="text-3xl font-semibold tracking-tight text-primary-container">
                  {reason.number}
                </span>
                <span className="h-px flex-1 bg-outline-variant/80" aria-hidden="true" />
              </div>

              <h3 className="text-headline-sm text-primary font-semibold leading-tight">
                {reason.title}
              </h3>

              <p className="mt-3 text-body-sm text-on-surface-variant leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = React.useState(0);

  const faqs = [
    {
      question: "What services do you provide?",
      answer:
        "We help businesses with website and app development, SEO, digital marketing, graphic design, video editing, photography, videography, AI chatbots, WhatsApp integration, and business automation.",
    },
    {
      question: "How do I get started?",
      answer:
        "Contact us and tell us about your business and requirements. We'll discuss your goals, suggest a suitable approach, and provide a tailored quote.",
    },
    {
      question: "How much does a project cost?",
      answer:
        "Pricing depends on the project's scope, features, and complexity. Contact us to discuss your requirements and receive a suitable quote.",
    },
    {
      question: "How long does a project take?",
      answer:
        "Timelines vary depending on the project's size and requirements. We'll discuss the expected schedule before work begins and keep you updated throughout the process.",
    },
    {
      question: "Do you provide maintenance and ongoing support?",
      answer:
        "Yes, we offer maintenance and support options according to the selected plan and agreed requirements.",
    },
    {
      question: "Can you help my business attract more customers?",
      answer:
        "We can help improve your online presence through website development, SEO, marketing, and suitable enquiry-management solutions. Results depend on your market, strategy, and other factors.",
    },
    {
      question: "Can you integrate WhatsApp and AI chatbots?",
      answer:
        "Yes, we can integrate suitable WhatsApp solutions, AI chatbots, and automated workflows based on your business needs and the capabilities of the selected tools.",
    },
    {
      question: "Can I request changes during development?",
      answer:
        "Yes, we share progress and incorporate feedback according to the agreed project scope and revision terms.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section id="faq" className="w-full border-t border-outline-variant bg-surface-container-low py-20 px-gutter md:py-28">
      <div className="mx-auto w-full max-w-[min(1500px,calc(100vw-2rem))] xl:px-17">
        <div className="mb-8 max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-outline-variant bg-surface-container px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-container">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-container" />
            GOT QUESTIONS?
          </span>

          <h2 className="mt-5 text-headline-lg-mobile md:text-headline-lg text-primary font-semibold tracking-tight">
            Everything You Need to Know.
          </h2>

          <p className="mt-4 max-w-2xl text-body-lg text-on-surface-variant leading-relaxed">
            Have questions before getting started? Here are some helpful answers about working with Make4U.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-primary-container/60 bg-surface-container shadow-[0_12px_32px_rgba(17,24,19,0.05)]"
                    : "border-outline-variant bg-surface-container/70 hover:border-outline"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                  className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left sm:px-5"
                >
                  <span className="text-base font-semibold text-primary sm:text-lg">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-200 ${
                      isOpen
                        ? "border-primary-container bg-primary-container text-on-primary-fixed"
                        : "border-outline-variant bg-surface-container text-on-surface-variant"
                    }`}
                    aria-hidden="true"
                  >
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>

                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-outline-variant/70 px-4 pb-4 pt-3 sm:px-5">
                      <p className="text-body-md text-on-surface-variant leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-outline-variant/80 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-body-md text-on-surface-variant">
            Still have questions? <span className="font-semibold text-primary">Let&apos;s talk.</span>
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary-container px-5 py-3 text-label-lg font-semibold text-on-primary-fixed transition-all duration-200 hover:brightness-105 active:translate-y-px"
          >
            Contact Us
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
