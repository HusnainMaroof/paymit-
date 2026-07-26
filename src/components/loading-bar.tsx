"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function LoadingBar() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const prevPath = useRef(pathname);

  useEffect(() => {
    if (pathname === prevPath.current) return;
    prevPath.current = pathname;

    setVisible(true);
    setProgress(0);

    let p = 0;
    const tick = () => {
      p += Math.random() * 15 + 5;
      if (p > 90) p = 90;
      setProgress(p);
      timerRef.current = setTimeout(tick, 120 + Math.random() * 80);
    };
    tick();

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [pathname]);

  useEffect(() => {
    if (progress >= 90) {
      setProgress(100);
      const t = setTimeout(() => {
        setVisible(false);
        setProgress(0);
      }, 250);
      return () => clearTimeout(t);
    }
  }, [progress]);

  if (!visible) return null;

  return (
    <div className="fixed top-0 left-0 z-[9999] h-[3px] w-full">
      <div
        className="h-full rounded-r-full transition-all duration-200 ease-out"
        style={{
          width: `${progress}%`,
          background: "linear-gradient(90deg, var(--colorBrand300), var(--colorBrand400))",
        }}
      />
    </div>
  );
}
