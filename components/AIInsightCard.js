export default function AIInsightCard({ label, children, className = "" }) {
  return (
    <div
      className={`border-l-2 border-l-spotify-green bg-white/[0.04] p-3 ${className}`}
    >
      <p className="flex items-center text-[11px] font-medium tracking-wide text-spotify-green">
        <span className="mr-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-spotify-green" />
        {label}
      </p>
      <p className="mt-1.5 text-[13px] leading-relaxed text-[#B3B3B3]">
        {children}
      </p>
    </div>
  );
}
