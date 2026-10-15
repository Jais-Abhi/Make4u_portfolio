import { Check, CircleCheckBig, X } from "lucide-react";

function renderStatus(value) {
  const includedKeywords = ["Included", "Included if agreed", "Included as scoped", "Basic setup", "Enhanced", "Custom scope", "Custom", "Available", "Available as scoped", "Included as scoped", "Included if scoped", "Included by default"]; 

  const excludedKeywords = [
    "Not included",
    "Not included by default",
    "Optional extra",
    "Separate service",
    "Separate quote",
    "Not included by default",
    "Charged separately",
    "Additional charge",
    "Not included by default",
  ];

  if (value === "Included" || includedKeywords.includes(value)) {
    return (
      <span className="inline-flex items-center gap-2 text-[#2d4d12] dark:text-[#C8F169]" aria-label="Included">
        <CircleCheckBig className="h-4 w-4 stroke-[3]" />
        <span>{value}</span>
      </span>
    );
  }

  if (excludedKeywords.some((keyword) => value.includes(keyword)) || value === "Not included") {
    return (
      <span className="inline-flex items-center gap-2 text-[#8f2f2f] dark:text-[#F2A5A5]" aria-label="Not included">
        <X className="h-4 w-4 stroke-[3]" />
        <span>{value}</span>
      </span>
    );
  }

  return <span className="text-sm text-[color:var(--on-surface)]">{value}</span>;
}

export function WebsiteComparison({ groups }) {
  return (
    <section id="comparison" className="mx-auto max-w-7xl px-gutter py-12 md:py-20">
      <div className="max-w-2xl">
        <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-[#C8F169] sm:text-[10px]">
          Compare every feature
        </p>
        <h2 className="mt-4 text-2xl font-semibold tracking-tight text-[color:var(--primary)] sm:text-3xl md:text-4xl">
          Compare Every Feature
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-[color:var(--on-surface-variant)] sm:text-base">
          See exactly what is included in each package before choosing your plan.
        </p>
      </div>

      <div className="mt-8 overflow-x-auto pb-2">
        <table className="w-full min-w-[760px] overflow-hidden rounded-[28px] border border-[color:var(--outline-variant)] bg-[color:var(--surface-container)] text-left">
          <thead className="bg-[color:var(--surface-container-low)]">
            <tr>
              <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--on-surface-variant)]">
                Feature
              </th>
              <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--on-surface-variant)]">
                Basic
              </th>
              <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--on-surface-variant)]">
                Professional
              </th>
              <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--on-surface-variant)]">
                Business / Custom
              </th>
            </tr>
          </thead>
          <tbody>
            {groups.flatMap((group) =>
              group.rows.map((row) => (
                <tr key={`${group.name}-${row.feature}`} className="border-t border-[color:var(--outline-variant)] align-top">
                  <td className="px-4 py-4 align-top text-sm font-medium text-[color:var(--primary)]">{row.feature}</td>
                  <td className="px-4 py-4 align-top text-sm text-[color:var(--on-surface-variant)]">{renderStatus(row.basic)}</td>
                  <td className="px-4 py-4 align-top text-sm text-[color:var(--on-surface-variant)]">{renderStatus(row.professional)}</td>
                  <td className="px-4 py-4 align-top text-sm text-[color:var(--on-surface-variant)]">{renderStatus(row.custom)}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-8 text-center">
        <a
          href="/contact?package=website-development"
          className="inline-flex items-center justify-center rounded-lg border border-[color:var(--outline-variant)] bg-[color:var(--surface-container)] px-5 py-3 text-sm font-semibold text-[color:var(--primary)] transition-colors hover:border-[#C8F169] hover:text-[#C8F169]"
        >
          Not Sure Which Plan Fits? Talk to Us.
        </a>
      </div>
    </section>
  );
}
