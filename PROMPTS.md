# Cursor Prompts — World Tour Prototype

Execute these prompts one by one in Cursor. After each prompt, test in browser before moving to the next.

**How to use:** Copy-paste each prompt into Cursor's chat. Always start by tagging the context files: @CONTEXT.md @SCREENS.md

---

## PROMPT 1 — Project Setup

```
@CONTEXT.md

Read CONTEXT.md fully before doing anything.

Create a Next.js 14 project with App Router and Tailwind CSS in this directory. JavaScript only, no TypeScript.

Setup requirements:
1. Dark theme (#121212 background) applied globally via globals.css
2. Mobile-first layout wrapper: max-width 430px, centered on desktop with #000000 side gutters. Every page should be wrapped in this.
3. System font stack: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif
4. Extend tailwind.config.js with the Spotify color palette from CONTEXT.md (spotify-green, spotify-bg, spotify-surface, spotify-card, etc.)
5. Folder structure:
   - app/ (routes)
   - components/ (shared UI: NowPlayingBar, TabBar, TrackRow, SceneCard, StatusBadge)
   - data/ (mock data)
6. Create the NowPlayingBar component — fixed at bottom above tab bar, showing "Phir Se Ud Chala" by Mohit Chauhan, dark card style (#2A2A2A), with play button
7. Create the TabBar component — fixed at very bottom, 4 items (Home, Search, Your Library, Create), accepts activeTab prop to highlight current tab in white vs #6A6A6A
8. Create a MobileLayout wrapper component that applies the max-width 430px centering + includes NowPlayingBar + TabBar
9. Create app/layout.js with dark background, meta tags, and the font stack
10. Create a blank app/page.js that just renders "World Tour" text inside MobileLayout to verify setup works

Use simple SVG icons or unicode characters for icons (🏠 🔍 📚 ➕ ▶ ← → ⚙ ↗ ⋮ ✨) — do NOT install any icon library.

Run the dev server and verify: dark background, centered mobile frame, now playing bar, tab bar all visible.
```

---

## PROMPT 2 — Home / Search Screen

```
@CONTEXT.md @SCREENS.md

Read the "Screen 1: Home / Search" section in SCREENS.md.

Build the Home screen at app/page.js. This is Spotify's Search tab — the entry point where users discover World Tour.

Layout (top to bottom):
1. Header: "Search" (bold, 22px, white) left, camera icon (📷) right. 56px top padding.
2. Search bar: white background (#FFFFFF), rounded-lg, search icon (🔍) + gray placeholder text "What do you want to listen to?" — not functional
3. "Start browsing" label (bold, 16px, white)
4. 2x2 category grid:
   - "Music" #E13300
   - "Podcasts" #006450
   - "Live Events" #8400E7
   - "Music Awards Japan" #1E3264
   Each: rounded-lg, h-14, bold white text, p-3
5. World Tour entry card — THIS IS THE MOST IMPORTANT ELEMENT:
   - bg-[#1A2F1A] border border-[#2D4A2D] rounded-xl p-5
   - Small green pill badge: "World Tour" (bg-spotify-green, black text, text-xs, font-bold, rounded-full, px-3 py-1)
   - Title: "Your music has been places" (bold, text-lg, white)
   - Sub: "5 countries, 4 languages — even without you noticing" (text-spotify-secondary, text-sm)
   - Right chevron (→) in green
   - Wraps in <Link href="/hub">
6. Spacer at bottom (h-32) for now playing bar + tab bar

Use MobileLayout with TabBar activeTab="search". Reference the first screenshot in stitch-reference-all-screens.png for visual layout.
```

---

## PROMPT 3 — Mock Data File

```
@SCREENS.md

Create data/scenes.js with ALL the mock data needed for the app. Export these:

1. USER_PROFILE object — name: "Jimmy", totalTracks: 847, countries: 6, languages: 5, kmTraveled: 14200

2. SCENES array — all 9 scenes with these fields per scene: id, name, region, status, statusColor, description, surfacedReason (null if none), heroEmoji, navigable (boolean — only "navratri" and "lagos" are true)

3. NAVRATRI_TRACKS object with three arrays: fromYourWorld, trendingNow, hiddenGems — each track has: name, artist, tag (string or null). Copy exact track names and tags from SCREENS.md Screen 3.

4. LAGOS_TRACKS object with same three arrays. Copy from SCREENS.md Screen 4. Note: hidden gem tags for Lagos use coral color (#E8593C) not green — add a tagColor field for those.

5. PASSPORT_DATA object with: discoveries (track, artist, foundVia), newArtists (name, flag emoji), worldsSteppedInto (scene, region, tracksSaved or tracksExplored), genresSnuckIn (array of strings), languageBreakdown (lang, flag, pct)

Copy ALL content exactly from SCREENS.md — every track name, every tag, every description. Don't abbreviate or skip anything.
```

---

## PROMPT 4 — World Tour Hub

