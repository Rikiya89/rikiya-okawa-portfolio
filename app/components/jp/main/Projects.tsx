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
          description="私の最初のポートフォリオサイトです。HTML、SCSS、JavaScriptで作られたこのサイトは、直感的なナビゲーションと魅力的なビジュアルを通じ、私のデジタルアートとウェブ開発のスキルを紹介しています!"
          url="https://www.rikiya-okawa963.jp/index.html/"  // Example project URL
        />
        <ProjectCard
          src="/weather_app.webp"
          title="React Weather App"
          description="Explore the React Weather App—your sleek guide to global weather. This app blends real-time weather insights with stunning GSAP animations, creating an engaging user experience in every forecast. Navigate cities effortlessly and watch weather patterns unfold in an interactive showcase crafted with React."
          url="https://relaxed-youtiao-4c1124.netlify.app/"  // Example project URL
        />
        <ProjectCard
          src="/iphone14_clonewebsite.webp"
          title="iPhone 14 Clone 3D Website"
          description="Explore my 3D React portfolio—a symphony of code and design. Every click reveals GSAP-powered animations, unfolding my developer story through interactive and creative showcases. Experience the seamless blend of technology and art in every interaction."
          url="https://apple-iphone3d-website.netlify.app/"  // Example project URL
        />
      </div>
      <div className="2xl:w-full 2xl:gap-10 2xl:px-10 2xl:justify-center 2xl:flex xl:w-full xl:gap-10 xl:px-10 xl:justify-center xl:flex lg:w-full lg:gap-10 lg:px-10 lg:justify-center lg:flex md:px-10 md:w-full md:gap-10 md:justify-center md:flex-row md:flex sm:flex sm:gap-10 sm:flex-col 2xl:mt-8 xl:mt-8 lg:mt-8 md:mt-8 sm:mt-8">
      <ProjectCard
          src="/guardians.webp"
          title="GUARDIANS OF THE MOON"
          description="For my graduation, I created a VR game and interactive video using Unity and TouchDesigner to improve a VR/AR facility's services. The game was built with Unity and C# over a month, using free assets from the Unity Asset Store. Interactive real-world responses were developed in a week with TouchDesigner."
          url="https://youtu.be/odmsk90MzCU?si=SvEUa8QElgOH_6Tx"
        />
      <ProjectCard
          src="/water_drops_culpture.webp"
          title="Water Drop Effect"
          description="Dive into my TouchDesigner creation—a blend of visual art and technical mastery. Each node tells a story with GLSL shaders and TOPs that animate water's essence. Experience my craft through each transformative interaction, where fluid dynamics and digital artistry merge into an engaging visual experience."
          url="https://www.instagram.com/reel/C5I0TBkSrk6/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
        />
        <ProjectCard
          src="/iphone14_clonewebsite.webp"
          title="iPhone 14 Clone 3D Website"
          description="Explore my 3D React portfolio—a symphony of code and design. Every click is a journey, with GSAP animations bringing the experience to life. It’s where my developer story unfolds, one interaction at a time."
          url="https://apple-iphone3d-website.netlify.app/"  // Example project URL
        />
      </div>
  
    </div>
  );
};

export default Projects;
