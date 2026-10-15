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
    <section className="border-y border-[color:var(--outline-variant)] bg-[color:var(--surface-container-low)]/60">
      <div className="mx-auto max-w-7xl px-gutter py-16 md:py-20">
        <div className="max-w-2xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[color:var(--primary-container)]">
            Built for your business
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[color:var(--primary)] md:text-4xl">
            More Than Just a Good-Looking Website
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {items.map((item) => {
            const Icon = iconMap[item.icon] || ArrowUpRight;

            return (
              <div
                key={item.title}
                className="rounded-[24px] border border-[color:var(--outline-variant)] bg-[color:var(--surface-container)] p-5"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--primary-container)]/10 text-[color:var(--primary-container)]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-[color:var(--primary)]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--on-surface-variant)]">
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
