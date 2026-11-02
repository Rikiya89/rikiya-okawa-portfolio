import React from "react";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { FaInstagram } from "react-icons/fa";

const SOCIAL = [
  { name: "Instagram", href: "https://www.instagram.com/ricky_o_369/", Icon: FaInstagram },
  { name: "GitHub", href: "https://github.com/Rikiya89", Icon: RxGithubLogo },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/rikiya-okawa369/", Icon: RxLinkedinLogo },
];

const EMAIL = "rikiyadazo89@gmail.com";

const Footer = () => {
  return (
    <footer className="portfolio-footer relative w-full border-t-1 border-ink text-ink">
      <div className="page-grid pt-14 pb-8 md:pt-20 lg:pt-24">
        <div className="section-head__bar type-label">
          <span><span className="section-head__index">05</span>Contact</span>
        </div>

        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-x-[var(--gutter)] gap-y-12 pt-10 md:pt-14">
          <div className="col-span-4 md:col-span-8 lg:col-span-8">
            <p className="type-label text-ink-2">Email</p>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-3 inline-block type-headline text-[7.4vw] md:text-[5.6vw] lg:text-[clamp(44px,4.6vw,72px)] underline decoration-1 decoration-ink/30 underline-offset-[0.14em] hover:decoration-current"
            >
              {EMAIL}
            </a>
          </div>

          <div className="col-span-4 md:col-span-4 lg:col-span-3 lg:col-start-10">
            <p className="type-label text-ink-2">Social</p>
            <ul className="mt-3 border-t border-ink">
              {SOCIAL.map(({ name, href, Icon }) => (
                <li key={name} className="border-b border-[var(--rule)]">
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-[44px] items-center justify-between gap-4 py-2.5 text-[15px]"
                  >
                    <span className="flex items-center gap-3">
                      <Icon aria-hidden="true" className="h-3.5 w-3.5" />
                      {name}
                    </span>
                    <span aria-hidden="true" className="type-label">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 md:mt-24 flex flex-col gap-1.5 md:flex-row md:justify-between border-t border-ink pt-4 type-label text-ink-2">
          <span>&copy; Rikiya Okawa. All rights reserved</span>
          <span>Front-end / Creative coding</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
