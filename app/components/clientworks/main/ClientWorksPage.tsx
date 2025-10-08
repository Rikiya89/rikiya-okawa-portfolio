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
      "Handled Timberland Japan's website operations.\nBuilt seasonal campaign LPs on tight deadlines\nand delivered same-day news updates.",
    url: "https://www.timberland.co.jp/",
    slug: "timerland-official",
  },
  {
    src: "/img/vans.webp",
    title: "VANS Official Website",
    description:
      "Handled VANS Japan's official website operations.\nCreated trend-focused LPs and updated news\nwithin tight deadlines.",
    url: "https://www.vans.co.jp/?srsltid=AfmBOoqG_8npx5qrTz7F4JvK7oWbCUnZXn9gySUwi0UjmycZez1zjvaJ",
    slug: "vans-official",
  },
  {
    src: "/img/dickies.webp",
    title: "Dickies Official Website",
    description:
      "Supported Dickies Japan with ongoing maintenance.\nCreated practical, responsive LPs for new product launches.",
    url: "https://www.dickies.jp/",
    slug: "dickies-official",
  },
  {
    src: "/img/lacoste.webp",
    title: "Lacoste Official Website",
    description:
      "Produced polished LPs that reflect Lacoste's refined aesthetic.\nHandled seasonal campaigns and sale announcements.",
    url: "https://www.lacoste.jp/",
    slug: "lacoste-official",
  },
  {
    src: "/img/mhd.webp",
    title: "MHD Official Website",
    description:
      "Handled JavaScript-based cache control and performance optimization.\nEnhanced stability and response speed for the existing website.",
    url: "https://www.mhdkk.com/",
    slug: "mhd-official",
  },
  {
    src: "/img/meiji.webp",
    title: "Meiji Official Website",
    description:
      "Delivered LPs for Meiji's new products and campaigns.\nFocused on warm, trustworthy storytelling for families.",
    url: "https://www.meiji.co.jp/",
    slug: "meiji-official",
  },
  {
    src: "/img/kikkoman.webp",
    title: "Kikkoman Official Website",
    description:
      "Built Kikkoman recipe and campaign LPs.\nBalanced friendly visuals with clear step-by-step information.",
    url: "https://www.kikkoman.co.jp/",
    slug: "kikkoman-official",
  },
  {
    src: "/img/of.webp",
    title: "The Art of Dynamic Mesh",
    description:
      "openFrameworks exploration combining image processing and mesh dynamics.\nVisual study of light and movement.",
    url: "https://www.instagram.com/p/Ctv2k7Nvcrb/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    slug: "the-art-of-dynamic-mesh",
  },
  {
    src: "/img/heart.webp",
    title: "Pulse of Reflection",
    description:
      "TouchDesigner installation animating a reflective heart.\nAn exponential LFO infuses a lifelike rhythm.",
    url: "https://www.instagram.com/p/C8PaH0kSQ2Z/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    slug: "pulse-of-reflection",
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
