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
    
    // For intercepted route modals, update Next router state immediately to base path
    if (skipUrlUpdate) {
      router.replace(resetPath);
    } else {
      // Optionally update URL immediately to clear parallel modal state
      window.history.replaceState(null, '', resetPath);
      if (refreshOnClose) router.refresh();
    }
    
    // Wait for the ultra-beautiful cinematic masterpiece to complete
    setTimeout(() => {
      console.log('Ultra-beautiful cinematic masterpiece complete, hiding modal');
      setShouldRender(false);
    }, 1000); // Match ultra-beautiful animation duration
  };

  const closeWith = (fn: () => void) => {
    if (isClosing) return;
    setIsClosing(true);
    document.body.style.overflow = 'auto';
    
    // For intercepted route modals, update Next router state immediately to base path
    if (skipUrlUpdate) {
      router.replace(resetPath);
    } else {
      // Optionally update URL immediately to clear parallel modal state
      window.history.replaceState(null, '', resetPath);
      if (refreshOnClose) router.refresh();
    }
    
    // Wait for the ultra-beautiful cinematic masterpiece to complete
    setTimeout(() => {
      console.log('CloseWith ultra-beautiful cinematic masterpiece complete, hiding modal');
      setShouldRender(false);
      
      // Execute callback after modal is hidden
      setTimeout(() => {
        console.log('Executing closeWith callback');
        fn();
      }, 200);
    }, 1000); // Match ultra-beautiful animation duration
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
          "absolute inset-0 bg-gradient-to-br from-[#0300145e] via-[#2A0E61]/20 to-[#7042f861] backdrop-blur-md transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] will-change-opacity will-change-transform will-change-filter " +
          ((isClosing || !entered) 
            ? "opacity-0 scale-150 backdrop-blur-none brightness-500 saturate-200 hue-rotate-180 contrast-200" 
            : "opacity-100 scale-100 backdrop-blur-md brightness-100 saturate-100 hue-rotate-0 contrast-100")
        }
        style={{
          transform: `translateZ(0)`, // Force hardware acceleration
          background: isClosing 
            ? 'radial-gradient(circle at center, rgba(112, 66, 255, 0.8) 0%, rgba(42, 14, 97, 0.6) 50%, transparent 100%)'
            : undefined,
        }}
      />
      
      {/* Secondary Glow Layer */}
      <div
        className={
          "absolute inset-0 bg-radial-gradient transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] " +
          ((isClosing || !entered) 
            ? "opacity-100 scale-200 bg-gradient-radial from-purple-500/50 via-blue-500/30 to-transparent animate-pulse" 
            : "opacity-0 scale-50")
        }
        style={{
          transform: `translateZ(0)`,
          background: isClosing 
            ? 'radial-gradient(circle at 50% 50%, rgba(147, 51, 234, 0.4) 0%, rgba(79, 70, 229, 0.2) 50%, transparent 70%)'
            : 'transparent',
        }}
      />

      {/* Magical Particle Effect Layer */}
      <div
        className={
          "absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] " +
          (isClosing 
            ? "opacity-100 animate-pulse" 
            : "opacity-0")
        }
        style={{
          transform: `translateZ(0)`,
          background: isClosing 
            ? 'conic-gradient(from 0deg at 50% 50%, rgba(236, 72, 153, 0.3) 0deg, rgba(147, 51, 234, 0.2) 120deg, rgba(79, 70, 229, 0.3) 240deg, rgba(236, 72, 153, 0.3) 360deg)'
            : 'transparent',
          filter: isClosing ? 'blur(40px) brightness(1.5)' : 'blur(0px) brightness(1)',
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
          "transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] will-change-transform will-change-opacity will-change-filter " +
          (
            !entered
              ? "translate-y-16 scale-[0.6] opacity-0 rotate-6 blur-2xl brightness-0 skew-y-3 -translate-x-4"
              : isClosing
              ? "translate-y-4 scale-[1.4] opacity-0 -rotate-18 blur-3xl brightness-1000 saturate-0 skew-y-12 translate-x-8 contrast-200 hue-rotate-180"
              : "translate-y-0 translate-x-0 scale-100 opacity-100 rotate-0 blur-none brightness-100 saturate-100 skew-y-0 contrast-100 hue-rotate-0"
          )
        }
        style={{
          transform: `translateZ(0)`, // Force hardware acceleration
          backfaceVisibility: 'hidden', // Prevent flickering
          transformOrigin: 'center center',
          boxShadow: isClosing 
            ? '0 0 100px rgba(147, 51, 234, 0.8), 0 0 200px rgba(79, 70, 229, 0.6), inset 0 0 50px rgba(236, 72, 153, 0.3)'
            : '0 25px 50px -12px rgba(42, 14, 97, 0.5), 0 0 0 1px rgba(112, 66, 255, 0.1)',
          background: isClosing 
            ? 'linear-gradient(135deg, rgba(147, 51, 234, 0.3) 0%, rgba(79, 70, 229, 0.2) 50%, rgba(236, 72, 153, 0.1) 100%)'
            : undefined,
        }}
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
