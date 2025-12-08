"use client";

import React from "react";
import dynamic from "next/dynamic";

const StarsCanvas = dynamic(() => import("@/components/jp/main/StarBackground"), {
  ssr: false,
  loading: () => null
});

export default function StarsCanvasWrapper() {
  return <StarsCanvas />;
}
