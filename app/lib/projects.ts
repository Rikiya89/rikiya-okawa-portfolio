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
    slug: "timerland-official",
    title: "Timberland Official Website",
    description: `Operational partner for Timberland Japan.\nDelivered seasonal campaign LPs within about three days and turned around same-day news updates.\nMaintained stable operation while implementing front-end designs aligned with the brand's identity.\n\nTechnologies\nHTML / SCSS / JavaScript / Node.js / Gulp\n\nRole\nFront-End Engineering (Maintenance & LP Production)`,
    src: "/img/timberland.webp",
    url: "https://www.timberland.co.jp/",
  },
  {
    slug: "vans-official",
    title: "VANS Official Website",
    description: `Maintained VANS Japan's site.\nProduced seasonal and brand campaign LPs,\nand updated news articles within short turnaround times.\nImplemented trend-conscious front-end designs\nwhile maintaining stable and reliable site operations.\n\nTechnologies\nHTML / SCSS / JavaScript / Node.js / Gulp\n\nRole\nFront-End Engineering (Maintenance & LP Production)`,
    src: "/img/vans.webp",
    url: "https://www.vans.co.jp/",
  },
  {
    slug: "lacoste-official",
    title: "Lacoste Official Website",
    description: `Crafted Lacoste LPs that mirror the brand's refined identity.\nMaintained the polished brand aesthetic while launching campaign and sale content on schedule.\n\nTechnologies\nHTML / SCSS / JavaScript / Node.js / Gulp\n\nRole\nFront-End Engineering (Maintenance & LP Production)`,
    src: "/img/lacoste.webp",
    url: "https://www.lacoste.jp/",
  },
  {
    slug: "mhd-official",
    title: "MHD Official Website",
    description: `Optimized caching and JavaScript performance for MHD.\nImplemented JavaScript-based cache control to improve page stability and loading speed.\nAlso optimized resources and fine-tuned browser behavior to enhance overall user experience.\n\nTechnologies\nJavaScript / HTML / CSS / Node.js / Gulp\n\nRole\nFront-End Engineering (Maintenance & LP Production)`,
    src: "/img/mhd.webp",
    url: "https://www.mhdkk.com/",
  },
  {
    slug: "meiji-official",
    title: "Meiji Official Website",
    description: `Built campaign LPs for Meiji launches.\nAligned launches with product campaigns and highlighted the brand's approachable, trustworthy tone.\n\nTechnologies\nHTML / SCSS / JavaScript / Node.js / Gulp\n\nRole\nFront-End Engineering (Maintenance & LP Production)`,
    src: "/img/meiji.webp",
    url: "https://www.meiji.co.jp/",
  },
  {
    slug: "kikkoman-official",
    title: "Kikkoman Official Website",
    description: `Created Kikkoman recipe and campaign LPs.\nDeveloped warm, easy-to-follow layouts that support every step.\n\nTechnologies\nHTML / SCSS / JavaScript / Node.js / Gulp\n\nRole\nFront-End Engineering (Maintenance & LP Production)`,
    src: "/img/kikkoman.webp",
    url: "https://www.kikkoman.co.jp/",
  },
  {
    slug: "the-art-of-dynamic-mesh",
    title: "The Art of Dynamic Mesh",
    description: `openFrameworks study pairing image processing with mesh dynamics.\nExplores how the two interact to paint motion.`,
    src: "/img/of.webp",
    url: "https://www.instagram.com/p/Ctv2k7Nvcrb/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    slug: "pulse-of-reflection",
    title: "Pulse of Reflection",
    description: `TouchDesigner installation of a reflective heart.\nAnimates the piece with CHOP/TOP and an exponential LFO to add a lifelike pulse.`,
    src: "/img/heart.webp",
    url: "https://www.instagram.com/p/C8PaH0kSQ2Z/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    slug: "dickies-official",
    title: "Dickies Official Website",
    description: `Supported Dickies Japan operations.\nDelivered responsive LPs for new product drops and campaign announcements.\n\nTechnologies\nHTML / SCSS / JavaScript / Node.js / Gulp\n\nRole\nFront-End Engineering (Maintenance & LP Production)`,
    src: "/img/dickies.webp",
    url: "https://www.dickies.jp/",
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
