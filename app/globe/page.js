"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import InteractiveGlobe from "@/components/InteractiveGlobe";
import MobileLayout from "@/components/MobileLayout";
import StickyPageHeader from "@/components/StickyPageHeader";

const CITIES = ["Tokyo", "Paris", "New York", "Singapore", "Dubai"];
const REQUIRED_CITY_COUNT = 5;

export default function GlobePage() {
  const router = useRouter();
  const [selectedCities, setSelectedCities] = useState([]);

  const toggleCity = (city) => {
    setSelectedCities((current) =>
      current.includes(city)
        ? current.filter((name) => name !== city)
        : [...current, city]
    );
  };

  const allCitiesSelected = selectedCities.length === REQUIRED_CITY_COUNT;

  return (
    <MobileLayout activeTab="home" hideNowPlaying>
      <StickyPageHeader
        title="Build Your July Tour"
        backHref="/tour"
        onShare={() => {}}
      />

      <div className="flex min-h-screen flex-col bg-[#121212] px-4 pb-24 pt-14">
        <h1 className="text-center text-sm font-bold text-white">
          Build Your July Tour
        </h1>
        <p className="mt-1 text-center text-xs text-white/30">
          Pick countries from around the world — we&apos;ll match trending local
          sounds to your taste
        </p>

        <div className="mt-4 h-[60vh] w-full">
          <InteractiveGlobe />
        </div>

        <p className="mb-4 mt-4 px-2 text-center text-sm text-white/50">
          Spin the globe and pick your destinations. Select 5 cities below to
          curate your personalized July playlist.
        </p>

        <p
          className={`mb-2 text-center text-xs ${
            allCitiesSelected ? "text-spotify-green" : "text-white/40"
          }`}
        >
          {allCitiesSelected
            ? "All 5 cities selected ✓"
            : `${selectedCities.length}/5 cities selected`}
        </p>

        <div className="flex flex-wrap justify-center gap-2">
          {CITIES.map((city) => {
            const isSelected = selectedCities.includes(city);

            return (
              <button
                key={city}
                type="button"
                onClick={() => toggleCity(city)}
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
          onClick={() => allCitiesSelected && router.push("/curating")}
          disabled={!allCitiesSelected}
          className={`mx-4 mt-5 w-[calc(100%-2rem)] rounded-full py-3 text-center text-sm font-bold transition-all duration-300 ${
            allCitiesSelected
              ? "btn-spotify bg-spotify-green text-black"
              : "cursor-not-allowed bg-white/[0.08] text-white/30"
          }`}
        >
          {allCitiesSelected
            ? "Curate My Playlist →"
            : "Select all 5 cities to continue"}
        </button>

        {!allCitiesSelected && (
          <p className="mt-2 text-center text-[11px] text-white/30">
            This is a prototype — select all 5 cities to experience the full flow
          </p>
        )}
      </div>
    </MobileLayout>
  );
}
