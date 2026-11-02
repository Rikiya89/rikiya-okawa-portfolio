"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { usePageTransition } from "@/components/common/PageTransition";
import { navigateWithFallback } from "@/components/common/navigateWithFallback";

export default function DescriptionActions({
  slug,
  visitHref,
  codeHref,
}: {
  slug: string;
  visitHref?: string | null;
  codeHref?: string | null;
}) {
  const router = useRouter();
  const ctx = usePageTransition();
  const searchParams = useSearchParams();
  const fromModal = (searchParams?.get("from") ?? "") === "modal";
  const listTopHref = "/en#work";

  const leave = (fn: () => void) => {
    if (ctx) ctx.leaveWith(fn);
    else fn();
  };

  const navigateTo = (href: string) => {
    leave(() => navigateWithFallback(router, href, { scroll: true }));
  };

  const handleBackToList = () => {
    if (fromModal && typeof window !== "undefined" && window.history.length > 1) {
      leave(() => router.back());
      return;
    }
    navigateTo(listTopHref);
  };

  return (
    <div className="grid w-full max-w-[520px] grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-2 md:gap-3 border-t border-ink pt-6">
      {visitHref && (
        <a
          href={visitHref}
          target="_blank"
          rel="noopener noreferrer"
          className="button-primary w-full inline-flex items-center justify-center px-6 py-3 min-h-[48px] whitespace-nowrap"
        >
          Visit Site
        </a>
      )}
      {codeHref && (
        <a
          href={codeHref}
          target="_blank"
          rel="noopener noreferrer"
          className="button-secondary w-full inline-flex items-center justify-center px-6 py-3 min-h-[48px] whitespace-nowrap"
        >
          View Code
        </a>
      )}
      <button
        onClick={handleBackToList}
        className="button-secondary w-full inline-flex items-center justify-center px-6 py-3 min-h-[48px] whitespace-nowrap"
      >
        Back to List
      </button>
    </div>
  );
}
