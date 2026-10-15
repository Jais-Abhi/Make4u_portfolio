import { Check, X } from "lucide-react";

function renderStatus(value) {
  if (value === "Included") {
    return (
      <span className="inline-flex items-center gap-2 text-[#3d6f14] dark:text-[#C8F169]" aria-label="Included">
        <Check className="h-5 w-5 stroke-[2.75]" />
        <span className="sr-only">Included</span>
      </span>
    );
  }

  if (value === "Not included" || value === "Not included by default") {
    return (
      <span className="inline-flex items-center gap-2 text-[#a63d3d] dark:text-[#F2A5A5]" aria-label="Not included">
        <X className="h-5 w-5 stroke-[2.75]" />
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
        <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#C8F169]">
          Compare every feature
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[color:var(--primary)] md:text-4xl">
          Compare Every Feature
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[color:var(--on-surface-variant)]">
          See exactly what is included in each package before choosing your plan.
        </p>
      </div>

      <div className="mt-8 overflow-x-auto pb-2">
        <table className="min-w-[760px] w-full overflow-hidden rounded-[28px] border border-[color:var(--outline-variant)] bg-[color:var(--surface-container)] text-left">
          <thead className="bg-[color:var(--surface-container-low)]">
            <tr>
              <th className="px-4 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--on-surface-variant)]">
                Feature
              </th>
              <th className="px-4 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--on-surface-variant)]">
                Basic
              </th>
              <th className="px-4 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--on-surface-variant)]">
                Professional
              </th>
              <th className="px-4 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--on-surface-variant)]">
                Business / Custom
              </th>
            </tr>
          </thead>
          <tbody>
            {groups.flatMap((group) =>
              group.rows.map((row) => (
                <tr key={`${group.name}-${row.feature}`} className="border-t border-[color:var(--outline-variant)]">
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
