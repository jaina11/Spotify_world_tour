"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import AIInsightCard from "@/components/AIInsightCard";
import ImageWithFallback from "@/components/ImageWithFallback";
import ItineraryBucketSection from "@/components/ItineraryBucketSection";
import ItineraryRevealSection from "@/components/ItineraryRevealSection";
import MobileLayout from "@/components/MobileLayout";
import PassportUnlockModal from "@/components/PassportUnlockModal";
import StatusBadge from "@/components/StatusBadge";
import StickyPageHeader from "@/components/StickyPageHeader";
import { trackKey } from "@/components/ItineraryTrackRow";
import { CURRENT_LOCATION } from "@/data/globe";
import { getItineraryCountry } from "@/data/itineraryCountries";
import {
  getPassportCountryEntry,
  isItineraryCountryUnlocked,
  MANUAL_PASSPORT_COMPLETION_DELAY_MS,
  PASSPORT_UNLOCK_THRESHOLD,
  saveItineraryProgress,
  unlockItineraryCountry,
} from "@/data/passport";

function FlightPathIcon({ className = "inline h-4 w-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
    </svg>
  );
}

export default function ItineraryScreen({ countryId }) {
  const router = useRouter();
  const country = getItineraryCountry(countryId);
  const [scrollY, setScrollY] = useState(0);
  const [playedKeys, setPlayedKeys] = useState(new Set());
  const [baselinePercent, setBaselinePercent] = useState(0);
  const [pulsingKey, setPulsingKey] = useState(null);
  const [showUnlockModal, setShowUnlockModal] = useState(false);
  const [hasUnlocked, setHasUnlocked] = useState(false);
  const [showManualCompletionCta, setShowManualCompletionCta] = useState(false);

  const allTracks = useMemo(() => {
    if (!country) return [];
    return [
      ...country.buckets.fromYourWorld,
      ...country.buckets.trendingLocally,
      ...country.buckets.discoveredByTravelers,
      ...country.buckets.hiddenGem,
    ];
  }, [country]);

  const playedPercent = country
    ? Math.min(
        100,
        Math.max(
          baselinePercent,
          Math.round((playedKeys.size / country.trackCount) * 100)
        )
      )
    : 0;

  useEffect(() => {
    if (!country) {
      router.replace("/globe");
    }
  }, [country, router]);

  useEffect(() => {
    if (!country) return;

    const saved = getPassportCountryEntry(country.id);
    if (saved?.progressPercent) {
      setBaselinePercent(saved.progressPercent);
    }
    if (isItineraryCountryUnlocked(country.id)) {
      setHasUnlocked(true);
    }
  }, [country]);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!country || playedPercent <= 0) return;
    saveItineraryProgress(country, playedPercent);
  }, [country, playedPercent]);

  useEffect(() => {
    if (!country || hasUnlocked || playedPercent < PASSPORT_UNLOCK_THRESHOLD) {
      return;
    }

    unlockItineraryCountry(country);
    setHasUnlocked(true);
    setShowUnlockModal(true);
  }, [country, hasUnlocked, playedPercent]);

  useEffect(() => {
    if (!country || hasUnlocked || playedPercent >= PASSPORT_UNLOCK_THRESHOLD) {
      setShowManualCompletionCta(false);
      return;
    }

    const timer = window.setTimeout(() => {
      setShowManualCompletionCta(true);
    }, MANUAL_PASSPORT_COMPLETION_DELAY_MS);

    return () => window.clearTimeout(timer);
  }, [country, hasUnlocked, playedPercent]);

  const handlePlay = useCallback((key) => {
    setPlayedKeys((prev) => new Set([...prev, key]));
    setPulsingKey(key);
    window.setTimeout(() => setPulsingKey(null), 650);
  }, []);

  const handlePlayAll = useCallback(() => {
    allTracks.forEach((track) => handlePlay(trackKey(track)));
  }, [allTracks, handlePlay]);

  const handleShuffle = useCallback(() => {
    const shuffled = [...allTracks].sort(() => Math.random() - 0.5);
    shuffled.slice(0, Math.ceil(shuffled.length / 2)).forEach((track) => {
      handlePlay(trackKey(track));
    });
  }, [allTracks, handlePlay]);

  const handleManualCompletion = useCallback(() => {
    if (!country || hasUnlocked) return;

    setBaselinePercent(PASSPORT_UNLOCK_THRESHOLD);
    setShowManualCompletionCta(false);
  }, [country, hasUnlocked]);

  if (!country) {
    return (
      <MobileLayout activeTab="home" hideChrome>
        <div className="min-h-screen bg-black" />
      </MobileLayout>
    );
  }

  const fromWorldCount = country.buckets.fromYourWorld.length;
  const trendingStart = fromWorldCount + 1;
  const trendingCount = country.buckets.trendingLocally.length;
  const travelersStart = trendingStart + trendingCount;
  const travelersCount = country.buckets.discoveredByTravelers.length;
  const hiddenStart = travelersStart + travelersCount;

  return (
    <MobileLayout activeTab="home">
      <StickyPageHeader title={country.name} backHref="/" />

      <div className="pb-8">
        <div className="relative -mx-4 h-[260px] overflow-hidden">
          <div
            className="absolute inset-0 will-change-transform"
            style={{ transform: `translateY(${scrollY * 0.25}px) scale(1.08)` }}
          >
            <ImageWithFallback
              src={country.heroImageUrl}
              alt={country.name}
              className="h-full w-full object-cover"
              fallbackGradient="linear-gradient(135deg, #1A2F3D, #121212)"
              fallbackClassName="h-full w-full"
            />
          </div>
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(18,18,18,0.85) 70%, #121212 100%)",
            }}
          />
          <div className="absolute inset-x-0 bottom-0 px-4 pb-5 pt-16">
            <h1 className="text-2xl font-black text-white">
              Your musical tour to {country.name}
            </h1>
            <div className="mt-2">
              <p className="flex flex-wrap items-center gap-1.5 text-sm text-spotify-secondary">
                <FlightPathIcon className="text-spotify-green" />
                <span>
                  From {CURRENT_LOCATION.name} → {country.name} ·{" "}
                  {country.trackCount} tracks · {country.durationMin}min ·
                  Curated just now
                </span>
              </p>
              <p className="mt-1 pl-5 text-[11px] text-spotify-muted">
                {playedPercent}% explored — {PASSPORT_UNLOCK_THRESHOLD}% unlocks
                your Music Passport
              </p>
              {showManualCompletionCta && (
                <button
                  type="button"
                  onClick={handleManualCompletion}
                  className="reasoning-expand mt-2 ml-5 rounded-full border border-spotify-green/25 bg-spotify-green/10 px-3 py-1 text-[10px] font-semibold text-spotify-green"
                >
                  Discovered enough? Unlock your Passport
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="mb-4 mt-1 flex items-center justify-end gap-4 px-4">
          <button
            type="button"
            className="text-lg text-spotify-secondary"
            aria-label="Save playlist"
          >
            +
          </button>
          <button
            type="button"
            onClick={handleShuffle}
            className="text-lg text-spotify-secondary"
            aria-label="Shuffle"
          >
            ⇄
          </button>
          <button
            type="button"
            onClick={handlePlayAll}
            className="btn-spotify flex h-12 w-12 items-center justify-center rounded-full bg-spotify-green text-lg font-bold text-black"
            aria-label="Play all"
          >
            ▶
          </button>
        </div>

        <ItineraryRevealSection className="mt-2">
          <div className="mx-4 overflow-hidden rounded-xl bg-white/[0.04]">
            <div className="relative h-32 w-full">
              <ImageWithFallback
                src={country.event.imageUrl}
                alt={country.event.name}
                className="h-full w-full object-cover"
                fallbackGradient={`linear-gradient(135deg, ${country.event.statusColor}44, #121212)`}
                fallbackClassName="h-full w-full"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent 30%, #242424 100%)",
                }}
              />
              <div className="absolute left-3 top-3">
                <StatusBadge color={country.event.statusColor}>
                  {country.event.status}
                </StatusBadge>
              </div>
            </div>
            <div className="p-3.5">
              <h3 className="text-base font-black text-white">
                {country.event.name}
              </h3>
              <p className="mt-0.5 text-[10px] uppercase tracking-wider text-spotify-muted">
                {country.event.region}
              </p>
              <p className="mt-1.5 text-[13px] leading-relaxed text-spotify-secondary">
                {country.event.description}
              </p>
              <AIInsightCard label="Why this is for you" className="mt-2.5">
                {country.event.surfacedReason}
              </AIInsightCard>
            </div>
          </div>
        </ItineraryRevealSection>

        <ItineraryBucketSection
          title="From your world"
          subtitle="Tracks matched to your taste profile"
          tracks={country.buckets.fromYourWorld}
          startIndex={1}
          pulsingKey={pulsingKey}
          onPlay={handlePlay}
        />

        <ItineraryBucketSection
          title="What locals are streaming"
          subtitle={`What's charting in ${country.name} right now`}
          tracks={country.buckets.trendingLocally}
          startIndex={trendingStart}
          pulsingKey={pulsingKey}
          onPlay={handlePlay}
        />

        <ItineraryBucketSection
          title="Discovered by travelers like you"
          subtitle={`Other listeners with a taste profile like yours who've explored ${country.name} also loved these`}
          tracks={country.buckets.discoveredByTravelers}
          startIndex={travelersStart}
          pulsingKey={pulsingKey}
          onPlay={handlePlay}
        />

        <ItineraryBucketSection
          title="Hidden corners"
          subtitle="Lesser-known, worth the detour"
          tracks={country.buckets.hiddenGem}
          startIndex={hiddenStart}
          pulsingKey={pulsingKey}
          onPlay={handlePlay}
        />
      </div>

      {showUnlockModal && (
        <PassportUnlockModal
          country={country}
          tracksDiscovered={country.trackCount}
          onDismiss={() => setShowUnlockModal(false)}
        />
      )}
    </MobileLayout>
  );
}
