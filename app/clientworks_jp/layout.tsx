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
    "Web開発者 大川力也のクライアントワーク実績。グローバル・国内ブランドのシーズンキャンペーン、LP制作、日々のサイト運用を担当。",
  keywords: [
    "大川力也","大川 力也","おおかわ りきや","オオカワ リキヤ",
    "おおかわりきや","オオカワリキヤ","Rikiya Okawa","クライアントワーク","LP制作","Web開発"
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
    <html lang="ja">
      <head>
        {/* Typekit */}
        <link rel="stylesheet" href="https://use.typekit.net/aid6kcc.css" />
      </head>
      <body className={`${inter.className} ${cedarville.variable} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
        <StarsCanvas />
        <Navbar locale="jp" />
        {children}
        {/* Parallel route slot for intercepted modal */}
        {modal}
      </body>
    </html>
  );
}
