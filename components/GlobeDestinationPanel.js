"use client";

import { CURRENT_LOCATION, MAX_DESTINATIONS, matchDestination } from "@/data/globe";
import { getDomesticCity } from "@/data/domesticCities";

function LockIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </svg>
  );
}

function PlusIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

function CloseIcon({ className = "h-3.5 w-3.5" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

const INPUT_SURFACE =
  "w-full rounded-lg border border-spotify-green/20 bg-[#1DB954]/[0.06] px-3 py-2.5 text-sm text-white placeholder:text-spotify-muted focus:border-spotify-green focus:outline-none";

export default function GlobeDestinationPanel({
  mode,
  slots,
  selectedCount,
  canAddSlot,
  canSubmitInternational,
  selectedCityId,
  canSubmitDomestic,
  onSlotChange,
  onAddSlot,
  onRemoveSlot,
  onSubmitInternational,
  onSubmitDomestic,
}) {
  const selectedCity = selectedCityId ? getDomesticCity(selectedCityId) : null;

  return (
    <div className="px-4 pb-6 pt-2">
      <div className="space-y-4">
        <div>
          <label
            htmlFor="from-location"
            className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-spotify-secondary"
          >
            From
          </label>
          <div className="relative">
            <input
              id="from-location"
              type="text"
              value={CURRENT_LOCATION.name}
              disabled
              className={`${INPUT_SURFACE} pr-10 text-white/80`}
            />
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-spotify-muted">
              <LockIcon />
            </span>
          </div>
          <p className="mt-1.5 text-[11px] text-spotify-muted">
            Detected from your current location
          </p>
        </div>

        {mode === "international" ? (
          <>
            <div>
              <div className="mb-1.5 flex items-center justify-between gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-spotify-secondary">
                  Destinations
                </span>
                {canAddSlot && (
                  <button
                    type="button"
                    onClick={onAddSlot}
                    className="flex h-7 w-7 items-center justify-center rounded-full border border-spotify-green/30 bg-[#1DB954]/[0.12] text-spotify-green"
                    aria-label="Add destination"
                  >
                    <PlusIcon />
                  </button>
                )}
              </div>

              <div className="space-y-2">
                {slots.map((slot, index) => {
                  const matched = slot.query ? matchDestination(slot.query) : null;
                  const showHint = slot.query && !matched;

                  return (
                    <div key={slot.key} className="flex items-start gap-2">
                      <div className="min-w-0 flex-1">
                        <input
                          type="text"
                          value={slot.query}
                          onChange={(event) =>
                            onSlotChange(index, event.target.value)
                          }
                          placeholder={
                            index === 0
                              ? "Destination — tap a marker or type a country"
                              : "Add another destination"
                          }
                          className={INPUT_SURFACE}
                        />
                        {showHint && (
                          <p className="mt-1.5 text-[11px] text-spotify-live">
                            Try Australia, UK, China, Nepal, Greece, Mexico,
                            Nigeria, or Japan
                          </p>
                        )}
                      </div>
                      {index > 0 && (
                        <button
                          type="button"
                          onClick={() => onRemoveSlot(index)}
                          className="mt-2 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-spotify-secondary"
                          aria-label="Remove destination"
                        >
                          <CloseIcon />
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <span className="inline-flex items-center rounded-full border border-spotify-green/20 bg-[#1DB954]/[0.1] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-spotify-secondary">
                {selectedCount}/{MAX_DESTINATIONS} destinations selected
              </span>
            </div>

            <button
              type="button"
              onClick={onSubmitInternational}
              disabled={!canSubmitInternational}
              className={`btn-spotify w-full rounded-full py-3 text-sm font-bold ${
                canSubmitInternational
                  ? "bg-spotify-green text-black"
                  : "cursor-not-allowed bg-spotify-border text-spotify-muted"
              }`}
            >
              Create your music itinerary
            </button>
          </>
        ) : (
          <>
            <div>
              <label
                htmlFor="domestic-destination"
                className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-spotify-secondary"
              >
                Destination
              </label>
              <input
                id="domestic-destination"
                type="text"
                readOnly
                value={selectedCity?.name || ""}
                placeholder="Tap a city on the map"
                className={`${INPUT_SURFACE} text-white/80`}
              />
              {selectedCity && (
                <p className="mt-1.5 text-[11px] text-spotify-muted">
                  {selectedCity.vibeTag}
                </p>
              )}
            </div>

            <button
              type="button"
              onClick={onSubmitDomestic}
              disabled={!canSubmitDomestic}
              className={`btn-spotify w-full rounded-full py-3 text-sm font-bold ${
                canSubmitDomestic
                  ? "bg-spotify-green text-black"
                  : "cursor-not-allowed bg-spotify-border text-spotify-muted"
              }`}
            >
              Create your city tour
            </button>
          </>
        )}
      </div>
    </div>
  );
}
