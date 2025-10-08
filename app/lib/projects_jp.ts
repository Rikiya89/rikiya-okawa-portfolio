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
    description: `Timberland Japanのサイト運用を担当。\nシーズンごとのキャンペーンLPを平均3日以内で制作し、ニュースを当日中に更新。\n安定した運用を維持しながら、ブランドの世界観に沿ったデザインと実装を行いました。\n\n使用技術\nHTML / SCSS / JavaScript / Node.js / Gulp\n\n担当領域\nフロントエンドエンジニアリング（運用・保守・LP制作）`,
    src: "/img/timberland.webp",
    url: "https://www.timberland.co.jp/",
  },
  {
    slug: "vans-official",
    title: "VANS公式サイト",
    description: `VANS Japanの公式サイト運用を担当。\nブランドキャンペーンやシーズンLPを制作し、\nニュースを短納期で更新。\n最新トレンドを反映したデザインを実装し、\n安定した運用体制を維持しました。\n\n使用技術\nHTML / SCSS / JavaScript / Node.js / Gulp\n\n担当領域\nフロントエンドエンジニアリング（運用・保守・LP制作）`,
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
    slug: "mhd-official",
    title: "MHD公式サイト",
    description: `既存サイトのパフォーマンス最適化を担当しました。\nJavaScriptを用いてキャッシュ制御を実装し、ページ表示の安定化と高速化を実現。\nまた、リソースの最適化やブラウザ挙動の調整を行い、ユーザー体験の向上に貢献しました。\n\nJavaScript / HTML / CSS / Node.js / Gulp`,
    src: "/img/mhd.webp",
    url: "https://www.mhdkk.com/",
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
