"use client";

const CITIES = [
  { name: "India", cx: 62, cy: 45 },
  { name: "Nigeria", cx: 48, cy: 52 },
  { name: "South Korea", cx: 78, cy: 35 },
  { name: "Japan", cx: 82, cy: 33 },
  { name: "Mexico", cx: 20, cy: 42 },
  { name: "Brazil", cx: 30, cy: 60 },
];

const FLIGHT_PATH =
  "M 62 45 C 55 48 52 50 48 52 C 58 42 68 38 78 35 C 80 34 81 33 82 33 C 55 30 35 35 20 42 C 22 50 26 55 30 60";

export default function IntroWorldMap() {
  return (
    <svg
      viewBox="0 0 100 100"
      className="h-full w-full"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <path
        d="M 8 28 Q 5 40 8 52 Q 12 58 18 55 Q 24 48 22 38 Q 20 30 8 28 Z"
        fill="#1DB954"
        opacity="0.06"
      />
      <path
        d="M 26 58 Q 22 65 24 72 Q 28 76 32 72 Q 34 65 30 58 Q 28 55 26 58 Z"
        fill="#1DB954"
        opacity="0.06"
      />
      <path
        d="M 44 32 Q 40 45 42 58 Q 48 68 52 62 Q 54 48 50 35 Q 47 30 44 32 Z"
        fill="#1DB954"
        opacity="0.06"
      />
      <path
        d="M 62 28 Q 70 25 82 30 Q 88 38 85 48 Q 78 52 68 45 Q 62 38 62 28 Z"
        fill="#1DB954"
        opacity="0.06"
      />
      <path
        d="M 76 70 Q 74 74 78 76 Q 84 75 86 72 Q 82 68 76 70 Z"
        fill="#1DB954"
        opacity="0.06"
      />

      <path
        id="intro-flight-route"
        d={FLIGHT_PATH}
        fill="none"
        stroke="#1DB954"
        strokeWidth="0.4"
        opacity="0.2"
        strokeDasharray="2 1"
        className="intro-map-flight-path"
      />

      {CITIES.map((city) => (
        <g key={city.name}>
          <circle
            cx={city.cx}
            cy={city.cy}
            r="1.5"
            fill="#1DB954"
            opacity="0.1"
            className="marker-pulse"
          />
          <circle
            cx={city.cx}
            cy={city.cy}
            r="0.75"
            fill="#1DB954"
            opacity="0.3"
          />
        </g>
      ))}

      <g opacity="0.25">
        <animateMotion
          dur="20s"
          repeatCount="indefinite"
          rotate="auto"
        >
          <mpath href="#intro-flight-route" />
        </animateMotion>
        <path d="M -1 -0.6 L 1.2 0 L -1 0.6 Z" fill="#1DB954" />
      </g>
    </svg>
  );
}
