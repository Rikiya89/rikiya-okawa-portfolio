"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const panelRef = useRef<HTMLDivElement | null>(null);

  // ESC キーで閉じる
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") router.back();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [router]);

  // 初回フォーカスをモーダル内へ
  useEffect(() => {
    const id = requestAnimationFrame(() => panelRef.current?.focus());
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center"
        onClick={() => router.back()}
        aria-label="Modal overlay"
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

        {/* Panel */}
        <motion.div
          ref={panelRef}
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 30, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="relative z-10 w-[min(100vw-2rem,1000px)] max-h-[85vh] overflow-y-auto rounded-2xl bg-neutral-900 p-6 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => router.back()}
            aria-label="Close modal"
            className="absolute right-4 top-4 rounded-full border border-white/10 px-3 py-1 text-sm hover:bg-white/10"
          >
            Close
          </button>
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
