import MobileLayout from "@/components/MobileLayout";
import SceneCard from "@/components/SceneCard";
import StickyPageHeader, {
  HEADER_GRID_COLS,
} from "@/components/StickyPageHeader";
import { SCENES } from "@/data/scenes";

export default function EventsPage() {
  return (
    <MobileLayout activeTab="home">
      <StickyPageHeader title="Your Tour" backHref="/hub" />

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
              What&apos;s happening where you&apos;ve been
            </h1>
            <p className="mt-1.5 text-[13px] leading-relaxed text-spotify-secondary">
              Real events, real trends, picked because they match where your music
              has already taken you.
            </p>
          </div>
          <div aria-hidden="true" />
        </div>
      </div>

      <div className="px-4">
        {SCENES.map((scene) => (
          <SceneCard key={scene.id} scene={scene} />
        ))}
      </div>
    </MobileLayout>
  );
}
