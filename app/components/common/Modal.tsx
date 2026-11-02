"use client";

import { useRouter } from "next/navigation";
import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";

type ModalControl = { closeWith: (fn: () => void) => void };
const ModalControlContext = createContext<ModalControl | null>(null);
export const useModalControl = () => useContext(ModalControlContext);

export default function Modal({ children, resetPath = "/clientworks", refreshOnClose = true, skipUrlUpdate = false }: { children: React.ReactNode; resetPath?: string; refreshOnClose?: boolean; skipUrlUpdate?: boolean }) {
  const CLOSE_ANIMATION_MS = 220;
  const POST_CLOSE_SYNC_MS = 120;
  const router = useRouter();
  const panelRef = useRef<HTMLDivElement | null>(null);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);
  const inertSiblingsRef = useRef<HTMLElement[]>([]);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const postCloseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [labelledBy, setLabelledBy] = useState<string | undefined>();
  const [describedBy, setDescribedBy] = useState<string | undefined>();
  const [isClosing, setIsClosing] = useState(false);
  const [entered, setEntered] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  const getFocusableElements = useCallback((container: HTMLElement): HTMLElement[] => {
    const selectors = [
      "a[href]",
      "button:not([disabled])",
      "textarea:not([disabled])",
      "input:not([disabled])",
      "select:not([disabled])",
      "[tabindex]:not([tabindex=\"-1\"])",
    ];
    const nodes = Array.from(container.querySelectorAll<HTMLElement>(selectors.join(",")));
    return nodes.filter((el) => !el.hasAttribute("disabled") && el.getAttribute("aria-hidden") !== "true");
  }, []);

  const setBackgroundInert = useCallback((enabled: boolean) => {
    try {
      inertSiblingsRef.current.forEach((el) => {
        // Skip elements marked with data-modal-exclude (like navbar)
        if (el.hasAttribute('data-modal-exclude')) return;
        if (enabled) {
          el.setAttribute("inert", "");
          el.setAttribute("aria-hidden", "true");
          (el as HTMLElement).style.pointerEvents = "none";
        } else {
          el.removeAttribute("inert");
          el.removeAttribute("aria-hidden");
          (el as HTMLElement).style.pointerEvents = "";
        }
      });
    } catch {}
  }, []);

  const clearCloseTimers = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    if (postCloseTimerRef.current) {
      clearTimeout(postCloseTimerRef.current);
      postCloseTimerRef.current = null;
    }
  }, []);

  const close = useCallback(() => {
    if (isClosing) return;
    clearCloseTimers();
    setIsClosing(true);
    document.body.style.overflow = "";
    // Restore background interactivity immediately
    setBackgroundInert(false);

    // Update URL to base path without triggering Next route change
    // Keeps the component mounted to allow exit animation to play
    try {
      window.history.replaceState(null, "", resetPath);
    } catch {}

    // Wait for the medium-close animation to complete
    closeTimerRef.current = setTimeout(() => {
      try {
        const samePath = window.location.pathname === resetPath;
        const hasQuery = window.location.search && window.location.search.length > 0;
        if (!samePath || hasQuery) {
          // User reopened/navigated during close animation; cancel this close.
          setIsClosing(false);
          return;
        }
      } catch {}

      setShouldRender(false);
      // Stabilize Next router state after exit if user hasn't navigated elsewhere
      postCloseTimerRef.current = setTimeout(() => {
        try {
          const samePath = window.location.pathname === resetPath;
          const hasQuery = window.location.search && window.location.search.length > 0;
          if (samePath && !hasQuery) {
            router.replace(resetPath, { scroll: false });
          }
        } catch {}
      }, POST_CLOSE_SYNC_MS);
    }, CLOSE_ANIMATION_MS); // Match close animation duration
  }, [CLOSE_ANIMATION_MS, POST_CLOSE_SYNC_MS, clearCloseTimers, isClosing, resetPath, router, setBackgroundInert]);

  const closeWith = useCallback((fn: () => void) => {
    if (isClosing) return;
    clearCloseTimers();
    setIsClosing(true);
    document.body.style.overflow = "";
    // Restore background interactivity immediately
    setBackgroundInert(false);

    // Update URL to base path without triggering Next route change
    // Keeps the component mounted to allow exit animation to play
    try {
      window.history.replaceState(null, "", resetPath);
    } catch {}

    // Wait for the medium-close animation to complete
    closeTimerRef.current = setTimeout(() => {
      try {
        const samePath = window.location.pathname === resetPath;
        const hasQuery = window.location.search && window.location.search.length > 0;
        if (!samePath || hasQuery) {
          // User reopened/navigated during close animation; cancel this close.
          setIsClosing(false);
          return;
        }
      } catch {}

      setShouldRender(false);

      // Execute callback after modal is hidden, but only if user
      // hasn't navigated elsewhere (e.g., immediately reopened another modal)
      postCloseTimerRef.current = setTimeout(() => {
        try {
          const samePath = window.location.pathname === resetPath;
          const hasQuery = window.location.search && window.location.search.length > 0;
          if (samePath && !hasQuery) {
            fn();
          }
        } catch {
          fn();
        }
      }, POST_CLOSE_SYNC_MS);
    }, CLOSE_ANIMATION_MS); // Match close animation duration
  }, [CLOSE_ANIMATION_MS, POST_CLOSE_SYNC_MS, clearCloseTimers, isClosing, resetPath, setBackgroundInert]);

  // ESC キーで閉じる
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close]);

  useEffect(() => {
    return () => {
      clearCloseTimers();
    };
  }, [clearCloseTimers]);

  // 初回フォーカスをモーダル内へ & lock scroll
  useEffect(() => {
    // Remember the element that had focus to restore on close
    previouslyFocusedRef.current = (document.activeElement as HTMLElement) || null;

    const id = requestAnimationFrame(() => {
      const panel = panelRef.current;
      if (panel) {
        // Try to focus the first focusable element inside the panel; fallback to the panel itself
        const focusables = getFocusableElements(panel);
        const target = focusables[0] || panel;
        try {
          target.focus({ preventScroll: true });
        } catch {
          target.focus();
        }
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
      cancelAnimationFrame(id);
      document.body.style.overflow = "";
      // Restore background interactivity/a11y
      setBackgroundInert(false);
      // Restore focus to the element that opened the modal (if still in DOM)
      try {
        const prev = previouslyFocusedRef.current;
        if (prev && document.contains(prev)) {
          try {
            prev.focus({ preventScroll: true });
          } catch {
            prev.focus();
          }
        }
      } catch {}
    };
  }, [getFocusableElements, setBackgroundInert]);

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
      {/* Backdrop: flat ink scrim */}
      <div
        className={
          "absolute inset-0 bg-ink/60 transition-opacity ease-[cubic-bezier(0.22,1,0.36,1)] will-change-opacity " +
          (isClosing ? "duration-[220ms] " : "duration-[280ms] ") +
          (!entered
            ? "opacity-0"
            : isClosing
            ? "opacity-0"
            : "opacity-100")
        }
        aria-hidden="true"
        style={{
          transform: `translateZ(0)`, // Force hardware acceleration
          // Keep background static during close to reduce GPU cost
          background: undefined,
        }}
      />

      {/* Panel */}
      <div
        ref={panelRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        aria-describedby={describedBy}
        className={
          "relative z-10 w-[min(100vw-2rem,1000px)] max-h-[90vh] bg-paper text-ink border border-ink " +
          "pt-16 px-4 pb-5 md:pt-16 md:px-6 md:pb-6 " +
          "overflow-hidden flex flex-col " +
          "will-change-transform will-change-opacity " +
          (!entered ? "opacity-0" : isClosing ? "modal-panel-out" : "modal-panel-in")
        }
        style={{
          transform: `translateZ(0)`, // Force hardware acceleration
          backfaceVisibility: 'hidden', // Prevent flickering
          transformOrigin: 'center center',
          background: undefined,
        }}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={onPanelKeyDown}
      >
        <button
          onClick={close}
          aria-label="Close modal"
          className="absolute right-3 top-3 md:right-4 md:top-3 z-20 flex items-center justify-center w-10 h-10 bg-ink text-paper border border-ink hover:bg-signal hover:border-signal transition-colors duration-150 flex-shrink-0"
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M13 3L3 13M3 3L13 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/>
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
