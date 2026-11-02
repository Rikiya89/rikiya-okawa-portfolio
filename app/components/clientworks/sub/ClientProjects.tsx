// components/clientworks/sub/ClientProjects.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export interface Props {
  src: string;
  alt?: string;
  title: string;
  description: string;
  role?: string;  // optional: short role line under the title
  url?: string;   // optional
  slug?: string;  // optional
  centerText?: boolean; // optional: center description text
  basePath?: string; // optional: base path for routing (e.g., "/clientworks" or "/clientworks_jp")
  index?: number;
}

const hostnameOf = (url?: string) => {
  if (!url) return null;
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return null;
  }
};

export default function ClientProjects({ src, alt, title, description, role, url, slug, basePath = "/clientworks", index }: Props) {
  const hasSlug = typeof slug === "string" && slug.length > 0;
  const hasUrl  = typeof url  === "string" && url.length  > 0;
  const router = useRouter();
  const scrollKey = basePath === "/clientworks_jp" ? "clientworks:scrollY:jp" : "clientworks:scrollY:en";
  const isJp = basePath === "/clientworks_jp";
  const host = hostnameOf(url);

  const CardInner = (
    <>
      <div className="work-card__media plate relative aspect-[16/9] w-full">
        <Image
          src={src}
          alt={alt ?? title}
          fill
          className="object-cover"
          sizes="(min-width: 1280px) 30vw, (min-width: 768px) 46vw, 92vw"
        />
      </div>
      <div className="flex items-baseline gap-4 border-b border-ink py-2.5 type-label">
        {index ? (
          <span className="work-card__index text-ink">{String(index).padStart(2, "0")}</span>
        ) : null}
        <span className="min-w-0 flex-1 truncate normal-case tracking-normal text-ink-2">{host ?? "—"}</span>
        <span aria-hidden="true" className="work-card__arrow text-ink">{hasSlug ? "→" : hasUrl ? "↗" : ""}</span>
      </div>
      <h3 className={`work-card__title type-title mt-4 text-[22px] lg:text-[24px] text-ink ${isJp ? "text-jp-wrap" : "text-balance"}`}>{title}</h3>
      {role && (
        <p className={`type-mono mt-2 text-ink-2 ${isJp ? "text-jp-wrap" : ""}`}>{role}</p>
      )}
      <p
        className={`mt-2.5 text-ink-2 ${
          isJp ? "text-[14px] leading-[1.85] line-clamp-3 md:line-clamp-4 text-jp-wrap" : "type-body line-clamp-3"
        }`}
      >
        {description}
      </p>
    </>
  );

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="work-card relative h-full w-full"
      aria-label={title}
    >
      {hasSlug ? (
        <Link
          href={`${basePath}/${slug}`}
          prefetch
          scroll={false}
          className="work-card__link flex flex-col h-full"
          onClick={(e) => {
            if (e.metaKey || e.ctrlKey) return; // allow open in new tab
            e.preventDefault();
            if (typeof window !== "undefined") {
              try {
                sessionStorage.setItem(scrollKey, JSON.stringify({ y: window.scrollY, ts: Date.now() }));
              } catch {}
            }
            const modalToken = Date.now().toString(36);
            const dest = `${basePath}/${slug}?m=${modalToken}`;
            router.push(dest, { scroll: false });
          }}
        >
          {CardInner}
        </Link>
      ) : hasUrl ? (
        <Link href={url!} target="_blank" rel="noopener noreferrer" className="work-card__link flex flex-col h-full">
          {CardInner}
        </Link>
      ) : (
        <div className="flex flex-col h-full">{CardInner}</div>
      )}
    </motion.article>
  );
}
