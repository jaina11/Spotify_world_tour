"use client";

import Link from "next/link";
import MobileLayout from "@/components/MobileLayout";
import SceneCard from "@/components/SceneCard";
import StickyPageHeader from "@/components/StickyPageHeader";
import { ChevronRightIcon, PassportIcon } from "@/components/icons";
import { SCENES } from "@/data/scenes";

function MusicNote({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 3v12.5a3.5 3.5 0 1 1-2-3.16V7l8-3v9.5a3.5 3.5 0 1 1-2-3.16V3h-4z" />
    </svg>
  );
}

export default function HubPage() {
  return (
    <MobileLayout activeTab="home">
      <StickyPageHeader title="World Tour" backHref="/" />

      <div className="relative -mx-4">
        <div
          className="absolute inset-x-0 top-0 h-[200px]"
          style={{
            background:
              "linear-gradient(180deg, #2D4A2D 0%, #1A2F1A 30%, #121212 60%, #121212 100%)",
          }}
        />
        <div className="relative px-4 pt-14">
          <h1 className="text-[26px] font-black leading-tight text-white">
            What&apos;s happening where you&apos;ve been
          </h1>
          <p className="mt-1.5 text-[13px] leading-relaxed text-spotify-secondary">
            Real events, real trends, picked because they match where your music
            has already taken you.
          </p>
        </div>
      </div>

      <div className="px-4">
        <Link href="/passport" className="tap-scale mb-4 mt-3 block">
          <div className="relative overflow-hidden rounded-2xl p-5">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, #1DB954 0%, #7B68EE 50%, #121212 100%)",
              }}
            />
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/5" />
            <div className="absolute -bottom-4 -left-4 h-20 w-20 rounded-full bg-white/5" />
            <MusicNote className="absolute right-6 top-2 h-8 w-8 -rotate-[15deg] text-white opacity-[0.12]" />
            <MusicNote className="absolute bottom-3 left-8 h-5 w-5 rotate-[20deg] text-white opacity-[0.08]" />
            <MusicNote className="absolute right-4 top-1/2 h-10 w-10 -translate-y-1/2 rotate-12 text-white opacity-[0.15]" />
            <MusicNote className="absolute left-1/2 top-4 h-6 w-6 -rotate-6 text-white opacity-[0.1]" />
            <div className="relative flex items-center justify-between gap-3">
              <div className="flex min-w-0 items-center gap-3">
                <PassportIcon className="h-5 w-5 shrink-0 text-white/90" />
                <div className="min-w-0">
                  <p className="text-base font-bold text-white">
                    Your Music Passport
                  </p>
                  <p className="text-xs text-white/70">
                    6 countries · 5 languages · 14.2k km
                  </p>
                </div>
              </div>
              <ChevronRightIcon className="h-5 w-5 shrink-0 text-white" />
            </div>
          </div>
        </Link>

        {SCENES.map((scene) => (
          <SceneCard key={scene.id} scene={scene} />
        ))}
      </div>
    </MobileLayout>
  );
}
