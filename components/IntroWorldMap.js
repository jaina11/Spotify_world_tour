"use client";

import { useMemo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  useMapContext,
} from "react-simple-maps";
import { geoInterpolate } from "d3-geo";

const TOPO_URL =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const ROUTES = [
  {
    id: "route-mumbai-tokyo",
    from: [72.8777, 19.076],
    to: [139.6917, 35.6895],
    stroke: "#1DB954",
    pathClass: "intro-flight-path",
    planeDelay: 0,
    planeDuration: 8,
    planeClass: "intro-plane intro-plane-1",
  },
  {
    id: "route-london-lagos",
    from: [-0.1276, 51.5074],
    to: [3.3792, 6.5244],
    stroke: "#B3B3B3",
    pathClass: "intro-flight-path intro-flight-path-delayed",
    planeDelay: 2,
    planeDuration: 7,
    planeClass: "intro-plane intro-plane-2",
  },
  {
    id: "route-nyc-sydney",
    from: [-74.006, 40.7128],
    to: [151.2093, -33.8688],
    stroke: "#1DB954",
    pathClass: "intro-flight-path intro-flight-path-slow",
    planeDelay: 4,
    planeDuration: 9,
    planeClass: "intro-plane intro-plane-3",
  },
];

const PLANE_ICON =
  "M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z";

function FlightArc({ id, from, to, stroke, className }) {
  const { path } = useMapContext();

  const d = useMemo(() => {
    const interpolate = geoInterpolate(from, to);
    const coordinates = Array.from({ length: 80 }, (_, i) =>
      interpolate(i / 79)
    );
    return path({ type: "LineString", coordinates });
  }, [from, to, path]);

  return (
    <path
      id={id}
      d={d}
      fill="none"
      stroke={stroke}
      strokeWidth={1.5}
      strokeDasharray="4 6"
      strokeLinecap="round"
      className={className}
      opacity={0.5}
    />
  );
}

function FlightPlane({ pathId, delay, duration, className = "intro-plane" }) {
  return (
    <g className={className} opacity={0.55}>
      <g transform="translate(-10, -10)">
        <animateMotion
          dur={`${duration}s`}
          begin={`${delay}s`}
          repeatCount="indefinite"
          rotate="auto"
        >
          <mpath href={`#${pathId}`} />
        </animateMotion>
        <path d={PLANE_ICON} fill="white" transform="scale(0.4)" />
      </g>
    </g>
  );
}

function MapLayers() {
  return (
    <>
      <Geographies geography={TOPO_URL}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="rgba(29, 185, 84, 0.05)"
              stroke="rgba(179, 179, 179, 0.18)"
              strokeWidth={0.35}
              style={{
                default: { outline: "none" },
                hover: { outline: "none" },
                pressed: { outline: "none" },
              }}
            />
          ))
        }
      </Geographies>

      {ROUTES.map((route) => (
        <FlightArc
          key={route.id}
          id={route.id}
          from={route.from}
          to={route.to}
          stroke={route.stroke}
          className={route.pathClass}
        />
      ))}

      {ROUTES.map((route) => (
        <FlightPlane
          key={`plane-${route.id}`}
          pathId={route.id}
          delay={route.planeDelay}
          duration={route.planeDuration}
          className={route.planeClass}
        />
      ))}
    </>
  );
}

export default function IntroWorldMap() {
  return (
    <ComposableMap
      projection="geoEqualEarth"
      projectionConfig={{ scale: 155, center: [10, 5] }}
      width={800}
      height={420}
      className="h-full w-full"
      style={{ width: "100%", height: "100%" }}
    >
      <MapLayers />
    </ComposableMap>
  );
}
