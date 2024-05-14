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
                        Starting in Tokyo, I ventured to San Diego and then back again, experiencing a rich tapestry of education and work. 
                        My journey began at Kanda Foreign Language Institute, where I graduated in November 2015 with a solid foundation in languages. 
                        My love for digital expression led me to Grossmont College, where I earned a degree in digital arts by June 2017. 
                        Pursuing my passion for user-centric design, I specialized in UI/UX at Digital Hollywood in Tokyo, graduating in September 2022.
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
                        My career has been marked by the blend of communication skills and digital innovation. 
                        At Accor Hotels, I improved international guest relations, handling multilingual inquiries and complex situations with ease. 
                        At Tree Digital Studio Co., Ltd., I enhanced the UI/UX of educational AR games, using user feedback to refine both functionality and aesthetics. 
                        At Little Planet Inc., I gained valuable insights into AR/VR user experiences, studying how different demographics interact with these technologies.
                    </motion.p>
                    <motion.p
                        variants={slideInFromLeft(0.4)}
                        className="text-[18px] text-gray-400 font-panno py-3"
                    >
                        Currently, as a Web Engineer at Fivestar Interactive Inc., I use HTML5, CSS/SCSS, JavaScript, and Node.js to create responsive, 
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
                        Outside of my professional work, I enjoy exploring creative projects with software like Unity, TouchDesigner, openFrameworks, and p5.js. Recently, 
                        I&apos;ve been fascinated by Houdini and its potential for creating detailed visual effects and animations. Looking forward, 
                        I&apos;m excited to apply my diverse digital skills to innovate and solve problems creatively in future projects, pushing the boundaries of digital interaction and design. 
                        You can follow my creative journey on Instagram <a href="https://www.instagram.com/ricky_o_369/" target="_blank">here.</a><br/>
                        <span className="font-bold">Instagram:</span><a href="https://www.instagram.com/ricky_o_369/" target="_blank" className="font-bold"> @ricky_o_369</a>
                    </motion.p>
                </div>
            </div>
        </motion.div>

    );
};

export default AboutMeContent;