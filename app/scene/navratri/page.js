import ScenePlaylistPage from "@/components/ScenePlaylistPage";
import { NAVRATRI_TRACKS, SCENES } from "@/data/scenes";

const SECTIONS = [
  {
    title: "From your world",
    subtitle: "Artists you already love, festival-ready",
    tracks: NAVRATRI_TRACKS.fromYourWorld,
  },
  {
    title: "Trending right now",
    subtitle: "What's actually playing in Gujarat this week",
    tracks: NAVRATRI_TRACKS.trendingNow,
  },
  {
    title: "Hidden gem",
    subtitle: "Lesser-known artists, exactly your sound",
    tracks: NAVRATRI_TRACKS.hiddenGems,
  },
];

const scene = {
  ...SCENES.find((s) => s.id === "navratri"),
  heroImageUrl: "/images/navratri-hero.jpg",
};

export default function NavratriPage() {
  return (
    <ScenePlaylistPage
      scene={scene}
      sections={SECTIONS}
      heroLabel="Spotify · Live now · Started 2 days ago"
      heroDescription="Nine nights of Garba and Dandiya — the dhol-driven rhythms behind India's biggest festival season"
      playlistMetadata="48 songs, 2h 22 min · Next update at 7:50 PM"
    />
  );
}
