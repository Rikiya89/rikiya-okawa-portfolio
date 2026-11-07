"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop,
} from "@/utils/motion";
import Image from "next/image";

const GuardiansContent = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="relative flex flex-row items-center justify-center w-full max-w-[1440px] mx-auto px-[var(--margin)] pt-[calc(var(--nav-h)+56px)] pb-20 md:pt-[calc(var(--nav-h)+80px)]"
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
                            className="absolute top-0 left-0 w-full h-full bg-plate"
                            src="https://www.youtube.com/embed/odmsk90MzCU?si=ceyJn1pxAmg7-Pjk"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen>
                        </iframe>
                    </div>

                </motion.div>
                <div className="2xl:max-w-[645px] xl:max-w-[600px] lg:max-w-[585px]">
                    <motion.div
                        variants={slideInFromLeft(0.2)}
                        className="hero-gradient-word type-headline flex flex-col gap-6 mt-6
                                    2xl:text-[38px] xl:text-[38px]
                                    lg:text-4xl md:text-4xl
                                    sm:text-[27px] font-medium
                                    max-w-[600px]
                                    w-auto h-auto font-panno text-center pb-3"
                    >
                        <span>
                            Graduation Project<br /> - <span className="uppercase">Guardians of the Moon</span> -
                        </span>
                    </motion.div>
                </div>

                <div className="max-w-[771px]">
                    <motion.p
                        variants={slideInFromLeft(0.3)}
                        className="accent-subheading text-[22px] md:text-[26px] font-panno pt-8 pb-3"
                    >
                        Designing Immersive Entertainment for VR/AR Venues
                    </motion.p>
                    <motion.p
                        variants={slideInFromLeft(0.4)}
                        className="accent-subheading text-[18px] md:text-[20px] font-panno pt-6 pb-2"
                    >
                        Unity VR shooter in C# with a TouchDesigner-powered environment
                    </motion.p>
                    <motion.p
                        variants={slideInFromLeft(0.5)}
                        className="text-[16px] md:text-[17px] leading-[1.7] text-ink-2 pb-3"
                    >
                        For my graduation project I set out to transform time spent at a VR/AR venue into a more meaningful experience.
                        I built a moon-base defense shooter in Unity (C#) and used TouchDesigner to extend the atmosphere in the physical space.
                        Players grab the gun with the grip button and fire with the trigger; a 30-second round challenges them to hit targets approaching from all directions.
                    </motion.p>
                    <motion.p
                        variants={slideInFromLeft(0.55)}
                        className="text-[16px] md:text-[17px] leading-[1.7] text-ink-2 pb-3"
                    >
                        <span className="font-medium text-ink">Role:</span> concept, game design, UI design, Unity implementation, TouchDesigner staging, presentation<br />
                        <span className="font-medium text-ink">Stack:</span> Unity (C#), TouchDesigner<br />
                        <span className="font-medium text-ink">Outcome:</span> designed a 30-second round with instant replay and a shared-space projection for spectators
                    </motion.p>

                    <motion.p
                        variants={slideInFromLeft(0.6)}
                        className="accent-subheading text-[18px] md:text-[20px] font-panno pt-6 pb-2"
                    >
                        Unity VR shooter: defending the outpost under pressure
                    </motion.p>

                    <motion.p
                        variants={slideInFromLeft(0.7)}
                        className="text-[16px] md:text-[17px] leading-[1.7] text-ink-2 pb-3"
                    >
                        Over four weeks I scripted enemy waves, haptic feedback, and weapon interactions that respond to hand presence, gaze, and controller input.
                        The UI shows the timer, score, and high score. After each round, the front monitor displays results, and shooting the “Game Over” target instantly restarts the mission.
                    </motion.p>
                    <motion.p
                        variants={slideInFromLeft(0.8)}
                        className="accent-subheading text-[18px] md:text-[20px] font-panno pt-6 pb-2"
                    >
                        Real-world staging: a Milky Way projection for shared immersion
                    </motion.p>
                    <motion.p
                        variants={slideInFromLeft(0.9)}
                        className="text-[16px] md:text-[17px] leading-[1.7] text-ink-2 pb-3"
                    >
                        In the physical play area, a Milky Way-inspired projection fills the background.
                        It keeps spectators engaged and lets the whole space share the atmosphere, not just the player in the headset.
                    </motion.p>
                    <motion.p
                        variants={slideInFromLeft(1.0)}
                        className="accent-subheading text-[18px] md:text-[20px] font-panno pt-6 pb-2"
                    >
                        Presenting the project as a virtual guide
                    </motion.p>
                    <motion.p
                        variants={slideInFromLeft(1.1)}
                        className="text-[16px] md:text-[17px] leading-[1.7] text-ink-2 pb-3"
                    >
                        For the showcase I performed as a virtual guide using a webcam for mocap and a voice transformer to deliver the narrative live.
                        The shoot and edit wrapped in a single day, underscoring how preparation and the right tools accelerate storytelling.
                    </motion.p>
                    <motion.p
                        variants={slideInFromLeft(1.2)}
                        className="accent-subheading text-[18px] md:text-[20px] font-panno pt-6 pb-2"
                    >
                        Takeaways and next steps
                    </motion.p>
                    <motion.p
                        variants={slideInFromLeft(1.3)}
                        className="text-[16px] md:text-[17px] leading-[1.7] text-ink-2 pb-3"
                    >
                        The experience reaffirmed how VR/AR can translate ideas into tangible experiences for education, themed attractions, and brand storytelling.
                        It also highlighted the value of rapid iteration and clear planning when timelines are compressed.
                    </motion.p>
                    <motion.p
                        variants={slideInFromLeft(1.4)}
                        className="accent-subheading text-[18px] md:text-[20px] font-panno pt-6 pb-2"
                    >
                        Try the prototype
                    </motion.p>
                    <motion.p
                        variants={slideInFromLeft(1.5)}
                        className="text-[16px] md:text-[17px] leading-[1.7] text-ink-2 pb-3"
                    >
                        The build runs on Oculus Rift and Meta Quest 2. Download it below and jump straight into the defense mission.
                        <a href="/apk/t2109d001_rikiya.okawa.apk" download
                                    className="button-primary mt-4 px-6 py-3 min-h-[44px]">
                            Get
                        </a>
                    </motion.p>
                </div>
            </div>
        </motion.div>
    );
};

export default GuardiansContent;
