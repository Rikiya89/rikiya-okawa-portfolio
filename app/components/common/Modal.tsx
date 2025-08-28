"use client";

import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useRef, useState } from "react";

type ModalControl = { closeWith: (fn: () => void) => void };
const ModalControlContext = createContext<ModalControl | null>(null);
export const useModalControl = () => useContext(ModalControlContext);

export default function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const panelRef = useRef<HTMLDivElement | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const [entered, setEntered] = useState(false);

  const close = () => {
    if (isClosing) return;
    setIsClosing(true);
    // Restore body scroll and immediately navigate to list to avoid stale URL
    document.body.style.overflow = 'auto';
    router.replace("/clientworks");
  };

  const closeWith = (fn: () => void) => {
    if (isClosing) return;
    setIsClosing(true);
    // Immediately restore body scroll
    document.body.style.overflow = 'auto';
    setTimeout(fn, 320);
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
    const id = requestAnimationFrame(() => {
      panelRef.current?.focus();
      setEntered(true);
    });
    
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
    
    return () => {
      cancelAnimationFrame(id);
      // Always restore body scroll when component unmounts
      document.body.style.overflow = 'auto';
    };
  }, []);

  // Additional cleanup on unmount to ensure body scroll is restored
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div
      className={
        "fixed inset-0 z-[70] flex items-center justify-center " +
        ((isClosing || !entered) ? "pointer-events-none" : "pointer-events-auto")
      }
      onClick={close}
      aria-label="Modal overlay"
    >
      {/* Backdrop */}
      <div
        className={
          "absolute inset-0 bg-[#0300145e] backdrop-blur-md transition-opacity duration-300 ease-out " +
          ((isClosing || !entered) ? "opacity-0" : "opacity-100")
        }
      />

      {/* Panel */}
      <div
        ref={panelRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        className={
          "relative z-10 w-[min(100vw-2rem,1000px)] max-h-[85vh] overflow-y-auto rounded-2xl bg-[#030014] border border-[#7042f861] pt-14 px-6 pb-6 shadow-lg shadow-[#2A0E61]/50 opacity-[0.95] backdrop-blur-md " +
          "transition-all duration-300 ease-out " +
          ((isClosing || !entered) ? "translate-y-6 scale-[0.98] opacity-0" : "translate-y-0 scale-100 opacity-100")
        }
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
      </div>
    </div>
  );
}
