"use client";

import { ComponentType, useEffect } from "react";
import ClientWorksHeroJp from "./ClientWorksHeroJp";
import ClientWorksStack from "./ClientWorksStack";
import SectionHeading from "@/components/en/home/SectionHeading";
import ClientProjectsList, { ClientProjectCard } from "./ClientProjectsList";
import { jpClientProjects } from "@/lib/clientProjectsJp";
import Footer from "@/components/jp/main/Footer";

type ClientWorksPageProps = {
  HeroComponent?: ComponentType;
  projects?: ClientProjectCard[];
  projectsHeading?: string;
  basePath?: string;
};

const ClientWorksPageJp = ({
  HeroComponent = ClientWorksHeroJp,
  projects = jpClientProjects,
  projectsHeading = "Client Projects",
  basePath = "/clientworks_jp",
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
          <SectionHeading index="01" meta={`${String(projects.length).padStart(2, "0")} projects`} title={projectsHeading} intro="各カードから、担当範囲・技術スタック・制作プロセスの詳細をご覧いただけます。" />
          <ClientProjectsList projects={projects} basePath={basePath} />
        </div>
      </section>
      <div className="w-full snap-section">
        <ClientWorksStack intro="これらのクライアントサイトの制作・運用で使用した技術です。" />
      </div>
      <div className="w-full snap-section">
        <Footer />
      </div>
    </main>
  );
};

export default ClientWorksPageJp;
