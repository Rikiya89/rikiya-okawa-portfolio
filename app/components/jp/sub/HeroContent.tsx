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
    className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
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
        className="text-lg text-gray-400 my-5 max-w-[600px]"
    >
        こんにちは、大川力也です。2015年11月に神田外語学院を卒業し、2017年6月にグロスモントカレッジでデジタルアートの学位を取得しました。
        日本に帰国後、コストコホールセールで1年間働き、その後アコーホテルズで3年間働きました。
        その後も勉強を続け、2022年9月にデジタルハリウッド東京校でUI/UXデザインを専攻し卒業しました。
        現在は、Web制作の分野で情熱を持って仕事をしています。
    </motion.p>
    <motion.a
        href="https://www.linkedin.com/in/rikiya-okawa369/"
        target="_blank"
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
        src="/mainIconsdark.svg"
        alt="work icons"
        height={650}
        width={650}
    />
    </motion.div>
</motion.div>
);
};

export default HeroContent;