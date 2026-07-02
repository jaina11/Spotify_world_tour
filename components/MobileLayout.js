import TabBar from "./TabBar";

export default function MobileLayout({
  children,
  activeTab = "home",
  hideChrome = false,
}) {
  const mainPadding = hideChrome ? "pb-4" : "pb-16";

  return (
    <div className="min-h-screen bg-black">
      <div className="relative mx-auto min-h-screen max-w-mobile bg-spotify-bg">
        <main className={`animate-fade-in ${mainPadding}`}>
          {children}
        </main>
        {!hideChrome && <TabBar activeTab={activeTab} />}
      </div>
    </div>
  );
}
