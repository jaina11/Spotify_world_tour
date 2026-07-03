"use client";

import ImageWithFallback from "@/components/ImageWithFallback";
import { USER_PROFILE } from "@/data/scenes";

const STARS = [
  { top: "4%", left: "12%", opacity: 0.25 },
  { top: "8%", left: "28%", opacity: 0.15 },
  { top: "6%", left: "45%", opacity: 0.35 },
  { top: "10%", left: "62%", opacity: 0.2 },
  { top: "5%", left: "78%", opacity: 0.3 },
  { top: "14%", left: "18%", opacity: 0.12 },
  { top: "12%", left: "52%", opacity: 0.4 },
  { top: "16%", left: "70%", opacity: 0.18 },
  { top: "18%", left: "35%", opacity: 0.22 },
  { top: "20%", left: "85%", opacity: 0.28 },
  { top: "9%", left: "92%", opacity: 0.1 },
  { top: "22%", left: "8%", opacity: 0.32 },
  { top: "24%", left: "58%", opacity: 0.14 },
  { top: "26%", left: "42%", opacity: 0.26 },
  { top: "15%", left: "88%", opacity: 0.2 },
  { top: "28%", left: "22%", opacity: 0.16 },
  { top: "7%", left: "38%", opacity: 0.38 },
  { top: "19%", left: "65%", opacity: 0.24 },
];

const TOP_DISCOVERIES = [
  {
    num: 1,
    name: "Dernière danse",
    artist: "Indila",
    imageUrl:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=100&h=100&fit=crop",
    bars: [6, 12, 8, 16, 10, 14],
  },
  {
    num: 2,
    name: "Blue Jeans",
    artist: "HANA",
    imageUrl:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=100&h=100&fit=crop",
    bars: [10, 6, 14, 8, 12, 7],
  },
  {
    num: 3,
    name: "Chammak Challo",
    artist: "Akon",
    imageUrl:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=100&h=100&fit=crop",
    bars: [8, 14, 6, 16, 9, 11],
  },
];

const GENRE_PILLS = [
  { label: "J-pop", dot: "#E8593C" },
  { label: "French Pop", dot: "#4A90D9" },
  { label: "Desi Pop", dot: "#F0A030" },
  { label: "Arabic Pop", dot: "#D4AF37" },
];

function GlobeIcon() {
  return (
    <svg
      className="mx-auto h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" className="stroke-white/40" />
      <path d="M3 12h18M12 3c2.5 3 2.5 15 0 18M12 3c-2.5 3-2.5 15 0 18" className="stroke-white/40" />
    </svg>
  );
}

function MusicNoteIcon() {
  return (
    <svg
      className="mx-auto h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path
        d="M9 18V5l12-2v13"
        className="stroke-white/40"
      />
      <circle cx="6" cy="18" r="3" className="stroke-white/40" />
      <circle cx="18" cy="16" r="3" className="stroke-white/40" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      className="mx-auto h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" className="stroke-white/40" />
      <path d="M12 7v5l3 2" className="stroke-white/40" />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="#1DB954" aria-hidden="true">
      <path d="M12 2l1.8 5.5L19 9.3l-5.2 1.8L12 16.3l-1.8-5.2L5 9.3l5.2-1.8L12 2z" />
    </svg>
  );
}

function CompassIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" className="stroke-white/60" />
      <path d="m14.5 9.5-5 2 2 5 5-2-2-5z" className="stroke-white/60" />
    </svg>
  );
}

function SoundWaveBars({ bars }) {
  return (
    <div className="flex h-4 items-end gap-[2px]">
      {bars.map((height, index) => (
        <span
          key={index}
          className="w-[2px] rounded-full bg-white/20"
          style={{ height }}
        />
      ))}
    </div>
  );
}

function SpotifyMiniLogo() {
  return (
    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-spotify-green">
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="white" aria-hidden="true">
        <path d="M6 15.5c4.5-1 9.5-1 14-0.2-.3.7-1 1.2-1.8 1.2-3.8 0-7.5-1.2-10.5-3.3-.4-.3-.8-.1-.7.3zM5 11.8c5.2-1.2 11-1.2 16.2-.3-.4.8-1.3 1.4-2.2 1.4-4.3 0-8.5-1.3-11.8-3.6-.5-.3-.9 0-.8.5zM4.2 8.2C10.4 6.8 17.2 6.8 23.4 8c-.5 1-1.6 1.7-2.8 1.7-5 0-9.8-1.5-13.6-4.1-.6-.4-1 .1-.8.6z" />
      </svg>
    </div>
  );
}

