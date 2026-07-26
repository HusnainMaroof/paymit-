"use client";

import { useEffect, useRef } from "react";
import { useLenis } from "@/components/providers/smooth-scroll";

export default function ScrollProgressIndicator() {
  const fillRef = useRef<HTMLDivElement>(null);
  const { subscribeScroll } = useLenis();

  const apply = (progress: number) => {
    if (!fillRef.current) return;
    const pct = Math.min(100, Math.max(0, progress * 100));
    fillRef.current.style.transform = `translateY(-${100 - pct}%)`;
  };

  useEffect(() => {
    const unsubscribe = subscribeScroll((e) => apply(e.progress));
    return unsubscribe;
  }, [subscribeScroll]);

  return (
    <div
      className="fixed top-1/2 right-[1%] z-40 h-[100px] w-1.5 -translate-y-1/2 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700/20"
      aria-hidden
    >
      <div
        ref={fillRef}
        className="h-full w-full rounded-full bg-[var(--colorBrand300)]"
        style={{ transform: "translateY(-100%)" }}
      />
    </div>
  );
}