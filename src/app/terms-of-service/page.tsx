import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Terms of Service | Paymit",
  description:
    "Paymit Limited Terms of Service — rules and conditions governing use of our platform.",
};

export default function TermsOfServicePage() {
  return (
    <>
      <Nav />
      <main className="w-full bg-white" style={{ paddingTop: "var(--headerNavOffset)" }}>
        <section
          className="mx-auto w-full"
          style={{
            maxWidth: "var(--layoutMaxWidth)",
            padding: "var(--sectionPaddingY) var(--layoutMargin)",
          }}
        >
          <div className="mx-auto max-w-3xl">
            <h1
              className="text-[44px] font-semibold leading-[1.1] tracking-[-1.2px] text-[var(--colorTextPrimary)] max-lg:text-[36px] max-lg:tracking-[-1px]"
              style={{ textWrap: "balance" }}
            >
              Terms of{" "}
              <span className="text-[var(--colorTextActionPrimary)]">Service</span>
            </h1>
            <p className="mt-4 text-[14px] text-[var(--colorNeutral500)]">
              Last updated: 18 March 2024
            </p>
            <div className="mt-10 flex flex-col gap-10 text-[15px] leading-[26px] text-[var(--colorNeutral600)]">
              <section>
                <h2 className="mb-3 text-[22px] font-semibold text-[var(--colorTextPrimary)]">
                  1. Introduction
                </h2>
                <p>
                  Welcome to Paymit (&quot;Website&quot;). These Terms of
                  Service (&quot;Terms&quot;) govern your access and use of the
                  Paymit platform. Please read them carefully before using our
                  services.
                </p>
                <p className="mt-3">
                  By using Paymit, you agree to comply with and be bound by
                  these Terms. If you do not agree, please do not use our
                  services.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-[22px] font-semibold text-[var(--colorTextPrimary)]">
                  2. Use of the Website
                </h2>
                <p>
                  By accessing or using our website, you agree to these Terms.
                  You may not use our services for any unlawful or fraudulent
                  purposes.
                </p>
              </section>

              <section>
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

              <section>
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

              <section>
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

              <section>
                <h2 className="mb-3 text-[22px] font-semibold text-[var(--colorTextPrimary)]">
                  6. Third-Party Links
                </h2>
                <p>
                  This website may contain links to third-party websites. We are
                  not responsible for the content, policies, or practices of any
                  external sites.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-[22px] font-semibold text-[var(--colorTextPrimary)]">
                  7. Changes to These Terms
                </h2>
                <p>
                  We reserve the right to update these Terms at any time.
                  Continued use of the website after changes are posted
                  constitutes acceptance of the updated Terms.
                </p>
              </section>

              <section>
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
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
