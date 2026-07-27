import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { SectionReveal } from "@/components/section-reveal";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Fraud Prevention Policy",
  description:
    "Paymit Limited Fraud Prevention Policy — how we detect, prevent, and respond to fraud to keep your money and data safe.",
  openGraph: {
    title: "Fraud Prevention Policy | Paymit",
    description:
      "Paymit Limited Fraud Prevention Policy — how we detect, prevent, and respond to fraud.",
    url: "https://paymit.co.uk/fraud-prevention-policy",
  },
  robots: {
    index: false,
  },
};

export default function FraudPreventionPolicyPage() {
  return (
    <>
      <Nav />
      <main className="w-full bg-white" style={{ paddingTop: "var(--headerNavOffset)" }}>
        {/* Hero */}
        <section className="w-full">
          <div
            className="mx-auto w-full md:flex justify-between items-center"
            style={{
              maxWidth: "var(--layoutMaxWidth)",
              padding: "var(--sectionPaddingY) var(--layoutMargin)",
            }}
          >
            <h1
              className="text-[80px] font-semibold leading-[78px] tracking-[-2.4px] text-[var(--colorTextPrimary)] max-lg:text-[68px] max-lg:leading-[66px] max-lg:tracking-[-2px]"
              style={{ textWrap: "balance", maxWidth: "720px" }}
            >
              Fraud Prevention{" "}
              <span className="text-[var(--colorTextActionPrimary)] block">Policy</span>
            </h1>
            <p
              className="mt-2.5 pt-10 text-4xl font-medium text-[var(--colorNeutral600)] pr-10"
              style={{ textWrap: "balance" }}
            >
              How we detect, prevent, and respond<br />to fraud to keep your money<br />and data safe.
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
            <Reveal targets="[data-reveal]" stagger={0.06} y={16} duration={0.45}>
            <div className="mt-10 flex flex-col gap-10 text-[15px] leading-[26px] text-[var(--colorNeutral600)]">
              <section data-reveal>
                <h2 className="mb-3 text-[22px] font-semibold text-[var(--colorTextPrimary)]">
                  1. Our Commitment
                </h2>
                <p>
                  Paymit Limited is committed to protecting our customers and
                  platform from fraudulent activities. We employ a multi-layered
                  approach to fraud prevention combining advanced technology,
                  regulatory compliance, and customer awareness.
                </p>
              </section>

              <section data-reveal>
                <h2 className="mb-3 text-[22px] font-semibold text-[var(--colorTextPrimary)]">
                  2. How We Detect Fraud
                </h2>
                <ul className="list-disc pl-5">
                  <li>
                    <strong className="font-medium text-[var(--colorTextPrimary)]">
                      Real-Time Monitoring:
                    </strong>{" "}
                    All transactions are monitored in real time using automated
                    systems that flag suspicious patterns.
                  </li>
                  <li>
                    <strong className="font-medium text-[var(--colorTextPrimary)]">
                      Identity Verification:
                    </strong>{" "}
                    We use industry-leading KYC (Know Your Customer) processes to
                    verify the identity of all users before they can send
                    transfers.
                  </li>
                  <li>
                    <strong className="font-medium text-[var(--colorTextPrimary)]">
                      Transaction Limits:
                    </strong>{" "}
                    Dynamic limits are applied based on your verification level,
                    transaction history, and risk profile.
                  </li>
                  <li>
                    <strong className="font-medium text-[var(--colorTextPrimary)]">
                      Anomaly Detection:
                    </strong>{" "}
                    Our systems analyze transaction behavior to detect unusual
                    patterns that may indicate fraud or unauthorized access.
                  </li>
                </ul>
              </section>

              <section data-reveal>
                <h2 className="mb-3 text-[22px] font-semibold text-[var(--colorTextPrimary)]">
                  3. Common Fraud Types We Prevent
                </h2>
                <ul className="list-disc pl-5">
                  <li>Identity theft and impersonation</li>
                  <li>Unauthorized account access</li>
                  <li>Transaction manipulation</li>
                  <li>Money laundering attempts</li>
                  <li>Phishing and social engineering attacks</li>
                </ul>
              </section>

              <section data-reveal>
                <h2 className="mb-3 text-[22px] font-semibold text-[var(--colorTextPrimary)]">
                  4. What You Can Do
                </h2>
                <ul className="list-disc pl-5">
                  <li>Keep your login credentials secure</li>
                  <li>Enable two-factor authentication (2FA)</li>
                  <li>Never share your account details with anyone</li>
                  <li>Report suspicious emails or messages claiming to be from
                    Paymit</li>
                  <li>Monitor your account regularly for unauthorized activity</li>
                  <li>Contact us immediately if you suspect any unauthorized
                    access</li>
                </ul>
              </section>

              <section data-reveal>
                <h2 className="mb-3 text-[22px] font-semibold text-[var(--colorTextPrimary)]">
                  5. Reporting Fraud
                </h2>
                <p>
                  If you believe you have been a victim of fraud or have
                  noticed suspicious activity on your account, please contact
                  us immediately:
                </p>
                <ul className="mt-3 list-disc pl-5">
                  <li>
                    Email:{" "}
                    <a
                      href="mailto:support@paymit.co.uk"
                      className="font-medium text-[var(--colorTextActionPrimary)] underline-offset-4 hover:underline"
                    >
                      support@paymit.co.uk
                    </a>
                  </li>
                  <li>Phone: +44 7577 220592</li>
                  <li>WhatsApp: +44 7577 220592</li>
                </ul>
                <p className="mt-3">
                  We will investigate all reports promptly and take appropriate
                  action to protect your account and funds.
                </p>
              </section>

              <section data-reveal>
                <h2 className="mb-3 text-[22px] font-semibold text-[var(--colorTextPrimary)]">
                  6. Account Suspension
                </h2>
                <p>
                  Paymit reserves the right to temporarily or permanently
                  suspend any account that is suspected of fraudulent activity,
                  pending investigation. We will notify you as soon as
                  reasonably possible if your account is suspended.
                </p>
              </section>

              <section data-reveal>
                <h2 className="mb-3 text-[22px] font-semibold text-[var(--colorTextPrimary)]">
                  7. Contact Us
                </h2>
                <p>
                  For questions about this Fraud Prevention Policy, please
                  contact us at{" "}
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
