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

const AboutMeContent = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20] md:px-8 sm:px-8"
        >
            <div className="2xl:flex 2xl:flex-row-reverse 
                xl:flex xl:flex-row-reverse 
                lg:flex lg:flex-col lg:justify-center lg:items-center
                md:flex md:flex-col md:justify-center md:items-center
                sm:flex sm:flex-col sm:justify-center sm:items-center">
                <motion.div
                    variants={slideInFromRight(0.9)}
                    className="flex"
                >
                    <Image
                        src="/profile.webp"
                        alt="profile icons"
                        height={650}
                        width={650}
                        style={{ opacity: 0.8 }} 
                    />
                </motion.div>
                <div className="2xl:max-w-[645px] xl:max-w-[600px] lg:max-w[585px]">
                    <motion.div
                        variants={slideInFromLeft(0.9)}
                        className="Welcome-text flex flex-col gap-6 mt-6 
                                    2xl:text-7xl xl:text-6xl 
                                    lg:text-5xl md:text-4xl 
                                    sm:text-4xl font-bold 
                                    text-white max-w-[600px] 
                                    w-auto h-auto font-panno"
                        >
                        <span>
                            Rikiya Okawa
                        </span>
                    </motion.div>

                    <motion.p
                        variants={slideInFromLeft(0.8)}
                        className="Welcome-text text-[21px] text-gray-400 font-panno font-bold py-3"
                    >
                        Professional Journey
                    </motion.p>
                    <motion.p
                        variants={slideInFromLeft(0.7)}
                        className="text-[18px] text-gray-400 font-panno"
                    >
                        Embarking from Tokyo, reaching out to San Diego, and returning, my educational and professional paths have woven through diverse landscapes and disciplines.
                        I began with a language foundation at Kanda Foreign Language Institute, graduating in November 2015.
                        My passion for digital expression flourished at Grossmont College, culminating in a degree in digital arts by June 2017.
                        A relentless pursuit of user-centric design brought me to specialize in UI/UX at Tokyo&apos;s Digital Hollywood, where I graduated in September 2022.
                    </motion.p>
                    <motion.p
                        variants={slideInFromLeft(0.6)}
                        className="Welcome-text text-[21px] text-gray-400 font-panno font-bold py-3"
                    >
                        Career Highlights
                    </motion.p>
                    <motion.p
                        variants={slideInFromLeft(0.5)}
                        className="text-[18px] text-gray-400 font-panno"
                    >
                        The integration of communication skills and digital innovation has been a hallmark of my career.
                        At Accor Hotels, I enhanced international guest relations, managing multilingual inquiries and complex situations with finesse.
                        My tenure at Tree Digital Studio Co., Ltd. saw me elevating the UI/UX of educational AR games, incorporating user feedback to refine both functionality and aesthetics.
                        At Little Planet Inc., I gained valuable insights into AR/VR user experiences, studying diverse demographic interactions and preferences.
                    </motion.p>
                    <motion.p
                        variants={slideInFromLeft(0.4)}
                        className="text-[18px] text-gray-400 font-panno py-3"
                    >
                        Currently, as a Web Engineer at Fivestar Interactive Inc., I leverage HTML5, CSS/SCSS, JavaScript, and Node JS to develop responsive,
                        engaging websites that exceed client expectations and enhance user engagement.
                    </motion.p>
                    <motion.p
                        variants={slideInFromLeft(0.3)}
                        className="Welcome-text text-[21px] text-gray-400 font-panno font-bold py-3"
                    >
                        Creative Passions and Vision
                    </motion.p>
                    <motion.p
                        variants={slideInFromLeft(0.2)}
                        className="text-[18px] text-gray-400 font-panno pb-9"
                    >
                        Beyond professional engagements, my creative pursuits involve using cutting-edge software like Unity, TouchDesigner, openFrameworks, and p5.js.
                        Recently, I&apos;ve been captivated by Houdini, exploring its potential for creating detailed visual effects and animations.
                        Looking ahead, I am excited to apply my broad digital perspective to innovate and creatively solve problems in upcoming projects,
                        pushing the boundaries of digital interaction and design.
                    </motion.p>
                </div>
            </div>
        </motion.div>

    );
};

export default AboutMeContent;