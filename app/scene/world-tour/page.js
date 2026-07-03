"use client";

import AIInsightCard from "@/components/AIInsightCard";
import MobileLayout from "@/components/MobileLayout";
import StickyPageHeader from "@/components/StickyPageHeader";
import TrackRow from "@/components/TrackRow";
import { USER_PROFILE, WORLD_TOUR_TRACKS } from "@/data/scenes";

const CITY_ORDER = ["tokyo", "paris", "newYork", "singapore", "dubai"];

function HeroMapTexture() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 400 200"
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <path
        d="M 28 35 Q 18 70 22 110 Q 28 155 48 168 Q 72 178 88 155 Q 98 125 92 85 Q 82 48 58 32 Q 42 24 28 35 Z"
        fill="white"
        className="opacity-[0.05]"
      />
      <path
        d="M 155 42 Q 148 65 152 95 Q 158 130 168 165 Q 178 185 192 175 Q 205 155 200 120 Q 195 80 188 55 Q 180 38 165 42 Z"
        fill="white"
        className="opacity-[0.05]"
      />
      <path
        d="M 210 38 Q 245 32 285 40 Q 325 48 355 55 Q 375 62 382 75 Q 388 90 378 105 Q 360 115 330 108 Q 295 98 265 88 Q 235 78 215 65 Q 200 52 210 38 Z"
        fill="white"
        className="opacity-[0.05]"
      />
      <path
        d="M 248 145 Q 275 138 305 142 Q 330 148 342 158 Q 348 168 335 175 Q 318 180 295 175 Q 268 168 252 158 Q 242 150 248 145 Z"
        fill="white"
        className="opacity-[0.05]"
      />
      <path
        d="M 118 72 Q 135 68 155 72 Q 172 78 180 92 Q 175 108 158 115 Q 138 120 122 110 Q 110 98 112 82 Q 114 75 118 72 Z"
        fill="white"
        className="opacity-[0.05]"
      />
    </svg>
  );
}

export default function WorldTourPage() {
  let trackNumber = 0;

  return (
    <MobileLayout activeTab="home">
      <StickyPageHeader title="Your World Tour" backHref="/globe" />

      <div className="relative -mx-4">
        <div
          className="relative h-[200px] w-full overflow-hidden"
          style={{
            background:
              "linear-gradient(180deg, #0D1B3E 0%, #1A0A3E 30%, #121212 70%)",
          }}
        >
          <HeroMapTexture />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, transparent 0%, #121212 100%)",
            }}
          />
          <div className="absolute inset-x-0 bottom-0 px-4 pb-4 pt-14">
            <p className="mb-1 text-xs text-white/70">
              Spotify · Your curated world tour
            </p>
            <h1
              className="text-3xl font-black text-white"
              style={{ textShadow: "0 2px 12px rgba(0,0,0,0.6)" }}
            >
              Your World Tour
            </h1>
            <p className="mt-1 line-clamp-2 text-sm text-white/80">
              25 tracks across 5 cities — shaped by your taste, powered by local
              trends.
            </p>
          </div>
        </div>
      </div>

      <div className="px-4">
        <AIInsightCard label="Your story here" className="mb-4">
          From Tokyo neon nights to Dubai desert beats — your listening history
          says you&apos;re ready to go global. We picked songs that match your
          vibe in every city.
        </AIInsightCard>

        <div className="mb-1 flex items-center gap-2">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-spotify-green text-xs text-white">
            ♪
          </span>
          <span className="text-xs text-spotify-secondary">
            Made for {USER_PROFILE.name}
          </span>
        </div>
        <p className="mb-4 text-[11px] text-[#B3B3B3]">
          25 songs, 1h 32 min · Updated monthly
        </p>

        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-4 text-spotify-secondary">
            <button type="button" className="text-xl" aria-label="Like">
              ♡
            </button>
            <button type="button" className="text-xl" aria-label="Download">
              ↓
            </button>
            <button type="button" className="text-xl" aria-label="Share">
              ↗
            </button>
            <button type="button" className="text-xl" aria-label="More">
              ⋯
            </button>
          </div>
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="text-lg text-spotify-secondary"
              aria-label="Shuffle"
            >
              ⇄
            </button>
            <button
              type="button"
              className="btn-spotify flex h-12 w-12 items-center justify-center rounded-full bg-spotify-green text-lg font-bold text-black"
              aria-label="Play"
            >
              ▶
            </button>
          </div>
        </div>

        {CITY_ORDER.map((cityKey, cityIndex) => {
          const city = WORLD_TOUR_TRACKS[cityKey];

          return (
            <div key={cityKey}>
              <section className="mb-4">
                <div className="mb-1 flex items-baseline justify-between">
                  <h2 className="text-lg font-bold text-white">
                    {city.flag} {city.city}
                  </h2>
                  <button
                    type="button"
                    className="text-xs font-bold text-spotify-secondary"
                  >
                    Show more
                  </button>
                </div>
                <p className="mb-2 text-[11px] text-white/40">{city.subtitle}</p>
                {city.tracks.map((track) => {
                  trackNumber += 1;
                  return (
                    <TrackRow
                      key={`${cityKey}-${track.name}`}
                      track={track}
                      index={trackNumber}
                      tagColor={track.tagColor}
                    />
                  );
                })}
              </section>

              {cityIndex < CITY_ORDER.length - 1 && (
                <div className="my-4 h-px w-full bg-white/[0.06]" />
              )}
            </div>
          );
        })}
      </div>
    </MobileLayout>
  );
}
