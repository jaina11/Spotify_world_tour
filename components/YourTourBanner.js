"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronRightIcon, TourWaveIcon } from "@/components/icons";
import { getUnlockedCountries } from "@/data/passport";

export default function YourTourBanner({ className = "" }) {
  const [unlockedCount, setUnlockedCount] = useState(0);

  useEffect(() => {
    const refresh = () => setUnlockedCount(getUnlockedCountries().length);
    refresh();
    window.addEventListener("focus", refresh);
    window.addEventListener("storage", refresh);
    return () => {
      window.removeEventListener("focus", refresh);
      window.removeEventListener("storage", refresh);
    };
  }, []);

  if (unlockedCount === 0) return null;

  return (
    <Link href="/your-tour" className={`tap-scale block ${className}`}>
      <div className="relative flex h-14 items-center gap-3 overflow-hidden rounded-xl px-4 ring-1 ring-white/10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(45,74,45,0.55) 0%, rgba(26,47,26,0.45) 50%, rgba(18,18,18,0.9) 100%)",
          }}
        />
        <TourWaveIcon className="relative h-5 w-5 shrink-0 text-spotify-green" />
        <div className="relative min-w-0 flex-1">
          <p className="text-sm font-bold text-white">Your Tour</p>
          <p className="text-[11px] text-white/55">
            {unlockedCount} unlocked {unlockedCount === 1 ? "destination" : "destinations"}
          </p>
        </div>
        <ChevronRightIcon className="relative h-5 w-5 shrink-0 text-white/70" />
      </div>
    </Link>
  );
}
