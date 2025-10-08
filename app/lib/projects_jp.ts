// app/lib/projects_jp.ts
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
    title: "Timberland公式サイト",
    description: `Timberland Japanのサイト運用を担当。\nシーズンごとのキャンペーンLPを3日以内に制作し、ニュースは当日中に更新。\nHTML / SCSS / JavaScript / Node.js / Gulp.`,
    src: "/img/timberland.webp",
    url: "https://www.timberland.co.jp/",
  },
  {
    slug: "vans-official",
    title: "VANS公式サイト",
    description: `VANS JapanのECサイト運用を担当。\nトレンドに合わせたキャンペーンLPを短納期で制作し、ニュースは即日更新。\nHTML / SCSS / JavaScript / Node.js / Gulp.`,
    src: "/img/vans.webp",
    url: "https://www.vans.co.jp/",
  },
  {
    slug: "lacoste-official",
    title: "Lacoste公式サイト",
    description: `Lacoste Japanのランディングページを制作。\nブランドの洗練されたトーンを維持しながら、キャンペーンやセールコンテンツをスケジュール通りに公開。\nHTML / SCSS / JavaScript / Node.js / Gulp.`,
    src: "/img/lacoste.webp",
    url: "https://www.lacoste.jp/",
  },
  {
    slug: "meiji-official",
    title: "明治公式サイト",
    description: `明治公式サイト向けにLPを制作。\n商品キャンペーンに合わせて公開し、親しみやすく信頼感のあるブランドトーンを強調。\nHTML / SCSS / JavaScript / Node.js / Gulp.`,
    src: "/img/meiji.webp",
    url: "https://www.meiji.co.jp/",
  },
  {
    slug: "kikkoman-official",
    title: "キッコーマン公式サイト",
    description: `キッコーマンのLP制作を担当。\nレシピやキャンペーンページを、親しみやすく分かりやすいレイアウトで作成。\nHTML / SCSS / JavaScript / Node.js / Gulp.`,
    src: "/img/kikkoman.webp",
    url: "https://www.kikkoman.co.jp/",
  },
  {
    slug: "the-art-of-dynamic-mesh",
    title: "The Art of Dynamic Mesh",
    description: `openFrameworksを使った探究。\n画像処理がメッシュダイナミクスとどのように相互作用して動きを描くかを研究。`,
    src: "/img/of.webp",
    url: "https://www.instagram.com/p/Ctv2k7Nvcrb/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    slug: "pulse-of-reflection",
    title: "Pulse of Reflection",
    description: `TouchDesignerインスタレーション。\nCHOP/TOPと指数関数的なLFOを使用して、反射する心臓に生命感のある鼓動を与える。`,
    src: "/img/heart.webp",
    url: "https://www.instagram.com/p/C8PaH0kSQ2Z/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    slug: "dickies-official",
    title: "Dickies公式サイト",
    description: `Dickies Japanのサイト運用・改善を担当。\n新商品やキャンペーン告知のためのレスポンシブLPを制作。\nHTML / SCSS / JavaScript / Node.js / Gulp.`,
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
