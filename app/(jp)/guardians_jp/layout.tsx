import type { Metadata } from "next";
import Navbar from "@/components/jp/main/Navbar";

export const metadata: Metadata = {
  title: "Guardians of the Moon | Rikiya Okawa Portfolio",
  description:
    "GUARDIANS OF THE MOON：Unity製VRシューティングとTouchDesignerインスタレーションを組み合わせた卒業制作。Unity（C#）で小惑星の生成、レイキャスト射撃、スコア管理、XRハプティクスを実装しました。",
  keywords: ["大川力也", "大川 力也", "おおかわ りきや", "オオカワ リキヤ", "おおかわりきや", "オオカワリキヤ", "Rikiya Okawa", "Ricky Okawa", "Ricky O'kawa"]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div lang="ja">
      <Navbar />
      {children}
    </div>
  );
}
