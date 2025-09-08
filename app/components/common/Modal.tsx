"use client";

import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useRef, useState } from "react";

type ModalControl = { closeWith: (fn: () => void) => void };
const ModalControlContext = createContext<ModalControl | null>(null);
export const useModalControl = () => useContext(ModalControlContext);

export default function Modal({ children, resetPath = "/clientworks", refreshOnClose = true, skipUrlUpdate = false }: { children: React.ReactNode; resetPath?: string; refreshOnClose?: boolean; skipUrlUpdate?: boolean }) {
  const router = useRouter();
  const panelRef = useRef<HTMLDivElement | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const [entered, setEntered] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  const close = () => {
    console.log('Modal close() called');
    if (isClosing) return;
    setIsClosing(true);
    console.log('Modal closing animation started');
    document.body.style.overflow = 'auto';
    
    // Update URL to base path without triggering Next route change
    // Keeps the component mounted to allow exit animation to play
    try {
      window.history.replaceState(null, '', resetPath);
    } catch {}
    
    // Wait for the medium-close animation to complete
    setTimeout(() => {
      console.log('Close animation complete, hiding modal');
      setShouldRender(false);
      // Stabilize Next router state after exit if user hasn't navigated elsewhere
      setTimeout(() => {
        try {
          const samePath = window.location.pathname === resetPath;
          const hasQuery = window.location.search && window.location.search.length > 0;
          if (samePath && !hasQuery) {
            router.replace(resetPath, { scroll: false });
          }
        } catch {}
      }, 200);
    }, 500); // Match medium-close animation duration
  };

  const closeWith = (fn: () => void) => {
    if (isClosing) return;
    setIsClosing(true);
    document.body.style.overflow = 'auto';
    
    // Update URL to base path without triggering Next route change
    // Keeps the component mounted to allow exit animation to play
    try {
      window.history.replaceState(null, '', resetPath);
    } catch {}
    
    // Wait for the medium-close animation to complete
    setTimeout(() => {
      console.log('CloseWith animation complete, hiding modal');
      setShouldRender(false);
      
      // Execute callback after modal is hidden, but only if user
      // hasn't navigated elsewhere (e.g., immediately reopened another modal)
      setTimeout(() => {
        try {
          const samePath = window.location.pathname === resetPath;
          const hasQuery = window.location.search && window.location.search.length > 0;
          if (samePath && !hasQuery) {
            console.log('Executing closeWith callback');
            fn();
          } else {
            console.log('Navigation changed during close; skipping closeWith callback');
          }
        } catch {
          fn();
        }
      }, 200);
    }, 500); // Match medium-close animation duration
  };

  // ESC キーで閉じる
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // 初回フォーカスをモーダル内へ & lock scroll
  useEffect(() => {
    console.log('Modal mounted'); // Debug
    const id = requestAnimationFrame(() => {
      panelRef.current?.focus();
      setEntered(true);
    });
    document.body.style.overflow = 'hidden';
    return () => {
      console.log('Modal unmounting'); // Debug
      cancelAnimationFrame(id);
      document.body.style.overflow = 'auto';
    };
  }, []);

  // Don't render if shouldRender is false
  if (!shouldRender) {
    return null;
  }

  return (
    <div
      className={
        "fixed inset-0 z-[70] flex items-center justify-center " +
        ((isClosing || !entered) ? "pointer-events-none" : "pointer-events-auto")
      }
      onClick={close}
      aria-label="Modal overlay"
    >
      {/* Ultra Beautiful Layered Backdrop */}
      <div
        className={
          "absolute inset-0 bg-gradient-to-br from-[#0300145e] via-[#2A0E61]/20 to-[#7042f861] backdrop-blur-md transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] will-change-opacity will-change-transform " +
          (!entered
            ? "opacity-0 scale-105"
            : isClosing
            ? "opacity-0 scale-105"
            : "opacity-100 scale-100")
        }
        style={{
          transform: `translateZ(0)`, // Force hardware acceleration
          // Keep background static during close to reduce GPU cost
          background: undefined,
        }}
      />
      
      {/* Secondary Glow Layer (subtle, centered) */}
      <div
        className={
          "absolute inset-0 pointer-events-none transition-opacity duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] " +
          (!entered ? "opacity-0" : isClosing ? "opacity-0" : "opacity-20")
        }
        style={{
          transform: `translateZ(0)`,
          background:
            'radial-gradient(600px 600px at 50% 50%, rgba(147, 51, 234, 0.25) 0%, rgba(79, 70, 229, 0.12) 40%, transparent 70%)',
        }}
      />

      {/* Magical Particle Effect Layer */}
      <div
        className={
          "absolute inset-0 transition-opacity duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] opacity-0"
        }
        style={{
          transform: `translateZ(0)`,
          background: 'transparent',
        }}
      />

      {/* Ultra Beautiful Cinematic Panel */}
      <div
        ref={panelRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        className={
          "relative z-10 w-[min(100vw-2rem,1000px)] max-h-[85vh] overflow-y-auto rounded-2xl bg-gradient-to-br from-[#030014] via-[#0a0025] to-[#1a0b2e] border border-[#7042f861] pt-14 px-6 pb-6 shadow-2xl shadow-[#2A0E61]/70 opacity-[0.98] backdrop-blur-xl " +
          "will-change-transform will-change-opacity " +
          (!entered ? "opacity-0" : isClosing ? "modal-panel-out" : "modal-panel-in")
        }
        style={{
          transform: `translateZ(0)`, // Force hardware acceleration
          backfaceVisibility: 'hidden', // Prevent flickering
          transformOrigin: 'center center',
          boxShadow: '0 25px 50px -12px rgba(42, 14, 97, 0.5), 0 0 0 1px rgba(112, 66, 255, 0.1)',
          background: undefined,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* entry shimmer */}
        {entered && !isClosing && (
          <div className="modal-shimmer" />
        )}

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
