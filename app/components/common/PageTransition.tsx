"use client";

import React, { createContext, useContext, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

type Ctx = { leaveWith: (fn: () => void) => void };
const PageTransitionContext = createContext<Ctx | null>(null);

export const usePageTransition = () => useContext(PageTransitionContext);

export function PageTransition({ children }: { children: React.ReactNode }) {
  const [leaving, setLeaving] = useState(false);

  const leaveWith = (fn: () => void) => {
    if (leaving) return;
    setLeaving(true);
    setTimeout(fn, 260);
  };

  return (
    <PageTransitionContext.Provider value={{ leaveWith }}>
      <motion.div
        initial={{ opacity: 0, y: 10, filter: "blur(2px)" }}
        animate={{ opacity: leaving ? 0 : 1, y: leaving ? 10 : 0, filter: leaving ? "blur(2px)" : "blur(0px)" }}
        transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </PageTransitionContext.Provider>
  );
}

export function TransitionLink({ href, className, children }: { href: string; className?: string; children: React.ReactNode }) {
  const router = useRouter();
  const ctx = usePageTransition();

  const onClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    // Allow cmd/ctrl click to open in a new tab
    if (e.metaKey || e.ctrlKey) return;
    e.preventDefault();
    const go = () => router.push(href);
    if (ctx) ctx.leaveWith(go);
    else go();
  };

  return (
    <a href={href} onClick={onClick} className={className}>
      {children}
    </a>
  );
}

