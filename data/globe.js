import {
  getDomesticCityMeta,
  getDomesticReasoningSteps,
} from "@/data/domesticCities";

/** Countries available as globe markers and itinerary destinations */
export const GLOBE_DESTINATIONS = [
  {
    id: "australia",
    name: "Australia",
    lat: -33.8688,
    lng: 151.2093,
    aliases: ["australia", "au", "sydney"],
  },
  {
    id: "uk",
    name: "United Kingdom",
    lat: 51.5074,
    lng: -0.1278,
    aliases: ["uk", "united kingdom", "britain", "england", "london"],
  },
  {
    id: "china",
    name: "China",
    lat: 39.9042,
    lng: 116.4074,
    aliases: ["china", "beijing", "cn"],
  },
  {
    id: "nepal",
    name: "Nepal",
    lat: 27.7172,
    lng: 85.324,
    aliases: ["nepal", "kathmandu"],
  },
  {
    id: "greece",
    name: "Greece",
    lat: 37.9838,
    lng: 23.7275,
    aliases: ["greece", "athens"],
  },
  {
    id: "mexico",
    name: "Mexico",
    lat: 19.4326,
    lng: -99.1332,
    aliases: ["mexico", "mexico city"],
  },
  {
    id: "nigeria",
    name: "Nigeria",
    lat: 6.5244,
    lng: 3.3792,
    aliases: ["nigeria", "lagos"],
  },
  {
    id: "japan",
    name: "Japan",
    lat: 35.6762,
    lng: 139.6503,
    aliases: ["japan", "tokyo", "jp"],
  },
];

export const CURRENT_LOCATION = {
  id: "bangalore",
  name: "Bangalore",
  lat: 12.9716,
  lng: 77.5946,
  type: "current",
};

export const MAX_DESTINATIONS = 4;

export function getDestinationById(id) {
  return (
    GLOBE_DESTINATIONS.find((country) => country.id === id) ||
    getDomesticCityMeta(id) ||
    null
  );
}

export function matchDestination(query) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return null;

  return (
    GLOBE_DESTINATIONS.find(
      (country) =>
        country.name.toLowerCase() === normalized ||
        country.aliases.some((alias) => alias === normalized)
    ) ||
    GLOBE_DESTINATIONS.find(
      (country) =>
        country.name.toLowerCase().startsWith(normalized) ||
        country.aliases.some((alias) => alias.startsWith(normalized))
    ) ||
    null
  );
}

export function getReasoningSteps(destinationId) {
  const domesticSteps = getDomesticReasoningSteps(destinationId);
  if (getDomesticCityMeta(destinationId)) {
    return domesticSteps;
  }

  const country = getDestinationById(destinationId);
  const name = country?.name || "your destination";

  const custom = REASONING_BY_DESTINATION[destinationId];
  if (custom) return custom;

  return [
    `Scanning what's trending in ${name} this week...`,
    `Matching tracks to your listening taste...`,
    "Curating hidden gems local listeners love...",
    "Finalizing your itinerary...",
  ];
}

const REASONING_BY_DESTINATION = {
  australia: [
    "Scanning what's trending in Australia this week...",
    "Found it — Vivid Sydney season is just kicking off...",
    "Matching tracks to your indie-electronic streak...",
    "Curating hidden gems local listeners love...",
    "Finalizing your itinerary...",
  ],
  uk: [
    "Scanning what's trending in the United Kingdom this week...",
    "Found it — London's alt-pop underground is surging...",
    "Matching tracks to your late-night playlist energy...",
    "Curating hidden gems local listeners love...",
    "Finalizing your itinerary...",
  ],
  china: [
    "Scanning what's trending in China this week...",
    "Found it — Mandarin indie wave season is building...",
    "Matching tracks to your electronic curiosity...",
    "Curating hidden gems local listeners love...",
    "Finalizing your itinerary...",
  ],
  nepal: [
    "Scanning what's trending in Nepal this week...",
    "Found it — Kathmandu indie is having a moment...",
    "Matching tracks to your folk-acoustic streak...",
    "Curating hidden gems local listeners love...",
    "Finalizing your itinerary...",
  ],
  greece: [
    "Scanning what's trending in Greece this week...",
    "Found it — Mediterranean pop season is heating up...",
    "Matching tracks to your summer playlist warmth...",
    "Curating hidden gems local listeners love...",
    "Finalizing your itinerary...",
  ],
  mexico: [
    "Scanning what's trending in Mexico this week...",
    "Found it — Regional Mexican wave is cresting...",
    "Matching tracks to your Latin listening lean...",
    "Curating hidden gems local listeners love...",
    "Finalizing your itinerary...",
  ],
  nigeria: [
    "Scanning what's trending in Nigeria this week...",
    "Found it — Afrobeats season is in full swing...",
    "Matching tracks to your groove-heavy playlists...",
    "Curating hidden gems local listeners love...",
    "Finalizing your itinerary...",
  ],
  japan: [
    "Scanning what's trending in Japan this week...",
    "Found it — City pop revival week is underway...",
    "Matching tracks to your electronic-pop crossover taste...",
    "Curating hidden gems local listeners love...",
    "Finalizing your itinerary...",
  ],
};
