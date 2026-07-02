import TourBucketsPage from "@/components/TourBucketsPage";
import { YOUR_TOUR_SECTIONS } from "@/data/yourTour";

export default function YourTourPage() {
  return (
    <TourBucketsPage
      headerTitle="Your Tour"
      backHref="/hub"
      pageTitle="Your Tour"
      pageSubtitle="Picked from your last 30 days of listening"
      sections={YOUR_TOUR_SECTIONS}
      playlistMetadata="24 songs, 1h 18 min · Updated today"
    />
  );
}
