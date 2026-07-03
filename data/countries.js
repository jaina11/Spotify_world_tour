import { getPassportExploredCountryIds } from "@/data/scenes";

export const COUNTRY_GRID = [
  {
    id: "nigeria",
    name: "Nigeria",
    flag: "🇳🇬",
    vibe: "Afrobeat capital",
    tasteMatch: "You've been quietly adding Afrobeats all month",
    gradient: "linear-gradient(135deg, #1A3D20 0%, #E8593C55 45%, #121212 100%)",
    imageUrl:
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400&h=240&fit=crop",
  },
  {
    id: "china",
    name: "China",
    flag: "🇨🇳",
    vibe: "Mandarin indie & C-pop",
    tasteMatch: "Crosses your electronic and Mandarin pop curiosity",
    gradient: "linear-gradient(135deg, #3D0A0A 0%, #E8593C44 50%, #121212 100%)",
    imageUrl:
      "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=400&h=240&fit=crop",
  },
  {
    id: "nepal",
    name: "Nepal",
    flag: "🇳🇵",
    vibe: "Himalayan folk-fusion",
    tasteMatch: "Folk-acoustic streak meets Himalayan indie",
    gradient: "linear-gradient(135deg, #1A2F3D 0%, #6366F144 50%, #121212 100%)",
    imageUrl:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=240&fit=crop",
  },
  {
    id: "greece",
    name: "Greece",
    flag: "🇬🇷",
    vibe: "Laiko-pop & Mediterranean soul",
    tasteMatch: "Mediterranean warmth matches your summer playlists",
    gradient: "linear-gradient(135deg, #1A2F4A 0%, #F0A03044 50%, #121212 100%)",
    imageUrl:
      "https://images.unsplash.com/photo-1721043294920-a35f004894e9?w=400&h=240&fit=crop",
  },
  {
    id: "australia",
    name: "Australia",
    flag: "🇦🇺",
    vibe: "Indie-electronic coast",
    tasteMatch: "Matches your indie-electronic streak",
    gradient: "linear-gradient(135deg, #1A2F3D 0%, #F0A03044 50%, #121212 100%)",
    imageUrl:
      "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=400&h=240&fit=crop",
  },
  {
    id: "india",
    name: "India",
    flag: "🇮🇳",
    vibe: "Festival season pulse",
    tasteMatch: "847 Hindi/Gujarati tracks — festival season is live",
    gradient: "linear-gradient(135deg, #3D1100 0%, #E8593C55 50%, #121212 100%)",
    imageUrl: "/images/navratri-hero.jpg",
  },
  {
    id: "mexico",
    name: "Mexico",
    flag: "🇲🇽",
    vibe: "Regional Mexican wave",
    tasteMatch: "Your Daylist leaned Latin twice this month",
    gradient: "linear-gradient(135deg, #3D2A1A 0%, #E8593C44 50%, #121212 100%)",
    imageUrl:
      "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=400&h=240&fit=crop",
  },
  {
    id: "uk",
    name: "United Kingdom",
    flag: "🇬🇧",
    vibe: "Alt-pop underground",
    tasteMatch: "Alt-pop matches your late-night playlist energy",
    gradient: "linear-gradient(135deg, #1A1A2F 0%, #6366F155 50%, #121212 100%)",
    imageUrl:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=240&fit=crop",
  },
];

export function getExploreCountries() {
  const explored = getPassportExploredCountryIds();
  return COUNTRY_GRID.filter((country) => !explored.includes(country.id));
}

