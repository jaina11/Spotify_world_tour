import { Suspense } from "react";
import LoadingScreen from "@/components/LoadingScreen";

export default function LoadingPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-black" aria-label="Loading itinerary" />
      }
    >
      <LoadingScreen />
    </Suspense>
  );
}
