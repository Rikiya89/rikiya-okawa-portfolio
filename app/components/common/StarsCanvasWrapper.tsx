"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const StarsCanvas = dynamic(() => import("@/components/jp/main/StarBackground"), {
  ssr: false,
  loading: () => null,
});

type StarsQuality = "off" | "lite" | "full";

const getStarsQuality = (): StarsQuality => {
  if (typeof window === "undefined") return "off";
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return "off";

  const nav = navigator as Navigator & {
    deviceMemory?: number;
    connection?: { saveData?: boolean };
  };

  if (nav.connection?.saveData) return "off";

  const isSmallScreen = window.matchMedia("(max-width: 767px)").matches;
  const isLowEnd =
    (nav.deviceMemory && nav.deviceMemory <= 4) ||
    (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4);

  if (isSmallScreen || isLowEnd) return "lite";
  return "full";
};

export default function StarsCanvasWrapper() {
  const [quality, setQuality] = useState<StarsQuality>("off");
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    const decided = getStarsQuality();
    if (typeof window !== "undefined") {
      const isSmallScreen = window.matchMedia("(max-width: 767px)").matches;
      setShowFallback(isSmallScreen || decided === "off");
    }
    if (decided === "off") return;

    const start = () => setQuality(decided);
    if (typeof window !== "undefined") {
      const win = window as Window & {
        requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
        cancelIdleCallback?: (id: number) => void;
      };

      if (win.requestIdleCallback) {
        const id = win.requestIdleCallback(start, { timeout: 1500 });
        return () => win.cancelIdleCallback?.(id);
      }
    }

    const timer = setTimeout(start, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showFallback ? <div className="starfield-fallback" aria-hidden="true" /> : null}
      {quality === "off" ? null : <StarsCanvas quality={quality} />}
    </>
  );
}
