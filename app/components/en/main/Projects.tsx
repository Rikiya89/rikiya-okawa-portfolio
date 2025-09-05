"use client";
// Projects.tsx
import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  

  return (
    <div className="flex flex-col items-center justify-center py-20" id="projects">
      <motion.h1
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="xl:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20 font-panno 
      lg:text-4xl md:text-4xl sm:text-4xl md:px-8 sm:px-8"
      >
        My Projects
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="2xl:max-w-7xl 2xl:gap-10 2xl:grid-cols-3 2xl:justify-center 2xl:justify-items-center 2xl:gird 
      xl:max-w-7xl xl:grid-cols-3 xl:gap-10 xl:px-10 xl:justify-items-center xl:justify-center xl:grid 
      lg:max-w-7xl lg:grid-cols-2 lg:gap-10 lg:px-10 lg:justify-items-center lg:justify-center lg:grid 
      md:max-w-2xl md:grid-cols-2 md:gap-10 md:px-10 md:justify-items-center md:justify-center md:flex 
      sm:max-w-4xl sm:gap-10 sm:flex-col sm:flex font-panno"
      >
          <ProjectCard
            src="/img/portfolio_no1.webp"
            title="Portfolio Website"
            description="Explore a harmonious fusion of design and coding in my interactive portfolio. 
            Created using HTML, SCSS, and JavaScript, this website displays my digital art and web development prowess via user-friendly navigation and captivating visuals. 
            Engage with and explore my projects in a streamlined, accessible layout."
            url="https://www.rikiya-okawa963.jp/index.html/"
            slug="portfolio-website"
          />
          <ProjectCard
            src="/img/weather_app.webp"
            title="React Weather App"
            description="Discover the React Weather App, an ideal blend of aesthetics and functionality.
            Crafted with React and JavaScript, this application leverages weather and geographic APIs to provide precise, real-time weather updates.
            Search cities seamlessly and view weather trends interactively through a modern, user-friendly interface engineered for peak user interaction."
            url="https://relaxed-youtiao-4c1124.netlify.app/"
            slug="react-weather-app"
          />
          <ProjectCard
            src="/img/iphone14_clonewebsite.webp"
            title="iPhone 14 Clone 3D Website"
            description="Explore my 3D React portfolio—a harmony of programming and aesthetics.
            Each click unveils GSAP-driven animations, narrating my development journey through engaging and innovative displays.
            Witness the flawless integration of technology and creativity in every interaction."
            url="https://apple-iphone3d-website.netlify.app/"
            slug="iphone14-clone-3d"
          />
        <ProjectCard
            src="/img/guardians.webp"
            title="GUARDIANS OF THE MOON"
            description="For my graduation project, I developed a VR game and interactive video with Unity and TouchDesigner to enhance services at a VR/AR center.
            The game was crafted using Unity and C# within a month, employing complimentary assets from the Unity Asset Store.
            Real-time interactive responses were created in a week using TouchDesigner."
            url="/guardians_en"
            slug="guardians-of-the-moon"
          />
        <ProjectCard
            src="/img/water_drops_culpture.webp"
            title="Water Drop Effect"
            description="Explore my TouchDesigner masterpiece—a fusion of visual artistry and technical expertise.
            Every node unfolds a narrative with GLSL shaders and TOPs that capture the essence of water.
            Engage with my work through each transformative encounter, where fluid dynamics and digital creativity converge into a captivating visual journey."
            url="https://www.instagram.com/reel/C5I0TBkSrk6/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
            slug="water-drop-effect"
          />
          <ProjectCard
            src="/img/of.webp"
            title="The Art of Dynamic Mesh"
            description="Discover my openFrameworks project—a blend of technical prowess and visual creativity.
            See how image processing and mesh dynamics weave a compelling story of light and movement.
            Every vertex and line interlace, revealing a ballet of algorithmic elegance and artistic flair in a stunning visual spectacle."
            url="https://www.instagram.com/p/Ctv2k7Nvcrb/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
            slug="the-art-of-dynamic-mesh"
          />
          <ProjectCard
            src="/img/heart.webp"
            title="Pulse of Reflection"
            description="Explore my TouchDesigner creation—a fusion of visual artistry and technical expertise. Every node unfolds a narrative with CHOPs and TOPs that animate the reflective heart, creating fluid and dynamic motion. The LFO CHOP with an exponential function brings the heart to life, emphasizing its reflective surfaces. Engage with my work through each transformative encounter, where dynamic motion and digital creativity converge into a captivating visual journey."
            url="https://www.instagram.com/p/C8PaH0kSQ2Z/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
            slug="pulse-of-reflection"
          />
      </motion.div>
    </div>
  );
};

export default Projects;
