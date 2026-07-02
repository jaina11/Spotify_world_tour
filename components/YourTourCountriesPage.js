"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ImageWithFallback from "@/components/ImageWithFallback";
import MobileLayout from "@/components/MobileLayout";
import StickyPageHeader, {
  HEADER_GRID_COLS,
} from "@/components/StickyPageHeader";
import { getItineraryCountry } from "@/data/itineraryCountries";
import {
  formatPassportUnlockDate,
  getUnlockedCountries,
} from "@/data/passport";

export default function YourTourCountriesPage() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const refresh = () => setCountries(getUnlockedCountries());
    refresh();
    window.addEventListener("focus", refresh);
    window.addEventListener("storage", refresh);
    return () => {
      window.removeEventListener("focus", refresh);
      window.removeEventListener("storage", refresh);
    };
  }, []);

  return (
    <MobileLayout activeTab="home">
      <StickyPageHeader title="Your Tour" backHref="/globe" />

      <div className="relative -mx-4">
        <div
          className="absolute inset-x-0 top-0 h-[180px]"
          style={{
            background:
              "linear-gradient(180deg, #2D4A2D 0%, #1A2F1A 30%, #121212 60%, #121212 100%)",
          }}
        />
        <div className={`relative ${HEADER_GRID_COLS} items-start px-4 pb-2 pt-14`}>
          <div aria-hidden="true" />
          <div className="min-w-0">
            <h1 className="text-[26px] font-black leading-tight text-white">
              Your unlocked destinations
            </h1>
            <p className="mt-1.5 text-[13px] leading-relaxed text-spotify-secondary">
              Revisit the music itineraries you&apos;ve already unlocked.
            </p>
          </div>
          <div aria-hidden="true" />
        </div>
      </div>

      <div className="space-y-3 px-4 pb-8">
        {countries.length === 0 ? (
          <p className="rounded-xl border border-dashed border-white/10 px-4 py-8 text-center text-sm text-spotify-secondary">
            Unlock a country on the globe to add it to Your Tour.
          </p>
        ) : (
          countries.map((entry) => {
            const country = getItineraryCountry(entry.id);
            if (!country) return null;

            return (
              <Link
                key={entry.id}
                href={`/itinerary/${entry.id}`}
                className="tap-scale block overflow-hidden rounded-xl bg-white/[0.04] ring-1 ring-white/10"
              >
                <div className="relative h-28 w-full">
                  <ImageWithFallback
                    src={country.heroImageUrl}
                    alt={country.name}
                    className="h-full w-full object-cover"
                    fallbackGradient="linear-gradient(135deg, #1A2F3D, #121212)"
                    fallbackClassName="h-full w-full"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to bottom, transparent 20%, rgba(18,18,18,0.95) 100%)",
                    }}
                  />
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-2xl leading-none">{entry.flag}</p>
                    <p className="mt-1 text-lg font-black text-white">
                      {country.name}
                    </p>
                    <p className="mt-0.5 text-[11px] text-spotify-green">
                      Unlocked {formatPassportUnlockDate(entry.unlockedAt)} ·{" "}
                      {entry.trackCount} tracks
                    </p>
                  </div>
                </div>
              </Link>
            );
          })
        )}
      </div>
    </MobileLayout>
  );
}
