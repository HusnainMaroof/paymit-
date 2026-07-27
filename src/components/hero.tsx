"use client";

import { useState, useRef, useLayoutEffect, useEffect } from "react";
import gsap from "gsap";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CURRENCIES, getRate, getSymbol, formatRate, fmt } from "@/data/currencies";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

function FlagImg({
  iso,
  size = 24,
  className = "",
}: {
  iso: string;
  size?: number;
  className?: string;
}) {
  return (
    <img
      src={`https://flagcdn.com/w80/${iso}.png`}
      srcSet={`https://flagcdn.com/w80/${iso}.png 1x, https://flagcdn.com/w160/${iso}.png 2x`}
      width={size}
      height={size * 0.75}
      alt={`${iso.toUpperCase()} flag`}
      loading="lazy"
      className={`block rounded-[2px] object-cover transition-opacity duration-200 ${className}`}
    />
  );
}

export function Hero() {
  const desktopRef = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);
  const graphicRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: "(min-width: 768px)",
        isMobile: "(max-width: 767px)",
        reduce: "(prefers-reduced-motion: reduce)",
      },
      (ctx) => {
        const { isDesktop, reduce } = ctx.conditions as {
          isDesktop: boolean;
          isMobile: boolean;
          reduce: boolean;
        };
        const scope = isDesktop ? desktopRef.current : mobileRef.current;
        if (!scope) return;

        // Heading word stagger - from bottom
        const words = scope.querySelectorAll<HTMLElement>("[data-hero-word]");
        if (words.length) {
          if (reduce) {
            gsap.set(words, { autoAlpha: 1, y: 0, clearProps: "transform,opacity" });
          } else {
            gsap.set(words, { autoAlpha: 0, y: 24 });
            gsap.to(words, {
              autoAlpha: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.08,
              ease: "power3.out",
              delay: 0.1,
            });
          }
        }

        // Graphic container - expand from bottom
        const graphic = graphicRef.current;
        if (graphic) {
          if (reduce) {
            gsap.set(graphic, { height: "auto", clearProps: "height" });
          } else {
            gsap.set(graphic, { height: 0, opacity: 0 });
            gsap.to(graphic, {
              height: "auto",
              opacity: 1,
              duration: 0.9,
              ease: "power3.out",
              delay: 0.25,
            });
          }
        }

        // Hero elements - stagger from bottom
        const elements = scope.querySelectorAll<HTMLElement>("[data-hero]");
        if (!elements.length) return;

        if (reduce) {
          gsap.set(elements, { autoAlpha: 1, y: 0, clearProps: "transform,opacity" });
          return;
        }

        gsap.set(elements, { autoAlpha: 0, y: 24 });

        const tl = gsap.timeline({ defaults: { duration: 0.6, ease: "power3.out" } });
        tl.to(elements, {
          autoAlpha: 1,
          y: 0,
          stagger: 0.1,
        }, 0.15);
      },
    );

    return () => mm.revert();
  }, []);

  return (
    <section className="w-full bg-white" style={{ paddingTop: "var(--headerNavOffset)" }}>
      {/* Desktop / Tablet layout (≥768px) — 24-col grid */}
      <div
        ref={desktopRef}
        className="mx-auto hidden w-full md:grid"
        style={{
          maxWidth: "var(--layoutMaxWidth)",
          minHeight: "calc(100dvh - 96px)",
          gridTemplateColumns: "repeat(24, 1fr)",
          columnGap: "var(--layoutGutter)",
          padding: "0 var(--layoutMargin) var(--sectionPaddingY)",
          gridTemplateAreas: `
            ". . . . . . . . . . . . g g g g g g g g g g g g"
            "p p p p p p . . . . . . g g g g g g g g g g g g"
            "h h h h h h h h h h h . g g g g g g g g g g g g"
            "t t t t t t t t . . . . g g g g g g g g g g g g"
            "b b b b b b . . . . . . g g g g g g g g g g g g"
          `,
          gridTemplateRows: "1fr repeat(3, min-content) 1fr",
        }}
      >
        {/* Hero Pill */}
      

        {/* Heading */}
        <h1
          className="text-[80px] font-semibold leading-[78px] tracking-[-2.4px] text-[var(--colorTextPrimary)] max-lg:text-[68px] max-lg:leading-[66px] max-lg:tracking-[-2px]"
          style={{ gridArea: "h", textWrap: "balance", maxWidth: "720px" }}
        >
          <span data-hero-word>Send</span>{" "}
          <span data-hero-word className="text-[var(--colorTextActionPrimary)]">money</span>{" "}
          <span data-hero-word>worldwide.</span>
        </h1>

        {/* Body */}
        <p
          data-hero
          className="mt-2.5 text-lg   font-medium  max-lg:mt-0 max-lg:mb-2"
          style={{ gridArea: "t"}}
        >
          Experience fast, secure, and hassle-free international transfers with
          our commitment to the lowest fees.
        </p>

        {/* CTA Button */}
        <a
          href="#"
          data-hero
          className="btn-hero-morph group row-span-1 flex w-min items-center justify-between gap-4 rounded-[var(--borderRadiusXs)] border border-[var(--colorBorderLight)] bg-[var(--colorNeutral100)] p-4 no-underline whitespace-nowrap max-lg:w-full max-lg:whitespace-normal"
          style={{ gridArea: "b", alignSelf: "end", color: "var(--colorText)" }}
        >
          <span className="font-medium text-base leading-4 text-[var(--colorTextPrimary)]">
            Get started
          </span>
          <span className="arrow-tile flex size-8 shrink-0 items-center justify-center rounded-[var(--borderRadiusXs)] bg-white">
            <svg
              className="size-4 text-[var(--colorNeutral900)] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17 17 7M9 7h8v8" />
            </svg>
          </span>
        </a>

        {/* Graphic Container */}
        <div
          ref={graphicRef}
          data-hero
          className="flex items-center justify-center rounded-[var(--borderRadiusXs)] border border-[var(--colorBorderLight)] bg-[var(--colorNeutral100)] max-lg:aspect-[366/436]"
          style={{ gridArea: "g", overflow: "hidden" }}
        >
          <HeroGraphicCard />
        </div>
      </div>

      {/* Mobile layout (<768px) — stacked */}
      <div
        ref={mobileRef}
        className="flex w-full flex-col items-center justify-between md:hidden"
        style={{
          minHeight: "calc(100dvh - var(--headerNavOffset))",
          paddingLeft: "var(--layoutMargin)",
          paddingRight: "var(--layoutMargin)",
          paddingBottom: "var(--sectionPaddingY)",
          paddingTop: "16px",
        }}
      >
        {/* Hero Pill */}
    

<div className="flex w-full max-w-[440px] flex-col gap-5">
           {/* Heading */}
        <h1 data-hero className="self-start text-[40px] font-semibold leading-[38px] tracking-[-1px] text-[var(--colorTextPrimary)] pt-4"
          style={{ textWrap: "balance" }}
        >
          <span data-hero-word>Send</span>{" "}
          <span data-hero-word className="text-[var(--colorTextActionPrimary)]">money</span>{" "} <br />
          <span data-hero-word>worldwide.</span>
        </h1>

        {/* Body */}
        <p data-hero className="self-start text-[18px] font-medium leading-[26px] text-[var(--colorNeutral600)]"
          style={{ textWrap: "balance" }}
        >
          Experience fast, secure, and hassle-free international transfers with
          our commitment to the lowest fees.
        </p>

        {/* CTA Button */}
        <a
          href="#"
          data-hero
          className="btn-hero-morph group flex w-full items-center justify-between gap-4 rounded-[var(--borderRadiusXs)] border border-[var(--colorBorderLight)] bg-[var(--colorNeutral100)] p-4 no-underline"
          style={{ color: "var(--colorText)" }}
        >
          <span className="font-medium text-base leading-4 text-[var(--colorTextPrimary)]">
            Get started
          </span>
          <span className="arrow-tile flex size-8 shrink-0 items-center justify-center rounded-[var(--borderRadiusXs)] bg-white">
            <svg
              className="size-4 text-[var(--colorNeutral900)] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17 17 7M9 7h8v8" />
            </svg>
          </span>
        </a>
      </div>

        {/* Converter Card */}
        <div data-hero ref={graphicRef} >
          <HeroGraphicCard />
        </div>
      </div>
    </section>
  );
}

