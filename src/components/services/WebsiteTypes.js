import Link from "next/link";
import {
  Building2,
  Camera,
  ShoppingBag,
  Sparkles,
  Target,
  UtensilsCrossed,
} from "lucide-react";

const typeIcons = {
  Building2,
  UtensilsCrossed,
  Target,
  ShoppingBag,
  Sparkles,
};

export function WebsiteTypes({ items }) {
  return (
    <section className="mx-auto max-w-7xl overflow-x-hidden px-gutter py-16 md:py-20">
      <div className="max-w-2xl">
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[color:var(--primary-container)]">
          What we build
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[color:var(--primary)] md:text-4xl">
          Websites Designed Around Your Business
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[color:var(--on-surface-variant)]">
          Every business has different goals. We help you choose a website that fits your needs, budget, and future plans.
        </p>
      </div>

      <div className="mt-10 grid min-w-0 gap-5 md:grid-cols-2 xl:grid-cols-5">
        {items.map((item) => {
          const Icon = typeIcons[item.icon] || Building2;

          return (
            <div
              key={item.title}
              className="group flex h-full min-w-0 flex-col rounded-[24px] border border-[color:var(--outline-variant)] bg-[color:var(--surface-container)] p-5 transition-all duration-200 hover:-translate-y-1 hover:border-[color:var(--primary-container)]"
            >
              <div className="mb-4 flex min-w-0 items-start gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[color:var(--primary-container)]/10 text-[color:var(--primary-container)]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="min-w-0 flex-1 text-base font-semibold leading-snug text-[color:var(--primary)] break-words md:text-lg">
                  {item.title}
                </h3>
              </div>

              <p className="mt-0 flex-1 text-sm leading-relaxed text-[color:var(--on-surface-variant)] break-words">
                {item.description}
              </p>

              <Link
                href="/contact?package=website-development"
                className="mt-5 inline-flex items-center text-sm font-medium text-[color:var(--primary-container)]"
              >
                Discuss Your Project
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
