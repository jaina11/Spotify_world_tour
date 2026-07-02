import MobileLayout from "@/components/MobileLayout";
import PassportBanner from "@/components/PassportBanner";
import StickyPageHeader, {
  HEADER_GRID_COLS,
} from "@/components/StickyPageHeader";
import TrackRow from "@/components/TrackRow";
import { USER_PROFILE } from "@/data/scenes";

export default function TourBucketsPage({
  headerTitle,
  backHref = "/hub",
  pageTitle,
  pageSubtitle,
  trendingTag,
  sections,
  playlistMetadata,
}) {
  let trackNumber = 0;

  return (
    <MobileLayout activeTab="home">
      <StickyPageHeader title={headerTitle} backHref={backHref} />

      <div className={`${HEADER_GRID_COLS} items-start px-4 pt-14`}>
        <div aria-hidden="true" />
        <div className="mb-2 min-w-0">
          <h1 className="text-[26px] font-black leading-tight text-white">
            {pageTitle}
          </h1>
          {pageSubtitle && (
            <p className="mt-1.5 text-[13px] leading-relaxed text-spotify-secondary">
              {pageSubtitle}
            </p>
          )}
          {trendingTag && (
            <span className="mt-3 inline-block rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-spotify-secondary">
              {trendingTag}
            </span>
          )}
        </div>
        <div aria-hidden="true" />
      </div>

      <PassportBanner className="mb-4 px-4" />

      <div className="px-4">
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
