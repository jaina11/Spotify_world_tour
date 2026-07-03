"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import InteractiveGlobe from "@/components/InteractiveGlobe";
import MobileLayout from "@/components/MobileLayout";
import StickyPageHeader from "@/components/StickyPageHeader";

const CITIES = ["Tokyo", "Paris", "New York", "Singapore", "Dubai"];

export default function GlobePage() {
  const router = useRouter();
  const [selectedCities, setSelectedCities] = useState(CITIES);

  const toggleCity = (city) => {
    setSelectedCities((current) =>
      current.includes(city)
        ? current.filter((name) => name !== city)
        : [...current, city]
    );
  };

  const hasSelection = selectedCities.length > 0;

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

        <p className="mb-3 mt-4 text-center text-sm text-white/50">
          Select cities for your world tour
        </p>

        <div className="flex flex-wrap justify-center gap-2">
          {CITIES.map((city) => {
            const isSelected = selectedCities.includes(city);

            return (
              <button
                key={city}
                type="button"
                onClick={() => router.push("/scene/world-tour")}
                className={
                  isSelected
                    ? "rounded-full bg-spotify-green px-4 py-2 text-xs font-bold text-black"
                    : "rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs text-white/40"
                }
              >
                {city}
              </button>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => hasSelection && router.push("/scene/world-tour")}
          disabled={!hasSelection}
          className={
            hasSelection
              ? "btn-spotify mx-4 mt-5 w-[calc(100%-2rem)] rounded-full bg-spotify-green py-3 text-center text-sm font-bold text-black"
              : "mx-4 mt-5 w-[calc(100%-2rem)] cursor-not-allowed rounded-full bg-white/10 py-3 text-center text-sm font-bold text-white/30"
          }
        >
          Curate My Playlist ({selectedCities.length}{" "}
          {selectedCities.length === 1 ? "city" : "cities"}) →
        </button>
      </div>
    </MobileLayout>
  );
}
