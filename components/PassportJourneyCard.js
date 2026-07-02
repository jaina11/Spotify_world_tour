function WorldMapLayer() {
  return (
    <>
      <path
        d="M 28 35 Q 18 70 22 110 Q 28 155 48 168 Q 72 178 88 155 Q 98 125 92 85 Q 82 48 58 32 Q 42 24 28 35 Z"
        fill="white"
        opacity="0.04"
      />
      <path
        d="M 155 42 Q 148 65 152 95 Q 158 130 168 165 Q 178 185 192 175 Q 205 155 200 120 Q 195 80 188 55 Q 180 38 165 42 Z"
        fill="white"
        opacity="0.04"
      />
      <path
        d="M 210 38 Q 245 32 285 40 Q 325 48 355 55 Q 375 62 382 75 Q 388 90 378 105 Q 360 115 330 108 Q 295 98 265 88 Q 235 78 215 65 Q 200 52 210 38 Z"
        fill="white"
        opacity="0.04"
      />
      <path
        d="M 248 145 Q 275 138 305 142 Q 330 148 342 158 Q 348 168 335 175 Q 318 180 295 175 Q 268 168 252 158 Q 242 150 248 145 Z"
        fill="white"
        opacity="0.04"
      />
      <path
        d="M 118 72 Q 135 68 155 72 Q 172 78 180 92 Q 175 108 158 115 Q 138 120 122 110 Q 110 98 112 82 Q 114 75 118 72 Z"
        fill="white"
        opacity="0.04"
      />
    </>
  );
}

export default function PassportJourneyCard({
  kmTraveled,
  countries,
  languages,
  stops = [],
  flightPaths = [],
  genreSummary = "",
}) {
  const hasJourney = stops.length > 1;

  return (
    <div
      className="relative overflow-hidden rounded-2xl"
      style={{
        background:
          "linear-gradient(135deg, #0A1A2F 0%, #0D1117 50%, #0A2F1A 100%)",
      }}
    >
      <div className="relative h-[220px] w-full">
        {hasJourney ? (
          <svg
            viewBox="0 0 400 200"
            className="absolute inset-0 h-full w-full"
            aria-label={`Musical journey from Bangalore across ${countries} countries`}
            preserveAspectRatio="xMidYMid slice"
          >
            <WorldMapLayer />

            {flightPaths.map((path, index) => (
              <path
                key={`flight-${index}`}
                d={path}
                fill="none"
                stroke="#1DB954"
                strokeWidth="1.5"
                strokeDasharray="6 4"
                opacity="0.5"
                className="flight-path-flow"
              />
            ))}

            {stops.map((stop) => (
              <g key={stop.id}>
                {stop.isOrigin && (
                  <circle
                    cx={stop.x}
                    cy={stop.y}
                    r="12"
                    fill="#1DB954"
                    opacity="0.2"
                    className="marker-pulse"
                  />
                )}
                <circle
                  cx={stop.x}
                  cy={stop.y}
                  r="6"
                  fill="#1DB954"
                  opacity="0.2"
                />
                <circle cx={stop.x} cy={stop.y} r="3" fill="#1DB954" />
                <text
                  x={stop.x}
                  y={stop.y - 14}
                  textAnchor="middle"
                  fontSize="14"
                >
                  {stop.flag}
                </text>
                <text
                  x={stop.x}
                  y={stop.y + 20}
                  textAnchor="middle"
                  fill="rgba(255,255,255,0.5)"
                  fontSize="8"
                  fontWeight="500"
                >
                  {stop.name}
                </text>
              </g>
            ))}
          </svg>
        ) : (
          <div className="flex h-full items-center justify-center px-6 text-center">
            <p className="text-sm text-white/40">
              Unlock a country to trace your first route from Bangalore.
            </p>
          </div>
        )}

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0A1A2F] to-transparent" />
      </div>

      <div className="relative px-5 pb-5 pt-2 text-center">
        <p className="text-2xl font-black text-spotify-green">
          {kmTraveled.toLocaleString()} beats across borders
        </p>
        <p className="mt-1.5 text-[11px] text-white/30">
          {countries} {countries === 1 ? "culture" : "cultures"} · {languages}{" "}
          {languages === 1 ? "language" : "languages"} · 1 playlist
        </p>
        {genreSummary && (
          <p className="mt-1 text-[11px] italic text-white/20">{genreSummary}</p>
        )}
      </div>
    </div>
  );
}
