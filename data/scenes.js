export const USER_PROFILE = {
  name: "Jimmy",
  totalTracks: 847,
  countries: 6,
  languages: 5,
  kmTraveled: 14200,
};

export const SCENES = [
  {
    id: "navratri",
    name: "Navratri Nights",
    region: "GUJARAT, INDIA",
    status: "LIVE NOW",
    statusColor: "#E8593C",
    description:
      "You've played 847 Hindi/Gujarati tracks this year — Navratri season just lit up the genre you already love.",
    surfacedReason:
      "You've been deep in Gujarati music for months — and now Navratri just kicked off back home. These are the tracks everyone's dancing to right now, plus a few hidden ones picked just for your taste. Your playlist is about to hit different this season.",
    heroEmoji: "🪔",
    imageUrl: "/images/navratri-hero.jpg",
    heroImageUrl: "/images/navratri-hero.jpg",
    cardTint: "bg-gradient-to-b from-[#3D1100]/30 to-transparent",
    navigable: true,
  },
  {
    id: "lagos",
    name: "Lagos on Repeat",
    region: "NIGERIA",
    status: "RISING",
    statusColor: "#1DB954",
    description:
      "You added 3 Afrobeats songs without realizing it was a pattern. Lagos is having a moment.",
    surfacedReason:
      "You probably didn't notice, but you've been quietly adding Afrobeats to your library all month. Lagos's street-pop scene is exploding right now — and your taste is already leaning in. Here's your front-row seat to what's blowing up before everyone catches on.",
    heroEmoji: "🌍",
    imageUrl:
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400&h=200&fit=crop",
    heroImageUrl:
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&h=400&fit=crop",
    cardTint: "bg-gradient-to-b from-[#1A3D20]/30 to-transparent",
    navigable: true,
  },
  {
    id: "tokyo",
    name: "Tokyo After Dark",
    region: "JAPAN",
    status: "TRENDING NOW",
    statusColor: "#F0A030",
    description:
      "City pop is surging again, overlapping with the J-pop you streamed in March.",
    surfacedReason:
      "You're living in Japan and you've already got J-pop in your rotation — but city pop is having a massive revival right now. Think of it as the sound your J-pop playlist has been building toward without you realizing.",
    heroEmoji: "🌃",
    imageUrl:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=200&fit=crop",
    cardTint: "bg-gradient-to-b from-[#1A1A3D]/30 to-transparent",
    navigable: false,
  },
  {
    id: "carnival",
    name: "Carnival Countdown",
    region: "BRAZIL",
    status: "COMING UP",
    statusColor: "#7B68EE",
    description:
      "Rio's biggest celebration is approaching — a low-effort way to start exploring.",
    surfacedReason: null,
    heroEmoji: "🎭",
    imageUrl:
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&h=200&fit=crop",
    cardTint: "bg-gradient-to-b from-[#3D1A35]/30 to-transparent",
    navigable: false,
  },
  {
    id: "seoul",
    name: "Seoul Sessions",
    region: "SOUTH KOREA",
    status: "TRENDING NOW",
    statusColor: "#F0A030",
    description:
      "Beyond the K-pop you already stream — what's charting in Seoul this week.",
    surfacedReason:
      "You already know mainstream K-pop, but Seoul's underground is having a moment right now. These are the artists and sounds the K-pop you love grew out of — your next obsession might be in here.",
    heroEmoji: "🎤",
    imageUrl:
      "https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=400&h=200&fit=crop",
    cardTint: "bg-gradient-to-b from-[#1A2D3D]/30 to-transparent",
    navigable: false,
  },
  {
    id: "paris",
    name: "Paris, Still Dancing",
    region: "FRANCE",
    status: "RISING",
    statusColor: "#1DB954",
    description:
      "The Olympics hype faded, but the French sound it surfaced didn't.",
    surfacedReason: null,
    heroEmoji: "💃",
    imageUrl:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&h=200&fit=crop",
    cardTint: "bg-gradient-to-b from-[#2D2A1A]/30 to-transparent",
    navigable: false,
  },
  {
    id: "mexico",
    name: "Mexico City Mornings",
    region: "MEXICO",
    status: "TRENDING NOW",
    statusColor: "#F0A030",
    description:
      "Your Daylist leaned Latin twice this month — this is what's fueling that sound.",
    surfacedReason: null,
    heroEmoji: "☀️",
    imageUrl:
      "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=400&h=200&fit=crop",
    cardTint: "bg-gradient-to-b from-[#3D2A1A]/30 to-transparent",
    navigable: false,
  },
  {
    id: "busan",
    name: "Busan Beats",
    region: "SOUTH KOREA",
    status: "RISING",
    statusColor: "#1DB954",
    description:
      "Beyond the K-pop you stream, Busan's underground hip-hop scene just broke out.",
    surfacedReason: null,
    heroEmoji: "🎧",
    imageUrl:
      "https://images.unsplash.com/photo-1548115184-bc6544d06a58?w=400&h=200&fit=crop",
    cardTint: "bg-gradient-to-b from-[#1A3D3D]/30 to-transparent",
    navigable: false,
  },
  {
    id: "marathi",
    name: "Marathi Mandal",
    region: "MAHARASHTRA, INDIA",
    status: "LIVE NOW",
    statusColor: "#E8593C",
    description:
      "While Gujarat dances Garba, Maharashtra's own festival sound is having its moment.",
    surfacedReason: null,
    heroEmoji: "🪘",
    imageUrl:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=200&fit=crop",
    cardTint: "bg-gradient-to-b from-[#3D1A00]/30 to-transparent",
    navigable: false,
  },
];

