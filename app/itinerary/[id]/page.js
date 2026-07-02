import ItineraryScreen from "@/components/ItineraryScreen";

export default function ItineraryPage({ params }) {
  return <ItineraryScreen countryId={params.id} />;
}
