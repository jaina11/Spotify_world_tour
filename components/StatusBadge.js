export default function StatusBadge({ children, color }) {
  return (
    <span
      className="inline-block rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white"
      style={{ backgroundColor: color }}
    >
      {children}
    </span>
  );
}
