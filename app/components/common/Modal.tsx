"use client";

import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useRef, useState } from "react";

type ModalControl = { closeWith: (fn: () => void) => void };
const ModalControlContext = createContext<ModalControl | null>(null);
export const useModalControl = () => useContext(ModalControlContext);

export default function Modal({ children, resetPath = "/clientworks", refreshOnClose = true, skipUrlUpdate = false }: { children: React.ReactNode; resetPath?: string; refreshOnClose?: boolean; skipUrlUpdate?: boolean }) {
  const router = useRouter();
  const panelRef = useRef<HTMLDivElement | null>(null);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);
  const inertSiblingsRef = useRef<HTMLElement[]>([]);
  const [labelledBy, setLabelledBy] = useState<string | undefined>();
  const [describedBy, setDescribedBy] = useState<string | undefined>();
  const [isClosing, setIsClosing] = useState(false);
  const [entered, setEntered] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  const close = () => {
    console.log('Modal close() called');
    if (isClosing) return;
    setIsClosing(true);
    console.log('Modal closing animation started');
    document.body.style.overflow = 'auto';
    // Restore background interactivity immediately
    setBackgroundInert(false);
    
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
    // Restore background interactivity immediately
    setBackgroundInert(false);
    
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
    // Remember the element that had focus to restore on close
    previouslyFocusedRef.current = (document.activeElement as HTMLElement) || null;

    const id = requestAnimationFrame(() => {
      const panel = panelRef.current;
      if (panel) {
        // Try to focus the first focusable element inside the panel; fallback to the panel itself
        const focusables = getFocusableElements(panel);
        (focusables[0] || panel).focus();
      }
      setEntered(true);
    });
    document.body.style.overflow = 'hidden';
    // Make background inert/hidden to assistive tech while modal is open
    const root = rootRef.current;
    const container = (root?.parentElement) || document.body;
    inertSiblingsRef.current = Array.from(container.children).filter((el) => el !== root) as HTMLElement[];
    setBackgroundInert(true);

    return () => {
      console.log('Modal unmounting'); // Debug
      cancelAnimationFrame(id);
      document.body.style.overflow = 'auto';
      // Restore background interactivity/a11y
      setBackgroundInert(false);
      // Restore focus to the element that opened the modal (if still in DOM)
      try {
        const prev = previouslyFocusedRef.current;
        if (prev && document.contains(prev)) {
          prev.focus();
        }
      } catch {}
    };
  }, []);

  // Discover a reasonable label/description from content if available
  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;
    // Find first heading element as label
    const heading = panel.querySelector('h1, h2, h3') as HTMLElement | null;
    if (heading) {
      if (!heading.id) heading.id = `modal-title-${Math.random().toString(36).slice(2, 8)}`;
      setLabelledBy(heading.id);
    }
    // Prefer explicitly-marked description; else first paragraph
    const desc = (panel.querySelector('[data-modal-description]') || panel.querySelector('p')) as HTMLElement | null;
    if (desc) {
      if (!desc.id) desc.id = `modal-desc-${Math.random().toString(36).slice(2, 8)}`;
      setDescribedBy(desc.id);
    }
  }, [entered]);

  // Trap focus within the modal when tabbing
  const onPanelKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== 'Tab') return;
    const panel = panelRef.current;
    if (!panel) return;
    const focusables = getFocusableElements(panel);
    if (focusables.length === 0) {
      e.preventDefault();
      panel.focus();
      return;
    }
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    const active = document.activeElement as HTMLElement | null;
    if (e.shiftKey) {
      if (active === first || active === panel) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (active === last) {
        e.preventDefault();
        first.focus();
      }
    }
  };

  function getFocusableElements(container: HTMLElement): HTMLElement[] {
    const selectors = [
      'a[href]','button:not([disabled])','textarea:not([disabled])','input:not([disabled])','select:not([disabled])','[tabindex]:not([tabindex="-1"])'
    ];
    const nodes = Array.from(container.querySelectorAll<HTMLElement>(selectors.join(',')));
    return nodes.filter((el) => !el.hasAttribute('disabled') && el.getAttribute('aria-hidden') !== 'true');
  }

  function setBackgroundInert(enabled: boolean) {
    try {
      inertSiblingsRef.current.forEach((el) => {
        if (enabled) {
          el.setAttribute('inert', '');
          el.setAttribute('aria-hidden', 'true');
          // Prevent accidental pointer-events through some frameworks' overlays
          (el as HTMLElement).style.pointerEvents = 'none';
        } else {
          el.removeAttribute('inert');
          el.removeAttribute('aria-hidden');
          (el as HTMLElement).style.pointerEvents = '';
        }
      });
    } catch {}
  }

  // Don't render if shouldRender is false
  if (!shouldRender) {
    return null;
  }

  return (
    <div
      ref={rootRef}
      className={
        "fixed inset-0 z-[70] flex items-center justify-center " +
        ((isClosing || !entered) ? "pointer-events-none" : "pointer-events-auto")
      }
      onClick={close}
      role="presentation"
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
        aria-hidden="true"
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
        aria-hidden="true"
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
        aria-hidden="true"
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
        aria-labelledby={labelledBy}
        aria-describedby={describedBy}
        className={
          "relative z-10 w-[min(100vw-2rem,1000px)] max-h-[90vh] rounded-2xl bg-gradient-to-br from-[#030014] via-[#0a0025] to-[#1a0b2e] border border-[#7042f861] shadow-2xl shadow-[#2A0E61]/70 opacity-[0.98] backdrop-blur-xl " +
          "md:pt-14 md:px-6 md:pb-6 sm:pt-6 sm:px-4 sm:pb-4 " +
          "overflow-hidden flex flex-col " +
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
        onKeyDown={onPanelKeyDown}
      >
        {/* entry shimmer */}
        {entered && !isClosing && (
          <div className="modal-shimmer" />
        )}

        <button
          onClick={close}
          aria-label="Close modal"
          className="absolute right-4 top-4 z-20 flex items-center justify-center w-8 h-8 rounded-full bg-[#2A0E61]/60 border border-[#7042f861] hover:bg-[#2A0E61]/80 hover:shadow-lg hover:shadow-[#2A0E61]/50 transition-all duration-200 flex-shrink-0"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-white">
            <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
        <div className="overflow-y-auto flex-1 min-h-0">
          <ModalControlContext.Provider value={{ closeWith }}>
            {children}
          </ModalControlContext.Provider>
        </div>
      </div>
    </div>
  );
}
