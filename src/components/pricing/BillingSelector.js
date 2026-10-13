export function BillingSelector({ options, selectedOption, onChange }) {
  if (!options || options.length === 0) {
    return null;
  }

  if (options.length === 1) {
    return (
      <div className="rounded-full border border-outline-variant bg-surface-container px-4 py-2 text-sm font-medium text-on-surface-variant">
        {options[0].label}
      </div>
    );
  }

  return (
    <div className="inline-flex w-full flex-wrap items-center gap-2 rounded-full border border-outline-variant bg-surface-container p-1">
      {options.map((option) => {
        const isSelected = option.id === selectedOption;

        return (
          <button
            key={option.id}
            type="button"
            onClick={() => onChange(option.id)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              isSelected
                ? "bg-primary-container text-on-primary-fixed shadow-sm"
                : "text-on-surface-variant hover:bg-surface-container-high"
            }`}
            aria-pressed={isSelected}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
