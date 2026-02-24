"use client";

import { motion } from "framer-motion";
import type { MouseEvent } from "react";
import Image from "next/image";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import ResponsiveVideo from "@/components/common/ResponsiveVideo";

const ClientWorksHeroJp = () => {
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
      className="relative flex flex-col w-full overflow-hidden pt-[140px] pb-16"
    >
      <ResponsiveVideo
        src="/blackhole.webm"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />

      <div className="relative flex flex-row items-center justify-center w-full z-[20] max-w-[1366px] mx-auto px-6 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="flex w-full flex-col gap-5 text-start">
          <motion.div
            variants={slideInFromTop}
            initial="hidden"
            animate="visible"
            className="Welcome-box flex items-center py-[8px] px-[10px] border border-[#9cb2ff]/80 bg-[#040222]/60 backdrop-blur-md"
          >
            <SparklesIcon className="text-[#ba9cff] mr-[10px] h-5 w-5" />
            <p className="Welcome-text text-[15px] font-panno text-gray-100">
              Client Work Case Studies
            </p>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={slideInFromLeft(0.5)}
            className="flex flex-col gap-2 font-bold font-panno
              2xl:text-6xl xl:text-6xl lg:text-5xl md:text-4xl sm:text-4xl"
          >
            <span className="text-white">Operations, improvements,</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              and landing page production
            </span>
            <span className="text-white">with consistent quality.</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={slideInFromLeft(0.8)}
            className="text-[20px] text-gray-300 max-w-[640px] font-panno leading-relaxed"
          >
            グローバルブランドから国内メーカーまで、運用・改善・LP制作を担当。
            11人チームでGitを用いた継続開発を行い、仕様確認や不具合調査にも対応しています。
            アクセシビリティとパフォーマンスを意識し、短納期でも品質を保った制作を実現します。
          </motion.p>

          <motion.a
            initial="hidden"
            animate="visible"
            variants={slideInFromLeft(1)}
            href="#projects"
            onClick={handleScrollToProjects}
            className="button-primary cursor-pointer rounded-lg max-w-[220px] text-center text-white text-lg font-panno py-3 min-h-[44px]"
          >
            制作実績を見る
          </motion.a>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideInFromRight(0.8)}
          className="w-full h-full 2xl:flex xl:flex lg:flex md:hidden sm:hidden justify-center items-center"
        >
          <Image
            src="/img/mainIconsdark.svg"
            alt="Creative technology icons"
            width={520}
            height={520}
            sizes="(min-width: 1024px) 520px, 0px"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ClientWorksHeroJp;
