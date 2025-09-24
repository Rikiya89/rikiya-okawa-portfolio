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
                            卒業プロジェクト<br /> - GUARDIANS OF THE MOON -
                        </span>
                    </motion.div>
                </div>

                <div className="max-w-[771px]">
                    <motion.p
                        variants={slideInFromLeft(0.3)}
                        className="Welcome-text text-[21px] font-bold py-3"
                    >
                        卒業制作：VR/AR施設の体験価値を高める
                    </motion.p>
                    <motion.p
                        variants={slideInFromLeft(0.4)}
                        className="Welcome-text text-[18px] font-bold py-3"
                    >
                        Unity×C#でVRシューティングを構築し、TouchDesignerで体験を拡張
                    </motion.p>
                    <motion.p
                        variants={slideInFromLeft(0.5)}
                        className="text-[15px] text-gray-400 pb-3"
                    >
                        卒業制作では、AR/VR体験施設での滞在時間をより価値あるものにすることをテーマに掲げました。
                        Unity（C#）で月面基地を防衛するVRシューティングを開発し、TouchDesignerでヘッドセットを外していても緊張感が続くインタラクティブ演出を加えました。
                    </motion.p>

                    <motion.p
                        variants={slideInFromLeft(0.6)}
                        className="Welcome-text text-[18px] font-bold py-3"
                    >
                        Unity VRシューティング：迫り来る敵との攻防を設計
                    </motion.p>

                    <motion.p
                        variants={slideInFromLeft(0.7)}
                        className="text-[15px] text-gray-400 pb-3"
                    >
                        約1カ月の開発期間で、敵ウェーブやリロード操作、ハプティクスを手・視線・コントローラー入力に応じて反応させました。
                        立体空間で照準を合わせ、防衛ラインを維持する身体性は、従来の平面シューティングでは得られない体験です。
                    </motion.p>
                    <motion.p
                        variants={slideInFromLeft(0.8)}
                        className="Welcome-text text-[18px] font-bold py-3"
                    >
                        TouchDesigner演出：ブリーフィング映像で緊張感を継続
                    </motion.p>
                    <motion.p
                        variants={slideInFromLeft(0.9)}
                        className="text-[15px] text-gray-400 pb-3"
                    >
                        TouchDesignerでは、モーショングラフィックスやテレメトリー風HUD、ゲームプレイ映像を組み合わせたブリーフィング映像を1週間で制作しました。
                        ロビーで常時上映することで待ち時間でもミッションの熱量を保ち、ヘッドセット装着前から物語に没入できるようにしました。
                    </motion.p>
                    <motion.p
                        variants={slideInFromLeft(1.0)}
                        className="Welcome-text text-[18px] font-bold py-3"
                    >
                        バーチャルガイドとしてプレゼンテーション
                    </motion.p>
                    <motion.p
                        variants={slideInFromLeft(1.1)}
                        className="text-[15px] text-gray-400 pb-3"
                    >
                        発表当日はウェブカメラによるモーションキャプチャーとボイスチェンジャーを組み合わせ、仮想案内人としてライブ解説を行いました。
                        撮影から編集までを1日で仕上げ、準備とテクノロジーの活用が短期制作を支えることを実感しました。
                    </motion.p>
                    <motion.p
                        variants={slideInFromLeft(1.2)}
                        className="Welcome-text text-[18px] font-bold py-3"
                    >
                        プロジェクトで得た学び
                    </motion.p>
                    <motion.p
                        variants={slideInFromLeft(1.3)}
                        className="text-[15px] text-gray-400 pb-3"
                    >
                        VR/ARはエンタメだけでなく教育や商業施設でも有効に活用できると確信し、短納期でも価値を出すためには綿密な段取りと高速な試行が欠かせないと学びました。
                    </motion.p>
                    <motion.p
                        variants={slideInFromLeft(1.4)}
                        className="Welcome-text text-[18px] font-bold py-3"
                    >
                        デモに参加する
                    </motion.p>
                    <motion.p
                        variants={slideInFromLeft(1.5)}
                        className="text-[15px] text-gray-400 pb-3"
                    >
                        Oculus Rift や Meta Quest 2 向けにビルドを公開しています。興味をお持ちいただけたら、ぜひダウンロードして防衛ミッションに挑戦してください。
                        <a href="/apk/t2109d001_rikiya.okawa.apk" download 
                                    className="block border border-[#7042f861] w-[75px] 
                                    text-center bg-[#0300145e] rounded-full 
                                    text-purple-200 border-2 mt-3 font-bold "> 
                            Get
                        </a>
                    </motion.p>
                </div>
            </div>
        </motion.div>
    );
};

export default GuardiansContent;
