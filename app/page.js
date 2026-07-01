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

function WorldMapPattern() {
  return (
    <svg
      className="absolute right-0 top-0 h-full w-2/3 opacity-10"
      viewBox="0 0 200 120"
      fill="none"
      aria-hidden
    >
      <ellipse cx="100" cy="60" rx="90" ry="50" stroke="#1DB954" strokeWidth="1" />
      <path
        d="M30 55c20-15 45-20 70-12s50 8 70-5"
        stroke="#1DB954"
        strokeWidth="0.8"
      />
      <path
        d="M25 70c25 10 55 12 80 5s45-18 70-8"
        stroke="#1DB954"
        strokeWidth="0.8"
      />
      <circle cx="60" cy="48" r="2" fill="#1DB954" />
      <circle cx="120" cy="42" r="2" fill="#1DB954" />
      <circle cx="145" cy="65" r="2" fill="#1DB954" />
      <circle cx="85" cy="72" r="2" fill="#1DB954" />
    </svg>
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

        <Link href="/hub" className="tap-scale mb-5 block">
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-[#0A2F1A] to-[#121212] p-4">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(29,185,84,0.15)_1px,transparent_0)] bg-[length:12px_12px] opacity-40" />
            <WorldMapPattern />
            <div className="relative flex items-center gap-3">
              <div className="w-1 shrink-0 self-stretch rounded-full bg-spotify-green" />
              <div className="min-w-0 flex-1">
                <span className="inline-block rounded-full border border-spotify-green/30 bg-spotify-green/20 px-3 py-1 text-xs font-bold text-spotify-green">
                  World Tour
                </span>
                <h3 className="mt-2 text-lg font-black text-white">
                  Your music has been places
                </h3>
                <p className="mt-1 text-sm text-spotify-secondary">
                  5 countries, 4 languages — even without you noticing
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-spotify-green opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-spotify-green" />
                </span>
                <span className="text-spotify-green">→</span>
              </div>
            </div>
          </div>
        </Link>

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
