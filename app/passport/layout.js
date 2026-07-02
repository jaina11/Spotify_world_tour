"use client";

import { useEffect } from "react";
import { markPassportVisited } from "@/data/passport";

export default function PassportLayout({ children }) {
  useEffect(() => {
    markPassportVisited();
  }, []);

  return children;
}
