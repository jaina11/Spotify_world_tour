"use client";

import { useEffect, useRef, useState } from "react";
import ItineraryTrackRow, { trackKey } from "@/components/ItineraryTrackRow";

const DEFAULT_VISIBLE_COUNT = 3;

export default function ItineraryBucketSection({
  title,
  subtitle,
  tracks,
  startIndex,
  pulsingKey,
  onPlay,
  initialVisibleCount = DEFAULT_VISIBLE_COUNT,
}) {
  const ref = useRef(null);
  const [sectionVisible, setSectionVisible] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const hasMore = tracks.length > initialVisibleCount;
  const visibleTracks = showAll ? tracks : tracks.slice(0, initialVisibleCount);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "-40px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="mb-8 px-4">
      <div
        className={`mb-3 transition-all duration-700 ${
          sectionVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-6 opacity-0"
        }`}
      >
        <div className="flex items-baseline justify-between gap-3">
          <h2 className="text-xl font-black text-white">{title}</h2>
          {hasMore && (
            <button
              type="button"
              onClick={() => setShowAll((open) => !open)}
              className="shrink-0 text-xs font-bold text-spotify-secondary"
            >
              {showAll ? "Show less" : "Show more"}
            </button>
          )}
        </div>
        <p className="mt-1 text-xs text-spotify-secondary">{subtitle}</p>
      </div>
      <div>
        {visibleTracks.map((track, index) => {
          const key = trackKey(track);
          return (
            <ItineraryTrackRow
              key={key}
              track={track}
              index={startIndex + index}
              staggerDelay={sectionVisible ? index * 90 : 0}
              isVisible={sectionVisible}
              isPulsing={pulsingKey === key}
              onPlay={onPlay}
            />
          );
        })}
      </div>
    </section>
  );
}
