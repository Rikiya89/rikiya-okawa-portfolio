"use client";
// Navbar.tsx
// Navbar.tsx

import { useState } from 'react';
import { Socials } from '@/constants';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="flex items-center justify-between h-full">
        <a href="#home" className="flex items-center">
          <Image
            src="/NavLogo.webp"
            alt="logo"
            width={60}
            height={60}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold ml-[10px] hidden md:block text-gray-300 text-xl">
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
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] px-[20px] py-[10px] rounded-full text-gray-200 md:mx-4">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
            <a href="/jp" className="cursor-pointer">
              Japanese
            </a>
          </div>
        </div>

        {/* Dropdown Menu Items for smaller screens */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-[65px] left-0 w-full bg-[#03001417] backdrop-blur-md z-40">
            <a href="#about-me" className="block text-white p-4">
              About me
            </a>
            <a href="#skills" className="block text-white p-4">
              Skills
            </a>
            <a href="#projects" className="block text-white p-4">
              Projects
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
              className="text-gray-200 hover:text-gray-50"
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
