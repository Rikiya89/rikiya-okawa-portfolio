"use client";

type RouterLike = {
  push: (href: string, options?: { scroll?: boolean }) => void;
};

export function navigateWithFallback(router: RouterLike, href: string, delayMs = 450) {
  router.push(href, { scroll: false });

  if (typeof window === "undefined") return;

  const target = new URL(href, window.location.origin);

  window.setTimeout(() => {
    const samePath = window.location.pathname === target.pathname;
    const sameSearch = window.location.search === target.search;

    if (!samePath || !sameSearch) {
      // Replace instead of assign so slow client routing cannot create a duplicate
      // history entry that makes "back" appear to loop on production.
      window.location.replace(target.toString());
    }
  }, delayMs);
}
