"use client";

import { useEffect, useMemo, useState } from "react";
import ImageWithFallback from "@/components/ImageWithFallback";
import MobileLayout from "@/components/MobileLayout";
import PassportCountryStamps from "@/components/PassportCountryStamps";
import PassportJourneyCard from "@/components/PassportJourneyCard";
import SharePassport from "@/components/SharePassport";
import StickyPageHeader from "@/components/StickyPageHeader";
import { buildPassportContent } from "@/data/passportContent";
import { getPassportDisplayStats } from "@/data/passport";
import { USER_PROFILE } from "@/data/scenes";

const HERO_DOTS = [
  { top: "18%", left: "12%" },
  { top: "32%", left: "72%" },
  { top: "48%", left: "38%" },
  { top: "62%", left: "85%" },
  { top: "28%", left: "52%" },
  { top: "55%", left: "18%" },
];

function WorldMapBackground({ className = "" }) {
  return (
    <svg
      viewBox="0 0 400 200"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <path
        d="M 28 35 Q 18 70 22 110 Q 28 155 48 168 Q 72 178 88 155 Q 98 125 92 85 Q 82 48 58 32 Q 42 24 28 35 Z"
        fill="white"
      />
      <path
        d="M 155 42 Q 148 65 152 95 Q 158 130 168 165 Q 178 185 192 175 Q 205 155 200 120 Q 195 80 188 55 Q 180 38 165 42 Z"
        fill="white"
      />
      <path
        d="M 210 38 Q 245 32 285 40 Q 325 48 355 55 Q 375 62 382 75 Q 388 90 378 105 Q 360 115 330 108 Q 295 98 265 88 Q 235 78 215 65 Q 200 52 210 38 Z"
        fill="white"
      />
      <path
        d="M 248 145 Q 275 138 305 142 Q 330 148 342 158 Q 348 168 335 175 Q 318 180 295 175 Q 268 168 252 158 Q 242 150 248 145 Z"
        fill="white"
      />
      <path
        d="M 118 72 Q 135 68 155 72 Q 172 78 180 92 Q 175 108 158 115 Q 138 120 122 110 Q 110 98 112 82 Q 114 75 118 72 Z"
        fill="white"
      />
    </svg>
  );
}

function formatKm(km) {
  if (km >= 1000) {
    return `${(km / 1000).toFixed(1).replace(/\.0$/, "")}k`;
  }
  return String(km);
}

function SectionHeader({ title, subtitle }) {
  return (
    <div className="mb-3">
      <h2 className="text-xl font-black text-white">{title}</h2>
      <p className="mt-1 text-xs text-spotify-secondary">{subtitle}</p>
    </div>
  );
}

function LanguageBar({ item }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="flex items-center gap-3">
      <span className="text-lg">{item.flag}</span>
      <span className="w-16 shrink-0 text-sm text-white">{item.lang}</span>
      <div className="relative h-3 flex-1 rounded-full bg-white/10">
        <div
          className="language-bar-fill flex h-full items-center justify-end rounded-full pr-1.5"
          style={{
            width: mounted ? `${item.pct}%` : "0%",
            transition: "width 1s ease-out",
          }}
        >
          {item.pct >= 20 && (
            <span className="text-[9px] font-bold text-black">{item.pct}%</span>
          )}
        </div>
      </div>
      {item.pct < 20 && (
        <span className="w-8 shrink-0 text-right text-xs text-spotify-secondary">
          {item.pct}%
        </span>
      )}
    </div>
  );
}

function EmptySection({ message }) {
  return (
    <p className="mb-6 rounded-xl border border-dashed border-white/10 px-4 py-6 text-center text-sm text-spotify-secondary">
      {message}
    </p>
  );
}

