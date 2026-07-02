"use client";

import ImageWithFallback from "./ImageWithFallback";
import { NAVRATRI_ALBUM_ART, LAGOS_ALBUM_ART } from "@/data/albumArt";

const FALLBACK_GRADIENTS = { ...NAVRATRI_ALBUM_ART, ...LAGOS_ALBUM_ART };

function trackKey(track) {
  return `${track.artist}-${track.name}`;
}

export default function ItineraryTrackRow({
  track,
  index,
  showPlay = true,
  staggerDelay = 0,
  isVisible = true,
  isPulsing = false,
  onPlay,
}) {
  const fallbackGradient =
    FALLBACK_GRADIENTS[track.name] ||
    "radial-gradient(circle at 50% 50%, #444, #222, #111)";

  return (
    <div
      className={`transition-all duration-500 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
      }`}
      style={{ transitionDelay: `${staggerDelay}ms` }}
    >
      <div
        className={`group flex items-center gap-2 rounded-lg border border-transparent py-2 transition-colors hover:bg-white/5 ${
          isPulsing ? "track-play-pulse border-spotify-green/30" : ""
        }`}
      >
        <span className="w-6 shrink-0 text-center text-sm text-spotify-secondary">
          {index}
        </span>
        <ImageWithFallback
          src={track.imageUrl}
          alt={track.name}
          className="h-11 w-11 shrink-0 rounded-md object-cover"
          fallbackGradient={fallbackGradient}
          fallbackClassName="h-11 w-11 shrink-0 rounded-md"
        />
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-white">{track.name}</p>
          <p className="truncate text-xs text-spotify-secondary">{track.artist}</p>
          {track.whyThis && (
            <p className="mt-0.5 truncate text-[10px] text-spotify-muted">
              {track.whyThis}
            </p>
          )}
        </div>
        {showPlay && (
          <button
            type="button"
            onClick={() => onPlay?.(trackKey(track))}
            className="btn-spotify flex h-8 w-8 shrink-0 items-center justify-center self-start rounded-full bg-spotify-green text-xs font-bold text-black"
            aria-label={`Play ${track.name}`}
          >
            ▶
          </button>
        )}
      </div>
    </div>
  );
}

export { trackKey };
