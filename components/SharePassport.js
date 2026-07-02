"use client";

import { useMemo } from "react";
import ImageWithFallback from "@/components/ImageWithFallback";
import { buildPassportContent } from "@/data/passportContent";
import { USER_PROFILE } from "@/data/scenes";

const SCATTER_DOTS = [
  { top: "12%", left: "18%", opacity: 0.08 },
  { top: "22%", left: "78%", opacity: 0.06 },
  { top: "38%", left: "42%", opacity: 0.1 },
  { top: "55%", left: "12%", opacity: 0.05 },
  { top: "68%", left: "88%", opacity: 0.07 },
];

const SCAN_BARS = [
  4, 10, 6, 14, 8, 18, 11, 22, 7, 16, 12, 24, 9, 15, 5, 13, 8, 19, 10, 14, 6, 11, 7, 17,
];

function formatKm(km) {
  if (km >= 1000) {
    return `${(km / 1000).toFixed(1).replace(/\.0$/, "")}k`;
  }
  return String(km);
}

function formatKmFull(km) {
  return km.toLocaleString();
}

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
        opacity="0.03"
      />
      <path
        d="M 210 38 Q 245 32 285 40 Q 325 48 355 55 Q 375 62 382 75 Q 388 90 378 105 Q 360 115 330 108 Q 295 98 265 88 Q 235 78 215 65 Q 200 52 210 38 Z"
        fill="white"
        opacity="0.03"
      />
    </svg>
  );
}

function SpotifyScanCode() {
  return (
    <svg width="96" height="32" viewBox="0 0 96 32" aria-hidden="true" className="mx-auto">
      {SCAN_BARS.map((h, i) => (
        <rect
          key={i}
          x={i * 4}
          y={(32 - h) / 2}
          width={2}
          height={h}
          fill="white"
          opacity="0.3"
          rx={1}
        />
      ))}
    </svg>
  );
}

function ShareHero({ hero }) {
  if (hero.type === "destination") {
    return (
      <div className="relative py-2">
        <div className="pointer-events-none absolute inset-x-4 top-1/2 h-24 -translate-y-1/2 rounded-full bg-spotify-green/20 blur-3xl" />
        <p className="text-[64px] leading-none" aria-hidden="true">
          {hero.flag}
        </p>
        <p className="mt-2 text-[42px] font-black leading-[0.95] tracking-tight text-white">
          {hero.name}
        </p>
        <p className="mt-2 text-sm font-medium text-white/55">{hero.subtitle}</p>
      </div>
    );
  }

  if (hero.type === "distance") {
    return (
      <div className="relative py-2">
        <div className="pointer-events-none absolute inset-x-4 top-1/2 h-24 -translate-y-1/2 rounded-full bg-spotify-green/20 blur-3xl" />
        <p className="text-[72px] font-black leading-none tracking-tight text-white">
          {hero.value}
        </p>
        <p className="mt-1 text-lg font-bold uppercase tracking-[0.2em] text-spotify-green">
          km traveled
        </p>
        <p className="mt-2 text-sm font-medium text-white/55">{hero.subtitle}</p>
      </div>
    );
  }

  return (
    <div className="py-4">
      <p className="text-3xl font-black text-white/80">Your tour awaits</p>
      <p className="mt-2 text-sm text-white/45">Unlock a country to share your passport</p>
    </div>
  );
}

function StatsRow({ countries, languages, kmDisplay }) {
  return (
    <div className="flex justify-center gap-5 border-y border-white/10 py-3">
      <div className="text-center">
        <p className="text-xl font-black text-white/90">{countries}</p>
        <p className="text-[8px] uppercase tracking-wider text-white/40">Countries</p>
      </div>
      <div className="text-center">
        <p className="text-xl font-black text-white/90">{languages}</p>
        <p className="text-[8px] uppercase tracking-wider text-white/40">Languages</p>
      </div>
      <div className="text-center">
        <p className="text-xl font-black text-white/90">{kmDisplay}</p>
        <p className="text-[8px] uppercase tracking-wider text-white/40">km</p>
      </div>
    </div>
  );
}

