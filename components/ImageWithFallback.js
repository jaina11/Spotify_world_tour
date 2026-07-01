"use client";

import { useState } from "react";

export default function ImageWithFallback({
  src,
  alt,
  className = "",
  fallbackGradient,
  fallbackClassName = "",
}) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div
        className={`border border-white/10 ring-1 ring-white/5 ${fallbackClassName || className}`}
        style={{
          background: fallbackGradient,
          boxShadow:
            "inset 0 1px 1px rgba(255,255,255,0.12), inset 0 -2px 4px rgba(0,0,0,0.3)",
        }}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
