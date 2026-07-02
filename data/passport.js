export const PASSPORT_VISITED_KEY = "worldTourPassportVisited";

export function hasVisitedPassport() {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(PASSPORT_VISITED_KEY) === "true";
}

export function markPassportVisited() {
  if (typeof window === "undefined") return;
  localStorage.setItem(PASSPORT_VISITED_KEY, "true");
}