const NIGERIA_SECTIONS = [
  {
    title: "Picked for you",
    subtitle: "Afrobeats anthems already in your rotation",
    tracks: [
      {
        name: "Calm Down",
        artist: "Rema",
        whyThis: "Your most-played Afrobeats track this month",
        tag: "YOUR MOST-STREAMED AFROBEATS ARTIST",
        imageUrl:
          "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=100&h=100&fit=crop",
      },
      {
        name: "Active",
        artist: "Burna Boy",
        whyThis: "Matches your late-night playlist energy",
        tag: "MATCHES YOUR TOP GENRE",
        imageUrl:
          "https://images.unsplash.com/photo-1571425046056-cfc17c664e94?w=100&h=100&fit=crop",
      },
      {
        name: "Essence",
        artist: "Wizkid ft. Tems",
        whyThis: "Saved by listeners with your taste profile",
        imageUrl:
          "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=100&h=100&fit=crop",
      },
    ],
  },
  {
    title: "Trending right now",
    subtitle: "What's actually circulating in Lagos this week",
    tracks: [
      {
        name: "Water",
        artist: "Tyla",
        whyThis: "Trending in Lagos and your Afro lane",
        tag: "+320% STREAMS THIS MONTH",
        imageUrl:
          "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=100&h=100&fit=crop",
      },
      {
        name: "Lonely At The Top",
        artist: "Asake",
        whyThis: "Viral on Lagos dance floors right now",
        tag: "TRENDING VIRAL DANCE/TDS",
        imageUrl:
          "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=100&h=100&fit=crop",
      },
      {
        name: "Soweto",
        artist: "Victony, Tempoe",
        whyThis: "Breaking out across West African reels",
        imageUrl:
          "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=100&h=100&fit=crop",
      },
    ],
  },
  {
    title: "Hidden gem",
    subtitle: "Emerging Lagos artists, ahead of the wave",
    tracks: [
      {
        name: "Paparazzi",
        artist: "Shoday",
        whyThis: "Under 50K streams, strong taste match",
        tag: "BREAKOUT — ALMOST NOBODY'S STREAMING THIS YET",
        tagColor: "#E8593C",
        imageUrl:
          "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=100&h=100&fit=crop",
      },
      {
        name: "FOLA",
        artist: "FOLA",
        whyThis: "Curated for your indie-Afro leaning",
        tag: "A CURATED PICK FROM LAGOS'S NEXT WAVE",
        tagColor: "#E8593C",
        imageUrl:
          "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=100&h=100&fit=crop",
      },
      {
        name: "Attack",
        artist: "Ayo Maff",
        whyThis: "Low saturation, high affinity score",
        tag: "ONLY 1K STREAMS — BUT EXACTLY YOUR SOUND",
        tagVariant: "muted",
        imageUrl:
          "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=100&h=100&fit=crop",
      },
    ],
  },
];

const JAPAN_SECTIONS = [
  {
    title: "Picked for you",
    subtitle: "J-pop and city pop already in your orbit",
    tracks: [
      {
        name: "Plastic Love",
        artist: "Miki Matsubara",
        whyThis: "Matched to your city pop curiosity",
        tag: "MATCHES YOUR TOP GENRE",
        imageUrl:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      },
      {
        name: "Stay With Me",
        artist: "Miki Matsubara",
        whyThis: "From artists you keep returning to",
        imageUrl:
          "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=100&h=100&fit=crop",
      },
      {
        name: "Pretender",
        artist: "Official HIGE DANdism",
        whyThis: "Aligned with your J-pop chart listens",
        imageUrl:
          "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=100&h=100&fit=crop",
      },
    ],
  },
  {
    title: "Trending right now",
    subtitle: "What's surging across Tokyo playlists",
    tracks: [
      {
        name: "Idol",
        artist: "YOASOBI",
        whyThis: "Trending among Japan-based listeners like you",
        tag: "+240% STREAMS THIS WEEK",
        imageUrl:
          "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=100&h=100&fit=crop",
      },
      {
        name: "KICK BACK",
        artist: "Kenshi Yonezu",
        whyThis: "Dominating Shibuya cafe playlists",
        imageUrl:
          "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=100&h=100&fit=crop",
      },
      {
        name: "Night Dancer",
        artist: "imase",
        whyThis: "Viral on Japanese TikTok this week",
        tag: "TRENDING IN TOKYO REELS",
        imageUrl:
          "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=100&h=100&fit=crop",
      },
    ],
  },
  {
    title: "Hidden gem",
    subtitle: "Underground Tokyo sounds worth your time",
    tracks: [
      {
        name: "Shin Takarajima",
        artist: "Sakanaction",
        whyThis: "Deep cut near your indie-Japanese taste",
        tag: "A CURATED PICK, FAR LESS SATURATED",
        tagVariant: "muted",
        imageUrl:
          "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=100&h=100&fit=crop",
      },
      {
        name: "Ride on Time",
        artist: "Tatsuro Yamashita",
        whyThis: "City pop gem with low repeat in your library",
        tag: "ONLY 1K STREAMS — BUT EXACTLY YOUR SOUND",
        tagVariant: "muted",
        imageUrl:
          "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=100&h=100&fit=crop",
      },
      {
        name: "Sayonara Baby",
        artist: "Vaundy",
        whyThis: "Emerging artist in your alt-J-pop lane",
        tagColor: "#E8593C",
        tag: "BREAKOUT — ALMOST NOBODY'S STREAMING THIS YET",
        imageUrl:
          "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=100&h=100&fit=crop",
      },
    ],
  },
];

