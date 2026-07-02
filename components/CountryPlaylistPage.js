import AIInsightCard from "@/components/AIInsightCard";
import ImageWithFallback from "@/components/ImageWithFallback";
import MobileLayout from "@/components/MobileLayout";
import PassportBanner from "@/components/PassportBanner";
import StickyPageHeader from "@/components/StickyPageHeader";
import TrackRow from "@/components/TrackRow";
import { USER_PROFILE } from "@/data/scenes";

export default function CountryPlaylistPage({
  country,
  backHref = "/explore",
  sections,
  playlistMetadata,
}) {
  let trackNumber = 0;

  return (
    <MobileLayout activeTab="home">
      <StickyPageHeader title={country.name} backHref={backHref} />

      <PassportBanner className="mb-3 px-4" />

      <div className="relative -mx-4">
        <div className="relative h-[200px] w-full overflow-hidden">
          <ImageWithFallback
            src={country.heroImageUrl || country.imageUrl}
            alt={country.name}
            className="h-full w-full object-cover"
            fallbackGradient={country.gradient}
            fallbackClassName="h-full w-full"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, transparent 0%, #121212 100%)",
            }}
          />
          <div className="absolute inset-x-0 bottom-0 px-4 pb-4 pt-14">
            {country.statusBadge && (
              <span className="mb-2 inline-block rounded bg-spotify-green px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-black">
                {country.statusBadge}
              </span>
            )}
            <h1
              className="text-3xl font-black text-white"
              style={{ textShadow: "0 2px 12px rgba(0,0,0,0.6)" }}
            >
              {country.flag} {country.name}
            </h1>
            <p className="mt-1 line-clamp-2 text-sm text-white/80">
              {country.heroDescription}
            </p>
          </div>
        </div>
      </div>

      <div className="px-4">
        <AIInsightCard label="Why this is for you" className="mb-4">
          {country.surfacedReason}
        </AIInsightCard>

        <div className="mb-1 flex items-center gap-2">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-spotify-green text-xs text-white">
            ♪
          </span>
          <span className="text-xs text-spotify-secondary">
            Made for {USER_PROFILE.name}
          </span>
        </div>
        {playlistMetadata && (
          <p className="mb-4 text-[11px] text-[#B3B3B3]">{playlistMetadata}</p>
        )}

        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-4 text-spotify-secondary">
            <button type="button" className="text-xl" aria-label="Like">
              ♡
            </button>
            <button type="button" className="text-xl" aria-label="Download">
              ↓
            </button>
            <button type="button" className="text-xl" aria-label="Share">
              ↗
            </button>
            <button type="button" className="text-xl" aria-label="More">
              ⋯
            </button>
          </div>
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="text-lg text-spotify-secondary"
              aria-label="Shuffle"
            >
              ⇄
            </button>
            <button
              type="button"
              className="btn-spotify flex h-12 w-12 items-center justify-center rounded-full bg-spotify-green text-lg font-bold text-black"
              aria-label="Play all"
            >
              ▶
            </button>
          </div>
        </div>

        {sections.map((section) => (
          <section key={section.title} className="mb-5">
            <div className="mb-1 flex items-baseline justify-between">
              <h2 className="text-base font-black text-white">
                {section.title}
              </h2>
              <button
                type="button"
                className="text-xs font-bold text-spotify-secondary"
              >
                Show more
              </button>
            </div>
            <p className="mb-2 text-xs text-spotify-muted">{section.subtitle}</p>
            {section.tracks.map((track) => {
              trackNumber += 1;
              return (
                <TrackRow
                  key={`${section.title}-${track.name}`}
                  track={track}
                  index={trackNumber}
                  tagColor={track.tagColor}
                  showPlay
                />
              );
            })}
            {section.extra && (
              <p className="mt-2 text-xs text-spotify-muted">{section.extra}</p>
            )}
          </section>
        ))}
      </div>
    </MobileLayout>
  );
}
