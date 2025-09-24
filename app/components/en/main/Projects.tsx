"use client";
// Projects.tsx
import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  

  return (
    <div className="flex flex-col items-center justify-center pb-20 relative" id="projects">
      <motion.h1
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="xl:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-9 font-panno 
      lg:text-4xl md:text-4xl sm:text-4xl md:px-8 sm:px-8"
      >
        My Projects
      </motion.h1>
      <div className="absolute"></div>
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
            description="Explore a seamless blend of design and code in my interactive portfolio. Built with HTML, SCSS, and JavaScript, it showcases my digital art and web development through intuitive navigation and engaging visuals. Browse projects in a clean, accessible layout."
            url="https://www.rikiya-okawa963.jp/index.html/"
            slug="portfolio-website"
          />
          <ProjectCard
            src="/img/weather_app.webp"
            title="React Weather App"
            description="A React app using weather and geolocation APIs to deliver real‑time conditions in a clean, responsive UI. Search cities seamlessly and explore forecasts with intuitive interactions."
            url="https://relaxed-youtiao-4c1124.netlify.app/"
            slug="react-weather-app"
          />
          <ProjectCard
            src="/img/iphone14_clonewebsite.webp"
            title="iPhone 14 Clone 3D Website"
            description="A 3D React experience with GSAP animations that showcase motion design and micro‑interactions inspired by the iPhone 14."
            url="https://apple-iphone3d-website.netlify.app/"
            slug="iphone14-clone-3d"
          />
        <ProjectCard
            src="/img/guardians.webp"
            title="GUARDIANS OF THE MOON"
            description="Graduation project: a Unity VR game and a TouchDesigner installation. Built over one month (VR) and one week (installation) to enhance an AR/VR center’s experience."
            url="/guardians_en"
            slug="guardians-of-the-moon"
          />
        <ProjectCard
            src="/img/water_drops_culpture.webp"
            title="Water Drop Effect"
            description="TouchDesigner study: GLSL shaders and TOPs capture the essence of water through procedural motion."
            url="https://www.instagram.com/reel/C5I0TBkSrk6/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
            slug="water-drop-effect"
          />
          <ProjectCard
            src="/img/of.webp"
            title="The Art of Dynamic Mesh"
            description="An openFrameworks exploration of image processing and mesh dynamics, visualizing light and movement."
            url="https://www.instagram.com/p/Ctv2k7Nvcrb/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
            slug="the-art-of-dynamic-mesh"
          />
          <ProjectCard
            src="/img/heart.webp"
            title="Pulse of Reflection"
            description="TouchDesigner piece: CHOPs/TOPs animate a reflective heart; an exponential LFO adds a lifelike rhythm."
            url="https://www.instagram.com/p/C8PaH0kSQ2Z/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
            slug="pulse-of-reflection"
          />
      </motion.div>
    </div>
  );
};

export default Projects;
