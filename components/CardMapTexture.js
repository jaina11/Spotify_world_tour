export default function CardMapTexture({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 200"
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <path
        d="M 28 35 Q 18 70 22 110 Q 28 155 48 168 Q 72 178 88 155 Q 98 125 92 85 Q 82 48 58 32 Q 42 24 28 35 Z"
        stroke="white"
        strokeWidth="0.75"
        opacity="0.07"
      />
      <path
        d="M 155 42 Q 148 65 152 95 Q 158 130 168 165 Q 178 185 192 175 Q 205 155 200 120 Q 195 80 188 55 Q 180 38 165 42 Z"
        stroke="white"
        strokeWidth="0.75"
        opacity="0.06"
      />
      <path
        d="M 210 38 Q 245 32 285 40 Q 325 48 355 55 Q 375 62 382 75 Q 388 90 378 105 Q 360 115 330 108 Q 295 98 265 88 Q 235 78 215 65 Q 200 52 210 38 Z"
        stroke="white"
        strokeWidth="0.75"
        opacity="0.07"
      />
      <path
        d="M 248 145 Q 275 138 305 142 Q 330 148 342 158 Q 348 168 335 175 Q 318 180 295 175 Q 268 168 252 158 Q 242 150 248 145 Z"
        stroke="white"
        strokeWidth="0.75"
        opacity="0.06"
      />
      <path
        d="M 60 95 C 120 55 180 70 240 50 C 300 35 340 60 360 75"
        stroke="white"
        strokeWidth="0.5"
        strokeDasharray="3 5"
        opacity="0.05"
      />
      <path
        d="M 40 130 C 100 100 160 120 220 90 C 280 65 320 85 370 70"
        stroke="white"
        strokeWidth="0.5"
        strokeDasharray="3 5"
        opacity="0.04"
      />
    </svg>
  );
}
