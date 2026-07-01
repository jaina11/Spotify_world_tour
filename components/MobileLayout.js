import NowPlayingBar from "./NowPlayingBar";
import TabBar from "./TabBar";

export default function MobileLayout({ children, activeTab = "home" }) {
  return (
    <div className="min-h-screen bg-black">
      <div className="relative mx-auto min-h-screen max-w-mobile bg-spotify-bg">
        <main className="animate-fade-in pb-36">{children}</main>
        <NowPlayingBar />
        <TabBar activeTab={activeTab} />
      </div>
    </div>
  );
}
