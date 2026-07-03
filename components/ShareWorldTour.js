"use client";

import { USER_PROFILE } from "@/data/scenes";

const SCAN_BARS = [3, 8, 5, 12, 7, 14, 9, 16, 6, 11, 8, 15, 5, 10, 7, 13, 4, 9, 6, 12];

const TOP_DISCOVERIES = [
  { num: 1, name: "Dernière danse", artist: "Indila" },
  { num: 2, name: "Blue Jeans", artist: "HANA" },
  { num: 3, name: "Chammak Challo", artist: "Akon" },
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
        opacity="0.04"
      />
      <path
        d="M 155 42 Q 148 65 152 95 Q 158 130 168 165 Q 178 185 192 175 Q 205 155 200 120 Q 195 80 188 55 Q 180 38 165 42 Z"
        fill="white"
        opacity="0.04"
      />
      <path
        d="M 210 38 Q 245 32 285 40 Q 325 48 355 55 Q 375 62 382 75 Q 388 90 378 105 Q 360 115 330 108 Q 295 98 265 88 Q 235 78 215 65 Q 200 52 210 38 Z"
        fill="white"
        opacity="0.04"
      />
      <path
        d="M 248 145 Q 275 138 305 142 Q 330 148 342 158 Q 348 168 335 175 Q 318 180 295 175 Q 268 168 252 158 Q 242 150 248 145 Z"
        fill="white"
        opacity="0.04"
      />
      <path
        d="M 118 72 Q 135 68 155 72 Q 172 78 180 92 Q 175 108 158 115 Q 138 120 122 110 Q 110 98 112 82 Q 114 75 118 72 Z"
        fill="white"
        opacity="0.04"
      />
    </svg>
  );
}

function SpotifyBarcode() {
  return (
    <svg
      width="80"
      height="24"
      viewBox="0 0 80 24"
      aria-hidden="true"
      className="mx-auto opacity-25"
    >
      {SCAN_BARS.map((h, i) => (
        <rect
          key={i}
          x={i * 4}
          y={(24 - h) / 2}
          width={2}
          height={h}
          fill="white"
          rx={0.5}
        />
      ))}
    </svg>
  );
}

export default function ShareWorldTour({ onClose }) {
  return (
    <div
      className="animate-fade-in fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/85 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Share world tour"
    >
      <div
        className="relative aspect-[9/16] w-[320px] overflow-hidden rounded-2xl"
        style={{
          background:
            "linear-gradient(180deg, #0D1B3E 0%, #7B68EE 25%, #1DB954 50%, #E8593C 75%, #F0A030 100%)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute inset-0 bg-black/40" />

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 0.5px, transparent 0.5px)",
            backgroundSize: "6px 6px",
          }}
        />

        <WorldMapBackground className="pointer-events-none absolute inset-0 h-full w-full" />

        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-20 flex h-8 w-8 items-center justify-center text-lg text-white/70"
          aria-label="Close"
        >
          ×
        </button>

        <div className="relative z-10 flex h-full flex-col text-center">
          <div className="mt-8 px-5">
            <p className="text-[9px] uppercase tracking-[5px] text-white/60">
              SPOTIFY WORLD TOUR
            </p>
            <p className="mt-1 text-[11px] text-white/40">July 2026</p>
            <p className="mt-3 text-sm tracking-[0.35em] text-white/20">
              · · · · ·
            </p>

            <h2 className="mt-6 text-2xl font-black text-white">
              {USER_PROFILE.name}&apos;s World Tour
            </h2>
            <p className="mt-2 text-base tracking-wider text-white">
              🇯🇵 → 🇫🇷 → 🇺🇸 → 🇸🇬 → 🇦🇪
            </p>
          </div>

          <div className="mx-5 mt-6 rounded-xl bg-white/[0.06] p-4">
            <div className="flex">
              <div className="flex-1 border-r border-white/10 py-1">
                <p className="text-2xl font-black text-white">5</p>
                <p className="text-[9px] text-white/50">Cities</p>
              </div>
              <div className="flex-1 border-r border-white/10 py-1">
                <p className="text-2xl font-black text-white">25</p>
                <p className="text-[9px] text-white/50">Tracks</p>
              </div>
              <div className="flex-1 py-1">
                <p className="text-2xl font-black text-white">1h 32m</p>
                <p className="text-[9px] text-white/50">Playtime</p>
              </div>
            </div>
          </div>

          <div className="mt-5 px-5 text-left">
            <p className="text-[9px] uppercase tracking-wider text-spotify-green">
              Top Discoveries
            </p>
            {TOP_DISCOVERIES.map((track) => (
              <div key={track.num} className="mt-2 flex items-baseline gap-2">
                <span className="w-4 text-xs text-white/30">{track.num}</span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-bold text-white">
                    {track.name}
                  </p>
                  <p className="truncate text-[11px] text-white/40">
                    {track.artist}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 px-5 text-left">
            <p className="text-[9px] uppercase tracking-wider text-spotify-green">
              Artists You Loved
            </p>
            <p className="mt-1 text-sm text-white/80">
              Sabrina Carpenter · Asake
            </p>
          </div>

          <div className="mt-4 px-5 text-left">
            <p className="text-[9px] uppercase tracking-wider text-spotify-green">
              New Language Explored
            </p>
            <p className="mt-1 text-base font-bold text-white">French 🇫🇷</p>
            <p className="mt-1 text-[10px] italic text-white/40">
              You vibed with Dernière danse before knowing a word
            </p>
          </div>

          <div className="absolute inset-x-0 bottom-0 p-5 text-center">
            <SpotifyBarcode />
            <p className="mt-2 text-[10px] font-bold tracking-[3px] text-white/30">
              spotify
            </p>
          </div>
        </div>
      </div>

      <p className="mt-4 text-center text-[10px] text-white/40">
        Screenshot to share on your story
      </p>
    </div>
  );
}
