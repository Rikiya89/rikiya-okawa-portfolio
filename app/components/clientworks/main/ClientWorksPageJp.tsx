"use client";

import { ComponentType } from "react";
import ClientWorksHeroJp from "./ClientWorksHeroJp";
import ClientWorksSkills from "./ClientWorksSkills";
import ClientProjectsList, { ClientProjectCard } from "./ClientProjectsList";
import Footer from "./Footer";

const JP_CLIENT_PROJECTS: ClientProjectCard[] = [
  {
    src: "/img/timberland.webp",
    title: "Timberland公式サイト",
    description:
      "Timberland Japanの公式サイト運用を担当。\nシーズンキャンペーンLPを短納期で制作し、\nニュースを即日更新。",
    url: "https://www.timberland.co.jp/",
    slug: "timerland-official",
  },
  {
    src: "/img/vans.webp",
    title: "VANS公式サイト",
    description:
      "VANS Japanの公式サイト運用を担当。\nトレンド重視のLPを制作し、\nニュースを短納期で更新。",
    url: "https://www.vans.co.jp/?srsltid=AfmBOoqG_8npx5qrTz7F4JvK7oWbCUnZXn9gySUwi0UjmycZez1zjvaJ",
    slug: "vans-official",
  },
  {
    src: "/img/dickies.webp",
    title: "Dickies公式サイト",
    description:
      "Dickies Japanの継続的な保守をサポート。\n新商品発売のための実用的で\nレスポンシブなLPを制作。",
    url: "https://www.dickies.jp/",
    slug: "dickies-official",
  },
  {
    src: "/img/lacoste.webp",
    title: "Lacoste公式サイト",
    description:
      "Lacosteの洗練された美学を反映した\n洗練されたLPを制作。\nシーズンキャンペーンやセール告知を担当。",
    url: "https://www.lacoste.jp/",
    slug: "lacoste-official",
  },
  {
    src: "/img/mhd.webp",
    title: "MHD公式サイト",
    description:
      "JavaScriptによるキャッシュ制御とパフォーマンス最適化を担当。\n安定した表示と高速レスポンスを実現し、\n既存サイトの品質向上に貢献。",
    url: "https://www.mhdkk.com/",
    slug: "mhd-official",
  },
  {
    src: "/img/meiji.webp",
    title: "明治公式サイト",
    description:
      "明治の新商品やキャンペーン向けにLPを制作。\nファミリー向けの温かく信頼感のある\nストーリーテリングを重視。",
    url: "https://www.meiji.co.jp/",
    slug: "meiji-official",
  },
  {
    src: "/img/kikkoman.webp",
    title: "キッコーマン公式サイト",
    description:
      "キッコーマンのレシピやキャンペーンLP\nを制作。親しみやすいビジュアルと分かりやすいステップバイステップの情報を両立。",
    url: "https://www.kikkoman.co.jp/",
    slug: "kikkoman-official",
  },
  {
    src: "/img/of.webp",
    title: "The Art of Dynamic Mesh",
    description:
      "openFrameworksを使った探究。画像処理とメッシュダイナミクスを組み合わせて、光と動きを視覚的に研究。",
    url: "https://www.instagram.com/p/Ctv2k7Nvcrb/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    slug: "the-art-of-dynamic-mesh",
  },
  {
    src: "/img/heart.webp",
    title: "Pulse of Reflection",
    description:
      "TouchDesignerインスタレーション。反射する心臓をアニメーション化し、指数関数的なLFOで生命感のあるリズムを注入。",
    url: "https://www.instagram.com/p/C8PaH0kSQ2Z/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    slug: "pulse-of-reflection",
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

  return (
    <main className="flex flex-col items-center w-full">
      <Hero />
      <ClientWorksSkills SkillTextComponent={SkillTextComponent} />
      <ClientProjectsList heading={projectsHeading} projects={projects} basePath={basePath} />
      <Footer />
    </main>
  );
};

export default ClientWorksPageJp;
