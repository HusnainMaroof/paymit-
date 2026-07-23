"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/*
  Reveal — link.com's signature entrance: fade + slide-up, ~260ms ease-out-expo,
  staggered via delay (not timelines). Becomes instant under reduced-motion
  (handled in CSS). Children opt into the master rhythm through delay chaining.
*/
type RevealProps = {
  as?: React.ElementType;
  delay?: number; // ms — sequence via delay, not timelines
  className?: string;
  children: React.ReactNode;
  // When false, the element renders as-is without any reveal wiring.
  enabled?: boolean;
} & React.HTMLAttributes<HTMLElement>;

export function Reveal({
  as: Tag = "div",
  delay = 0,
  className,
  children,
  enabled = true,
  style,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(
    () =>
      !enabled ||
      (typeof window !== "undefined" &&
        !!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches),
  );

  useEffect(() => {
    if (visible) return;
    const node = ref.current;
    if (!node) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(node);
    return () => io.disconnect();
  }, [visible]);

  return (
    <Tag
      ref={ref as never}
      data-reveal=""
      className={cn(visible && "is-visible", className)}
      style={{ ["--reveal-delay" as string]: `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}