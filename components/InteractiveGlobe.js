"use client";

import dynamic from "next/dynamic";
import { Component, useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import IntroWorldMap from "@/components/IntroWorldMap";

const POINTS = [
  { lat: 35.6762, lng: 139.6503, name: "Tokyo", color: "#7B68EE", size: 0.8 },
  { lat: 48.8566, lng: 2.3522, name: "Paris", color: "#E8593C", size: 0.7 },
  { lat: 40.7128, lng: -74.006, name: "New York", color: "#1DB954", size: 0.8 },
  { lat: 1.3521, lng: 103.8198, name: "Singapore", color: "#F0A030", size: 0.7 },
  { lat: 25.2048, lng: 55.2708, name: "Dubai", color: "#1DB954", size: 0.7 },
];

const ARCS = [
  {
    startLat: 40.71,
    startLng: -74.01,
    endLat: 48.86,
    endLng: 2.35,
    color: "#1DB954",
  },
  {
    startLat: 48.86,
    startLng: 2.35,
    endLat: 25.2,
    endLng: 55.27,
    color: "#E8593C",
  },
  {
    startLat: 25.2,
    startLng: 55.27,
    endLat: 1.35,
    endLng: 103.82,
    color: "#F0A030",
  },
  {
    startLat: 1.35,
    startLng: 103.82,
    endLat: 35.68,
    endLng: 139.65,
    color: "#7B68EE",
  },
];

function GlobeLoading() {
  return (
    <div
      style={{
        width: "100%",
        height: "350px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#6A6A6A",
        fontSize: "13px",
      }}
    >
      Loading globe...
    </div>
  );
}

function GlobeFallback() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <IntroWorldMap />
    </div>
  );
}

const Globe = dynamic(
  () =>
    import("react-globe.gl")
      .then((mod) => (mod.default ? { default: mod.default } : mod))
      .catch((error) => {
        console.error("Failed to load react-globe.gl:", error);
        return { default: GlobeFallback };
      }),
  {
    ssr: false,
    loading: () => <GlobeLoading />,
  }
);

class GlobeErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    console.error("Globe render error:", error);
  }

  render() {
    if (this.state.hasError) {
      return <GlobeFallback />;
    }

    return this.props.children;
  }
}

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
      <GlobeErrorBoundary>
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
          labelsData={POINTS}
          labelText={(point) => point.name}
          labelSize={1.2}
          labelColor={() => "#FFFFFF"}
          labelDotRadius={0.4}
          labelAltitude={0.01}
          labelResolution={2}
          arcsData={ARCS}
          arcColor={(arc) => arc.color}
          arcDashLength={0.4}
          arcDashGap={0.2}
          arcDashAnimateTime={3000}
          arcStroke={0.5}
          onGlobeReady={handleGlobeReady}
        />
      </GlobeErrorBoundary>
    </div>
  );
}
