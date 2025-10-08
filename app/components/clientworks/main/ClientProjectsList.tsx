"use client";
// components/clientworks/main/Projects.tsx
import React from "react";
import { motion } from "framer-motion";
import ClientProjects from "../sub/ClientProjects"; // <-- the CARD component

export type ClientProjectCard = {
  src: string;
  title: string;
  description: string;
  url?: string;
  slug?: string;
  centerText?: boolean;
};

type ClientProjectsListProps = {
  heading: string;
  projects: ClientProjectCard[];
  basePath?: string;
};

const ClientProjectsList = ({ heading, projects, basePath = "/clientworks" }: ClientProjectsListProps) => {
  return (
    <div className="flex flex-col items-center justify-center pb-20" id="projects">
      <motion.h1
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="xl:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-9 font-panno lg:text-4xl md:text-4xl sm:text-4xl"
      >
        {heading}
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
        {projects.map(project => (
          <ClientProjects
            key={project.slug ?? project.title}
            src={project.src}
            title={project.title}
            description={project.description}
            url={project.url}
            slug={project.slug}
            centerText={project.centerText ?? true}
            basePath={basePath}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default ClientProjectsList;
