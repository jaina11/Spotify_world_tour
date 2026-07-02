"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const ICON_SLOT = "flex h-10 w-10 shrink-0 items-center justify-center";

/** Shared by StickyPageHeader + page headline grids (symmetric — no header passport) */
export const HEADER_GRID_COLS =
  "grid grid-cols-[2.5rem_1fr_2.5rem] items-center gap-x-2";

export default function StickyPageHeader({
  title,
  backHref,
  onShare,
  backClassName = `${ICON_SLOT} text-xl text-white`,
  shareClassName = `${ICON_SLOT} text-xl text-white`,
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 mx-auto max-w-mobile transition-all duration-200 ${
        scrolled ? "bg-[#121212]/95 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className={`${HEADER_GRID_COLS} px-4 pb-2 pt-14`}>
        <div className="w-10 shrink-0 justify-self-start">
          <Link href={backHref} className={backClassName} aria-label="Back">
            ←
          </Link>
        </div>

        <h1
          className={`min-w-0 justify-self-center truncate px-1 text-center text-sm font-bold leading-snug text-white transition-opacity duration-200 ${
            scrolled ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          {title}
        </h1>

        <div className="flex w-10 shrink-0 justify-end justify-self-end">
          {onShare ? (
            <button
              type="button"
              onClick={onShare}
              className={shareClassName}
              aria-label="Share"
            >
              ↗
            </button>
          ) : (
            <div className="h-10 w-10" aria-hidden="true" />
          )}
        </div>
      </div>
    </header>
  );
}
