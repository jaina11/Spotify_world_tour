"use client";

import { PASSPORT_DATA, USER_PROFILE } from "@/data/scenes";

const SCATTER_DOTS = [
  { top: "12%", left: "18%", opacity: 0.08 },
  { top: "22%", left: "78%", opacity: 0.06 },
  { top: "38%", left: "42%", opacity: 0.1 },
  { top: "55%", left: "12%", opacity: 0.05 },
  { top: "68%", left: "88%", opacity: 0.07 },
  { top: "82%", left: "55%", opacity: 0.09 },
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
        d="M 155 42 Q 148 65 152 95 Q 158 130 168 165 Q 178 185 192 175 Q 205 155 200 120 Q 195 80 188 55 Q 180 38 165 42 Z"
        fill="white"
        opacity="0.03"
      />
      <path
        d="M 210 38 Q 245 32 285 40 Q 325 48 355 55 Q 375 62 382 75 Q 388 90 378 105 Q 360 115 330 108 Q 295 98 265 88 Q 235 78 215 65 Q 200 52 210 38 Z"
        fill="white"
        opacity="0.03"
      />
      <path
        d="M 248 145 Q 275 138 305 142 Q 330 148 342 158 Q 348 168 335 175 Q 318 180 295 175 Q 268 168 252 158 Q 242 150 248 145 Z"
        fill="white"
        opacity="0.03"
      />
      <path
        d="M 118 72 Q 135 68 155 72 Q 172 78 180 92 Q 175 108 158 115 Q 138 120 122 110 Q 110 98 112 82 Q 114 75 118 72 Z"
        fill="white"
        opacity="0.03"
      />
    </svg>
  );
}

function JourneyConnector() {
  return (
    <div className="flex items-center justify-center py-2">
      <svg width="120" height="20" viewBox="0 0 120 20" aria-hidden="true">
        <path
          d="M 8 14 Q 40 4 60 10 Q 80 16 112 8"
          fill="none"
          stroke="white"
          strokeWidth="1"
          strokeDasharray="4 4"
          opacity="0.1"
        />
        <text x="58" y="13" textAnchor="middle" fill="white" opacity="0.15" fontSize="9">
          ✈
        </text>
      </svg>
    </div>
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

export default function SharePassport({ onClose }) {
  const topDiscovery = PASSPORT_DATA.discoveries[0];
  const artistRow = PASSPORT_DATA.newArtists
    .map((a) => `${a.name} ${a.flag}`)
    .join("  ");
  const genres = PASSPORT_DATA.genresSnuckIn.join(" · ");
  const kmDisplay = formatKm(USER_PROFILE.kmTraveled);

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
            "linear-gradient(180deg, #1DB954 0%, #0A3D1F 30%, #0D0D2B 65%, #121212 100%)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <WorldMapBackground className="pointer-events-none absolute -left-6 -top-4 h-[62%] w-[115%] opacity-100" />

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

        <svg
          className="pointer-events-none absolute left-1/2 top-[28%] -translate-x-1/2"
          width="280"
          height="280"
          viewBox="0 0 280 280"
          aria-hidden="true"
        >
          <circle cx="140" cy="140" r="55" fill="none" stroke="white" strokeOpacity="0.05" />
          <circle cx="140" cy="140" r="85" fill="none" stroke="white" strokeOpacity="0.05" />
          <circle cx="140" cy="140" r="115" fill="none" stroke="white" strokeOpacity="0.05" />
        </svg>

        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-20 flex h-8 w-8 items-center justify-center text-lg text-white/70"
          aria-label="Close"
        >
          ×
        </button>

        <div className="relative z-10 flex h-full flex-col text-center">
          <div className="px-5 pt-10">
            <p className="text-[9px] uppercase tracking-[5px] text-white/60">
              SPOTIFY WORLD TOUR
            </p>
            <p className="mt-2 text-3xl font-black text-white">
              {USER_PROFILE.name}&apos;s Passport
            </p>
            <p className="mt-3 text-sm tracking-[0.35em] text-white/20">
              · · · · · · ·
            </p>

            <div className="relative mt-7">
              <div className="pointer-events-none absolute inset-x-0 top-1/2 h-20 -translate-y-1/2 bg-spotify-green/10 blur-3xl" />

              <div className="relative flex">
                <div className="flex-1 border-r border-white/20 py-1">
                  <p className="text-4xl font-black text-white">
                    {USER_PROFILE.countries}
                  </p>
                  <p className="text-[9px] text-white/60">Countries</p>
                </div>
                <div className="flex-1 border-r border-white/20 py-1">
                  <p className="text-4xl font-black text-white">
                    {USER_PROFILE.languages}
                  </p>
                  <p className="text-[9px] text-white/60">Languages</p>
                </div>
                <div className="flex-1 py-1">
                  <p className="text-4xl font-black text-white">{kmDisplay}</p>
                  <p className="text-[9px] text-white/60">km traveled</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex-1 px-5">
            <p className="text-[10px] uppercase tracking-wider text-spotify-green">
              Top Discovery
            </p>
            <p className="mt-1 text-base font-bold text-white">
              {topDiscovery.track}
            </p>
            <p className="text-[11px] text-white/50">
              Found via {topDiscovery.foundVia}
            </p>

            <JourneyConnector />

            <p className="text-[10px] uppercase tracking-wider text-spotify-green">
              New Artists
            </p>
            <p className="mt-1 text-[11px] text-white/70">{artistRow}</p>

            <JourneyConnector />

            <p className="text-[10px] uppercase tracking-wider text-spotify-green">
              Genres That Snuck In
            </p>
            <p className="mt-1 text-[11px] text-white/70">{genres}</p>
          </div>

          <div className="p-5 pb-7">
            <SpotifyScanCode />
            <p className="mt-3 text-[11px] font-bold tracking-[3px] text-white/30">
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
