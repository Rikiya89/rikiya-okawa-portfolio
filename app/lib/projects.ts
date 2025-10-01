// app/lib/projects.ts
export type Project = {
  slug: string;
  title: string;
  description: string;
  src: string;
  url?: string;
};

export const projects: Project[] = [
  {
    slug: "timerland-official",
    title: "Timberland Official Website",
    description: `Timberland公式サイトの運用・保守を担当。\nシーズンごとのLPを平均3日以内に制作、\nニュースは当日中に更新し、安定した運用を実現。\nHTML / SCSS / JavaScript / Node.js / Gulp`,
    src: "/img/timberland.webp",
    url: "https://www.timberland.co.jp/",
  },
  {
    slug: "vans-official",
    title: "VANS Official Website",
    description: `VANS公式サイトの運用・保守を担当。\nトレンドに合わせたキャンペーンLPを短納期で制作し、\nニュースは即日更新で最新情報を発信。\nHTML / SCSS / JavaScript / Node.js / Gulp`,
    src: "/img/vans.webp",
    url: "https://www.vans.co.jp/",
  },
  {
    slug: "lacoste-official",
    title: "Lacoste Official Website",
    description: `Lacoste公式サイトのLP制作を担当。\nブランドの洗練されたイメージを重視し、\n特集ページやセールLPを正確かつ安定して公開。\nHTML / SCSS / JavaScript / Node.js / Gulp`,
    src: "/img/lacoste.webp",
    url: "https://www.lacoste.jp/",
  },
  {
    slug: "meiji-official",
    title: "明治 Official Website",
    description: `明治 公式サイトのLP制作を担当。\n新商品やキャンペーンに合わせてLPを制作し、\nブランドの安心感を伝えるデザインを実現。\nHTML / SCSS / JavaScript / Node.js / Gulp`,
    src: "/img/meiji.webp",
    url: "https://www.meiji.co.jp/",
  },
  {
    slug: "water-drop-effect",
    title: "Water Drop Effect",
    description:
      "TouchDesigner作品。\nGLSLシェーダーとTOPで水の本質を描くアニメーション。",
    src: "/img/water_drops_culpture.webp",
    url: "https://www.instagram.com/reel/C5I0TBkSrk6/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    slug: "the-art-of-dynamic-mesh",
    title: "The Art of Dynamic Mesh",
    description:
      "openFrameworks。\n画像処理とメッシュダイナミクスの表現研究。",
    src: "/img/of.webp",
    url: "https://www.instagram.com/p/Ctv2k7Nvcrb/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    slug: "pulse-of-reflection",
    title: "Pulse of Reflection",
    description:
      "TouchDesigner。CHOP/TOPで反射するハートをアニメーション化。\n指数関数LFOで生命感を付与。",
    src: "/img/heart.webp",
    url: "https://www.instagram.com/p/C8PaH0kSQ2Z/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    slug: "dickies-official",
    title: "Dickies Official Website",
    description:
      "Dickies公式サイトの運用・保守を担当。\n新商品のLPやキャンペーンページを制作し、\n実用性を重視したデザインをマルチデバイス対応で実装。\nHTML / SCSS / JavaScript / Node.js / Gulp",
    src: "/img/dickies.webp",
    url: "https://www.dickies.jp/",
  },
  // 必要に応じて追加
];

export async function getProject(slug: string) {
  const p = projects.find(x => x.slug === slug);
  if (!p) throw new Error(`Project not found: ${slug}`);
  return p;
}

export async function getAllProjects() {
  return projects;
}
