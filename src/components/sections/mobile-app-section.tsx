import { Container, Section } from "@/components/layout/section";
import { Reveal } from "@/components/layout/reveal";
import { siteConfig } from "@/lib/site";

/*
  Mobile app — link.com's dark band + paired equal-weight actions pattern.
  Focal visual on the right is a pure-code "live transfer" receipt built from
  real Paymit app capabilities (per the scraped content: "Live push alerts
  from Sent to Received", "Bank · Wallet · Cash"). Mono numerals give it the
  MatterMono terminal feel. Half-card pairs over an oversized static image.
*/
export function MobileAppSection() {
  return (
    <Section id="mobile-app-section" variant="dark">
      <Container className="py-20 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
          {/* Left — text + paired CTAs */}
          <div className="max-w-xl">
            {/* Status dot — link.com's "Active / Approved" motif. Static, no ping. */}
            <Reveal
              as="span"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/60"
            >
              <span className="h-2 w-2 rounded-full bg-[var(--brand-300)]" aria-hidden />
              Available now · iOS &amp; Android
            </Reveal>

            <Reveal
              as="h2"
              delay={60}
              className="mt-6 text-balance text-[clamp(2.25rem,5vw,3.25rem)] font-medium leading-[0.96] tracking-[-0.028em]"
            >
              Send money on the{" "}
              <span className="text-[var(--brand-300)]">go</span>
            </Reveal>

            <Reveal
              as="p"
              delay={140}
              className="mt-5 max-w-md text-lg leading-relaxed text-white/65 [text-wrap:balance]"
            >
              Download the Paymit app for the easiest way to send and track your
              money transfers anytime, anywhere.
            </Reveal>

            <Reveal
              as="div"
              delay={220}
              className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-start"
            >
              {/* White-on-dark primary CTA (App Store) — link.com's "white is the brand" move */}
              <a
                href={siteConfig.appStore}
                className="group inline-flex h-12 w-full items-center justify-center gap-3 rounded-xl bg-white px-6 text-sm font-medium text-[var(--brand-900)] transition-colors duration-[var(--dur-fast)] hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-900)] sm:w-auto"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M17.05 12.04c-.03-3.07 2.51-4.55 2.62-4.62-1.43-2.09-3.66-2.38-4.45-2.41-1.89-.19-3.69 1.11-4.65 1.11-.97 0-2.45-1.08-4.03-1.05-2.07.03-3.99 1.21-5.05 3.06-2.16 3.75-.55 9.3 1.55 12.33 1.03 1.49 2.25 3.16 3.86 3.1 1.55-.06 2.13-1 4.01-1 1.87 0 2.4 1 4.03.97 1.66-.03 2.72-1.52 3.74-3.02 1.18-1.73 1.66-3.41 1.69-3.5-.04-.02-3.24-1.24-3.27-4.92M13.93 4.04c.86-1.04 1.43-2.49 1.27-3.94-1.23.05-2.71.82-3.59 1.85-.79.92-1.48 2.39-1.3 3.81 1.36.11 2.76-.69 3.62-1.72" />
                </svg>
                App Store
              </a>
              {/* Companion ghost CTA — paired equal-weight pattern */}
              <a
                href={siteConfig.googlePlay}
                className="inline-flex h-12 w-full items-center justify-center gap-3 rounded-xl border border-white/15 bg-white/5 px-6 text-sm font-medium text-white transition-colors duration-[var(--dur-fast)] hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-900)] sm:w-auto"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M3.6 1.8a1 1 0 0 0-.6.92v18.56a1 1 0 0 0 .6.92l10.4-10.2L3.6 1.8Zm12.1 9.86 3.2-3.13-2.5-1.43-3.4 3.33 2.7 1.23Zm-3.6 3.54-3.3 3.23 2.6 1.5 3.3-3.23-2.6-1.5Zm0-7.2 2.6-1.5-3.3-3.23-2.6 1.5 3.3 3.23Zm-7.6-4.7 9.2 9.05L4.5 19.6V3.3Z" />
                </svg>
                Google Play
              </a>
            </Reveal>

            {/* Mono rating footer — real scraped content */}
            <Reveal as="p" delay={300} className="mt-8 text-xs text-white/50">
              <span className="nums">4.7 ★</span> on Google Play ·{" "}
              <span className="nums">4.6 / 5</span> on Trustpilot
            </Reveal>
          </div>

          {/* Right — focal receipt mock (pure code, real app capabilities) */}
          <Reveal
            as="figure"
            delay={180}
            className="relative rounded-xl border border-white/10 bg-white/[0.04] p-5 [backdrop-filter:blur(6px)]"
            aria-label="Sample live transfer alert from the Paymit app"
          >
            <figcaption className="mb-4 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-white/55">
                Live transfer
              </span>
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--brand-300)]">
                <span className="h-2 w-2 rounded-full bg-[var(--brand-300)]" aria-hidden />
                Received
              </span>
            </figcaption>

            <div className="rounded-lg bg-[var(--brand-850)] p-4">
              {/* Sent → Received status row (mono) */}
              <ol className="space-y-3 text-sm">
                <TransferRow status="Sent" time="09:14:22" tone="past" />
                <TransferRow status="Received" time="09:15:08" tone="now" />
              </ol>

              {/* Inline receipt — destination / amount / delivery (mono) */}
              <div className="mt-5 border-t border-white/8 pt-4 text-[13px]">
                <ReceiptRow label="To" value="Ghana · GHS" flag="gh" />
                <ReceiptRow label="Amount" value="£1,000.00 → 18,420" mono />
                <ReceiptRow label="Delivery" value="Mobile Wallet" />
                <ReceiptRow label="Fee" value="£0.00 · transfer №1" mono />
              </div>
            </div>

            <p className="mt-4 text-center text-[11px] text-white/45">
              Push alert delivered in &lt; 1 minute
            </p>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

function TransferRow({
  status,
  time,
  tone,
}: {
  status: string;
  time: string;
  tone: "past" | "now";
}) {
  return (
    <li className="flex items-center justify-between">
      <span className="flex items-center gap-2 text-white/70">
        <span
          className={
            tone === "now"
              ? "h-2 w-2 rounded-full bg-[var(--brand-300)]"
              : "h-2 w-2 rounded-full bg-white/30"
          }
          aria-hidden
        />
        <span className="font-medium text-white">{status}</span>
      </span>
      <span className="nums text-[11px] text-white/55">{time}</span>
    </li>
  );
}

function ReceiptRow({
  label,
  value,
  mono,
  flag,
}: {
  label: string;
  value: string;
  mono?: boolean;
  flag?: string;
}) {
  return (
    <div className="flex items-center justify-between py-1.5">
      <span className="text-white/45">{label}</span>
      <span className="flex items-center gap-2 text-white/85">
        {flag && (
          <span
            className={`fi fi-${flag} text-sm leading-none`}
            aria-hidden
          />
        )}
        <span className={mono ? "nums" : ""}>{value}</span>
      </span>
    </div>
  );
}