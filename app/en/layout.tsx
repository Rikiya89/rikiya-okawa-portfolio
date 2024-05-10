import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import StarsCanvas from "@/components/en/main/StarBackground";
import Navbar from "@/components/en/main/Navbar";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rikiya Okawa Portfolio",
  description: "Web developer with over a year of experience, currently advancing skills in React.JS, Next.JS, TypeScript, and GLSL. Engaged in digital content creation using Unity and TouchDesigner, skilled in openframeworks and p5js. Fluent in Japanese, English, and conversational French. Avid about generative art, sacred geometry, and the fusion of music, art, and technology. Aspiring creative technologist.",
  keywords:"大川力也,大川 力也,おおかわ りきや,オオカワ リキヤ,おおかわりきや,オオカワリキヤ,Rikiya Okawa, Ricky Okawa, Ricky O'kawa" 
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />
        <Analytics/>
        <SpeedInsights/>
        {children}
      </body>
    </html>
  );
}