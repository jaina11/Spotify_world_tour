"use client";

import dynamic from "next/dynamic";

const IndiaMap = dynamic(() => import("@/components/IndiaMap"), { ssr: false });

export default function IndiaMapViewer(props) {
  return <IndiaMap {...props} />;
}
