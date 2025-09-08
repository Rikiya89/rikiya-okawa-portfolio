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

const AboutMeContentJP = () => {
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
                        className="text-[15px] text-gray-400"
                    >
                        東京で学び、サンディエゴに渡り、再び日本へ。多様な教育と実務経験を積んできました。2015年に神田外語学院で語学の基礎を固め、2017年に Grossmont College でデジタルアートの学位を取得。帰国後はコストコで約1年、アコーホテルズで3年勤務し、2022年にはデジタルハリウッド東京本校で UI/UX デザインを修了しました。
                    </motion.p>
                    <motion.p
                        variants={slideInFromLeft(0.6)}
                        className="Welcome-text text-[21px] text-gray-400 font-panno font-bold py-3"
                    >
                        Career Highlights
                    </motion.p>
                    <motion.p
                        variants={slideInFromLeft(0.5)}
                        className="text-[15px] text-gray-400"
                    >
                        強みは、コミュニケーションとデジタルの掛け合わせです。アコーホテルズでは多言語での問い合わせ対応や課題解決に従事。株式会社 Tree Digital Studio では教育向け AR ゲームの UI/UX を改善し、ユーザーフィードバックを設計に反映。株式会社リトルプラネットでは AR/VR の体験設計を調査し、年齢層別のインタラクション特性を分析しました。
                    </motion.p>
                    <motion.p
                        variants={slideInFromLeft(0.4)}
                        className="text-[15px] text-gray-400 py-3"
                    >
                        現在は Web エンジニアとして、HTML5／CSS(SCSS)／JavaScript／Node.js を用い、レスポンシブでパフォーマンスに優れたサイトを制作しています。クライアントの目的達成とユーザー体験の向上を両立させることを大切にしています。
                    </motion.p>
                    <motion.p
                        variants={slideInFromLeft(0.3)}
                        className="Welcome-text text-[21px] text-gray-400 font-panno font-bold py-3"
                    >
                        Creative Passions and Vision
                    </motion.p>
                    <motion.p
                        variants={slideInFromLeft(0.2)}
                        className="text-[15px] text-gray-400 pb-9"
                    >
                        仕事の外では Unity、TouchDesigner、openFrameworks、p5.js などで創作を続けています。最近は Houdini による VFX／アニメーションにも注力。多様なデジタル表現を横断しながら、次のプロジェクトでも創造的に課題を解決し、体験の可能性を広げていきます。最新の制作は Instagram で公開中。<br/>
                        <span className="font-bold font-panno">Instagram:</span><a href="https://www.instagram.com/ricky_o_369/" target="_blank" className="font-bold font-panno"> @ricky_o_369</a>
                    </motion.p>
                </div>
            </div>
        </motion.div>

    );
};

export default AboutMeContentJP;
