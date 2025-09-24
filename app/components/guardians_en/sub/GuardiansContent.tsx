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
                        Designing Immersive Entertainment for VR/AR Venues
                    </motion.p>
                    <motion.p
                        variants={slideInFromLeft(0.4)}
                        className="Welcome-text text-[18px] font-bold py-3 font-panno"
                    >
                        Unity VR shooter built in C# and paired with a TouchDesigner installation
                    </motion.p>
                    <motion.p
                        variants={slideInFromLeft(0.5)}
                        className="text-[18px] text-gray-400 pb-3 font-panno"
                    >
                        For my graduation project I set out to strengthen the on-site experience at an AR/VR discovery center.
                        I engineered a Unity VR shooting game in C# and paired it with a TouchDesigner-based installation so guests could stay immersed even when they stepped out of the headset.
                    </motion.p>

                    <motion.p
                        variants={slideInFromLeft(0.6)}
                        className="Welcome-text text-[18px] font-bold py-3 font-panno"
                    >
                        Unity VR shooter: defending the outpost under pressure
                    </motion.p>

                    <motion.p
                        variants={slideInFromLeft(0.7)}
                        className="text-[18px] text-gray-400 pb-3 font-panno"
                    >
                        Across four weeks I scripted enemy waves, haptic feedback, and weapon interactions that respond to hand presence, gaze, and controller input.
                        The goal was to make tracking targets, reloading, and holding defensive lines feel intuitive and far more physical than a traditional flatscreen shooter.
                    </motion.p>
                    <motion.p
                        variants={slideInFromLeft(0.8)}
                        className="Welcome-text text-[18px] font-bold py-3 font-panno"
                    >
                        TouchDesigner installation: keeping the briefing room alive
                    </motion.p>
                    <motion.p
                        variants={slideInFromLeft(0.9)}
                        className="text-[18px] text-gray-400 pb-3 font-panno"
                    >
                        In a single week I assembled a TouchDesigner-driven briefing loop that stitches together motion graphics, telemetry HUDs, and gameplay captures.
                        The installation runs continuously in the lobby so guests waiting their turn stay inside the mission narrative even before they put on the headset.
                    </motion.p>
                    <motion.p
                        variants={slideInFromLeft(1.0)}
                        className="Welcome-text text-[18px] font-bold py-3 font-panno"
                    >
                        Presenting the project as a virtual guide
                    </motion.p>
                    <motion.p
                        variants={slideInFromLeft(1.1)}
                        className="text-[18px] text-gray-400 pb-3 font-panno"
                    >
                        For the showcase I performed as a virtual guide using a webcam for mocap and a voice transformer to deliver the narrative live.
                        The shoot and edit wrapped in a single day, underscoring how preparation and the right tools accelerate storytelling.
                    </motion.p>
                    <motion.p
                        variants={slideInFromLeft(1.2)}
                        className="Welcome-text text-[18px] font-bold py-3 font-panno"
                    >
                        Takeaways and next steps
                    </motion.p>
                    <motion.p
                        variants={slideInFromLeft(1.3)}
                        className="text-[18px] text-gray-400 pb-3 font-panno"
                    >
                        The experience reaffirmed how VR/AR can translate ideas into tangible experiences for education, themed attractions, and brand storytelling.
                        It also highlighted the value of rapid iteration and clear planning when timelines are compressed.
                    </motion.p>
                    <motion.p
                        variants={slideInFromLeft(1.4)}
                        className="Welcome-text text-[18px] font-bold py-3 font-panno"
                    >
                        Try the prototype
                    </motion.p>
                    <motion.p
                        variants={slideInFromLeft(1.5)}
                        className="text-[18px] text-gray-400 pb-3 font-panno"
                    >
                        The build runs on Oculus Rift and Meta Quest 2. Download it below and jump straight into the defense mission.
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