export const NAVRATRI_TRACKS = {
  fromYourWorld: [
    {
      name: "Mogal Chhedta",
      artist: "Kirtidan Gadhvi",
      tag: "YOUR MOST-STREAMED GARBA ARTIST",
      imageUrl:
        "https://images.unsplash.com/photo-1504680177321-2e6a879aac86?w=100&h=100&fit=crop",
    },
    {
      name: "Gori Radha Ne Kado Kaan",
      artist: "Kirtidan Gadhvi",
      tag: "MATCHES YOUR TOP GENRE",
      imageUrl:
        "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=100&h=100&fit=crop",
    },
    {
      name: "Nagar Mei Jogi",
      artist: "Kirtidan Gadhvi",
      tag: null,
      imageUrl:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=100&h=100&fit=crop",
    },
    {
      name: "Pethal Purma",
      artist: "Vinod Rathod",
      tag: null,
      imageUrl:
        "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=100&h=100&fit=crop",
    },
  ],
  trendingNow: [
    {
      name: "Khalasi",
      artist: "Aditya Gadhvi, Achint",
      tag: "+240% STREAMS THIS WEEK",
      imageUrl:
        "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=100&h=100&fit=crop",
    },
    {
      name: "Nagada Sang Dhol",
      artist: "Shreya Ghoshal, Osman Mir",
      tag: "TRENDING IN NAGADA WEST REELS",
      imageUrl:
        "https://images.unsplash.com/photo-1551887373-6edba6dacbb1?w=100&h=100&fit=crop",
    },
    {
      name: "Chogada",
      artist: "Darshan Raval",
      tag: null,
      imageUrl:
        "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=100&h=100&fit=crop",
    },
    {
      name: "Dholi Tharo Dhol Baje",
      artist: "Various Artists",
      tag: null,
      imageUrl:
        "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=100&h=100&fit=crop",
    },
  ],
  hiddenGems: [
    {
      name: "Birdali Bahucharvali",
      artist: "Lalitya Munshaw",
      tag: "ONLY 1K STREAMS — BUT EXACTLY YOUR SOUND",
      tagVariant: "muted",
      imageUrl:
        "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=100&h=100&fit=crop",
    },
    {
      name: "He Tane Jata Joi",
      artist: "Parthiv Gohil",
      tag: "A CURATED PICK, FAR LESS SATURATED",
      tagVariant: "muted",
      imageUrl:
        "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=100&h=100&fit=crop",
    },
    {
      name: "Garba Medley",
      artist: "Osman Mir, Aamir Mir, Third Culture C...",
      tag: null,
      imageUrl:
        "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=100&h=100&fit=crop",
    },
    {
      name: "Asha Puri Kare Mari Mavadi",
      artist: "Traditional Mandali",
      tag: null,
      imageUrl:
        "https://images.unsplash.com/photo-1508854710579-5cecc3a9ff17?w=100&h=100&fit=crop",
    },
  ],
};

