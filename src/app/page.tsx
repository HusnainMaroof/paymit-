import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Partners } from "@/components/partners";
import { WhyChoosePaymit } from "@/components/why-choose-paymit";
import { HowItWorks } from "@/components/how-it-works";
import { Faq } from "@/components/faq";
import { MobileAppCTA } from "@/components/mobile-app-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Partners />
      <WhyChoosePaymit />
      <HowItWorks />
      <Faq />
      {/* <MobileAppCTA /> */}
      <Footer />
    </>
  );
}
