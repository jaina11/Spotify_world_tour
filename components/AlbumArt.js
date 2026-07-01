export default function AlbumArt({ gradient, size = "md", className = "" }) {
  const sizeClass =
    size === "sm" ? "h-10 w-10" : size === "lg" ? "h-32 w-full" : "h-11 w-11";

  return (
    <div
      className={`relative shrink-0 overflow-hidden rounded-lg border border-white/10 ring-1 ring-white/5 shadow-inner ${sizeClass} ${className}`}
      style={{
        background: gradient,
        boxShadow: "inset 0 1px 1px rgba(255,255,255,0.12), inset 0 -2px 4px rgba(0,0,0,0.3)",
      }}
    />
  );
}
