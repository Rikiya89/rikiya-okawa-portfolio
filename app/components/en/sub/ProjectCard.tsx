"use client";
// ProjectCard.tsx
import Image from "next/image";
import React from "react";
import Link from 'next/link';
import { motion } from "framer-motion";

interface Props {
  src: string;
  title: string;
  description: string;
  url: string;
  slug?: string; // when provided, opens modal via ?project=slug
}

const ProjectCard = ({ src, title, description, url, slug }: Props) => {
  const hrefForLink = slug ? `/en/project/${encodeURIComponent(slug)}` : url;
  return (
    <motion.article
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] cursor-pointer z-20 h-auto 2xl:w-96 xl:w-96 lg:w-96 md:w-96 sm:w-80"
      aria-label={title}
    >
      <Link
        href={hrefForLink}
        prefetch={false}
        scroll={false}
        target={slug ? undefined : "_blank"}
        rel={slug ? undefined : "noopener noreferrer"}
        className="block"
      >
        <div className="relative aspect-[16/9] w-full">
          <div className="absolute inset-0 bg-black/15" />
          <Image
            src={src}
            alt={title}
            fill
            className="object-cover"
            style={{ opacity: 0.72 }}
            sizes="(min-width: 1536px) 384px, (min-width: 1024px) 384px, (min-width: 640px) 45vw, 90vw"
          />
        </div>
        <div className="relative p-4">
          <h1 className="text-[21px] font-semibold text-white text-center">{title}</h1>
          <p className="mt-2 text-gray-300 text-lg text-center">{description}</p>
        </div>
      </Link>
    </motion.article>
  );
};

export default ProjectCard;
