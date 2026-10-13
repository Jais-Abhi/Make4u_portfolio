export function PricingComparison({ service }) {
  if (!service) return null;

  return (
    <section className="mx-auto max-w-7xl px-gutter pb-16">
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-on-surface-variant">Comparison</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary">What each plan includes</h2>
      </div>

      <div className="overflow-hidden rounded-2xl border border-outline-variant bg-surface-container shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse text-left">
            <thead className="bg-surface-container-low">
              <tr>
                <th className="px-4 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-on-surface-variant">
                  Feature
                </th>
                {service.plans.map((plan) => (
                  <th key={plan.name} className="px-4 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                    {plan.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {service.comparisonRows.map((row) => (
                <tr key={row.label} className="border-t border-outline-variant/70">
                  <td className="px-4 py-4 text-sm font-semibold text-primary">{row.label}</td>
                  {row.values.map((value, index) => (
                    <td key={`${row.label}-${index}`} className="px-4 py-4 text-sm text-on-surface-variant">
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
