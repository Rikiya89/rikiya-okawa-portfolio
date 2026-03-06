"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { usePageTransition } from "@/components/common/PageTransition";
import { navigateWithFallback } from "@/components/common/navigateWithFallback";

export default function DescriptionActionsJp({ slug, visitHref }: { slug: string; visitHref?: string | null }) {
  const router = useRouter();
  const ctx = usePageTransition();
  const listTopHref = "/clientworks_jp";

  const leave = (fn: () => void) => {
    if (ctx) ctx.leaveWith(fn);
    else fn();
  };

  const navigateTo = (href: string) => {
    leave(() => navigateWithFallback(router, href));
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
          サイトを見る
        </a>
      )}
      <button
        onClick={handleBackToList}
        className="button-primary text-center text-white cursor-pointer rounded-lg w-full font-panno text-lg inline-flex items-center justify-center px-6 py-2.5 min-h-[44px] whitespace-nowrap transition-transform duration-200 ease-out md:hover:scale-[1.02] active:scale-[0.98] md:hover:shadow-[0_0_16px_rgba(191,151,255,0.35)]"
      >
        一覧に戻る
      </button>
    </div>
  );
}
