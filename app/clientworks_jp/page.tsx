import ClientWorksPage from "@/components/clientworks/main/ClientWorksPage";
import ClientWorksHeroJp from "@/components/clientworks/main/ClientWorksHeroJp";
import SkillTextJp from "@/components/jp/sub/SkillsText";
import type { ClientProjectCard } from "@/components/clientworks/main/ClientProjectsList";

const JP_CLIENT_PROJECTS: ClientProjectCard[] = [
  {
    src: "/img/timberland.webp",
    title: "Timberland Official Website",
    description: "Timberland公式サイトの運用・保守。\nLP制作やニュース更新を担当。",
    url: "https://www.timberland.co.jp/",
    slug: "timerland-official",
  },
  {
    src: "/img/vans.webp",
    title: "VANS Official Website",
    description: "VANS公式サイトの運用・保守。\nLP制作やニュース更新を担当。",
    url: "https://www.vans.co.jp/?srsltid=AfmBOoqG_8npx5qrTz7F4JvK7oWbCUnZXn9gySUwi0UjmycZez1zjvaJ",
    slug: "vans-official",
  },
  {
    src: "/img/dickies.webp",
    title: "Dickies Official Website",
    description: "Dickies公式サイトの運用・保守。\nLP制作やニュース更新を担当。",
    url: "https://www.dickies.jp/",
    slug: "dickies-official",
  },
  {
    src: "/img/lacoste.webp",
    title: "Lacoste Official Website",
    description: "Lacoste公式サイトのLP制作を担当。\n特集ページやセール情報を制作。",
    url: "https://www.lacoste.jp/",
    slug: "lacoste-official",
  },
  {
    src: "/img/meiji.webp",
    title: "明治 Official Website",
    description: "明治 公式サイトのLP制作を担当。\n商品特集やキャンペーンページを制作。",
    url: "https://www.meiji.co.jp/",
    slug: "meiji-official",
  },
  {
    src: "/img/kikkoman.webp",
    title: "Kikkoman Official Website",
    description: "Kikkoman公式サイトのLP制作を担当。\nレシピ特集やキャンペーンページを制作。",
    url: "https://www.kikkoman.co.jp/",
    slug: "kikkoman-official",
  },
  {
    src: "/img/of.webp",
    title: "The Art of Dynamic Mesh",
    description: "openFrameworks。画像処理とメッシュダイナミクスの表現研究。",
    url: "https://www.instagram.com/p/Ctv2k7Nvcrb/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    slug: "the-art-of-dynamic-mesh",
  },
  {
    src: "/img/heart.webp",
    title: "Pulse of Reflection",
    description: "TouchDesigner。CHOP/TOPで反射するハートをアニメーション化。指数関数LFOで生命感を付与。",
    url: "https://www.instagram.com/p/C8PaH0kSQ2Z/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    slug: "pulse-of-reflection",
  },
];

export default function Page() {
  return (
    <ClientWorksPage
      HeroComponent={ClientWorksHeroJp}
      SkillTextComponent={SkillTextJp}
      projects={JP_CLIENT_PROJECTS}
      projectsHeading="クライアントワーク"
    />
  );
}
