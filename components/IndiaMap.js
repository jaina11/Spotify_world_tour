"use client";

import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { CURRENT_LOCATION } from "@/data/globe";
import { DOMESTIC_CITY_LIST } from "@/data/domesticCities";

const INDIA_STATES_URL =
  "https://cdn.jsdelivr.net/gh/udit-001/india-maps-data@main/topojson/india.json";

function CityMarker({ city, isSelected, onToggle }) {
  return (
    <Marker coordinates={[city.lng, city.lat]}>
      <g
        className="cursor-pointer"
        onClick={() => onToggle(city)}
        role="button"
        tabIndex={0}
        aria-label={`${city.name}${isSelected ? " selected" : ""}`}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            onToggle(city);
          }
        }}
      >
        <circle r={16} fill="transparent" />
        {isSelected && (
          <circle
            r={14}
            fill="rgba(29, 185, 84, 0.2)"
            stroke="rgba(29, 185, 84, 0.55)"
            strokeWidth={1.5}
            className="marker-pulse"
          />
        )}
        <circle
          r={isSelected ? 6.5 : 5}
          fill={isSelected ? "#1ED760" : "rgba(29, 185, 84, 0.95)"}
          stroke={isSelected ? "#1ED760" : "rgba(29, 185, 84, 0.6)"}
          strokeWidth={1}
        />
        <text
          textAnchor="middle"
          y={-12}
          className="fill-white text-[9px] font-bold"
          style={{ pointerEvents: "none" }}
        >
          {city.name}
        </text>
      </g>
    </Marker>
  );
}

export default function IndiaMap({
  selectedCityId,
  onToggleCity,
  className = "",
}) {
  return (
    <div
      className={`relative w-full overflow-hidden bg-black ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(29,185,84,0.14),transparent_60%)]" />
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ center: [82, 22.5], scale: 720 }}
        width={430}
        height={360}
        className="h-full w-full"
        style={{ width: "100%", height: "100%" }}
      >
        <Geographies geography={`${INDIA_STATES_URL}#states`}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="rgba(29, 185, 84, 0.05)"
                stroke="rgba(179, 179, 179, 0.22)"
                strokeWidth={0.4}
                style={{
                  default: { outline: "none", pointerEvents: "none" },
                  hover: { outline: "none", pointerEvents: "none" },
                  pressed: { outline: "none", pointerEvents: "none" },
                }}
              />
            ))
          }
        </Geographies>

        <Marker coordinates={[CURRENT_LOCATION.lng, CURRENT_LOCATION.lat]}>
          <circle
            r={4.5}
            fill="rgba(59, 130, 246, 0.95)"
            stroke="rgba(59, 130, 246, 0.5)"
            strokeWidth={1}
          />
        </Marker>

        {DOMESTIC_CITY_LIST.map((city) => (
          <CityMarker
            key={city.id}
            city={city}
            isSelected={selectedCityId === city.id}
            onToggle={onToggleCity}
          />
        ))}
      </ComposableMap>
    </div>
  );
}
