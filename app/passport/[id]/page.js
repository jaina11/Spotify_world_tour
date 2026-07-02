"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ImageWithFallback from "@/components/ImageWithFallback";
import MobileLayout from "@/components/MobileLayout";
import StickyPageHeader from "@/components/StickyPageHeader";
import { getItineraryCountry } from "@/data/itineraryCountries";
import {
  formatPassportUnlockDate,
  getPassportCountryEntry,
  isItineraryCountryUnlocked,
} from "@/data/passport";

export default function PassportRecapPage({ params }) {
  const router = useRouter();
  const country = getItineraryCountry(params.id);
  const [entry, setEntry] = useState(null);

  useEffect(() => {
    if (!country) {
      router.replace("/passport");
      return;
    }

    const saved = getPassportCountryEntry(country.id);
    if (!saved || !isItineraryCountryUnlocked(country.id)) {
      router.replace(`/itinerary/${country.id}`);
      return;
    }

    setEntry(saved);
  }, [country, router]);

  if (!country || !entry) {
    return (
      <MobileLayout activeTab="home">
        <div className="min-h-screen bg-black" />
      </MobileLayout>
    );
  }

  return (
    <MobileLayout activeTab="home">
      <StickyPageHeader title={country.name} backHref="/passport" />

      <div className="px-4 pb-8 pt-14">
        <div className="relative -mx-4 mb-5 h-[180px] overflow-hidden">
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
                "linear-gradient(to bottom, transparent 20%, #121212 100%)",
            }}
          />
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-3xl">{country.flag}</p>
            <h1 className="mt-1 text-2xl font-black text-white">
              {country.name}
            </h1>
            <p className="mt-1 text-xs text-spotify-green">
              Unlocked {formatPassportUnlockDate(entry.unlockedAt)}
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <div className="rounded-xl bg-white/[0.04] px-4 py-3">
            <p className="text-[10px] uppercase tracking-wider text-spotify-muted">
              Songs discovered
            </p>
            <p className="mt-1 text-lg font-black text-white">
              {country.trackCount} tracks
            </p>
          </div>
          <div className="rounded-xl bg-white/[0.04] px-4 py-3">
            <p className="text-[10px] uppercase tracking-wider text-spotify-muted">
              Genre explored
            </p>
            <p className="mt-1 text-sm font-semibold text-white">
              {country.genreIdentity}
            </p>
          </div>
          <div className="rounded-xl bg-white/[0.04] px-4 py-3">
            <p className="text-[10px] uppercase tracking-wider text-spotify-muted">
              Festival tied to your trip
            </p>
            <p className="mt-1 text-sm font-bold text-white">
              {country.event.name}
            </p>
            <p className="mt-0.5 text-xs text-spotify-secondary">
              {country.event.region}
            </p>
          </div>
        </div>

        <Link
          href={`/itinerary/${country.id}`}
          className="btn-spotify mt-6 block w-full rounded-full bg-spotify-green py-3 text-center text-sm font-bold text-black"
        >
          Revisit your itinerary
        </Link>
      </div>
    </MobileLayout>
  );
}
