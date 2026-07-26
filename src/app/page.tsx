import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Partners } from "@/components/partners";
import { WhyChoosePaymit } from "@/components/why-choose-paymit";
import { HowItWorks } from "@/components/how-it-works";
import { Faq } from "@/components/faq";
import { MobileAppCTA } from "@/components/mobile-app-cta";
import { Footer } from "@/components/footer";
import { SectionReveal } from "@/components/section-reveal";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Partners />
      <SectionReveal>
        <WhyChoosePaymit />
      </SectionReveal>
      <SectionReveal>
        <HowItWorks />
      </SectionReveal>
      <SectionReveal>
        <Faq />
      </SectionReveal>
      <MobileAppCTA />
      <Footer />
    </>
  );
}
