import { TrendingUp, Rocket, Heart } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/layout/section";
import { Reveal } from "@/components/layout/reveal";

/*
  Why choose — value-props trio (link.com's "Check out faster / Pay your way /
  Shop with confidence"). The big mono stat is the focal figure per card
  (link.com formats transactional numerals in MatterMono); a single small
  lucide glyph at the top right provides the scannable category cue. No
  stacked eyebrow + stat + stat-unit + ring — that was cards-in-cards.
  Cards float on a subtle border + 4% blue-cast shadow; hover translates
  -3px, 220ms expo-out. Stagger 50ms.
*/
type Reason = {
  icon: typeof TrendingUp;
  stat: string;
  unit: string;
  title: string;
  description: string;
};

const reasons: Reason[] = [
  {
    icon: TrendingUp,
    stat: "£2.13",
    unit: "saved per £100 vs market avg",
    title: "Best rates, bigger smiles",
    description:
      "On average, customers save £2.13 for every £100 sent versus the market average.",
  },
  {
    icon: Rocket,
    stat: "~1 min",
    unit: "to recipient, on average",
    title: "Speed-to-hand",
    description:
      "The average transfer reaches the recipient in around one minute.",
  },
  {
    icon: Heart,
    stat: "70%+",
    unit: "return within the same month",
    title: "Repeat love rate",
    description:
      "Over 70% of customers make another transfer within the same month.",
  },
];

export function WhyChooseSection() {
  return (
    <Section variant="offset">
      <Container className="py-20 md:py-28">
        <Reveal>
          <SectionHeading
            title="Why choose"
            highlight="Paymit"
            description="Trusted by thousands for fast, affordable, and reliable transfers."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {reasons.map((reason, i) => (
            <Reveal
              as="article"
              key={reason.title}
              delay={i * 50}
              className="
                group relative flex flex-col rounded-xl border border-[var(--neutral-200)]
                bg-white p-7 transition-[transform,border-color,box-shadow] duration-[var(--dur-default)]
                [transition-timing-function:var(--ease-out-expo)]
                hover:-translate-y-1 hover:border-[var(--neutral-300)]
                focus-within:-translate-y-1
              "
              style={{
                boxShadow: "0 1px 2px rgba(15,23,42,.04), 0 6px 16px rgba(15,23,42,.04)",
              }}
            >
              {/* Single small lucide glyph — top-aligned category cue */}
              <div
                className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--brand-25)] ring-1 ring-inset ring-[var(--brand-100)]"
                aria-hidden
              >
                <reason.icon
                  className="h-5 w-5 text-[var(--brand-300)]"
                  strokeWidth={1.75}
                />
              </div>

              {/* Focal mono figure + tiny unit caption */}
              <div className="flex items-baseline gap-2">
                <span
                  className="nums text-[clamp(2rem,4vw,2.5rem)] leading-none text-[var(--ink)]"
                  style={{ fontWeight: 500 }}
                >
                  {reason.stat}
                </span>
              </div>
              <p className="mt-2 text-xs uppercase tracking-[0.1em] text-[var(--neutral-500)]">
                {reason.unit}
              </p>

              <h3 className="mt-6 text-lg font-medium tracking-tight text-[var(--ink)]">
                {reason.title}
              </h3>
              <p className="mt-2 text-[0.95rem] leading-[1.55] text-[var(--neutral-600)]">
                {reason.description}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}