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
    <div className="grid w-full max-w-[520px] grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-2 md:gap-3 border-t border-ink pt-6">
      {visitHref && (
        <a
          href={visitHref}
          target="_blank"
          rel="noopener noreferrer"
          className="button-primary w-full inline-flex items-center justify-center px-6 py-3 min-h-[48px] whitespace-nowrap"
        >
          サイトを見る
        </a>
      )}
      <button
        onClick={handleBackToList}
        className="button-secondary w-full inline-flex items-center justify-center px-6 py-3 min-h-[48px] whitespace-nowrap"
      >
        一覧に戻る
      </button>
    </div>
  );
}