const AUSTRALIA_SECTIONS = [
  {
    title: "Picked for you",
    subtitle: "Australian indie already on your radar",
    tracks: [
      {
        name: "Heat Waves",
        artist: "Glass Animals",
        whyThis: "Matched to your indie-electronic taste",
        tag: "MATCHES YOUR TOP GENRE",
        imageUrl:
          "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=100&h=100&fit=crop",
      },
      {
        name: "Elephant",
        artist: "Tame Impala",
        whyThis: "From artists in your psychedelic rotation",
        imageUrl:
          "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=100&h=100&fit=crop",
      },
      {
        name: "Youngblood",
        artist: "5 Seconds of Summer",
        whyThis: "Aligned with your pop-rock listens",
        imageUrl:
          "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=100&h=100&fit=crop",
      },
    ],
  },
  {
    title: "Trending right now",
    subtitle: "What's blowing up across Sydney and Melbourne",
    tracks: [
      {
        name: "Never Be Like You",
        artist: "Flume ft. Kai",
        whyThis: "Matched to your late-night electronic sessions",
        tag: "TRENDING: VIVID SYDNEY FESTIVAL SEASON",
        imageUrl:
          "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=100&h=100&fit=crop",
      },
      {
        name: "The Less I Know The Better",
        artist: "Tame Impala",
        whyThis: "Spiking on Melbourne festival playlists you follow",
        tag: "+180% STREAMS THIS WEEK",
        imageUrl:
          "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=100&h=100&fit=crop",
      },
      {
        name: "Riptide",
        artist: "Vance Joy",
        whyThis: "Surging on coastal indie charts near your sound",
        imageUrl:
          "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=100&h=100&fit=crop",
      },
    ],
  },
  {
    title: "Hidden gem",
    subtitle: "Australian underground picks for your profile",
    tracks: [
      {
        name: "Hoops",
        artist: "The Rubens",
        whyThis: "Under 50K streams — matches your indie-rock streak",
        tag: "ONLY 1K STREAMS — BUT EXACTLY YOUR SOUND",
        tagVariant: "muted",
        imageUrl:
          "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=100&h=100&fit=crop",
      },
      {
        name: "Patience",
        artist: "Hope D",
        whyThis: "Emerging Sydney voice in your alt-pop lane",
        tag: "A CURATED PICK, FAR LESS SATURATED",
        tagVariant: "muted",
        imageUrl:
          "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=100&h=100&fit=crop",
      },
      {
        name: "Confidence",
        artist: "Ocean Alley",
        whyThis: "Surf-rock breakout aligned with your psychedelic listens",
        tagColor: "#E8593C",
        tag: "BREAKOUT — ALMOST NOBODY'S STREAMING THIS YET",
        imageUrl:
          "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=100&h=100&fit=crop",
      },
    ],
  },
];

