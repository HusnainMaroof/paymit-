"use client";

import {
  useEffect,
  useLayoutEffect,
  useRef,
  type ElementType,
  type ReactNode,
} from "react";
import gsap from "gsap";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** CSS selector (scoped to this element) of descendants to stagger.
   *  Omit to stagger this element's direct children. */
  targets?: string;
  y?: number;
  x?: number;
  scale?: number;
  duration?: number;
  stagger?: number;
  ease?: string;
  delay?: number;
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
  /** Clear inline transform/opacity/visibility once the reveal completes,
   *  restoring CSS-driven effects (e.g. Tailwind hover transforms). */
  clearProps?: boolean;
};

export function Reveal({
  children,
  as,
  className,
  targets,
  y = 28,
  x = 0,
  scale = 1,
  duration = 0.8,
  stagger = 0.12,
  ease = "power3.out",
  delay = 0,
  threshold = 0.15,
  rootMargin = "0px 0px -10% 0px",
  once = true,
  clearProps = false,
}: RevealProps) {
  const Tag = (as || "div") as ElementType;
  const ref = useRef<HTMLElement>(null);

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mm = gsap.matchMedia();

    mm.add(
      {
        animate: "(prefers-reduced-motion: no-preference)",
        reduce: "(prefers-reduced-motion: reduce)",
      },
      (ctx) => {
        const { reduce } = ctx.conditions as {
          animate: boolean;
          reduce: boolean;
        };

        const items = targets
          ? Array.from(
              el.querySelectorAll<HTMLElement>(targets),
            )
          : (Array.from(el.children) as HTMLElement[]);

        if (!items.length) return;

        if (reduce) {
          gsap.set(items, {
            autoAlpha: 1,
            y: 0,
            x: 0,
            scale: 1,
            clearProps: "visibility",
          });
          return;
        }

        gsap.set(items, { autoAlpha: 0, y, x, scale });

        let played = false;
        let io: IntersectionObserver | null = null;

        io = new IntersectionObserver(
          (entries) => {
            for (const entry of entries) {
              if (entry.isIntersecting && !played) {
                played = true;
                gsap.to(items, {
                  autoAlpha: 1,
                  y: 0,
                  x: 0,
                  scale: 1,
                  duration,
                  stagger,
                  ease,
                  delay,
                  clearProps: clearProps
                    ? "transform,opacity,visibility"
                    : undefined,
                });
                if (once && io) io.disconnect();
              }
            }
          },
          { threshold, rootMargin },
        );

        io.observe(el);

        return () => {
          io?.disconnect();
        };
      },
    );

    return () => mm.revert();
  }, [
    targets,
    y,
    x,
    scale,
    duration,
    stagger,
    ease,
    delay,
    threshold,
    rootMargin,
    once,
    clearProps,
  ]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}