const STOPS = [
  { name: "India", x: 288, y: 92 },
  { name: "Nigeria", x: 192, y: 106 },
  { name: "S.Korea", x: 328, y: 77 },
  { name: "Japan", x: 348, y: 70 },
  { name: "Mexico", x: 88, y: 84 },
  { name: "Brazil", x: 128, y: 158 },
];

const FLIGHT_PATH =
  "M 288 92 C 248 98 220 102 192 106 C 248 88 290 78 328 77 C 338 74 344 72 348 70 C 280 55 180 62 88 84 C 102 118 115 142 128 158";

function WorldMapLayer() {
  return (
    <>
      <path
        d="M 28 35 Q 18 70 22 110 Q 28 155 48 168 Q 72 178 88 155 Q 98 125 92 85 Q 82 48 58 32 Q 42 24 28 35 Z"
        fill="white"
        className="opacity-[0.05]"
      />
      <path
        d="M 155 42 Q 148 65 152 95 Q 158 130 168 165 Q 178 185 192 175 Q 205 155 200 120 Q 195 80 188 55 Q 180 38 165 42 Z"
        fill="white"
        className="opacity-[0.05]"
      />
      <path
        d="M 210 38 Q 245 32 285 40 Q 325 48 355 55 Q 375 62 382 75 Q 388 90 378 105 Q 360 115 330 108 Q 295 98 265 88 Q 235 78 215 65 Q 200 52 210 38 Z"
        fill="white"
        className="opacity-[0.05]"
      />
      <path
        d="M 248 145 Q 275 138 305 142 Q 330 148 342 158 Q 348 168 335 175 Q 318 180 295 175 Q 268 168 252 158 Q 242 150 248 145 Z"
        fill="white"
        className="opacity-[0.05]"
      />
      <path
        d="M 118 72 Q 135 68 155 72 Q 172 78 180 92 Q 175 108 158 115 Q 138 120 122 110 Q 110 98 112 82 Q 114 75 118 72 Z"
        fill="white"
        className="opacity-[0.05]"
      />
    </>
  );
}

export default function IntroWorldMap() {
  return (
    <svg
      viewBox="0 0 400 200"
      className="h-full w-full"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <WorldMapLayer />

      <path
        d={FLIGHT_PATH}
        fill="none"
        stroke="#1DB954"
        strokeWidth="1"
        strokeDasharray="6 4"
        className="opacity-[0.12]"
      />

      {STOPS.map((stop) => (
        <circle
          key={stop.name}
          cx={stop.x}
          cy={stop.y}
          r="2"
          fill="#1DB954"
          className="opacity-60"
        />
      ))}
    </svg>
  );
}