const UK_SECTIONS = [
  {
    title: "Picked for you",
    subtitle: "UK alt and pop already in your rotation",
    tracks: [
      {
        name: "Do I Wanna Know?",
        artist: "Arctic Monkeys",
        whyThis: "Matched to your indie-rock late-night streak",
        tag: "MATCHES YOUR TOP GENRE",
        imageUrl:
          "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=100&h=100&fit=crop",
      },
      {
        name: "Somebody Else",
        artist: "The 1975",
        whyThis: "From artists in your alt-pop rotation",
        imageUrl:
          "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=100&h=100&fit=crop",
      },
      {
        name: "Levitating",
        artist: "Dua Lipa",
        whyThis: "Aligned with your dance-pop workout listens",
        imageUrl:
          "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=100&h=100&fit=crop",
      },
    ],
  },
  {
    title: "Trending right now",
    subtitle: "What's charting across London and Manchester this week",
    tracks: [
      {
        name: "Escapism.",
        artist: "Raye",
        whyThis: "Dominating UK charts in your alt-R&B lane",
        tag: "+240% STREAMS THIS WEEK",
        imageUrl:
          "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=100&h=100&fit=crop",
      },
      {
        name: "Delilah (pull me out of this)",
        artist: "Fred again..",
        whyThis: "Trending on London club playlists you save",
        tag: "TRENDING IN LONDON CLUB MIXES",
        imageUrl:
          "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=100&h=100&fit=crop",
      },
      {
        name: "360",
        artist: "Charli XCX",
        whyThis: "Viral hyperpop overlap with your electronic streak",
        imageUrl:
          "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=100&h=100&fit=crop",
      },
    ],
  },
  {
    title: "Hidden gem",
    subtitle: "UK underground picks ahead of the algorithm",
    tracks: [
      {
        name: "Chaise Longue",
        artist: "Wet Leg",
        whyThis: "Low streams, high match to your indie-punk taste",
        tag: "ONLY 1K STREAMS — BUT EXACTLY YOUR SOUND",
        tagVariant: "muted",
        imageUrl:
          "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=100&h=100&fit=crop",
      },
      {
        name: "Seventeen Going Under",
        artist: "Sam Fender",
        whyThis: "Emerging UK voice in your anthemic alt lane",
        tag: "A CURATED PICK, FAR LESS SATURATED",
        tagVariant: "muted",
        imageUrl:
          "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=100&h=100&fit=crop",
      },
      {
        name: "Pain",
        artist: "PinkPantheress",
        whyThis: "Bedroom-pop breakout near your late-night playlists",
        tagColor: "#E8593C",
        tag: "BREAKOUT — ALMOST NOBODY'S STREAMING THIS YET",
        imageUrl:
          "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=100&h=100&fit=crop",
      },
    ],
  },
];

