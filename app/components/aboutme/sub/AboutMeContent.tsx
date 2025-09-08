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
                        src="/img/profile.webp"
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
                        Based in Tokyo, I studied in San Diego and later returned to Japan. I graduated from Kanda Foreign Language College in Nov 2015, earned a Digital Arts degree from Grossmont College in June 2017, and completed a UI/UX program at Digital Hollywood Tokyo in Sept 2022.
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
                        I combine communication and digital design. At Accor Hotels I improved international guest relations, handling multilingual inquiries and complex cases. At Tree Digital Studio I refined UI/UX for educational AR games using user feedback. At Little Planet I researched AR/VR interaction patterns across age groups.
                    </motion.p>
                    <motion.p
                        variants={slideInFromLeft(0.4)}
                        className="text-[18px] text-gray-400 font-panno py-3"
                    >
                        Today I build responsive, performant websites with HTML5, CSS/SCSS, JavaScript, and Node.js — balancing business goals with great UX.
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
                        Outside work, I create with Unity, TouchDesigner, openFrameworks, and p5.js; lately I’ve been exploring Houdini for VFX and animation. I aim to push interaction, motion, and craft through creative tooling. Follow my work on Instagram <a href="https://www.instagram.com/ricky_o_369/" target="_blank" className="font-bold">@ricky_o_369</a>.
                    </motion.p>
                </div>
            </div>
        </motion.div>

    );
};

export default AboutMeContent;