```
@CONTEXT.md @SCREENS.md

Read "Screen 2: World Tour Hub" in SCREENS.md.

Build the Hub screen at app/hub/page.js. Import scenes from data/scenes.js.

Layout:
1. Header: back arrow (←) links to /, settings icon (⚙) on right
2. Title: "What's happening where you've been" — text-[28px] font-extrabold white leading-tight
3. Subtitle: "Real events, real trends, picked because they match where your music has already taken you." — text-spotify-secondary text-[13px]
4. Passport link: small green-tinted button below subtitle — 🌍 + "View your Music Passport" + → — bg-[#1A2F1A] rounded-lg — links to /passport
5. Scene cards: map over SCENES array, render each as a card:
   - Status badge (colored pill with scene.status text)
   - Scene name (bold, text-lg, white)
   - Region (uppercase, text-[10px], text-spotify-muted, tracking-wider)
   - Description (text-spotify-secondary, text-[13px])
   - If scene.surfacedReason exists: render green AI insight box with ✨ icon + "AI-powered insight" label + reason text
   - If scene.navigable: wrap in <Link> to /scene/{scene.id}
   - Card style: bg-spotify-card rounded-xl p-4 mb-4

Create a reusable SceneCard component in components/SceneCard.js.

Use MobileLayout with TabBar activeTab="home".
```

---

## PROMPT 5 — Navratri Nights Deep-Dive

```
@CONTEXT.md @SCREENS.md

Read "Screen 3: Navratri Nights Deep-Dive" in SCREENS.md.

Build at app/scene/navratri/page.js. Import NAVRATRI_TRACKS from data/scenes.js and get the navratri scene object for its metadata.

Layout:
1. Header: ← back to /hub, share icon (↗) right
2. Hero: 🪔 emoji (text-6xl) + green live dot + "Live now · Started 2 days ago" + "Navratri Nights" (text-4xl font-extrabold) + description
3. AI insight card: bg-[#1A2F1A] border-[#2D4A2D] rounded-xl p-4 — ✨ "Why you're seeing this" (green, bold, text-xs) + reason text
4. Play All button: bg-spotify-green rounded-full py-3 w-full text-center — "▶ Play All" (black text, bold)
5. Three sections, each with:
   - Section title (bold, text-lg, white)
   - Subtitle (text-spotify-muted, text-xs)
   - Track rows using a reusable TrackRow component

TrackRow component (components/TrackRow.js):
- Left: 44x44 rounded album art placeholder (use CSS gradients — warm colors for Navratri tracks)
- Middle: track name (white, text-sm, font-medium) + artist (#B3B3B3, text-xs)
- If tag: small pill below artist — bg-spotify-green text-black text-[9px] font-bold uppercase px-1.5 py-0.5 rounded
- Right: three-dot menu (⋮) in #6A6A6A

Sections:
- "From your world" / "Artists you already love, festival-ready" → fromYourWorld tracks
- "Trending right now" / "What's actually playing in Gujarat this week" → trendingNow tracks
- "Hidden gem" / "Lesser-known artists, exactly your sound" → hiddenGems tracks

Use MobileLayout but no specific tab highlighted (or keep Home).
```

---

## PROMPT 6 — Lagos on Repeat Deep-Dive

```
@CONTEXT.md @SCREENS.md

Read "Screen 4: Lagos on Repeat Deep-Dive" in SCREENS.md.

Build at app/scene/lagos/page.js. Same structure as Navratri but with Lagos content. Import LAGOS_TRACKS from data/scenes.js.

Key differences from Navratri:
- Emoji: 🌍 instead of 🪔
- Status badge: "RISING · Up 320% this month" (green bg) instead of live dot
- Title: "Lagos on Repeat"
- Different AI reason text (from data)
- Different tracks (from LAGOS_TRACKS)
- Hidden gem tags use CORAL color (#E8593C) background instead of green — check track.tagColor field, default to spotify-green if not set
- Add "Extra:" text blocks after trendingNow and hiddenGems sections showing related tracks:
  - After trending: "Extra: Sungba (Remix) — Asake, Burna Boy; Why Love — Tems"
  - After hidden gems: "Extra: Paparazzi — Shoday; FOLA; Attack — Ayo Maff"
  These are just gray text lines, not track rows.

Reuse the TrackRow component from Prompt 5. Use cool-toned gradients (greens, teals) for album art placeholders instead of warm tones.
```

---

## PROMPT 7 — Music Passport

