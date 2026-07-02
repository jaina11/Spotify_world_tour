"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronRightIcon, TourWaveIcon } from "@/components/icons";
import { getUnlockedCountries, hasVisitedPassport } from "@/data/passport";

export default function JourneyMenu({ className = "" }) {
  const [open, setOpen] = useState(false);
  const [passportVisited, setPassportVisited] = useState(true);
  const [unlockedCount, setUnlockedCount] = useState(0);

  useEffect(() => {
    const refresh = () => {
      setPassportVisited(hasVisitedPassport());
      setUnlockedCount(getUnlockedCountries().length);
    };
    refresh();
    window.addEventListener("focus", refresh);
    window.addEventListener("storage", refresh);
    return () => {
      window.removeEventListener("focus", refresh);
      window.removeEventListener("storage", refresh);
    };
  }, []);

  return (
    <div className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="tap-scale flex h-11 w-full items-center gap-2.5 rounded-xl bg-white/[0.04] px-3.5 ring-1 ring-white/10"
        aria-expanded={open}
        aria-haspopup="true"
      >
        <TourWaveIcon className="h-4 w-4 shrink-0 text-spotify-green" />
        <span className="min-w-0 flex-1 text-left text-sm font-bold text-white">
          Your Journey
        </span>
        {!passportVisited && (
          <span className="h-2 w-2 shrink-0 rounded-full bg-spotify-green" />
        )}
        <ChevronRightIcon
          className={`h-4 w-4 shrink-0 text-white/55 transition-transform ${
            open ? "rotate-90" : ""
          }`}
        />
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-[calc(100%+6px)] z-20 overflow-hidden rounded-xl bg-[#1a1a1a] py-1 shadow-lg ring-1 ring-white/10">
          <Link
            href="/passport"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2.5 px-3.5 py-2.5 text-sm text-white hover:bg-white/[0.04]"
          >
            <TourWaveIcon className="h-4 w-4 shrink-0 text-white/70" />
            <span className="flex-1 font-semibold">See your musical passport</span>
            {!passportVisited && (
              <span className="h-2 w-2 rounded-full bg-spotify-green" />
            )}
          </Link>
          {unlockedCount > 0 && (
            <Link
              href="/your-tour"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2.5 px-3.5 py-2.5 text-sm text-white hover:bg-white/[0.04]"
            >
              <TourWaveIcon className="h-4 w-4 shrink-0 text-spotify-green" />
              <span className="flex-1 font-semibold">
                Your Tour ({unlockedCount} unlocked)
              </span>
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
