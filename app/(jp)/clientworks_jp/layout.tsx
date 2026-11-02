import type { Metadata } from "next";
import Navbar from "@/components/jp/main/Navbar";

// Client work sits behind Basic Auth in middleware.ts; keep these pages out of static/CDN caching.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
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
    <div lang="ja">
      <Navbar />
      {children}
      {/* Parallel route slot for intercepted modal */}
      {modal}
    </div>
  );
}
