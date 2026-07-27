import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { SectionReveal } from "@/components/section-reveal";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Paymit Limited Terms of Service — rules and conditions governing use of our international money transfer platform and services.",
  openGraph: {
    title: "Terms of Service | Paymit",
    description:
      "Paymit Limited Terms of Service — rules and conditions governing use of our platform and services.",
    url: "https://paymit.co.uk/terms-of-service",
  },
  robots: {
    index: false,
  },
};

export default function TermsOfServicePage() {
  return (
    <>
      <Nav />
      <main className="w-full bg-white" style={{ paddingTop: "var(--headerNavOffset)" }}>
        {/* Hero */}
        <section className="w-full">
          <div
            className="mx-auto w-full flex justify-between items-center"
            style={{
              maxWidth: "var(--layoutMaxWidth)",
              padding: "var(--sectionPaddingY) var(--layoutMargin)",
            }}
          >
            <h1
              className="text-[80px] font-semibold leading-[78px] tracking-[-2.4px] text-[var(--colorTextPrimary)] max-lg:text-[68px] max-lg:leading-[66px] max-lg:tracking-[-2px]"
              style={{ textWrap: "balance", maxWidth: "720px" }}
            >
              Terms of{" "}
              <span className="text-[var(--colorTextActionPrimary)] block">Service</span>
            </h1>
            <p
              className="text-4xl font-medium text-[var(--colorNeutral600)] pr-10"
              style={{ textWrap: "balance" }}
            >
              Rules and conditions governing<br />the use of the Paymit<br />platform and services.
            </p>
          </div>
        </section>

        <section
          className="mx-auto w-full"
          style={{
            maxWidth: "var(--layoutMaxWidth)",
            padding: "0 var(--layoutMargin) var(--sectionPaddingY)",
          }}
        >
          <div className="mx-auto max-w-3xl">
            <p className="text-lg font-medium text-[var(--colorNeutral600)]">
              Last updated: 18 March 2024
            </p>
            <Reveal targets="[data-reveal]" stagger={0.08} y={16} duration={0.5}>
            <div className="mt-10 flex flex-col gap-10 text-[15px] leading-[26px] text-[var(--colorNeutral600)]">
              <section data-reveal>
                <h2 className="mb-3 text-[22px] font-semibold text-[var(--colorTextPrimary)]">
                  1. Introduction
                </h2>
                <p>
                  Welcome to Paymit ("Website"). These Terms of
                  Service ("Terms") govern your access and use of the
                  Paymit platform. Please read them carefully before using our
                  services.
                </p>
                <p className="mt-3">
                  By using Paymit, you agree to comply with and be bound by
                  these Terms. If you do not agree, please do not use our
                  services.
                </p>
              </section>

              <section data-reveal>
                <h2 className="mb-3 text-[22px] font-semibold text-[var(--colorTextPrimary)]">
                  2. Use of the Website
                </h2>
                <p>
                  By accessing or using our website, you agree to these Terms.
                  You may not use our services for any unlawful or fraudulent
                  purposes.
                </p>
              </section>

              <section data-reveal>
                <h2 className="mb-3 text-[22px] font-semibold text-[var(--colorTextPrimary)]">
                  3. Intellectual Property
                </h2>
                <p>
                  All content, including text, images, logos, graphics, and
                  software on this website, is the property of Paymit Limited
                  and is protected by copyright, trademark, and other
                  intellectual property laws.
                </p>
              </section>

              <section data-reveal>
                <h2 className="mb-3 text-[22px] font-semibold text-[var(--colorTextPrimary)]">
                  4. Limitation of Liability
                </h2>
                <p>
                  Paymit Limited shall not be held liable for any indirect,
                  incidental, or consequential damages arising from the use of
                  this website or our services. While we strive to keep
                  information up to date, we make no warranties regarding
                  accuracy or completeness.
                </p>
              </section>

              <section data-reveal>
                <h2 className="mb-3 text-[22px] font-semibold text-[var(--colorTextPrimary)]">
                  5. Privacy
                </h2>
                <p>
                  Your use of this website is also governed by our{" "}
                  <a
                    href="/privacy-policy"
                    className="font-medium text-[var(--colorTextActionPrimary)] underline-offset-4 hover:underline"
                  >
                    Privacy Policy
                  </a>
                  . Please review it to understand how we handle your personal
                  data.
                </p>
              </section>

              <section data-reveal>
                <h2 className="mb-3 text-[22px] font-semibold text-[var(--colorTextPrimary)]">
                  6. Third-Party Links
                </h2>
                <p>
                  This website may contain links to third-party websites. We are
                  not responsible for the content, policies, or practices of any
                  external sites.
                </p>
              </section>

              <section data-reveal>
                <h2 className="mb-3 text-[22px] font-semibold text-[var(--colorTextPrimary)]">
                  7. Changes to These Terms
                </h2>
                <p>
                  We reserve the right to update these Terms at any time.
                  Continued use of the website after changes are posted
                  constitutes acceptance of the updated Terms.
                </p>
              </section>

              <section data-reveal>
                <h2 className="mb-3 text-[22px] font-semibold text-[var(--colorTextPrimary)]">
                  8. Contact Us
                </h2>
                <p>
                  If you have any questions about these Terms, please contact
                  us at{" "}
                  <a
                    href="mailto:support@paymit.co.uk"
                    className="font-medium text-[var(--colorTextActionPrimary)] underline-offset-4 hover:underline"
                  >
                    support@paymit.co.uk
                  </a>
                  .
                </p>
              </section>
            </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
