import { XCircle } from "lucide-react";

export function OutOfScope() {
  const exclusions = [
    {
      title: "Major Redesigns or Structural Overhauls",
      description:
        "Full layout revamps, CMS migrations, or branding redesigns are treated as distinct agency deliverables.",
    },
    {
      title: "Brand New Page Builds & Custom Modules",
      description:
        "Architecting complex calculators, checkout systems, new portal sections, or customized web applications.",
    },
    {
      title: "Third-Party SaaS & Usage Fees",
      description:
        "External subscriptions, Twilio SMS rates, SendGrid quotas, WhatsApp API fees, hosting servers, or domain purchases.",
    },
    {
      title: "Advertising Budgets & Media Spend",
      description:
        "Direct disbursements to Google Ads, Meta Ads, TikTok campaigns, or sponsored placement networks.",
    },
  ];

  return (
    <section className="w-full py-20 bg-background transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-gutter">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Context & Rate Box */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <span className="font-label-md text-label-md text-amber-500 dark:text-amber-400 uppercase tracking-wider font-semibold">
              Clear Boundaries
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight font-bold">
              Out of Scope &amp; Extra Costs
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              To deliver affordable, dependable recurring service, we maintain
              strict transparency. Items outside minor care are estimated
              beforehand so you never encounter surprise billing.
            </p>

            <div className="p-5 rounded-lg bg-surface-container border border-surface-variant mt-2 shadow-sm">
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">
                Hourly Overage Rate
              </span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="font-headline-md text-headline-md text-primary font-bold">
                  $95 / hour
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  (billed in 15-minute increments)
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
                Work exceeding your included plan allowance is quoted in writing
                and requires your authorization prior to commencement.
              </p>
            </div>
          </div>

          {/* Right Column: Explicit Exclusions */}
          <div className="lg:col-span-7 bg-surface-container rounded-xl p-6 sm:p-8 border border-surface-variant shadow-md">
            <h3 className="font-headline-sm text-headline-sm text-primary text-lg font-semibold mb-6">
              Explicit Exclusions
            </h3>
            <div className="space-y-4">
              {exclusions.map((ex, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-4 rounded bg-surface-container-low border border-surface-variant/60 hover:border-outline-variant transition-colors"
                >
                  <XCircle className="h-5 w-5 text-amber-500 dark:text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-label-lg text-label-lg text-on-surface font-semibold">
                      {ex.title}
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 leading-relaxed">
                      {ex.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
