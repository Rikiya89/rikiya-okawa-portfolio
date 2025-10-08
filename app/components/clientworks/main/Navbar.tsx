"use client";

import { useState } from "react";
import Image from "next/image";
import { Socials } from "@/constants";

type Locale = "en" | "jp";

type NavCopy = {
  aboutLabel: string;
  aboutHref: string;
  skillsLabel: string;
  skillsHref: string;
  projectsLabel: string;
  projectsHref: string;
  languageLabel: string;
  languageHref: string;
};

const NAV_COPY: Record<Locale, NavCopy> = {
  en: {
    aboutLabel: "About Me",
    aboutHref: "/en#about-me",
    skillsLabel: "Skills",
    skillsHref: "#skills",
    projectsLabel: "Projects",
    projectsHref: "#projects",
    languageLabel: "Japanese",
    languageHref: "/clientworks_jp",
  },
  jp: {
    aboutLabel: "About Me",
    aboutHref: "/jp#about-me",
    skillsLabel: "Skills",
    skillsHref: "#skills",
    projectsLabel: "Projects",
    projectsHref: "#projects",
    languageLabel: "English",
    languageHref: "/clientworks",
  },
};

type ClientWorksNavbarProps = {
  locale?: Locale;
  languageHref?: string;
};

const ClientWorksNavbar = ({ locale = "en", languageHref }: ClientWorksNavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const copy = NAV_COPY[locale];
  const resolvedLanguageHref = languageHref ?? copy.languageHref;

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="flex items-center justify-between h-full">
        <a href="#client-hero" className="flex items-center">
          <Image
            src="/img/NavLogo.webp"
            alt="logo"
            width={45}
            height={45}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="Welcome-text font-bold ml-[10px] hidden md:block text-gray-300 text-2xl font-panno">
            Rikiya Okawa
          </span>
        </a>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 text-white cursor-pointer transition-transform duration-500 ease-in-out ${
              isMenuOpen ? "rotate-90" : "rotate-0"
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        <div className="hidden md:flex w-[500px] items-center justify-between">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] px-[20px] py-[6px] rounded-full text-gray-200 md:mx-4">
            <a href={copy.aboutHref} className="cursor-pointer font-panno text-lg">
              {copy.aboutLabel}
            </a>
            <a href={copy.skillsHref} className="cursor-pointer font-panno text-lg">
              {copy.skillsLabel}
            </a>
            <a href={copy.projectsHref} className="cursor-pointer font-panno text-lg">
              {copy.projectsLabel}
            </a>
            <a href={resolvedLanguageHref} className="cursor-pointer font-panno text-lg">
              {copy.languageLabel}
            </a>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-[65px] left-0 w-full bg-[#030014]/95 backdrop-blur-lg border-b border-[#7042f861]/30 shadow-lg shadow-[#2A0E61]/50 z-40 animate-slideDown">
            <a href={copy.aboutHref} className="block text-white p-4 font-panno text-lg hover:bg-[#2A0E61]/20 transition-colors animate-fadeInUp" style={{ animationDelay: '0.05s' }}>
              {copy.aboutLabel}
            </a>
            <a href={copy.skillsHref} className="block text-white p-4 font-panno text-lg hover:bg-[#2A0E61]/20 transition-colors animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
              {copy.skillsLabel}
            </a>
            <a href={copy.projectsHref} className="block text-white p-4 font-panno text-lg hover:bg-[#2A0E61]/20 transition-colors animate-fadeInUp" style={{ animationDelay: '0.15s' }}>
              {copy.projectsLabel}
            </a>
            <a href={resolvedLanguageHref} className="block text-white p-4 font-panno text-lg hover:bg-[#2A0E61]/20 transition-colors animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              {copy.languageLabel}
            </a>
          </div>
        )}

        <div className="hidden md:flex gap-5">
          {Socials.map(social => (
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-gray-50"
              aria-label={social.name}
            >
              <Image src={social.src} alt={social.name} width={24} height={24} />
            </a>
          ))}
        </div>

        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30"
            onClick={() => setIsMenuOpen(false)}
          ></div>
        )}
      </div>
    </div>
  );
};

export default ClientWorksNavbar;

