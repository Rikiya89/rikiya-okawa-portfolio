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
    <div className="flex gap-3">
      <button onClick={handleBack} className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] font-panno text-lg inline-block px-6">
        Back
      </button>
      {visitHref && (
        <a href={visitHref} target="_blank" rel="noopener noreferrer" className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[220px] font-panno text-lg inline-block px-6">
          Visit
        </a>
      )}
      <button onClick={handleBackToList} className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[220px] font-panno text-lg inline-block px-6">
        Back to list
      </button>
    </div>
  );
}
