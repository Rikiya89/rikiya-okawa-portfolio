"use client";

import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type ModalControl = { closeWith: (fn: () => void) => void };
const ModalControlContext = createContext<ModalControl | null>(null);
export const useModalControl = () => useContext(ModalControlContext);

export default function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const panelRef = useRef<HTMLDivElement | null>(null);
  const [isClosing, setIsClosing] = useState(false);

  const close = () => {
    if (isClosing) return;
    setIsClosing(true);
    // Navigate back after the exit animation completes
    setTimeout(() => router.back(), 280);
  };

  const closeWith = (fn: () => void) => {
    if (isClosing) return;
    setIsClosing(true);
    setTimeout(fn, 280);
  };

  // ESC キーで閉じる
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // 初回フォーカスをモーダル内へ
  useEffect(() => {
    const id = requestAnimationFrame(() => panelRef.current?.focus());
    
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
    
    return () => {
      cancelAnimationFrame(id);
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center"
      onClick={close}
      aria-label="Modal overlay"
    >
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isClosing ? 0 : 1 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="absolute inset-0 bg-[#0300145e] backdrop-blur-md"
      />

      {/* Panel */}
      <motion.div
        ref={panelRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        initial={{ y: 24, opacity: 0, scale: 0.98 }}
        animate={{ y: isClosing ? 24 : 0, opacity: isClosing ? 0 : 1, scale: isClosing ? 0.98 : 1 }}
        transition={{ duration: 0.28, ease: [0.6, 0.6, 0, 1] }}
        className="relative z-10 w-[min(100vw-2rem,1000px)] max-h-[85vh] overflow-y-auto rounded-2xl bg-[#030014] border border-[#7042f861] pt-14 px-6 pb-6 shadow-lg shadow-[#2A0E61]/50 opacity-[0.95] backdrop-blur-md"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={close}
          aria-label="Close modal"
          className="absolute right-4 top-4 z-20 flex items-center justify-center w-8 h-8 rounded-full bg-[#2A0E61]/60 border border-[#7042f861] hover:bg-[#2A0E61]/80 hover:shadow-lg hover:shadow-[#2A0E61]/50 transition-all duration-200"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-white">
            <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
        <ModalControlContext.Provider value={{ closeWith }}>
          {children}
        </ModalControlContext.Provider>
      </motion.div>
    </div>
  );
}
