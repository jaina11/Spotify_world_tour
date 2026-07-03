"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import MobileLayout from "@/components/MobileLayout";
import StickyPageHeader from "@/components/StickyPageHeader";
import { ChevronRightIcon } from "@/components/icons";
import { hasSeenIntro } from "@/data/intro";

const WORLD_TOUR_PILLS = ["Updated monthly", "Local hits", "Hidden gems"];
const FESTIVAL_PILLS = ["Monthly picks", "Cultural sounds", "Trending now"];

const MAP_PINS = [
  { x: 278, y: 98, label: "India" },
  { x: 318, y: 78, label: "Korea" },
  { x: 332, y: 72, label: "Japan" },
  { x: 192, y: 108, label: "Nigeria" },
  { x: 128, y: 132, label: "Brazil" },
];

function CardArrowButton({ color }) {
  return (
    <div
      className="pointer-events-none absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full"
      style={{ backgroundColor: color }}
      aria-hidden="true"
    >
      <ChevronRightIcon className="h-5 w-5 text-white" />
    </div>
  );
}

function LabelPills({ labels }) {
  return (
    <div className="mt-auto flex flex-wrap gap-3 pt-4">
      {labels.map((label) => (
        <span
          key={label}
          className="rounded-full bg-white/[0.06] px-2 py-1 text-[9px] text-white/40"
        >
          {label}
        </span>
      ))}
    </div>
  );
}

function WorldTourCardBackground() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 400 192"
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <path
        d="M28 35Q18 70 22 110Q28 155 48 168Q72 178 88 155Q98 125 92 85Q82 48 58 32Q42 24 28 35Z"
        stroke="white"
        strokeWidth="0.75"
        opacity="0.06"
      />
      <path
        d="M155 42Q148 65 152 95Q158 130 168 165Q178 185 192 175Q205 155 200 120Q195 80 188 55Q180 38 165 42Z"
        stroke="white"
        strokeWidth="0.75"
        opacity="0.06"
      />
      <path
        d="M210 38Q245 32 285 40Q325 48 355 55Q375 62 382 75Q388 90 378 105Q360 115 330 108Q295 98 265 88Q235 78 215 65Q200 52 210 38Z"
        stroke="white"
        strokeWidth="0.75"
        opacity="0.06"
      />
      <path
        d="M248 145Q275 138 305 142Q330 148 342 158Q348 168 335 175Q318 180 295 175Q268 168 252 158Q242 150 248 145Z"
        stroke="white"
        strokeWidth="0.75"
        opacity="0.06"
      />

      {MAP_PINS.map((pin) => (
        <circle
          key={pin.label}
          cx={pin.x}
          cy={pin.y}
          r="4"
          fill="#7B68EE"
          opacity="0.4"
        />
      ))}

      <path
        d="M278 98 Q298 88 318 78 T332 72"
        stroke="#7B68EE"
        strokeWidth="1"
        opacity="0.2"
        strokeDasharray="3 3"
      />
      <path
        d="M332 72 Q262 90 192 108"
        stroke="#7B68EE"
        strokeWidth="1"
        opacity="0.2"
        strokeDasharray="3 3"
      />
      <path
        d="M192 108 Q160 120 128 132"
        stroke="#7B68EE"
        strokeWidth="1"
        opacity="0.2"
        strokeDasharray="3 3"
      />
      <path
        d="M128 132 Q200 115 278 98"
        stroke="#7B68EE"
        strokeWidth="1"
        opacity="0.2"
        strokeDasharray="3 3"
      />
    </svg>
  );
}

function FestivalCardBackground() {
  const confetti = [
    { cx: 42, cy: 28, r: 3, o: 0.06 },
    { cx: 88, cy: 52, r: 2, o: 0.04 },
    { cx: 156, cy: 36, r: 5, o: 0.08 },
    { cx: 210, cy: 64, r: 2.5, o: 0.05 },
    { cx: 268, cy: 42, r: 4, o: 0.07 },
    { cx: 320, cy: 58, r: 2, o: 0.03 },
    { cx: 360, cy: 34, r: 6, o: 0.08 },
    { cx: 118, cy: 118, r: 3, o: 0.05 },
    { cx: 298, cy: 132, r: 2, o: 0.04 },
    { cx: 196, cy: 148, r: 4, o: 0.06 },
  ];

  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 400 192"
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      {confetti.map((dot, index) => (
        <circle
          key={index}
          cx={dot.cx}
          cy={dot.cy}
          r={dot.r}
          fill="white"
          opacity={dot.o}
        />
      ))}

      <path
        d="M0 72 Q50 62 100 72 T200 72 T300 72 T400 72"
        stroke="white"
        strokeWidth="1"
        opacity="0.05"
      />
      <path
        d="M0 108 Q60 98 120 108 T240 108 T360 108 T400 108"
        stroke="white"
        strokeWidth="1"
        opacity="0.05"
      />
      <path
        d="M0 142 Q70 132 140 142 T280 142 T400 142"
        stroke="white"
        strokeWidth="1"
        opacity="0.05"
      />

      <path d="M72 46 l4 8 l-8 0 l4 -8 z" fill="white" opacity="0.08" />
      <path d="M248 124 l3 6 l-6 0 l3 -6 z" fill="white" opacity="0.08" />
      <path d="M334 88 l3.5 7 l-7 0 l3.5 -7 z" fill="white" opacity="0.08" />
    </svg>
  );
}

export default function HubPage() {
  const router = useRouter();
  const [canShow, setCanShow] = useState(false);

  useEffect(() => {
    if (!hasSeenIntro()) {
      router.replace("/intro");
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
    <MobileLayout activeTab="home" hideNowPlaying>
      <StickyPageHeader title="World Tour" backHref="/" />

      <div className="px-4 pb-24 pt-14">
        <h1 className="text-[22px] font-black leading-tight text-white">
          Your Monthly World Tour
        </h1>

        <div className="mt-5 space-y-4">
          <Link
            href="/globe"
            className="tap-scale relative block h-48 overflow-hidden rounded-xl p-4 ring-1 ring-white/10"
            style={{
              background:
                "linear-gradient(135deg, #0D1B3E 0%, #1A0A3E 40%, #0A1A2F 100%)",
            }}
          >
            <WorldTourCardBackground />
            <CardArrowButton color="#7B68EE" />

            <div className="pointer-events-none relative z-10 flex h-full max-w-[80%] flex-col pr-12">
              <h2 className="text-xl font-bold text-white">
                Your Monthly World Tour
              </h2>
              <p className="mt-2 text-sm text-white/60">
                Every month, pick 5 countries and discover a playlist shaped by
                your taste and local trends.
              </p>
              <LabelPills labels={WORLD_TOUR_PILLS} />
            </div>
          </Link>

          <Link
            href="/festivals"
            className="tap-scale relative block h-48 overflow-hidden rounded-xl p-4 ring-1 ring-white/10"
            style={{
              background:
                "linear-gradient(135deg, #1A3D20 0%, #3D2A0A 50%, #3D1A2A 100%)",
            }}
          >
            <FestivalCardBackground />
            <CardArrowButton color="#E8593C" />

            <div className="pointer-events-none relative z-10 flex h-full max-w-[80%] flex-col pr-12">
              <h2 className="text-xl font-bold text-white">Trending Festivals</h2>
              <p className="mt-2 text-sm text-white/60">
                Explore this month&apos;s global festivals through music, culture,
                and trending sounds.
              </p>
              <LabelPills labels={FESTIVAL_PILLS} />
            </div>
          </Link>
        </div>
      </div>
    </MobileLayout>
  );
}
