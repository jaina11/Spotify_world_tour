"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Globe from "react-globe.gl";
import { CURRENT_LOCATION } from "@/data/globe";

const GLOBE_TEXTURE =
  "https://unpkg.com/three-globe/example/img/earth-night.jpg";

/** Altitude in globe-radii; ~2.8 keeps the full sphere visible as a planet silhouette */
const DEFAULT_POINT_OF_VIEW = { lat: 12, lng: 18, altitude: 2.85 };

export default function GlobeGL({
  markers,
  selectedIds = [],
  onToggleDestination,
  className = "",
}) {
  const globeRef = useRef(null);
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isReady, setIsReady] = useState(false);

  const globePoints = useMemo(
    () => [CURRENT_LOCATION, ...markers],
    [markers]
  );

  const selectedMarkers = useMemo(
    () => markers.filter((marker) => selectedIds.includes(marker.id)),
    [markers, selectedIds]
  );

  const updateDimensions = useCallback(() => {
    if (!containerRef.current) return;
    const { width, height } = containerRef.current.getBoundingClientRect();
    setDimensions({ width: Math.round(width), height: Math.round(height) });
  }, []);

  const handleGlobeReady = useCallback(() => {
    const globe = globeRef.current;
    if (!globe) return;

    globe.pointOfView(DEFAULT_POINT_OF_VIEW, 0);

    const controls = globe.controls();
    if (controls) {
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.4;
      controls.enableZoom = true;
    }

    setIsReady(true);
  }, []);

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [updateDimensions]);

  useEffect(() => {
    if (!isReady || !globeRef.current) return;
    globeRef.current.pointOfView(DEFAULT_POINT_OF_VIEW, 0);
  }, [isReady, dimensions]);

  return (
    <div
      ref={containerRef}
      data-marker-count={markers.length}
      className={`relative w-full overflow-hidden bg-black ${className}`}
    >
      {dimensions.width > 0 && (
        <Globe
          ref={globeRef}
          width={dimensions.width}
          height={dimensions.height}
          onGlobeReady={handleGlobeReady}
          globeImageUrl={GLOBE_TEXTURE}
          backgroundColor="rgba(0,0,0,0)"
          atmosphereColor="#1DB954"
          atmosphereAltitude={0.12}
          pointsData={globePoints}
          pointLat="lat"
          pointLng="lng"
          pointColor={(point) => {
            if (point.type === "current") return "rgba(59, 130, 246, 1)";
            if (selectedIds.includes(point.id)) return "rgba(30, 215, 96, 1)";
            return "rgba(29, 185, 84, 0.95)";
          }}
          pointRadius={(point) => {
            if (point.type === "current") return 0.55;
            if (selectedIds.includes(point.id)) return 0.95;
            return 0.75;
          }}
          pointAltitude={(point) => (point.type === "current" ? 0.05 : 0.04)}
          pointResolution={12}
          onPointClick={(point) => {
            if (point.type === "current") return;
            const controls = globeRef.current?.controls();
            if (controls) controls.autoRotate = false;
            onToggleDestination(point);
          }}
          ringsData={[CURRENT_LOCATION, ...selectedMarkers]}
          ringLat="lat"
          ringLng="lng"
          ringColor={(point) =>
            point.type === "current"
              ? "rgba(59, 130, 246, 0.65)"
              : "rgba(29, 185, 84, 0.55)"
          }
          ringMaxRadius={(point) => (point.type === "current" ? 2.2 : 2.8)}
          ringPropagationSpeed={2.5}
          ringRepeatPeriod={(point) => (point.type === "current" ? 1200 : 1400)}
        />
      )}
    </div>
  );
}
