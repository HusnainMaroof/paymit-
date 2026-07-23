import { UserPlus, Send, CircleCheckBig, ArrowRight } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/layout/section";
import { Reveal } from "@/components/layout/reveal";
import { siteConfig } from "@/lib/site";

/*
  How it works — three-step card grid. Per link.com: the step index is the
  focal numeral (mono, weight 500, "format indices in MatterMono"); a small
  lucide glyph sits beside the title to aid scanning; cards float on subtle
  borders + a 6% blue-cast shadow (not heavy shadow); hover lift is
  translateY -3px, 220ms expo-out. Stagger 50ms per item (stagger-sequence).
*/
const steps = [
  { icon: UserPlus, title: "Create your account", detail: "Sign up free in minutes — email only." },
  { icon: Send, title: "Set up your transfer", detail: "Enter amount and destination; fees and rates shown upfront." },
  { icon: CircleCheckBig, title: "Send & track", detail: "Fund via bank or card; we handle the rest with live updates." },
];

export function HowItWorksSection() {
  return (
    <Section id="how-it-works" variant="surface">
      <Container className="py-20 md:py-28">
        <Reveal>
          <SectionHeading
            title="How it works — 3 easy steps"
            description="From sign up to sent in minutes. No paperwork, no fuss."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal
              as="article"
              key={step.title}
              delay={i * 50}
              className="
                group relative flex flex-col rounded-xl border border-[var(--neutral-200)]
                bg-white p-7 transition-[transform,border-color,box-shadow] duration-[var(--dur-default)]
                [transition-timing-function:var(--ease-out-expo)]
                hover:-translate-y-1 hover:border-[var(--neutral-300)]
                focus-within:-translate-y-1
              "
              style={{
                boxShadow: "0 1px 2px rgba(15,23,42,.03), 0 6px 16px rgba(15,23,42,.03)",
              }}
            >
              {/* Big mono step numeral — the card's focal element */}
              <span
                className="nums select-none text-[clamp(3.5rem,7vw,4.5rem)] leading-none text-[var(--neutral-200)]"
                style={{ fontWeight: 500 }}
                aria-hidden
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Title + lucide glyph inline (icon aids scannability) */}
              <div className="mt-6 flex items-center gap-2.5">
                <step.icon
                  className="h-5 w-5 text-[var(--brand-300)]"
                  strokeWidth={1.75}
                  aria-hidden
                />
                <h3 className="text-lg font-medium tracking-tight text-[var(--ink)]">
                  {step.title}
                </h3>
              </div>
              <p className="mt-2 text-[0.95rem] leading-[1.55] text-[var(--neutral-600)]">
                {step.detail}
              </p>
            </Reveal>
          ))}
        </div>

        {/* Companion inline primary action */}
        <Reveal
          as="p"
          delay={200}
          className="mt-12 flex items-center gap-2 text-sm text-[var(--neutral-600)]"
        >
          <span>Ready when you are.</span>
          <a
            href={`${siteConfig.appBaseUrl}/register`}
            className="link-underline inline-flex items-center gap-1 font-medium text-[var(--brand-300)]"
          >
            Start your first transfer
            <ArrowRight className="arrow-nudge h-4 w-4" strokeWidth={1.75} />
          </a>
        </Reveal>
      </Container>
    </Section>
  );
}