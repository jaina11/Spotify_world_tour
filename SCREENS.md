# Screen Specifications

Reference the Stitch UI screenshots uploaded in the project root for visual reference. This document describes each screen's exact content, layout, and behavior.

---

## Screen 1: Home / Search (`/`)

**Purpose**: Spotify's Search tab — the entry point where users discover World Tour.

**Layout (top to bottom):**

1. **Header row**: "Search" (bold, 22px, white) on left, camera icon on right. Top padding for status bar (56px).

2. **Search bar**: White background, rounded 8px, search icon + placeholder "What do you want to listen to?" — non-functional, decorative.

3. **"Start browsing" section label**: Bold, 16px, white.

4. **Category grid**: 2x2 grid of colored cards:
   - "Music" — #E13300
   - "Podcasts" — #006450
   - "Live Events" — #8400E7
   - "Music Awards Japan" — #1E3264
   Each card: rounded 8px, 56px height, bold white text, padding 12px.

5. **World Tour entry card** (THIS IS THE KEY ELEMENT):
   - Background: #1A2F1A (dark green tint) with border 1px #2D4A2D
   - Rounded 12px, padding 20px
   - Green pill badge at top: "World Tour" (black text on #1DB954)
   - Title: "Your music has been places" (bold, 18px, white)
   - Subtitle: "5 countries, 4 languages — even without you noticing" (#B3B3B3)
   - Chevron-right icon on the right side (green)
   - **Taps to navigate to /hub**

6. **"Explore music videos" section** (optional — decorative filler to make the page feel real):
   - 2 horizontal thumbnail placeholders with gradient backgrounds
   - Labels like "Artist Spotlight Live" / "Studio Sessions"

7. Now Playing bar + Tab bar (Search tab active)

---

## Screen 2: World Tour Hub (`/hub`)

**Purpose**: The main feed — "What's happening where you've been." Scrollable list of cultural scenes matched to the user.

**Layout (top to bottom):**

1. **Header row**: Back arrow (left), settings gear icon (right).

2. **Title block**:
   - Title: "What's happening where you've been" (bold, 28px, white, line-height 34px)
   - Subtitle: "Real events, real trends, picked because they match where your music has already taken you." (#B3B3B3, 13px)

3. **Passport link button**: Small green-tinted pill below subtitle:
   - Earth icon + "View your Music Passport" + chevron-right
   - Background: #1A2F1A, taps to /passport

4. **Scene cards** (scrollable list, one after another):

Each scene card structure:
```
[Status Badge]  ← colored pill: "LIVE NOW" / "RISING" / "TRENDING NOW" / "COMING UP"
Scene Name      ← bold, 18px, white
REGION          ← uppercase, muted, 10px, letter-spacing 1px
Description     ← #B3B3B3, 13px, 2-3 lines

[AI Insight Box] ← ONLY on scenes with surfacedReason (Navratri, Lagos, Tokyo, Seoul)
  ✨ AI-powered insight
  "Surfaced for you because: ..."
```

**Scene cards in order (all content below):**

**Card 1 — Navratri Nights**
- Status: LIVE NOW (#E8593C)
- Region: GUJARAT, INDIA
- Description: "You've played 847 Hindi/Gujarati tracks this year — Navratri season just lit up the genre you already love."
- AI reason: "Surfaced for you because: you've streamed 847 Hindi/Gujarati tracks this year, and Navratri started 2 days ago in Gujarat."
- **Taps to /scene/navratri**

**Card 2 — Lagos on Repeat**
- Status: RISING (#1DB954)
- Region: NIGERIA
- Description: "You added 3 Afrobeats songs without realizing it was a pattern. Lagos is having a moment."
- AI reason: "Surfaced for you because: you added 3 Afrobeats tracks without realizing it was a pattern, and Lagos's street-pop scene is surging globally right now."
- **Taps to /scene/lagos**

**Card 3 — Tokyo After Dark**
- Status: TRENDING NOW (#F0A030)
- Region: JAPAN
- Description: "City pop is surging again, overlapping with the J-pop you streamed in March."
- AI reason: "Surfaced for you because: you're based in Japan and city pop is surging again, overlapping with the J-pop you streamed in March."
- Non-navigable (no deep-dive screen)

**Card 4 — Carnival Countdown**
- Status: COMING UP (#7B68EE)
- Region: BRAZIL
- Description: "Rio's biggest celebration is approaching — a low-effort way to start exploring."
- No AI reason
- Non-navigable

**Card 5 — Seoul Sessions**
- Status: TRENDING NOW (#F0A030)
- Region: SOUTH KOREA
- Description: "Beyond the K-pop you already stream — what's charting in Seoul this week."
- AI reason: "Surfaced for you because: you already stream K-pop regularly, and Seoul's indie scene is breaking out beyond the mainstream charts."
- Non-navigable

**Card 6 — Paris, Still Dancing**
- Status: RISING (#1DB954)
- Region: FRANCE
- Description: "The Olympics hype faded, but the French sound it surfaced didn't."
- No AI reason
- Non-navigable

**Card 7 — Mexico City Mornings**
- Status: TRENDING NOW (#F0A030)
- Region: MEXICO
- Description: "Your Daylist leaned Latin twice this month — this is what's fueling that sound."
- No AI reason
- Non-navigable

**Card 8 — Busan Beats**
- Status: RISING (#1DB954)
- Region: SOUTH KOREA
- Description: "Beyond the K-pop you stream, Busan's underground hip-hop scene just broke out."
- No AI reason
- Non-navigable

**Card 9 — Marathi Mandal**
- Status: LIVE NOW (#E8593C)
- Region: MAHARASHTRA, INDIA
- Description: "While Gujarat dances Garba, Maharashtra's own festival sound is having its moment."
- No AI reason
- Non-navigable

5. Now Playing bar + Tab bar (Home tab active)

---

## Screen 3: Navratri Nights Deep-Dive (`/scene/navratri`)

**Purpose**: A full scene page — like a curated playlist with context. Shows the 3-bucket AI structure.

**Layout (top to bottom):**

1. **Header**: Back arrow (left), share icon (right).

2. **Hero section**:
   - Large emoji: 🪔 (64px)
   - Live indicator: green dot + "Live now · Started 2 days ago" (green, 12px)
   - Title: "Navratri Nights" (36px, heavy weight, white)
   - Description: "Nine nights of Garba and Dandiya — the dhol-driven rhythms behind India's biggest festival season" (#B3B3B3)

3. **AI Insight Card** (green-tinted box):
   - Sparkle icon + "Why you're seeing this" (green, bold, 11px)
   - "Surfaced for you because: you've streamed 847 Hindi/Gujarati tracks this year, and Navratri started 2 days ago in Gujarat." (#B3B3B3, 13px)

4. **Play All button**: Full-width, green, rounded 24px, centered text "▶ Play All"

5. **Section: "From your world"**
   - Subtitle: "Artists you already love, festival-ready"
   - Track list:
     - Mogal Chhedta — Kirtidan Gadhvi — tag: "YOUR MOST-STREAMED GARBA ARTIST"
     - Gori Radha Ne Kado Kaan — Kirtidan Gadhvi — tag: "MATCHES YOUR TOP GENRE"
     - Nagar Mei Jogi — Kirtidan Gadhvi — no tag
     - Pethal Purma — Vinod Rathod — no tag

6. **Section: "Trending right now"**
   - Subtitle: "What's actually playing in Gujarat this week"
   - Track list:
     - Khalasi — Aditya Gadhvi, Achint — tag: "+240% STREAMS THIS WEEK"
     - Nagada Sang Dhol — Shreya Ghoshal, Osman Mir — tag: "TRENDING IN NAGADA WEST REELS"
     - Chogada — Darshan Raval — no tag
     - Dholi Tharo Dhol Baje — Various Artists — no tag

7. **Section: "Hidden gem"**
   - Subtitle: "Lesser-known artists, exactly your sound"
   - Track list:
     - Birdali Bahucharvali — Lalitya Munshaw — tag: "ONLY 1K STREAMS — BUT EXACTLY YOUR SOUND"
     - He Tane Jata Joi — Parthiv Gohil — tag: "A CURATED PICK, FAR LESS SATURATED"
     - Garba Medley — Osman Mir, Aamir Mir, Third Culture C... — no tag
     - Asha Puri Kare Mari Mavadi — Traditional Mandali — no tag

8. Now Playing bar + Tab bar

**Track row component spec:**
- Album art: 44x44px, rounded 4px, gradient placeholder
- Track name: white, 14px, medium weight
- Artist name: #B3B3B3, 13px
- Tag (if present): small green pill (#1DB954 bg, dark text, 9px, bold, uppercase)
- Three-dot menu icon on right: #6A6A6A

---

## Screen 4: Lagos on Repeat Deep-Dive (`/scene/lagos`)

**Purpose**: Second scene page — Afrobeats discovery. Different hero style to show variety.

**Layout (top to bottom):**

1. **Header**: Back arrow + share icon.

2. **Hero section**:
   - Large emoji: 🌍 (64px)
   - Status badge: "RISING · Up 320% this month" (green background)
   - Title: "Lagos on Repeat" (36px, heavy, white)
   - Description: "Afrobeats is having a moment — the street-pop wave coming out of Lagos right now"

3. **AI Insight Card**:
   - "Why you're seeing this"
   - "Surfaced for you because: you added 3 Afrobeats tracks without realizing it was a pattern, and Lagos's street-pop scene is surging globally right now."

4. **Play All button**

5. **Section: "From your world"**
   - Subtitle: "The anthems everyone already knows"
   - Calm Down — Rema — tag: "YOUR MOST-STREAMED AFROBEATS ARTIST"
   - Active — Burna Boy — tag: "MATCHES YOUR TOP GENRE"

6. **Section: "Trending right now"**
   - Subtitle: "What's actually circulating in Lagos this week"
   - Worship — Asake, DJ Snake — tag: "+320% STREAMS THIS MONTH"
   - Jogodo — Wizkid, Asake — tag: "TRENDING VIRAL DANCE/TDS"

7. **Section: "Hidden gem"**
   - Subtitle: "Emerging Lagos artists, ahead of the wave"
   - Fine Ting Fine $hit — FOLA — tag: "BREAKOUT — ALMOST NOBODY'S STREAMING THIS YET" (coral/red tag: #E8593C)
   - Mofe — Mavo — tag: "A CURATED PICK FROM LAGOS'S NEXT WAVE" (coral/red tag)

8. **Extra sections** (Lagos-specific):
   - "Extra:" text listing related tracks: "Sungba (Remix) — Asake, Burna Boy; Why Love — Tems"
   - "Extra:" for hidden gems: "Paparazzi — Shoday; FOLA; Attack — Ayo Maff"

9. Now Playing bar + Tab bar

---

## Screen 5: Music Passport (`/passport`)

**Purpose**: A trophy/achievement page — shows what the user explored through World Tour. Shareable, bragworthy.

**IMPORTANT**: This screen uses the UPDATED design (not the Stitch v1 with stencil fonts). Use Spotify's native design system — clean, modern, system fonts. The personality comes from the copywriting, not decorative fonts.

**Layout (top to bottom):**

1. **Header**: Back arrow (left), "Music Passport" (center, 16px semibold), share icon (right).

2. **Hero card** (centered, surface background #1A1A1A, rounded 16px, padding 24px):
   - "SPOTIFY WORLD TOUR" — white, 14px, heavy, letter-spacing 3px
   - "Jimmy's Passport" — green (#1DB954), 18px, semibold
   - Stats row (3 columns):
     - "6" / "Countries"
     - "5" / "Languages"
     - "14.2k" / "km traveled"
   - Tagline: *"beyond your everyday English"* — muted italic, 13px

3. **Section: "Songs you didn't know you needed"**
   - Subtitle: "Tracks from unfamiliar artists you discovered through World Tour and loved"
   - Two cards side by side (horizontal row, each ~50% width):
     - Card 1: Gradient placeholder art (warm tones) + overlay tag "FOUND VIA NAVRATRI NIGHTS" → "He Tane Jata Joi" / Parthiv Gohil
     - Card 2: Gradient placeholder art (cool tones) + overlay tag "FOUND VIA LAGOS ON REPEAT" → "Calm Down" / Rema

4. **Section: "Artists who just entered your world"**
   - Subtitle: "New-to-you artists you've now engaged with"
   - Horizontal row of 3 circular avatars (72px diameter):
     - NewJeans 🇰🇷
     - Peso Pluma 🇲🇽
     - Miki Matsubara 🇯🇵
   - Each: gradient circle + name below + flag

5. **Section: "Worlds you stepped into"**
   - Subtitle: "Cultural moments you explored through World Tour"
   - Vertical cards:
     - Navratri Nights — Gujarat, India — "6 tracks saved" (green text)
     - Lagos on Repeat — Lagos, Nigeria — "4 tracks saved"
     - Seoul Sessions — Seoul, South Korea — "3 tracks saved"
     - Carnival Countdown — Rio, Brazil — "2 tracks explored"

6. **Section: "Genres that snuck in"**
   - Subtitle: "These weren't in your vocabulary last month"
   - Row of pills: Garba, Afrobeats, City Pop, Bhangra-pop
   - Pill style: #242424 background, rounded 20px, white text, padding 8px 16px

7. **Section: "Your ear speaks more than you think"**
   - Subtitle: "Languages of music you explored"
   - Each row: flag emoji + language name + horizontal bar (green fill on dark track) + percentage
     - Hindi 🇮🇳 — 35%
     - Gujarati 🇮🇳 — 25%
     - Korean 🇰🇷 — 20%
     - Japanese 🇯🇵 — 12%
     - Spanish 🇪🇸 — 8%

8. **Section: "How far your ears traveled"**
   - Subtitle: "Your taste went places"
   - Visual card showing route: India 🇮🇳 → Nigeria 🇳🇬 → South Korea 🇰🇷 → Japan 🇯🇵 → Mexico 🇲🇽 → Brazil 🇧🇷
   - "14,200 km of musical distance" (green, bold)

9. **Share CTA**: Full-width green button "Share Your Passport" with share icon

10. Tab bar (no now playing bar on this screen — or include it, either works)

---

## Prompt Sequence for Building in Cursor

Use these prompts in order. Each one builds on the previous. Always reference CONTEXT.md and the uploaded Stitch screenshots.

### Prompt 1 — Project Setup
```
Read CONTEXT.md fully. Create a Next.js 14 project with App Router and Tailwind CSS. Set up:
- Dark theme (#121212 background) applied globally
- Mobile-first layout with max-width 430px centered on desktop
- Folder structure: app/ for routes, components/ for shared UI, data/ for mock data, lib/ for constants
- Create the Spotify color theme in tailwind.config.js
- Create a shared layout with meta tags, dark background, and system font stack
- Create the NowPlayingBar and TabBar as shared components (specs in CONTEXT.md)
- No TypeScript, JavaScript only
```

### Prompt 2 — Home Screen
```
Read CONTEXT.md and SCREENS.md (Screen 1 section). Build the Home/Search screen at app/page.js. Include:
- Search header with search bar
- 2x2 category grid
- World Tour entry card (green-tinted, navigates to /hub)
- NowPlayingBar and TabBar (Search tab active)
- Reference the first Stitch screenshot for visual layout
```

### Prompt 3 — World Tour Hub
```
Read SCREENS.md (Screen 2 section). Build the Hub screen at app/hub/page.js. Include:
- Title block with subtitle
- Passport link button
- All 9 scene cards with status badges, descriptions, and AI insight boxes
- Only Navratri and Lagos cards should be clickable (navigate to /scene/navratri and /scene/lagos)
- AI insight boxes should have sparkle icon (✨), green tint (#1A2F1A), and the "Surfaced for you because:" text
- Create mock data in data/scenes.js with all 9 scenes
- Reference the second Stitch screenshot
```

### Prompt 4 — Navratri Nights
```
Read SCREENS.md (Screen 3 section). Build the Navratri deep-dive at app/scene/navratri/page.js. Include:
- Hero with emoji, live indicator, title, description
- AI insight card ("Why you're seeing this")
- Play All button
- Three track sections: "From your world", "Trending right now", "Hidden gem" — each with subtitle and track rows
- Track rows: placeholder album art (gradient), track name, artist, optional green tag
- All track data is in SCREENS.md — use it exactly
- Reference the third Stitch screenshot
```

### Prompt 5 — Lagos on Repeat
```
Read SCREENS.md (Screen 4 section). Build the Lagos deep-dive at app/scene/lagos/page.js. Include:
- Same structure as Navratri but with Lagos-specific content
- Hero with 🌍 emoji, RISING status, different description
- AI insight card with Lagos-specific reason
- Three track sections with Lagos track data from SCREENS.md
- Hidden gem tags should be coral/red (#E8593C) instead of green for breakout tracks
- Reference the fourth Stitch screenshot
```

### Prompt 6 — Music Passport
```
Read SCREENS.md (Screen 5 section). Build the Passport at app/passport/page.js. Include:
- Hero card with "SPOTIFY WORLD TOUR" label, user name, stats row, tagline
- "Songs you didn't know you needed" — two discovery cards side by side with "FOUND VIA" overlay tags
- "Artists who just entered your world" — 3 circular avatars with flags
- "Worlds you stepped into" — scene cards with track counts
- "Genres that snuck in" — pill tags
- "Your ear speaks more than you think" — language bars with percentages
- "How far your ears traveled" — route visualization with flags
- "Share Your Passport" green CTA button
- USE SPOTIFY'S NATIVE DESIGN SYSTEM (clean, modern) not stencil/vintage fonts
- Reference the updated passport screenshot, but fix the fonts to be clean/modern
```

### Prompt 7 — Polish & Transitions
```
Review all 5 screens for visual consistency. Fix:
- Ensure all gradient placeholders for album art are visually distinct per track
- Add smooth page transitions (CSS or framer-motion if already installed)
- Verify tab bar highlights correct tab per screen
- Verify all back buttons work
- Test mobile viewport (390px) — ensure nothing overflows
- Add subtle hover states on cards (opacity change on touch)
```

### Prompt 8 — Deploy to Vercel
```
Prepare for Vercel deployment:
- Verify next.config.js has output: 'export' for static export (or keep default for Vercel)
- Run build to check for errors
- Add appropriate meta tags (title: "World Tour — Spotify Feature Prototype", description, og:image)
- Commit and push to GitHub, then deploy via Vercel
```
