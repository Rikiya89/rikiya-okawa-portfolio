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
  role?: string;
  url?: string;
  slug?: string;
  centerText?: boolean;
};

type ClientProjectsListProps = {
  heading?: string; // omit when the page renders its own section heading
  projects: ClientProjectCard[];
  basePath?: string;
};

const ClientProjectsList = ({ heading, projects, basePath = "/clientworks" }: ClientProjectsListProps) => {
  return (
    <div className="relative pb-20 md:pb-28">
      {heading && (
        <div className="page-grid">
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="type-headline pb-10 text-[13vw] md:text-[9vw] lg:text-[clamp(64px,7vw,112px)]"
          >
            {heading}
          </motion.h2>
        </div>
      )}
      {heading && <div className="absolute top-[-30px] left-0" id="projects"></div>}
      <div className="page-grid grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-[var(--gutter)] gap-y-14 md:gap-y-16 xl:[&>*:nth-child(3n+2)]:mt-16">
        {projects.map((project) => (
          <ClientProjects
            key={project.slug ?? project.title}
            src={project.src}
            alt={project.alt}
            title={project.title}
            description={project.description}
            role={project.role}
            url={project.url}
            slug={project.slug}
            basePath={basePath}
          />
        ))}
      </div>
    </div>
  );
};

export default ClientProjectsList;
