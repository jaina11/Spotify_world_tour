"use client";

const MODES = [
  { id: "international", label: "International" },
  { id: "domestic", label: "Domestic" },
];

export default function GlobeModeToggle({ mode, onChange, className = "" }) {
  return (
    <div
      className={`flex rounded-full bg-white/[0.06] p-1 ring-1 ring-white/10 ${className}`}
      role="tablist"
      aria-label="Tour mode"
    >
      {MODES.map((option) => {
        const isActive = mode === option.id;
        return (
          <button
            key={option.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(option.id)}
            className={`flex-1 rounded-full px-3 py-2 text-xs font-bold transition-colors ${
              isActive
                ? "bg-spotify-green text-black"
                : "text-white/60 hover:text-white/80"
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
