"use client";

import React, { useRef } from "react";
import dynamic from "next/dynamic";
import FlowerAnchor from "@/components/en/home/FlowerAnchor";

const FlowerField = dynamic(() => import("./FlowerField"), {
  ssr: false,
  loading: () => null,
});

const HomeHero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const flowerAnchorRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative overflow-hidden scroll-mt-[var(--nav-h)]"
    >
      {/* Full-bleed GLSL field; ink lines composited over --paper in the shader */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <FlowerField sectionRef={sectionRef} anchorRef={flowerAnchorRef} />
      </div>

      <div
        className="page-grid relative z-10 pt-[calc(var(--nav-h)+56px)] xl:grid xl:items-center xl:gap-x-[var(--gutter)] xl:grid-cols-[minmax(0,680px)_minmax(0,1fr)]"
      >
        <div className="max-w-[680px] flex flex-col text-start">
          <p
            style={{ animationDelay: "0ms" }}
            className="hero-in section-head__bar type-label"
          >
            <span>Creative Developer / Creative Technologist</span>
          </p>

          <h1
            lang="en"
            className="type-display mt-8 md:mt-10 text-[11.4vw] md:text-[7.6vw] lg:text-[clamp(60px,6.2vw,84px)] xl:text-[clamp(60px,5.4vw,84px)] text-balance"
          >
            I build <span>generative systems</span> and interactive prototypes for brands<span className="text-signal">.</span>
          </h1>

          <p
            style={{ animationDelay: "120ms" }}
            className="hero-in mt-8 md:mt-10 text-[16px] md:text-[18px] leading-[1.65] fg-2 max-w-[54ch]"
          >
            Front-end engineer and creative coder working across Next.js, TypeScript, GLSL, p5.js and TouchDesigner. I take ideas from rough code sketches to polished, accessible experiences.
          </p>

          <div
            style={{ animationDelay: "200ms" }}
            className="hero-in mt-10 flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3">
            <a
              href="#work"
              className="button-primary px-6 py-3 min-h-[48px]"
            >
              See selected work <span aria-hidden="true">↓</span>
            </a>
            <a
              href="/aboutme"
              className="button-secondary px-6 py-3 min-h-[48px]"
            >
              About me
            </a>
          </div>

          <p className="hidden lg:flex mt-14 gap-6 border-t border-[var(--rule)] pt-3 type-label fg-2">
            <span>Fig. 01</span>
            <span>Flower of Life, GLSL — move your cursor.</span>
          </p>
        </div>
        <FlowerAnchor ref={flowerAnchorRef} />
      </div>
    </section>
  );
};

export default HomeHero;
