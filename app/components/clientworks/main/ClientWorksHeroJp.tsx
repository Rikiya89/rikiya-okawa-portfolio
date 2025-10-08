"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";

const ClientWorksHeroJp = () => {
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
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      >
        <source src="/blackhole.webm" type="video/webm" />
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
              クライアントワーク実績
            </p>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={slideInFromLeft(0.5)}
            className="flex flex-col gap-2 font-bold font-panno
              2xl:text-6xl xl:text-6xl lg:text-5xl md:text-4xl sm:text-4xl"
          >
            <span className="text-white">安定したブランド運用、</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              キャンペーン立ち上げ、
            </span>
            <span className="text-white">LP制作。</span>
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
            href="/jp#projects"
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
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ClientWorksHeroJp;

