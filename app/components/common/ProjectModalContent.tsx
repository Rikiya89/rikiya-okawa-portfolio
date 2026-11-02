"use client";

import Image from "next/image";

type Props = {
  title: string;
  description?: string;
  role?: string;
  techStack?: string[];
  techHeading?: string;
  src: string;
  imageAlt?: string;
  visitHref?: string | null;
  onVisit?: () => void;
  onClose: () => void;
  visitText?: string;
  closeText?: string;
  locale?: "en" | "jp";
};

export default function ProjectModalContent({
  title,
  description,
  role,
  techStack,
  techHeading = "Technologies",
  src,
  imageAlt,
  visitHref,
  onVisit,
  onClose,
  visitText = "Visit Site",
  closeText = "Back to List",
  locale = "en",
}: Props) {
  const isJp = locale === "jp";
  const wrap = isJp ? "text-jp-wrap" : "text-pretty";
  const actionClassName =
    "w-full md:w-auto md:min-w-[200px] inline-flex items-center justify-center gap-3 px-5 py-3 min-h-[48px] whitespace-nowrap";

  return (
    <article className="flex flex-col h-full">
      <div className="plate aspect-[16/9] w-full flex-shrink-0">
        <Image
          src={src}
          alt={imageAlt ?? title}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 950px, calc(100vw - 2rem)"
        />
      </div>

      <div className="mt-5 md:mt-6 grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-4 flex-shrink-0">
        <div className="md:col-span-6">
          <h1 className={`type-headline text-[28px] md:text-[40px] text-ink ${isJp ? "text-jp-wrap" : "text-balance"}`}>
            {title}
          </h1>
          {role && (
            <p className={`type-mono mt-3 text-ink-2 ${wrap}`}>{role}</p>
          )}
        </div>
        {description && (
          <p
            data-modal-description
            className={`md:col-span-6 text-[15px] ${isJp ? "leading-[1.85]" : "leading-[1.6]"} text-ink-2 whitespace-pre-line ${wrap}`}
          >
            {description}
          </p>
        )}
      </div>

      {techStack && techStack.length > 0 ? (
        <div className="mt-6 border-t border-ink pt-3 grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-3 flex-shrink-0">
          <p className="type-label md:col-span-3 text-ink-2">{techHeading}</p>
          <ul className="md:col-span-9 flex flex-wrap gap-1.5">
            {techStack.map((tech) => (
              <li key={tech} className="accent-chip px-2.5 py-1">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="mt-6 md:mt-8 flex flex-col md:flex-row gap-2 md:gap-3 flex-shrink-0">
        {onVisit ? (
          <button onClick={onVisit} className={`button-primary ${actionClassName}`}>
            {visitText} <span aria-hidden="true">→</span>
          </button>
        ) : visitHref ? (
          <a
            href={visitHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`button-primary ${actionClassName}`}
          >
            {visitText} <span aria-hidden="true">↗</span>
          </a>
        ) : null}
        <button onClick={onClose} className={`button-secondary ${actionClassName}`}>
          {closeText}
        </button>
      </div>
    </article>
  );
}
