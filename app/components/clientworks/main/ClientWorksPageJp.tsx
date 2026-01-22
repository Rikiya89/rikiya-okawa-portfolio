"use client";

import { ComponentType, useEffect } from "react";
import ClientWorksHeroJp from "./ClientWorksHeroJp";
import ClientWorksSkills from "./ClientWorksSkills";
import ClientProjectsList, { ClientProjectCard } from "./ClientProjectsList";
import Footer from "./Footer";

const JP_CLIENT_PROJECTS: ClientProjectCard[] = [
  {
    src: "/img/udemy-business.webp",
    title: "Udemy Interview メディアサイト",
    description:
      "WordPressでインタビュー一覧/詳細を構築し、\nACF＋複数タクソノミー絞り込みとフリーワード検索を実装。",
    url: "https://www.udemybusiness.com/",
    slug: "udemy-business",
  },
  {
    src: "/img/timberland.webp",
    title: "Timberland公式サイト",
    description:
      "Timberland Japanのサイト運用を担当。\n約3日でキャンペーンLPを制作し、ニュースを\n即日更新。",
    url: "https://www.timberland.co.jp/",
    slug: "timerland-official",
  },
  {
    src: "/img/vans.webp",
    title: "VANS公式サイト",
    description:
      "VANS Japanのサイトを継続運用。\nトレンドを捉えたLPと迅速なニュース更新を\n実現。",
    url: "https://www.vans.co.jp/?srsltid=AfmBOoqG_8npx5qrTz7F4JvK7oWbCUnZXn9gySUwi0UjmycZez1zjvaJ",
    slug: "vans-official",
  },
  {
    src: "/img/dickies.webp",
    title: "Dickies公式サイト",
    description:
      "Dickies Japanの運用を支援。\n新商品のLPをレスポンシブに制作し、\n運用体制を整備。",
    url: "https://www.dickies.jp/",
    slug: "dickies-official",
  },
  {
    src: "/img/lacoste.webp",
    title: "Lacoste公式サイト",
    description:
      "Lacosteの洗練された世界観を\n保ちつつLPを制作。\nキャンペーンとセールを計画通りに公開。",
    url: "https://www.lacoste.jp/",
    slug: "lacoste-official",
  },
  {
    src: "/img/mhd.webp",
    title: "MHD公式サイト",
    description:
      "JavaScriptによるキャッシュ制御で\nMHDサイトを最適化。\n安定した表示と高速レスポンスを実現。",
    url: "https://www.mhdkk.com/",
    slug: "mhd-official",
  },
  {
    src: "/img/meiji.webp",
    title: "明治公式サイト",
    description:
      "明治公式サイトのキャンペーンLPを制作。\n家族に寄り添う温かな語り口を徹底。\nブランドの信頼感を支える更新設計を継続。",
    url: "https://www.meiji.co.jp/",
    slug: "meiji-official",
  },
  {
    src: "/img/kikkoman.webp",
    title: "キッコーマン公式サイト",
    description:
      "キッコーマンの\nレシピ / キャンペーンLPを制作。\n親しみやすいビジュアルと分かりやすい導線を両立。",
    url: "https://www.kikkoman.co.jp/",
    slug: "kikkoman-official",
  },
];

type ClientWorksPageProps = {
  HeroComponent?: ComponentType;
  SkillTextComponent?: ComponentType;
  projects?: ClientProjectCard[];
  projectsHeading?: string;
  basePath?: string;
};

const ClientWorksPageJp = ({
  HeroComponent = ClientWorksHeroJp,
  SkillTextComponent,
  projects = JP_CLIENT_PROJECTS,
  projectsHeading = "My Client Projects",
  basePath = "/clientworks_jp",
}: ClientWorksPageProps) => {
  const Hero = HeroComponent;
  const scrollKey = basePath === "/clientworks_jp" ? "clientworks:scrollY:jp" : "clientworks:scrollY:en";

  useEffect(() => {
    if (typeof window === "undefined") return;
    let stored: { y?: number; ts?: number } | null = null;
    try {
      const raw = sessionStorage.getItem(scrollKey);
      if (raw) stored = JSON.parse(raw);
    } catch {
      stored = null;
    }
    if (typeof stored?.y !== "number") return;
    if (typeof stored?.ts === "number" && Date.now() - stored.ts > 10 * 60 * 1000) {
      sessionStorage.removeItem(scrollKey);
      return;
    }
    sessionStorage.removeItem(scrollKey);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        window.scrollTo(0, stored!.y as number);
      });
    });
  }, [scrollKey]);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    root.classList.add("scroll-snap-y");
    return () => {
      root.classList.remove("scroll-snap-y");
    };
  }, []);

  return (
    <main className="flex flex-col items-center w-full">
      <div className="w-full snap-section">
        <Hero />
      </div>
      <div className="w-full snap-section">
        <ClientWorksSkills SkillTextComponent={SkillTextComponent} />
      </div>
      <div className="w-full snap-section">
        <ClientProjectsList heading={projectsHeading} projects={projects} basePath={basePath} />
      </div>
      <div className="w-full snap-section">
        <Footer />
      </div>
    </main>
  );
};

export default ClientWorksPageJp;
