"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronRightIcon, TourWaveIcon } from "@/components/icons";
import { hasVisitedPassport } from "@/data/passport";

export default function PassportBanner({ className = "" }) {
  const [passportVisited, setPassportVisited] = useState(true);

  useEffect(() => {
    setPassportVisited(hasVisitedPassport());
  }, []);

  return (
    <Link href="/passport" className={`tap-scale block ${className}`}>
      <div className="relative flex h-14 items-center gap-3 overflow-hidden rounded-xl px-4 ring-1 ring-white/10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(29,185,84,0.18) 0%, rgba(123,104,238,0.14) 45%, rgba(18,18,18,0.85) 100%)",
          }}
        />
        <div className="pointer-events-none absolute -right-4 -top-4 h-20 w-20 rounded-full bg-spotify-green/10 blur-xl" />
        <div className="pointer-events-none absolute -bottom-6 left-1/3 h-16 w-16 rounded-full bg-[#7B68EE]/10 blur-xl" />

        <TourWaveIcon className="relative h-5 w-5 shrink-0 text-white/85" />
        <span className="relative min-w-0 flex-1 text-sm font-bold text-white">
          See your musical passport
        </span>
        <ChevronRightIcon className="relative h-5 w-5 shrink-0 text-white/70" />

        {!passportVisited && (
          <span className="absolute right-3 top-2 h-2 w-2 rounded-full bg-spotify-green ring-2 ring-[#121212]" />
        )}
      </div>
    </Link>
  );
}
