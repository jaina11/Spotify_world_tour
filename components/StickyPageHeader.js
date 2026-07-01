"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function StickyPageHeader({
  title,
  backHref,
  onShare,
  backClassName = "flex h-10 w-10 items-center justify-center text-xl text-white",
  shareClassName = "flex h-10 w-10 items-center justify-center text-xl text-white",
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
      <div className="relative flex items-center justify-between px-4 pb-2 pt-14">
        <Link href={backHref} className={backClassName} aria-label="Back">
          ←
        </Link>
        <h1
          className={`absolute left-1/2 -translate-x-1/2 text-sm font-bold text-white transition-opacity duration-200 ${
            scrolled ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          {title}
        </h1>
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
          <button type="button" className={shareClassName} aria-label="Share">
            ↗
          </button>
        )}
      </div>
    </header>
  );
}
