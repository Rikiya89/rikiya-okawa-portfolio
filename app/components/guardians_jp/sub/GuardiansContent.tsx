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
                        卒業プロジェクト: VR/ARで没入型エンターテインメントを創出
                    </motion.p>
                    <motion.p
                        variants={slideInFromLeft(0.4)}
                        className="Welcome-text text-[18px] font-bold py-3"
                    >
                        C#を活用したUnityでVRゲームを開発、TouchDesignerでインタラクティブ空間を制作
                    </motion.p>
                    <motion.p
                        variants={slideInFromLeft(0.5)}
                        className="text-[15px] text-gray-400 pb-3"
                    >
                        私の卒業プロジェクトでは、VR/AR施設のリアルなサービスを強化するという挑戦的なテーマに取り組んました。
                        C#によるプログラミングでUnityを使用してVRゲームを開発し、イインタラクティブ空間はビジュアルプログラミングツールのTouchDesignerを使って制作しました。
                    </motion.p>

                    <motion.p
                        variants={slideInFromLeft(0.6)}
                        className="Welcome-text text-[18px] font-bold py-3"
                    >
                        VRゲーム開発: コードでインタラクティブな世界を構築
                    </motion.p>

                    <motion.p
                        variants={slideInFromLeft(0.7)}
                        className="text-[15px] text-gray-400 pb-3"
                    >
                        約1ヶ月をかけて、C#を駆使してVR空間ならではの没入感あふれるゲームを開発しました。ユーザーの行動に反応するインタラクティブな要素や、プレイヤーが仮想世界の中で実際に触れることができる空間を構築しました。 
                        まるで自分がその世界に入り込んだかのような感覚を味わえ、従来のゲームとは一味違った体験を提供します。
                    </motion.p>
                    <motion.p
                        variants={slideInFromLeft(0.8)}
                        className="Welcome-text text-[18px] font-bold py-3"
                    >
                        TouchDesignerでインタラクティブ空間を制作
                    </motion.p>
                    <motion.p
                        variants={slideInFromLeft(0.9)}
                        className="text-[15px] text-gray-400 pb-3"
                    >
                        TouchDesignerを使って、VRゲームの中だけでなく、VRを体験していない人でも楽しめるリアルな空間を作りました。
                        さらに、触ると反応するギミックを取り入れて、デジタルとリアルが混ざり合うような不思議な空間を作り上げました。
                        なんと、このインタラクティブなワンダーランドはたった1週間で完成したんです!
                    </motion.p>
                    <motion.p
                        variants={slideInFromLeft(1.0)}
                        className="Welcome-text text-[18px] font-bold py-3"
                    >
                        バーチャルアシスタントになりきる挑戦
                    </motion.p>
                    <motion.p
                        variants={slideInFromLeft(1.1)}
                        className="text-[15px] text-gray-400 pb-3"
                    >
                        作品紹介では、バーチャルアシスタントになりきるというチャレンジにも取り組んでみました。ウェブカメラでリアルタイムに動きを認識しつつ、ボイスチェンジャーを使って、まるでデジタル人間が話しているかのような演出にこだわりました。
                        なんと、このビデオの撮影と制作は1日で完了したんです! 時間は限られていましたが、事前の準備をしっかり行い、テクノロジーをうまく使うことで短時間で完成させることができました。
                    </motion.p>
                    <motion.p
                        variants={slideInFromLeft(1.2)}
                        className="Welcome-text text-[18px] font-bold py-3"
                    >
                        VR/ARの可能性を広げる
                    </motion.p>
                    <motion.p
                        variants={slideInFromLeft(1.3)}
                        className="text-[15px] text-gray-400 pb-3"
                    >
                        このプロジェクトを通して、VR/AR技術がエンターテイメント業界だけでなく、様々な分野で新しい体験を生み出せる可能性を確信しました。
                        限られた時間の中で成果を上げるために、計画力と迅速な行動の大切さも学ぶことができました。
                    </motion.p>
                    <motion.p
                        variants={slideInFromLeft(1.4)}
                        className="Welcome-text text-[18px] font-bold py-3"
                    >
                        あなたもこのバーチャルワールドを体験しよう！
                    </motion.p>
                    <motion.p
                        variants={slideInFromLeft(1.5)}
                        className="text-[15px] text-gray-400 pb-3"
                    >
                        Oculus RiftやMeta Quest 2などの人気VRデバイスに対応したゲームを公開しています。 もし興味を持っていただけたら、ぜひダウンロードして遊んでみてください。
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