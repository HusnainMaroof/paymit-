"use client";

import { useState, useEffect, useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/reveal";
import gsap from "gsap";

function splitSentences(text: string | undefined): string[] {
  if (!text) return [""];
  const sentences = text.match(/[^.!?]+[.!?]+/g);
  return sentences && sentences.length > 0 ? sentences : [text];
}

const items = [
  {
    id: "1",
    title: "How safe is Paymit?",
    content:
      "Paymit is regulated by the FCA as a Small Payment Institution (License #945293) and registered with HMRC as a Money Services Business. All transactions are encrypted, we never ask for passwords, OTPs, or CVC codes, and we never store your card details. Staff and customer logins are protected by mandatory 2-factor authentication.",
  },
  {
    id: "2",
    title: "How do I sign up?",
    content:
      "Sign up free in minutes using only your email address. You must be 18+ years old and complete a quick KYC identity verification. Personal use only — no gambling, escrow, or trust transactions. The full signup flow is available at app.paymit.co.uk/register.",
  },
  {
    id: "3",
    title: "How much does Paymit cost per transfer?",
    content:
      "Fees are disclosed upfront before you process any transfer, based on interbank rates plus a small margin. New customers get their first transaction fee-free as part of our Try Us Free offer. Additional charges from receiving banks, local taxes, or mobile network fees may apply depending on the destination.",
  },
  {
    id: "4",
    title: "How do I contact Paymit?",
    content:
      "Email support is available 24/7 at support@paymit.co.uk for a detailed written response. You can also call our team directly on (+44) 7577 220592, or visit us at 85 Great Portland Street, First Floor, London, W1W 7LT. Our team handles complaints within 15 business days and final responses within 35 days.",
  },
  {
    id: "5",
    title: "Why was my transfer cancelled or rejected?",
    content:
      "Transfers may be cancelled or rejected if details are inaccurate or fraudulent, identity can't be verified, there are money laundering or sanctions concerns, regulatory or court orders apply, or the terms of service are not met. Transaction fees are non-refundable unless the cancellation was caused by a Paymit error.",
  },
  {
    id: "6",
    title: "How can I track my transfer status?",
    content:
      'Paymit provides live push alerts from "Sent" to "Received" once your transfer is funded. You can follow each stage — Payment Started, Processing, and Delivered — in real time from your account dashboard or the Paymit mobile app on iOS and Android.',
  },
  {
    id: "7",
    title: "My transfer is pending. How do I fix it?",
    content:
      "Pending transfers usually resolve within minutes, but depending on the partner location and compliance checks the timeframe can extend up to 7 business days. If your transfer hasn't settled, contact support@paymit.co.uk with your transaction reference, or call (+44) 7577 220592 to speak with our team.",
  },
  {
    id: "8",
    title: "Why is my account suspended or locked?",
    content:
      "Accounts can be suspended when identity cannot be verified, when fraudulent or sanctioned activity is suspected, when another person's card or bank account is used, or after extended inactivity. To restore your account, complete any outstanding KYC/AML verification requests and contact support@paymit.co.uk.",
  },
  {
    id: "9",
    title: "How do I send money online?",
    content:
      "Create your free account, set up your transfer by entering the amount and destination, and we show fees and exchange rates upfront. Fund the transfer by bank or card and choose your delivery method — Bank Deposit, Cash Pickup, Mobile Wallet, or Mobile Top-ups. We handle the rest with live updates.",
  },
  {
    id: "10",
    title: 'How does "refer a friend" work?',
    content:
      "Refer a friend through your account dashboard. Once your friend sends at least £100 on their first transfer, you earn a £5 reward credited to your Paymit balance. There's no limit to the number of friends you can refer — share your unique link and grow your rewards every time someone new signs up and transacts.",
  },
];

type FaqEntry = (typeof items)[number];

function FaqItem({
  item,
  isOpen,
  isDimmed,
  onHoverStart,
  onHoverEnd,
}: {
  item: FaqEntry;
  isOpen: boolean;
  isDimmed: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}) {
  const numberRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const sentencesRef = useRef<HTMLParagraphElement>(null);
  const firstRun = useRef(true);

  useEffect(() => {
    if (firstRun.current) {
      firstRun.current = false;
      return;
    }
    if (!isOpen) return;

    const number = numberRef.current;
    const title = titleRef.current;
    const sentenceEls = sentencesRef.current
      ? Array.from(
          sentencesRef.current.querySelectorAll<HTMLElement>("[data-sentence]"),
        )
      : [];
    if (!number || !title) return;

    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline();
      // Question number — pop in with a slight overshoot
      tl.fromTo(
        number,
        { scale: 0.5, autoAlpha: 0, y: -8 },
        {
          scale: 1,
          autoAlpha: 1,
          y: 0,
          duration: 0.5,
          ease: "back.out(2.6)",
          clearProps: "transform,opacity,visibility",
        },
      )
        // Question title — slide in from the right (bigger text → larger travel)
        .fromTo(
          title,
          { x: 28, autoAlpha: 0 },
          {
            x: 0,
            autoAlpha: 1,
            duration: 0.55,
            ease: "power3.out",
            clearProps: "transform,opacity,visibility",
          },
          "-=0.32",
        )
        // Answer sentences — stagger reveal
        .fromTo(
          sentenceEls,
          { autoAlpha: 0, y: 10 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.06,
            ease: "power2.out",
            clearProps: "transform,opacity,visibility",
          },
          "-=0.28",
        );

      return () => {
        tl.kill();
      };
    });

    return () => mm.revert();
  }, [isOpen]);

  return (
    <AccordionItem
      value={item.id}
      data-reveal
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      className={`group border-b-0 transition-[filter,opacity] duration-300 ease-out ${
        isDimmed ? "blur-[1.5px] opacity-40 md:text-gray-300" : "blur-0 opacity-100"
      }`}
    >
      <AccordionTrigger
        className="text-left pl-6 py-4 pr-4 md:pl-14 overflow-hidden duration-200 hover:no-underline cursor-pointer -space-y-4 md:-space-y-6 data-[state=open]:space-y-0 data-[state=open]:text-[var(--colorTextPrimary)] group-hover:text-[var(--colorBrand300)]"
        indicator={
          <svg
            className="size-5 md:size-6 shrink-0 self-center text-[var(--colorNeutral400)] transition-all duration-300 ease-out group-hover:text-[var(--colorBrand300)] group-data-[state=open]:text-[var(--colorBrand300)]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        }
      >
        <div className="flex flex-1 items-start gap-4">
          <p
            ref={numberRef}
            className="shrink-0 md:pt-2 font-mono text-xs transition-colors duration-200 group-data-[state=open]:text-[var(--colorBrand300)]"
          >
            {item.id}
          </p>
          <h2
            ref={titleRef}
            className={`uppercase relative   text-2xl md:text-5xl  leading-[1.1] tracking-[-0.5px] transition-colors duration-200 group-data-[state=open]:text-[var(--colorBrand300)]  `}
          >
            {item.title}
          </h2>
        </div>
      </AccordionTrigger>

      <AccordionContent className="text-muted-foreground md:pt-3 md:pb-4 pl-12 pr-4 md:pl-20 md:pr-10">
        <p
          ref={sentencesRef}
          data-accordion-content={item.id}
          className="text-[12px] md:text-[18px]  font-semibold leading-[1.7] text-[var(--colorNeutral600)] md:max-w-[640px]"
        >
          {splitSentences(item.content).map((s, i) => (
            <span key={i} data-sentence>
              {s}{" "}
            </span>
          ))}
        </p>
      </AccordionContent>
    </AccordionItem>
  );
}

