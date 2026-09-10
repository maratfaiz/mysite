const labels = [
  "OPEN TO FREELANCE",
  "DESIGN SYSTEMS",
  "TYPOGRAPHY",
  "WEBFLOW",
  "INTERACTION DESIGN",
];

export function TagStrip() {
  return (
    <div className="mx-auto mt-64 w-full max-w-[1200px] overflow-x-auto px-16">
      <div className="flex w-max items-center gap-8">
        {labels.map((label) => (
          <span
            key={label}
            className="whitespace-nowrap rounded-badges border border-ink bg-concrete px-8 py-4 font-haffer-mono text-mono-label text-ink"
          >
            ✱ {label}
          </span>
        ))}
      </div>
    </div>
  );
}
