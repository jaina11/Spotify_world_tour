"use client";

import { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import MobileLayout from "@/components/MobileLayout";
import StickyPageHeader from "@/components/StickyPageHeader";
import {
  CURRENT_LOCATION,
  getDestinationById,
  getReasoningSteps,
} from "@/data/globe";

const ItineraryFlightMap = dynamic(
  () => import("@/components/ItineraryFlightMap"),
  { ssr: false }
);

/** Stage 1 — flight animation + headline hold before reasoning begins */
export const STAGE_ONE_MS = 4500;

/** Stage 2 — each reasoning line stays on screen this long before the next appears */
export const STEP_HOLD_MS = 5000;

/** Pause after the final step's checkmark before completion UI appears */
export const STAGE_THREE_PAUSE_MS = 1000;

/** Fade/slide transition when a new reasoning step enters */
export const STEP_REVEAL_TRANSITION_MS = 500;

export function getLoadingExperienceDurationMs(stepCount) {
  return STAGE_ONE_MS + STEP_HOLD_MS * stepCount + STAGE_THREE_PAUSE_MS;
}

export default function LoadingScreen() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [stage, setStage] = useState(1);
  const [visibleSteps, setVisibleSteps] = useState(0);
  const [completedSteps, setCompletedSteps] = useState(0);

  const from = searchParams.get("from") || CURRENT_LOCATION.name;
  const destinationIds = useMemo(() => {
    const raw = searchParams.get("destinations") || "";
    return raw.split(",").filter(Boolean);
  }, [searchParams]);

  const primaryDestination = getDestinationById(destinationIds[0]);
  const destinationName = primaryDestination?.name || "your destination";
  const reasoningSteps = getReasoningSteps(destinationIds[0] || "");
  const trackCount = 18 + (destinationIds.length - 1) * 6;

  useEffect(() => {
    if (destinationIds.length === 0) {
      router.replace("/globe");
    }
  }, [destinationIds.length, router]);

  useEffect(() => {
    const stageOneTimer = setTimeout(() => setStage(2), STAGE_ONE_MS);
    return () => clearTimeout(stageOneTimer);
  }, []);

  useEffect(() => {
    if (stage !== 2) return;

    setVisibleSteps(1);
    setCompletedSteps(0);

    const timers = [];

    for (let index = 0; index < reasoningSteps.length; index += 1) {
      timers.push(
        setTimeout(() => {
          setCompletedSteps(index + 1);
          if (index < reasoningSteps.length - 1) {
            setVisibleSteps(index + 2);
          }
        }, STEP_HOLD_MS * (index + 1))
      );
    }

    timers.push(
      setTimeout(
        () => setStage(3),
        STEP_HOLD_MS * reasoningSteps.length + STAGE_THREE_PAUSE_MS
      )
    );

    return () => timers.forEach(clearTimeout);
  }, [stage, reasoningSteps]);

  if (destinationIds.length === 0) {
    return (
      <MobileLayout activeTab="home" hideChrome>
        <div className="min-h-screen bg-black" />
      </MobileLayout>
    );
  }

  const destinationLabel =
    destinationIds.length > 1
      ? `${destinationName} +${destinationIds.length - 1} more`
      : destinationName;

  return (
    <MobileLayout activeTab="home" hideChrome={stage < 3}>
      {stage === 3 ? (
        <StickyPageHeader title="Itinerary ready" backHref="/globe" />
      ) : (
        <div className="h-14" aria-hidden="true" />
      )}

      <div className="relative min-h-[calc(100dvh-3.5rem)] overflow-hidden bg-black px-4 pb-8 pt-6">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(29,185,84,0.12),transparent_55%)]" />

        {stage === 1 && (
          <div className="relative animate-fade-in">
            <div className="mx-auto h-[220px] w-full max-w-[360px]">
              {primaryDestination && (
                <ItineraryFlightMap
                  destinationLng={primaryDestination.lng}
                  destinationLat={primaryDestination.lat}
                  destinationName={primaryDestination.name}
                  flightDurationSec={STAGE_ONE_MS / 1000}
                />
              )}
            </div>
            <div className="mt-6 text-center">
              <h1 className="text-2xl font-black leading-tight text-white">
                Crafting your music tour from {from} to {destinationLabel}
              </h1>
              <p className="mt-3 text-sm text-spotify-secondary">
                Fasten your seatbelt — you&apos;ll land at your playlist
                shortly.
              </p>
            </div>
          </div>
        )}

        {stage === 2 && (
          <div className="relative animate-fade-in pt-8">
            <h1 className="mb-6 text-center text-xl font-black text-white">
              Building your route to {destinationLabel}
            </h1>
            <div className="space-y-3">
              {reasoningSteps.map((step, index) => {
                const isVisible = index < visibleSteps;
                const isComplete = index < completedSteps;

                return (
                  <div
                    key={step}
                    className={`flex items-start gap-3 rounded-xl border border-spotify-green/15 bg-[#1DB954]/[0.06] px-4 py-3 transition-all ${
                      isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-2 opacity-0"
                    }`}
                    style={{ transitionDuration: `${STEP_REVEAL_TRANSITION_MS}ms` }}
                  >
                    <span
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold transition-colors duration-300 ${
                        isComplete
                          ? "bg-spotify-green text-black"
                          : "border border-spotify-green/40 text-spotify-green"
                      }`}
                    >
                      {isComplete ? "✓" : (
                        <span className="inline-block animate-pulse">…</span>
                      )}
                    </span>
                    <p className="text-sm leading-relaxed text-white/90">{step}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {stage === 3 && (
          <div className="relative flex min-h-[70vh] flex-col items-center justify-center text-center animate-fade-in">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-spotify-green/20 text-xl text-spotify-green">
              ✓
            </div>
            <h1 className="text-2xl font-black text-white">
              Your itinerary is complete!
            </h1>
            <p className="mt-3 max-w-[300px] text-sm text-spotify-secondary">
              {trackCount} tracks curated for your trip to {destinationLabel}
            </p>
            <Link
              href={`/itinerary/${destinationIds[0]}`}
              className="btn-spotify mt-8 w-full max-w-[320px] rounded-full bg-spotify-green py-3 text-sm font-bold text-black"
            >
              See your playlist
            </Link>
          </div>
        )}
      </div>
    </MobileLayout>
  );
}