const CHINA_SECTIONS = [
  {
    title: "Picked for you",
    subtitle: "Mandarin pop and hip-hop already in your orbit",
    tracks: [
      {
        name: "Light Years Away",
        artist: "G.E.M.",
        whyThis: "Matched to your Mandarin pop curiosity",
        tag: "MATCHES YOUR TOP GENRE",
        imageUrl:
          "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=100&h=100&fit=crop",
      },
      {
        name: "Made in China",
        artist: "Higher Brothers",
        whyThis: "From artists in your hip-hop crossover rotation",
        imageUrl:
          "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=100&h=100&fit=crop",
      },
      {
        name: "Namanana",
        artist: "Lay",
        whyThis: "Aligned with your dance-electronic workout listens",
        imageUrl:
          "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=100&h=100&fit=crop",
      },
    ],
  },
  {
    title: "Trending right now",
    subtitle: "What's surging across Beijing and Shanghai playlists",
    tracks: [
      {
        name: "Nuna",
        artist: "Lexie Liu",
        whyThis: "Dominating mainland indie-pop charts this week",
        tag: "+220% STREAMS THIS WEEK",
        imageUrl:
          "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=100&h=100&fit=crop",
      },
      {
        name: "孤勇者",
        artist: "Eason Chan",
        whyThis: "Trending on Shanghai cafe playlists you save",
        tag: "TRENDING IN SHANGHAI INDIE MIXES",
        imageUrl:
          "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=100&h=100&fit=crop",
      },
      {
        name: "Be Apart",
        artist: "Tia Ray",
        whyThis: "Viral R&B crossover near your late-night lane",
        imageUrl:
          "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=100&h=100&fit=crop",
      },
    ],
  },
  {
    title: "Hidden gem",
    subtitle: "Underground mainland sounds ahead of the algorithm",
    tracks: [
      {
        name: "Tunnel Vision",
        artist: "Chace",
        whyThis: "Low streams, high match to your electronic taste",
        tag: "ONLY 1K STREAMS — BUT EXACTLY YOUR SOUND",
        tagVariant: "muted",
        imageUrl:
          "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=100&h=100&fit=crop",
      },
      {
        name: "The Peak",
        artist: "Chui Wan",
        whyThis: "Shoegaze deep cut in your indie-electronic lane",
        tag: "A CURATED PICK, FAR LESS SATURATED",
        tagVariant: "muted",
        imageUrl:
          "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=100&h=100&fit=crop",
      },
      {
        name: "Day 1",
        artist: "Mong Tong",
        whyThis: "Psychedelic breakout aligned with your experimental streak",
        tagColor: "#E8593C",
        tag: "BREAKOUT — ALMOST NOBODY'S STREAMING THIS YET",
        imageUrl:
          "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=100&h=100&fit=crop",
      },
    ],
  },
];

const NEPAL_SECTIONS = [
  {
    title: "Picked for you",
    subtitle: "Nepali indie already crossing your folk playlists",
    tracks: [
      {
        name: "Parkha Na",
        artist: "Sajjan Raj Vaidya",
        whyThis: "Matched to your acoustic singer-songwriter streak",
        tag: "MATCHES YOUR TOP GENRE",
        imageUrl:
          "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=100&h=100&fit=crop",
      },
      {
        name: "Aja",
        artist: "Neetesh Jung Kunwar",
        whyThis: "From artists in your indie-folk rotation",
        imageUrl:
          "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=100&h=100&fit=crop",
      },
      {
        name: "Kasari",
        artist: "Swoopna Suman",
        whyThis: "Aligned with your folk-fusion late-night listens",
        imageUrl:
          "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=100&h=100&fit=crop",
      },
    ],
  },
  {
    title: "Trending right now",
    subtitle: "What's blowing up across Kathmandu this week",
    tracks: [
      {
        name: "Laakhau",
        artist: "Yabesh Thapa",
        whyThis: "Dominating Nepali pop charts in your alt lane",
        tag: "+190% STREAMS THIS WEEK",
        imageUrl:
          "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=100&h=100&fit=crop",
      },
      {
        name: "Mayaloo",
        artist: "Trishala Gurung",
        whyThis: "Trending on Kathmandu indie playlists you follow",
        tag: "TRENDING IN KATHMANDU MIXES",
        imageUrl:
          "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=100&h=100&fit=crop",
      },
      {
        name: "Nare",
        artist: "Kutumba",
        whyThis: "Folk-fusion surge near your world-music curiosity",
        imageUrl:
          "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=100&h=100&fit=crop",
      },
    ],
  },
  {
    title: "Hidden gem",
    subtitle: "Himalayan voices ahead of the mainstream wave",
    tracks: [
      {
        name: "Bimbaakash",
        artist: "Bartika Eam Rai",
        whyThis: "Under 50K streams — matches your folk-indie taste",
        tag: "ONLY 1K STREAMS — BUT EXACTLY YOUR SOUND",
        tagVariant: "muted",
        imageUrl:
          "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=100&h=100&fit=crop",
      },
      {
        name: "Saili",
        artist: "Samriddhi Rai",
        whyThis: "Emerging Kathmandu voice in your acoustic lane",
        tag: "A CURATED PICK, FAR LESS SATURATED",
        tagVariant: "muted",
        imageUrl:
          "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=100&h=100&fit=crop",
      },
      {
        name: "Udhreko Choli",
        artist: "Indigo Stories",
        whyThis: "Folk-pop breakout aligned with your fusion listens",
        tagColor: "#E8593C",
        tag: "BREAKOUT — ALMOST NOBODY'S STREAMING THIS YET",
        imageUrl:
          "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=100&h=100&fit=crop",
      },
    ],
  },
];

