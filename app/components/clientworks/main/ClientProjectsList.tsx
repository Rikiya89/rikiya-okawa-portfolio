"use client";
// components/clientworks/main/Projects.tsx
import React from "react";
import { motion } from "framer-motion";
import ClientProjects from "../sub/ClientProjects"; // <-- the CARD component

const ClientProjectsList = () => {
  return (
    <div className="flex flex-col items-center justify-center pb-20" id="projects">
      <motion.h1
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="xl:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-9 font-panno lg:text-4xl md:text-4xl sm:text-4xl"
      >
        My Client Projects
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="
        2xl:max-w-7xl 2xl:gap-10 2xl:grid-cols-3 2xl:justify-center 2xl:justify-items-center 2xl:grid
        xl:max-w-7xl xl:grid-cols-3 xl:gap-10 xl:px-10 xl:justify-items-center xl:justify-center xl:grid
        lg:max-w-7xl lg:grid-cols-2 lg:gap-10 lg:px-10 lg:justify-items-center lg:justify-center lg:grid
        md:max-w-2xl md:grid-cols-2 md:gap-10 md:px-10 md:justify-items-center md:justify-center md:grid
        sm:max-w-4xl sm:gap-10 sm:flex-col sm:flex
      "
      >

        <ClientProjects
          src="/img/timberland.webp"
          title="Timberland Official Website"
          description={`Timberland公式サイトの運用・保守。\nLP制作やニュース更新を担当。`}
          url="https://www.timberland.co.jp/"
          slug="timerland-official"
          centerText
        />

        <ClientProjects
          src="/img/vans.webp"
          title="VANS Official Website"
          description={`VANS公式サイトの運用・保守。\nLP制作やニュース更新を担当。`}
          url="https://www.vans.co.jp/?srsltid=AfmBOoqG_8npx5qrTz7F4JvK7oWbCUnZXn9gySUwi0UjmycZez1zjvaJ"
          slug="vans-official"
          centerText
        />

        <ClientProjects
          src="/img/iphone14_clonewebsite.webp"
          title="iPhone 14 Clone 3D Website"
          description={`iPhone 14をテーマにした私の3D Reactポートフォリオを探索してください。各インタラクションは、iPhone 14の精巧なデザインと機能性を表現する活動的なアニメーションで構成されています。クリックする度に、iPhone 14の洗練された美学と革新的な特性を反映する、アートとテクノロジーの完璧な統合を体験できます。`}
          url="https://apple-iphone3d-website.netlify.app/"
          slug="iphone14-clone-3d"
          centerText
        />

        <ClientProjects
          src="/img/guardians.webp"
          title="GUARDIANS OF THE MOON"
          description={`卒業プロジェクトとして、VR・AR施設のサービス向上を目指し、UnityとTouchDesignerを使用してVRゲームとインタラクティブ映像を製作しました。VRゲームはUnityとC#を利用し、Unityアセットストアからの無料アセットを使用。開発期間は約1ヶ月。また、TouchDesignerを活用した実空間でのインタラクティブ演出は約1週間で完成しました。`}
          url="/guardians_jp"
          slug="guardians-of-the-moon"
          centerText
        />

        <ClientProjects
          src="/img/water_drops_culpture.webp"
          title="Water Drop Effect"
          description={`TouchDesigner作品。GLSLシェーダーとTOPで水の本質を描くアニメーション。`}
          url="https://www.instagram.com/reel/C5I0TBkSrk6/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
          slug="water-drop-effect"
          centerText
        />

        <ClientProjects
          src="/img/of.webp"
          title="The Art of Dynamic Mesh"
          description={`openFrameworks。画像処理とメッシュダイナミクスの表現研究。`}
          url="https://www.instagram.com/p/Ctv2k7Nvcrb/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
          slug="the-art-of-dynamic-mesh"
          centerText
        />

        <ClientProjects
          src="/img/heart.webp"
          title="Pulse of Reflection"
          description={`TouchDesigner。CHOP/TOPで反射するハートをアニメーション化。指数関数LFOで生命感を付与。`}
          url="https://www.instagram.com/p/C8PaH0kSQ2Z/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
          slug="pulse-of-reflection"
          centerText
        />
      </motion.div>
    </div>
  );
};

export default ClientProjectsList;
