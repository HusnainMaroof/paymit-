import { HeroSection } from "./hero-section";
import { CorridorsSection } from "./corridors-section";
import { WhyChooseSection } from "./why-choose-section";
import { HowItWorksSection } from "./how-it-works-section";
import { FaqSection } from "./faq-section";
import { MobileAppSection } from "./mobile-app-section";

/*
  Page order takes its cue from link.com's structure:
  1. Hero           (wash)  — title + converter (focal checkout card)
  2. Corridors      (surface) — merchant-strip analogue
  3. Why choose     (offset) — value-props trio
  4. How it works   (surface) — 3-step grid
  5. FAQ            (offset) — accordion
  6. Mobile app     (dark)   — dark band + paired CTAs (final action)
  Alternating surface / offset rhythm, capped with the dark ink band — Link's
  "white → white/95 → dark band → white footer" cadence.
*/
export function LandingPage() {
  return (
    <>
      <HeroSection />
      <CorridorsSection />
      <WhyChooseSection />
      <HowItWorksSection />
      <FaqSection />
      <MobileAppSection />
    </>
  );
}