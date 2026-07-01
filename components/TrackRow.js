"use client";

import ImageWithFallback from "./ImageWithFallback";
import { NAVRATRI_ALBUM_ART, LAGOS_ALBUM_ART } from "@/data/albumArt";

const FALLBACK_GRADIENTS = { ...NAVRATRI_ALBUM_ART, ...LAGOS_ALBUM_ART };

function getTagStyles(track, tagColor) {
  const color = tagColor || track.tagColor;

  if (color === "#E8593C") {
    return {
      textClass: "text-[#E8593C]",
      dotClass: "bg-[#E8593C]",
    };
  }

  if (track.tagVariant === "muted" || color === "muted" || color === "#B3B3B3") {
    return {
      textClass: "text-[#B3B3B3]",
      dotClass: "bg-[#B3B3B3]",
    };
  }

  return {
    textClass: "text-spotify-green",
    dotClass: "bg-spotify-green",
  };
}

export default function TrackRow({ track, tagColor, index }) {
  const fallbackGradient =
    FALLBACK_GRADIENTS[track.name] ||
    "radial-gradient(circle at 50% 50%, #444, #222, #111)";
  const tagStyles = getTagStyles(track, tagColor);

  return (
    <div className="group flex items-center gap-2 rounded-lg py-2 transition-colors hover:bg-white/5 active:bg-white/5">
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
        {track.tag && (
          <p
            className={`mt-1 flex items-center text-[10px] font-medium uppercase tracking-wide ${tagStyles.textClass}`}
          >
            <span
              className={`mr-1 inline-block h-1 w-1 shrink-0 rounded-full ${tagStyles.dotClass}`}
            />
            {track.tag}
          </p>
        )}
      </div>
      <button
        type="button"
        className="flex h-10 w-8 shrink-0 items-center justify-center self-start text-spotify-secondary opacity-70 transition-opacity [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100"
        aria-label="More options"
      >
        ⋮
      </button>
    </div>
  );
}