function HeroGraphicCard() {
  const [sendCountry, setSendCountry] = useState("GBP");
  const [receiveCountry, setReceiveCountry] = useState("NGN");
  const [amount, setAmount] = useState("1000");

  const handleSendChange = (value: string | null) => {
    if (value) setSendCountry(value);
  };
  const handleReceiveChange = (value: string | null) => {
    if (value) setReceiveCountry(value);
  };

  const sendItem = CURRENCIES.find((c) => c.code === sendCountry)!;
  const receiveItem = CURRENCIES.find((c) => c.code === receiveCountry)!;
  const rate = getRate(sendCountry, receiveCountry);
  const numericAmount = Number(amount) || 0;
  const receiveAmount = numericAmount * rate;
  const usdEquiv = numericAmount * getRate(sendCountry, "USD");
  const receiveUsdEquiv = receiveAmount * getRate(receiveCountry, "USD");
  const sendSymbol = getSymbol(sendCountry);
  const receiveSymbol = getSymbol(receiveCountry);

  return (
    <div
      className="relative z-2 flex w-full max-w-[440px] flex-col gap-3 rounded-[var(--borderRadiusLg)] bg-[var(--colorNeutral100)] p-5 md:w-[440px] max-md:p-4 max-sm:max-w-none"
      style={{ boxShadow: "var(--box-shadow-card)" }}
    >
      {/* You Send */}
      <div className="rounded-2xl border border-[var(--colorNeutral200)] bg-white p-5 transition-colors duration-200 hover:border-[var(--colorNeutral300)] max-md:p-4">
        <div className="mb-2 flex items-center justify-between gap-2">
          <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[14px] font-semibold">
            You Pay
          </span>
          <Select value={sendCountry} onValueChange={handleSendChange}>
            <SelectTrigger className="h-11  w-auto cursor-pointer gap-2  border border-[var(--colorNeutral200)] bg-white px-3.5 py-5  font-semibold text-[var(--colorTextPrimary)] tracking-[-0.01em] transition-colors duration-150 hover:border-[var(--colorNeutral300)] ">
              <SelectValue>
                <span className="flex items-center gap-2">
                  <FlagImg
                    key={sendItem.iso}
                    iso={sendItem.iso}
                    size={30}
                    className="animate-[fade-in_0.2s_ease-out] max-sm:size-[18px]"
                  />
                  <span className="text-base font-semibold max-sm:text-sm">
                    {sendItem.code}
                  </span>
                </span>
              </SelectValue>
            </SelectTrigger>
            <SelectContent
              alignItemWithTrigger={false}
              className="max-h-[280px] min-w-[140px] overflow-y-auto rounded-[14px] border border-[var(--colorNeutral200)] p-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.1)]"
            >
              {CURRENCIES.map((c, i) => (
                <SelectItem
                  key={c.code}
                  value={c.code}
                  className="my-0.5 cursor-pointer rounded-[10px] px-3 py-2.5 text-sm transition-all duration-150 data-[highlighted]:bg-[var(--colorNeutral50)]"
                  style={{ animation: `fade-in-dropdown 0.2s ease-out ${i * 0.03}s both` }}
                >
                  <span className="flex items-center gap-2.5">
                    <FlagImg iso={c.iso} size={20} />
                    <span className="text-[15px] font-semibold text-[var(--colorTextPrimary)]">
                      {c.code}
                    </span>
                  </span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-baseline">
          <span className="text-[36px] font-semibold leading-[1.1] tracking-[-0.02em] text-[var(--colorNeutral400)] transition-all duration-300 max-md:text-[28px] max-sm:text-[24px]">
            {sendSymbol}
          </span>
          <input
            type="text"
            inputMode="decimal"
            value={amount}
            onChange={(e) => {
              const v = e.target.value.replace(/[^0-9.]/g, "");
              setAmount(v);
            }}
            className="ml-1 w-full min-w-0 bg-transparent text-[36px] font-semibold leading-[1.1] tracking-[-0.02em] text-[var(--colorTextPrimary)] outline-none transition-all duration-300 max-md:text-[28px] max-sm:text-[24px]"
            aria-label="Amount to send"
          />
        </div>
        <div className="mt-1 text-[13px] font-medium text-[var(--colorNeutral400)] transition-all duration-300">
          ≈ ${fmt(usdEquiv, 2, 2)} USD
        </div>
      </div>

      {/* They Get */}
      <div className="rounded-2xl border border-[var(--colorNeutral200)] bg-white p-5 transition-colors duration-200 hover:border-[var(--colorNeutral300)] max-md:p-4">
        <div className="mb-2 flex items-center justify-between gap-2">
          <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[14px] font-semibold">
            They get
          </span>
          <Select value={receiveCountry} onValueChange={handleReceiveChange}>
            <SelectTrigger className="h-11  w-auto cursor-pointer gap-2  border border-[var(--colorNeutral200)] bg-white px-3.5 py-5  font-semibold text-[var(--colorTextPrimary)] tracking-[-0.01em] transition-colors duration-150 hover:border-[var(--colorNeutral300)]">
              <SelectValue>
                <span className="flex items-center gap-2">
                  <FlagImg
                    key={receiveItem.iso}
                    iso={receiveItem.iso}
                    size={30}
                    className="animate-[fade-in_0.2s_ease-out] max-sm:size-[18px]"
                  />
                  <span className="text-base font-semibold max-sm:text-sm">
                    {receiveItem.code}
                  </span>
                </span>
              </SelectValue>
            </SelectTrigger>
            <SelectContent
              alignItemWithTrigger={false}
              className="max-h-[280px] min-w-[140px] overflow-y-auto rounded-[14px] border border-[var(--colorNeutral200)] p-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.1)]"
            >
              {CURRENCIES.map((c, i) => (
                <SelectItem
                  key={c.code}
                  value={c.code}
                  className="my-0.5 cursor-pointer rounded-[10px] px-3 py-2.5 text-sm transition-all duration-150 data-[highlighted]:bg-[var(--colorNeutral50)]"
                  style={{ animation: `fade-in-dropdown 0.2s ease-out ${i * 0.03}s both` }}
                >
                  <span className="flex items-center gap-2.5">
                    <FlagImg iso={c.iso} size={20} />
                    <span className="text-[15px] font-semibold text-[var(--colorTextPrimary)]">
                      {c.code}
                    </span>
                  </span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-baseline">
          <span className="text-[36px] font-semibold leading-[1.1] tracking-[-0.02em] text-[var(--colorNeutral400)] transition-all duration-300 max-md:text-[28px] max-sm:text-[24px]">
            {receiveSymbol}
          </span>
          <span className="ml-1 text-[36px] font-semibold leading-[1.1] tracking-[-0.02em] text-[var(--colorTextPrimary)] transition-all duration-300 max-md:text-[28px] max-sm:text-[24px]">
            {fmt(
              receiveAmount,
              receiveAmount < 1 ? 4 : 0,
              receiveAmount < 1 ? 6 : 0,
            )}
          </span>
        </div>
        <div className="mt-1 text-[13px] font-medium text-[var(--colorNeutral400)] transition-all duration-300">
          ≈ ${fmt(receiveUsdEquiv, 2, 2)} USD
        </div>
      </div>

      {/* Rate — highlighted pill */}
      <div className="flex items-center px-1 pt-1">
        <div className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[14px] font-semibold">
          <span className="font-semibold text-[var(--colorTextPrimary)]">
            1 {sendCountry}
          </span>
          <span className="text-[var(--colorBrand500)]">≈</span>
          <span className="font-bold text-[var(--colorTextActionPrimary)]">
            {formatRate(rate)}
          </span>
          <span className="font-semibold text-[var(--colorTextPrimary)]">
            {receiveCountry}
          </span>
        </div>
      </div>

      {/* Send Money Now Button */}
      <button className="mt-1 w-full cursor-pointer rounded-2xl border-none bg-[var(--colorBrand300)] px-4 py-4 text-base font-semibold text-white tracking-[-0.01em] transition-all duration-200 hover:bg-[var(--colorBrand400)] hover:shadow-lg hover:shadow-[var(--colorBrand300)]/30 hover:scale-[1.01] active:scale-[0.99] max-sm:py-3.5">
        Send money now
      </button>
    </div>
  );
}