"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { usePageTransition } from "@/components/common/PageTransition";

export default function DescriptionActions({ slug, visitHref }: { slug: string; visitHref?: string | null }) {
  const router = useRouter();
  const ctx = usePageTransition();
  const searchParams = useSearchParams();
  const fromModal = (searchParams?.get("from") ?? "") === "modal";
  const listTopHref = "/en";

  const leave = (fn: () => void) => {
    if (ctx) ctx.leaveWith(fn);
    else fn();
  };

  const handleBack = () => {
    if (fromModal && typeof window !== "undefined" && window.history.length > 1) {
      leave(() => router.back());
    } else {
      leave(() => router.push(`/en/project/${slug}`));
    }
  };

  const navigateTo = (href: string) => {
    const go = () => {
      router.push(href);
      if (typeof window !== "undefined") {
        const target = new URL(href, window.location.origin);
        setTimeout(() => {
          if (window.location.pathname !== target.pathname) {
            window.location.assign(href);
            return;
          }
          if (target.hash && window.location.hash !== target.hash) {
            window.location.hash = target.hash;
          }
        }, 300);
      }
    };
    leave(go);
  };

  const handleBackToList = () => navigateTo(listTopHref);

  return (
    <div className="grid w-full max-w-[520px] grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3">
      {visitHref && (
        <a
          href={visitHref}
          target="_blank"
          rel="noopener noreferrer"
          className="button-primary text-center text-white cursor-pointer rounded-lg w-full font-panno text-lg inline-flex items-center justify-center px-6 py-2.5 min-h-[44px] whitespace-nowrap transition-transform duration-200 ease-out md:hover:scale-[1.02] active:scale-[0.98] md:hover:shadow-[0_0_16px_rgba(191,151,255,0.35)]"
        >
          Visit Site
        </a>
      )}
      <button
        onClick={handleBackToList}
        className="button-primary text-center text-white cursor-pointer rounded-lg w-full font-panno text-lg inline-flex items-center justify-center px-6 py-2.5 min-h-[44px] whitespace-nowrap transition-transform duration-200 ease-out md:hover:scale-[1.02] active:scale-[0.98] md:hover:shadow-[0_0_16px_rgba(191,151,255,0.35)]"
      >
        Back to List
      </button>
    </div>
  );
}
