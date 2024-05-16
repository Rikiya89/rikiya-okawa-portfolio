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

const GuardiansContent = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20] md:px-8 sm:px-8"
        >
            <div className="2xl:flex 2xl:
                xl:flex xl:
                lg:flex lg:flex-col lg:justify-center lg:items-center
                md:flex md:flex-col md:justify-center md:items-center
                sm:flex sm:flex-col sm:justify-center sm:items-center">
                <motion.div
                    variants={slideInFromRight(0.9)}
                    className="flex w-full"
                >
                    <div className="relative w-full sm:w-5/6 md:w-3/4 lg:w-3/4 xl:w-3/4 max-w-4xl mx-auto" style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */, maxWidth: '100%' }}>
                        <iframe
                            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                            src="https://www.youtube.com/embed/odmsk90MzCU?si=ceyJn1pxAmg7-Pjk"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen>
                        </iframe>
                    </div>

                </motion.div>
                <div className="2xl:max-w-[645px] xl:max-w-[600px] lg:max-w[585px]">
                    <motion.div
                        variants={slideInFromLeft(0.8)}
                        className="Welcome-text flex flex-col gap-6 mt-6 
                                    2xl:text-5xl xl:text-5xl 
                                    lg:text-4xl md:text-4xl 
                                    sm:text-[27px] font-bold 
                                    text-white max-w-[600px] 
                                    w-auto h-auto font-panno text-center"
                    >
                        <span>
                            卒業制作<br /> - GUARDIANS OF THE MOON -
                        </span>
                    </motion.div>
                </div>

                <div className="max-w-[828px]">
                    <motion.p
                        variants={slideInFromLeft(0.7)}
                        className="Welcome-text text-[21px] text-gray-400 font-panno font-bold py-3"
                    >
                        Description
                    </motion.p>
                    <motion.p
                        variants={slideInFromLeft(0.6)}
                        className="text-[18px] text-gray-400 font-panno pb-3"
                    >
                        In my graduation project, I took on an ambitious task to enhance the real-life services of a VR/AR facility. Using Unity and TouchDesigner, 
                        I developed a VR game and an interactive video that transcended traditional entertainment. 
                        The visual assets for this immersive experience were carefully selected from the Unity Asset Store, all for free, 
                        ensuring a rich visual environment without additional costs.
                    </motion.p>

                    <motion.p
                        variants={slideInFromLeft(0.5)}
                        className="text-[18px] text-gray-400 font-panno pb-3"
                    >
                            Over the course of about one month, I focused on creating and refining the game. Utilizing TouchDesigner, I crafted the physical space players would experience in the VR game, 
                            embedding interactive elements that responded to users’ touch, seamlessly blending digital and physical realities. After an intense week of production, 
                            the framework of this interactive wonderland was completed.
                    </motion.p>
                    <motion.p
                        variants={slideInFromLeft(0.4)}
                        className="text-[18px] text-gray-400 font-panno pb-3"
                    >
                        I also explored the realm of performance, acting as a virtual assistant within the video. Through voice modulation and advanced real-time tracking using a webcam, 
                        I brought a digital human to life. Impressively, the filming and production of this video were completed in just one day, 
                        showcasing the efficiency of the technology and my thorough pre-production preparations.
                    </motion.p>
                    <motion.p
                        variants={slideInFromLeft(0.3)}
                        className="text-[18px] text-gray-400 font-panno pb-3"
                    >
                        The accompanying video provides a glimpse into the game and exhibition, capturing the essence of the virtual adventure I created. 
                        For those interested in exploring this digital journey, the game is available for download.<br/>
                        The game is available for download and compatible with devices such as the Oculus Rift and Meta Quest 2.<br/>
                        <a href="/apk/t2109d001_rikiya.okawa.apk" download 
                                    className="block border border-[#7042f861] w-[75px] 
                                    text-center bg-[#0300145e] rounded-full 
                                    text-purple-200 border-2 mt-3"> 
                            Get
                        </a>
                    </motion.p>
                </div>
            </div>
        </motion.div>
    );
};

export default GuardiansContent;