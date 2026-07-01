import { TabIcon } from "./icons";

const TABS = [
  { id: "home", label: "Home" },
  { id: "search", label: "Search" },
  { id: "library", label: "Your Library" },
  { id: "create", label: "Create" },
];

export default function TabBar({ activeTab = "home" }) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-16"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(18,18,18,0.85) 40%, #121212 100%)",
        }}
      />
      <div className="relative mx-auto max-w-mobile bg-[#121212] pb-[env(safe-area-inset-bottom)]">
        <div className="flex h-[50px] items-center justify-around px-2">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                className={`flex min-w-[44px] flex-col items-center justify-center gap-1 ${
                  isActive ? "text-white" : "text-spotify-secondary"
                }`}
              >
                <TabIcon id={tab.id} active={isActive} />
                <span className="text-[10px] font-medium">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
