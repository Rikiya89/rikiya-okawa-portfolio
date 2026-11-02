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
    title: "SEED : Generative Brand System",
    description:
      "Next.js と TypeScript で作ったジェネレーティブ・ブランドシステム。\nブランド名と一文の意図を入力すると、SVG のジオメトリがマーク、OKLCH パレット、書体、ロックアップ、ポスター、アイコンを描き出します。同じ入力なら必ず同じ結果になり、編集も URL での共有もできます。",
    src: "/img/generative_brand_system.webp",
    url: "https://generative-brand-system.vercel.app/",
  },
  typevision: {
    slug: "typevision",
    title: "TypeVision",
    description:
      "JavaScript と HTML/CSS で作ったタイピング練習アプリ。\n英語・日本語の練習、任意の視線追跡、進捗のローカル保存に対応。リアルタイム分析つきの、集中しやすい UI で使えます。",
    src: "/img/typevision.webp",
    url: "https://typevision-ricky.vercel.app/",
  },
  "emotional-echoes-p5js": {
    slug: "emotional-echoes-p5js",
    title: "Emotional Echoes（p5.js）",
    description:
      "p5.js で作った多言語タイポグラフィのインタラクティブ作品。\n文字のアニメーション、ホバー時のパーティクル、感情ホイールを通して、6つの感情を体験できます。",
    src: "/img/p5js_artwork.png",
    url: "https://p5js.org/sketches/2688829/",
  },
  "portfolio-website": {
    slug: "portfolio-website",
    title: "Portfolio Website",
    description:
      "HTML/SCSS/JavaScript で作ったポートフォリオサイト。\nわかりやすいナビゲーションと視覚的な演出で、作品を見やすく紹介しています。",
    src: "/img/portfolio_no1.webp",
    url: "https://www.rikiya-okawa963.jp/index.html/",
  },
  "react-weather-app": {
    slug: "react-weather-app",
    title: "React Weather App",
    description:
      "React と JavaScript で作った天気アプリ。\n天気と位置情報の API を使い、都市検索からリアルタイムの気象情報まで、軽快で使いやすい UI で確認できます。",
    src: "/img/weather_app.webp",
    url: "https://relaxed-youtiao-4c1124.netlify.app/",
  },
  "iphone14-clone-3d": {
    slug: "iphone14-clone-3d",
    title: "3D iPhone Product Page",
    description:
      "React と JavaScript で作成。\n3D モデルを Web 上で動かせるようにし、スクロールに合わせてカメラが動くことで、製品の特徴を順番に紹介します。",
    src: "/img/iphone14_clonewebsite.webp",
    url: "https://apple-iphone3d-website.netlify.app/",
  },
  "guardians-of-the-moon": {
    slug: "guardians-of-the-moon",
    title: "GUARDIANS OF THE MOON",
    description:
      "Unity と TouchDesigner による卒業制作。\n月面基地を守る VR を約1カ月で作り、没入感のある演出で AR/VR 施設での滞在時間を延ばしました。",
    src: "/img/guardians.webp",
    url: "/guardians_jp",
  },
  "water-drop-effect": {
    slug: "water-drop-effect",
    title: "Water Drop Effect",
    description:
      "TouchDesigner 作品。GLSL と TOP を使い、水の質感と流れをプロシージャルに表現しました。",
    src: "/img/water_drops_culpture.webp",
    url: "https://www.instagram.com/reel/C5I0TBkSrk6/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  "the-art-of-dynamic-mesh": {
    slug: "the-art-of-dynamic-mesh",
    title: "The Art of Dynamic Mesh",
    description:
      "openFrameworks による表現の研究。画像処理とメッシュダイナミクスを使って、光と動きを可視化しました。",
    src: "/img/of.webp",
    url: "https://www.instagram.com/p/Ctv2k7Nvcrb/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  "pulse-of-reflection": {
    slug: "pulse-of-reflection",
    title: "Pulse of Reflection",
    description:
      "TouchDesigner 作品。CHOP と TOP で反射するハートを動かし、指数 LFO で鼓動のようなリズムを加えました。",
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
    description: "GLSL シェーダー作品。プロシージャルなマンタの内側に、ジャイロイドの格子を組み上げています。メッシュもリグも使っていません。",
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
