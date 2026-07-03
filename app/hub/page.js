"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CardMapTexture from "@/components/CardMapTexture";
import MobileLayout from "@/components/MobileLayout";
import PassportBanner from "@/components/PassportBanner";
import StickyPageHeader, {
  HEADER_GRID_COLS,
} from "@/components/StickyPageHeader";
import {
  ChevronRightIcon,
  GlobeIcon,
  TourWaveIcon,
} from "@/components/icons";
import { getExploreCountries } from "@/data/countries";
import { hasSeenIntro } from "@/data/intro";

const TOUR_BUCKETS = [
  "Picked for you",
  "Trending now",
  "Hidden gem",
];

export default function HubPage() {
  const router = useRouter();
  const [canShow, setCanShow] = useState(false);

  useEffect(() => {
    if (!hasSeenIntro()) {
      router.replace("/intro");
      return;
    }
    setCanShow(true);
  }, [router]);

  if (!canShow) {
    return (
      <MobileLayout activeTab="home" hideChrome>
        <div className="min-h-screen bg-black" />
      </MobileLayout>
    );
  }

  return (
    <MobileLayout activeTab="home" hideNowPlaying>
      <StickyPageHeader title="World Tour" backHref="/" />

      <div className="relative -mx-4">
        <div
          className="absolute inset-x-0 top-0 h-[120px]"
          style={{
            background:
              "linear-gradient(180deg, #2D4A2D 0%, #1A2F1A 30%, #121212 60%, #121212 100%)",
          }}
        />
        <div className={`relative ${HEADER_GRID_COLS} items-start px-4 pb-2 pt-14`}>
          <div aria-hidden="true" />
          <h1 className="min-w-0 text-[22px] font-black leading-tight text-white">
            Where does your music roam?
          </h1>
          <div aria-hidden="true" />
        </div>
      </div>

      <PassportBanner className="mb-3 px-4" />

      <div className="flex min-h-[calc(100dvh-15rem)] flex-col gap-3 px-4 pb-4">
        <Link href="/events" className="tap-scale flex flex-1">
          <div className="relative flex w-full flex-col overflow-hidden rounded-xl p-5 shadow-[0_8px_24px_rgba(0,0,0,0.35)] ring-1 ring-white/10">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, #2D4A2D 0%, #1A3D28 28%, #1A2F1A 48%, #3D2A1A 72%, #121212 100%)",
              }}
            />
            <div
              className="pointer-events-none absolute -right-8 -top-10 h-36 w-36 rounded-full opacity-80"
              style={{
                background:
                  "radial-gradient(circle, rgba(29,185,84,0.22) 0%, transparent 70%)",
              }}
            />
            <div
              className="pointer-events-none absolute -bottom-10 left-1/4 h-28 w-28 rounded-full opacity-70"
              style={{
                background:
                  "radial-gradient(circle, rgba(240,160,48,0.12) 0%, transparent 70%)",
              }}
            />
            <CardMapTexture className="pointer-events-none absolute inset-0 h-full w-full opacity-90" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(29,185,84,0.1)_1px,transparent_0)] bg-[length:10px_10px] opacity-40" />
            <TourWaveIcon className="intro-icon-float pointer-events-none absolute right-3 top-3 h-16 w-16 text-white/25" />

            <div className="relative flex flex-1 flex-col">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0 flex-1 pr-14">
                  <h2 className="text-lg font-black text-white">Trending Festivals</h2>
                  <p className="mt-1 text-sm text-white/70">
                    Festival playlists from around the world
                  </p>
                </div>
                <ChevronRightIcon className="mt-1 h-5 w-5 shrink-0 text-white/80" />
              </div>

              <div className="mt-auto flex flex-wrap gap-x-3 gap-y-2 pt-5">
                {TOUR_BUCKETS.map((label) => (
                  <span
                    key={label}
                    className="flex items-center gap-1.5 text-[10px] font-medium text-white/50"
                  >
                    <span className="h-1 w-1 rounded-full bg-spotify-green" />
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Link>

        <Link href="/explore" className="tap-scale flex flex-1">
          <div className="relative flex w-full flex-col overflow-hidden rounded-xl p-5 shadow-[0_8px_24px_rgba(0,0,0,0.35)] ring-1 ring-white/10">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, #0A1A2F 0%, #142848 30%, #1A1A3D 52%, #121212 100%)",
              }}
            />
            <div
              className="pointer-events-none absolute -right-6 -top-8 h-36 w-36 rounded-full opacity-80"
              style={{
                background:
                  "radial-gradient(circle, rgba(123,104,238,0.25) 0%, transparent 70%)",
              }}
            />
            <div
              className="pointer-events-none absolute -bottom-12 left-0 h-32 w-32 rounded-full opacity-70"
              style={{
                background:
                  "radial-gradient(circle, rgba(59,130,246,0.14) 0%, transparent 70%)",
              }}
            />
            <CardMapTexture className="pointer-events-none absolute inset-0 h-full w-full opacity-90" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(123,104,238,0.1)_1px,transparent_0)] bg-[length:10px_10px] opacity-40" />
            <GlobeIcon className="intro-globe-spin pointer-events-none absolute right-3 top-3 h-16 w-16 text-white/25" />

            <div className="relative flex flex-1 flex-col">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0 flex-1 pr-14">
                  <h2 className="text-lg font-black text-white">
                    Explore the World
                  </h2>
                  <p className="mt-1 text-sm text-white/70">
                    Pick a country, discover its sound
                  </p>
                </div>
                <ChevronRightIcon className="mt-1 h-5 w-5 shrink-0 text-white/80" />
              </div>

              <p className="mt-auto pt-5 text-[10px] font-medium uppercase tracking-wider text-white/40">
                {getExploreCountries().length} countries to start
              </p>
            </div>
          </div>
        </Link>
      </div>
    </MobileLayout>
  );
}
