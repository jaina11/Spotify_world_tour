import { CURRENT_LOCATION, getDestinationById } from "@/data/globe";
import { getItineraryCountry } from "@/data/itineraryCountries";

function getCountryTracks(country) {
  if (!country?.buckets) return [];
  return [
    ...country.buckets.fromYourWorld,
    ...country.buckets.trendingLocally,
    ...country.buckets.discoveredByTravelers,
    ...country.buckets.hiddenGem,
  ];
}

function projectToMap(lng, lat) {
  return {
    x: ((lng + 180) / 360) * 400,
    y: ((90 - lat) / 180) * 200,
  };
}

function buildFlightPath(from, to) {
  const midX = (from.x + to.x) / 2;
  const midY = Math.min(from.y, to.y) - 24;
  return `M ${from.x} ${from.y} Q ${midX} ${midY} ${to.x} ${to.y}`;
}

function shortCountryName(name) {
  if (name === "United Kingdom") return "UK";
  if (name === "South Korea") return "S.Korea";
  return name;
}

/**
 * Build all passport section content from unlocked country progress entries.
 */
export function buildPassportContent(unlockEntries = []) {
  const discoveries = [];
  const artists = [];
  const worlds = [];
  const genreSet = new Set();
  const languageWeights = new Map();

  unlockEntries.forEach((entry) => {
    const country = getItineraryCountry(entry.id);
    if (!country) return;

    const tracks = getCountryTracks(country);
    const foundVia = `${country.name}'s ${country.event.name}`;

    tracks.slice(0, 2).forEach((track) => {
      discoveries.push({
        id: `${entry.id}-${track.name}`,
        track: track.name,
        artist: track.artist,
        foundVia,
        imageUrl: track.imageUrl,
      });
    });

    if (tracks[0]) {
      artists.push({
        id: `${entry.id}-${tracks[0].artist}`,
        name: tracks[0].artist,
        flag: country.flag,
        imageUrl: tracks[0].imageUrl,
      });
    }

    worlds.push({
      id: entry.id,
      scene: country.event.name,
      region: country.event.region,
      tracksExplored: entry.trackCount || country.trackCount,
      statusColor: country.event.statusColor,
    });

    country.genreIdentity
      .split("/")
      .map((part) => part.trim())
      .filter(Boolean)
      .forEach((genre) => genreSet.add(genre));

    const langKey = country.language;
    if (!languageWeights.has(langKey)) {
      languageWeights.set(langKey, {
        lang: langKey,
        flag: country.flag,
        weight: 0,
      });
    }
    languageWeights.get(langKey).weight += entry.trackCount || country.trackCount;
  });

  const totalLangWeight = Array.from(languageWeights.values()).reduce(
    (sum, item) => sum + item.weight,
    0
  );

  const languageBreakdown = Array.from(languageWeights.values())
    .map((item) => ({
      lang: item.lang,
      flag: item.flag,
      pct:
        totalLangWeight > 0
          ? Math.round((item.weight / totalLangWeight) * 100)
          : 0,
    }))
    .sort((a, b) => b.pct - a.pct);

  const origin = projectToMap(CURRENT_LOCATION.lng, CURRENT_LOCATION.lat);
  const destinationStops = unlockEntries
    .map((entry) => {
      const globeDest = getDestinationById(entry.id);
      if (!globeDest) return null;

      const point = projectToMap(globeDest.lng, globeDest.lat);
      return {
        id: entry.id,
        flag: entry.flag,
        name: shortCountryName(entry.name),
        x: point.x,
        y: point.y,
      };
    })
    .filter(Boolean);

  const journeyStops = [
    {
      id: "bangalore",
      flag: "🇮🇳",
      name: "Bangalore",
      x: origin.x,
      y: origin.y,
      isOrigin: true,
    },
    ...destinationStops,
  ];

  const flightPaths = destinationStops.map((stop) =>
    buildFlightPath(origin, stop)
  );

  const genresSnuckIn = Array.from(genreSet);

  return {
    discoveries,
    artists: artists.slice(0, 3),
    worlds,
    genresSnuckIn,
    languageBreakdown,
    journey: {
      stops: journeyStops,
      flightPaths,
      genreSummary:
        genresSnuckIn.length > 0
          ? `From ${genresSnuckIn.slice(0, 3).join(" to ")}`
          : "Your sound is still waiting to cross borders",
    },
  };
}
