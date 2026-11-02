import React from "react";
import Image from "next/image";
import { lab } from "@/lib/homeEn";
import { getEnProject, type SiteProject } from "@/lib/siteProjectsEn";
import { Socials } from "@/constants";
import { externalLinkProps } from "@/utils/externalLink";
import SectionHeading from "./SectionHeading";

type Props = {
  getProject?: typeof getEnProject;
  intro?: string;
  followLabel?: string;
};

const instagramUrl = Socials.find((s) => s.name === "Instagram")?.link;

const hostOf = (url: string) => {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
};

const Lab = ({
  getProject = getEnProject,
  intro = "Real-time experiments in TouchDesigner, GLSL and openFrameworks. More studies on Instagram (@ricky_o_369).",
  followLabel = "Follow on Instagram ↗",
}: Props) => {
  const items = lab.map(getProject).filter((p): p is SiteProject => p !== null);

  return (
    <section id="lab" className="relative section-space scroll-mt-[var(--nav-h)]">
      <SectionHeading index="02" title="Lab" intro={intro} meta={`${String(items.length).padStart(2, "0")} studies`} />
      <div className="page-grid">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-[var(--gutter)] gap-y-12">
          {items.map((p, i) => (
            <li key={p.slug}>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="work-card work-card__link flex h-full flex-col"
              >
                <div className="work-card__media plate relative aspect-square">
                  <Image
                    src={p.src}
                    alt={p.title}
                    fill
                    quality={90}
                    className="object-cover"
                    sizes="(min-width: 768px) 46vw, 92vw"
                  />
                </div>
                <div className="flex items-baseline gap-4 border-b border-ink py-2.5 type-label">
                  <span className="work-card__index">{String(i + 1).padStart(2, "0")}</span>
                  <span className="min-w-0 flex-1 truncate normal-case tracking-normal fg-2">{hostOf(p.url)}</span>
                  <span aria-hidden="true" className="work-card__arrow">↗</span>
                </div>
                <h3 className="work-card__title type-title mt-4 text-[22px] lg:text-[24px]">{p.title}</h3>
                <p className="mt-2.5 type-body fg-2 text-jp-wrap">{p.description.split("\n")[0].replace(/[;,]\s*$/, ".").replace(/、\s*$/, "。")}</p>
              </a>
            </li>
          ))}
        </ul>
        {instagramUrl && (
          <div className="mt-12 md:mt-16">
            <a href={instagramUrl} {...externalLinkProps} className="link-arrow type-label">
              {followLabel}
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default Lab;
