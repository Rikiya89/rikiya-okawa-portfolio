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
        className="w-full max-w-7xl px-4 sm:px-6 md:px-10 grid gap-10 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 justify-items-center items-stretch"
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
