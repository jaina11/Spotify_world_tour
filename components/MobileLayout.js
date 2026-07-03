import NowPlayingBar from "./NowPlayingBar";
import TabBar from "./TabBar";

export default function MobileLayout({
  children,
  activeTab = "home",
  hideChrome = false,
  hideNowPlaying = false,
}) {
  const showTabBar = !hideChrome;
  const showNowPlaying = !hideChrome && !hideNowPlaying;

  const mainPadding = hideChrome ? "pb-4" : showNowPlaying ? "pb-36" : "pb-20";

  return (
    <div className="min-h-screen bg-black">
      <div className="relative mx-auto min-h-screen max-w-mobile bg-spotify-bg">
        <main className={`animate-fade-in ${mainPadding}`}>{children}</main>
        {showNowPlaying && <NowPlayingBar />}
        {showTabBar && <TabBar activeTab={activeTab} />}
      </div>
    </div>
  );
}
