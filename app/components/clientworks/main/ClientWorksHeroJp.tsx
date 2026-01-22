"use client";

import { motion } from "framer-motion";
import type { MouseEvent } from "react";
import Image from "next/image";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";

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
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      >
        <source src="/blackhole.webm" type="video/webm" media="(min-width: 768px)" />
      </video>

      <div className="relative flex flex-row items-center justify-center px-20 w-full z-[20] md:px-8 sm:px-6 max-w-[1366px] mx-auto">
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
            <span className="text-white">Reliable brand operations,</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              campaign launches,
            </span>
            <span className="text-white">and LP production.</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={slideInFromLeft(0.8)}
            className="text-[20px] text-gray-300 max-w-[640px] font-panno leading-relaxed"
          >
            グローバルブランドから国内メーカーまで、レシピ特集や季節キャンペーンなどのLP制作を担当。
            アクセシビリティとパフォーマンスを維持しながら、短納期でも成果につながる制作を実現します。
          </motion.p>

          <motion.a
            initial="hidden"
            animate="visible"
            variants={slideInFromLeft(1)}
            href="#projects"
            onClick={handleScrollToProjects}
            className="button-primary cursor-pointer rounded-lg max-w-[220px] text-center text-white text-lg font-panno py-2"
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
