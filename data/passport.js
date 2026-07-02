import { getItineraryCountry } from "@/data/itineraryCountries";

export const PASSPORT_VISITED_KEY = "worldTourPassportVisited";
export const PASSPORT_UNLOCKS_KEY = "worldTourPassportUnlocks";
export const PASSPORT_PROGRESS_KEY = "worldTourPassportProgress";

export const PASSPORT_UNLOCK_THRESHOLD = 70;

/** Delay before offering manual passport completion on itinerary screens */
export const MANUAL_PASSPORT_COMPLETION_DELAY_MS = 10000;

export function hasVisitedPassport() {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(PASSPORT_VISITED_KEY) === "true";
}

export function markPassportVisited() {
  if (typeof window === "undefined") return;
  localStorage.setItem(PASSPORT_VISITED_KEY, "true");
}

function readProgressMap() {
  if (typeof window === "undefined") return {};

  migrateLegacyUnlocks();

  try {
    const raw = localStorage.getItem(PASSPORT_PROGRESS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function writeProgressMap(map) {
  if (typeof window === "undefined") return;
  localStorage.setItem(PASSPORT_PROGRESS_KEY, JSON.stringify(map));
  syncLegacyUnlocksList(Object.values(map));
}

function migrateLegacyUnlocks() {
  if (typeof window === "undefined") return;

  try {
    const raw = localStorage.getItem(PASSPORT_UNLOCKS_KEY);
    if (!raw) return;

    const legacy = JSON.parse(raw);
    if (!Array.isArray(legacy) || legacy.length === 0) return;

    const map = (() => {
      try {
        const progressRaw = localStorage.getItem(PASSPORT_PROGRESS_KEY);
        return progressRaw ? JSON.parse(progressRaw) : {};
      } catch {
        return {};
      }
    })();

    let changed = false;
    legacy.forEach((entry) => {
      if (!entry?.id || map[entry.id]) return;
      const country = getItineraryCountry(entry.id);
      map[entry.id] = {
        id: entry.id,
        name: entry.name || country?.name || entry.id,
        flag: entry.flag || country?.flag || "🌍",
        language: entry.language || country?.language || "",
        distanceKm: entry.distanceKm ?? country?.distanceKm ?? 0,
        genreIdentity: entry.genreIdentity || country?.genreIdentity || "",
        trackCount: entry.tracksDiscovered ?? country?.trackCount ?? 0,
        progressPercent: PASSPORT_UNLOCK_THRESHOLD,
        unlockedAt: entry.unlockedAt || Date.now(),
        eventName: country?.event?.name || "",
      };
      changed = true;
    });

    if (changed) {
      localStorage.setItem(PASSPORT_PROGRESS_KEY, JSON.stringify(map));
    }
  } catch {
    // ignore corrupt legacy data
  }
}

function syncLegacyUnlocksList(entries) {
  const unlocks = entries
    .filter((entry) => entry.progressPercent >= PASSPORT_UNLOCK_THRESHOLD)
    .map((entry) => ({
      id: entry.id,
      name: entry.name,
      flag: entry.flag,
      language: entry.language,
      distanceKm: entry.distanceKm,
      genreIdentity: entry.genreIdentity,
      tracksDiscovered: entry.trackCount,
      unlockedAt: entry.unlockedAt || Date.now(),
    }));

  localStorage.setItem(PASSPORT_UNLOCKS_KEY, JSON.stringify(unlocks));
}

export function getPassportCountryEntry(countryId) {
  if (!countryId) return null;
  return readProgressMap()[countryId] || null;
}

export function getAttemptedCountries() {
  return Object.values(readProgressMap())
    .filter((entry) => entry.progressPercent > 0)
    .sort((a, b) => (b.lastVisitedAt || 0) - (a.lastVisitedAt || 0));
}

export function getUnlockedCountries() {
  return getAttemptedCountries().filter(
    (entry) =>
      entry.progressPercent >= PASSPORT_UNLOCK_THRESHOLD || entry.unlockedAt
  );
}

export function isItineraryCountryUnlocked(countryId) {
  const entry = getPassportCountryEntry(countryId);
  if (!entry) return false;
  return (
    entry.progressPercent >= PASSPORT_UNLOCK_THRESHOLD || Boolean(entry.unlockedAt)
  );
}

export function saveItineraryProgress(country, progressPercent) {
  if (typeof window === "undefined" || !country) return;

  const map = readProgressMap();
  const existing = map[country.id];
  const nextPercent = Math.min(
    100,
    Math.max(progressPercent, existing?.progressPercent || 0)
  );

  if (nextPercent <= 0) return;

  const shouldUnlock = nextPercent >= PASSPORT_UNLOCK_THRESHOLD;
  const entry = {
    id: country.id,
    name: country.name,
    flag: country.flag,
    language: country.language,
    distanceKm: country.distanceKm,
    genreIdentity: country.genreIdentity,
    trackCount: country.trackCount,
    progressPercent: nextPercent,
    unlockedAt: existing?.unlockedAt || null,
    eventName: country.event?.name || "",
    lastVisitedAt: Date.now(),
  };

  if (shouldUnlock && !entry.unlockedAt) {
    entry.unlockedAt = Date.now();
  }

  map[country.id] = entry;
  writeProgressMap(map);
}

export function getPassportUnlocks() {
  return getUnlockedCountries().map((entry) => ({
    id: entry.id,
    name: entry.name,
    flag: entry.flag,
    language: entry.language,
    distanceKm: entry.distanceKm,
    genreIdentity: entry.genreIdentity,
    tracksDiscovered: entry.trackCount,
    unlockedAt: entry.unlockedAt,
  }));
}

export function unlockItineraryCountry(country) {
  saveItineraryProgress(country, PASSPORT_UNLOCK_THRESHOLD);
}

export function getPassportDisplayStats() {
  const attempted = getAttemptedCountries();
  const unlocks = getUnlockedCountries();
  const languages = new Set(unlocks.map((entry) => entry.language).filter(Boolean));
  const kmTraveled = unlocks.reduce(
    (sum, entry) => sum + (entry.distanceKm || 0),
    0
  );

  return {
    countries: unlocks.length,
    languages: languages.size,
    kmTraveled,
    unlocks,
    attempted,
  };
}

export function formatPassportUnlockDate(timestamp) {
  if (!timestamp) return "";
  return new Date(timestamp).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
