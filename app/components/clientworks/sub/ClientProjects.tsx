// components/clientworks/sub/ClientProjects.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export interface Props {
  src: string;
  title: string;
  description: string;
  url?: string;   // optional
  slug?: string;  // optional
  centerText?: boolean; // optional: center description text
  basePath?: string; // optional: base path for routing (e.g., "/clientworks" or "/clientworks_jp")
}

export default function ClientProjects({ src, title, description, url, slug, centerText, basePath = "/clientworks" }: Props) {
  const hasSlug = typeof slug === "string" && slug.length > 0;
  const hasUrl  = typeof url  === "string" && url.length  > 0;
  const router = useRouter();

  const CardInner = (
    <>
      <div className="relative aspect-[16/9] w-full">
        <div className="absolute inset-0 bg-black/15" />
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover"
          sizes="(min-width: 1536px) 384px, (min-width: 1024px) 384px, (min-width: 640px) 45vw, 90vw"
          style={{ opacity: 0.72 }}
        />
      </div>
      <div className="relative p-4 flex flex-col flex-1">
        <h3 className="text-[21px] font-semibold text-white text-center font-panno">{title}</h3>
        <p className={`mt-2 text-gray-300 line-clamp-3 whitespace-pre-line ${centerText ? "text-center" : ""}`}>{description}</p>
      </div>
    </>
  );

  return (
    <motion.article
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] cursor-pointer z-20 h-full 2xl:w-96 xl:w-96 lg:w-96 md:w-96 sm:w-80 will-change-transform"
      aria-label={title}
    >
      {hasSlug ? (
        <Link
          href={`${basePath}/${slug}`}
          prefetch={false}
          scroll={false}
          className="flex flex-col h-full"
          onClick={(e) => {
            if (e.metaKey || e.ctrlKey) return; // allow open in new tab
            e.preventDefault();
            const base = `${basePath}?modal=off`;
            const dest = `${basePath}/${slug}?m=${Date.now()}`;
            router.replace(base, { scroll: false });
            let fired = false;
            const go = () => {
              if (fired) return;
              fired = true;
              router.push(dest, { scroll: false });
            };
            // Schedule with RAF and a timeout fallback for reliability
            requestAnimationFrame(() => requestAnimationFrame(go));
            setTimeout(go, 60);
          }}
        >
          {CardInner}
        </Link>
      ) : hasUrl ? (
        <Link href={url!} target="_blank" rel="noopener noreferrer" className="flex flex-col h-full">
          {CardInner}
        </Link>
      ) : (
        <div className="flex flex-col h-full">{CardInner}</div>
      )}
    </motion.article>
  );
}
