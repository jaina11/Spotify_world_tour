function t(name, artist, whyThis) {
  return { name, artist, whyThis };
}

const ALBUM_ART = [
  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1501386761578-0c3e1c9a7c2b?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1619983081563-430f63602796?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1598387993448-a379f21487ca?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1581333100250-6e7d27f4c4f2?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1540039155733-5bb30b44aa93?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1571266023765-76b250000088?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1514320291840-755e3870bee6?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1520523839897-bd0b52f94555?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1557672172-298e090bd0f8?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1508700116052-4deb0d7b0fd4?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1460661419341-fba4b1630f72?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1445985543470-41fba5c3144a?w=100&h=100&fit=crop",
];

function withImages(tracks, offset) {
  return tracks.map((track, index) => ({
    ...track,
    imageUrl: ALBUM_ART[(offset + index) % ALBUM_ART.length],
  }));
}

function buildCountry(config) {
  let artOffset = config.artOffset || 0;
  const assign = (bucket) => {
    const result = withImages(bucket, artOffset);
    artOffset += bucket.length;
    return result;
  };

  const buckets = {
    fromYourWorld: assign(config.fromYourWorld),
    trendingLocally: assign(config.trendingLocally),
    discoveredByTravelers: assign(config.discoveredByTravelers),
    hiddenGem: assign(config.hiddenGem),
  };

  const trackCount =
    buckets.fromYourWorld.length +
    buckets.trendingLocally.length +
    buckets.discoveredByTravelers.length +
    buckets.hiddenGem.length;

  const { artOffset: _artOffset, ...rest } = config;

  return {
    ...rest,
    buckets,
    trackCount,
    durationMin: Math.round(trackCount * 3.2),
  };
}

