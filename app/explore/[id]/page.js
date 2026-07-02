import { notFound } from "next/navigation";
import CountryPlaylistPage from "@/components/CountryPlaylistPage";
import TourBucketsPage from "@/components/TourBucketsPage";
import { getCountryResult } from "@/data/countries";

export default function CountryResultPage({ params }) {
  const country = getCountryResult(params.id);

  if (!country) {
    notFound();
  }

  if (country.richLayout) {
    return (
      <CountryPlaylistPage
        country={country}
        sections={country.sections}
        playlistMetadata={country.playlistMetadata}
      />
    );
  }

  return (
    <TourBucketsPage
      headerTitle={country.name}
      backHref="/explore"
      pageTitle={`${country.flag} ${country.name}`}
      pageSubtitle="Curated for your taste profile"
      trendingTag={country.trendingTag}
      sections={country.sections}
      playlistMetadata="18 songs, 58 min · Curated for you"
    />
  );
}
