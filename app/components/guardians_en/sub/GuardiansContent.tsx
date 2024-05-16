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
                    variants={slideInFromRight(0.1)}
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
                        variants={slideInFromLeft(0.2)}
                        className="Welcome-text flex flex-col gap-6 mt-6 
                                    2xl:text-5xl xl:text-5xl 
                                    lg:text-4xl md:text-4xl 
                                    sm:text-[27px] font-bold 
                                    text-white max-w-[600px] 
                                    w-auto h-auto font-panno text-center pb-3"
                    >
                        <span>
                            Graduation Project<br /> - GUARDIANS OF THE MOON -
                        </span>
                    </motion.div>
                </div>

                <div className="max-w-[771px]">
                    <motion.p
                        variants={slideInFromLeft(0.3)}
                        className="Welcome-text text-[21px] font-bold py-3 font-panno"
                    >
                        Graduation Project: Creating Immersive Entertainment with VR/AR
                    </motion.p>
                    <motion.p
                        variants={slideInFromLeft(0.4)}
                        className="Welcome-text text-[18px] font-bold py-3 font-panno"
                    >
                        Developing a VR Game with Unity Using C# and Creating Interactive Spaces with TouchDesigner
                    </motion.p>
                    <motion.p
                        variants={slideInFromLeft(0.5)}
                        className="text-[18px] text-gray-400 pb-3 font-panno"
                    >
                        For my graduation project, I tackled the challenging theme of enhancing realistic services in VR/AR facilities. 
                        I developed a VR game using Unity programmed in C#, and created interactive spaces using the visual programming tool TouchDesigner.
                    </motion.p>

                    <motion.p
                        variants={slideInFromLeft(0.6)}
                        className="Welcome-text text-[18px] font-bold py-3 font-panno"
                    >
                        VR Game Development: Building Interactive Worlds with Code
                    </motion.p>

                    <motion.p
                        variants={slideInFromLeft(0.7)}
                        className="text-[18px] text-gray-400 pb-3 font-panno"
                    >
                        Over the course of about a month, I utilized C# to develop an immersive VR game. 
                        I built interactive elements that respond to user actions, creating spaces that players can actually interact with in the virtual world. 
                        This provides a unique experience, making users feel as if they have entered another world, distinct from traditional games.
                    </motion.p>
                    <motion.p
                        variants={slideInFromLeft(0.8)}
                        className="Welcome-text text-[18px] font-bold py-3 font-panno"
                    >
                        Creating Interactive Spaces with TouchDesigner
                    </motion.p>
                    <motion.p
                        variants={slideInFromLeft(0.9)}
                        className="text-[18px] text-gray-400 pb-3 font-panno"
                    >
                        Using TouchDesigner, I created realistic spaces that can be enjoyed not only within the VR game but also by those not experiencing VR. 
                        By incorporating interactive elements that respond to touch, I crafted a fascinating space where digital and real worlds blend together. 
                        Amazingly, this interactive wonderland was completed in just one week!
                    </motion.p>
                    <motion.p
                        variants={slideInFromLeft(1.0)}
                        className="Welcome-text text-[18px] font-bold py-3 font-panno"
                    >
                        Taking on the Challenge of Becoming a Virtual Assistant
                    </motion.p>
                    <motion.p
                        variants={slideInFromLeft(1.1)}
                        className="text-[18px] text-gray-400 pb-3 font-panno"
                    >
                        During the presentation of my project, I also took on the challenge of becoming a virtual assistant. Utilizing a webcam for real-time motion recognition and a voice changer, 
                        I aimed to create the impression of a digital human speaking. The filming and production of this video were completed in one day! Despite the limited time, 
                        thorough preparation and effective use of technology enabled me to finish it quickly.
                    </motion.p>
                    <motion.p
                        variants={slideInFromLeft(1.2)}
                        className="Welcome-text text-[18px] font-bold py-3 font-panno"
                    >
                        Expanding the Possibilities of VR/AR
                    </motion.p>
                    <motion.p
                        variants={slideInFromLeft(1.3)}
                        className="text-[18px] text-gray-400 pb-3 font-panno"
                    >
                        Through this project, I became convinced of the potential of VR/AR technology to create new experiences not only in the entertainment industry but also in various other fields.
                        I also learned the importance of planning and quick action to achieve results within a limited time.
                    </motion.p>
                    <motion.p
                        variants={slideInFromLeft(1.4)}
                        className="Welcome-text text-[18px] font-bold py-3 font-panno"
                    >
                        Experience This Virtual World Yourself!
                    </motion.p>
                    <motion.p
                        variants={slideInFromLeft(1.5)}
                        className="text-[18px] text-gray-400 pb-3 font-panno"
                    >
                        I have released the game, compatible with popular VR devices like Oculus Rift and Meta Quest 2. If you are interested, please download and try it out.
                        <a href="/apk/t2109d001_rikiya.okawa.apk" download 
                                    className="block border border-[#7042f861] w-[75px] 
                                    text-center bg-[#0300145e] rounded-full 
                                    text-purple-200 border-2 mt-3 font-bold font-panno"> 
                            Get
                        </a>
                    </motion.p>
                </div>
            </div>
        </motion.div>
    );
};

export default GuardiansContent;