"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import MobileLayout from "@/components/MobileLayout";
import { hasSeenIntro, markIntroSeen } from "@/data/intro";

const IntroWorldMap = dynamic(() => import("@/components/IntroWorldMap"), {
  ssr: false,
});

function IntroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute inset-x-0 top-[6%] h-[56%] w-full">
        <IntroWorldMap />
      </div>

      <div
        className="absolute inset-x-0 bottom-0 h-[55%]"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.45) 45%, rgba(0,0,0,0.88) 100%)",
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
      <MobileLayout activeTab="home" hideChrome>
        <div className="min-h-screen bg-black" />
      </MobileLayout>
    );
  }

  return (
    <MobileLayout activeTab="home" hideChrome>
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
            AI connects you to music from cultures you&apos;re already exploring
          </h1>
          <p className="mt-4 max-w-[280px] text-sm leading-relaxed text-spotify-secondary">
            Your listening already crosses borders — World Tour helps you follow
            where your ear is headed next.
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
