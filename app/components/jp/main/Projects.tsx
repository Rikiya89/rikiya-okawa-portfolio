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
          description="私の最初のポートフォリオサイトです。HTML、SCSS、JavaScriptで作られたこのサイトは、直感的なナビゲーションと魅力的なビジュアルを通じ、私のスキルや私がこれまでに取り組んできたプロジェクトの中から選りすぐりの作品を展示しています。それぞれのプロジェクトには、その背景情報や使用した技術、プロジェクトの目標と達成した成果を詳細に説明しています。"
          url="https://www.rikiya-okawa963.jp/index.html/" 
        />
        <ProjectCard
          src="/weather_app.webp"
          title="React Weather App"
          description="デザインとテクノロジーの完璧な融合であるReact Weather Appをご覧ください。ReactとJavaScriptを使用して開発されたこのアプリは、天気と緯度経度のAPIを利用して、正確なリアルタイムの天気予報を提供します。都市を簡単にナビゲートし、直感的なインターフェイスで、天気パターンをインタラクティブに体験できます。"
          url="https://relaxed-youtiao-4c1124.netlify.app/"  
        />
        <ProjectCard
          src="/iphone14_clonewebsite.webp"
          title="iPhone 14 Clone 3D Website"
          description="iPhone 14をモデルにした私の3D Reactポートフォリオに足を踏み入れてください。それぞれのインタラクションは、iPhone 14の洗練されたデザインと機能を実現するダイナミックなアニメーションのショーケースです。クリックするたびに、iPhone 14の洗練された美学と革新性を映し出す、アートとテクノロジーのシームレスな融合が現れる、クリエイティブで卓越した技術による旅を体験してください。"
          url="https://apple-iphone3d-website.netlify.app/"  
        />
      </div>
      <div className="2xl:w-full 2xl:gap-10 2xl:px-10 2xl:justify-center 2xl:flex xl:w-full xl:gap-10 xl:px-10 xl:justify-center xl:flex lg:w-full lg:gap-10 lg:px-10 lg:justify-center lg:flex md:px-10 md:w-full md:gap-10 md:justify-center md:flex-row md:flex sm:flex sm:gap-10 sm:flex-col 2xl:mt-8 xl:mt-8 lg:mt-8 md:mt-8 sm:mt-8">
      <ProjectCard
          src="/guardians.webp"
          title="GUARDIANS OF THE MOON"
          description="卒業制作として、実際のVR・AR施設のサービス改善に向けてUnityとTouchDesignerを用いてVRゲームとインタラクティブ映像を作成しました。VRゲームの開発にはUnityとC#を使用し、Unityアセットストアの無料オブジェクトを活用しました。ゲーム制作は約1ヶ月でした。TouchDesignerを使用した現実空間の演出部分の制作は約1週間でした。"
          url="https://youtu.be/odmsk90MzCU?si=SvEUa8QElgOH_6Tx"
        />
      <ProjectCard
          src="/water_drops_culpture.webp"
          title="Water Drop Effect"
          description="視覚芸術と技術的な熟練が融合したTouchDesignerの作品に飛び込んでみてください。水の本質をアニメーション化するGLSLシェーダーとTOPで、ノードごとにストーリーを語ります。流体ダイナミクスとデジタル芸術性が融合して魅力的なビジュアル体験となる、変幻自在のインタラクションを通して私の技術を体験してください。"
          url="https://www.instagram.com/reel/C5I0TBkSrk6/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
        />
        {/* <ProjectCard
          src="/iphone14_clonewebsite.webp"
          title="iPhone 14 Clone 3D Website"
          description="Explore my 3D React portfolio—a symphony of code and design. Every click is a journey, with GSAP animations bringing the experience to life. It’s where my developer story unfolds, one interaction at a time."
          url="https://apple-iphone3d-website.netlify.app/"  // Example project URL
        /> */}
      </div>
  
    </div>
  );
};

export default Projects;
