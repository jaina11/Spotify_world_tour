import Link from "next/link";
import AIInsightCard from "./AIInsightCard";
import ImageWithFallback from "./ImageWithFallback";
import StatusBadge from "./StatusBadge";

export default function SceneCard({ scene }) {
  const content = (
    <div className="tap-scale mb-2.5 overflow-hidden rounded-xl bg-white/[0.04]">
      <div className="relative h-32 w-full">
        <ImageWithFallback
          src={scene.imageUrl}
          alt={scene.name}
          className="h-full w-full object-cover"
          fallbackGradient={`linear-gradient(135deg, ${scene.statusColor}44, #121212)`}
          fallbackClassName="h-full w-full"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 30%, #242424 100%)",
          }}
        />
        <div className="absolute left-3 top-3">
          <StatusBadge color={scene.statusColor}>{scene.status}</StatusBadge>
        </div>
      </div>

      <div className={`p-3.5 ${scene.cardTint || ""}`}>
        <h3 className="text-base font-black text-white">{scene.name}</h3>
        <p className="mt-0.5 text-[10px] uppercase tracking-wider text-spotify-muted">
          {scene.region}
        </p>
        <p className="mt-1.5 text-[13px] leading-relaxed text-spotify-secondary">
          {scene.description}
        </p>

        {scene.surfacedReason && (
          <AIInsightCard label="Why this is for you" className="mt-2.5">
            {scene.surfacedReason}
          </AIInsightCard>
        )}
      </div>
    </div>
  );

  if (scene.navigable) {
    return (
      <Link href={`/scene/${scene.id}`} className="block">
        {content}
      </Link>
    );
  }

  return content;
}
