"use client";

import { useCallback } from "react";
import AIInsightCard from "@/components/AIInsightCard";
import ImageWithFallback from "@/components/ImageWithFallback";
import MobileLayout from "@/components/MobileLayout";
import StatusBadge from "@/components/StatusBadge";
import StickyPageHeader, {
  HEADER_GRID_COLS,
} from "@/components/StickyPageHeader";
import { FESTIVALS } from "@/data/scenes";

const HERO_PILLS = ["Monthly picks", "Cultural sounds", "Trending now"];

const FESTIVAL_TINTS = {
  "afro-nation": "bg-gradient-to-b from-[#1A3D20]/30 to-transparent",
  "montreux-jazz": "bg-gradient-to-b from-[#0D1B3E]/30 to-transparent",
  hemis: "bg-gradient-to-b from-[#2A103D]/30 to-transparent",
  "rath-yatra": "bg-gradient-to-b from-[#3D2A0A]/30 to-transparent",
  tomorrowland: "bg-gradient-to-b from-[#3D1030]/30 to-transparent",
  "fuji-rock": "bg-gradient-to-b from-[#103D3A]/30 to-transparent",
  bonalu: "bg-gradient-to-b from-[#3D1F0A]/30 to-transparent",
  "guru-purnima": "bg-gradient-to-b from-[#3D3210]/30 to-transparent",
};

function splitDirections(value) {
  return value.split("·").map((item) => item.trim());
}

function formatMetaLine(festival) {
  return `${festival.date} · ${festival.location}`.toUpperCase();
}

export default function FestivalsPage() {
  const handleShare = useCallback(async () => {
    if (typeof window === "undefined") return;

    const shareData = {
      title: "Trending Festivals",
      text: "July 2026 global festivals through music, culture, and trending sounds.",
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch {
        // fall back to copy below
      }
    }

    try {
      await navigator.clipboard.writeText(window.location.href);
    } catch {
      // no-op fallback
    }
  }, []);

  return (
    <MobileLayout activeTab="home">
      <StickyPageHeader
        title="Trending Festivals"
        backHref="/hub"
        onShare={handleShare}
      />

      <div className="relative -mx-4">
        <div
          className="absolute inset-x-0 top-0 h-[220px]"
          style={{
            background:
              "linear-gradient(180deg, #3D2A0A 0%, #1A1510 40%, #121212 70%)",
          }}
        />
        <div className={`relative ${HEADER_GRID_COLS} items-start px-4 pb-2 pt-14`}>
          <div aria-hidden="true" />
          <div className="min-w-0">
            <h1 className="text-3xl font-black text-white">Trending Festivals</h1>
            <p className="mt-2 text-sm text-white/60">
              July 2026 - global festivals through music, culture, and trending
              sounds
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {HERO_PILLS.map((label) => (
                <span
                  key={label}
                  className="rounded-full bg-white/[0.06] px-2 py-1 text-[9px] text-white/40"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
          <div aria-hidden="true" />
        </div>
      </div>

      <div className="space-y-3 px-4 pb-6">
        {FESTIVALS.map((festival) => (
          <div
            key={festival.id}
            className="overflow-hidden rounded-xl bg-white/[0.04] ring-1 ring-white/10"
          >
            <div className="relative h-36 w-full">
              <ImageWithFallback
                src={festival.imageUrl}
                alt={festival.name}
                className="h-full w-full object-cover"
                fallbackGradient={`linear-gradient(135deg, ${festival.statusColor}44, #121212)`}
                fallbackClassName="h-full w-full"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent 30%, rgba(18,18,18,0.95) 100%)",
                }}
              />
              <div className="absolute left-3 top-3">
                <StatusBadge color={festival.statusColor}>{festival.status}</StatusBadge>
              </div>
            </div>

            <div className={`p-4 ${FESTIVAL_TINTS[festival.id] || ""}`}>
              <h2 className="text-lg font-bold text-white">{festival.name}</h2>
              <p className="mt-1 text-[11px] uppercase tracking-wider text-white/40">
                {formatMetaLine(festival)}
              </p>
              <p className="mt-1 text-[13px] text-white/60">{festival.description}</p>

              <div className="mt-2 flex flex-wrap items-center text-[10px] font-medium text-spotify-green">
                {splitDirections(festival.musicDirection).map((item, index, arr) => (
                  <span key={item}>
                    {item}
                    {index < arr.length - 1 ? " · " : ""}
                  </span>
                ))}
              </div>

              <AIInsightCard label="Why this is for you" className="mt-3">
                {festival.insight}
              </AIInsightCard>
            </div>
          </div>
        ))}
      </div>
    </MobileLayout>
  );
}
