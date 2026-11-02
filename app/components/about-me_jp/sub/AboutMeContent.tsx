"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop,
} from "@/utils/motion";
import Image from "next/image";

const AboutMeContentJP = () => {
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
                        className="text-[15px] leading-[1.9] text-ink-2 text-jp-wrap"
                    >
                        東京の神田外語学院を2015年に卒業し、その後サンディエゴの Grossmont College でデジタルアートを学んで、2017年に学位を取得しました。帰国後はコストコで約1年、アコーホテルズで3年働き、2022年にデジタルハリウッド東京本校で UI/UX デザインを修了しました。
                    </motion.p>
                    <motion.p
                        variants={slideInFromLeft(0.6)}
                        className="accent-subheading text-[22px] md:text-[26px] font-panno pt-8 pb-3"
                    >
                        Career Highlights
                    </motion.p>
                    <motion.p
                        variants={slideInFromLeft(0.5)}
                        className="text-[15px] leading-[1.9] text-ink-2 text-jp-wrap"
                    >
                        人と話す力と、デジタルのスキルを掛け合わせられるところが自分の強みです。アコーホテルズでは、多言語での問い合わせ対応やトラブル解決を担当しました。株式会社 Tree Digital Studio では、教育向け AR ゲームの UI/UX 改善に携わり、ユーザーの声をデザインに反映しました。株式会社リトルプラネットでは、AR/VR の体験設計を調べ、年齢層ごとのインタラクションの違いを分析しました。
                    </motion.p>
                    <motion.p
                        variants={slideInFromLeft(0.4)}
                        className="text-[15px] leading-[1.9] text-ink-2 text-jp-wrap py-3"
                    >
                        現在は Web エンジニアとして、HTML5、CSS(SCSS)、JavaScript、Node.js を使い、レスポンシブで表示の速いサイトを作っています。クライアントの目的を叶えつつ、使う人にとっても心地よい体験にすることを大切にしています。
                    </motion.p>
                    <motion.p
                        variants={slideInFromLeft(0.3)}
                        className="accent-subheading text-[22px] md:text-[26px] font-panno pt-8 pb-3"
                    >
                        Creative Passions and Vision
                    </motion.p>
                    <motion.p
                        variants={slideInFromLeft(0.2)}
                        className="text-[15px] leading-[1.9] text-ink-2 text-jp-wrap pb-9"
                    >
                        仕事以外でも、Unity、TouchDesigner、openFrameworks、p5.js などで作品づくりを続けています。最近は Houdini を使った VFX やアニメーションにも力を入れています。いろいろなデジタル表現に触れながら、これからも課題を創造的に解決し、体験の可能性を広げていきたいです。最新の作品は Instagram で公開しています。<br/>
                        <span className="font-medium font-panno">Instagram:</span><a href="https://www.instagram.com/ricky_o_369/" target="_blank" rel="noopener noreferrer" className="accent-link font-bold font-panno"> @ricky_o_369</a>
                    </motion.p>
                </div>
            </div>
        </motion.div>

    );
};

export default AboutMeContentJP;
