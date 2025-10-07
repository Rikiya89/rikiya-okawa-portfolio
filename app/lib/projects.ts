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
    description: `Managed Timberland Japan's site operations.\nDelivered seasonal campaign LPs within three days and published news updates the same day.\nHTML / SCSS / JavaScript / Node.js / Gulp.`,
    src: "/img/timberland.webp",
    url: "https://www.timberland.co.jp/",
  },
  {
    slug: "vans-official",
    title: "VANS Official Website",
    description: `Operated the VANS Japan e-commerce site.\nProduced trend-driven campaign LPs on tight schedules and shipped same-day news updates.\nHTML / SCSS / JavaScript / Node.js / Gulp.`,
    src: "/img/vans.webp",
    url: "https://www.vans.co.jp/",
  },
  {
    slug: "lacoste-official",
    title: "Lacoste Official Website",
    description: `Built landing pages for Lacoste Japan.\nMaintained the polished brand aesthetic while launching campaign and sale content on schedule.\nHTML / SCSS / JavaScript / Node.js / Gulp.`,
    src: "/img/lacoste.webp",
    url: "https://www.lacoste.jp/",
  },
  {
    slug: "meiji-official",
    title: "Meiji Official Website",
    description: `Produced LPs for Meiji's official site.\nAligned launches with product campaigns and highlighted the brand's approachable, trustworthy tone.\nHTML / SCSS / JavaScript / Node.js / Gulp.`,
    src: "/img/meiji.webp",
    url: "https://www.meiji.co.jp/",
  },
  {
    slug: "kikkoman-official",
    title: "Kikkoman Official Website",
    description: `Responsible for Kikkoman's LP production.\nCreated recipe and campaign pages with warm, easy-to-follow layouts.\nHTML / SCSS / JavaScript / Node.js / Gulp.`,
    src: "/img/kikkoman.webp",
    url: "https://www.kikkoman.co.jp/",
  },
  {
    slug: "the-art-of-dynamic-mesh",
    title: "The Art of Dynamic Mesh",
    description: `openFrameworks exploration.\nStudies how image processing interacts with mesh dynamics to paint motion.`,
    src: "/img/of.webp",
    url: "https://www.instagram.com/p/Ctv2k7Nvcrb/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    slug: "pulse-of-reflection",
    title: "Pulse of Reflection",
    description: `TouchDesigner installation.\nAnimates a reflective heart using CHOP/TOP and an exponential LFO to add a lifelike pulse.`,
    src: "/img/heart.webp",
    url: "https://www.instagram.com/p/C8PaH0kSQ2Z/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    slug: "dickies-official",
    title: "Dickies Official Website",
    description: `Maintained and improved Dickies Japan's site.\nDelivered responsive LPs for new product drops and campaign announcements.\nHTML / SCSS / JavaScript / Node.js / Gulp.`,
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
