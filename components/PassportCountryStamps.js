"use client";

import Link from "next/link";
import {
  formatPassportUnlockDate,
  PASSPORT_UNLOCK_THRESHOLD,
} from "@/data/passport";

export default function PassportCountryStamps({ countries }) {
  if (countries.length === 0) {
    return (
      <p className="rounded-xl border border-dashed border-white/10 px-4 py-6 text-center text-sm text-spotify-secondary">
        Start a music itinerary and play a track to collect your first stamp.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3">
      {countries.map((entry) => {
        const isUnlocked =
          entry.progressPercent >= PASSPORT_UNLOCK_THRESHOLD || entry.unlockedAt;
        const href = isUnlocked
          ? `/passport/${entry.id}`
          : `/itinerary/${entry.id}`;

        return (
          <Link
            key={entry.id}
            href={href}
            className={`tap-scale block rounded-xl border px-3 py-3 transition-colors ${
              isUnlocked
                ? "border-spotify-green/30 bg-spotify-green/[0.08]"
                : "border-white/10 bg-white/[0.03] opacity-70"
            }`}
          >
            <div className="flex items-start gap-2.5">
              <span
                className={`text-2xl ${isUnlocked ? "" : "grayscale"}`}
                aria-hidden="true"
              >
                {entry.flag}
              </span>
              <div className="min-w-0 flex-1">
                <p
                  className={`truncate text-sm font-bold ${
                    isUnlocked ? "text-white" : "text-spotify-secondary"
                  }`}
                >
                  {entry.name}
                </p>
                {isUnlocked ? (
                  <p className="mt-0.5 text-[10px] text-spotify-green">
                    Unlocked {formatPassportUnlockDate(entry.unlockedAt)}
                  </p>
                ) : (
                  <p className="mt-0.5 text-[10px] text-spotify-muted">
                    {entry.progressPercent}% explored
                  </p>
                )}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
