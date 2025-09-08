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
      "Explore a seamless blend of design and code in my interactive portfolio. Built with HTML, SCSS, and JavaScript, it showcases my digital art and web development through intuitive navigation and engaging visuals. Browse projects in a clean, accessible layout.",
    src: "/img/portfolio_no1.webp",
    url: "https://www.rikiya-okawa963.jp/index.html/",
  },
  "react-weather-app": {
    slug: "react-weather-app",
    title: "React Weather App",
    description:
      "A React app using weather and geolocation APIs to deliver real‑time conditions in a clean, responsive UI. Search cities seamlessly and explore forecasts with intuitive interactions.",
    src: "/img/weather_app.webp",
    url: "https://relaxed-youtiao-4c1124.netlify.app/",
  },
  "iphone14-clone-3d": {
    slug: "iphone14-clone-3d",
    title: "iPhone 14 Clone 3D Website",
    description:
      "A 3D React experience with GSAP animations that showcase motion design and micro‑interactions inspired by the iPhone 14.",
    src: "/img/iphone14_clonewebsite.webp",
    url: "https://apple-iphone3d-website.netlify.app/",
  },
  "guardians-of-the-moon": {
    slug: "guardians-of-the-moon",
    title: "GUARDIANS OF THE MOON",
    description:
      "Graduation project: a Unity VR game and a TouchDesigner installation. Built over one month (VR) and one week (installation) to enhance an AR/VR center’s experience.",
    src: "/img/guardians.webp",
    url: "/guardians_en",
  },
  "water-drop-effect": {
    slug: "water-drop-effect",
    title: "Water Drop Effect",
    description:
      "TouchDesigner study: GLSL shaders and TOPs capture the essence of water through procedural motion.",
    src: "/img/water_drops_culpture.webp",
    url: "https://www.instagram.com/reel/C5I0TBkSrk6/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  "the-art-of-dynamic-mesh": {
    slug: "the-art-of-dynamic-mesh",
    title: "The Art of Dynamic Mesh",
    description:
      "An openFrameworks exploration of image processing and mesh dynamics, visualizing light and movement.",
    src: "/img/of.webp",
    url: "https://www.instagram.com/p/Ctv2k7Nvcrb/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  "pulse-of-reflection": {
    slug: "pulse-of-reflection",
    title: "Pulse of Reflection",
    description:
      "TouchDesigner piece: CHOPs/TOPs animate a reflective heart; an exponential LFO adds a lifelike rhythm.",
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