export default function PassportPage() {
  const [showShare, setShowShare] = useState(false);
  const [stats, setStats] = useState({
    countries: 0,
    languages: 0,
    kmTraveled: 0,
    unlocks: [],
    attempted: [],
  });

  useEffect(() => {
    const refreshStats = () => setStats(getPassportDisplayStats());
    refreshStats();
    window.addEventListener("focus", refreshStats);
    window.addEventListener("storage", refreshStats);
    return () => {
      window.removeEventListener("focus", refreshStats);
      window.removeEventListener("storage", refreshStats);
    };
  }, []);

  const content = useMemo(
    () => buildPassportContent(stats.unlocks),
    [stats.unlocks]
  );

  const kmDisplay = formatKm(stats.kmTraveled);
  const hasUnlocks = stats.unlocks.length > 0;

  return (
    <MobileLayout activeTab="home">
      <StickyPageHeader
        title="Music Passport"
        backHref="/hub"
        onShare={() => setShowShare(true)}
      />

      <div className="pb-4">
        <section className="relative overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, #1DB954 0%, #0A3D1F 35%, #121212 75%, #121212 100%)",
            }}
          />

          <WorldMapBackground className="pointer-events-none absolute left-0 top-0 h-52 w-full opacity-[0.05]" />

          <div className="pointer-events-none absolute left-1/2 top-[62%] -translate-x-1/2 -translate-y-1/2">
            <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]" />
            <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]" />
          </div>

          <svg
            className="pointer-events-none absolute right-8 top-24 h-12 w-12 rotate-[15deg] text-white opacity-[0.12]"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
          </svg>

          {HERO_DOTS.map((dot, i) => (
            <span
              key={i}
              className="pointer-events-none absolute h-1 w-1 rounded-full bg-white/[0.08]"
              style={{ top: dot.top, left: dot.left }}
            />
          ))}

          <div className="relative z-10 px-4 pt-14">
            <p className="mt-6 text-[10px] font-black uppercase tracking-[5px] text-white/70">
              SPOTIFY WORLD TOUR
            </p>
            <p className="mt-1 text-3xl font-black text-white">
              {USER_PROFILE.name}&apos;s Passport
            </p>
            <p className="mt-2 text-xs tracking-[6px] text-white/15">
              · · · · · · · · ·
            </p>

            <div className="relative mt-6">
              <div className="pointer-events-none absolute inset-x-0 top-1/2 h-16 -translate-y-1/2 bg-spotify-green/[0.08] blur-2xl" />

              <div className="relative flex">
                <div className="flex-1 border-r border-white/15 py-1 pr-3 text-center">
                  <p className="text-4xl font-black text-white">
                    {stats.countries}
                  </p>
                  <p className="text-[10px] uppercase tracking-wider text-white/50">
                    Countries
                  </p>
                </div>
                <div className="flex-1 border-r border-white/15 px-3 py-1 text-center">
                  <p className="text-4xl font-black text-white">
                    {stats.languages}
                  </p>
                  <p className="text-[10px] uppercase tracking-wider text-white/50">
                    Languages
                  </p>
                </div>
                <div className="flex-1 py-1 pl-3 text-center">
                  <p className="text-4xl font-black text-white">{kmDisplay}</p>
                  <p className="text-[10px] uppercase tracking-wider text-white/50">
                    km traveled
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-4 mb-8 text-sm italic text-white/40">
              {hasUnlocks
                ? "beyond your everyday English"
                : "unlock a country to start collecting stamps"}
            </p>
          </div>
        </section>

        <div className="px-4">
          <SectionHeader
            title="Your country stamps"
            subtitle="Only destinations you've started exploring appear here"
          />
          <div className="mb-6">
            <PassportCountryStamps countries={stats.attempted} />
          </div>

          {hasUnlocks && (
            <>
              <SectionHeader
                title="Songs you didn't know you needed"
                subtitle="Tracks from unfamiliar artists you discovered through World Tour and loved"
              />
              {content.discoveries.length > 0 ? (
                <div className="mb-6 flex gap-3">
                  {content.discoveries.map((discovery) => (
                    <div
                      key={discovery.id}
                      className="min-w-0 flex-1 overflow-hidden rounded-xl"
                    >
                      <div className="relative">
                        <ImageWithFallback
                          src={discovery.imageUrl}
                          alt={discovery.track}
                          className="h-40 w-full rounded-xl object-cover"
                          fallbackGradient="radial-gradient(circle at 50% 50%, #444, #222, #111)"
                          fallbackClassName="h-40 w-full rounded-xl"
                        />
                        <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                        <div className="absolute bottom-2 left-2 right-2">
                          <span className="inline-block rounded border border-white/30 bg-black/60 px-2 py-1 text-[7px] font-bold uppercase leading-tight tracking-wide text-white backdrop-blur-sm">
                            Found via {discovery.foundVia}
                          </span>
                        </div>
                      </div>
                      <p className="mt-2 truncate text-base font-bold text-white">
                        {discovery.track}
                      </p>
                      <p className="truncate text-xs text-spotify-secondary">
                        {discovery.artist}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <EmptySection message="Play tracks on an unlocked itinerary to surface discoveries here." />
              )}

              {content.artists.length > 0 && (
                <>
                  <SectionHeader
                    title="Artists who just entered your world"
                    subtitle="New-to-you artists you've now engaged with"
                  />
                  <div className="mb-6 flex justify-between gap-2">
                    {content.artists.map((artist) => (
                      <div
                        key={artist.id}
                        className="flex min-w-0 flex-1 flex-col items-center"
                      >
                        <ImageWithFallback
                          src={artist.imageUrl}
                          alt={artist.name}
                          className="h-20 w-20 rounded-full object-cover ring-2 ring-spotify-green"
                          fallbackGradient="radial-gradient(circle at 50% 50%, #444, #222, #111)"
                          fallbackClassName="h-20 w-20 rounded-full ring-2 ring-spotify-green"
                        />
                        <p className="mt-2 truncate text-center text-sm font-semibold text-white">
                          {artist.name}
                        </p>
                        <p className="text-sm">{artist.flag}</p>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {content.worlds.length > 0 && (
                <>
                  <SectionHeader
                    title="Worlds you stepped into"
                    subtitle="Cultural moments you explored through World Tour"
                  />
                  <div className="mb-6 space-y-2">
                    {content.worlds.map((world) => (
                      <div
                        key={world.id}
                        className="tap-scale flex items-center gap-3 rounded-xl bg-white/5 px-3 py-3"
                      >
                        <span
                          className="h-2.5 w-2.5 shrink-0 rounded-full"
                          style={{
                            backgroundColor: world.statusColor || "#1DB954",
                          }}
                        />
                        <div className="min-w-0 flex-1">
                          <p className="font-bold text-white">{world.scene}</p>
                          <p className="text-xs text-spotify-muted">
                            {world.region}
                          </p>
                        </div>
                        <p className="shrink-0 text-sm font-bold text-spotify-green">
                          {world.tracksExplored} tracks explored
                        </p>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {content.genresSnuckIn.length > 0 && (
                <>
                  <SectionHeader
                    title="Genres that snuck in"
                    subtitle="These weren't in your vocabulary last month"
                  />
                  <div className="mb-6 flex flex-wrap gap-2">
                    {content.genresSnuckIn.map((genre) => (
                      <span
                        key={genre}
                        className="flex items-center gap-1.5 rounded-full bg-white/[0.04] px-4 py-2 text-sm text-white"
                      >
                        <span className="h-2 w-2 shrink-0 rounded-full bg-spotify-green" />
                        {genre}
                      </span>
                    ))}
                  </div>
                </>
              )}

              {content.languageBreakdown.length > 0 && (
                <>
                  <SectionHeader
                    title="Your ear speaks more than you think"
                    subtitle="Languages of music you explored"
                  />
                  <div className="mb-6 space-y-3">
                    {content.languageBreakdown.map((item) => (
                      <LanguageBar key={item.lang} item={item} />
                    ))}
                  </div>
                </>
              )}
            </>
          )}

          <SectionHeader
            title="Where your music took you"
            subtitle="Your sound crossed borders"
          />
          <div className="mb-6">
            <PassportJourneyCard
              kmTraveled={stats.kmTraveled}
              countries={stats.countries}
              languages={stats.languages}
              stops={content.journey.stops}
              flightPaths={content.journey.flightPaths}
              genreSummary={content.journey.genreSummary}
            />
          </div>
        </div>

        <div className="mx-4 mb-6">
          <button
            type="button"
            onClick={() => setShowShare(true)}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-spotify-green py-3 text-sm font-bold text-black"
          >
            <svg
              className="h-4 w-4 shrink-0 text-black"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M7 17 17 7" />
              <path d="M9 7h8v8" />
            </svg>
            Share Your Passport
          </button>
        </div>
      </div>

      {showShare && (
        <SharePassport stats={stats} onClose={() => setShowShare(false)} />
      )}
    </MobileLayout>
  );
}
