import Link from "next/link";
import { Container, Section } from "@/components/layout/section";
import { Reveal } from "@/components/layout/reveal";
import { destinations } from "@/lib/site";

/*
  Corridors — link.com's "Merchants" strip, repurposed for Paymit as a row of
  corridor tiles. Vector flag sprites (lipis/flag-icons) for crisp, themeable
  country glyphs — same stack the original Paymit page used. No emoji swapped
  for the "1M merchants" decorative exception.
*/

const flagFor: Record<string, string> = {
  Nigeria: "ng",
  Ghana: "gh",
  Gambia: "gm",
  Cameroon: "cm",
  Senegal: "sn",
  Zambia: "zm",
  Pakistan: "pk",
  India: "in",
  Bangladesh: "bd",
};

const codeFor: Record<string, string> = {
  Nigeria: "NGN",
  Ghana: "GHS",
  Gambia: "GMD",
  Cameroon: "XAF",
  Senegal: "XOF",
  Zambia: "ZMW",
  Pakistan: "PKR",
  India: "INR",
  Bangladesh: "BDT",
};

export function CorridorsSection() {
  return (
    <Section variant="surface">
      <Container className="py-16 md:py-20">
        <Reveal
          as="header"
          className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between"
        >
          <h2 className="text-balance text-[clamp(1.5rem,3vw,2rem)] font-medium leading-[1.04] tracking-[-0.02em] text-[var(--ink)]">
            Send money to{" "}
            <span className="text-[var(--brand-300)]">nine live corridors</span>
          </h2>
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--neutral-500)]">
            Africa & South Asia · more coming soon
          </p>
        </Reveal>

        {/* Tiles wrap on mobile/tablet; hover = subtle border + hue accent, 200ms expo. */}
        <ul className="flex flex-wrap gap-3" role="list">
          {destinations.map((d, i) => (
            <Reveal
              as="li"
              key={d.country}
              delay={Math.min(i, 8) * 40}
              className="min-w-[150px] flex-1"
            >
              <Link
                href={`/send-money-to/${d.country.toLowerCase()}`}
                className="group flex items-center gap-3 rounded-lg border border-[var(--neutral-200)] bg-white px-4 py-3 transition-colors duration-[var(--dur-default)] [transition-timing-function:var(--ease-out-expo)] hover:border-[var(--brand-300)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2"
              >
                <span
                  className={`fi fi-${flagFor[d.country]} text-xl leading-none`}
                  aria-label={d.country}
                  role="img"
                />
                <span className="flex flex-col leading-tight">
                  <span className="text-sm font-semibold tracking-tight text-[var(--ink)]">
                    {d.country}
                  </span>
                  <span className="nums text-[11px] text-[var(--neutral-500)]">
                    {codeFor[d.country]}
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}