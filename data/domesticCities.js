export const DOMESTIC_MONTH = "2026-07";

function t(name, artist, whyThis) {
  return { name, artist, whyThis };
}

const ALBUM_ART = [
  "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1508700116052-4deb0d7b0fd4?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1460661419341-fba4b1630f72?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1445985543470-41fba5c3144a?w=100&h=100&fit=crop",
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
  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=100&h=100&fit=crop",
];

function withImages(tracks, offset) {
  return tracks.map((track, index) => ({
    ...track,
    imageUrl: ALBUM_ART[(offset + index) % ALBUM_ART.length],
  }));
}

function buildCity(config) {
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
    type: "domestic",
    buckets,
    trackCount,
    durationMin: Math.round(trackCount * 3.2),
  };
}

export const DOMESTIC_CITIES = {
  ahmedabad: buildCity({
    id: "ahmedabad",
    name: "Ahmedabad",
    flag: "🇮🇳",
    language: "Gujarati",
    distanceKm: 1490,
    vibeTag: "Garba roots, devotional soul",
    genreIdentity: "Gujarati folk / Garba / devotional-classical fusion",
    artOffset: 0,
    lat: 23.0225,
    lng: 72.5714,
    heroImageUrl:
      "https://images.unsplash.com/photo-1587474260587-136574528ed5?w=800&h=400&fit=crop",
    cardImageUrl:
      "https://images.unsplash.com/photo-1587474260587-136574528ed5?w=400&h=300&fit=crop",
    event: {
      name: "Krushnamrut & Abhangwari",
      region: "Ahmedabad, Gujarat",
      status: "THIS WEEK",
      statusColor: "#F0A030",
      description:
        "Krushnamrut: A Journey of Music, Poetry & Bhakti (July 12) + Mahesh Kale's Abhangwari (July 4).",
      surfacedReason:
        "Ahmedabad's July calendar is leaning devotional and classical — Mahesh Kale's Abhangwari and a poetry-music night are both landing this week.",
      imageUrl:
        "https://images.unsplash.com/photo-1587474260587-136574528ed5?w=400&h=240&fit=crop",
    },
    fromYourWorld: [
      t("Laadki", "Kirtidan Gadhvi", "Gujarati folk already in your acoustic rotation"),
      t("Bharat Ke San", "Maithili Thakur", "Devotional-classical lane you stream often"),
      t("Mogal Maa", "Kirtidan Gadhvi", "Garba roots matching your folk curiosity"),
      t("Ramaiya Vastavaiya", "Maithili Thakur", "Bhakti-folk crossover in your library"),
    ],
    trendingLocally: [
      t("Abhangwari", "Mahesh Kale", "Classical devotional set dominating Ahmedabad this week"),
      t("Krushnamrut", "Mahesh Kale", "Poetry-music night surging on local playlists"),
      t("Dil Ki Baat", "Aanchal Shrivastava", "Indie-pop ballad climbing Gujarat charts"),
      t("Saanware", "Aanchal Shrivastava", "Acoustic pop anthem trending in the city"),
    ],
    discoveredByTravelers: [
      t("Chand", "Raman Negi", "Indie-folk pick taste-twins saved after Gujarat trips"),
      t("Mann Bharrya", "B Praak", "Punjabi ballad travelers queued on the road to Ahmedabad"),
      t("Filhaal 2", "B Praak", "Emotional pop crossover from listeners like you"),
      t("Raanjhan", "Raman Negi", "Hindi indie gem travelers keep replaying"),
    ],
    hiddenGem: [
      t("Abhang Gatha", "Rahul Deshpande", "Marathi devotional fusion under the radar"),
      t("Vitthal Vitthal", "Rahul Deshpande", "Classical bhajan deep cut locals swear by"),
      t("Gajanana", "Rahul Deshpande", "Devotional-classical gem worth the detour"),
      t("Pandharichi Vaari", "Rahul Deshpande", "Abhang tradition sleeper hit in Gujarat"),
    ],
  }),

  mumbai: buildCity({
    id: "mumbai",
    name: "Mumbai",
    flag: "🇮🇳",
    language: "Hindi",
    distanceKm: 980,
    vibeTag: "Monsoon indie nights",
    genreIdentity: "Hindi indie-rock / Bollywood-adjacent pop",
    artOffset: 4,
    lat: 19.076,
    lng: 72.8777,
    heroImageUrl:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&h=400&fit=crop",
    cardImageUrl:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400&h=300&fit=crop",
    event: {
      name: "Pier Pop & Indie Collective",
      region: "Mumbai Waterfront",
      status: "LIVE NOW",
      statusColor: "#E8593C",
      description:
        "Pier Pop monsoon waterfront festival (until July 23) + The Yellow Diary Experience & Anand Bhaskar Collective concert.",
      surfacedReason:
        "Mumbai's monsoon season means Pier Pop is transforming the historic cruise terminal into a live-music waterfront — and two of India's biggest indie acts are sharing a stage this month.",
      imageUrl:
        "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400&h=240&fit=crop",
    },
    fromYourWorld: [
      t("Marz", "The Yellow Diary", "Indie-rock already in your late-night rotation"),
      t("Roz Roz", "The Yellow Diary", "Emotional pop-rock lane you lean toward"),
      t("Tere Bina", "Anand Bhaskar Collective", "Indie-fusion staple in your library"),
      t("Jiya More", "Anand Bhaskar Collective", "Groove-heavy crossover you stream often"),
    ],
    trendingLocally: [
      t("Safarnama", "Lucky Ali", "Monsoon anthem dominating Mumbai streams"),
      t("O Sanam", "Lucky Ali", "Indie-pop classic surging on waterfront playlists"),
      t("Moh Moh Ke Dhaage", "Papon", "Acoustic ballad climbing Maharashtra charts"),
      t("Bulleya", "Papon", "Sufi-pop crossover trending this monsoon"),
    ],
    discoveredByTravelers: [
      t("Breathless", "Shankar Mahadevan", "Bollywood-fusion pick taste-twins loved in Mumbai"),
      t("Zingaat", "Ajay-Atul", "Marathi anthem travelers saved after monsoon gigs"),
      t("Chikni Chameli", "Ajay-Atul", "High-energy Bollywood crossover on the road"),
      t("Sapna Jahan", "Shankar Mahadevan", "Ballad gem from listeners with your profile"),
    ],
    hiddenGem: [
      t("Noor-e-Daastaan", "Bhuwin", "Indie-folk sleeper hit under the radar"),
      t("Raahi", "Bhuwin", "Acoustic deep cut locals swear by at Pier Pop"),
      t("Khwab", "Bhuwin", "Bedroom-pop gem worth the waterfront detour"),
      t("Dariya", "Bhuwin", "Indie ballad under 100K streams in Mumbai"),
    ],
  }),

  kolkata: buildCity({
    id: "kolkata",
    name: "Kolkata",
    flag: "🇮🇳",
    language: "Bengali",
    distanceKm: 1870,
    vibeTag: "Classical fusion & riverside gigs",
    genreIdentity: "Bengali rock / classical fusion / adda-culture folk",
    artOffset: 8,
    lat: 22.5726,
    lng: 88.3639,
    heroImageUrl:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop",
    cardImageUrl:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    event: {
      name: "L. Shankar & Tarun Bhattacharya Live",
      region: "Kolkata, West Bengal",
      status: "JULY 19",
      statusColor: "#1DB954",
      description:
        "L. Shankar & Tarun Bhattacharya Live — classical-fusion masters sharing a riverside stage.",
      surfacedReason:
        "Kolkata's music scene this month runs from riverside boat gigs to serious classical-fusion concerts — a city that treats music as both ritual and rebellion.",
      imageUrl:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=240&fit=crop",
    },
    fromYourWorld: [
      t("Bishakto", "Fossils", "Bengali rock already in your alt rotation"),
      t("Ei Shohor", "Fossils", "Anthemic rock lane you stream on repeat"),
      t("Coffee House", "Chandrabindoo", "Adda-culture folk matching your acoustic taste"),
      t("Bhalobashi", "Chandrabindoo", "Melodic Bengali pop in your library"),
    ],
    trendingLocally: [
      t("I Got Rhythm", "Usha Uthup", "Jazz-fusion legend dominating Kolkata charts"),
      t("Hari Om Hari", "Usha Uthup", "Disco-fusion classic surging on local streams"),
      t("Ei Mon Jochonay", "Nachiketa Chakraborty", "Bengali rock ballad climbing this week"),
      t("Tomake Chai", "Nachiketa Chakraborty", "Indie-rock anthem trending in the city"),
    ],
    discoveredByTravelers: [
      t("Raga Kirwani", "L. Shankar & Tarun Bhattacharya", "Classical-fusion pick taste-twins saved"),
      t("Gat in Raga Bhairavi", "L. Shankar & Tarun Bhattacharya", "Instrumental gem travelers queued"),
      t("Shankar Fusion", "L. Shankar & Tarun Bhattacharya", "Violin-sitar crossover from listeners like you"),
      t("Tarun's Tabla", "L. Shankar & Tarun Bhattacharya", "Percussion fusion travelers keep replaying"),
    ],
    hiddenGem: [
      t("Babughat Sessions", "Bhuwin Experience", "Riverside gig scene under the radar"),
      t("Hooghly Nights", "Bhuwin Experience", "Acoustic-folk deep cut at Babughat"),
      t("Adda Blues", "Bhuwin Experience", "Indie-fusion gem worth the riverside detour"),
      t("Ganga Echo", "Bhuwin Experience", "Sleeper hit from Kolkata's boat-gig circuit"),
    ],
  }),

  delhi: buildCity({
    id: "delhi",
    name: "Delhi",
    flag: "🇮🇳",
    language: "Hindi",
    distanceKm: 2150,
    vibeTag: "Rock meets Northeast folk",
    genreIdentity: "Delhi rock / Punjabi pop / Northeast India folk-rock",
    artOffset: 12,
    lat: 28.6139,
    lng: 77.209,
    heroImageUrl:
      "https://images.unsplash.com/photo-1587474260587-136574528ed5?w=800&h=400&fit=crop&q=80",
    cardImageUrl:
      "https://images.unsplash.com/photo-1524492412517-5c522c1c2f5f?w=400&h=300&fit=crop",
    event: {
      name: "North East Music Festival & Dream Girl Tour",
      region: "Delhi NCR",
      status: "FREE + HEADLINE",
      statusColor: "#7B68EE",
      description:
        "North East Music Festival (free) + Jasmine Sandlas Dream Girl India Tour (July 11).",
      surfacedReason:
        "Delhi's July lineup spans two extremes — a free festival championing Northeast India's rock and folk scene, and a Punjabi pop powerhouse headlining Yashobhoomi.",
      imageUrl:
        "https://images.unsplash.com/photo-1524492412517-5c522c1c2f5f?w=400&h=240&fit=crop",
    },
    fromYourWorld: [
      t("But It Rained", "Parikrama", "Delhi rock already in your guitar-driven rotation"),
      t("Gorbhanga", "Parikrama", "Hindi rock anthem you lean toward"),
      t("Khwaab", "When Chai Met Toast", "Indie-folk crossover in your library"),
      t("Firefly", "When Chai Met Toast", "Acoustic pop lane you stream often"),
    ],
    trendingLocally: [
      t("Punjabi Mutiyaran", "Jasmine Sandlas", "Punjabi pop powerhouse dominating Delhi charts"),
      t("Illegal Weapon", "Jasmine Sandlas", "Dance-pop anthem surging ahead of Dream Girl Tour"),
      t("Abhi Mujh Mein Kahin", "Sonu Nigam", "Bollywood ballad climbing NCR streams"),
      t("Kal Ho Naa Ho", "Sonu Nigam", "Classic ballad revival trending this week"),
    ],
    discoveredByTravelers: [
      t("Hoi Kiwon", "Rewben Mashangva", "Northeast folk-rock pick taste-twins loved"),
      t("Naga Folk Blues", "Rewben Mashangva", "Tribal-fusion gem travelers saved at the festival"),
      t("Rock On", "GATC", "Garage rock crossover from listeners like you"),
      t("Delhi Blues", "GATC", "Indie-rock anthem travelers queued on the road"),
    ],
    hiddenGem: [
      t("Milo Na Tum", "Rahgir", "Indie-folk sleeper hit under the radar"),
      t("Aadat Se Majboor", "Rahgir", "Acoustic ballad deep cut locals swear by"),
      t("Kya Baat Hai", "Rahgir", "Hindi indie gem worth the Northeast festival detour"),
      t("Safar", "Rahgir", "Singer-songwriter deep cut under 50K streams"),
    ],
  }),

  kochi: buildCity({
    id: "kochi",
    name: "Kochi",
    flag: "🇮🇳",
    language: "Malayalam",
    distanceKm: 550,
    vibeTag: "Global-local fusion",
    genreIdentity: "Malayalam fusion / global-local crossover / Kerala café-indie",
    artOffset: 16,
    lat: 9.9312,
    lng: 76.2673,
    heroImageUrl:
      "https://images.unsplash.com/photo-1602211447924-7e9b8b0e8c0e?w=800&h=400&fit=crop",
    cardImageUrl:
      "https://images.unsplash.com/photo-1602211447924-7e9b8b0e8c0e?w=400&h=300&fit=crop",
    event: {
      name: "Kochi-Muziris Biennale & K-ARNIVAL",
      region: "Fort Kochi, Kerala",
      status: "SEASON",
      statusColor: "#1DB954",
      description:
        "Kochi-Muziris Biennale — India's largest contemporary art exhibition + K-ARNIVAL K-pop fusion carnival energy.",
      surfacedReason:
        "Kochi's cultural energy this season is being shaped by the Biennale — pulling global creative attention into Fort Kochi, alongside a growing Malayalam-meets-K-pop fusion scene.",
      imageUrl:
        "https://images.unsplash.com/photo-1602211447924-7e9b8b0e8c0e?w=400&h=240&fit=crop",
    },
    fromYourWorld: [
      t("Thakita Thakita", "Thakita", "Malayalam indie already in your fusion rotation"),
      t("Nee Polum Ariyathe", "Thakita", "Café-indie lane you lean toward"),
      t("Puzhayoram", "Thakita", "Coastal folk-pop crossover in your library"),
      t("Mazha", "Thakita", "Monsoon ballad matching your acoustic taste"),
    ],
    trendingLocally: [
      t("Malayalam Indie Wave", "When Chai Met Toast", "Fusion act surging on Kerala playlists"),
      t("Fort Kochi Sessions", "Prithvi Varrier", "Contemporary Malayalam indie climbing charts"),
      t("Backwater Blues", "Sithara Krishnakumar", "Fusion ballad trending in Kochi"),
      t("Monsoon Melody", "Govind Menon", "Jazz-fusion crossover dominating local streams"),
    ],
    discoveredByTravelers: [
      t("K-Pop Kerala", "KYNX", "South India's first K-pop-inspired group taste-twins love"),
      t("Fusion Carnival", "KYNX", "Malayalam-meets-K-pop pick travelers saved at Biennale"),
      t("Fort Kochi Nights", "KYNX", "Crossover anthem from listeners like you"),
      t("K-ARNIVAL Anthem", "KYNX", "Festival energy travelers keep replaying"),
    ],
    hiddenGem: [
      t("Café Circuit", "Fort Kochi Singer-Songwriters", "Hidden café-gig scene under the radar"),
      t("Biennale Breeze", "Fort Kochi Singer-Songwriters", "Acoustic deep cut at art district cafés"),
      t("Spice Route Song", "Fort Kochi Singer-Songwriters", "Indie-folk gem worth the Fort Kochi detour"),
      t("Harbour Lights", "Fort Kochi Singer-Songwriters", "Sleeper hit from the café circuit"),
    ],
  }),
};

