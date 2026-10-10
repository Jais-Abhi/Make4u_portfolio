import { Inbox, CheckSquare, Hourglass, Clock, Timer } from "lucide-react";

export function SupportRules() {
  return (
    <section className="w-full py-20 bg-surface-container-lowest border-y border-surface-variant transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-gutter">
        <div className="max-w-3xl mb-12">
          <span className="font-label-md text-label-md text-primary-container uppercase tracking-wider font-semibold">
            Operational Standards
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight font-bold mt-1">
            Changes &amp; Support Rules
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
            Clear rules of engagement to ensure swift, predictable outcomes
            without miscommunication or delay.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Rule 1 */}
          <div className="p-space-lg rounded-lg bg-surface-container border border-surface-variant flex flex-col gap-2 shadow-sm">
            <div className="flex items-center gap-2 text-primary-container mb-2">
              <Inbox className="h-5 w-5" />
              <span className="font-label-md text-label-md uppercase tracking-wider font-semibold">
                Communication Channel
              </span>
            </div>
            <h4 className="font-headline-sm text-headline-sm text-primary text-base font-semibold">
              How to Request Changes
            </h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Submit directly via your assigned Client Ticket Portal or email{" "}
              <code className="text-primary-container bg-surface-container-low px-1.5 py-0.5 rounded font-mono text-xs">
                support@work4u.example
              </code>{" "}
              with visual annotations for instant dispatch.
            </p>
          </div>

          {/* Rule 2 */}
          <div className="p-space-lg rounded-lg bg-surface-container border border-surface-variant flex flex-col gap-2 shadow-sm">
            <div className="flex items-center gap-2 text-primary-container mb-2">
              <CheckSquare className="h-5 w-5" />
              <span className="font-label-md text-label-md uppercase tracking-wider font-semibold">
                Criteria
              </span>
            </div>
            <h4 className="font-headline-sm text-headline-sm text-primary text-base font-semibold">
              What Counts as Minor
            </h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Modifying text paragraphs, swapping banner photography, adjusting
              nav links, formatting blog articles, or patching broken buttons
              (tasks estimated under 30 minutes each).
            </p>
          </div>

          {/* Rule 3 */}
          <div className="p-space-lg rounded-lg bg-surface-container border border-surface-variant flex flex-col gap-2 shadow-sm">
            <div className="flex items-center gap-2 text-primary-container mb-2">
              <Hourglass className="h-5 w-5" />
              <span className="font-label-md text-label-md uppercase tracking-wider font-semibold">
                Monthly Quota
              </span>
            </div>
            <h4 className="font-headline-sm text-headline-sm text-primary text-base font-semibold">
              Monthly Work Allowance
            </h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              3 to 5 developer hours included each billing cycle depending on tier.
              Hours do not roll over to maintain predictable team capacity planning.
            </p>
          </div>

          {/* Rule 4 */}
          <div className="p-space-lg rounded-lg bg-surface-container border border-surface-variant flex flex-col gap-2 shadow-sm">
            <div className="flex items-center gap-2 text-primary-container mb-2">
              <Clock className="h-5 w-5" />
              <span className="font-label-md text-label-md uppercase tracking-wider font-semibold">
                Operating Window
              </span>
            </div>
            <h4 className="font-headline-sm text-headline-sm text-primary text-base font-semibold">
              Agency Working Hours
            </h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Monday through Friday, 9:00 AM – 6:00 PM EST. Critical uptime
              monitoring runs 24/7/365 with automated emergency escalation.
            </p>
          </div>

          {/* Rule 5: SLA Protocol (Span 2 cols on desktop) */}
          <div className="p-space-lg rounded-lg bg-surface-container border border-surface-variant flex flex-col gap-2 lg:col-span-2 shadow-sm">
            <div className="flex items-center gap-2 text-primary-container mb-2">
              <Timer className="h-5 w-5" />
              <span className="font-label-md text-label-md uppercase tracking-wider font-semibold">
                SLA Metrics
              </span>
            </div>
            <h4 className="font-headline-sm text-headline-sm text-primary text-base font-semibold">
              Response vs. Delivery Protocol
            </h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              <strong className="text-on-surface font-semibold">
                Ticket Acknowledgment:
              </strong>{" "}
              Guaranteed triage confirmation within 4 business hours. <br />
              <strong className="text-on-surface font-semibold">
                Turnaround Execution:
              </strong>{" "}
              Standard minor revisions completed within 24 to 48 business hours
              post-acknowledgment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
