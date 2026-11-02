"use client";
// Navbar.tsx

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Socials } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import { RxLockClosed } from 'react-icons/rx';

// Japanese counterpart of the current English page; falls back to the Japanese home.
const toJapaneseHref = (pathname: string) => {
  if (pathname.startsWith("/en/project/")) return pathname.replace(/^\/en/, "/jp");
  if (pathname.startsWith("/clientworks")) return pathname.replace(/^\/clientworks/, "/clientworks_jp");
  if (pathname === "/aboutme") return "/about-me_jp";
  if (pathname === "/guardians_en") return "/guardians_jp";
  return "/jp";
};

const SocialLinks = ({ linkClassName = "" }: { linkClassName?: string }) => (
  <>
    {Socials.map((social) => (
      <a
        href={social.link}
        target="_blank"
        rel="noopener noreferrer"
        key={social.name}
        className={`site-social-link inline-flex items-center justify-center min-h-[44px] min-w-[32px] ${linkClassName}`}
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
  </>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const isHome = pathname === "/en";
  const topHref = isHome ? "#top" : "/en#top";
  const workHref = isHome ? "#work" : "/en#work";
  const labHref = isHome ? "#lab" : "/en#lab";
  const jpHref = toJapaneseHref(pathname);

  useEffect(() => {
    if (!isMenuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setIsMenuOpen(false);
      menuButtonRef.current?.focus();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isMenuOpen]);

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      {/* Overlay stays outside the nav: the nav's backdrop-filter would confine a fixed child to the nav box */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 top-[var(--nav-h)] bg-ink/40 z-40"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        ></div>
      )}
      <div
        className="site-nav-shell w-full h-[var(--nav-h)] fixed top-0 z-50 px-[var(--margin)]"
        data-modal-exclude
        style={{ pointerEvents: 'auto' }}
      >
        <div className="flex items-center justify-between h-full">
          <a href={topHref} className="flex items-center">
            <span className="name-heading">
              Rikiya Okawa
            </span>
          </a>

          {/* Hamburger Icon */}
          <button
            className="md:hidden"
            ref={menuButtonRef}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 cursor-pointer transition-transform duration-300 ease-out ${
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
          <div className="hidden md:flex w-[440px] lg:w-[560px] items-center justify-between">
            <div className="site-nav-pill flex items-center justify-between w-full h-auto md:mx-4">
              <a href={workHref} className="site-nav-link cursor-pointer">
                Work
              </a>
              <a href={labHref} className="site-nav-link cursor-pointer">
                Lab
              </a>
              <Link
                href="/clientworks"
                prefetch={false}
                title="Password protected"
                className="site-nav-link cursor-pointer inline-flex items-center gap-1"
              >
                Client Work
                <RxLockClosed aria-hidden="true" className="h-4 w-4 opacity-70" />
                <span className="sr-only">(password protected)</span>
              </Link>
              <a href="/aboutme" className="site-nav-link cursor-pointer">
                About
              </a>
              <a href={jpHref} className="site-nav-link cursor-pointer">
                日本語
              </a>
            </div>
          </div>

          {/* Dropdown Menu Items for smaller screens */}
          {isMenuOpen && (
            <div id="mobile-menu" className="site-nav-mobile md:hidden absolute top-[var(--nav-h)] left-0 w-full border-b z-40 animate-slideDown">
              <a href={workHref} onClick={() => setIsMenuOpen(false)} className="site-nav-mobile-link block px-[var(--margin)] py-3.5 font-panno text-[26px] font-medium tracking-[-0.02em] animate-fadeInUp" style={{ animationDelay: '0.05s' }}>
                Work
              </a>
              <a href={labHref} onClick={() => setIsMenuOpen(false)} className="site-nav-mobile-link block px-[var(--margin)] py-3.5 font-panno text-[26px] font-medium tracking-[-0.02em] animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
                Lab
              </a>
              <Link href="/clientworks" prefetch={false} className="site-nav-mobile-link block px-[var(--margin)] py-3.5 font-panno text-[26px] font-medium tracking-[-0.02em] animate-fadeInUp" style={{ animationDelay: '0.15s' }}>
                Client Work
                <span className="type-label inline-flex items-center gap-1 ml-3 align-middle text-ink-2">
                  <RxLockClosed aria-hidden="true" className="h-4 w-4" />
                  Password protected
                </span>
              </Link>
              <a href="/aboutme" className="site-nav-mobile-link block px-[var(--margin)] py-3.5 font-panno text-[26px] font-medium tracking-[-0.02em] animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                About
              </a>
              <a href={jpHref} className="site-nav-mobile-link block px-[var(--margin)] py-3.5 font-panno text-[26px] font-medium tracking-[-0.02em] animate-fadeInUp" style={{ animationDelay: '0.25s' }}>
                日本語
              </a>
              <div className="flex gap-2 px-[calc(var(--margin)-6px)] py-2 border-t border-[var(--rule)] animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
                <SocialLinks linkClassName="inline-flex items-center justify-center min-h-[44px] min-w-[44px]" />
              </div>
            </div>
          )}

          {/* Social Icons */}
          <div className="hidden md:flex gap-2 items-center">
            <SocialLinks />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