const GREECE_SECTIONS = [
  {
    title: "Picked for you",
    subtitle: "Greek pop and laiko already in your summer rotation",
    tracks: [
      {
        name: "My Number One",
        artist: "Helena Paparizou",
        whyThis: "Matched to your Euro-pop summer playlist streak",
        tag: "MATCHES YOUR TOP GENRE",
        imageUrl:
          "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=100&h=100&fit=crop",
      },
      {
        name: "Eisai Edo",
        artist: "Melisses",
        whyThis: "From artists in your Mediterranean pop rotation",
        imageUrl:
          "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=100&h=100&fit=crop",
      },
      {
        name: "Mia Zoi",
        artist: "Onirama",
        whyThis: "Aligned with your upbeat dance-pop listens",
        imageUrl:
          "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=100&h=100&fit=crop",
      },
    ],
  },
  {
    title: "Trending right now",
    subtitle: "What's charting across Athens and Thessaloniki",
    tracks: [
      {
        name: "Athina Mou",
        artist: "Konstantinos Argiros",
        whyThis: "Dominating Greek charts in your laiko-pop lane",
        tag: "+210% STREAMS THIS WEEK",
        imageUrl:
          "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=100&h=100&fit=crop",
      },
      {
        name: "Mamacita",
        artist: "Snik",
        whyThis: "Trending on Athens club playlists you save",
        tag: "TRENDING IN ATHENS CLUB MIXES",
        imageUrl:
          "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=100&h=100&fit=crop",
      },
      {
        name: "Na Me Agapas",
        artist: "Giorgos Mazonakis",
        whyThis: "Viral laiko crossover near your summer sound",
        imageUrl:
          "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=100&h=100&fit=crop",
      },
    ],
  },
  {
    title: "Hidden gem",
    subtitle: "Greek underground picks ahead of the algorithm",
    tracks: [
      {
        name: "San Erthos",
        artist: "Ivan",
        whyThis: "Low streams, high match to your alt-pop taste",
        tag: "ONLY 1K STREAMS — BUT EXACTLY YOUR SOUND",
        tagVariant: "muted",
        imageUrl:
          "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=100&h=100&fit=crop",
      },
      {
        name: "Krifo",
        artist: "BAR",
        whyThis: "Emerging Athens voice in your electronic lane",
        tag: "A CURATED PICK, FAR LESS SATURATED",
        tagVariant: "muted",
        imageUrl:
          "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=100&h=100&fit=crop",
      },
      {
        name: "Agapi",
        artist: "Ladro",
        whyThis: "Indie-pop breakout aligned with your late-night playlists",
        tagColor: "#E8593C",
        tag: "BREAKOUT — ALMOST NOBODY'S STREAMING THIS YET",
        imageUrl:
          "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=100&h=100&fit=crop",
      },
    ],
  },
];

