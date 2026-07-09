"use client";
// components/clientworks/main/Projects.tsx
import React from "react";
import { motion } from "framer-motion";
import ClientProjects from "../sub/ClientProjects"; // <-- the CARD component

export type ClientProjectCard = {
  src: string;
  alt?: string;
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
    <div className="flex flex-col items-center justify-center pb-20 relative">
      <motion.h1
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="xl:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-9 font-panno lg:text-4xl md:text-4xl sm:text-4xl"
      >
        {heading}
      </motion.h1>
      <div className="absolute top-[-30px] left-0" id="projects"></div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid w-full max-w-[1248px] grid-cols-1 justify-center justify-items-center gap-6 px-5 font-panno sm:px-6 md:grid-cols-[repeat(2,20rem)] lg:grid-cols-[repeat(2,24rem)] lg:px-10 xl:grid-cols-[repeat(3,24rem)]"
      >
        {projects.map(project => (
          <ClientProjects
            key={project.slug ?? project.title}
            src={project.src}
            alt={project.alt}
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
