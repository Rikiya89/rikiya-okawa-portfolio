// app/lib/siteProjectsEn.ts
export type SiteProject = {
  slug: string;
  title: string;
  description: string;
  src: string;
  url: string;
};

const enMap: Record<string, SiteProject> = {
  "portfolio-website": {
    slug: "portfolio-website",
    title: "Portfolio Website",
    description:
      "HTML/SCSS/JavaScript portfolio with a clean, responsive UI.\nBrowse projects through intuitive navigation and engaging visuals.",
    src: "/img/portfolio_no1.webp",
    url: "https://www.rikiya-okawa963.jp/index.html/",
  },
  "react-weather-app": {
    slug: "react-weather-app",
    title: "React Weather App",
    description:
      "Built with React and JavaScript.\nUses weather and geolocation APIs to deliver everything from city search to real-time conditions\nin a light, intuitive UI.",
    src: "/img/weather_app.webp",
    url: "https://relaxed-youtiao-4c1124.netlify.app/",
  },
  "iphone14-clone-3d": {
    slug: "iphone14-clone-3d",
    title: "3D iPhone Product Page",
    description:
      "Built with React and JavaScript.\nAn interactive 3D model with a scroll-synced camera animation\nthat reveals product features step by step.",
    src: "/img/iphone14_clonewebsite.webp",
    url: "https://apple-iphone3d-website.netlify.app/",
  },
  "guardians-of-the-moon": {
    slug: "guardians-of-the-moon",
    title: "GUARDIANS OF THE MOON",
    description:
      "Graduation project pairing a Unity VR shooter with a TouchDesigner installation.\nBuilt with an AR/VR center to stage a base-defense scenario using synchronized mission briefings and haptic VR feedback.\nDelivered on a one-month (VR) and one-week (installation) timeline.",
    src: "/img/guardians.webp",
    url: "/guardians_en",
  },
  "water-drop-effect": {
    slug: "water-drop-effect",
    title: "Water Drop Effect",
    description:
      "TouchDesigner study: GLSL shaders and TOPs capture the essence of water\nthrough procedural motion.",
    src: "/img/water_drops_culpture.webp",
    url: "https://www.instagram.com/reel/C5I0TBkSrk6/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  "the-art-of-dynamic-mesh": {
    slug: "the-art-of-dynamic-mesh",
    title: "The Art of Dynamic Mesh",
    description:
      "An openFrameworks exploration of image processing and mesh dynamics,\nvisualizing light and movement.",
    src: "/img/of.webp",
    url: "https://www.instagram.com/p/Ctv2k7Nvcrb/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  "pulse-of-reflection": {
    slug: "pulse-of-reflection",
    title: "Pulse of Reflection",
    description:
      "TouchDesigner piece: CHOPs/TOPs animate a reflective heart;\nan exponential LFO adds a lifelike rhythm.",
    src: "/img/heart.webp",
    url: "https://www.instagram.com/p/C8PaH0kSQ2Z/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
};

export function getEnProject(slug: string) {
  return enMap[slug] ?? null;
}

export function listEnProjects(): SiteProject[] {
  return Object.values(enMap);
}
