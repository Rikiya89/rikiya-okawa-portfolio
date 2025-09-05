// app/lib/siteProjectsJp.ts
export type SiteProject = {
  slug: string;
  title: string;
  description: string;
  src: string;
  url: string;
};

const jpMap: Record<string, SiteProject> = {
  "portfolio-website": {
    slug: "portfolio-website",
    title: "Portfolio Website",
    description:
      "私の最初のポートフォリオサイト。HTML/SCSS/JavaScriptで構築し、直感的なナビゲーションと魅力的なビジュアルで作品を紹介。",
    src: "/img/portfolio_no1.webp",
    url: "https://www.rikiya-okawa963.jp/index.html/",
  },
  "react-weather-app": {
    slug: "react-weather-app",
    title: "React Weather App",
    description:
      "React と JavaScript で構築。天気/位置情報APIを活用し、都市検索からリアルタイム予報まで直感的に利用可能。",
    src: "/img/weather_app.webp",
    url: "https://relaxed-youtiao-4c1124.netlify.app/",
  },
  "iphone14-clone-3d": {
    slug: "iphone14-clone-3d",
    title: "iPhone 14 Clone 3D Website",
    description:
      "iPhone 14 をテーマにした 3D React サイト。インタラクションに連動したモーションで美学と機能性を表現。",
    src: "/img/iphone14_clonewebsite.webp",
    url: "https://apple-iphone3d-website.netlify.app/",
  },
  "guardians-of-the-moon": {
    slug: "guardians-of-the-moon",
    title: "GUARDIANS OF THE MOON",
    description:
      "卒業制作。Unity と TouchDesigner を用いた VR ゲームとインタラクティブ映像。",
    src: "/img/guardians.webp",
    url: "/guardians_jp",
  },
  "water-drop-effect": {
    slug: "water-drop-effect",
    title: "Water Drop Effect",
    description:
      "TouchDesigner作品。GLSL と TOP で水の本質を表現するアニメーション。",
    src: "/img/water_drops_culpture.webp",
    url: "https://www.instagram.com/reel/C5I0TBkSrk6/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  "the-art-of-dynamic-mesh": {
    slug: "the-art-of-dynamic-mesh",
    title: "The Art of Dynamic Mesh",
    description:
      "openFrameworks による表現研究。画像処理とメッシュダイナミクスで光と動きの物語を描写。",
    src: "/img/of.webp",
    url: "https://www.instagram.com/p/Ctv2k7Nvcrb/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  "pulse-of-reflection": {
    slug: "pulse-of-reflection",
    title: "Pulse of Reflection",
    description:
      "TouchDesigner。CHOP/TOP による反射するハートのアニメーション。指数 LFO で生命感を付与。",
    src: "/img/heart.webp",
    url: "https://www.instagram.com/p/C8PaH0kSQ2Z/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
};

export function getJpProject(slug: string) {
  return jpMap[slug] ?? null;
}

export function listJpProjects(): SiteProject[] {
  return Object.values(jpMap);
}

