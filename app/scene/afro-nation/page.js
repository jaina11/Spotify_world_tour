import ScenePlaylistPage from "@/components/ScenePlaylistPage";
import { AFRO_NATION_TRACKS, FESTIVALS } from "@/data/scenes";

const SECTIONS = [
  {
    title: "Picked for you",
    subtitle: "Artists and tracks that match your Afrobeats taste",
    tracks: AFRO_NATION_TRACKS.pickedForYou,
  },
  {
    title: "Trending now",
    subtitle: "What's blowing up at Afro Nation this week",
    tracks: AFRO_NATION_TRACKS.trendingNow,
    extra: "Extra: On the Low — Burna Boy; Bongo — Kizz Daniel",
  },
  {
    title: "Hidden gem",
    subtitle: "Deep cuts and crowd favorites you haven't found yet",
    tracks: AFRO_NATION_TRACKS.hiddenGems,
    extra: "Extra: Terminator — Asake; Sungba — Asake ft. Burna Boy",
  },
];

const festival = FESTIVALS.find((entry) => entry.id === "afro-nation");

const scene = {
  id: festival.id,
  name: festival.name,
  statusColor: festival.statusColor,
  description: festival.description,
  surfacedReason: festival.insight,
  imageUrl: festival.imageUrl,
  heroImageUrl:
    "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=400&fit=crop",
};

export default function AfroNationPage() {
  return (
    <ScenePlaylistPage
      scene={scene}
      sections={SECTIONS}
      backHref="/festivals"
      hideNowPlaying
      heroLabel="Spotify · Live now · July 3–5, 2026"
      heroDescription="A global showcase for afrobeats, amapiano, R&B, and Black diaspora sounds. Your recent Afrobeats streak says you're already tuned in."
      playlistMetadata="20 songs, 1h 12 min · Next update at 8:30 PM"
    />
  );
}
