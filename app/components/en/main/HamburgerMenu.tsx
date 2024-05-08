// HamburgerMenu.tsx

"use client";
import { useState } from "react";
import { Socials } from "@/constants";
import Image from "next/image";

const HamburgerMenu = () => {
const [isMenuOpen, setIsMenuOpen] = useState(false);

return (
<div>
    {/* Hamburger Icon */}
    <div className="sm:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
    {/* Insert your hamburger icon here */}
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-white cursor-pointer"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
    </div>

    {/* Overlay Menu for Mobile */}
    {isMenuOpen && (
    <div className="absolute top-16 left-0 w-full bg-[#030014] p-4 sm:p-0 z-40">
        <a href="#about-me" className="block p-2 text-white">
        About me
        </a>
        <a href="#skills" className="block p-2 text-white">
        Skills
        </a>
        <a href="#projects" className="block p-2 text-white">
        Projects
        </a>
        {/* Add more links if needed */}
        <button onClick={() => setIsMenuOpen(false)}>Close Menu</button>
    </div>
    )}
</div>
);
};

export default HamburgerMenu;
