"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import {
  RotateCcw,
  Mail,
  Send,
  CheckCircle2,
  ArrowRight,
  User,
  ShieldCheck,
  MousePointer2,
  ArrowDownUp,
  Sparkles,
  Check,
  Lock,
  Loader2,
  ChevronDown,
} from "lucide-react";

const MAX_PLAYS = 2;

export function HowItWorks() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [progress, setProgress] = useState(0);

  const [typedEmail, setTypedEmail] = useState("");
  const [isPasswordEntered, setIsPasswordEntered] = useState(false);
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [isSignedUp, setIsSignedUp] = useState(false);

  const [sendAmount, setSendAmount] = useState(0);
  const [receiveAmount, setReceiveAmount] = useState(0);
  const [isRecipientSelected, setIsRecipientSelected] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [hasEnded, setHasEnded] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const mainTl = useRef<gsap.core.Timeline | null>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const rippleRef = useRef<HTMLDivElement>(null);

  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);

  const emailInputRef = useRef<HTMLDivElement>(null);
  const passwordInputRef = useRef<HTMLDivElement>(null);
  const signUpBtnRef = useRef<HTMLButtonElement>(null);

  const sendInputRef = useRef<HTMLDivElement>(null);
  const recipientRowRef = useRef<HTMLDivElement>(null);
  const recipientDropdownRef = useRef<HTMLDivElement>(null);
  const sendBtnRef = useRef<HTMLButtonElement>(null);
  const rateBadgeRef = useRef<HTMLDivElement>(null);

  const successCheckRef = useRef<HTMLDivElement>(null);
  const stageWrapRef = useRef<HTMLDivElement>(null);

  // Measured target positions, captured once in useLayoutEffect (before any
  // GSAP transforms are applied) and reused for every play/repeat.
  const positionsRef = useRef<{
    pEmail: { x: number; y: number };
    pPass: { x: number; y: number };
    pSignUp: { x: number; y: number };
    pSend: { x: number; y: number };
    pRecip: { x: number; y: number };
    pSendBtn: { x: number; y: number };
  }>({
    pEmail: { x: 0, y: 0 },
    pPass: { x: 0, y: 0 },
    pSignUp: { x: 0, y: 0 },
    pSend: { x: 0, y: 0 },
    pRecip: { x: 0, y: 0 },
    pSendBtn: { x: 0, y: 0 },
  });

  // Measure an element's center relative to the stage (top-left = 0,0)
  const measureCenter = (el: HTMLElement | null) => {
    if (!el || !stageWrapRef.current) return { x: 0, y: 0 };
    const stageRect = stageWrapRef.current.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    return {
      x: elRect.left - stageRect.left + elRect.width / 2,
      y: elRect.top - stageRect.top + elRect.height / 2,
    };
  };

  const resetVisuals = () => {
    gsap.set(card1Ref.current, { opacity: 0, scale: 0.92, y: 30 });
    gsap.set(card2Ref.current, { opacity: 0, scale: 0.92, y: 30 });
    gsap.set(card3Ref.current, { opacity: 0, scale: 0.92, y: 30 });
    gsap.set(successCheckRef.current, { scale: 0, opacity: 0, rotation: -60 });
    gsap.set(cursorRef.current, { opacity: 0, x: 0, y: 0 });
    gsap.set(rippleRef.current, { scale: 0, opacity: 0 });
    gsap.set(rateBadgeRef.current, { scale: 0.7, opacity: 0 });
    gsap.set(recipientDropdownRef.current, { opacity: 0, y: -6, scale: 0.96 });
  };

  // Pre-measure all targets before any gsap.set is applied, so coordinates are
  // based on the natural CSS layout positions (with no temporary transforms).
  useLayoutEffect(() => {
    positionsRef.current = {
      pEmail: measureCenter(emailInputRef.current),
      pPass: measureCenter(passwordInputRef.current),
      pSignUp: measureCenter(signUpBtnRef.current),
      pSend: measureCenter(sendInputRef.current),
      pRecip: measureCenter(recipientRowRef.current),
      pSendBtn: measureCenter(sendBtnRef.current),
    };
    resetVisuals();
  }, []);

  const restart = () => {
    setSendAmount(0);
    setReceiveAmount(0);
    setTypedEmail("");
    setIsPasswordEntered(false);
    setIsSigningUp(false);
    setIsSignedUp(false);
    setIsRecipientSelected(false);
    setIsSending(false);
    setIsSent(false);
    setCurrentStep(1);
    setProgress(0);
    setHasEnded(false);
    setIsPlaying(true);
    mainTl.current?.restart();
  };

  const buildTimeline = () => {
    // Use measurements captured in useLayoutEffect (before any GSAP
    // transforms were applied — so they reflect the natural, final CSS
    // positions of the cards / inputs).
    const { pEmail, pPass, pSignUp, pSend, pRecip, pSendBtn } =
      positionsRef.current;

    const counterObj = { send: 0, receive: 0 };
    const emailStr = "alex.turner@gmail.com";

    resetVisuals();

    // Fractions get recomputed from real label positions once the timeline
    // is fully built (see bottom) — these are just safe fallbacks.
    let step2Frac = 40;
    let step3Frac = 75;

    const tl = gsap.timeline({
      repeat: MAX_PLAYS - 1,
      repeatDelay: 1.4,
      onStart: () => {
        setIsPlaying(true);
        setHasEnded(false);
      },
      onRepeat: () => {
        setTypedEmail("");
        setIsPasswordEntered(false);
        setIsSigningUp(false);
        setIsSignedUp(false);
        setIsSending(false);
        setIsSent(false);
        setIsRecipientSelected(false);
        counterObj.send = 0;
        counterObj.receive = 0;
        setSendAmount(0);
        setReceiveAmount(0);
      },
      onComplete: () => {
        setIsPlaying(false);
        setHasEnded(true);
      },
      onUpdate: () => {
        const p = tl.progress() * 100;
        setProgress(p);
        if (p < step2Frac) setCurrentStep(1);
        else if (p < step3Frac) setCurrentStep(2);
        else setCurrentStep(3);
      },
    });

    mainTl.current = tl;

    // Tracks the cursor's last known logical position so each new move can
    // draw an arc relative to where it actually is, not a straight jump.
    let cursorPos = { x: 0, y: 0 };

    // Moves the cursor along a soft arc (a real hand rarely travels in a
    // perfectly straight line) instead of a linear x/y tween.
    const arcMove = (
      to: { x: number; y: number },
      atTime: string,
      duration: number,
      bend: number = 1
    ) => {
      const from = cursorPos;
      const dx = to.x - from.x;
      const dy = to.y - from.y;
      const dist = Math.hypot(dx, dy) || 1;
      const bow = Math.min(50, dist * 0.16) * bend;
      const nx = -dy / dist;
      const ny = dx / dist;
      const midX = from.x + dx * 0.52 + nx * bow;
      const midY = from.y + dy * 0.52 + ny * bow;

      tl.to(
        cursorRef.current,
        {
          bezier: { type: "soft", values: [{ x: midX, y: midY }, { x: to.x, y: to.y }] },
          duration,
          ease: "power2.inOut",
        },
        atTime
      );
      cursorPos = to;
    };

    // A tiny settle-wobble while "hovering" before a click — real cursors
    // aren't perfectly still the instant they arrive.
    const dwellJitter = (atTime: string, duration: number) => {
      tl.to(
        cursorRef.current,
        { x: "+=2", y: "-=2", duration: duration / 2, ease: "sine.inOut", yoyo: true, repeat: 1 },
        atTime
      );
    };

    const triggerClick = (
      atTime: string,
      elementRef: React.RefObject<HTMLElement | null> | null
    ) => {
      tl.to(cursorRef.current, { scale: 0.78, duration: 0.1, ease: "power2.in" }, atTime);
      tl.to(rippleRef.current, { opacity: 1, scale: 1.6, duration: 0.15, ease: "power1.out" }, atTime)
        .to(rippleRef.current, { opacity: 0, scale: 2.4, duration: 0.25, ease: "power1.in" }, `${atTime}+=0.15`)
        .set(rippleRef.current, { scale: 0, opacity: 0 }, `${atTime}+=0.4`);
      tl.to(cursorRef.current, { scale: 1, duration: 0.14, ease: "back.out(2)" }, `${atTime}+=0.12`);

      if (elementRef && elementRef.current) {
        tl.to(elementRef.current, { scale: 0.97, duration: 0.08, ease: "power1.in" }, atTime)
          .to(elementRef.current, { scale: 1, duration: 0.14, ease: "power2.out" }, `${atTime}+=0.1`);
      }
    };

    // Types one character at a time with human-ish jitter in timing, instead
    // of a uniform reveal — returns the total time consumed.
    const humanType = (str: string, startTime: number, setter: (s: string) => void) => {
      let t = startTime;
      str.split("").forEach((ch, i) => {
        const dur = 0.035 + Math.random() * 0.03 + (ch === "@" || ch === "." ? 0.07 : 0);
        tl.to(
          {},
          { duration: dur, onComplete: () => setter(str.slice(0, i + 1)) },
          `step1+=${t.toFixed(3)}`
        );
        t += dur;
      });
      return t;
    };

    const DWELL = 0.1;

    // ===================== STEP 1 — Sign Up =====================
    tl.addLabel("step1", 0);
    let t1 = 0;

    tl.to(card1Ref.current, { opacity: 1, scale: 1, y: 0, duration: 0.6, ease: "power3.out" }, `step1+=${t1}`);

    t1 = 0.25;
    tl.to(cursorRef.current, { opacity: 1, duration: 0.2 }, `step1+=${t1}`);
    arcMove(pEmail, `step1+=${t1}`, 0.65, 1);
    t1 += 0.65;

    dwellJitter(`step1+=${t1.toFixed(3)}`, DWELL);
    t1 += DWELL;
    triggerClick(`step1+=${t1.toFixed(3)}`, emailInputRef);
    t1 += 0.35;

    t1 += 0.12;
    t1 = humanType(emailStr, t1, setTypedEmail);

    t1 += 0.15;
    arcMove(pPass, `step1+=${t1.toFixed(3)}`, 0.5, -1);
    t1 += 0.5;

    dwellJitter(`step1+=${t1.toFixed(3)}`, DWELL);
    t1 += DWELL;
    triggerClick(`step1+=${t1.toFixed(3)}`, passwordInputRef);
    tl.to({}, { duration: 0.05, onComplete: () => setIsPasswordEntered(true) }, `step1+=${t1.toFixed(3)}`);
    t1 += 0.35;

    t1 += 0.15;
    arcMove(pSignUp, `step1+=${t1.toFixed(3)}`, 0.45, 1);
    t1 += 0.45;

    dwellJitter(`step1+=${t1.toFixed(3)}`, DWELL);
    t1 += DWELL;
    triggerClick(`step1+=${t1.toFixed(3)}`, signUpBtnRef);
    tl.to({}, { duration: 0.05, onComplete: () => setIsSigningUp(true) }, `step1+=${t1.toFixed(3)}`);
    t1 += 0.35;

    t1 += 0.4; // simulated network round-trip
    tl.to(
      signUpBtnRef.current,
      {
        backgroundColor: "#059669",
        duration: 0.22,
        ease: "power2.out",
        onStart: () => {
          setIsSigningUp(false);
          setIsSignedUp(true);
        },
      },
      `step1+=${t1.toFixed(3)}`
    );
    t1 += 0.22;

    t1 += 0.2;
    tl.to(cursorRef.current, { opacity: 0, duration: 0.18 }, `step1+=${t1.toFixed(3)}`);
    t1 += 0.05;
    tl.to(card1Ref.current, { opacity: 0, scale: 0.92, y: -20, duration: 0.45, ease: "power2.in" }, `step1+=${t1.toFixed(3)}`);
    t1 += 0.45;

    // ===================== STEP 2 — Send Money =====================
    tl.addLabel("step2", `step1+=${(t1 + 0.35).toFixed(3)}`);
    let t2 = 0;

    tl.to(card2Ref.current, { opacity: 1, scale: 1, y: 0, duration: 0.6, ease: "power3.out" }, `step2+=${t2}`);
    tl.to(rateBadgeRef.current, { scale: 1, opacity: 1, duration: 0.35, ease: "back.out(1.8)" }, `step2+=${(t2 + 0.25).toFixed(3)}`);

    t2 = 0.4;
    tl.to(cursorRef.current, { opacity: 1, duration: 0.2 }, `step2+=${t2}`);
    arcMove(pSend, `step2+=${t2}`, 0.6, -1);
    t2 += 0.6;

    dwellJitter(`step2+=${t2.toFixed(3)}`, DWELL);
    t2 += DWELL;
    triggerClick(`step2+=${t2.toFixed(3)}`, sendInputRef);
    t2 += 0.35;

    t2 += 0.12;
    tl.to(
      counterObj,
      {
        send: 500,
        receive: 9750,
        duration: 1.15,
        ease: "power2.out",
        onUpdate: () => {
          setSendAmount(Math.round(counterObj.send));
          setReceiveAmount(Math.round(counterObj.receive));
        },
      },
      `step2+=${t2.toFixed(3)}`
    );
    t2 += 1.15;

    t2 += 0.12;
    arcMove(pRecip, `step2+=${t2.toFixed(3)}`, 0.55, 1);
    t2 += 0.55;

    dwellJitter(`step2+=${t2.toFixed(3)}`, DWELL);
    t2 += DWELL;
    triggerClick(`step2+=${t2.toFixed(3)}`, recipientRowRef);
    // Open the recipient dropdown, let it sit, then select and close it —
    // a real pick, not just a color change.
    tl.to(
      recipientDropdownRef.current,
      { opacity: 1, y: 0, scale: 1, duration: 0.2, ease: "back.out(1.6)" },
      `step2+=${t2.toFixed(3)}`
    );
    t2 += 0.2;
    t2 += 0.3;
    tl.to(
      recipientDropdownRef.current,
      {
        opacity: 0,
        y: -4,
        scale: 0.97,
        duration: 0.18,
        ease: "power1.in",
        onStart: () => setIsRecipientSelected(true),
      },
      `step2+=${t2.toFixed(3)}`
    );
    t2 += 0.18;

    t2 += 0.12;
    arcMove(pSendBtn, `step2+=${t2.toFixed(3)}`, 0.48, -1);
    t2 += 0.48;

    dwellJitter(`step2+=${t2.toFixed(3)}`, DWELL);
    t2 += DWELL;
    triggerClick(`step2+=${t2.toFixed(3)}`, sendBtnRef);
    tl.to({}, { duration: 0.05, onComplete: () => setIsSending(true) }, `step2+=${t2.toFixed(3)}`);
    t2 += 0.35;

    t2 += 0.45; // simulated transfer processing
    tl.to(
      sendBtnRef.current,
      {
        backgroundColor: "#059669",
        duration: 0.22,
        ease: "power2.out",
        onStart: () => {
          setIsSending(false);
          setIsSent(true);
        },
      },
      `step2+=${t2.toFixed(3)}`
    );
    t2 += 0.22;

    t2 += 0.2;
    tl.to(cursorRef.current, { opacity: 0, duration: 0.18 }, `step2+=${t2.toFixed(3)}`);
    t2 += 0.05;
    tl.to(card2Ref.current, { opacity: 0, scale: 0.92, y: -20, duration: 0.45, ease: "power2.in" }, `step2+=${t2.toFixed(3)}`);
    t2 += 0.45;

    // ===================== STEP 3 — Money Sent =====================
    tl.addLabel("step3", `step2+=${(t2 + 0.35).toFixed(3)}`);

    tl.to(card3Ref.current, { opacity: 1, scale: 1, y: 0, duration: 0.65, ease: "power3.out" }, "step3");
    tl.to(
      successCheckRef.current,
      { opacity: 1, scale: 1, rotation: 0, duration: 0.75, ease: "back.out(2.2)" },
      "step3+=0.25"
    );

    tl.to({}, { duration: 2.6 });

    // Now that every label is placed, compute real progress-bar thresholds
    // instead of guessing fixed percentages.
    const totalDur = tl.duration();
    step2Frac = ((tl.labels.step2 as number) / totalDur) * 100;
    step3Frac = ((tl.labels.step3 as number) / totalDur) * 100;

    return tl;
  };

  // Trigger animation when section scrolls into view
  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    let hasStarted = false;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            hasStarted = true;
            buildTimeline();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(sectionEl);

    return () => {
      observer.disconnect();
      mainTl.current?.kill();
    };
  }, []);

  const steps = [
    { id: 1, label: "01 Sign Up" },
    { id: 2, label: "02 Send Money" },
    { id: 3, label: "03 Money Sent" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative mx-auto w-full bg-white"
      style={{
        maxWidth: "var(--layoutMaxWidth)",
        padding: "var(--sectionPaddingY) var(--layoutMargin)",
      }}
    >
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
        {/* === Left: Text === */}
        <div className="lg:col-span-5">
          <h1
            className="text-[56px] font-semibold leading-[54px] tracking-[-1.7px] text-[var(--colorTextPrimary)] max-lg:text-[44px] max-lg:leading-[42px] max-lg:tracking-[-1.3px]"
            style={{ textWrap: "balance" }}
          >
            Send Money in{" "}
            <span className="text-[var(--colorTextActionPrimary)]">3 Easy Steps</span>
          </h1>
          <p className="mt-2.5 text-lg font-medium leading-[26px] text-[var(--colorNeutral600)]">
            Fast, simple, and secure. From account creation to delivery, we
            handle every step effortlessly.
          </p>
        </div>

        {/* === Right: Animation Canvas === */}
        <div className="lg:col-span-7 w-full">
          <div
            className="relative w-full h-[580px] rounded-[28px] border overflow-hidden p-6 sm:p-8 flex flex-col justify-between"
            style={{
              borderColor: "var(--colorNeutral200)",
              background: "var(--colorNeutral100)",
            }}
          >
            {/* === Top tracking stepper === */}
            <div
              className="relative z-30 w-full rounded-2xl p-3 flex items-center justify-between border bg-white"
              style={{ borderColor: "var(--colorBorderLight)" }}
            >
              <div
                className="absolute left-8 right-8 top-1/2 -translate-y-1/2 h-0.5 z-0"
                style={{ backgroundColor: "var(--colorNeutral200)" }}
              >
                <div
                  className="h-full transition-all duration-300 ease-out"
                  style={{
                    width: `${Math.min(100, Math.max(0, progress))}%`,
                    backgroundColor: "var(--colorBrand900)",
                  }}
                />
              </div>

              {steps.map((step) => {
                const isCompleted =
                  currentStep > step.id || (currentStep === 3 && progress > 85);
                const isActive = currentStep === step.id;
                return (
                  <div
                    key={step.id}
                    className={`relative z-10 flex items-center gap-2 rounded-xl border px-3.5 py-1.5 transition-all duration-300 ${
                      isActive
                        ? "text-white shadow-sm"
                        : isCompleted
                          ? "text-emerald-900"
                          : "text-[var(--colorNeutral500)] bg-white"
                    }`}
                    style={
                      isActive
                        ? {
                            backgroundColor: "var(--colorBrand900)",
                            borderColor: "var(--colorBrand900)",
                          }
                        : isCompleted
                          ? {
                              backgroundColor: "rgb(236 253 245)",
                              borderColor: "rgb(209 250 229)",
                            }
                          : { borderColor: "var(--colorBorderLight)" }
                    }
                  >
                    <div
                      className="flex size-4 items-center justify-center rounded-full text-[10px] font-bold"
                      style={
                        isCompleted
                          ? { backgroundColor: "rgb(16 185 129)", color: "#fff" }
                          : isActive
                            ? { backgroundColor: "#fff", color: "var(--colorBrand900)" }
                            : {
                                backgroundColor: "var(--colorNeutral100)",
                                color: "var(--colorNeutral400)",
                              }
                      }
                    >
                      {isCompleted ? "✓" : step.id}
                    </div>
                    <span
                      className={`text-xs font-bold ${isActive ? "text-white" : "text-[var(--colorTextPrimary)]"}`}
                    >
                      {step.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* === Center stage === */}
            <div
              ref={stageWrapRef}
              className="relative flex w-full flex-1 items-center justify-center"
            >
              {/* Cursor + ripple — anchored to stage top-left (0,0) */}
              <div className="pointer-events-none absolute left-0 top-0 z-50 size-full">
                <div
                  ref={cursorRef}
                  className="absolute left-0 top-0 flex items-center justify-center"
                >
                  <MousePointer2 className="size-5 -translate-x-1 -translate-y-1 rotate-[350deg] fill-[var(--colorBrand900)] text-[var(--colorBrand900)] drop-shadow-md" />
                  <div
                    ref={rippleRef}
                    className="absolute size-9 rounded-full border-2"
                    style={{
                      borderColor: "rgb(16 185 129)",
                      backgroundColor: "rgba(16,185,129,0.2)",
                    }}
                  />
                </div>
              </div>

              {/* ====== Card 1: Sign Up ====== */}
              <div
                ref={card1Ref}
                className="absolute w-[300px] rounded-2xl border bg-white p-6 text-left shadow-xl sm:w-[340px]"
                style={{ borderColor: "var(--colorBorderLight)" }}
              >
                <div className="mb-4 flex items-center justify-between border-b border-[var(--colorNeutral100)] pb-3">
                  <div className="flex items-center gap-2">
                    <div className="flex size-7 items-center justify-center rounded-lg bg-[var(--colorNeutral100)]">
                      <User className="size-4 text-[var(--colorTextPrimary)]" />
                    </div>
                    <span className="text-sm font-bold text-[var(--colorTextPrimary)]">
                      Create Free Account
                    </span>
                  </div>
                  <span className="font-mono text-xs text-[var(--colorNeutral400)]">
                    Step 1
                  </span>
                </div>

                <div className="space-y-3 pt-1">
                  <div>
                    <label className="mb-1 block text-[11px] font-semibold text-[var(--colorNeutral500)]">
                      Email Address
                    </label>
                    <div
                      ref={emailInputRef}
                      className={`flex h-10 items-center gap-2 rounded-xl border px-3 font-mono text-xs transition-all ${
                        typedEmail
                          ? "border-[var(--colorBrand900)] bg-white"
                          : "border-[var(--colorBorderLight)] bg-[var(--colorNeutral50)]"
                      }`}
                    >
                      <Mail className="size-3.5 text-[var(--colorNeutral400)]" />
                      <span className="text-[var(--colorTextPrimary)]">{typedEmail}</span>
                      {typedEmail.length > 0 && typedEmail.length < 21 && (
                        <span className="inline-block h-3.5 w-1 animate-pulse bg-[var(--colorBrand900)]" />
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="mb-1 block text-[11px] font-semibold text-[var(--colorNeutral500)]">
                      Security Password
                    </label>
                    <div
                      ref={passwordInputRef}
                      className={`flex h-10 items-center justify-between rounded-xl border px-3 text-xs transition-all ${
                        isPasswordEntered
                          ? "border-emerald-500 bg-white"
                          : "border-[var(--colorBorderLight)] bg-[var(--colorNeutral50)] text-[var(--colorNeutral400)]"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <Lock className="size-3.5 text-[var(--colorNeutral400)]" />
                        <span className="font-bold tracking-widest text-[var(--colorTextPrimary)]">
                          {isPasswordEntered ? "••••••••••••" : "Enter password"}
                        </span>
                      </div>
                      <ShieldCheck
                        className={`size-3.5 transition-colors ${
                          isPasswordEntered
                            ? "text-emerald-500"
                            : "text-[var(--colorNeutral300)]"
                        }`}
                      />
                    </div>
                  </div>
                </div>

                <button
                  ref={signUpBtnRef}
                  className="mt-4 flex h-10 w-full items-center justify-center gap-2 rounded-xl text-xs font-bold text-white transition-all"
                  style={{
                    backgroundColor: "var(--colorBrand900)",
                    boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
                  }}
                >
                  {isSignedUp ? (
                    <>
                      <span>Account Verified</span>
                      <Check className="size-3.5 text-white" />
                    </>
                  ) : isSigningUp ? (
                    <>
                      <span>Creating Account…</span>
                      <Loader2 className="size-3.5 animate-spin" />
                    </>
                  ) : (
                    <>
                      <span>Create Free Account</span>
                      <ArrowRight className="size-3.5" />
                    </>
                  )}
                </button>
              </div>

              {/* ====== Card 2: Send Money ====== */}
              <div
                ref={card2Ref}
                className="absolute w-[300px] rounded-2xl border bg-white p-6 text-left shadow-xl sm:w-[340px]"
                style={{ borderColor: "var(--colorBorderLight)" }}
              >
                <div className="mb-3 flex items-center justify-between border-b border-[var(--colorNeutral100)] pb-2.5">
                  <div className="flex items-center gap-2">
                    <div className="flex size-7 items-center justify-center rounded-lg bg-[var(--colorNeutral100)]">
                      <Send className="size-4 text-[var(--colorTextPrimary)]" />
                    </div>
                    <span className="text-sm font-bold text-[var(--colorTextPrimary)]">
                      Send Remittance
                    </span>
                  </div>
                  <span className="font-mono text-xs text-[var(--colorNeutral400)]">
                    Step 2
                  </span>
                </div>

                <div
                  ref={sendInputRef}
                  className="flex items-center justify-between rounded-xl border border-[var(--colorBorderLight)] bg-[var(--colorNeutral50)] p-2.5"
                >
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-[var(--colorNeutral400)]">
                      You Send
                    </span>
                    <span className="font-mono text-lg font-black text-[var(--colorTextPrimary)]">
                      £{sendAmount}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-lg border border-[var(--colorBorderLight)] bg-white px-2.5 py-1">
                    <span className="text-base">🇬🇧</span>
                    <span className="text-xs font-bold text-[var(--colorTextPrimary)]">GBP</span>
                  </div>
                </div>

                <div className="-my-1 flex justify-center">
                  <div
                    ref={rateBadgeRef}
                    className="flex items-center gap-1.5 rounded-full border px-3 py-1 text-[10px] font-bold text-emerald-800"
                    style={{ backgroundColor: "rgb(236 253 245)", borderColor: "rgb(209 250 229)" }}
                  >
                    <ArrowDownUp className="size-3 text-emerald-600" />
                    <span>1 GBP = 19.50 GHS (Zero Fees)</span>
                  </div>
                </div>

                <div className="flex items-center justify-between rounded-xl border border-[var(--colorBorderLight)] bg-[var(--colorNeutral50)] p-2.5">
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-[var(--colorNeutral400)]">
                      Recipient Gets
                    </span>
                    <span className="font-mono text-lg font-black text-emerald-700">
                      GH₵ {receiveAmount.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-lg border border-[var(--colorBorderLight)] bg-white px-2.5 py-1">
                    <span className="text-base">🇬🇭</span>
                    <span className="text-xs font-bold text-[var(--colorTextPrimary)]">GHS</span>
                  </div>
                </div>

                <div className="relative">
                  <div
                    ref={recipientRowRef}
                    className={`flex items-center justify-between rounded-xl border p-2.5 text-xs transition-all ${
                      isRecipientSelected
                        ? "border-emerald-300 bg-emerald-50/70"
                        : "border-[var(--colorNeutral100)] bg-[var(--colorNeutral50)]"
                    }`}
                  >
                    <span className="text-[var(--colorNeutral500)]">Recipient</span>
                    {isRecipientSelected ? (
                      <span className="flex items-center gap-1 font-bold text-[var(--colorTextPrimary)]">
                        Kofi Mensah
                        <span className="text-[10px] font-normal text-[var(--colorNeutral400)]">
                          (MTN Mobile)
                        </span>
                        <Check className="size-3 text-emerald-600" />
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 font-medium text-[var(--colorNeutral400)]">
                        Select recipient
                        <ChevronDown className="size-3.5" />
                      </span>
                    )}
                  </div>

                  <div
                    ref={recipientDropdownRef}
                    className="absolute left-0 right-0 top-[calc(100%+6px)] z-40 rounded-xl border bg-white p-1.5 shadow-lg"
                    style={{ borderColor: "var(--colorBorderLight)" }}
                  >
                    <div className="flex items-center gap-2 rounded-lg bg-emerald-50 px-2.5 py-2 text-xs font-bold text-[var(--colorTextPrimary)]">
                      <div className="flex size-5 items-center justify-center rounded-full bg-emerald-600 text-[9px] text-white">
                        K
                      </div>
                      Kofi Mensah
                      <span className="ml-auto text-[10px] font-normal text-[var(--colorNeutral400)]">
                        MTN Mobile
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  ref={sendBtnRef}
                  className="mt-3.5 flex h-10 w-full items-center justify-center gap-2 rounded-xl text-xs font-bold text-white transition-all"
                  style={{
                    backgroundColor: "var(--colorBrand900)",
                    boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
                  }}
                >
                  {isSent ? (
                    <>
                      <span>Transfer Initiated</span>
                      <Check className="size-3.5 text-white" />
                    </>
                  ) : isSending ? (
                    <>
                      <span>Sending Securely…</span>
                      <Loader2 className="size-3.5 animate-spin" />
                    </>
                  ) : (
                    <>
                      <span>Send £{sendAmount} to Ghana Now</span>
                      <ArrowRight className="size-3.5" />
                    </>
                  )}
                </button>
              </div>

              {/* ====== Card 3: Money Sent ====== */}
              <div
                ref={card3Ref}
                className="absolute w-[300px] rounded-2xl border bg-white p-6 text-center shadow-xl sm:w-[340px]"
                style={{ borderColor: "var(--colorBorderLight)" }}
              >
                <div className="flex justify-center pt-2">
                  <div
                    ref={successCheckRef}
                    className="relative flex size-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 shadow-md"
                  >
                    <CheckCircle2 className="size-10 fill-emerald-600 text-white" />
                    <Sparkles className="absolute -right-1 -top-1 size-4 animate-pulse text-emerald-500" />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-extrabold text-[var(--colorTextPrimary)]">
                    Money Delivered!
                  </h3>
                  <p className="mt-1 text-xs text-[var(--colorNeutral500)]">
                    Your transfer of{" "}
                    <span className="font-bold text-[var(--colorTextPrimary)]">£500.00</span>{" "}
                    (GH₵ 9,750) to{" "}
                    <span className="font-bold text-[var(--colorTextPrimary)]">Kofi Mensah</span>{" "}
                    is complete.
                  </p>
                </div>

                <div className="space-y-2 rounded-xl border border-[var(--colorNeutral100)] bg-[var(--colorNeutral50)] p-3 text-left text-xs">
                  <div className="flex justify-between text-[var(--colorNeutral500)]">
                    <span>Sender</span>
                    <span className="font-semibold text-[var(--colorTextPrimary)]">
                      Alex Turner 🇬🇧
                    </span>
                  </div>
                  <div className="flex justify-between text-[var(--colorNeutral500)]">
                    <span>Destination</span>
                    <span className="font-semibold text-[var(--colorTextPrimary)]">
                      Accra, Ghana 🇬🇭
                    </span>
                  </div>
                  <div className="flex justify-between border-t border-[var(--colorNeutral200)] pt-1.5 text-[var(--colorNeutral500)]">
                    <span>Status</span>
                    <span className="flex items-center gap-1 font-bold text-emerald-600">
                      Deposited ✓
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* === Replay button === */}
            <div className="flex justify-end pt-2">
              <button
                onClick={restart}
                className={`flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-xs font-bold transition-all active:scale-95 hover:bg-[var(--colorNeutral50)] ${
                  hasEnded ? "ring-2 ring-emerald-500/50 animate-pulse" : ""
                }`}
                style={{ borderColor: "var(--colorBorderLight)" }}
              >
                <RotateCcw
                  className={`size-3.5 text-[var(--colorTextPrimary)] ${isPlaying ? "animate-spin" : ""}`}
                  style={{ animationDuration: "3s" }}
                />
                <span>{hasEnded ? "Replay Animation" : "Replay"}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}