import ScenePlaylistPage from "@/components/ScenePlaylistPage";
import { LAGOS_TRACKS, SCENES } from "@/data/scenes";

const SECTIONS = [
  {
    title: "From your world",
    subtitle: "The anthems everyone already knows",
    tracks: LAGOS_TRACKS.fromYourWorld,
  },
  {
    title: "Trending right now",
    subtitle: "What's actually circulating in Lagos this week",
    tracks: LAGOS_TRACKS.trendingNow,
    extra: "Extra: Sungba (Remix) — Asake, Burna Boy; Why Love — Tems",
  },
  {
    title: "Hidden gem",
    subtitle: "Emerging Lagos artists, ahead of the wave",
    tracks: LAGOS_TRACKS.hiddenGems,
    extra: "Extra: Paparazzi — Shoday; FOLA; Attack — Ayo Maff",
  },
];

const scene = SCENES.find((s) => s.id === "lagos");

export default function LagosPage() {
  return (
    <ScenePlaylistPage
      scene={scene}
      sections={SECTIONS}
      statusBadge="RISING · Up 320% this month"
      heroDescription="Afrobeats is having a moment — the street-pop wave coming out of Lagos right now"
      playlistMetadata="32 songs, 1h 45 min · Next update at 9:15 PM"
    />
  );
}
