"use client";

import Link from "next/link";

export default function PassportUnlockModal({
  country,
  tracksDiscovered,
  onDismiss,
}) {
  if (!country) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 px-6">
      <div className="w-full max-w-[340px] rounded-2xl bg-spotify-card p-6 text-center ring-1 ring-spotify-green/25">
        <div className="passport-stamp mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-spotify-green/20 text-3xl">
          🛂
        </div>
        <h2 className="text-xl font-black text-white">
          Passport unlocked: {country.name}!
        </h2>
        <p className="mt-2 text-sm text-spotify-secondary">
          {tracksDiscovered} new songs discovered · {country.genreIdentity}
        </p>
        <Link
          href="/passport"
          className="btn-spotify mt-6 block w-full rounded-full bg-spotify-green py-3 text-sm font-bold text-black"
        >
          View your Music Passport
        </Link>
        <button
          type="button"
          onClick={onDismiss}
          className="mt-3 text-xs font-medium text-spotify-secondary"
        >
          Stay on itinerary
        </button>
      </div>
    </div>
  );
}
