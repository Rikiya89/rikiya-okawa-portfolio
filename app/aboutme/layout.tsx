import type { Metadata } from "next";
import { Inter, Cedarville_Cursive } from "next/font/google";
import "../globals.css";
import dynamic from "next/dynamic";
const StarsCanvas = dynamic(() => import("@/components/aboutme/main/StarBackground"), { ssr: false });
import Navbar from "@/components/aboutme/main/Navbar";

const inter = Inter({ subsets: ["latin"] });
const cedarville = Cedarville_Cursive({ subsets: ["latin"], weight: "400", variable: "--font-cursive" });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: "Rikiya Okawa Portfolio",
  description: "Web developer with over a year of experience, currently advancing skills in React.JS, Next.JS, TypeScript, and GLSL. Engaged in digital content creation using Unity and TouchDesigner, skilled in openframeworks and p5js. Fluent in Japanese, English, and conversational French. Avid about generative art, sacred geometry, and the fusion of music, art, and technology. Aspiring creative technologist.",
  keywords: ["大川力也", "大川 力也", "おおかわ りきや", "オオカワ リキヤ", "おおかわりきや", "オオカワリキヤ", "Rikiya Okawa", "Ricky Okawa", "Ricky O'kawa"]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/aid6kcc.css" />
      </head>
      <body
        className={`${inter.className} ${cedarville.variable} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
