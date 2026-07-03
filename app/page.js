"use client";

import Link from "next/link";
import ImageWithFallback from "@/components/ImageWithFallback";
import MobileLayout from "@/components/MobileLayout";

const CATEGORIES = [
  {
    label: "Music",
    color: "#E13300",
    emoji: "🎵",
    rotate: "rotate-12",
  },
  {
    label: "Podcasts",
    color: "#006450",
    emoji: "🎙️",
    rotate: "-rotate-6",
  },
  {
    label: "Live Events",
    color: "#8400E7",
    emoji: "🎤",
    rotate: "rotate-6",
  },
  {
    label: "Music Awards Japan",
    color: "#1E3264",
    emoji: "🏆",
    rotate: "-rotate-12",
  },
];

const MUSIC_VIDEOS = [
  {
    title: "Artist Spotlight Live",
    artist: "Spotify Sessions",
    gradient: "linear-gradient(135deg, #E13300, #8B0000)",
    imageUrl:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=180&fit=crop",
  },
  {
    title: "Studio Sessions",
    artist: "Behind the Music",
    gradient: "linear-gradient(135deg, #1DB954, #0A5C2F)",
    imageUrl:
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=300&h=180&fit=crop",
  },
  {
    title: "Festival Highlights",
    artist: "World Tour",
    gradient: "linear-gradient(135deg, #8400E7, #1E3264)",
    imageUrl:
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=300&h=180&fit=crop",
  },
];

const CONTINENT_PATHS = [
  "M42 58c18-10 38-14 58-8s42 6 62-2 48-4 68 8 30 18 42 34-8 20-28 28-50 24-34-6-62 2-88-10-30-14-58-8-72 4-18 16-20 36-8 48-16 8-36 6-52-6-18-12-22-30-12-42Z",
  "M58 96c24 8 48 10 72 4s52-4 78 10 34 22 38 40-22 18-44 14-58-8-82-4-46 10-64-2-24-16-20-38-4-52 26-16 52-10Z",
  "M250 72c16-6 30-4 42 6s18 18 14 30-16 16-30 12-24-10-34-6-18 4-28-2-8-14 2-26 12-18 24-14Z",
];

function ContinentShapes({ opacity }) {
  return CONTINENT_PATHS.map((d) => (
    <path key={d} d={d} fill="#1DB954" opacity={opacity} />
  ));
}

function WorldTourMapBackground() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 360 176"
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <g opacity="0.02" transform="translate(2 2)">
        <ContinentShapes opacity={1} />
      </g>
      <g opacity="0.04">
        <ContinentShapes opacity={1} />
      </g>

      <circle cx="248" cy="72" r="3" fill="#1DB954" opacity="0.35" />
      <circle cx="296" cy="58" r="3" fill="#1DB954" opacity="0.35" />
      <circle cx="310" cy="52" r="3" fill="#1DB954" opacity="0.35" />
      <circle cx="168" cy="82" r="3" fill="#1DB954" opacity="0.35" />
      <circle cx="118" cy="118" r="3" fill="#1DB954" opacity="0.35" />
      <circle cx="78" cy="68" r="3" fill="#1DB954" opacity="0.35" />

      <path
        d="M248 72 Q272 58 296 58 T310 52"
        stroke="#1DB954"
        strokeWidth="0.5"
        opacity="0.18"
        strokeDasharray="4 3"
      />
      <path
        d="M310 52 Q252 72 168 82"
        stroke="#1DB954"
        strokeWidth="0.5"
        opacity="0.18"
        strokeDasharray="4 3"
      />
      <path
        d="M168 82 Q138 104 118 118"
        stroke="#1DB954"
        strokeWidth="0.5"
        opacity="0.18"
        strokeDasharray="4 3"
      />
      <path
        d="M118 118 Q92 96 78 68"
        stroke="#1DB954"
        strokeWidth="0.5"
        opacity="0.18"
        strokeDasharray="4 3"
      />
      <path
        d="M78 68 Q148 58 248 72"
        stroke="#1DB954"
        strokeWidth="0.5"
        opacity="0.18"
        strokeDasharray="4 3"
      />
    </svg>
  );
}

function PassportStampIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden="true"
    >
      <rect x="2" y="3" width="12" height="10" rx="1" opacity="0.9" />
      <path d="M4 6h8M4 8.5h5M4 11h6" opacity="0.7" />
    </svg>
  );
}

function WorldTourEntryCard() {
  return (
    <Link href="/intro?from=search" className="tap-scale mb-5 block">
      <div className="relative h-36 overflow-hidden rounded-xl bg-[#0A1A12] p-4">
        <WorldTourMapBackground />

        <span
          className="wt-float-1 pointer-events-none absolute right-12 top-3 text-lg opacity-[0.12]"
          aria-hidden="true"
        >
          🎧
        </span>
        <span
          className="wt-float-2 pointer-events-none absolute bottom-5 right-6 text-sm opacity-10"
          aria-hidden="true"
        >
          🎵
        </span>
        <span
          className="wt-float-3 pointer-events-none absolute right-4 top-8 text-[#1DB954] opacity-10"
          aria-hidden="true"
        >
          <PassportStampIcon />
        </span>

        <div className="relative z-10 max-w-[72%]">
          <span className="mb-2 inline-block rounded-full bg-white/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white/60">
            Beta
          </span>
          <h3 className="wt-text-cycle text-lg font-black text-white">
            Let&apos;s build your world tour.
          </h3>
          <p className="wt-text-cycle-delay mt-1 text-sm text-white/50">
            Curate your next playlist across borders, cultures, and sounds matched
            to your taste.
          </p>
        </div>

        <div
          className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-spotify-green"
          aria-hidden="true"
        >
          <span className="text-lg font-bold text-white">→</span>
        </div>
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <MobileLayout activeTab="search">
      <div
        className="fixed left-0 right-0 top-0 z-30 mx-auto max-w-mobile px-4 pb-3 pt-14"
        style={{
          background: "linear-gradient(180deg, #1A1A1A 0%, #121212 100%)",
        }}
      >
        <div className="flex items-center gap-3 pb-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#333333] text-sm font-bold text-white">
            J
          </div>
          <h1 className="text-xl font-black text-white">Search</h1>
        </div>

        <div className="relative h-12 rounded-lg bg-white">
          <svg
            className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#121212"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
          <span className="flex h-full items-center pl-11 text-sm text-[#121212]/60">
            What do you want to listen to?
          </span>
        </div>
      </div>

      <div className="px-4 pt-[140px]">
        <h2 className="mb-3 text-base font-bold text-white">Start browsing</h2>
        <div className="mb-5 grid grid-cols-2 gap-2">
          {CATEGORIES.map((category) => (
            <div
              key={category.label}
              className="relative h-14 overflow-hidden rounded-lg"
              style={{ backgroundColor: category.color }}
            >
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-bold text-white">
                {category.label}
              </span>
              <span
                className={`absolute -right-1 bottom-0 text-4xl opacity-90 ${category.rotate}`}
              >
                {category.emoji}
              </span>
            </div>
          ))}
        </div>

        <h2 className="mb-3 text-base font-bold text-white">
          Global sounds, made for you
        </h2>
        <WorldTourEntryCard />

        <h2 className="mb-3 text-base font-black text-white">
          Explore music videos
        </h2>
        <div className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-1">
          {MUSIC_VIDEOS.map((video) => (
            <div
              key={video.title}
              className="relative h-28 w-40 shrink-0 overflow-hidden rounded-lg"
            >
              <ImageWithFallback
                src={video.imageUrl}
                alt={video.title}
                className="absolute inset-0 h-full w-full object-cover"
                fallbackGradient={video.gradient}
                fallbackClassName="absolute inset-0 h-full w-full"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)",
                }}
              />
              <div className="absolute bottom-2 left-2">
                <p className="text-xs font-bold text-white">{video.title}</p>
                <p className="text-[10px] text-white/60">{video.artist}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MobileLayout>
  );
}
