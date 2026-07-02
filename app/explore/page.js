"use client";

import Link from "next/link";
import ImageWithFallback from "@/components/ImageWithFallback";
import MobileLayout from "@/components/MobileLayout";
import StickyPageHeader, {
  HEADER_GRID_COLS,
} from "@/components/StickyPageHeader";
import { getExploreCountries } from "@/data/countries";

export default function ExplorePage() {
  const countries = getExploreCountries();

  return (
    <MobileLayout activeTab="home">
      <StickyPageHeader title="Explore" backHref="/hub" />

      <div className="relative -mx-4">
        <div
          className="absolute inset-x-0 top-0 h-[200px]"
          style={{
            background:
              "linear-gradient(180deg, #2D4A2D 0%, #1A2F1A 30%, #121212 60%, #121212 100%)",
          }}
        />
        <div className={`relative ${HEADER_GRID_COLS} items-start px-4 pb-2 pt-14`}>
          <div aria-hidden="true" />
          <div className="min-w-0">
            <h1 className="text-[26px] font-black leading-tight text-white">
              Explore the World
            </h1>
            <p className="mt-1.5 text-[13px] leading-relaxed text-spotify-secondary">
              New cultures beyond your passport — picked because they match your
              taste
            </p>
          </div>
          <div aria-hidden="true" />
        </div>
      </div>

      <div className="px-4 pb-4">
        <div className="grid grid-cols-2 gap-2">
          {countries.map((country) => (
            <Link
              key={country.id}
              href={`/explore/${country.id}`}
              className="tap-scale block"
            >
              <div className="relative h-36 overflow-hidden rounded-xl">
                <ImageWithFallback
                  src={country.imageUrl}
                  alt={country.name}
                  className="h-full w-full object-cover"
                  fallbackGradient={country.gradient}
                  fallbackClassName="h-full w-full"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent 25%, rgba(18,18,18,0.7) 60%, rgba(18,18,18,0.95) 100%)",
                  }}
                />
                <div className="absolute inset-x-0 bottom-0 p-3">
                  <span className="text-xl leading-none">{country.flag}</span>
                  <h2 className="mt-1.5 text-sm font-black text-white">
                    {country.name}
                  </h2>
                  <p className="mt-1 line-clamp-2 text-[10px] leading-snug text-white/65">
                    {country.tasteMatch}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </MobileLayout>
  );
}