export function Faq() {
  const [openId, setOpenId] = useState<string>("1");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section
      className="relative mx-auto w-full bg-white"
      style={{
        maxWidth: "var(--layoutMaxWidth)",
        padding: "var(--sectionPaddingY) var(--layoutMargin)",
      }}
    >
      {/* Header */}
      <Reveal targets="[data-reveal]" stagger={0.07} duration={0.7} y={24}>
        <div data-reveal className="w-full text-left">
          <h1
            className="text-[64px] font-semibold leading-[0.95] tracking-[-2px] text-[var(--colorTextPrimary)] max-lg:text-[48px] max-lg:tracking-[-1.5px] max-md:text-[40px] max-sm:text-[32px]"
          >
            <span className="block">Frequently</span>
            <span className="block">Asked</span>
            <span className="block text-[var(--colorTextActionPrimary)]">
              Questions
            </span>
          </h1>
        </div>

        {/* Accordion */}
        <div className="mt-16 w-full">
          <Accordion
            type="single"
            value={openId}
            onValueChange={setOpenId}
            collapsible
            className="w-full"
          >
            {items.map((item) => (
              <FaqItem
                key={item.id}
                item={item}
                isOpen={openId === item.id}
                isDimmed={hoveredId !== null && hoveredId !== item.id}
                onHoverStart={() => setHoveredId(item.id)}
                onHoverEnd={() => setHoveredId(null)}
              />
            ))}
          </Accordion>
        </div>
      </Reveal>
    </section>
  );
}
