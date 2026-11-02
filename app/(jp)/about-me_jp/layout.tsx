import type { Metadata } from "next";
import Navbar from "@/components/jp/main/Navbar";

export const metadata: Metadata = {
  title: "About | Rikiya Okawa Portfolio",
  description:
    "Webエンジニア 大川力也のプロフィール。サンディエゴでデジタルアートを学び、デジタルハリウッドでUI/UXを修了。HTML/SCSS/JavaScript・Node.jsで、レスポンシブかつパフォーマンスに優れたサイトを制作しています。",
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
