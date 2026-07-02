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

const BANGALORE = [77.5946, 12.9716];
const PLANE_ICON =
  "M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z";

function FlightArc({ from, to }) {
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
      id="itinerary-flight-path"
      d={d}
      fill="none"
      stroke="#1DB954"
      strokeWidth={1.75}
      strokeDasharray="4 6"
      strokeLinecap="round"
      className="intro-flight-path"
      opacity={0.65}
    />
  );
}

function FlightPlane({ flightDurationSec }) {
  return (
    <g className="intro-plane" opacity={0.8}>
      <g transform="translate(-10, -10)">
        <animateMotion
          dur={`${flightDurationSec}s`}
          repeatCount="indefinite"
          rotate="auto"
        >
          <mpath href="#itinerary-flight-path" />
        </animateMotion>
        <path d={PLANE_ICON} fill="white" transform="scale(0.42)" />
      </g>
    </g>
  );
}

function Endpoint({ coordinates, label, align = "start" }) {
  const { projection } = useMapContext();
  const point = projection(coordinates);
  if (!point) return null;

  const [x, y] = point;

  return (
    <g>
      <circle cx={x} cy={y} r={4} fill="#1DB954" className="marker-pulse" />
      <text
        x={x + (align === "end" ? -10 : 10)}
        y={y - 10}
        textAnchor={align}
        className="fill-white text-[11px] font-bold"
      >
        {label}
      </text>
    </g>
  );
}

export default function ItineraryFlightMap({
  destinationLng,
  destinationLat,
  destinationName,
  flightDurationSec = 4.5,
}) {
  const destination = [destinationLng, destinationLat];

  return (
    <ComposableMap
      projection="geoEqualEarth"
      projectionConfig={{ scale: 145, center: [20, 10] }}
      width={800}
      height={360}
      className="h-full w-full"
      style={{ width: "100%", height: "100%" }}
    >
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

      <FlightArc from={BANGALORE} to={destination} />
      <FlightPlane flightDurationSec={flightDurationSec} />
      <Endpoint coordinates={BANGALORE} label="Bangalore" align="end" />
      <Endpoint coordinates={destination} label={destinationName} />
    </ComposableMap>
  );
}
