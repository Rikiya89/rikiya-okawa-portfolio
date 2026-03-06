"use client";

type RouterLike = {
  push: (href: string, options?: { scroll?: boolean }) => void;
  replace?: (href: string, options?: { scroll?: boolean }) => void;
};

type NavigateOptions = {
  delayMs?: number;
  method?: "push" | "replace";
};

export function navigateWithFallback(
  router: RouterLike,
  href: string,
  { delayMs = 450, method = "push" }: NavigateOptions = {},
) {
  const useReplace = method === "replace" && typeof router.replace === "function";

  if (typeof window !== "undefined") {
    const sourcePath = window.location.pathname;
    const sourceSearch = window.location.search;
    const target = new URL(href, window.location.origin);

    if (useReplace) {
      router.replace!(href, { scroll: false });
    } else {
      router.push(href, { scroll: false });
    }

    window.setTimeout(() => {
      const stillOnSource =
        window.location.pathname === sourcePath && window.location.search === sourceSearch;

      if (!stillOnSource) return;

      if (useReplace) {
        window.location.replace(target.toString());
      } else {
        window.location.assign(target.toString());
      }
    }, delayMs);

    return;
  }

  if (useReplace) {
    router.replace!(href, { scroll: false });
  } else {
    router.push(href, { scroll: false });
  }
}
