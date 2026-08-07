"use client";

import React, {
  useRef,
  useEffect,
  useLayoutEffect,
  useCallback,
  useState,
} from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  useAnimationFrame,
  useReducedMotion,
  useMotionValueEvent,
} from "framer-motion";
import { CURRENCIES } from "@/data/currencies";

const COUNTRY_NAMES: Record<string, string> = {
  GBP: "United Kingdom",
  USD: "United States",
  EUR: "Eurozone",
  NGN: "Nigeria",
  NOK: "Norway",
  INR: "India",
  GHS: "Ghana",
  KES: "Kenya",
  CAD: "Canada",
  AUD: "Australia",
  JPY: "Japan",
  BRL: "Brazil",
  GMD: "Gambia",
  XOF: "Senegal",
  PKR: "Pakistan",
  BDT: "Bangladesh",
};

type Country = { code: string; iso: string; symbol: string };

function CountryFlag({ iso, size = 22 }: { iso: string; size?: number }) {
  return (
    <img
      src={`https://flagcdn.com/w80/${iso}.png`}
      srcSet={`https://flagcdn.com/w80/${iso}.png 1x, https://flagcdn.com/w160/${iso}.png 2x`}
      width={size}
      height={size * 0.75}
      alt={COUNTRY_NAMES[iso.toUpperCase()] ?? `${iso.toUpperCase()} flag`}
      loading="lazy"
      className="block rounded-full object-contain"
    />
  );
}