```
@CONTEXT.md @SCREENS.md

Read "Screen 5: Music Passport" in SCREENS.md carefully — this is the most complex screen.

Build at app/passport/page.js. Import USER_PROFILE and PASSPORT_DATA from data/scenes.js.

IMPORTANT: Use clean, modern Spotify design. NO stencil fonts, no vintage textures. The personality comes from the copywriting headings, not from decorative styling.

Layout (6 sections):

1. Hero card (bg-spotify-surface rounded-2xl p-6 text-center mx-4):
   - "SPOTIFY WORLD TOUR" — white, text-sm, font-extrabold, tracking-[3px]
   - "Jimmy's Passport" — text-spotify-green, text-lg, font-semibold
   - Stats: 3 columns → "6 Countries" / "5 Languages" / "14.2k km traveled" (big number white, label muted)
   - Tagline: "beyond your everyday English" — italic, text-spotify-muted, text-sm

2. "Songs you didn't know you needed" section:
   - Subtitle: "Tracks from unfamiliar artists you discovered through World Tour and loved"
   - Two side-by-side cards (flex row, gap-3):
     - Each: gradient background placeholder (h-24 rounded-lg) + overlay tag "FOUND VIA ___" (bg-black/70 text-white text-[8px] absolute bottom of art) + track name + artist below
   - Data: "He Tane Jata Joi" / Parthiv Gohil / Navratri Nights AND "Calm Down" / Rema / Lagos on Repeat

3. "Artists who just entered your world":
   - Sub: "New-to-you artists you've now engaged with"
   - 3 circles (w-[72px] h-[72px] rounded-full) with gradient fills + name + flag below
   - NewJeans 🇰🇷, Peso Pluma 🇲🇽, Miki Matsubara 🇯🇵

4. "Worlds you stepped into":
   - Sub: "Cultural moments you explored through World Tour"
   - Cards: bg-spotify-card rounded-xl p-4 — scene name (bold white) + region (muted) on left, "X tracks saved" (green text) on right

5. "Genres that snuck in":
   - Sub: "These weren't in your vocabulary last month"
   - Flex-wrap pills: bg-spotify-card rounded-full px-4 py-2 — Garba, Afrobeats, City Pop, Bhangra-pop

6. "Your ear speaks more than you think":
   - Sub: "Languages of music you explored"
   - Rows: flag + language name (w-16) + progress bar (green fill on #242424 track, h-1.5 rounded) + percentage
   - Hindi 35%, Gujarati 25%, Korean 20%, Japanese 12%, Spanish 8%

7. "How far your ears traveled":
   - Sub: "Your taste went places"
   - Card with route text: 🇮🇳 → 🇳🇬 → 🇰🇷 → 🇯🇵 → 🇲🇽 → 🇧🇷 + "14,200 km of musical distance" (green bold)

8. Share button: bg-spotify-green rounded-full py-3 w-full — "Share Your Passport"

Header: ← back to /hub, "Music Passport" center, share icon right.
```

---

## PROMPT 8 — Polish & Deploy

```
@CONTEXT.md

Review ALL 5 screens for consistency and polish. Fix these specific things:

1. GRADIENT PLACEHOLDERS: Make sure each track's album art placeholder has a slightly different gradient so they don't all look identical. Use warm tones (orange/red/gold) for Navratri tracks, cool tones (green/teal/blue) for Lagos tracks, and mixed for Passport.

2. TRANSITIONS: Add smooth page transitions — when navigating between screens, content should fade in slightly (opacity 0→1, 200ms ease). Use CSS animations, no external libraries.

3. TAB BAR: Verify the correct tab is highlighted on each screen:
   - Home screen: Search tab active
   - Hub: Home tab active
   - Scene pages: no tab active (or Home)
   - Passport: no tab active (or Home)

4. BACK NAVIGATION: All back arrows should work correctly:
   - Hub → Home
   - Navratri → Hub
   - Lagos → Hub
   - Passport → Hub

5. MOBILE CHECK: Open Chrome DevTools, set to iPhone 14 Pro (390px). Verify:
   - Nothing overflows horizontally
   - All text is readable
   - Touch targets are at least 44px
   - Scroll works smoothly
   - Now Playing bar doesn't overlap content

6. META TAGS in layout.js:
   - title: "World Tour — Spotify Feature Prototype"
   - description: "AI-powered music discovery that connects you to cultures through your listening behavior"

7. Run `npm run build` and fix any errors.

8. Once clean: initialize git, commit, push to GitHub, and deploy on Vercel.
```

---

## Troubleshooting Tips

If Cursor struggles with a prompt:
- Break it into smaller pieces (e.g., "just build the hero section of the Navratri page")
- If it creates TypeScript files, say "convert to JavaScript, no TypeScript"
- If it installs icon libraries, say "remove the icon library, use unicode emoji instead"
- If the layout breaks on mobile, say "fix: the content overflows on 390px viewport, add overflow-hidden and check all widths"
- If colors look wrong, say "reference the exact hex codes in CONTEXT.md under Spotify Design System"
- If it doesn't read the context files, copy-paste the relevant section directly into the prompt

## After Deployment

Share the Vercel URL with your prototype. In your pitch deck:
- Prototype link = "here's what the user experiences"
- Architecture diagram (the PPTX we built) = "here's the AI system making it possible"
- The green "Why you're seeing this" cards in the prototype are your proof that this isn't just editorial curation — it requires the full AI pipeline.
