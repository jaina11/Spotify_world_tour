"use client";

import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

const POINTS = [
  { lat: 20.5937, lng: 78.9629, name: "India", color: "#1DB954", size: 0.8 },
  { lat: 6.5244, lng: 3.3792, name: "Nigeria", color: "#1DB954", size: 0.6 },
  {
    lat: 37.5665,
    lng: 126.978,
    name: "South Korea",
    color: "#7B68EE",
    size: 0.6,
  },
  { lat: 36.2048, lng: 138.2529, name: "Japan", color: "#7B68EE", size: 0.6 },
  {
    lat: 23.6345,
    lng: -102.5528,
    name: "Mexico",
    color: "#F0A030",
    size: 0.5,
  },
  {
    lat: -14.235,
    lng: -51.9253,
    name: "Brazil",
    color: "#E8593C",
    size: 0.5,
  },
];

const ARCS = [
  {
    startLat: 20.59,
    startLng: 78.96,
    endLat: 6.52,
    endLng: 3.38,
    color: "#1DB954",
  },
  {
    startLat: 6.52,
    startLng: 3.38,
    endLat: 37.57,
    endLng: 126.98,
    color: "#7B68EE",
  },
  {
    startLat: 37.57,
    startLng: 126.98,
    endLat: 36.2,
    endLng: 138.25,
    color: "#7B68EE",
  },
  {
    startLat: 36.2,
    startLng: 138.25,
    endLat: 23.63,
    endLng: -102.55,
    color: "#F0A030",
  },
  {
    startLat: 23.63,
    startLng: -102.55,
    endLat: -14.24,
    endLng: -51.93,
    color: "#E8593C",
  },
];

export default function InteractiveGlobe({ width, height }) {
  const router = useRouter();
  const globeRef = useRef();
  const containerRef = useRef(null);
  const [size, setSize] = useState({
    width: width ?? 350,
    height: height ?? 350,
  });

  useEffect(() => {
    if (width !== undefined && height !== undefined) {
      setSize({ width, height });
      return;
    }

    const element = containerRef.current;
    if (!element) return;

    const updateSize = () => {
      const rect = element.getBoundingClientRect();
      setSize({
        width: Math.round(rect.width) || 350,
        height: Math.round(rect.height) || 350,
      });
    };

    updateSize();

    const observer = new ResizeObserver(updateSize);
    observer.observe(element);
    return () => observer.disconnect();
  }, [width, height]);

  const handleGlobeReady = useCallback(() => {
    const controls = globeRef.current?.controls();
    if (!controls) return;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;
  }, []);

  const handlePointClick = useCallback(() => {
    router.push("/hub");
  }, [router]);

  return (
    <div ref={containerRef} className="h-full w-full">
      <Globe
        ref={globeRef}
        width={size.width}
        height={size.height}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
        backgroundColor="rgba(0,0,0,0)"
        atmosphereColor="#1DB954"
        atmosphereAltitude={0.2}
        pointsData={POINTS}
        pointAltitude={0.01}
        pointRadius={(point) => point.size}
        pointColor={(point) => point.color}
        pointLabel={(point) => point.name}
        onPointClick={handlePointClick}
        arcsData={ARCS}
        arcColor={(arc) => arc.color}
        arcDashLength={0.4}
        arcDashGap={0.2}
        arcDashAnimateTime={3000}
        arcStroke={0.5}
        onGlobeReady={handleGlobeReady}
      />
    </div>
  );
}
