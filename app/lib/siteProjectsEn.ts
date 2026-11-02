// app/lib/siteProjectsEn.ts
export type SiteProject = {
  slug: string;
  title: string;
  description: string;
  src: string;
  url: string;
};

const enMap: Record<string, SiteProject> = {
  "generative-brand-system": {
    slug: "generative-brand-system",
    title: "SEED : Generative Brand System",
    description:
      "A generative brand system built with Next.js and TypeScript.\nEnter a brand name and a one-line intent, and SVG geometry draws the mark, OKLCH palette, typography, lockup, poster and icons. The same input always gives the same result, and everything is editable and shareable by URL.",
    src: "/img/generative_brand_system.webp",
    url: "https://generative-brand-system.vercel.app/",
  },
  typevision: {
    slug: "typevision",
    title: "TypeVision",
    description:
      "A typing trainer that runs in the browser, built with JavaScript. It offers optional eye tracking and saves your progress locally.\nPractice in English or Japanese with real-time stats, challenge modes and shareable runs, in a focused, responsive UI.",
    src: "/img/typevision.webp",
    url: "https://typevision-ricky.vercel.app/",
  },
  "emotional-echoes-p5js": {
    slug: "emotional-echoes-p5js",
    title: "Emotional Echoes (p5.js)",
    description:
      "An interactive typography artwork in several languages, made with p5.js.\nExplore six emotions through animated text, particle bursts on hover and an emotion wheel.",
    src: "/img/p5js_artwork.png",
    url: "https://p5js.org/sketches/2688829/",
  },
  "portfolio-website": {
    slug: "portfolio-website",
    title: "Portfolio Website",
    description:
      "A portfolio site built with HTML, SCSS and JavaScript, with a clean, responsive layout.\nSimple navigation and visual touches make the projects easy to browse.",
    src: "/img/portfolio_no1.webp",
    url: "https://www.rikiya-okawa963.jp/index.html/",
  },
  "react-weather-app": {
    slug: "react-weather-app",
    title: "React Weather App",
    description:
      "Built with React and JavaScript.\nUses weather and geolocation APIs for everything from city search to live conditions, in a light, easy-to-use UI.",
    src: "/img/weather_app.webp",
    url: "https://relaxed-youtiao-4c1124.netlify.app/",
  },
  "iphone14-clone-3d": {
    slug: "iphone14-clone-3d",
    title: "3D iPhone Product Page",
    description:
      "Built with React and JavaScript.\nAn interactive 3D model whose camera moves with the scroll, revealing the product's features one step at a time.",
    src: "/img/iphone14_clonewebsite.webp",
    url: "https://apple-iphone3d-website.netlify.app/",
  },
  "guardians-of-the-moon": {
    slug: "guardians-of-the-moon",
    title: "GUARDIANS OF THE MOON",
    description:
      "A graduation project pairing a Unity VR shooter with a TouchDesigner installation.\nBuilt with an AR/VR center to stage a base-defense scenario, with synchronized mission briefings and haptic VR feedback.\nThe VR game took one month to build and the installation one week.",
    src: "/img/guardians.webp",
    url: "/guardians_en",
  },
  "water-drop-effect": {
    slug: "water-drop-effect",
    title: "Water Drop Effect",
    description:
      "A TouchDesigner study that uses GLSL shaders and TOPs to capture the feel of water through procedural motion.",
    src: "/img/water_drops_culpture.webp",
    url: "https://www.instagram.com/reel/C5I0TBkSrk6/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  "the-art-of-dynamic-mesh": {
    slug: "the-art-of-dynamic-mesh",
    title: "The Art of Dynamic Mesh",
    description:
      "An openFrameworks study of image processing and mesh dynamics that visualizes light and movement.",
    src: "/img/of.webp",
    url: "https://www.instagram.com/p/Ctv2k7Nvcrb/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  "pulse-of-reflection": {
    slug: "pulse-of-reflection",
    title: "Pulse of Reflection",
    description:
      "A TouchDesigner piece where CHOPs and TOPs animate a reflective heart, and an exponential LFO gives it a lifelike rhythm.",
    src: "/img/heart.webp",
    url: "https://www.instagram.com/p/C8PaH0kSQ2Z/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  "dinis-surface": {
    slug: "dinis-surface",
    title: "Dini's Surface",
    description: "p5.js + GLSL study: the twist changes, the curvature doesn't.",
    src: "/img/lab_dinis_surface_hd.webp",
    url: "https://www.instagram.com/reel/DerNV-vT5xl/",
  },
  "manta-made-of-holes": {
    slug: "manta-made-of-holes",
    title: "A Manta Made of Holes",
    description: "GLSL shader: a gyroid lattice inside a procedural manta ray. No mesh, no rig.",
    src: "/img/lab_manta_gyroid_hd.webp",
    url: "https://www.instagram.com/reel/Debwj98zAv3/",
  },
  "ascii-spider-lily": {
    slug: "ascii-spider-lily",
    title: "ASCII Spider Lily",
    description: "TouchDesigner study: a 3D flower redrawn entirely as characters.",
    src: "/img/lab_ascii_spider_lily_hd.webp",
    url: "https://www.instagram.com/reel/DfHiD_vzRIW/",
  },
  "neural-signals-unity": {
    slug: "neural-signals-unity",
    title: "Neural Signals → Light",
    description: "Unity study: a live neural stream drives a procedural organism and 150,000 GPU particles.",
    src: "/img/lab_neural_signals_hd.webp",
    url: "https://www.instagram.com/reel/DejfBANzoHt/",
  },
};

export function getEnProject(slug: string) {
  return Object.hasOwn(enMap, slug) ? enMap[slug] : null;
}

export function listEnProjects(): SiteProject[] {
  return Object.values(enMap);
}
