import { Container, Section } from "@/components/layout/section";
import { Reveal } from "@/components/layout/reveal";
import Link from "next/link";
import { CurrencyConverter } from "./currency-converter";
import { siteConfig } from "@/lib/site";

/*
  Hero — DESIGN.md §4 + §14 full spec:
  • Background: brand-25 whisper-blue wash
  • Padding-top: 96px (= --headerNavOffset, accounts for fixed header)
  • Min-height: calc(100dvh - 96px)
  • 2-col grid: text left (11 cols), converter right (12 cols)
  • Headline: weight 500, ~80px desktop, 0.9 leading, tight tracking
  • Emphasis = COLOR (brand-300), NOT italic (DESIGN.md §3: "Emphasis = hue, not slope")
  • Subtext: 16px / 26px line-height, neutral-600
  • Hero CTA: neutral-100 bg, 8px → 90px radius morph, trailing 32px NE-arrow tile
  • "How it works": standard button, 10px → 28px radius morph
  • Converter card: 28px radius, border, shadow-card
*/
export function HeroSection() {
  return (
    <Section variant="wash" className="border-b-0">
      <Container className="relative flex min-h-[calc(100dvh-96px)] flex-col justify-center pt-24 pb-12">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left — headline + subtext + CTAs */}
          <div className="max-w-[520px]">
            <Reveal as="h1" delay={40}>
              {/* Weight 500 (link.com's Semibold), 0.9 leading, tight tracking */}
              <span className="block text-[clamp(2.75rem,7.5vw,5rem)] font-medium leading-[0.9] tracking-[-0.02em] text-[var(--ink)]">
                Send money
              </span>
              {/* Emphasis = brand-300 color, upright (NOT italic) — DESIGN.md §3 */}
              <span className="block text-[clamp(2.75rem,7.5vw,5rem)] font-medium leading-[0.9] tracking-[-0.02em] text-[var(--brand-300)]">
                worldwide<span className="text-[var(--brand-300)]">.</span>
              </span>
            </Reveal>

            {/* Subtext — 16px / 26px line-height per DESIGN.md --fontHeroBody */}
            <Reveal
              as="p"
              delay={120}
              className="mt-6 max-w-sm text-base leading-[1.6] text-[var(--neutral-600)]"
            >
              Experience fast, secure, and hassle-free international transfers
              with our commitment to the lowest fees.
            </Reveal>

            {/* CTAs — hero style (8px → 90px morph) + standard (10px → 28px morph) */}
            <Reveal
              as="div"
              delay={200}
              className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center"
            >
              {/* Hero CTA — neutral-100 bg, 8px → 90px radius morph, trailing 32px NE arrow tile (§8) */}
              <Link
                href={`${siteConfig.appBaseUrl}/register`}
                className="btn-hero-morph group inline-flex items-center gap-4 border border-[var(--neutral-200)] bg-[var(--neutral-100)] px-4 py-4 text-sm font-medium text-[var(--ink)] hover:bg-[var(--neutral-200)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2"
              >
                Get started
                {/* Trailing 32x32 icon tile (rx=4 by default, morphs to 90px with parent) */}
                <span className="arrow-tile flex h-8 w-8 items-center justify-center rounded-[4px] bg-white ring-1 ring-[var(--neutral-200)]">
                  <svg
                    className="arrow-nudge h-4 w-4 text-[var(--ink)]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M7 17 17 7M9 7h8v8" />
                  </svg>
                </span>
              </Link>

              {/* "How it works" — standard button: 10px → 28px morph, outlined */}
              <Link
                href="/#how-it-works"
                className="btn-morph inline-flex h-10 items-center justify-center border border-[var(--neutral-200)] bg-white px-6 text-sm font-medium text-[var(--ink)] transition-colors hover:bg-[var(--neutral-50)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2"
              >
                How it works
              </Link>
            </Reveal>
          </div>

          {/* Right — converter card (28px radius, shadow-card) */}
          <Reveal
            as="div"
            delay={120}
            className="flex items-center justify-center lg:justify-end"
          >
            <CurrencyConverter />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}