export const DOMESTIC_CITY_LIST = Object.values(DOMESTIC_CITIES);

export function getDomesticCity(id) {
  return DOMESTIC_CITIES[id] || null;
}

export function getDomesticCityMeta(id) {
  const city = DOMESTIC_CITIES[id];
  if (!city) return null;
  return {
    id: city.id,
    name: city.name,
    lat: city.lat,
    lng: city.lng,
    type: "domestic",
  };
}

export function getDomesticReasoningSteps(cityId) {
  const city = DOMESTIC_CITIES[cityId];
  const name = city?.name || "your city";

  const custom = DOMESTIC_REASONING_BY_CITY[cityId];
  if (custom) return custom;

  return [
    `Scanning what's trending in ${name} this week...`,
    "Matching tracks to your listening taste...",
    "Curating hidden gems local listeners love...",
    "Finalizing your city tour...",
  ];
}

const DOMESTIC_REASONING_BY_CITY = {
  ahmedabad: [
    "Scanning what's trending in Ahmedabad this week...",
    "Found it — devotional and Garba season is peaking...",
    "Matching tracks to your folk-classical curiosity...",
    "Curating hidden gems local listeners love...",
    "Finalizing your city tour...",
  ],
  mumbai: [
    "Scanning what's trending in Mumbai this week...",
    "Found it — Pier Pop monsoon waterfront festival is live...",
    "Matching tracks to your indie-rock streak...",
    "Curating hidden gems local listeners love...",
    "Finalizing your city tour...",
  ],
  kolkata: [
    "Scanning what's trending in Kolkata this week...",
    "Found it — riverside classical-fusion concerts are building...",
    "Matching tracks to your Bengali rock lean...",
    "Curating hidden gems local listeners love...",
    "Finalizing your city tour...",
  ],
  delhi: [
    "Scanning what's trending in Delhi this week...",
    "Found it — Northeast Music Festival is drawing crowds...",
    "Matching tracks to your rock and folk crossover taste...",
    "Curating hidden gems local listeners love...",
    "Finalizing your city tour...",
  ],
  kochi: [
    "Scanning what's trending in Kochi this week...",
    "Found it — Biennale season is reshaping Fort Kochi's sound...",
    "Matching tracks to your global-local fusion curiosity...",
    "Curating hidden gems local listeners love...",
    "Finalizing your city tour...",
  ],
};
