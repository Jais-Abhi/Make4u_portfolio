import {
  FileEdit,
  ShieldCheck,
  Bug,
  Gauge,
  Network,
  Headphones,
} from "lucide-react";

export function MaintenanceIncludes() {
  const items = [
    {
      icon: FileEdit,
      title: "Content & Asset Updates",
      description:
        "Minor text and image updates on published pages. Keep promotion banners, product specs, and staff profiles accurate.",
      meta: "Up to 30 mins per discrete task",
    },
    {
      icon: ShieldCheck,
      title: "Core Health & Patching",
      description:
        "Routine technical health checks, dependency patching, and core platform framework updates to insulate against exploits.",
      meta: "Managed vulnerability mitigations",
    },
    {
      icon: Bug,
      title: "Bug Fixes & Script Diagnostics",
      description:
        "Rapid diagnostics and code repair for covered features, styling breakages, and script failures across modern viewports.",
      meta: "Regression-tested patches",
    },
    {
      icon: Gauge,
      title: "Uptime & Load Monitoring",
      description:
        "Automated synthetic ping checks and load monitoring alerts ensuring your operational availability and latency thresholds.",
      meta: "24/7 endpoint status verification",
    },
    {
      icon: Network,
      title: "API & Integration Guard",
      description:
        "Maintenance of verified third-party conduits, lead generation webhooks, contact form dispatchers, and CRM pipelines.",
      meta: "Active token & route validation",
    },
    {
      icon: Headphones,
      title: "Dedicated Helpdesk Hours",
      description:
        "Direct access to senior engineering personnel during business operational windows via our centralized support portal.",
      meta: "Mon–Fri engineering access",
    },
  ];

  return (
    <section className="w-full bg-surface-container-lowest py-20 border-y border-surface-variant transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-gutter">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-12">
          <div>
            <span className="font-label-md text-label-md text-primary-container uppercase tracking-wider font-semibold">
              Technical Deliverables
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight font-bold mt-1">
              What Maintenance Includes
            </h2>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md leading-relaxed">
            Standardized precision services deployed across your digital assets
            to prevent downtime and safeguard search visibility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-space-lg rounded-lg bg-surface-container border border-surface-variant hover:border-primary-container/40 hover:-translate-y-1 transition-all duration-300 flex flex-col gap-space-sm group shadow-sm"
              >
                <div className="w-10 h-10 rounded bg-surface-container-high flex items-center justify-center text-primary-container group-hover:scale-110 transition-transform">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary text-lg font-semibold mt-2">
                  {item.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {item.description}
                </p>
                <div className="mt-auto pt-3 flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm border-t border-outline-variant/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-container" />
                  <span>{item.meta}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
