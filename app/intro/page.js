"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import IntroWorldMap from "@/components/IntroWorldMap";
import MobileLayout from "@/components/MobileLayout";
import { hasSeenIntro, markIntroSeen } from "@/data/intro";

function IntroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[40%] w-full opacity-50">
        <IntroWorldMap />
      </div>

      <div
        className="absolute inset-x-0 top-0 h-[55%]"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.92) 100%)",
        }}
      />

      <div
        className="absolute inset-x-0 bottom-0 h-[45%]"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.95) 100%)",
        }}
      />
    </div>
  );
}

function finishIntro(router) {
  markIntroSeen();
  router.push("/hub");
}

export default function IntroPage() {
  const router = useRouter();
  const [canShow, setCanShow] = useState(false);

  useEffect(() => {
    const fromSearch =
      typeof window !== "undefined" &&
      new URLSearchParams(window.location.search).get("from") === "search";

    if (hasSeenIntro() && !fromSearch) {
      router.replace("/hub");
      return;
    }
    setCanShow(true);
  }, [router]);

  if (!canShow) {
    return (
      <MobileLayout activeTab="home" hideChrome hideNowPlaying>
        <div className="min-h-screen bg-black" />
      </MobileLayout>
    );
  }

  return (
    <MobileLayout activeTab="home" hideChrome hideNowPlaying>
      <div
        className="relative flex min-h-screen flex-col px-6 pt-16"
        onClick={() => finishIntro(router)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") finishIntro(router);
        }}
        role="button"
        tabIndex={0}
      >
        <IntroBackground />

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            finishIntro(router);
          }}
          className="relative z-10 self-end text-sm text-spotify-secondary"
        >
          Skip
        </button>

        <div className="relative z-10 flex flex-1 flex-col items-center justify-center text-center">
          <p className="text-[10px] font-black uppercase tracking-[5px] text-spotify-green">
            Spotify World Tour
          </p>
          <h1 className="mt-4 max-w-[300px] text-3xl font-black leading-tight text-white">
            Explore cultures without the hassle
          </h1>
          <p className="mt-4 max-w-[280px] text-sm leading-relaxed text-spotify-secondary">
            World Tour turns your curiosity into personalized playlists from
            countries, cultures, and sounds you&apos;ll love.
          </p>
        </div>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            finishIntro(router);
          }}
          className="btn-spotify relative z-10 mb-8 w-full rounded-full bg-spotify-green py-3 text-sm font-bold text-black"
        >
          Continue
        </button>
      </div>
    </MobileLayout>
  );
}
