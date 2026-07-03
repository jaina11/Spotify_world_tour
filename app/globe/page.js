"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import InteractiveGlobe from "@/components/InteractiveGlobe";
import MobileLayout from "@/components/MobileLayout";
import StickyPageHeader from "@/components/StickyPageHeader";

const CITIES = ["Tokyo", "Paris", "New York", "Singapore", "Dubai"];

export default function GlobePage() {
  const router = useRouter();

  return (
    <MobileLayout activeTab="home" hideNowPlaying>
      <StickyPageHeader
        title="Explore the World"
        backHref="/tour"
        onShare={() => {}}
      />

      <div className="flex min-h-screen flex-col bg-[#121212] px-4 pb-24 pt-14">
        <h1 className="text-center text-sm font-bold text-white">
          Explore the World
        </h1>

        <div className="mt-4 h-[60vh] w-full">
          <InteractiveGlobe />
        </div>

        <p className="mt-4 text-center text-sm text-white/40">
          Tap a city to discover its sound
        </p>

        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {CITIES.map((city) => (
            <button
              key={city}
              type="button"
              onClick={() => router.push("/hub")}
              className="rounded-full bg-white/[0.06] px-3 py-1.5 text-[11px] text-white/70"
            >
              {city}
            </button>
          ))}
        </div>

        <Link
          href="/hub"
          className="mt-5 text-center text-sm font-medium text-spotify-green"
        >
          Or explore all →
        </Link>
      </div>
    </MobileLayout>
  );
}