export default function ShareWorldTour({ onClose }) {
  const displayName = USER_PROFILE.name || "Jimmy";

  return (
    <div
      className="animate-fade-in fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Share world tour"
    >
      <div
        className="relative w-[340px] overflow-hidden rounded-2xl"
        style={{
          background:
            "linear-gradient(180deg, #0D1040 0%, #1A0A3E 15%, #0A3D5F 30%, #1DB954 48%, #0A5C2F 58%, #E8593C 75%, #F0A030 88%, #C04020 100%)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute inset-0 bg-black/25" />

        {STARS.map((star, index) => (
          <span
            key={index}
            className="absolute h-1 w-1 rounded-full bg-white"
            style={{
              top: star.top,
              left: star.left,
              opacity: star.opacity,
            }}
          />
        ))}

        <svg
          className="absolute left-[15%] top-[12%] h-4 w-4 -rotate-[20deg] text-white opacity-[0.15]"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M21 16v-2l-8-5V3.5C13 2.67 12.33 2 11.5 2S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
        </svg>

        <svg
          className="pointer-events-none absolute left-[10%] top-[8%] h-16 w-24"
          viewBox="0 0 96 64"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M8 48 Q 32 8 72 24"
            stroke="white"
            strokeWidth="1"
            opacity="0.08"
            strokeDasharray="4 4"
          />
        </svg>

        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-20 text-xl text-white/50"
          aria-label="Close"
        >
          ×
        </button>

        <div className="relative z-10 px-6 text-center">
          <div className="pt-8">
            <p className="text-[9px] uppercase tracking-[5px] text-white/50">
              SPOTIFY WORLD TOUR
            </p>
            <p className="mt-1 text-[10px] tracking-[2px] text-white/35">
              JULY 2026
            </p>
            <p className="mt-3 text-[8px] tracking-[6px] text-white/15">
              · · · · · · · · ·
            </p>
          </div>

          <div className="mt-5">
            <p
              className="text-[32px] font-black italic leading-none text-white"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              {displayName}&apos;s
            </p>
            <p className="text-[32px] font-black leading-tight text-white">
              World Tour
            </p>
          </div>

          <div className="mt-4">
            <p className="text-xl leading-relaxed text-white">
              <span>🇯🇵</span>
              <span className="mx-1 text-sm text-white/30">→</span>
              <span>🇫🇷</span>
              <span className="mx-1 text-sm text-white/30">→</span>
              <span>🇺🇸</span>
              <span className="mx-1 text-sm text-white/30">→</span>
              <span>🇸🇬</span>
              <span className="mx-1 text-sm text-white/30">→</span>
              <span>🇦🇪</span>
            </p>
            <p className="mt-2 text-[11px] text-white/60">
              5 countries. 1 playlist. A monthly journey made for you.
            </p>
          </div>

          <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.08] p-4 backdrop-blur-sm">
            <div className="flex">
              <div className="flex-1 border-r border-white/10 py-1">
                <GlobeIcon />
                <p className="mt-1 text-[28px] font-black text-white">5</p>
                <p className="text-[9px] uppercase tracking-wider text-white/40">
                  Countries
                </p>
              </div>
              <div className="flex-1 border-r border-white/10 py-1">
                <MusicNoteIcon />
                <p className="mt-1 text-[28px] font-black text-white">25</p>
                <p className="text-[9px] uppercase tracking-wider text-white/40">
                  Tracks
                </p>
              </div>
              <div className="flex-1 py-1">
                <ClockIcon />
                <p className="mt-1 text-[28px] font-black text-white">1h 32m</p>
                <p className="text-[9px] uppercase tracking-wider text-white/40">
                  Playtime
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5 text-left">
            <div className="flex items-center gap-2">
              <SparkleIcon />
              <p className="text-sm font-bold text-white">Top Discoveries</p>
            </div>
            <div className="mt-2 space-y-2">
              {TOP_DISCOVERIES.map((track) => (
                <div
                  key={track.num}
                  className="flex items-center gap-3 rounded-lg border border-white/[0.08] bg-white/[0.06] p-2.5 backdrop-blur-sm"
                >
                  <span className="w-4 text-base font-bold text-spotify-green">
                    {track.num}
                  </span>
                  <ImageWithFallback
                    src={track.imageUrl}
                    alt={track.name}
                    className="h-11 w-11 shrink-0 rounded-md object-cover"
                    fallbackGradient="linear-gradient(135deg, #444, #222)"
                    fallbackClassName="h-11 w-11 shrink-0 rounded-md"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-bold text-white">
                      {track.name}
                    </p>
                    <p className="truncate text-[11px] text-white/50">
                      {track.artist}
                    </p>
                  </div>
                  <SoundWaveBars bars={track.bars} />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 text-left">
            <div className="flex items-center gap-2">
              <CompassIcon />
              <p className="text-sm font-bold text-white">Your journey explored</p>
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              {GENRE_PILLS.map((genre) => (
                <span
                  key={genre.label}
                  className="flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.08] px-3 py-1.5"
                >
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: genre.dot }}
                  />
                  <span className="text-[11px] text-white/70">{genre.label}</span>
                </span>
              ))}
            </div>
            <div className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-spotify-green/20 bg-white/[0.04] px-3 py-1.5">
              <svg
                className="h-3.5 w-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1DB954"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M3 12h18M12 3c2.5 3 2.5 15 0 18M12 3c-2.5 3-2.5 15 0 18" />
              </svg>
              <span className="text-[11px] text-spotify-green">
                New language explored
              </span>
            </div>
          </div>

          <button
            type="button"
            className="mb-6 mt-5 flex w-full items-center rounded-xl border border-[#F0A030]/40 bg-black/30 px-4 py-3.5"
          >
            <SpotifyMiniLogo />
            <span className="flex-1 text-sm font-bold text-white">
              Build yours on Spotify
            </span>
            <span className="text-white/50">&gt;</span>
          </button>
        </div>
      </div>

      <p className="mt-4 text-center text-[10px] text-white/40">
        Screenshot to share on your story
      </p>
    </div>
  );
}