function DiscoveryCard({ discovery }) {
  return (
    <div className="rounded-xl bg-black/30 p-3 text-left ring-1 ring-white/10">
      <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.18em] text-spotify-green">
        Top discovery
      </p>
      <div className="flex items-center gap-3">
        <ImageWithFallback
          src={discovery.imageUrl}
          alt={discovery.track}
          className="h-12 w-12 shrink-0 rounded-md object-cover shadow-lg ring-1 ring-white/15"
          fallbackGradient="radial-gradient(circle at 50% 50%, #444, #222, #111)"
          fallbackClassName="h-12 w-12 shrink-0 rounded-md ring-1 ring-white/15"
        />
        <div className="min-w-0 flex-1">
          <p className="truncate text-[17px] font-black leading-tight text-white">
            {discovery.track}
          </p>
          {discovery.artist && (
            <p className="mt-0.5 truncate text-xs text-white/55">{discovery.artist}</p>
          )}
          <p className="mt-1 truncate text-[10px] text-white/35">
            via {discovery.foundVia}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function SharePassport({ stats, onClose }) {
  const shareContent = useMemo(() => {
    const unlocks = stats?.unlocks || [];
    const content = buildPassportContent(unlocks);
    const latestDiscovery = content.discoveries[0];
    const kmTraveled = stats?.kmTraveled ?? 0;
    const kmDisplay = formatKm(kmTraveled);

    let hero;
    if (unlocks.length === 1) {
      const country = unlocks[0];
      hero = {
        type: "destination",
        flag: country.flag,
        name: country.name,
        subtitle: `${formatKmFull(kmTraveled)} km from Bangalore`,
      };
    } else if (unlocks.length > 1) {
      hero = {
        type: "distance",
        value: kmDisplay,
        subtitle: `Across ${unlocks.length} countries · ${stats?.languages ?? 0} languages`,
      };
    } else {
      hero = { type: "empty" };
    }

    return {
      countries: stats?.countries ?? 0,
      languages: stats?.languages ?? 0,
      kmDisplay,
      hero,
      topDiscovery: latestDiscovery
        ? {
            track: latestDiscovery.track,
            artist: latestDiscovery.artist,
            foundVia: latestDiscovery.foundVia,
            imageUrl: latestDiscovery.imageUrl,
          }
        : null,
      destinations: unlocks.map((entry) => ({
        id: entry.id,
        label: `${entry.flag} ${entry.name}`,
      })),
      genres: content.genresSnuckIn.slice(0, 4),
    };
  }, [stats]);

  return (
    <div
      className="animate-fade-in fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Share passport"
    >
      <div
        className="relative w-[320px] aspect-[9/16] overflow-hidden rounded-2xl"
        style={{
          background:
            "linear-gradient(165deg, #1DB954 0%, #0A3D1F 28%, #0D0D2B 58%, #121212 100%)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <WorldMapBackground className="pointer-events-none absolute -left-6 -top-4 h-[55%] w-[115%] opacity-100" />

        {SCATTER_DOTS.map((dot, i) => (
          <span
            key={i}
            className="pointer-events-none absolute h-1 w-1 rounded-full bg-white"
            style={{
              top: dot.top,
              left: dot.left,
              opacity: dot.opacity,
            }}
          />
        ))}

        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-20 flex h-8 w-8 items-center justify-center text-lg text-white/70"
          aria-label="Close"
        >
          ×
        </button>

        <div className="relative z-10 flex h-full flex-col px-5 pb-6 pt-9 text-center">
          <p className="text-[8px] font-bold uppercase tracking-[0.35em] text-white/50">
            Spotify World Tour
          </p>
          <p className="mt-1 text-sm font-bold text-white/70">
            {USER_PROFILE.name}&apos;s Passport
          </p>

          <div className="mt-4 flex flex-1 flex-col gap-4">
            <ShareHero hero={shareContent.hero} />

            {shareContent.countries > 0 && (
              <StatsRow
                countries={shareContent.countries}
                languages={shareContent.languages}
                kmDisplay={shareContent.kmDisplay}
              />
            )}

            {shareContent.topDiscovery ? (
              <DiscoveryCard discovery={shareContent.topDiscovery} />
            ) : null}

            {shareContent.destinations.length > 0 && (
              <div className="text-left">
                <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/35">
                  Unlocked
                </p>
                <div className="mt-1.5 flex flex-wrap gap-1.5">
                  {shareContent.destinations.map((dest) => (
                    <span
                      key={dest.id}
                      className="rounded-full bg-white/[0.06] px-2.5 py-1 text-[11px] font-semibold text-white/65"
                    >
                      {dest.label}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {shareContent.genres.length > 0 && (
              <div className="text-left">
                <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/35">
                  Genres explored
                </p>
                <p className="mt-1.5 text-[11px] leading-relaxed text-white/45">
                  {shareContent.genres.join(" · ")}
                </p>
              </div>
            )}
          </div>

          <div className="mt-auto pt-3">
            <SpotifyScanCode />
            <p className="mt-2 text-[10px] font-bold tracking-[3px] text-white/25">
              spotify
            </p>
          </div>
        </div>
      </div>

      <p className="mt-4 text-[10px] text-white/40">
        Screenshot to share on your story
      </p>
    </div>
  );
}
