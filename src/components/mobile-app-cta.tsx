"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

export function MobileAppCTA() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      ref={ref}
      id="mobile-app-section"
      className="mx-auto w-full"
      style={{
        maxWidth: "var(--layoutMaxWidth)",
        padding: "var(--sectionPaddingY) var(--layoutMargin)",
      }}
    >
      <div
        className="relative overflow-hidden rounded-[var(--borderRadiusLg)]"
        style={{
          backgroundColor: "var(--colorBrand300)",
          boxShadow: "0 28px 56px 0 rgba(59, 115, 255, 0.3)",
        }}
      >
        <div className="relative z-10 flex flex-col items-center gap-10 px-8 py-16 md:flex-row md:items-center md:justify-between md:px-16 md:py-20">
          {/* Text Content */}
          <motion.div
            className="z-20 max-w-lg text-center md:text-left"
            initial={mounted ? { opacity: 0, y: 30 } : false}
            animate={isInView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2
              className="text-[36px] font-semibold leading-[1.1] tracking-[-1px] text-white max-md:text-[30px]"
              style={{ textWrap: "balance" }}
            >
              Send Money on the{" "}
              <span className="text-white/80">Go</span>
            </h2>
            <p
              className="mt-4 text-[16px] font-medium leading-[26px] text-white/70"
              style={{ textWrap: "balance" }}
            >
              Download the Paymit app for the easiest way to send and track
              your money transfers anytime, anywhere.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
              {/* App Store */}
              <a
                href="https://apps.apple.com/gb/app/paymit/id6751227334"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-14 items-center gap-3 rounded-[var(--borderRadiusMd)] bg-white px-6 transition-all duration-200 hover:scale-[1.03] hover:shadow-lg"
              >
                <svg
                  className="size-6"
                  viewBox="0 0 24 24"
                  fill="var(--colorBrand900)"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="flex flex-col items-start">
                  <span className="text-[10px] leading-tight text-neutral-500">
                    Download on the
                  </span>
                  <span className="text-[16px] font-semibold leading-tight text-[var(--colorBrand900)]">
                    App Store
                  </span>
                </div>
              </a>

              {/* Google Play */}
              <a
                href="https://play.google.com/store/apps/details?id=com.paymit.transfer"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-14 items-center gap-3 rounded-[var(--borderRadiusMd)] bg-white px-6 transition-all duration-200 hover:scale-[1.03] hover:shadow-lg"
              >
                <svg className="size-6" viewBox="0 0 24 24">
                  <path
                    d="M3.609 1.814 13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893 2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199 2.302 2.302a1 1 0 0 1 0 1.38l-2.302 2.302L15.396 12l2.302-2.492zM5.864 2.658 16.8 8.99l-2.302 2.302L5.864 2.658z"
                    fill="var(--colorBrand900)"
                  />
                </svg>
                <div className="flex flex-col items-start">
                  <span className="text-[10px] leading-tight text-neutral-500">
                    Get it on
                  </span>
                  <span className="text-[16px] font-semibold leading-tight text-[var(--colorBrand900)]">
                    Google Play
                  </span>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Phone Mockup */}
          <motion.div
            className="relative z-20 shrink-0"
            initial={mounted ? { opacity: 0, y: 40 } : false}
            animate={isInView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          >
            <div
              className="relative flex size-[280px] items-center justify-center rounded-[var(--borderRadiusLg)] md:size-[340px]"
              style={{
                background:
                  "linear-gradient(145deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05))",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              <div className="flex flex-col items-center gap-4 text-center">
                <div
                  className="flex size-16 items-center justify-center rounded-full"
                  style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
                >
                  <span className="text-[28px] font-bold text-white">P</span>
                </div>
                <span className="text-[14px] font-semibold text-white/80">
                  Paymit App
                </span>
                <div className="flex gap-3">
                  {["£", "₦", "₹", "₵"].map((symbol) => (
                    <div
                      key={symbol}
                      className="flex size-10 items-center justify-center rounded-full"
                      style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
                    >
                      <span className="text-[14px] font-semibold text-white">
                        {symbol}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Background decorative circles */}
        <div
          className="pointer-events-none absolute -bottom-20 -right-20 size-[300px] rounded-full opacity-20"
          style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
        />
        <div
          className="pointer-events-none absolute -top-16 -left-16 size-[200px] rounded-full opacity-10"
          style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
        />
      </div>
    </section>
  );
}
