"use client";

import Image from "next/image";

type Props = {
  title: string;
  description?: string;
  role?: string;
  techStack?: string[];
  techHeading?: string;
  src: string;
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
  visitHref,
  onVisit,
  onClose,
  visitText = "Visit Site",
  closeText = "Back to List",
  locale = "en",
}: Props) {
  const isJp = locale === "jp";
  const roleClassName = `md:mt-2 sm:mt-2 ${
    isJp ? "text-sm md:text-base" : "text-base md:text-lg"
  } text-white/70 text-center font-panno flex-shrink-0`;
  const techHeadingClassName = `text-sm md:text-base uppercase tracking-wider text-white/60 font-panno`;
  const techChipClassName = isJp
    ? "rounded-full border border-white/15 px-4 py-1.5 text-sm md:text-base text-white/80 font-panno"
    : "rounded-full border border-white/15 px-4 py-1.5 text-sm md:text-base text-white/80 font-panno";
  const actionButtonClassName =
    "button-primary text-center text-white cursor-pointer rounded-lg w-full md:w-auto md:max-w-[220px] font-panno text-base md:text-lg inline-flex items-center justify-center px-4 md:px-6 py-2.5 min-h-[44px] whitespace-nowrap transition-transform duration-200 ease-out md:hover:scale-[1.02] active:scale-[0.98] md:hover:shadow-[0_0_16px_rgba(191,151,255,0.35)]";

  return (
    <article className="flex flex-col h-full">
      <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden flex-shrink-0">
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 900px, calc(100vw - 2rem)"
        />
      </div>
      <h1 className="md:mt-6 md:text-3xl sm:mt-3 sm:text-xl font-semibold text-white text-center font-panno flex-shrink-0">{title}</h1>
      {role && (
        <p className={roleClassName}>{role}</p>
      )}
      {description && (
        <p className="md:mt-3 md:text-lg md:leading-8 sm:mt-2 sm:text-base sm:leading-6 text-white/80 text-center whitespace-pre-line flex-shrink-0 font-panno">
          {description}
        </p>
      )}
      {techStack && techStack.length > 0 ? (
        <div className="md:mt-4 sm:mt-3 flex flex-col items-center gap-2 flex-shrink-0">
          <p className={techHeadingClassName}>{techHeading}</p>
          <div className="flex flex-wrap justify-center gap-2">
            {techStack.map((tech) => (
              <span key={tech} className={techChipClassName}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      ) : null}

      <div className="md:mt-6 sm:mt-3 flex md:flex-row sm:flex-col gap-3 justify-center flex-shrink-0">
        {onVisit ? (
          <button
            onClick={onVisit}
            className={actionButtonClassName}
          >
            {visitText}
          </button>
        ) : visitHref ? (
          <a
            href={visitHref}
            target="_blank"
            rel="noopener noreferrer"
            className={actionButtonClassName}
          >
            {visitText}
          </a>
        ) : null}

        <button
          onClick={onClose}
          className={actionButtonClassName}
        >
          {closeText}
        </button>
      </div>
    </article>
  );
}
