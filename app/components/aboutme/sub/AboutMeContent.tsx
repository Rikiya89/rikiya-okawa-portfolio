"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop,
} from "@/utils/motion";
import Image from "next/image";

const AboutMeContent = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="relative flex flex-row items-center justify-center w-full max-w-[1440px] mx-auto px-[var(--margin)] pt-[calc(var(--nav-h)+56px)] pb-20 md:pt-[calc(var(--nav-h)+80px)]"
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
                <div className="2xl:max-w-[645px] xl:max-w-[600px] lg:max-w-[585px]">
                    <motion.div
                        variants={slideInFromLeft(0.9)}
                        className="name-heading type-headline flex flex-col gap-6 mt-6
                                    2xl:text-7xl xl:text-6xl
                                    lg:text-5xl md:text-4xl
                                    sm:text-4xl font-medium
                                    max-w-[600px]
                                    w-auto h-auto font-panno"
                        >
                        <span>
                            Rikiya Okawa
                        </span>
                    </motion.div>

                    <motion.p
                        variants={slideInFromLeft(0.8)}
                        className="accent-subheading text-[22px] md:text-[26px] font-panno pt-8 pb-3"
                    >
                        Professional Journey
                    </motion.p>
                    <motion.p
                        variants={slideInFromLeft(0.7)}
                        className="text-[16px] md:text-[17px] leading-[1.7] text-ink-2"
                    >
                        I’m based in Tokyo, but I studied in San Diego before coming back to Japan. I graduated from Kanda Foreign Language College in November 2015, earned a Digital Arts degree from Grossmont College in June 2017, and completed a UI/UX program at Digital Hollywood Tokyo in September 2022.
                    </motion.p>
                    <motion.p
                        variants={slideInFromLeft(0.6)}
                        className="accent-subheading text-[22px] md:text-[26px] font-panno pt-8 pb-3"
                    >
                        Career Highlights
                    </motion.p>
                    <motion.p
                        variants={slideInFromLeft(0.5)}
                        className="text-[16px] md:text-[17px] leading-[1.7] text-ink-2"
                    > 
                        I work where communication meets digital design. At Accor Hotels I handled multilingual inquiries and complex cases from international guests. At Tree Digital Studio I improved the UI/UX of educational AR games using user feedback. At Little Planet I researched how people of different ages interact with AR and VR.
                    </motion.p>
                    <motion.p
                        variants={slideInFromLeft(0.4)}
                        className="text-[16px] md:text-[17px] leading-[1.7] text-ink-2 py-3"
                    >
                        Today I build responsive, fast websites with HTML5, CSS/SCSS, JavaScript and Node.js, balancing what the client needs with a good experience for the people using them.
                    </motion.p>
                    <motion.p
                        variants={slideInFromLeft(0.3)}
                        className="accent-subheading text-[22px] md:text-[26px] font-panno pt-8 pb-3"
                    >
                        Creative Passions and Vision
                    </motion.p>
                    <motion.p
                        variants={slideInFromLeft(0.2)}
                        className="text-[16px] md:text-[17px] leading-[1.7] text-ink-2 pb-9"
                    >
                        Outside work, I make things with Unity, TouchDesigner, openFrameworks and p5.js, and lately I’ve been exploring Houdini for VFX and animation. I like pushing interaction, motion and craft through creative tools. You can follow my work on Instagram: <a href="https://www.instagram.com/ricky_o_369/" target="_blank" rel="noopener noreferrer" className="accent-link font-bold">@ricky_o_369</a>.
                    </motion.p>
                </div>
            </div>
        </motion.div>

    );
};

export default AboutMeContent;
