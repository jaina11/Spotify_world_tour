"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import GlobeViewer from "@/components/GlobeViewer";
import IndiaMapViewer from "@/components/IndiaMapViewer";
import GlobeModeToggle from "@/components/GlobeModeToggle";
import GlobeDestinationPanel from "@/components/GlobeDestinationPanel";
import JourneyMenu from "@/components/JourneyMenu";
import MobileLayout from "@/components/MobileLayout";
import StickyPageHeader from "@/components/StickyPageHeader";
import {
  CURRENT_LOCATION,
  GLOBE_DESTINATIONS,
  MAX_DESTINATIONS,
  matchDestination,
} from "@/data/globe";

function createEmptySlot() {
  return { key: `slot-${Date.now()}-${Math.random()}`, countryId: null, query: "" };
}

export default function GlobeScreen() {
  const router = useRouter();
  const [mode, setMode] = useState("international");
  const [selectedCityId, setSelectedCityId] = useState(null);
  const [slots, setSlots] = useState([createEmptySlot()]);

  const selectedIds = useMemo(
    () => slots.map((slot) => slot.countryId).filter(Boolean),
    [slots]
  );

  const selectedCount = selectedIds.length;
  const canAddSlot = slots.length < MAX_DESTINATIONS;
  const canSubmitInternational = selectedCount > 0;
  const canSubmitDomestic = Boolean(selectedCityId);

  const handleToggleDestination = (country) => {
    setSlots((prev) => {
      const existingIndex = prev.findIndex((slot) => slot.countryId === country.id);

      if (existingIndex !== -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          countryId: null,
          query: "",
        };
        return next;
      }

      const emptyIndex = prev.findIndex((slot) => !slot.countryId);
      if (emptyIndex === -1) return prev;

      const next = [...prev];
      next[emptyIndex] = {
        ...next[emptyIndex],
        countryId: country.id,
        query: country.name,
      };
      return next;
    });
  };

  const handleToggleCity = (city) => {
    setSelectedCityId((prev) => (prev === city.id ? null : city.id));
  };

  const handleSlotChange = (index, value) => {
    setSlots((prev) => {
      const next = [...prev];
      const match = matchDestination(value);
      next[index] = {
        ...next[index],
        query: value,
        countryId: match?.id ?? null,
      };
      return next;
    });
  };

  const handleAddSlot = () => {
    if (!canAddSlot) return;
    setSlots((prev) => [...prev, createEmptySlot()]);
  };

  const handleRemoveSlot = (index) => {
    if (index === 0) return;
    setSlots((prev) => prev.filter((_, slotIndex) => slotIndex !== index));
  };

  const handleSubmitInternational = () => {
    if (!canSubmitInternational) return;

    const params = new URLSearchParams({
      from: CURRENT_LOCATION.name,
      destinations: selectedIds.join(","),
    });

    router.push(`/loading?${params.toString()}`);
  };

  const handleSubmitDomestic = () => {
    if (!selectedCityId) return;

    const params = new URLSearchParams({
      from: CURRENT_LOCATION.name,
      destinations: selectedCityId,
    });

    router.push(`/loading?${params.toString()}`);
  };

  return (
    <MobileLayout activeTab="home">
      <StickyPageHeader title="World Globe" backHref="/" />

      <div className="pt-14">
        <div className="px-4 pb-3">
          <h1 className="text-[22px] font-black leading-tight text-white">
            World Tour
          </h1>
          <p className="mt-1 text-[13px] text-spotify-secondary">
            Pick your next music destination
          </p>
          <GlobeModeToggle
            mode={mode}
            onChange={setMode}
            className="mt-4"
          />
          <JourneyMenu className="mt-3" />
        </div>

        {mode === "international" ? (
          <GlobeViewer
            className="h-[42vh] min-h-[240px] max-h-[360px]"
            markers={GLOBE_DESTINATIONS}
            selectedIds={selectedIds}
            onToggleDestination={handleToggleDestination}
          />
        ) : (
          <>
            <div className="px-4 pb-2">
              <h2 className="text-sm font-black text-white">This month&apos;s cities</h2>
              <p className="mt-0.5 text-[11px] text-spotify-secondary">
                Rotates monthly — new cities, new sounds
              </p>
            </div>
            <IndiaMapViewer
              className="h-[40vh] min-h-[220px] max-h-[340px]"
              selectedCityId={selectedCityId}
              onToggleCity={handleToggleCity}
            />
          </>
        )}

        <GlobeDestinationPanel
          mode={mode}
          slots={slots}
          selectedCount={selectedCount}
          canAddSlot={canAddSlot}
          canSubmitInternational={canSubmitInternational}
          selectedCityId={selectedCityId}
          canSubmitDomestic={canSubmitDomestic}
          onSlotChange={handleSlotChange}
          onAddSlot={handleAddSlot}
          onRemoveSlot={handleRemoveSlot}
          onSubmitInternational={handleSubmitInternational}
          onSubmitDomestic={handleSubmitDomestic}
        />
      </div>
    </MobileLayout>
  );
}
