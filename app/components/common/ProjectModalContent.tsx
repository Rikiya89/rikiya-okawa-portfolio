"use client";

import Image from "next/image";

type Props = {
  title: string;
  description?: string;
  src: string;
  visitHref?: string | null;
  onVisit?: () => void;
  onClose: () => void;
  visitText?: string;
  closeText?: string;
};

export default function ProjectModalContent({
  title,
  description,
  src,
  visitHref,
  onVisit,
  onClose,
  visitText = "Visit",
  closeText = "Back to list",
}: Props) {
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
      {description && (
        <p className="md:mt-3 md:text-base md:leading-7 sm:mt-2 sm:text-sm sm:leading-5 text-white/80 text-center whitespace-pre-line flex-shrink-0">
          {description}
        </p>
      )}

      <div className="md:mt-6 sm:mt-3 flex md:flex-row sm:flex-col gap-3 justify-center flex-shrink-0">
        {onVisit ? (
          <button
            onClick={onVisit}
            className="py-2 button-primary text-center text-white cursor-pointer rounded-lg md:max-w-[220px] sm:w-full font-panno md:text-lg sm:text-base inline-block md:px-6 sm:px-4"
          >
            {visitText}
          </button>
        ) : visitHref ? (
          <a
            href={visitHref}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 button-primary text-center text-white cursor-pointer rounded-lg md:max-w-[220px] sm:w-full font-panno md:text-lg sm:text-base inline-block md:px-6 sm:px-4"
          >
            {visitText}
          </a>
        ) : null}

        <button
          onClick={onClose}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg md:max-w-[220px] sm:w-full font-panno md:text-lg sm:text-base inline-block md:px-6 sm:px-4"
        >
          {closeText}
        </button>
      </div>
    </article>
  );
}
