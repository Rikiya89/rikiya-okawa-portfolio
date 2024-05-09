// Projects.tsx
import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="2xl:w-full 2xl:gap-10 2xl:px-10 2xl:justify-center 2xl:flex xl:w-full xl:gap-10 xl:px-10 xl:justify-center xl:flex lg:w-full lg:gap-10 lg:px-10 lg:justify-center lg:flex md:px-10 md:w-full md:gap-10 md:justify-center md:flex-row md:flex sm:flex sm:gap-10 sm:flex-col">
        <ProjectCard
          src="/portfolio_no1.webp"
          title="Portfolio Website"
          description="これは私の最初のポートフォリオサイトです。HTML、SCSS、JavaScriptを使用して構築されたこのサイトは、直感的なナビゲーションと魅力的なビジュアルで、私の技術と過去に取り組んだプロジェクトの中から厳選した作品を紹介しています。各プロジェクトには、背景情報、使用技術、目標、そして達成した成果が詳細に記述されています。"
          url="https://www.rikiya-okawa963.jp/index.html/" 
        />
        <ProjectCard
          src="/weather_app.webp"
          title="React Weather App"
          description="デザインと技術の理想的な結合、React Weather Appを体験してください。ReactとJavaScriptで構築されたこのアプリケーションは、天気と地理座標のAPIを活用して、正確な実時間の気象予報を提供します。都市間をスムーズに移動し、直感的なインターフェイスを通じて気象パターンをインタラクティブに探ることができます。"
          url="https://relaxed-youtiao-4c1124.netlify.app/"  
        />
        <ProjectCard
          src="/iphone14_clonewebsite.webp"
          title="iPhone 14 Clone 3D Website"
          description="iPhone 14をテーマにした私の3D Reactポートフォリオを探索してください。各インタラクションは、iPhone 14の精巧なデザインと機能性を表現する活動的なアニメーションで構成されています。クリックする度に、iPhone 14の洗練された美学と革新的な特性を反映する、アートとテクノロジーの完璧な統合を体験することができる、創造的で卓越した技術の旅に出てください。"
          url="https://apple-iphone3d-website.netlify.app/"  
        />
      </div>
      <div className="2xl:w-full 2xl:gap-10 2xl:px-10 2xl:justify-center 2xl:flex xl:w-full xl:gap-10 xl:px-10 xl:justify-center xl:flex lg:w-full lg:gap-10 lg:px-10 lg:justify-center lg:flex md:px-10 md:w-full md:gap-10 md:justify-center md:flex-row md:flex sm:flex sm:gap-10 sm:flex-col 2xl:mt-8 xl:mt-8 lg:mt-8 md:mt-8 sm:mt-8">
      <ProjectCard
          src="/guardians.webp"
          title="GUARDIANS OF THE MOON"
          description="卒業プロジェクトとして、VR・AR施設のサービス向上を目指し、UnityとTouchDesignerを使用してVRゲームとインタラクティブ映像を製作しました。VRゲームはUnityとC#を利用し、Unityアセットストアからの無料アセットを使用しています。このゲームの開発期間は約1ヶ月でした。また、TouchDesignerを活用した実空間でのインタラクティブな演出は約1週間で完成しました。"
          url="https://youtu.be/odmsk90MzCU?si=SvEUa8QElgOH_6Tx"
        />
      <ProjectCard
          src="/water_drops_culpture.webp"
          title="Water Drop Effect"
          description="視覚芸術と技術的巧みさが一体となったTouchDesignerの作品を体験してください。GLSLシェーダーとTOPを使用して水の本質を描くアニメーションで、各ノードが物語を伝えます。流体力学とデジタルアートの結合が、魅力的なビジュアル体験を生み出す変化に富んだインタラクションを通じて、私のクラフトを感じてください。"
          url="https://www.instagram.com/reel/C5I0TBkSrk6/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
        />
        <ProjectCard
          src="/of.webp"
          title="The Art of Dynamic Mesh"
          description="私のopenFrameworksプロジェクトをご覧ください—技術的な能力と視覚的な創造力の融合です。画像処理とメッシュダイナミクスがどのようにして光と動きの魅力的な物語を紡ぎ出すかを確認してください。各頂点と線が絡み合い、アルゴリズムの優雅さと芸術的な才能が融合した驚くべき視覚的なスペクタクルを創出します。"
          url="https://www.instagram.com/p/Ctv2k7Nvcrb/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
        />
      </div>
  
    </div>
  );
};

export default Projects;
