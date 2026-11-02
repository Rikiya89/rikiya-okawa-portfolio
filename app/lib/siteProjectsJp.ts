// app/lib/siteProjectsJp.ts
export type SiteProject = {
  slug: string;
  title: string;
  description: string;
  src: string;
  url: string;
};

const jpMap: Record<string, SiteProject> = {
  "generative-brand-system": {
    slug: "generative-brand-system",
    title: "SEED — Generative Brand System",
    description:
      "Next.js と TypeScript で構築したジェネレーティブ・ブランドシステム。\nブランド名と一文の意図を入力すると、決定論的な SVG ジオメトリがマーク・OKLCH パレット・書体・ロックアップ・ポスター・アイコンを生成。編集と URL 共有に対応。",
    src: "/img/generative_brand_system.webp",
    url: "https://generative-brand-system.vercel.app/",
  },
  typevision: {
    slug: "typevision",
    title: "TypeVision",
    description:
      "JavaScript と HTML/CSS で構築。\n英語/日本語のタイピング練習、任意の視線追跡、ローカル保存の進捗管理を統合し、リアルタイム分析と集中しやすい UI で提供。",
    src: "/img/typevision.webp",
    url: "https://typevision-ricky.vercel.app/",
  },
  "emotional-echoes-p5js": {
    slug: "emotional-echoes-p5js",
    title: "Emotional Echoes（p5.js）",
    description:
      "p5.js による多言語タイポグラフィの\nインタラクティブ作品。\n6つの感情を、文字アニメーションとホバー粒子、感情ホイールで体験可能。",
    src: "/img/p5js_artwork.png",
    url: "https://p5js.org/sketches/2688829/",
  },
  "portfolio-website": {
    slug: "portfolio-website",
    title: "Portfolio Website",
    description:
      "インタラクティブなポートフォリオ。\nHTML/SCSS/JavaScript で構築し、直感的なナビゲーションと視覚的な演出で作品をわかりやすく\n紹介。",
    src: "/img/portfolio_no1.webp",
    url: "https://www.rikiya-okawa963.jp/index.html/",
  },
  "react-weather-app": {
    slug: "react-weather-app",
    title: "React Weather App",
    description:
      "React と JavaScript で構築。\n天気/位置情報 API を活用し、都市検索からリアルタイムの気象情報まで、軽快で直感的な UI で\n提供。",
    src: "/img/weather_app.webp",
    url: "https://relaxed-youtiao-4c1124.netlify.app/",
  },
  "iphone14-clone-3d": {
    slug: "iphone14-clone-3d",
    title: "3D iPhone Product Page",
    description:
      "React と JavaScript で構築。\n3DモデルをWeb上でインタラクティブに表示し、スクロール連動のカメラアニメーションで\n製品の特徴を段階的に紹介。",
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
      "TouchDesigner 作品。\nGLSL と TOP を用い、水の質感と流動性を\nプロシージャルに表現。",
    src: "/img/water_drops_culpture.webp",
    url: "https://www.instagram.com/reel/C5I0TBkSrk6/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  "the-art-of-dynamic-mesh": {
    slug: "the-art-of-dynamic-mesh",
    title: "The Art of Dynamic Mesh",
    description:
      "openFrameworks による表現研究。\n画像処理とメッシュダイナミクスで光と動きを\n可視化。",
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
  "dinis-surface": {
    slug: "dinis-surface",
    title: "Dini's Surface",
    description: "p5.js + GLSL の習作。ねじれは変わっても、曲率は変わらない。",
    src: "/img/lab_dinis_surface_hd.webp",
    url: "https://www.instagram.com/reel/DerNV-vT5xl/",
  },
  "manta-made-of-holes": {
    slug: "manta-made-of-holes",
    title: "A Manta Made of Holes",
    description: "GLSL シェーダー作品。プロシージャルなマンタの内側にジャイロイドの格子を構築。メッシュもリグも不使用。",
    src: "/img/lab_manta_gyroid_hd.webp",
    url: "https://www.instagram.com/reel/Debwj98zAv3/",
  },
  "ascii-spider-lily": {
    slug: "ascii-spider-lily",
    title: "ASCII Spider Lily",
    description: "TouchDesigner の習作。3D の花をすべて文字だけで描き直し。",
    src: "/img/lab_ascii_spider_lily_hd.webp",
    url: "https://www.instagram.com/reel/DfHiD_vzRIW/",
  },
  "neural-signals-unity": {
    slug: "neural-signals-unity",
    title: "Neural Signals → Light",
    description: "Unity の習作。生体の神経信号が、プロシージャルな生命体と15万個の GPU パーティクルを動かす。",
    src: "/img/lab_neural_signals_hd.webp",
    url: "https://www.instagram.com/reel/DejfBANzoHt/",
  },
};

export function getJpProject(slug: string) {
  return Object.hasOwn(jpMap, slug) ? jpMap[slug] : null;
}

export function listJpProjects(): SiteProject[] {
  return Object.values(jpMap);
}
