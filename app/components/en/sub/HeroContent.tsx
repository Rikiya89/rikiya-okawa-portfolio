"use client";

import React from "react";
import { motion } from "framer-motion";
import {
slideInFromLeft,
slideInFromRight,
slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
return (
<motion.div
    initial="hidden"
    animate="visible"
    className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20] md:px-8 sm:px-8"
>
    <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
    <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[7px] border border-[#9cb2ff] opacity-[0.9]"
    >
        <SparklesIcon className="text-[#ba9cff] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[15px] font-panno">
            Rikiya Okawa Portfolio
        </h1>
    </motion.div>

    <motion.div
        variants={slideInFromLeft(0.5)}
        className="flex flex-col gap-6 mt-6 
        2xl:text-7xl xl:text-6xl 
        lg:text-5xl md:text-4xl 
        sm:text-4xl font-bold 
        text-white max-w-[600px] 
        w-auto h-auto font-panno"
    >
        <span>
        Providing
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            the best{" "}
        </span>
        immersive experience.
        </span>
    </motion.div>

    <motion.p
        variants={slideInFromLeft(0.8)}
        className="text-[21px] text-gray-400 my-5 max-w-[600px] font-panno"
    >
        Hello! My name is Rikiya Okawa, and I graduated from Kanda Institute of Foreign Languages in November 2015. 
        I completed my degree in Digital Arts at Grossmont College in June 2017. After returning to Japan, I worked for Costco Wholesale for a year and then for Accor Hotels for three years. 
        I continued my studies and graduated from Digital Hollywood Tokyo in September 2022, specialising in UI/UX design. At the moment, I&apos;m really enjoying working in the world of web production.
    </motion.p>
    <motion.a
        href="/aboutme"
        variants={slideInFromLeft(1)}
        className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] font-panno text-lg"
    >
        Learn More!
    </motion.a>
    </div>

    <motion.div
    variants={slideInFromRight(0.8)}
    className="w-full h-full 2xl:flex xl:flex lg:flex md:hidden sm:hidden justify-center items-center"
    >
    <Image
        src="/img/mainIconsdark.svg"
        alt="work icons"
        height={650}
        width={650}
    />
    </motion.div>
</motion.div>
);
};

export default HeroContent;