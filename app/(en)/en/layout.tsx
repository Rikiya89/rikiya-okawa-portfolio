import type { Metadata } from "next";
import Navbar from "@/components/en/main/Navbar";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const title = "Rikiya Okawa — Creative Developer";
const description = "Creative developer working across Next.js, TypeScript, WebGL/GLSL, p5.js and TouchDesigner — generative systems, interactive prototypes and production front-end. Japanese / English.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/en",
    languages: { en: "/en", ja: "/jp" },
  },
  openGraph: {
    title,
    description,
    url: "/en",
    siteName: "Rikiya Okawa Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
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
      <Navbar />
      <Analytics />
      <SpeedInsights />
      {children}
      {modal}
    </div>
  );
}
