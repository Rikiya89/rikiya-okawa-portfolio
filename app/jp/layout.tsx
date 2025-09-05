import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import dynamic from "next/dynamic";
const StarsCanvas = dynamic(() => import("@/components/jp/main/StarBackground"), { ssr: false });
import Navbar from "@/components/jp/main/Navbar";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rikiya Okawa Portfolio",
  description: "ウェブ開発で1年以上経験を積んでいて、今はReact.JS、Next.JS、TypeScript、GLSLのスキルをどんどん伸ばしているところです。UnityやTouchDesignerを使ってデジタルコンテンツ制作にも携わっていて、openFrameworksやp5.jsも得意です。ジェネラティブアートや神聖幾何学、音楽とアートとテクノロジーの融合みたいなものにすごく興味があって、 クリエイティブテクノロジストを目指して日々研鑽しています。",
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
    <html lang="jp">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />
        <Analytics/>
        <SpeedInsights/>
        {children}
        {modal}
      </body>
    </html>
  );
}
