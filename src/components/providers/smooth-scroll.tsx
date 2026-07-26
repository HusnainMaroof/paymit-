"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useMemo,
  type ReactNode,
} from "react";
import Lenis from "lenis";

type ScrollEvent = { progress: number; scroll: number };
type ScrollSubscriber = (e: ScrollEvent) => void;

type SmoothScrollContextValue = {
  subscribeScroll: (cb: ScrollSubscriber) => () => void;
};

const SmoothScrollContext = createContext<SmoothScrollContextValue | null>(
  null,
);

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const subscribersRef = useRef<Set<ScrollSubscriber>>(new Set());

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    const subscribers = subscribersRef.current;
    lenis.on("scroll", (e: { progress: number; scroll: number }) => {
      subscribers.forEach((cb) => cb({ progress: e.progress, scroll: e.scroll }));
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
      subscribers.clear();
    };
  }, []);

  const value = useMemo<SmoothScrollContextValue>(
    () => ({
      subscribeScroll: (cb: ScrollSubscriber) => {
        subscribersRef.current.add(cb);
        const current = lenisRef.current;
        if (current) {
          const instance = current as unknown as {
            progress: number;
            scroll: number;
          };
          if (typeof instance.progress === "number") {
            cb({ progress: instance.progress, scroll: instance.scroll ?? 0 });
          }
        }
        return () => {
          subscribersRef.current.delete(cb);
        };
      },
    }),
    [],
  );

  return (
    <SmoothScrollContext.Provider value={value}>
      {children}
    </SmoothScrollContext.Provider>
  );
}

export function useLenis(): SmoothScrollContextValue {
  const ctx = useContext(SmoothScrollContext);
  if (!ctx) {
    throw new Error("useLenis must be used within a SmoothScrollProvider");
  }
  return ctx;
}