"use client";

type RouterLike = {
  push: (href: string, options?: { scroll?: boolean }) => void;
};

export function navigateWithFallback(router: RouterLike, href: string, delayMs = 300) {
  router.push(href, { scroll: false });

  if (typeof window === "undefined") return;

  const target = new URL(href, window.location.origin);

  window.setTimeout(() => {
    const samePath = window.location.pathname === target.pathname;
    const sameSearch = window.location.search === target.search;

    if (!samePath || !sameSearch) {
      window.location.assign(target.toString());
    }
  }, delayMs);
}
