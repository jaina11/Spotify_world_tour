/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
    "./data/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        "spotify-green": "#1DB954",
        "spotify-green-dark": "#1AA34A",
        "spotify-bg": "#121212",
        "spotify-surface": "#1A1A1A",
        "spotify-card": "#242424",
        "spotify-card-hover": "#2A2A2A",
        "spotify-secondary": "#B3B3B3",
        "spotify-muted": "#6A6A6A",
        "spotify-border": "#333333",
        "spotify-live": "#E8593C",
        "spotify-rising": "#1DB954",
        "spotify-trending": "#F0A030",
        "spotify-coming": "#7B68EE",
        "spotify-ai-bg": "#1A2F1A",
        "spotify-ai-border": "#2D4A2D",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "Roboto",
          "sans-serif",
        ],
      },
      maxWidth: {
        mobile: "430px",
      },
    },
  },
  plugins: [],
};
