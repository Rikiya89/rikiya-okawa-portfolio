"use client";

import { ComponentType, useEffect } from "react";
import ClientWorksHero from "./ClientWorksHero";
import ClientWorksStack from "./ClientWorksStack";
import SectionHeading from "@/components/en/home/SectionHeading";
import ClientProjectsList, { ClientProjectCard } from "./ClientProjectsList";
import Footer from "@/components/en/main/Footer";

const EN_CLIENT_PROJECTS: ClientProjectCard[] = [
  {
    "slug": "shibuya-french-festival-2026",
    role: "Front-End Developer · UI, Interaction & WordPress Forms",
    "title": "Shibuya French Festival 2026 Website",
    "description": "Developed a responsive festival website with data-driven venue listings, accessible interactive components, and a WordPress-powered contact workflow.",
    "src": "/img/shibufre.webp",
    url: "https://www.shibufre.info/",
    "alt": "Shibuya French Festival 2026 website overview"
  },
  {
    src: "/img/udemy-business.webp",
    title: "Udemy Interview Media Site",
    description:
      "Developed a WordPress interview media site\nwith combined filtering search\nand Udemy REST API integration.",
    url: "https://www.udemybusiness.com/",
    slug: "udemy-business",
    role: "WordPress Developer · Theme, Search & REST API",
  },
  {
    src: "/img/timberland.webp",
    title: "Timberland Official Website",
    description:
      "Operational partner for Timberland Japan.\nDelivered campaign LPs in about three days and same-day news updates.",
    url: "https://www.timberland.co.jp/",
    slug: "timerland-official",
    role: "Web Engineer · Maintenance & LP Production",
  },
  {
    src: "/img/vans.webp",
    title: "VANS Official Website",
    description:
      "Maintained VANS Japan's site.\nShipped trend-driven LPs with rapid news updates.",
    url: "https://www.vans.co.jp/?srsltid=AfmBOoqG_8npx5qrTz7F4JvK7oWbCUnZXn9gySUwi0UjmycZez1zjvaJ",
    slug: "vans-official",
    role: "Web Engineer · Maintenance & LP Production",
  },
  {
    src: "/img/vans-news-thumbnail.webp",
    alt: "VANS Japan news page rendered through the Astro development system",
    title: "VANS News Development System",
    description:
      "Built an Astro workflow for VANS Japan news pages.\nAutomated legacy output, assets, and local preview.",
    slug: "vans-news",
    role: "Front-End Developer · Astro System & Build Automation",
  },
  {
    src: "/img/dickies.webp",
    title: "Dickies Official Website",
    description:
      "Supported Dickies Japan operations.\nProduced responsive LPs for product drops and campaigns.",
    url: "https://www.dickies.jp/",
    slug: "dickies-official",
    role: "Web Engineer · Maintenance & LP Production",
  },
  {
    src: "/img/lacoste.webp",
    title: "Lacoste Official Website",
    description:
      "Crafted Lacoste LPs that mirror the brand's refined identity.\nReleased campaign and sale content on schedule.",
    url: "https://www.lacoste.jp/",
    slug: "lacoste-official",
    role: "Web Engineer · LP Production",
  },
  {
    src: "/img/mhd.webp",
    title: "MHD Official Website",
    description:
      "Optimized caching and JavaScript performance for MHD.\nStabilized the existing site and improved load speed.",
    url: "https://www.mhdkk.com/",
    slug: "mhd-official",
    role: "Front-End Engineer · Performance Optimization",
  },
  {
    src: "/img/meiji.webp",
    title: "Meiji Official Website",
    description:
      "Built campaign LPs for Meiji launches.\nFramed each release with warm, trustworthy storytelling.",
    url: "https://www.meiji.co.jp/",
    slug: "meiji-official",
    role: "Web Engineer · LP Production",
  },
  {
    src: "/img/kikkoman.webp",
    title: "Kikkoman Official Website",
    description:
      "Created Kikkoman recipe and campaign LPs.\nBalanced friendly visuals with clear step-by-step flow.",
    url: "https://www.kikkoman.co.jp/",
    slug: "kikkoman-official",
    role: "Web Engineer · LP Production",
  },
];

type ClientWorksPageProps = {
  HeroComponent?: ComponentType;
  projects?: ClientProjectCard[];
  projectsHeading?: string;
  basePath?: string;
};

const ClientWorksPage = ({
  HeroComponent = ClientWorksHero,
  projects = EN_CLIENT_PROJECTS,
  projectsHeading = "Client Projects",
  basePath = "/clientworks",
}: ClientWorksPageProps) => {
  const Hero = HeroComponent;
  const scrollKey = basePath === "/clientworks_jp" ? "clientworks:scrollY:jp" : "clientworks:scrollY:en";

  useEffect(() => {
    if (typeof window === "undefined") return;
    let stored: { y?: number; ts?: number } | null = null;
    try {
      const raw = sessionStorage.getItem(scrollKey);
      if (raw) stored = JSON.parse(raw);
    } catch {
      stored = null;
    }
    if (typeof stored?.y !== "number") return;
    if (window.location.pathname !== basePath) return;
    if (window.location.hash) {
      sessionStorage.removeItem(scrollKey);
      return;
    }
    if (window.location.search.includes("modal=off")) return;
    if (typeof stored?.ts === "number" && Date.now() - stored.ts > 10 * 60 * 1000) {
      sessionStorage.removeItem(scrollKey);
      return;
    }
    sessionStorage.removeItem(scrollKey);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const root = document.documentElement;
        const prevScrollBehavior = root.style.scrollBehavior;
        root.style.scrollBehavior = "auto";
        window.scrollTo(0, stored!.y as number);
        requestAnimationFrame(() => {
          root.style.scrollBehavior = prevScrollBehavior;
        });
      });
    });
  }, [basePath, scrollKey]);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    root.classList.add("scroll-snap-y");
    return () => {
      root.classList.remove("scroll-snap-y");
    };
  }, []);

  return (
    <main id="main" className="flex flex-col items-center w-full">
      <div className="w-full snap-section">
        <Hero />
      </div>
      <section className="w-full snap-section section-space">
        {/* Anchor sits outside the snap-section so only the page's 80px scroll padding applies */}
        <div id="projects" className="scroll-mt-4">
          <SectionHeading index="01" meta={`${String(projects.length).padStart(2, "0")} projects`} title={projectsHeading} intro="Open a card for the full scope, stack and process behind each site." />
          <ClientProjectsList projects={projects} basePath={basePath} />
        </div>
      </section>
      <div className="w-full snap-section">
        <ClientWorksStack />
      </div>
      <div className="w-full snap-section">
        <Footer />
      </div>
    </main>
  );
};

export default ClientWorksPage;
