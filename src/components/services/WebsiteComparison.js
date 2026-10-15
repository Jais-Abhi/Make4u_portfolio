import { Check, X } from "lucide-react";

function renderStatus(value) {
  if (value === "Included") {
    return (
      <span className="inline-flex items-center gap-2 text-[color:var(--primary-container)]" aria-label="Included">
        <Check className="h-4 w-4" />
        <span className="sr-only">Included</span>
      </span>
    );
  }

  if (value === "Not included" || value === "Not included by default") {
    return (
      <span className="inline-flex items-center gap-2 text-[color:var(--on-surface-variant)]" aria-label="Not included">
        <X className="h-4 w-4" />
        <span className="sr-only">Not included</span>
      </span>
    );
  }

  return <span className="text-sm text-[color:var(--on-surface)]">{value}</span>;
}

export function WebsiteComparison({ groups }) {
  return (
    <section id="comparison" className="mx-auto max-w-7xl px-gutter py-16 md:py-20">
      <div className="max-w-2xl">
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[color:var(--primary-container)]">
          Compare every feature
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[color:var(--primary)] md:text-4xl">
          Compare Every Feature
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[color:var(--on-surface-variant)]">
          See exactly what is included in each package before choosing your plan.
        </p>
      </div>

      <div className="mt-10 overflow-x-auto">
        <div className="min-w-[780px] rounded-[28px] border border-[color:var(--outline-variant)] bg-[color:var(--surface-container)]">
          {groups.map((group) => (
            <div key={group.name} className="border-b border-[color:var(--outline-variant)] last:border-b-0">
              <div className="bg-[color:var(--surface-container-low)] px-5 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-[color:var(--primary)]">
                {group.name}
              </div>

              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-[color:var(--outline-variant)] text-xs uppercase tracking-[0.12em] text-[color:var(--on-surface-variant)]">
                    <th className="px-5 py-4 font-medium">Feature</th>
                    <th className="px-5 py-4 font-medium">Basic</th>
                    <th className="px-5 py-4 font-medium">Professional</th>
                    <th className="px-5 py-4 font-medium">Business / Custom</th>
                  </tr>
                </thead>
                <tbody>
                  {group.rows.map((row) => (
                    <tr key={`${group.name}-${row.feature}`} className="border-b border-[color:var(--outline-variant)] last:border-b-0">
                      <td className="px-5 py-4 text-sm font-medium text-[color:var(--primary)]">{row.feature}</td>
                      <td className="px-5 py-4 text-sm text-[color:var(--on-surface)]">{renderStatus(row.basic)}</td>
                      <td className="px-5 py-4 text-sm text-[color:var(--on-surface)]">{renderStatus(row.professional)}</td>
                      <td className="px-5 py-4 text-sm text-[color:var(--on-surface)]">{renderStatus(row.custom)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 text-center">
        <a
          href="/contact?package=website-development"
          className="inline-flex items-center justify-center rounded-lg border border-[color:var(--outline-variant)] bg-[color:var(--surface-container)] px-5 py-3 text-sm font-semibold text-[color:var(--primary)] transition-colors hover:border-[color:var(--primary-container)] hover:text-[color:var(--primary-container)]"
        >
          Not Sure Which Plan Fits? Talk to Us.
        </a>
      </div>
    </section>
  );
}