const GENERIC_SECTIONS = (countryName) => [
  {
    title: "Picked for you",
    subtitle: `Tracks that bridge ${countryName} and your taste`,
    tracks: [
      {
        name: "Local Anthem",
        artist: "Featured Artist",
        whyThis: "Matched to your recent listening patterns",
        imageUrl:
          "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=100&h=100&fit=crop",
      },
      {
        name: "Crossover Hit",
        artist: "Rising Star",
        whyThis: "Aligned with your genre clusters",
        imageUrl:
          "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=100&h=100&fit=crop",
      },
      {
        name: "Night Drive",
        artist: "Local Collective",
        whyThis: "Picked from listeners like you",
        imageUrl:
          "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=100&h=100&fit=crop",
      },
    ],
  },
  {
    title: "Trending right now",
    subtitle: `What's hot in ${countryName} this week`,
    tracks: [
      {
        name: "Chart Climber",
        artist: "Breakout Act",
        whyThis: "Trending where your taste overlaps",
        tag: "+200% STREAMS THIS WEEK",
        imageUrl:
          "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=100&h=100&fit=crop",
      },
      {
        name: "Festival Favorite",
        artist: "Live Act",
        whyThis: "Spiking on local playlists",
        imageUrl:
          "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=100&h=100&fit=crop",
      },
      {
        name: "Street Sound",
        artist: "Underground DJ",
        whyThis: "Viral in your discovery lane",
        imageUrl:
          "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=100&h=100&fit=crop",
      },
    ],
  },
  {
    title: "Hidden gem",
    subtitle: "Under-the-radar picks curated for you",
    tracks: [
      {
        name: "Quiet Discovery",
        artist: "New Voice",
        whyThis: "Low streams, strong taste match",
        tag: "ONLY 1K STREAMS — BUT EXACTLY YOUR SOUND",
        tagVariant: "muted",
        imageUrl:
          "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=100&h=100&fit=crop",
      },
      {
        name: "Back Room Session",
        artist: "Session Band",
        whyThis: "Curated for your exploration profile",
        tag: "A CURATED PICK, FAR LESS SATURATED",
        tagVariant: "muted",
        imageUrl:
          "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=100&h=100&fit=crop",
      },
      {
        name: "First Listen",
        artist: "Emerging Talent",
        whyThis: "Ahead of the algorithm curve",
        tagColor: "#E8593C",
        tag: "BREAKOUT — ALMOST NOBODY'S STREAMING THIS YET",
        imageUrl:
          "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=100&h=100&fit=crop",
      },
    ],
  },
];

