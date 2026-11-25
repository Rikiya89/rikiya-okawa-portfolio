import type { Metadata } from "next";
import Navbar from "@/components/jp/main/Navbar";

const title = "プロフィール | 大川力也 (Rikiya Okawa)";
const description =
  "Webエンジニア 大川力也のプロフィール。サンディエゴでデジタルアートを学び、デジタルハリウッドでUI/UXを修了。HTML/SCSS/JavaScript・Node.jsで、レスポンシブかつパフォーマンスに優れたサイトを制作しています。";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/about-me_jp",
    languages: { en: "/aboutme", ja: "/about-me_jp" },
  },
  openGraph: {
    title,
    description,
    url: "/about-me_jp",
    siteName: "大川力也 Rikiya Okawa Portfolio",
    locale: "ja_JP",
    type: "profile",
  },
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
