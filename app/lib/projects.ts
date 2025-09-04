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
    description: `VANS公式サイトの運用・保守。
キャンペーンLP制作やニュース更新を担当。
HTML / SCSS / JavaScript / Node.js / Gulp`,
    src: "/img/vans.webp",
    url: "https://www.vans.co.jp/",
  },
  {
    slug: "guardians-of-the-moon",
    title: "GUARDIANS OF THE MOON",
    description:
      "卒業プロジェクト。UnityとTouchDesignerでVRゲームとインタラクティブ映像を製作。約1ヶ月でVR、約1週間で映像を完成。",
    src: "/img/guardians.webp",
    url: "/guardians_jp",
  },
  {
    slug: "water-drop-effect",
    title: "Water Drop Effect",
    description:
      "TouchDesigner作品。GLSLシェーダーとTOPで水の本質を描くアニメーション。",
    src: "/img/water_drops_culpture.webp",
    url: "https://www.instagram.com/reel/C5I0TBkSrk6/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    slug: "the-art-of-dynamic-mesh",
    title: "The Art of Dynamic Mesh",
    description:
      "openFrameworks。画像処理とメッシュダイナミクスの表現研究。",
    src: "/img/of.webp",
    url: "https://www.instagram.com/p/Ctv2k7Nvcrb/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    slug: "pulse-of-reflection",
    title: "Pulse of Reflection",
    description:
      "TouchDesigner。CHOP/TOPで反射するハートをアニメーション化。指数関数LFOで生命感を付与。",
    src: "/img/heart.webp",
    url: "https://www.instagram.com/p/C8PaH0kSQ2Z/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
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
  const p = projects.find(x => x.slug === slug);
  if (!p) throw new Error(`Project not found: ${slug}`);
  return p;
}

export async function getAllProjects() {
  return projects;
}
