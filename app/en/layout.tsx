import type { Metadata } from "next";
import { Inter, Cedarville_Cursive } from "next/font/google";
import "../globals.css";
import dynamic from "next/dynamic";
const StarsCanvas = dynamic(() => import("@/components/jp/main/StarBackground"), { ssr: false });
import Navbar from "@/components/en/main/Navbar";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });
const cedarville = Cedarville_Cursive({ subsets: ["latin"], weight: "400", variable: "--font-cursive" });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: "Rikiya Okawa Portfolio",
  description: "Web developer with over a year of experience, currently advancing skills in React.JS, Next.JS, TypeScript, and GLSL. Engaged in digital content creation using Unity and TouchDesigner, skilled in openframeworks and p5js. Fluent in Japanese, English, and conversational French. Avid about generative art, sacred geometry, and the fusion of music, art, and technology. Aspiring creative technologist.",
  keywords: ["大川力也", "大川 力也", "おおかわ りきや", "オオカワ リキヤ", "おおかわりきや", "オオカワリキヤ", "Rikiya Okawa", "Ricky Okawa", "Ricky O'kawa"],
  links: [
    { rel: 'stylesheet', href: 'https://use.typekit.net/aid6kcc.css' }
  ]
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
      <head>
        {/* Add the Google site verification meta tag here */}
        <meta name="google-site-verification" content="0x6NOOUrWuEeZrK7sjkHwyHAQunhVK59S0oqA4-QHKM" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        {metadata.links.map((link) => (
          <link key={link.href} rel={link.rel} href={link.href} />
        ))}
      </head>
      <body
        className={`${inter.className} ${cedarville.variable} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />
        <Analytics />
        <SpeedInsights />
        {children}
        {modal}
      </body>
    </html>
  );
}
