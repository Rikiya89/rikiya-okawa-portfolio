"use client";

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Socials } from '@/constants';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/jp";
  const aboutHref = isHome ? "#about-me" : "/jp#about-me";
  const skillsHref = isHome ? "#skills" : "/jp#skills";
  const projectsHref = isHome ? "#projects" : "/jp#projects";

  return (
    <div
      className="site-nav-shell w-full h-[65px] fixed top-0 backdrop-blur-md z-50 px-10"
      data-modal-exclude
      style={{ pointerEvents: 'auto' }}
    >
      <div className="flex items-center justify-between h-full">
        <a href={aboutHref} className="flex items-center">
          <span className="name-heading font-bold text-2xl font-panno">
            Rikiya Okawa
          </span>
        </a>

        {/* Hamburger Icon */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 text-white cursor-pointer transition-transform duration-500 ease-in-out ${
              isMenuOpen ? 'rotate-90' : 'rotate-0'
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

        {/* Menu Items - always visible on PC */}
        <div className="hidden md:flex w-[500px] items-center justify-between">
        <div className="site-nav-pill flex items-center justify-between w-full h-auto border px-[20px] py-[6px] rounded-full text-gray-200 md:mx-4">
          <a href={aboutHref} className="site-nav-link cursor-pointer font-panno text-lg">
              About me
            </a>
          <a href={skillsHref} className="site-nav-link cursor-pointer font-panno text-lg">
              Skills
            </a>
          <a href={projectsHref} className="site-nav-link cursor-pointer font-panno text-lg">
              Projects
            </a>
          <a href="/en" className="site-nav-link cursor-pointer font-panno text-lg">
              English
            </a>
          </div>
        </div>

        {/* Dropdown Menu Items for smaller screens */}
        {isMenuOpen && (
          <div className="site-nav-mobile md:hidden absolute top-[65px] left-0 w-full backdrop-blur-lg border-b z-40 animate-slideDown">
            <a href={aboutHref} className="site-nav-mobile-link block text-white p-4 font-panno text-lg animate-fadeInUp" style={{ animationDelay: '0.05s' }}>
              About me
            </a>
            <a href={skillsHref} className="site-nav-mobile-link block text-white p-4 font-panno text-lg animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
              Skills
            </a>
            <a href={projectsHref} className="site-nav-mobile-link block text-white p-4 font-panno text-lg animate-fadeInUp" style={{ animationDelay: '0.15s' }}>
              Projects
            </a>
            <a href="/en" className="site-nav-mobile-link block text-white p-4 font-panno text-lg animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              English
            </a>
          </div>
        )}

        {/* Social Icons */}
        <div className="hidden md:flex gap-5">
          {Socials.map((social) => (
            <a
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              key={social.name}
              className="site-social-link text-gray-200"
              aria-label={social.name}
            >
              <Image
                src={social.src}
                alt={social.name}
                width={24}
                height={24}
              />
            </a>
          ))}
        </div>

        {/* Overlay when Menu is open */}
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

export default Navbar;
