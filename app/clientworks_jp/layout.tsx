import type { Metadata } from "next";
import "../globals.css";
import StarsCanvas from "@/components/common/StarsCanvasWrapper";
import Navbar from "@/components/clientworks/main/Navbar";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: "Rikiya Okawa Portfolio | Client Works JP",
  description:
    "Web開発者 大川力也のクライアントワーク実績。グローバル・国内ブランドのシーズンキャンペーン、LP制作、日々のサイト運用を担当。",
  keywords: [
    "大川力也", "大川 力也", "おおかわ りきや", "オオカワ リキヤ",
    "おおかわりきや", "オオカワリキヤ", "Rikiya Okawa", "クライアントワーク", "LP制作", "Web開発"
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
      <body
        className="bg-[#030014] overflow-y-scroll overflow-x-hidden"
        suppressHydrationWarning
      >
        <StarsCanvas />
        <Navbar locale="jp" />
        {children}
        {/* Parallel route slot for intercepted modal */}
        {modal}
      </body>
    </html>
  );
}
