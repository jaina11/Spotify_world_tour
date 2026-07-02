import NowPlayingBar from "./NowPlayingBar";
import TabBar from "./TabBar";

export default function MobileLayout({
  children,
  activeTab = "home",
  hideChrome = false,
}) {
  return (
    <div className="min-h-screen bg-black">
      <div className="relative mx-auto min-h-screen max-w-mobile bg-spotify-bg">
        <main className={`animate-fade-in ${hideChrome ? "pb-4" : "pb-36"}`}>
          {children}
        </main>
        {!hideChrome && <NowPlayingBar />}
        {!hideChrome && <TabBar activeTab={activeTab} />}
      </div>
    </div>
  );
}
