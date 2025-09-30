"use client";
// Projects.tsx
import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../sub/ProjectCard";
import { listJpProjects } from "@/lib/siteProjectsJp";

const Projects = () => {
  const projects = listJpProjects();

  return (
    <div className="flex flex-col items-center justify-center pb-20 relative">
      <motion.h1
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="xl:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-9 font-panno 
      lg:text-4xl md:text-4xl sm:text-4xl"
      >
        My Projects
      </motion.h1>
      <div className="absolute top-[-30px] left-0" id="projects"></div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="2xl:max-w-7xl 2xl:gap-10 2xl:grid-cols-3 2xl:justify-center 2xl:justify-items-center 2xl:gird 
      xl:max-w-7xl xl:grid-cols-3 xl:gap-10 xl:px-10 xl:justify-items-center xl:justify-center xl:grid 
      lg:max-w-7xl lg:grid-cols-2 lg:gap-10 lg:px-10 lg:justify-items-center lg:justify-center lg:grid 
      md:max-w-2xl md:grid-cols-2 md:gap-10 md:px-10 md:justify-items-center md:justify-center md:flex 
      sm:max-w-4xl sm:gap-10 sm:flex-col sm:flex"
      >
        {projects.map((p) => (
          <ProjectCard
            key={p.slug}
            src={p.src}
            title={p.title}
            description={p.description}
            url={p.url}
            slug={p.slug}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