export const LAGOS_TRACKS = {
  fromYourWorld: [
    {
      name: "Calm Down",
      artist: "Rema",
      tag: "YOUR MOST-STREAMED AFROBEATS ARTIST",
      imageUrl:
        "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=100&h=100&fit=crop",
    },
    {
      name: "Active",
      artist: "Burna Boy",
      tag: "MATCHES YOUR TOP GENRE",
      imageUrl:
        "https://images.unsplash.com/photo-1571425046056-cfc17c664e94?w=100&h=100&fit=crop",
    },
  ],
  trendingNow: [
    {
      name: "Worship",
      artist: "Asake, DJ Snake",
      tag: "+320% STREAMS THIS MONTH",
      imageUrl:
        "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=100&h=100&fit=crop",
    },
    {
      name: "Jogodo",
      artist: "Wizkid, Asake",
      tag: "TRENDING VIRAL DANCE/TDS",
      imageUrl:
        "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?w=100&h=100&fit=crop",
    },
  ],
  hiddenGems: [
    {
      name: "Fine Ting Fine $hit",
      artist: "FOLA",
      tag: "BREAKOUT — ALMOST NOBODY'S STREAMING THIS YET",
      tagColor: "#E8593C",
      imageUrl:
        "https://images.unsplash.com/photo-1508854710579-5cecc3a9ff17?w=100&h=100&fit=crop",
    },
    {
      name: "Mofe",
      artist: "Mavo",
      tag: "A CURATED PICK FROM LAGOS'S NEXT WAVE",
      tagColor: "#E8593C",
      imageUrl:
        "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=100&h=100&fit=crop",
    },
  ],
};

export const PASSPORT_DATA = {
  discoveries: [
    {
      track: "He Tane Jata Joi",
      artist: "Parthiv Gohil",
      foundVia: "Navratri Nights",
      imageUrl: "/images/navratri-hero.jpg",
    },
    {
      track: "Calm Down",
      artist: "Rema",
      foundVia: "Lagos on Repeat",
      imageUrl:
        "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=250&fit=crop",
    },
  ],
  newArtists: [
    {
      name: "NewJeans",
      flag: "🇰🇷",
      imageUrl:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Peso Pluma",
      flag: "🇲🇽",
      imageUrl:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Miki Matsubara",
      flag: "🇯🇵",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    },
  ],
  worldsSteppedInto: [
    {
      scene: "Navratri Nights",
      region: "Gujarat, India",
      tracksSaved: 6,
    },
    {
      scene: "Lagos on Repeat",
      region: "Lagos, Nigeria",
      tracksSaved: 4,
    },
    {
      scene: "Seoul Sessions",
      region: "Seoul, South Korea",
      tracksSaved: 3,
    },
    {
      scene: "Carnival Countdown",
      region: "Rio, Brazil",
      tracksExplored: 2,
    },
  ],
  genresSnuckIn: ["Garba", "Afrobeats", "City Pop", "Bhangra-pop"],
  languageBreakdown: [
    { lang: "Hindi", flag: "🇮🇳", pct: 35 },
    { lang: "Gujarati", flag: "🇮🇳", pct: 25 },
    { lang: "Korean", flag: "🇰🇷", pct: 20 },
    { lang: "Japanese", flag: "🇯🇵", pct: 12 },
    { lang: "Spanish", flag: "🇪🇸", pct: 8 },
  ],
};
