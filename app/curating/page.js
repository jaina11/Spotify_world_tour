"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import MobileLayout from "@/components/MobileLayout";
import { USER_PROFILE } from "@/data/scenes";

const STEPS = [
  {
    id: 1,
    delay: 500,
    subDelay: 1500,
    text: "Analyzing your listening history...",
    subdetail: "847 Hindi/Gujarati tracks · J-pop patterns detected · Afrobeats emerging",
    pulseDot: true,
  },
  {
    id: 2,
    delay: 2500,
    text: "Scanning 5 cities for trending sounds...",
    subdetail: "Tokyo · Paris · New York · Singapore · Dubai",
  },
  {
    id: 3,
    delay: 4500,
    text: "Matching your taste to local hits...",
    subdetail: "Cross-referencing BPM, energy, and mood with city trends",
  },
  {
    id: 4,
    delay: 6500,
    text: "Finding hidden gems you'll love...",
    subdetail: "Filtering tracks most listeners haven't discovered yet",
  },
  {
    id: 5,
    delay: 8500,
    text: "Your World Tour playlist is ready.",
    highlight: true,
  },
];

export default function CuratingPage() {
  const router = useRouter();
  const [visibleStepIds, setVisibleStepIds] = useState([]);
  const [visibleSubdetailIds, setVisibleSubdetailIds] = useState([]);
  const [stepsVisible, setStepsVisible] = useState(true);
  const [stepsFadingOut, setStepsFadingOut] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timers = [];

    STEPS.forEach((step) => {
      timers.push(
        setTimeout(() => {
          setVisibleStepIds((current) => [...current, step.id]);
        }, step.delay)
      );

      if (step.subdetail) {
        const subdetailDelay = step.subDelay ?? step.delay;
        timers.push(
          setTimeout(() => {
            setVisibleSubdetailIds((current) => [...current, step.id]);
          }, subdetailDelay)
        );
      }
    });

    timers.push(
      setTimeout(() => {
        setStepsFadingOut(true);
      }, 10000)
    );

    timers.push(
      setTimeout(() => {
        setStepsVisible(false);
        setShowCard(true);
      }, 10500)
    );

    const progressTimer = setTimeout(() => setProgress(100), 50);

    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(progressTimer);
    };
  }, []);

  return (
    <MobileLayout activeTab="home" hideChrome hideNowPlaying>
      <div
        className="relative flex min-h-screen flex-col px-6 pb-8 pt-16"
        style={{
          background:
            "radial-gradient(circle at 50% 40%, #0A2F1A 0%, #121212 60%)",
        }}
      >
        <button
          type="button"
          onClick={() => router.push("/scene/world-tour")}
          className="absolute right-6 top-16 z-10 text-sm text-white/30"
        >
          Skip
        </button>

        <div className="flex flex-1 flex-col justify-center">
          {stepsVisible && (
            <div
              className={`flex flex-col gap-6 ${
                stepsFadingOut ? "animate-fade-out" : ""
              }`}
            >
              {STEPS.filter((step) => visibleStepIds.includes(step.id)).map(
                (step) => (
                  <div key={step.id} className="animate-fade-in-up">
                    <p
                      className={`text-sm ${
                        step.highlight
                          ? "font-bold text-spotify-green"
                          : "text-white/80"
                      }`}
                    >
                      <span
                        className={`mr-2 inline-block h-2 w-2 rounded-full bg-spotify-green ${
                          step.pulseDot ? "animate-pulse" : ""
                        }`}
                      />
                      {step.text}
                    </p>
                    {step.subdetail &&
                      visibleSubdetailIds.includes(step.id) && (
                        <p className="animate-fade-in-up ml-4 mt-1 text-[11px] text-white/30">
                          {step.subdetail}
                        </p>
                      )}
                  </div>
                )
              )}
            </div>
          )}

          {showCard && (
            <div className="animate-scale-in flex flex-col items-center text-center">
              <h2 className="text-xl font-bold text-white">Your World Tour</h2>
              <p className="mt-1 text-xs text-white/50">
                25 tracks · 5 cities · Made for {USER_PROFILE.name}
              </p>
              <button
                type="button"
                onClick={() => router.push("/scene/world-tour")}
                className="btn-spotify mt-6 rounded-full bg-spotify-green px-8 py-3 text-sm font-bold text-black"
              >
                Open Playlist →
              </button>
            </div>
          )}
        </div>

        <div className="fixed inset-x-0 bottom-0 mx-auto h-1 max-w-mobile bg-white/10">
          <div
            className="h-full bg-spotify-green transition-[width] duration-[10000ms] ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </MobileLayout>
  );
}
