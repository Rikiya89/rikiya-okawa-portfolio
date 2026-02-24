import type { Metadata } from "next";
import StarsCanvas from "@/components/common/StarsCanvasWrapper";
import Navbar from "@/components/en/main/Navbar";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: "Rikiya Okawa Portfolio",
  description: "Web developer with over a year of experience, currently advancing skills in React.JS, Next.JS, TypeScript, and GLSL. Engaged in digital content creation using Unity and TouchDesigner, skilled in openframeworks and p5js. Fluent in Japanese, English, and conversational French. Avid about generative art, sacred geometry, and the fusion of music, art, and technology. Aspiring creative technologist.",
  keywords: ["大川力也", "大川 力也", "おおかわ りきや", "オオカワ リキヤ", "おおかわりきや", "オオカワリキヤ", "Rikiya Okawa", "Ricky Okawa", "Ricky O'kawa"],
  other: {
    "google-site-verification": "0x6NOOUrWuEeZrK7sjkHwyHAQunhVK59S0oqA4-QHKM",
  },
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div lang="en">
      <StarsCanvas />
      <Navbar />
      <Analytics />
      <SpeedInsights />
      {children}
      {modal}
    </div>
  );
}
