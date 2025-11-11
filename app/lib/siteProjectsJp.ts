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
      "インタラクティブなポートフォリオ。\nHTML/SCSS/JavaScript で構築し、直感的なナビゲーションと視覚的な演出で作品をわかりやすく紹介。",
    src: "/img/portfolio_no1.webp",
    url: "https://www.rikiya-okawa963.jp/index.html/",
  },
  "react-weather-app": {
    slug: "react-weather-app",
    title: "React Weather App",
    description:
      "React と JavaScript で構築。\n天気/位置情報 API を活用し、都市検索からリアルタイムの気象情報まで、軽快で直感的な UI で提供。",
    src: "/img/weather_app.webp",
    url: "https://relaxed-youtiao-4c1124.netlify.app/",
  },
  "iphone14-clone-3d": {
    slug: "iphone14-clone-3d",
    title: "iPhone 14 Clone 3D Website",
    description:
      "iPhone 14 をテーマにした 3D React サイト。\nGSAP アニメーションで動きのデザインとマイクロインタラクションを表現。",
    src: "/img/iphone14_clonewebsite.webp",
    url: "https://apple-iphone3d-website.netlify.app/",
  },
  "guardians-of-the-moon": {
    slug: "guardians-of-the-moon",
    title: "GUARDIANS OF THE MOON",
    description:
      "Unity × TouchDesigner の卒業制作。\n月面基地防衛 VR を約1カ月で構築し、没入演出で AR/VR 施設の滞在時間を拡張。",
    src: "/img/guardians.webp",
    url: "/guardians_jp",
  },
  "water-drop-effect": {
    slug: "water-drop-effect",
    title: "Water Drop Effect",
    description:
      "TouchDesigner 作品。\nGLSL と TOP を用い、水の質感と流動性をプロシージャルに表現。",
    src: "/img/water_drops_culpture.webp",
    url: "https://www.instagram.com/reel/C5I0TBkSrk6/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  "the-art-of-dynamic-mesh": {
    slug: "the-art-of-dynamic-mesh",
    title: "The Art of Dynamic Mesh",
    description:
      "openFrameworks による表現研究。\n画像処理とメッシュダイナミクスで光と動きを可視化。",
    src: "/img/of.webp",
    url: "https://www.instagram.com/p/Ctv2k7Nvcrb/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  "pulse-of-reflection": {
    slug: "pulse-of-reflection",
    title: "Pulse of Reflection",
    description:
      "TouchDesigner 作品。\nCHOP/TOP で反射するハートをアニメーション化し、指数 LFO で鼓動のようなリズムを付与。",
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
