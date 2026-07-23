import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container, Section } from "@/components/layout/section";
import { Reveal } from "@/components/layout/reveal";
import { SectionHeading } from "@/components/layout/section";
import { faqs } from "@/lib/site";

/*
  FAQ — link.com's accordion structure: a hairline above each row, an upright
  numeral indicator (mono), chevron rotates 180° on toggle, body fade/height
  reveal ~220ms expo-out. Borders replace a card wrapper — the rhythm of rows
  becomes the visual identity.
*/
export function FaqSection() {
  return (
    <Section id="faq" variant="offset">
      <Container className="max-w-3xl py-20 md:py-28">
        <Reveal>
          <SectionHeading
            title="Frequently asked"
            highlight="questions"
            description="Everything you need to know about sending money with Paymit."
          />
        </Reveal>

        <Reveal as="div" delay={80} className="mt-12">
          <Accordion>
            {/* top hairline opening the list */}
            <div className="border-t border-[var(--neutral-200)]" aria-hidden />
            {faqs.map((faq, i) => (
              <AccordionItem
                key={faq.q}
                value={`faq-${i}`}
                className="border-b border-[var(--neutral-200)]"
              >
                <AccordionTrigger className="group/acc flex items-start justify-between gap-4 py-5 text-left text-[1.05rem] font-medium leading-snug tracking-tight text-[var(--ink)] transition-colors duration-[var(--dur-fast)] hover:text-[var(--brand-900)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 rounded">
                  <span className="flex items-baseline gap-4">
                    <span
                      className="nums mt-[-2px] text-xs text-[var(--neutral-400)]"
                      aria-hidden
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {faq.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pl-[2.35rem] text-[0.95rem] leading-[1.65] text-[var(--neutral-600)]">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </Container>
    </Section>
  );
}