export const ITINERARY_COUNTRIES = {
  australia: buildCountry({
    id: "australia",
    name: "Australia",
    flag: "🇦🇺",
    language: "English",
    distanceKm: 9200,
    genreIdentity: "indie-electronic / alt-Australiana",
    artOffset: 0,
    heroImageUrl:
      "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&h=400&fit=crop",
    event: {
      name: "WOMADelaide",
      region: "Adelaide Botanic Gardens",
      status: "LIVE NOW",
      statusColor: "#E8593C",
      description:
        "International lineup including Grace Jones, Marlon Williams, Baker Boy — world music in the gardens.",
      surfacedReason:
        "WOMADelaide just landed — a world-music celebration right in the gardens, and it's pulling from the same global-fusion sound already in your rotation.",
      imageUrl:
        "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=400&h=240&fit=crop",
    },
    fromYourWorld: [
      t("Heat Waves", "Glass Animals", "Already in your indie-electronic rotation"),
      t("Elephant", "Tame Impala", "Psychedelic lane you stream on repeat"),
      t("Youngblood", "5 Seconds of Summer", "Pop-rock crossover in your Daylist"),
      t("Riptide", "Vance Joy", "Folk-pop warmth already in your library"),
    ],
    trendingLocally: [
      t("Oysters in My Pocket", "Royel Otis", "Charting across Sydney right now"),
      t("Be Your Man", "G Flip", "Melbourne indie-pop surge this week"),
      t("Everybody's Saying Thursday's Weekend", "DMA'S", "Alt-rock anthem climbing local charts"),
      t("Jungle", "Tash Sultana", "One-person-band breakout dominating Melbourne streams"),
    ],
    discoveredByTravelers: [
      t("Mangé Ta Mort", "Genesis Owusu", "Taste-twins saved this after Sydney trips"),
      t("Sunscreen", "Ball Park Music", "Indie-pop pick from similar listeners"),
      t("My Happiness", "Thelma Plum", "Aboriginal pop voice travelers keep saving"),
      t("Solid Gold", "Hilltop Hoods", "Hip-hop anthem from listeners with your profile"),
    ],
    hiddenGem: [
      t("Carry You", "The Teskey Brothers", "Soul-blues gem locals swear by"),
      t("Marryuna", "Baker Boy", "Indigenous hip-hop breakout worth the detour"),
      t("Pedestrian at Best", "Courtney Barnett", "Deadpan indie-rock deep cut"),
      t("Bloom", "Tame Impala", "Psychedelic deep cut locals rediscovered"),
    ],
  }),

  uk: buildCountry({
    id: "uk",
    name: "United Kingdom",
    flag: "🇬🇧",
    language: "English",
    distanceKm: 8100,
    genreIdentity: "alt-pop / indie-rock",
    artOffset: 2,
    heroImageUrl:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=400&fit=crop",
    event: {
      name: "Reading & Leeds Festival",
      region: "Late August",
      status: "COMING UP",
      statusColor: "#7B68EE",
      description:
        "Florence + The Machine, Charli XCX, Fontaines D.C. — where UK's biggest new sounds break first.",
      surfacedReason:
        "Reading & Leeds is where UK's biggest new sounds break first — and this year's bill reads like your Discover Weekly.",
      imageUrl:
        "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=240&fit=crop",
    },
    fromYourWorld: [
      t("Chaise Longue", "Wet Leg", "Alt-rock energy already in your rotation"),
      t("Starburster", "Fontaines D.C.", "Post-punk lane you lean toward late-night"),
      t("Introvert", "Little Simz", "UK rap crossover in your library"),
      t("Dancing Queen", "ABBA", "Pop classic resurfacing in your summer playlists"),
    ],
    trendingLocally: [
      t("Stateside", "PinkPantheress", "London bedroom-pop climbing charts"),
      t("You Love Who You Love", "Zara Larsson", "Pop anthem dominating UK streams"),
      t("Escapism.", "Raye", "Soul-pop breakout everywhere in London"),
      t("Prada", "cassö & Raye", "Dance-pop collab surging on UK club playlists"),
    ],
    discoveredByTravelers: [
      t("360", "Charli XCX", "Hyperpop-adjacent pick from taste-twins"),
      t("back to friends", "sombr", "Bedroom-pop gem travelers saved"),
      t("Messy", "Lola Young", "Soul-pop breakout taste-twins loved in London"),
      t("Guess", "Charli XCX ft. Billie Eilish", "Pop crossover travelers queued first"),
    ],
    hiddenGem: [
      t("No Weapons", "Jim Legxacy", "South London alt-R&B under the radar"),
      t("blade bird", "Oklou", "Experimental pop worth the detour"),
      t("Sanctuary", "Sam Fender", "Anthemic indie-rock deep cut"),
      t("Glue", "Bicep", "Electronic deep cut from Belfast duo"),
    ],
  }),

  china: buildCountry({
    id: "china",
    name: "China",
    flag: "🇨🇳",
    language: "Mandarin",
    distanceKm: 3900,
    genreIdentity: "Mandopop / C-pop / Zhongguo feng fusion",
    artOffset: 4,
    heroImageUrl:
      "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&h=400&fit=crop",
    event: {
      name: "Mandopop Centennial",
      region: "Universal Music China, Beijing",
      status: "TRENDING",
      statusColor: "#F0A030",
      description:
        "Chinese pop music turns 100 next year — artists revisiting classics for a new generation.",
      surfacedReason:
        "Mandopop is having a centennial moment — legacy hits are getting reintroduced to a new generation, and it overlaps with your Mandarin pop curiosity.",
      imageUrl:
        "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=400&h=240&fit=crop",
    },
    fromYourWorld: [
      t("Mojito", "Jay Chou", "Mandopop staple already in your rotation"),
      t("The Story of Us", "JJ Lin", "Ballad lane you've streamed before"),
      t("Love Confession", "Jay Chou", "Piano-ballad classic in your Mandarin lane"),
      t("Those Were The Days", "JJ Lin", "Emotional pop crossover you lean toward"),
    ],
    trendingLocally: [
      t("Ride", "Cai Xukun / KUN", "Mandopop idol dominating Beijing charts"),
      t("光点", "Xiao Zhan", "C-pop ballad surging on local platforms"),
      t("孤勇者", "Eason Chan", "Anthemic ballad charting across mainland China"),
      t("如愿", "Faye Wong", "Cinematic pop revival topping Beijing streams"),
    ],
    discoveredByTravelers: [
      t("Nuna", "Lexie Liu", "Mandarin hip-hop crossover taste-twins love"),
      t("Made in China", "Higher Brothers", "Hip-hop export travelers saved after Shanghai trips"),
      t("无人之岛", "Ren Ran", "Indie-folk ballad from listeners like you"),
      t("飘向北方", "Gary Chaw & MC HotDog", "Mandarin rap-pop crossover travelers queued"),
    ],
    hiddenGem: [
      t("Light Years Away", "G.E.M.", "Power-ballad gem worth the detour"),
      t("我的歌声里", "Wanting Qu", "Mandopop sleeper hit under the radar"),
      t("奇妙能力歌", "Chen Li", "Indie-folk breakout in the underground"),
      t("山丘", "Jonathan Lee", "Zhongguo feng classic locals swear by"),
    ],
  }),

  nepal: buildCountry({
    id: "nepal",
    name: "Nepal",
    flag: "🇳🇵",
    language: "Nepali",
    distanceKm: 2100,
    genreIdentity: "Himalayan folk-rock / instrumental folk",
    artOffset: 6,
    heroImageUrl:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=400&fit=crop",
    event: {
      name: "Nepal Music Festival",
      region: "Diaspora touring edition",
      status: "RISING",
      statusColor: "#1DB954",
      description:
        "Himalayan Folk-Rock takes center stage — mountain melodies meet modern production.",
      surfacedReason:
        "Bipul Chettri's Himalayan Folk-Rock sound is having a global diaspora moment — mountain melodies meeting modern production.",
      imageUrl:
        "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=240&fit=crop",
    },
    fromYourWorld: [
      t("Syndicate", "Bipul Chettri & The Travelling Band", "Folk-rock already in your acoustic lane"),
      t("Asaar", "Bipul Chettri & The Travelling Band", "Himalayan melodies you lean toward"),
      t("Wildfire", "Bipul Chettri & The Travelling Band", "Mountain-folk energy in your rotation"),
      t("Kalo", "Bipul Chettri & The Travelling Band", "Blues-folk crossover in your library"),
    ],
    trendingLocally: [
      t("Jhamke", "Kutumba", "Instrumental folk ensemble charting in Kathmandu"),
      t("Saili", "Sajjan Raj Vaidya", "Nepali pop ballad dominating local charts"),
      t("Parkha Na", "Sajjan Raj Vaidya", "Acoustic pop anthem surging in Kathmandu"),
      t("Chitthi Bhitra", "Neetesh Jung Kunwar", "Indie-rock breakout climbing Nepali streams"),
    ],
    discoveredByTravelers: [
      t("Kathmandu Nights", "Cadenza Jazz Collective", "Jazz-fusion pick from taste-twins"),
      t("Maya", "Sajjan Raj Vaidya", "Pop ballad travelers saved after Nepal trips"),
      t("Hawa Le", "Neetesh Jung Kunwar", "Indie-pop gem from listeners like you"),
      t("Timi Sanga", "Kutumba", "Folk-fusion instrumental travelers keep replaying"),
    ],
    hiddenGem: [
      t("Terai Breeze", "Sajjan Raj Vaidya", "Terai folk crossover under the radar"),
      t("Phool Ko Aankha", "Ani Choying Drolma", "Buddhist folk chant fusion worth the detour"),
      t("Ghumti", "Kutumba", "Instrumental folk deep cut locals love"),
      t("Chautari", "Bipul Chettri & The Travelling Band", "Himalayan blues gem under 50K streams"),
    ],
  }),

  greece: buildCountry({
    id: "greece",
    name: "Greece",
    flag: "🇬🇷",
    language: "Greek",
    distanceKm: 5800,
    genreIdentity: "Greek pop / Mediterranean folk-pop",
    artOffset: 8,
    heroImageUrl:
      "https://images.unsplash.com/photo-1721043294920-a35f004894e9?w=800&h=400&fit=crop",
    event: {
      name: "Sani Festival",
      region: "Halkidiki, July–August",
      status: "LIVE NOW",
      statusColor: "#E8593C",
      description:
        "Opens July 11 with Robert Plant — Greece's pop icons closing out the season alongside him.",
      surfacedReason:
        "Sani Festival just opened with a legendary headliner — and Greece's own pop icons are closing out the season alongside him.",
      imageUrl:
        "https://images.unsplash.com/photo-1721043294920-a35f004894e9?w=400&h=240&fit=crop",
    },
    fromYourWorld: [
      t("Pou 'sai", "Dimitra Galani", "Greek pop warmth in your summer lane"),
      t("To Tango Ton Christougennon", "Eleni Tsaligopoulou", "Mediterranean soul you stream"),
      t("My Number One", "Helena Paparizou", "Euro-pop summer anthem in your rotation"),
      t("Eisai Edo", "Melisses", "Mediterranean pop crossover you lean toward"),
    ],
    trendingLocally: [
      t("Theo Mou", "Vicky Leandros", "Laiko-pop classic surging in Athens"),
      t("Athina Mou", "Konstantinos Argiros", "Dominating Greek charts in your laiko-pop lane"),
      t("Mamacita", "Snik", "Trending on Athens club playlists you save"),
      t("Na Me Agapas", "Giorgos Mazonakis", "Viral laiko crossover near your summer sound"),
    ],
    discoveredByTravelers: [
      t("Zeibekiko Nights", "Estudiantina Neas Ionias Orchestra", "Orchestral folk pick from travelers"),
      t("Mia Zoi", "Onirama", "Dance-pop anthem taste-twins loved in Thessaloniki"),
      t("San Erthos", "Ivan", "Alt-pop crossover travelers saved after Athens trips"),
      t("Agapi", "Ladro", "Indie-pop gem from listeners with your profile"),
    ],
    hiddenGem: [
      t("Athens After Dark", "Release Athens Showcase", "Rising Athens indie-pop from the lineup"),
      t("Krifo", "BAR", "Emerging Athens voice in your electronic lane"),
      t("Thalassa", "Melisses", "Laiko-pop deep cut under 50K streams"),
      t("To Fili", "Melisses", "Laiko-pop deep cut worth the detour"),
    ],
  }),

  "south-korea": buildCountry({
    id: "south-korea",
    name: "South Korea",
    flag: "🇰🇷",
    language: "Korean",
    distanceKm: 5700,
    genreIdentity: "K-pop / K-hip-hop crossover",
    artOffset: 10,
    heroImageUrl:
      "https://images.unsplash.com/photo-1517154429937-634ccef0b0a0?w=800&h=400&fit=crop",
    event: {
      name: "SBS Gayo Daejeon Summer",
      region: "Aug 9, KINTEX",
      status: "COMING UP",
      statusColor: "#7B68EE",
      description:
        "Major K-pop broadcast event — one of the biggest nights of the year.",
      surfacedReason:
        "One of the biggest K-pop nights of the year is landing in August, headlined by the artists already topping your charts.",
      imageUrl:
        "https://images.unsplash.com/photo-1517154429937-634ccef0b0a0?w=400&h=240&fit=crop",
    },
    fromYourWorld: [
      t("Swim", "BTS", "K-pop already in your rotation"),
      t("Jump / Go", "BLACKPINK", "Girl-group lane you stream"),
      t("Dynamite", "BTS", "Global pop crossover in your library"),
      t("How You Like That", "BLACKPINK", "Girl-group anthem you replay"),
    ],
    trendingLocally: [
      t("Heavy Serenade", "NMIXX", "Chart-topping K-pop this week"),
      t("MAMIHLAPINATAPAI", "ILLIT", "Rookie surge across Seoul"),
      t("Supernova", "aespa", "Synth-pop girl-group dominating Korean charts"),
      t("Magnetic", "ILLIT", "Rookie anthem climbing Seoul streams"),
    ],
    discoveredByTravelers: [
      t("Chk Chk Boom", "Stray Kids", "Boy-group pick from taste-twins"),
      t("WORK", "ATEEZ", "Performance-focused K-pop travelers saved"),
      t("God's Menu", "Stray Kids", "Hip-hop boy-group travelers queued in Seoul"),
      t("Bouncy", "ATEEZ", "Performance K-pop gem from listeners like you"),
    ],
    hiddenGem: [
      t("Choke", "82MAJOR", "K-hip-hop rookie under the radar"),
      t("Umm Great", "KickFlip", "Debut act worth the detour"),
      t("Ma Boy", "SISTAR19", "R&B-pop deep cut locals rediscovered"),
      t("Eternal Sunshine", "ATEEZ", "Alt-K-pop gem under 50K streams"),
    ],
  }),

  japan: buildCountry({
    id: "japan",
    name: "Japan",
    flag: "🇯🇵",
    language: "Japanese",
    distanceKm: 6700,
    genreIdentity: "J-pop / J-rock / city pop-adjacent",
    artOffset: 12,
    heroImageUrl:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&h=400&fit=crop",
    event: {
      name: "Fuji Rock Festival",
      region: "July 24–26, Naeba",
      status: "LIVE NOW",
      statusColor: "#E8593C",
      description:
        "Japan's most iconic outdoor festival — J-pop meets alt-rock energy.",
      surfacedReason:
        "Fuji Rock is Japan's biggest music weekend of the year, and this year's lineup blends J-pop with the same alt-rock energy you already stream.",
      imageUrl:
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&h=400&fit=crop",
    },
    fromYourWorld: [
      t("Lemon", "Kenshi Yonezu", "J-pop ballad already in your library"),
      t("Shinunoga E-Wa", "Fujii Kaze", "Soul-pop lane you lean toward"),
      t("Pretender", "Official HIGE DANdism", "Piano-pop anthem in your rotation"),
      t("Paprika", "Kenshi Yonezu", "Upbeat J-pop crossover you stream"),
    ],
    trendingLocally: [
      t("Lilac", "Mrs. GREEN APPLE", "J-rock pop crossover charting in Tokyo"),
      t("Blue Jeans", "HANA", "City-pop revival surging locally"),
      t("Iris", "Yorushika", "Indie-rock ballad dominating Shibuya playlists"),
      t("KICK BACK", "Kenshi Yonezu", "Anime tie-in anthem climbing Tokyo charts"),
    ],
    discoveredByTravelers: [
      t("CHARISMAX", "Snow Man", "J-pop boy-group pick from taste-twins"),
      t("Subtitle", "Official HIGE DANdism", "Piano-pop ballad travelers saved in Tokyo"),
      t("Marigold", "Aimyon", "Indie-pop gem from listeners like you"),
      t("Haruka", "YOASOBI", "Synth-pop crossover travelers queued first"),
    ],
    hiddenGem: [
      t("Doom", "AiNA THE END", "Alt-J-pop gem under the radar"),
      t("Re:Re:", "Asian Kung-Fu Generation", "J-rock classic worth the detour"),
      t("Plastic Love", "Mariya Takeuchi", "City-pop deep cut locals swear by"),
      t("Shin Takarajima", "Sakanaction", "Electronic indie-rock gem under the radar"),
    ],
  }),

  mexico: buildCountry({
    id: "mexico",
    name: "Mexico",
    flag: "🇲🇽",
    language: "Spanish",
    distanceKm: 16200,
    genreIdentity: "Latin pop / regional Mexican / rock en español",
    artOffset: 14,
    heroImageUrl:
      "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=800&h=400&fit=crop",
    event: {
      name: "Tecate Peninsula Festival",
      region: "Tijuana",
      status: "TRENDING",
      statusColor: "#F0A030",
      description:
        "Rock en español legacy meets modern Latin crossover on the border.",
      surfacedReason:
        "Latin music's global rise is being led by exactly the rock-en-español lineage you already listen to.",
      imageUrl:
        "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=400&h=240&fit=crop",
    },
    fromYourWorld: [
      t("Restless", "Interpol", "Indie-rock already in your rotation"),
      t("Limón y Sal", "Julieta Venegas", "Latin alt-pop lane you stream"),
      t("La Negra Tomasa", "Caifanes", "Rock en español classic in your library"),
      t("Eres", "Café Tacvba", "Alternative Latin rock crossover you lean toward"),
    ],
    trendingLocally: [
      t("TQG", "Karol G", "Latin pop dominating Mexico City charts"),
      t("Siento Amor", "Fuerza Regida", "Regional Mexican wave cresting now"),
      t("Gata Only", "FloyyMenor & Cris MJ", "Reggaeton crossover surging in CDMX"),
      t("Si No Quieres No", "Luis R Conriquez", "Regional Mexican anthem climbing charts"),
    ],
    discoveredByTravelers: [
      t("Lo Que Siento", "Cuco", "Bedroom-pop Latin pick from taste-twins"),
      t("Telefonía", "Zoé", "Rock en español gem travelers saved in Mexico City"),
      t("Nunca Es Suficiente", "Natalia Lafourcade", "Latin folk-pop travelers keep replaying"),
      t("Amor Eterno", "Juan Gabriel", "Classic ballad taste-twins loved on the road"),
    ],
    hiddenGem: [
      t("La Murga", "Los Auténticos Decadentes", "Latin ska-rock gem worth the detour"),
      t("Oye Mi Amor", "Maná", "Rock en español deep cut under the radar"),
      t("Latinoamérica", "Calle 13", "Folk-rap fusion gem locals swear by"),
      t("De Música Ligera", "Soda Stereo", "Latin rock classic worth the detour"),
    ],
  }),
};

import { getDomesticCity } from "@/data/domesticCities";

export function getItineraryCountry(id) {
  return ITINERARY_COUNTRIES[id] || getDomesticCity(id) || null;
}

export function getAllItineraryCountryIds() {
  return Object.keys(ITINERARY_COUNTRIES);
}
