# World Tour — Spotify Feature Prototype

## What is this?

A portfolio prototype for a PM interview demonstrating "World Tour" — an AI-powered Spotify feature that connects users to music from cultures and regions they're already exploring, based on their listening behavior. This is NOT a real Spotify product. It's a concept prototype built to showcase product thinking and AI application.

## Why this feature needs AI (and why traditional recommendation fails)

Traditional collaborative filtering says "users who liked X also liked Y." It reinforces existing taste.

World Tour needs 4 things collaborative filtering cannot do:

1. **Behavioral anomaly detection** — Spotting when a user's listening pattern shifts (e.g., "you added 3 Afrobeats tracks this week — that's new for you"). Traditional reco treats every listen equally.
2. **Cultural context awareness** — Knowing that Navratri is happening RIGHT NOW in Gujarat, or that Lagos Afrobeats is surging globally THIS MONTH. No user-item matrix has temporal cultural awareness.
3. **Affinity matching** — Connecting a user's latent signals (847 Hindi/Gujarati tracks + Japan-based) to the right cultural moment at the right time. This is multi-signal reasoning, not similarity scoring.
4. **Personalized narrative generation** — Generating "Surfaced for you because..." explanations that make the user feel understood, not surveilled.

The AI story is told THROUGH THE UI — via "why you're seeing this" cards, "found via" attribution tags, behavioral insight copy, and passport stats. No live AI backend needed; the prototype shows what the user experiences when AI works behind the scenes.

---

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: JavaScript (not TypeScript)
- **Deployment**: Vercel
- **Data**: All static mock data, no API calls, no database
- **Target**: Mobile-first (390px width iPhone viewport), but should work on desktop too

---

## Spotify Design System Reference

### Colors
```
Background:        #121212
Surface/Card:      #1A1A1A
Card elevated:     #242424
Card hover:        #2A2A2A
Spotify Green:     #1DB954
Green dark:        #1AA34A
White:             #FFFFFF
Text primary:      #FFFFFF
Text secondary:    #B3B3B3
Text muted:        #6A6A6A
Border:            #333333
```

### Status badge colors
```
LIVE NOW:          #E8593C (coral/red)
RISING:            #1DB954 (green)
TRENDING NOW:      #F0A030 (amber)
COMING UP:         #7B68EE (purple)
```

### Typography
- Font: System font stack (on web: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif). Spotify uses Circular Std but we use system fonts for the prototype.
- Headings: Bold/Heavy weight, white
- Body: Regular weight, #B3B3B3
- Labels/Tags: Bold, uppercase, letter-spacing 0.5-1px, font-size 10-11px
- All text is left-aligned unless in centered card layouts

### Component Patterns
- **Cards**: Background #242424, border-radius 12px, padding 16px
- **Pills/Tags**: Background #333333 or status color, border-radius 4px for status badges, border-radius 20px for genre pills
- **Buttons**: Spotify green (#1DB954), border-radius 24px, bold text, black text color
- **Track rows**: 44x44px album art (rounded 4px) + track name (white) + artist (gray) + optional green tag
- **Now Playing bar**: Fixed bottom, dark background (#2A2A2A), rounded 8px, sits above tab bar
- **Tab bar**: Fixed bottom, 4 items (Home, Search, Your Library, Create), border-top #333333
- **AI insight boxes**: Background #1A2F1A, border 1px #2D4A2D, rounded 10px — the green-tinted cards that show AI reasoning

### Spacing
- Page horizontal padding: 16px
- Between sections: 24-32px
- Between cards: 12-16px
- Card internal padding: 16px

---

## Mock User Profile

```
Name: Jimmy
Total Hindi/Gujarati tracks played: 847
Location: Japan
Top languages: Hindi, Gujarati, Korean, Japanese, Spanish
Countries explored: 6
Languages explored: 5
Musical distance traveled: 14,200 km
Currently playing: "Phir Se Ud Chala" by Mohit Chauhan
```

---

## App Structure (5 screens + navigation)

```
/                     → Home/Search screen (entry point)
/hub                  → World Tour Hub ("What's happening where you've been")
/scene/navratri       → Navratri Nights deep-dive
/scene/lagos          → Lagos on Repeat deep-dive
/passport             → Music Passport
```

All navigation is push-based (left to right transitions). Back button on all screens except Home.

---

## Where AI is visible in the UI (pitch defense points)

These are the specific UI elements that demonstrate AI's role. In the pitch, you say: "Every piece of personalized text you see here is an output of the AI pipeline."

1. **"Surfaced for you because..."** green-tinted cards on scene pages — these explain WHY this scene was matched to this user. A traditional system can't generate these.

2. **"FOUND VIA NAVRATRI NIGHTS"** attribution tags on Passport discoveries — shows the system tracked cross-cultural discovery paths, not just plays.

3. **Behavioral insight copy on hub cards** — e.g., "You've played 847 Hindi/Gujarati tracks this year — Navratri season just lit up the genre you already love." This requires anomaly detection + cultural timing.

4. **Three-bucket track structure** — "From your world" / "Trending right now" / "Hidden gem" — makes AI reasoning visible. The system explains its curation logic through the section structure itself.

5. **Track tags** — "+240% STREAMS THIS WEEK", "ONLY 1K STREAMS — BUT EXACTLY YOUR SOUND", "YOUR MOST-STREAMED GARBA ARTIST" — these are outputs of the matching + context engine.

6. **Passport stats** — "Songs you didn't know you needed", "Artists who just entered your world", "Genres that snuck in" — these aggregate cross-cultural exploration data that only the full pipeline can produce.

---

## Global UI Elements (present on every screen)

### Now Playing Bar
- Fixed at bottom, above tab bar
- Shows: album art placeholder (40x40, rounded 4px) + "Phir Se Ud Chala" / "Mohit Chauhan" + play button
- Background: #2A2A2A, rounded 8px, margin 8px from edges

### Tab Bar
- Fixed at very bottom
- 4 items: Home (house icon), Search (magnifying glass), Your Library (stack icon), Create (plus circle)
- Active tab: white icon + white label
- Inactive: #6A6A6A
- Border-top: 1px #333333
- Background: #121212

---

## Image Handling

Since this is a prototype without real Spotify assets:
- Use colored gradient placeholder divs for album art (e.g., warm orange-red gradient for Navratri, green-yellow for Lagos)
- Use emoji or colored circles for artist avatars
- Hero sections can use gradient overlays on dark backgrounds with emoji as focal points
- The Music Passport hero can use a subtle gradient background

Do NOT use external image URLs or Spotify CDN links. Everything should be self-contained.

---

## Key UX Details

- All screens scroll vertically
- Mobile-first: max-width 430px, centered on desktop with dark side gutters
- Smooth scroll, no horizontal scroll
- Touch targets minimum 44px
- Scene cards on hub are tappable — only Navratri and Lagos navigate to deep-dive screens, others are static cards
- "Play All" buttons are decorative (no audio functionality)
- "Share Your Passport" button is decorative
- Status badges have slight opacity background matching their color

---

## Edge Cases & Constraints

- No authentication, no login
- No real audio playback
- No external API calls
- All data is hardcoded in a single data file
- Works offline after initial load
- Must load fast (no heavy dependencies)
- Should work on Chrome, Safari, Firefox mobile
- No localStorage needed — stateless
- Keep total bundle size small — no heavy animation libraries
