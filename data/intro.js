export const INTRO_KEY = "worldTourIntroSeen";

export function hasSeenIntro() {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(INTRO_KEY) === "true";
}

export function markIntroSeen() {
  if (typeof window === "undefined") return;
  localStorage.setItem(INTRO_KEY, "true");
}
