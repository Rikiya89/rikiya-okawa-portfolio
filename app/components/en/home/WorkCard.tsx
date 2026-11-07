"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { externalLinkProps } from "@/utils/externalLink";
import type { MetaItem } from "@/utils/projectMeta";

type Props = {
  index: number;
  slug: string;
  title: string;
  question?: string;
  tags: string[];
  meta?: MetaItem[];
  src: string;
  liveUrl?: string;
  codeUrl?: string;
  caseHref?: string;
  labels?: { case: string; caseAria: string; live: string; code: string };
};

const EN_LABELS = { case: "Case study →", caseAria: "case study", live: "Live ↗", code: "Code ↗" };

const WorkCard = ({
  index,
  slug,
  title,
  question,
  meta = [],
  tags,
  src,
  liveUrl,
  codeUrl,
  caseHref = `/en/project/${encodeURIComponent(slug)}/description`,
  labels = EN_LABELS,
}: Props) => {
  const flipped = index % 2 === 1;
  const reducedMotion = useReducedMotion();

  return (
    <motion.article
      initial={reducedMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: reducedMotion ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="work-card grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-x-[var(--gutter)] gap-y-6 border-t border-ink pt-3"
    >
      {/* Running bar: stack */}
      <div className="col-span-4 md:col-span-8 lg:col-span-12 flex items-baseline gap-4 type-label">
        {tags.length > 0 ? (
          <span className="min-w-0 flex-1 truncate normal-case tracking-normal text-ink-2 type-mono">
            {tags.join(" / ")}
          </span>
        ) : null}
      </div>

      <Link
        href={caseHref}
        className={`work-card__media plate relative block aspect-[16/10] col-span-4 md:col-span-8 lg:col-span-7 ${flipped ? "lg:order-2 lg:col-start-6" : ""}`}
        aria-label={`${title} ${labels.caseAria}`}
      >
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 58vw, 100vw"
        />
      </Link>

      <div className={`col-span-4 md:col-span-8 lg:col-span-5 flex flex-col ${flipped ? "lg:order-1 lg:col-start-1 lg:row-start-2" : ""}`}>
        <h3 className="work-card__title type-headline text-[34px] md:text-[44px] lg:text-[clamp(36px,3.4vw,52px)] text-balance">
          <Link href={caseHref} className="work-card__title-link">
            {title}
          </Link>
        </h3>
        {question && (
          <p className="mt-5 text-[18px] md:text-[20px] leading-[1.45] text-ink-2 text-jp-wrap max-w-[34ch]">
            {question}
          </p>
        )}
        <div className="mt-8 lg:mt-auto lg:pt-10">
          {meta.length > 0 && (
            <dl className="mb-6 border-t border-[var(--rule)]">
              {meta.map((m) => (
                <div key={m.label} className="flex items-baseline gap-4 border-b border-[var(--rule)] py-2.5">
                  <dt className="type-label text-ink-2 w-16 shrink-0">{m.label}</dt>
                  <dd className="type-body text-ink min-w-0">{m.value}</dd>
                </div>
              ))}
            </dl>
          )}
          <div className="flex flex-wrap gap-x-6 gap-y-1">
            <Link href={caseHref} className="link-arrow type-label text-ink">
              {labels.case}
              <span className="sr-only">: {title}</span>
            </Link>
            {liveUrl && (
              <a
                href={liveUrl}
                {...(liveUrl.startsWith("/") ? {} : externalLinkProps)}
                className="link-arrow type-label text-ink"
              >
                {labels.live}
                <span className="sr-only">: {title}</span>
              </a>
            )}
            {codeUrl && (
              <a href={codeUrl} {...externalLinkProps} className="link-arrow type-label text-ink">
                {labels.code}
                <span className="sr-only">: {title}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default WorkCard;
