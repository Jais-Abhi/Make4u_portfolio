export function ServiceSelector({ services, selectedServiceId, onSelect }) {
  return (
    <div className="w-full">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h2 className="text-lg font-semibold text-primary">Choose a service</h2>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => {
          const isSelected = service.id === selectedServiceId;

          return (
            <button
              key={service.id}
              type="button"
              onClick={() => onSelect(service.id)}
              className={`rounded-xl border px-4 py-3 text-left transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-container/70 ${
                isSelected
                  ? "border-primary-container bg-primary-container/8 shadow-sm"
                  : "border-outline-variant bg-surface-container hover:border-primary-container/60 hover:bg-surface-container-high"
              }`}
              aria-pressed={isSelected}
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-on-surface-variant">
                    {service.shortLabel}
                  </p>
                  <p className="mt-1 text-base font-semibold text-primary">{service.name}</p>
                </div>
                {isSelected && (
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary-container text-xs font-bold text-on-primary-fixed">
                    ✓
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
