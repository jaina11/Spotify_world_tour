import ImageWithFallback from "./ImageWithFallback";
import { NOW_PLAYING_ART, NOW_PLAYING_IMAGE } from "@/data/albumArt";

export default function NowPlayingBar() {
  return (
    <div
      className="fixed left-0 right-0 z-40 mx-2"
      style={{ bottom: "calc(50px + env(safe-area-inset-bottom) + 8px)" }}
    >
      <div className="relative mx-auto flex max-w-mobile items-center gap-2 overflow-hidden rounded-md bg-gradient-to-r from-[#2A1A0A] to-[#1A1A1A] px-2 py-2">
        <div className="absolute left-0 right-0 top-0 h-[2px] bg-white/10">
          <div className="h-full w-[35%] bg-spotify-green" />
        </div>
        <ImageWithFallback
          src={NOW_PLAYING_IMAGE}
          alt="Phir Se Ud Chala"
          className="h-10 w-10 shrink-0 rounded-md object-cover ring-1 ring-white/10"
          fallbackGradient={NOW_PLAYING_ART}
          fallbackClassName="h-10 w-10 shrink-0 rounded-md ring-1 ring-white/10"
        />
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-white">
            Phir Se Ud Chala
          </p>
          <p className="truncate text-xs text-spotify-secondary">
            Mohit Chauhan
          </p>
        </div>
        <button
          type="button"
          className="flex h-8 w-8 shrink-0 items-center justify-center text-base text-spotify-green"
          aria-label="Like"
        >
          ♥
        </button>
        <button
          type="button"
          className="flex h-8 w-8 shrink-0 items-center justify-center text-base text-white"
          aria-label="Play"
        >
          ▶
        </button>
      </div>
    </div>
  );
}
