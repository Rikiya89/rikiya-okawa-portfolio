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
                        東京でスタートし、サンディエゴに渡り、再び戻ってきた私は、多彩な教育と職業の道を歩んできました。2015年11月に神田外語学院で語学の基礎を築きました。
                        デジタル表現への愛がグロスモント大学で花開き、2017年6月にデジタルアートの学位を取得しました。帰国後、約1年間コストコホールセールで働き、その後3年間アコーホテルズで勤務し、
                        2022年9月までデジタルハリウッド東京本校でUI/UXデザインを学んでいました。
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
                        私のキャリアは、コミュニケーションスキルとデジタルイノベーションの融合が特徴です。アコーホテルズでは、国際的なゲスト関係を改善し、多言語の問い合わせや複雑な状況をスムーズに処理しました。
                        株式会社Tree Digital Studioでは、教育用ARゲームのUI/UXを向上させ、ユーザーフィードバックを活用して機能性と美しさの両方を洗練させました。
                        株式会社リトルプラネットでは、AR/VRユーザーエクスペリエンスに関する貴重な洞察を得、異なる人口統計がこれらの技術とどのように相互作用するかを研究しました。
                    </motion.p>
                    <motion.p
                        variants={slideInFromLeft(0.4)}
                        className="text-[15px] text-gray-400 py-3"
                    >
                            現在、Fivestar Interactive Inc.でWebエンジニアとして、HTML5、CSS/SCSS、JavaScript、Node.jsを駆使して、クライアントの期待を超え、
                            ユーザーエンゲージメントを向上させるレスポンシブで魅力的なウェブサイトを作成しています。
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
                            プロフェッショナルな仕事の外では、Unity、TouchDesigner、openFrameworks、p5.jsなどのソフトウェアを使ったクリエイティブなプロジェクトを楽しんでいます。
                            最近では、Houdiniの視覚効果とアニメーションの作成可能性に魅了されています。今後、私の多様なデジタルスキルを活かして、次のプロジェクトで革新し、創造的に問題を解決し、
                            デジタルインタラクションとデザインの限界を押し広げることを楽しみにしています。私のクリエイティブな旅をInstagramでフォローしてください。<br/>
                            <span className="font-bold font-panno">Instagram:</span><a href="https://www.instagram.com/ricky_o_369/" target="_blank" className="font-bold font-panno"> @ricky_o_369</a>
                    </motion.p>
                </div>
            </div>
        </motion.div>

    );
};

export default AboutMeContentJP;