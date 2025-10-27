"use client";

import { ComponentType } from "react";
import ClientWorksHero from "./ClientWorksHero";
import ClientWorksSkills from "./ClientWorksSkills";
import ClientProjectsList, { ClientProjectCard } from "./ClientProjectsList";
import Footer from "./Footer";

const EN_CLIENT_PROJECTS: ClientProjectCard[] = [
  {
    src: "/img/timberland.webp",
    title: "Timberland Official Website",
    description:
      "Operational partner for Timberland Japan.\nDelivered campaign LPs in about three days and same-day news updates.",
    url: "https://www.timberland.co.jp/",
    slug: "timerland-official",
  },
  {
    src: "/img/vans.webp",
    title: "VANS Official Website",
    description:
      "Maintained VANS Japan's site.\nShipped trend-driven LPs with rapid news updates.",
    url: "https://www.vans.co.jp/?srsltid=AfmBOoqG_8npx5qrTz7F4JvK7oWbCUnZXn9gySUwi0UjmycZez1zjvaJ",
    slug: "vans-official",
  },
  {
    src: "/img/dickies.webp",
    title: "Dickies Official Website",
    description:
      "Supported Dickies Japan operations.\nProduced responsive LPs for product drops and campaigns.",
    url: "https://www.dickies.jp/",
    slug: "dickies-official",
  },
  {
    src: "/img/lacoste.webp",
    title: "Lacoste Official Website",
    description:
      "Crafted Lacoste LPs that mirror the brand's refined identity.\nReleased campaign and sale content on schedule.",
    url: "https://www.lacoste.jp/",
    slug: "lacoste-official",
  },
  {
    src: "/img/mhd.webp",
    title: "MHD Official Website",
    description:
      "Optimized caching and JavaScript performance for MHD.\nStabilized the existing site and improved load speed.",
    url: "https://www.mhdkk.com/",
    slug: "mhd-official",
  },
  {
    src: "/img/meiji.webp",
    title: "Meiji Official Website",
    description:
      "Built campaign LPs for Meiji launches.\nFramed each release with warm, trustworthy storytelling.",
    url: "https://www.meiji.co.jp/",
    slug: "meiji-official",
  },
  {
    src: "/img/kikkoman.webp",
    title: "Kikkoman Official Website",
    description:
      "Created Kikkoman recipe and campaign LPs.\nBalanced friendly visuals with clear step-by-step flow.",
    url: "https://www.kikkoman.co.jp/",
    slug: "kikkoman-official",
  },
];

type ClientWorksPageProps = {
  HeroComponent?: ComponentType;
  SkillTextComponent?: ComponentType;
  projects?: ClientProjectCard[];
  projectsHeading?: string;
  basePath?: string;
};

const ClientWorksPage = ({
  HeroComponent = ClientWorksHero,
  SkillTextComponent,
  projects = EN_CLIENT_PROJECTS,
  projectsHeading = "My Client Projects",
  basePath = "/clientworks",
}: ClientWorksPageProps) => {
  const Hero = HeroComponent;

  return (
    <main className="flex flex-col items-center w-full">
      <Hero />
      <ClientWorksSkills SkillTextComponent={SkillTextComponent} />
      <ClientProjectsList heading={projectsHeading} projects={projects} basePath={basePath} />
      <Footer />
    </main>
  );
};

export default ClientWorksPage;
