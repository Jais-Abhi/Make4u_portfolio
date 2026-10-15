import {
  ArrowUpRight,
  ChartNoAxesCombined,
  FormInput,
  Gauge,
  LayoutGrid,
  MapPinned,
  MessageCircleMore,
  MonitorSmartphone,
  Search,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

const iconMap = {
  MonitorSmartphone,
  LayoutGrid,
  Search,
  Gauge,
  FormInput,
  MessageCircleMore,
  MapPinned,
  ShieldCheck,
  ChartNoAxesCombined,
  TrendingUp,
};

export function WebsiteFeatures({ items }) {
  return (
    <section className="overflow-x-hidden border-y border-[color:var(--outline-variant)] bg-[color:var(--surface-container-low)]/60">
      <div className="mx-auto max-w-7xl px-gutter py-16 md:py-20">
        <div className="max-w-2xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[color:var(--primary-container)]">
            Built for your business
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[color:var(--primary)] md:text-4xl">
            More Than Just a Good-Looking Website
          </h2>
        </div>

        <div className="mt-10 grid min-w-0 gap-5 md:grid-cols-2 xl:grid-cols-5">
          {items.map((item) => {
            const Icon = iconMap[item.icon] || ArrowUpRight;

            return (
              <div
                key={item.title}
                className="min-w-0 rounded-[24px] border border-[color:var(--outline-variant)] bg-[color:var(--surface-container)] p-5"
              >
                <div className="mb-4 flex min-w-0 items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[color:var(--primary-container)]/10 text-[color:var(--primary-container)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="min-w-0 flex-1 text-base font-semibold leading-snug text-[color:var(--primary)] break-words">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--on-surface-variant)] break-words">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
