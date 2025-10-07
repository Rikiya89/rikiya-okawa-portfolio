import type { Metadata } from "next";
import { Inter, Cedarville_Cursive } from "next/font/google";
import "../globals.css";
import dynamic from "next/dynamic";
const StarsCanvas = dynamic(() => import("@/components/aboutme/main/StarBackground"), { ssr: false });
import Navbar from "@/components/clientworks/main/Navbar";

const inter = Inter({ subsets: ["latin"] });
const cedarville = Cedarville_Cursive({ subsets: ["latin"], weight: "400", variable: "--font-cursive" });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: "Rikiya Okawa Portfolio | Client Works JP",
  description:
    "Web developer Rikiya Okawaのクライアントワーク実績。グローバルブランドや国内メーカーのLP制作・運用事例を紹介します。",
  keywords: [
    "大川力也","大川 力也","おおかわ りきや","オオカワ リキヤ",
    "クライアントワーク","LP制作","Web制作","Rikiya Okawa"
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/aid6kcc.css" />
      </head>
      <body className={`${inter.className} ${cedarville.variable} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
        <StarsCanvas />
        <Navbar locale="jp" languageHref="/clientworks" />
        {children}
      </body>
    </html>
  );
}

