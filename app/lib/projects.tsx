// app/lib/projects.ts
export type Project = {
  slug?: string;    // 内部詳細（/clientworks/[slug]）に行くときに使用（任意）
  title: string;
  description: string;
  src: string;
  url?: string;     // 外部リンク（任意）
};

export const projects: Project[] = [
  {
    slug: "react-weather-app",
    title: "React Weather App",
    description:
      "React/JS + 天気・座標APIでリアルタイム天気。都市間をスムーズに移動し、直感的UIで気象パターンを探索。",
    src: "/img/weather_app.webp",
    url: "https://relaxed-youtiao-4c1124.netlify.app/",
  },
  {
    slug: "vans-official",
    title: "VANS Official Website",
    description:
      "VANS公式サイトの運用・改修、LP制作、ニュース更新。HTML/SCSS/JS + Node.js/Gulp。",
    src: "/img/vans.webp",
    url: "https://www.vans.co.jp/",
  },
  {
    slug: "iphone14-clone-3d",
    title: "iPhone 14 Clone 3D Website",
    description:
      "iPhone 14をテーマにした3D Reactサイト。美学と機能性を表現するモーション演出。",
    src: "/img/iphone14_clonewebsite.webp",
    url: "https://apple-iphone3d-website.netlify.app/",
  },
  // 必要に応じて追加
];

export async function getProject(slug: string) {
  const p = projects.find((x) => x.slug === slug);
  if (!p) throw new Error(`Project not found: ${slug}`);
  return p;
}

export async function getAllProjects() {
  return projects;
}