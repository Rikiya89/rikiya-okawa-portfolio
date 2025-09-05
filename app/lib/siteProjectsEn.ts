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
      "Explore a harmonious fusion of design and coding in my interactive portfolio. Created using HTML, SCSS, and JavaScript, this website displays my digital art and web development prowess via user-friendly navigation and captivating visuals.",
    src: "/img/portfolio_no1.webp",
    url: "https://www.rikiya-okawa963.jp/index.html/",
  },
  "react-weather-app": {
    slug: "react-weather-app",
    title: "React Weather App",
    description:
      "Discover the React Weather App—crafted with React and JavaScript, leveraging weather and geographic APIs to provide precise, real-time updates with a modern, user-friendly interface.",
    src: "/img/weather_app.webp",
    url: "https://relaxed-youtiao-4c1124.netlify.app/",
  },
  "iphone14-clone-3d": {
    slug: "iphone14-clone-3d",
    title: "iPhone 14 Clone 3D Website",
    description:
      "Explore my 3D React portfolio — GSAP-driven animations narrate my development journey through engaging and innovative displays.",
    src: "/img/iphone14_clonewebsite.webp",
    url: "https://apple-iphone3d-website.netlify.app/",
  },
  "guardians-of-the-moon": {
    slug: "guardians-of-the-moon",
    title: "GUARDIANS OF THE MOON",
    description:
      "Graduation project: A VR game and an interactive video built with Unity and TouchDesigner to enhance services at a VR/AR center.",
    src: "/img/guardians.webp",
    url: "/guardians_en",
  },
  "water-drop-effect": {
    slug: "water-drop-effect",
    title: "Water Drop Effect",
    description:
      "TouchDesigner piece: GLSL shaders and TOPs capture the essence of water through a captivating visual journey.",
    src: "/img/water_drops_culpture.webp",
    url: "https://www.instagram.com/reel/C5I0TBkSrk6/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  "the-art-of-dynamic-mesh": {
    slug: "the-art-of-dynamic-mesh",
    title: "The Art of Dynamic Mesh",
    description:
      "openFrameworks project — image processing and mesh dynamics weave a compelling story of light and movement.",
    src: "/img/of.webp",
    url: "https://www.instagram.com/p/Ctv2k7Nvcrb/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  "pulse-of-reflection": {
    slug: "pulse-of-reflection",
    title: "Pulse of Reflection",
    description:
      "TouchDesigner work — CHOPs/TOPs animate a reflective heart; LFO adds lifelike motion and presence.",
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

