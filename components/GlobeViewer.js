"use client";

import dynamic from "next/dynamic";

const GlobeGL = dynamic(() => import("@/components/GlobeGL"), { ssr: false });

export default function GlobeViewer(props) {
  return <GlobeGL {...props} />;
}
