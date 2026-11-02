"use client";

import { useRef, type MouseEvent } from "react";
import dynamic from "next/dynamic";
import FlowerAnchor from "@/components/en/home/FlowerAnchor";

const FlowerField = dynamic(() => import("@/components/en/home/FlowerField"), {
  ssr: false,
  loading: () => null,
});

const ClientWorksHeroJp = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const flowerAnchorRef = useRef<HTMLDivElement>(null);
  const handleScrollToProjects = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const target = document.getElementById("projects");
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    if (typeof history !== "undefined") {
      history.replaceState(null, "", "#projects");
    }
  };

  return (
    <section
      id="client-hero"
      ref={sectionRef}
      className="relative w-full overflow-hidden scroll-mt-[var(--nav-h)]"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <FlowerField sectionRef={sectionRef} anchorRef={flowerAnchorRef} />
      </div>

      <div
        className="page-grid relative z-10 pt-[calc(var(--nav-h)+56px)] xl:grid xl:items-center xl:gap-x-[var(--gutter)] xl:grid-cols-[minmax(0,720px)_minmax(0,1fr)]"
      >
        <div className="max-w-[720px] flex flex-col text-start">
          <div
            style={{ animationDelay: "0ms" }}
            className="hero-in section-head__bar type-label"
          >
            <p>
              Client Work Case Studies
            </p>
          </div>

          <h1
            lang="en"
            className="type-display mt-8 md:mt-10 text-[10.4vw] md:text-[7vw] lg:text-[clamp(52px,5.4vw,80px)] xl:text-[clamp(52px,4.6vw,76px)] text-balance"
          >
            Operations, improvements, <span>and landing page production</span> with consistent quality<span className="text-signal">.</span>
          </h1>

          <p
            style={{ animationDelay: "120ms" }}
            className="hero-in mt-8 md:mt-10 text-[16px] md:text-[18px] leading-[1.65] fg-2 max-w-[56ch] text-jp-wrap"
          >
            グローバルブランドから国内メーカーまで、運用・改善・LP制作を担当。
            11人チームでGitを用いた継続開発を行い、仕様確認や不具合調査にも対応しています。
            アクセシビリティとパフォーマンスを意識し、短納期でも品質を保った制作を実現します。
          </p>

          <div
            style={{ animationDelay: "200ms" }}
            className="hero-in mt-10 flex flex-wrap gap-3">
            <a
              href="#projects"
              onClick={handleScrollToProjects}
              className="button-primary px-6 py-3 min-h-[48px]"
            >
              制作実績を見る
            </a>
          </div>
        </div>
        <FlowerAnchor ref={flowerAnchorRef} />
      </div>
    </section>
  );
};

export default ClientWorksHeroJp;
