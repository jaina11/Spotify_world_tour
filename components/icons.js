const iconClass = "h-5 w-5";

export function HomeIcon({ active = false }) {
  if (active) {
    return (
      <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3l9 7.5v10.5a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V10.5L12 3z" />
      </svg>
    );
  }
  return (
    <svg
      className={iconClass}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5z" />
    </svg>
  );
}

export function SearchIcon({ active = false }) {
  if (active) {
    return (
      <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor">
        <path d="M10.5 3a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15zm0 2a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11zm8.1 13.4 3.4 3.4-1.4 1.4-3.4-3.4 1.4-1.4z" />
      </svg>
    );
  }
  return (
    <svg
      className={iconClass}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}

export function LibraryIcon({ active = false }) {
  if (active) {
    return (
      <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 5h4v14H4V5zm6 0h4v14h-4V5zm6 0h4v14h-4V5z" />
      </svg>
    );
  }
  return (
    <svg
      className={iconClass}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M5 5h3v14H5V5zm5.5 0H14v14h-3.5V5zM16 5h3v14h-3V5z" />
    </svg>
  );
}

export function PlusIcon({ active = false }) {
  return (
    <svg
      className={iconClass}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={active ? 2.5 : 2}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8v8M8 12h8" />
    </svg>
  );
}

const ICON_MAP = {
  home: HomeIcon,
  search: SearchIcon,
  library: LibraryIcon,
  create: PlusIcon,
};

export function TabIcon({ id, active }) {
  const Icon = ICON_MAP[id];
  return Icon ? <Icon active={active} /> : null;
}

export function ChevronRightIcon({ className = "h-5 w-5" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 6 6 6-6 6" />
    </svg>
  );
}

export function PassportIcon({ className = "h-5 w-5" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <rect x="3" y="2" width="14" height="16" rx="2" />
      <path d="M6 7h8M6 10h8M6 13h5" />
    </svg>
  );
}