export const COUNTRY_RESULTS = {
  nigeria: {
    name: "Nigeria",
    flag: "🇳🇬",
    trendingTag: "Trending: Lagos street-pop season",
    sections: NIGERIA_SECTIONS,
  },
  japan: {
    name: "Japan",
    flag: "🇯🇵",
    trendingTag: "Trending: City pop revival week",
    sections: JAPAN_SECTIONS,
  },
  australia: {
    name: "Australia",
    flag: "🇦🇺",
    gradient:
      "linear-gradient(135deg, #1A2F3D 0%, #F0A03044 50%, #121212 100%)",
    imageUrl:
      "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=400&h=240&fit=crop",
    heroImageUrl:
      "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&h=400&fit=crop",
    statusBadge: "TRENDING NOW · VIVID SYDNEY SEASON",
    heroDescription:
      "Indie-electronic and coastal sounds blowing up across Sydney — and your playlist's been leaning this way for months.",
    surfacedReason:
      "You've been streaming indie-electronic on repeat — Glass Animals, Tame Impala, the lot. Vivid Sydney just lit up the exact lane your Daylist's been building toward.",
    tasteMatch: "Matches your indie-electronic streak",
    sections: AUSTRALIA_SECTIONS,
    playlistMetadata: "18 songs, 58 min · Curated for you",
    richLayout: true,
  },
  "south-korea": {
    name: "South Korea",
    flag: "🇰🇷",
    trendingTag: "Trending: Seoul indie breakout",
    sections: GENERIC_SECTIONS("South Korea"),
  },
  brazil: {
    name: "Brazil",
    flag: "🇧🇷",
    trendingTag: "Trending: Carnival countdown",
    sections: GENERIC_SECTIONS("Brazil"),
  },
  india: {
    name: "India",
    flag: "🇮🇳",
    trendingTag: "Trending: Festival season pulse",
    sections: GENERIC_SECTIONS("India"),
  },
  mexico: {
    name: "Mexico",
    flag: "🇲🇽",
    trendingTag: "Trending: Regional Mexican wave",
    sections: GENERIC_SECTIONS("Mexico"),
  },
  uk: {
    name: "United Kingdom",
    flag: "🇬🇧",
    gradient:
      "linear-gradient(135deg, #1A1A2F 0%, #6366F155 50%, #121212 100%)",
    imageUrl:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=240&fit=crop",
    heroImageUrl:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=400&fit=crop",
    statusBadge: "TRENDING NOW · ALT-POP UNDERGROUND",
    heroDescription:
      "London's alt-pop and electronic underground is surging — right where your late-night playlists already live.",
    surfacedReason:
      "Your late-night sessions lean alt-pop and electronic — Arctic Monkeys, The 1975, dance-pop crossovers. The UK underground is having a moment in exactly that lane.",
    tasteMatch: "Alt-pop matches your late-night playlist energy",
    sections: UK_SECTIONS,
    playlistMetadata: "18 songs, 58 min · Curated for you",
    richLayout: true,
  },
  china: {
    name: "China",
    flag: "🇨🇳",
    gradient:
      "linear-gradient(135deg, #3D0A0A 0%, #E8593C44 50%, #121212 100%)",
    imageUrl:
      "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=400&h=240&fit=crop",
    heroImageUrl:
      "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&h=400&fit=crop",
    statusBadge: "TRENDING NOW · MANDARIN INDIE WAVE",
    heroDescription:
      "Mandarin indie and C-pop are crossing into global playlists — and your electronic curiosity is already halfway there.",
    surfacedReason:
      "You've been dipping into Mandarin pop and hip-hop crossovers without realizing it was a pattern. Shanghai's indie scene is surging in exactly the lane your Daylist's been building toward.",
    tasteMatch: "Crosses your electronic and Mandarin pop curiosity",
    sections: CHINA_SECTIONS,
    playlistMetadata: "18 songs, 58 min · Curated for you",
    richLayout: true,
  },
  nepal: {
    name: "Nepal",
    flag: "🇳🇵",
    gradient:
      "linear-gradient(135deg, #1A2F3D 0%, #6366F144 50%, #121212 100%)",
    imageUrl:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=240&fit=crop",
    heroImageUrl:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=400&fit=crop",
    statusBadge: "TRENDING NOW · KATHMANDU INDIE",
    heroDescription:
      "Himalayan folk-fusion and Kathmandu indie are breaking out — right where your acoustic playlists already lean.",
    surfacedReason:
      "Your folk-acoustic streak keeps pulling you toward singer-songwriter sounds. Nepal's indie scene is having a moment — intimate, melodic, and exactly your lane.",
    tasteMatch: "Folk-acoustic streak meets Himalayan indie",
    sections: NEPAL_SECTIONS,
    playlistMetadata: "18 songs, 58 min · Curated for you",
    richLayout: true,
  },
  greece: {
    name: "Greece",
    flag: "🇬🇷",
    gradient:
      "linear-gradient(135deg, #1A2F4A 0%, #F0A03044 50%, #121212 100%)",
    imageUrl:
      "https://images.unsplash.com/photo-1721043294920-a35f004894e9?w=400&h=240&fit=crop",
    heroImageUrl:
      "https://images.unsplash.com/photo-1721043294920-a35f004894e9?w=800&h=400&fit=crop",
    statusBadge: "TRENDING NOW · MEDITERRANEAN POP",
    heroDescription:
      "Greek laiko-pop and Mediterranean soul are surging — and your summer playlists have been heading this way.",
    surfacedReason:
      "Your summer rotation leans warm, melodic pop — Euro-pop crossovers, danceable hooks, coastal energy. Greece is having a moment in exactly that sound.",
    tasteMatch: "Mediterranean warmth matches your summer playlists",
    sections: GREECE_SECTIONS,
    playlistMetadata: "18 songs, 58 min · Curated for you",
    richLayout: true,
  },
};

export function getCountryResult(id) {
  return COUNTRY_RESULTS[id] || null;
}
