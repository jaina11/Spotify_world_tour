import "./globals.css";

export const metadata = {
  title: "World Tour — Spotify Feature Prototype",
  description:
    "AI-powered music discovery that connects you to cultures through your listening behavior",
  openGraph: {
    title: "World Tour — Spotify Feature Prototype",
    description:
      "AI-powered music discovery that connects you to cultures through your listening behavior",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
