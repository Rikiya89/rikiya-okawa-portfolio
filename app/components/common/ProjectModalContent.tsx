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
    <article>
      <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden">
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 900px, calc(100vw - 2rem)"
        />
      </div>
      <h1 className="mt-6 text-3xl font-semibold text-white text-center font-panno">{title}</h1>
      {description && (
        <p className="mt-3 text-white/80 leading-7 text-center whitespace-pre-line">
          {description}
        </p>
      )}

      <div className="mt-6 flex gap-3 justify-center">
        {onVisit ? (
          <button
            onClick={onVisit}
            className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[220px] font-panno text-lg inline-block px-6"
          >
            {visitText}
          </button>
        ) : visitHref ? (
          <a
            href={visitHref}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[220px] font-panno text-lg inline-block px-6"
          >
            {visitText}
          </a>
        ) : null}

        <button
          onClick={onClose}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[220px] font-panno text-lg inline-block px-6"
        >
          {closeText}
        </button>
      </div>
    </article>
  );
}
