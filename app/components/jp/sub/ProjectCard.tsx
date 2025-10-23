"use client";
// ProjectCard.tsx
import Image from "next/image";
import React from "react";
import Link from 'next/link';
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

interface Props {
  src: string;
  title: string;
  description: string;
  url: string;
  slug?: string; // when provided, opens modal via ?project=slug
}

const ProjectCard = ({ src, title, description, url, slug }: Props) => {
  const router = useRouter();
  const hrefForLink = slug ? `/jp/project/${encodeURIComponent(slug)}` : url;
  return (
    <motion.article
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] cursor-pointer z-20 h-auto 2xl:w-96 xl:w-96 lg:w-96 md:w-96 sm:w-80 flex flex-col"
      aria-label={title}
    >
      <Link
        href={hrefForLink}
        prefetch={false}
        scroll={false}
        target={slug ? undefined : "_blank"}
        rel={slug ? undefined : "noopener noreferrer"}
        className="flex flex-col h-full"
        onClick={(e) => {
          if (!slug) return; // external link
          if (e.metaKey || e.ctrlKey) return; // open new tab
          e.preventDefault();
          const base = "/jp?modal=off";
          const dest = `/jp/project/${encodeURIComponent(slug)}?m=${Date.now()}`;
          router.replace(base, { scroll: false });
          let fired = false;
          const go = () => {
            if (fired) return;
            fired = true;
            router.push(dest, { scroll: false });
          };
          requestAnimationFrame(() => requestAnimationFrame(go));
          setTimeout(go, 60);
        }}
      >
        <div className="relative aspect-[16/9] w-full flex-shrink-0">
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
        <div className="relative p-4 flex flex-col flex-1 items-center text-center">
          <h1 className="text-[21px] font-semibold text-white font-panno flex-shrink-0">{title}</h1>
          <p className="text-gray-300 whitespace-pre-line mt-4">{description}</p>
        </div>
      </Link>
    </motion.article>
  );
};

export default ProjectCard;
