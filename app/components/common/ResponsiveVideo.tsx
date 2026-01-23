"use client";

import { useEffect, useState } from "react";

type ResponsiveVideoProps = {
  src: string;
  className?: string;
  minWidth?: number;
  type?: string;
};

export default function ResponsiveVideo({
  src,
  className,
  minWidth = 768,
  type = "video/webm",
}: ResponsiveVideoProps) {
  // Avoid SSR/client mismatch by deferring media query check to the client.
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const query = `(min-width: ${minWidth}px)`;
    const media = window.matchMedia(query);
    const handleChange = () => setEnabled(media.matches);
    handleChange();
    if (media.addEventListener) {
      media.addEventListener("change", handleChange);
    } else {
      media.addListener(handleChange);
    }
    return () => {
      if (media.removeEventListener) {
        media.removeEventListener("change", handleChange);
      } else {
        media.removeListener(handleChange);
      }
    };
  }, [minWidth]);

  if (!enabled) return null;

  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="none"
      aria-hidden="true"
      className={className}
    >
      <source src={src} type={type} />
    </video>
  );
}
