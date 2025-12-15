import type { Metadata } from "next";
import "../globals.css";
import StarsCanvas from "@/components/common/StarsCanvasWrapper";
import Navbar from "@/components/clientworks/main/Navbar";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: "Rikiya Okawa Portfolio",
  description:
    "Web developer with over a year of experience, currently advancing skills in React.JS, Next.JS, TypeScript, and GLSL. Engaged in digital content creation using Unity and TouchDesigner, skilled in openframeworks and p5js. Fluent in Japanese, English, and conversational French. Avid about generative art, sacred geometry, and the fusion of music, art, and technology. Aspiring creative technologist.",
  keywords: [
    "大川力也", "大川 力也", "おおかわ りきや", "オオカワ リキヤ",
    "おおかわりきや", "オオカワリキヤ", "Rikiya Okawa", "Ricky Okawa", "Ricky O'kawa"
  ],
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="bg-[#030014] overflow-y-scroll overflow-x-hidden"
        suppressHydrationWarning
      >
        <StarsCanvas />
        <Navbar />
        {children}
        {/* Parallel route slot for intercepted modal */}
        {modal}
      </body>
    </html>
  );
}
