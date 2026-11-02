import type { Metadata } from "next";
import Navbar from "@/components/jp/main/Navbar";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const title = "Rikiya Okawa Portfolio";
const description = "フロントエンドエンジニア 大川力也のポートフォリオ。グローバルブランドから国内メーカーまでのサイト運用・改善・LP制作と、Next.js/TypeScript・GLSLによる個人制作を掲載しています。";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/jp",
    languages: { en: "/en", ja: "/jp" },
  },
  openGraph: {
    title,
    description,
    url: "/jp",
    siteName: "Rikiya Okawa Portfolio",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  keywords: ["大川力也", "大川 力也", "おおかわ りきや", "オオカワ リキヤ", "おおかわりきや", "オオカワリキヤ", "Rikiya Okawa", "Ricky Okawa", "Ricky O'kawa"]
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div lang="ja">
      <Navbar />
      <Analytics />
      <SpeedInsights />
      {children}
      {modal}
    </div>
  );
}