function useIsMobile(breakpointPx = 768) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpointPx - 1}px)`);
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [breakpointPx]);
  return isMobile;
}

function useInertialList({
  idleVelocity,
  initialVelocity,
  friction,
}: {
  idleVelocity: number;
  initialVelocity: number;
  friction: number;
}) {
  const panning = useMotionValue(false);
  const velocity = useMotionValue(initialVelocity);
  const listY = useMotionValue(0);
  const startY = useRef(0);
  const pointerStartY = useRef(0);

  useAnimationFrame((_time, delta) => {
    if (panning.get()) return;
    let v = velocity.get();
    v += (friction / 100) * delta * (idleVelocity - v);
    velocity.set(v);
    listY.set(listY.get() + v * (delta / 16.66));
  });

  const handlers = {
    onPointerDown: (e: React.PointerEvent) => {
      panning.set(true);
      startY.current = listY.get();
      pointerStartY.current = e.clientY;
      velocity.set(0);
    },
    onPointerMove: (e: React.PointerEvent) => {
      if (!panning.get()) return;
      listY.set(startY.current + (pointerStartY.current - e.clientY));
    },
    onPointerUp: () => {
      panning.set(false);
      velocity.set(initialVelocity);
    },
    onPointerLeave: () => {
      if (panning.get()) panning.set(false);
    },
  };

  return { listY, handlers };
}

function CountryPill({
  index,
  country,
  pillCount,
  currentIndex,
  isMobile,
}: {
  index: number;
  country: Country;
  pillCount: number;
  currentIndex: ReturnType<typeof useTransform<number, number>>;
  isMobile: boolean;
}) {
  const prefersReduced = useReducedMotion();
  const springConfig = prefersReduced
    ? { duration: 0.001, bounce: 0 }
    : { stiffness: 130, damping: 30 };

  const scale = useSpring(1, springConfig);
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);
  const opacity = useSpring(0, springConfig);
  const bg = useSpring(0, springConfig);

  const scalesDesktop = Array(11).fill(1);
  const zSpreadDesktop = [
    -450, -375, -300, -200, -100, 0, 100, 200, 300, 375, 450,
  ];
  const xPushDesktop = [300, 250, 200, 150, 80, 0, 80, 150, 200, 250, 300];
  // Fade out the far edge pills on desktop (just like mobile). The edge slots
  // are spaced tighter than pill height and use hard jumps, so keeping them
  // opaque made them teleport across / overlap the animating pills at the
  // start. Hiding them removes the "stack over" glitch while the central
  // pills keep animating exactly as before.
  const alphasDesktop = [0, 0, 0, 0.45, 0.85, 1, 0.85, 0.45, 0, 0, 0];

  const ROW = 84;
  const scalesMobile = Array(11).fill(1);
  const zSpreadMobile = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5].map(
    (n) => n * ROW,
  );
  const xPushMobile = Array(11).fill(0);
  const alphasMobile = [0, 0, 0, 0.35, 0.7, 1, 0.7, 0.35, 0, 0, 0];

  const scales = isMobile ? scalesMobile : scalesDesktop;
  const zSpread = isMobile ? zSpreadMobile : zSpreadDesktop;
  const xPush = isMobile ? xPushMobile : xPushDesktop;
  const alphas = isMobile ? alphasMobile : alphasDesktop;

  const firstRun = useRef(true);

  const update = useCallback(() => {
    const currentIdx = currentIndex.get();
    let dist = index - currentIdx;
    if (dist > pillCount / 2) dist -= pillCount;
    if (dist < -pillCount / 2) dist += pillCount;
    const slot = Math.round(dist + 5);

    if (slot < 0 || slot > 10) {
      opacity.jump(0);
      return;
    }

    // On the very first pass we snap (jump) every value to its correct
    // spread position so pills never flash stacked at the center on load.
    // All subsequent passes animate exactly as before.
    const isFirst = firstRun.current;
    firstRun.current = false;

    const far = isMobile ? Math.abs(slot - 5) > 2 : Math.abs(slot - 5) > 4;
    const apply = far || isFirst
      ? (mv: ReturnType<typeof useSpring>, val: number) => mv.jump(val)
      : (mv: ReturnType<typeof useSpring>, val: number) => mv.set(val);

    apply(scale, scales[slot] ?? 0.5);
    apply(x, xPush[slot] ?? 0);
    apply(y, zSpread[slot] ?? 0);
    apply(opacity, alphas[slot] ?? 0);
    apply(bg, slot === 5 ? 1 : 0);
  }, [
    index,
    pillCount,
    currentIndex,
    isMobile,
    scale,
    x,
    y,
    opacity,
    bg,
    scales,
    xPush,
    zSpread,
    alphas,
  ]);

  useMotionValueEvent(currentIndex, "change", update);
  useLayoutEffect(() => {
    update();
  }, [update]);

  const bgMV = useTransform(bg, (a) => `rgba(59, 115, 255, ${a * 0.18})`);
  const borderMV = useTransform(
    bg,
    (a) => `rgba(59, 115, 255, ${0.08 + a * 0.22})`,
  );

  const mobileTextColor = useTransform(
    bg,
    [0, 1],
    ["rgba(255,255,255,0.35)", "rgba(255,255,255,1)"],
  );
  const mobileFontWeight = useTransform(bg, (a) => (a > 0.5 ? 700 : 500));
  const mobileIconBg = useTransform(
    bg,
    [0, 1],
    ["rgba(255,255,255,0.06)", "rgba(255,255,255,0.16)"],
  );

  return (
    <motion.div
      className={`absolute flex items-center gap-3 whitespace-nowrap rounded-full w-[250px] ${
        isMobile
          ? "left-1/2 top-1/2 -ml-[125px] origin-center border-transparent"
          : "md:right-[-8%] 2xl:right-[-0%] origin-right border"
      }`}
      style={{
        y,
        x,
        scale,
        opacity,
        backgroundColor: isMobile ? "transparent" : bgMV,
        borderColor: isMobile ? "transparent" : borderMV,
        marginTop: isMobile ? "-40px" : "-38px",
        zIndex: 10 - Math.abs(5 - Math.round(index - currentIndex.get() + 5)),
        padding: "20px 22px",
      }}
    >
      <motion.div
        className="flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-full"
        style={isMobile ? { backgroundColor: mobileIconBg } : undefined}
      >
        <CountryFlag iso={country.iso} size={30} />
      </motion.div>
      <motion.span
        className="text-[20px] tracking-tight"
        style={
          isMobile
            ? { color: mobileTextColor, fontWeight: mobileFontWeight }
            : { color: "rgba(255,255,255,0.9)", fontWeight: 700 }
        }
      >
        {COUNTRY_NAMES[country.code] ?? country.code}
      </motion.span>
    </motion.div>
  );
}

export function Partners() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReduced = useReducedMotion();
  const fallback = useMotionValue(1);
  const isMobile = useIsMobile();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 65%", "start 30%"],
  });

  const rawProgress = prefersReduced ? fallback : scrollYProgress;
  const progress = useTransform(rawProgress, (t) => t * t * (3 - 2 * t));

  const clipPath = useTransform(progress, (p) => {
    const inv = 1 - p;
    const vPx = 70 * inv;
    const hPx = 200 * inv;
    const vP = 50 * inv;
    const hP = 50 * inv;
    const radius = p < 0.8 ? 112 : 112 - ((p - 0.8) / 0.2) * (112 - 32);
    return `inset(calc(${vP}% - ${vPx}px) calc(${hP}% - ${hPx}px) calc(${vP}% - ${vPx}px) calc(${hP}% - ${hPx}px) round ${radius}px)`;
  });

  const contentY = useTransform(progress, [0.2, 0.7], [250, 0]);
  const contentScale = useTransform(progress, [0.2, 0.7], [0.6, 1]);
  const contentOpacity = useTransform(progress, [0.2, 0.7], [0, 1]);

  const { listY, handlers } = useInertialList({
    // Visible auto-rotate: the center country advances every ~150px of list
    // drift. ~2px/frame (~120px/s) cycles a country roughly every 1.2s and
    // starts at full speed straight away. Manual drag still pauses it.
    idleVelocity: 2,
    initialVelocity: 2,
    friction: 0.3,
  });

  const currentIndex = useTransform(listY, (y) => {
    let idx = Math.round(y / 150) % CURRENCIES.length;
    if (idx < 0) idx += CURRENCIES.length;
    return idx;
  });

  return (
    <section
      ref={sectionRef}
      className="relative mx-auto"
      style={{
        background: "white",
        maxWidth: "var(--layoutMaxWidth)",
        padding: "0 var(--layoutMargin)",
      }}
    >
      <motion.div
        className="relative mx-auto flex w-full flex-col items-center justify-between overflow-hidden md:flex-row md:items-center px-10 md:px-15"
        style={{
          background: "var(--colorBrand900)",
          clipPath,
          boxShadow: "0 28px 56px 0 hsla(0,0%,9%,.08)",
          height: "clamp(560px, 82vh, 700px)",
        }}
      >
        {/* Inner content wrapper — this is what rises/scales/fades on
           scroll (contentY/contentScale/contentOpacity). The glyph must
           NOT live inside here, or it inherits that animation. */}
        <motion.div
          className="flex h-full w-full flex-col items-center justify-between gap-6 md:flex-row md:items-center md:justify-between md:gap-0"
          style={{
            y: contentY,
            scale: contentScale,
            opacity: contentOpacity,
            transformOrigin: "50% 0%",
          }}
        >
          <div className="z-20 w-full max-w-lg px-4 py-10 md:px-0 md:text-left">
            <h2
              className="text-[36px] font-bold leading-[1.1] tracking-[-0.5px] text-white md:text-[44px] md:leading-[1.05] md:tracking-[-1.4px] lg:text-[66px]"
              style={{ textWrap: "balance" }}
            >
              Send money <br /> to{" "}  back <br />
              <span className="text-[var(--colorBrand300)]">
               Home
              </span>
            </h2>
            <p className="mt-3 text-[13px] font-medium leading-[20px] text-white/55 md:mt-4 md:text-[18px] md:leading-[26px]">
              From coast to coast, Paymit gets your money there fast.
            </p>
          </div>

          <div
            className="relative z-20 h-[300px] w-full md:absolute md:right-[30%] md:top-1/2 md:h-full overflow-hidden md:overflow-visible"
            {...handlers}
          >
            {CURRENCIES.map((c, i) => (
              <CountryPill
                key={c.code}
                index={i}
                country={c}
                pillCount={CURRENCIES.length}
                currentIndex={currentIndex}
                isMobile={isMobile}
              />
            ))}
          </div>
        </motion.div>


        <div className="pointer-events-none absolute left-1/2 top-1/2 z-30 flex h-[64px] w-[64px] -translate-x-1/2 -translate-y-1/2 items-center justify-center md:h-[80px] md:w-[240px]">
          <div
            className="flex size-16 items-center justify-center rounded-full shadow-lg max-md:size-12"
            style={{
              background: "var(--colorBrand300)",
              boxShadow: "0 8px 24px rgba(59, 115, 255, 0.3)",
            }}
          >
            <span className="text-[28px] font-bold text-white leading-none">
              P
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
