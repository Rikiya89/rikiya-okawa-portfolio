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
    description: `Timberland Japanのサイト運用を担当。\n約3日でキャンペーンLPを制作し、ニュースを即日更新。\nブランドの世界観に沿ったデザインと実装で安定運用を実現。\n\n使用技術\nHTML / SCSS / JavaScript / Node.js / Gulp\n\n担当領域\nフロントエンドエンジニアリング（運用・保守・LP制作）`,
    src: "/img/timberland.webp",
    url: "https://www.timberland.co.jp/",
  },
  {
    slug: "vans-official",
    title: "VANS公式サイト",
    description: `VANS Japanのサイトを継続運用。\nブランドキャンペーンやシーズンLPを制作し、ニュースを短納期で更新。\n最新トレンドを反映したデザインで安定した運用体制を維持。\n\n使用技術\nHTML / SCSS / JavaScript / Node.js / Gulp\n\n担当領域\nフロントエンドエンジニアリング（運用・保守・LP制作）`,
    src: "/img/vans.webp",
    url: "https://www.vans.co.jp/",
  },
  {
    slug: "lacoste-official",
    title: "Lacoste公式サイト",
    description: `Lacosteの洗練された世界観を保ちつつLPを制作。\nブランドトーンを損なわずにキャンペーンやセールを予定通り公開。\n\n使用技術\nHTML / SCSS / JavaScript / Node.js / Gulp\n\n担当領域\nフロントエンドエンジニアリング（運用・保守・LP制作）`,
    src: "/img/lacoste.webp",
    url: "https://www.lacoste.jp/",
  },
  {
    slug: "mhd-official",
    title: "MHD公式サイト",
    description: `JavaScriptによるキャッシュ制御でMHDサイトを最適化。\nページ表示の安定化と高速化を実現し、リソース調整で体験を改善。\n\n使用技術\nJavaScript / HTML / CSS / Node.js / Gulp\n\n担当領域\nフロントエンドエンジニアリング（運用・保守・LP制作）`,
    src: "/img/mhd.webp",
    url: "https://www.mhdkk.com/",
  },
  {
    slug: "meiji-official",
    title: "明治公式サイト",
    description: `明治公式サイトのキャンペーンLPを制作。\n商品展開に合わせて公開し、親しみやすく信頼感のあるブランドトーンを強調。\n家族に寄り添う安心感を保つ更新設計を継続。\n\n使用技術\nHTML / SCSS / JavaScript / Node.js / Gulp\n\n担当領域\nフロントエンドエンジニアリング（運用・保守・LP制作）`,
    src: "/img/meiji.webp",
    url: "https://www.meiji.co.jp/",
  },
  {
    slug: "kikkoman-official",
    title: "キッコーマン公式サイト",
    description: `キッコーマンのレシピ／キャンペーンLPを制作。\n親しみやすく分かりやすいレイアウトでステップを整理。\n\n使用技術\nHTML / SCSS / JavaScript / Node.js / Gulp\n\n担当領域\nフロントエンドエンジニアリング（運用・保守・LP制作）`,
    src: "/img/kikkoman.webp",
    url: "https://www.kikkoman.co.jp/",
  },
  {
    slug: "the-art-of-dynamic-mesh",
    title: "The Art of Dynamic Mesh",
    description: `openFrameworksで画像処理とメッシュ動作を探究。\n両者の相互作用が生み出す動きを研究。`,
    src: "/img/of.webp",
    url: "https://www.instagram.com/p/Ctv2k7Nvcrb/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    slug: "pulse-of-reflection",
    title: "Pulse of Reflection",
    description: `TouchDesignerで反射する心臓を演出。\nCHOP/TOPと指数的LFOで生命感ある鼓動を付与。`,
    src: "/img/heart.webp",
    url: "https://www.instagram.com/p/C8PaH0kSQ2Z/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    slug: "dickies-official",
    title: "Dickies公式サイト",
    description: `Dickies Japanの運用を支援。\n新商品やキャンペーン告知のためのレスポンシブLPを制作。\n\n使用技術\nHTML / SCSS / JavaScript / Node.js / Gulp\n\n担当領域\nフロントエンドエンジニアリング（運用・保守・LP制作）`,
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
