// ProjectCard.tsx
import Image from "next/image";
import React from "react";
import Link from 'next/link';

interface Props {
  src: string;
  title: string;
  description: string;
  url: string;
}

const ProjectCard = ({ src, title, description, url }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] cursor-pointer z-20 h-auto 2xl:w-96 xl:w-96 lg:w-96 md:w-96 sm:w-80">
      <Link href={url} passHref legacyBehavior>
        <a target="_blank" rel="noopener noreferrer" className="block">
          <div className="relative">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            <Image
              src={src}
              alt={title}
              width={1000}
              height={1000}
              className="w-full object-contain"
              style={{ opacity: 0.7 }}  // Apply transparency effect
            />
          </div>
          <div className="relative p-4">
            <h1 className="text-xl font-semibold text-white text-center">{title}</h1>
            <p className="mt-2 text-gray-300">{description}</p>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default ProjectCard;
