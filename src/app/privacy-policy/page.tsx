import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { SectionReveal } from "@/components/section-reveal";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Paymit Limited Privacy Policy — how we collect, use, store, and protect your personal data in compliance with UK GDPR and data protection laws.",
  openGraph: {
    title: "Privacy Policy | Paymit",
    description:
      "Paymit Limited Privacy Policy — how we collect, use, store, and protect your personal data.",
    url: "https://paymit.co.uk/privacy-policy",
  },
  robots: {
    index: false,
  },
};

export default function PrivacyPolicyPage() {
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
              Privacy{" "}
              <span className="text-[var(--colorTextActionPrimary)] block">Policy</span>
            </h1>
            <p
              className="text-4xl font-medium text-[var(--colorNeutral600)] pr-10"
              style={{ textWrap: "balance" }}
            >
              How we collect, use, and protect<br />your personal data when you<br />use our services.
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
<div className="mt-10 flex flex-col gap-10 text-[15px] leading-[26px] text-[var(--colorNeutral600)]">
              <Reveal targets="[data-reveal]" stagger={0.08} y={16} duration={0.5}>
              {[
                <section key="intro" data-reveal>
                  <h2 className="mb-3 text-[22px] font-semibold text-[var(--colorTextPrimary)]">
                    1. Introduction
                  </h2>
                  <p>
                    This Privacy Policy explains how Paymit Limited ("Paymit",
                    "we", "us", or "our") collects, uses, stores,
                    shares, and protects your personal information when you use
                    our website, mobile application, and related services
                    (collectively, the "Services").
                  </p>
                  <p className="mt-3">
                    By using our Services, you acknowledge that you have read and
                    understood this Privacy Policy.
                  </p>
                </section>,
                <section key="data" data-reveal>
                  <h2 className="mb-3 text-[22px] font-semibold text-[var(--colorTextPrimary)]">
                    2. Data We Collect
                  </h2>
                  <p className="mb-3">
                    We may collect the following categories of personal data:
                  </p>
                  <ul className="list-disc pl-5">
                    <li>
                      <strong className="font-medium text-[var(--colorTextPrimary)]">
                        Identification Information:
                      </strong>{" "}
                      Full name, date of birth, nationality, and government-issued
                      ID numbers (e.g., passport, driving licence).
                    </li>
                    <li>
                      <strong className="font-medium text-[var(--colorTextPrimary)]">
                        Contact Information:
                      </strong>{" "}
                      Email address, phone number, and residential address.
                    </li>
                    <li>
                      <strong className="font-medium text-[var(--colorTextPrimary)]">
                        Financial Information:
                      </strong>{" "}
                      Bank account details, card details, and transaction history.
                    </li>
                    <li>
                      <strong className="font-medium text-[var(--colorTextPrimary)]">
                        Technical Information:
                      </strong>{" "}
                      IP address, device type, browser type, operating system, and
                      usage data.
                    </li>
                    <li>
                      <strong className="font-medium text-[var(--colorTextPrimary)]">
                        KYC Documents:
                      </strong>{" "}
                      Proof of identity and proof of address documents submitted
                      for verification.
                    </li>
                  </ul>
                </section>,
                <section key="usage" data-reveal>
                  <h2 className="mb-3 text-[22px] font-semibold text-[var(--colorTextPrimary)]">
                    3. How We Use Your Data
                  </h2>
                  <p>We use your personal data for the following purposes:</p>
                  <ul className="mt-3 list-disc pl-5">
                    <li>To verify your identity (KYC/AML checks)</li>
                    <li>To process and manage your money transfers</li>
                    <li>To communicate with you regarding your transactions</li>
                    <li>To comply with legal and regulatory obligations</li>
                    <li>To detect and prevent fraud, money laundering, and other
                      illegal activities</li>
                    <li>To improve and personalise our Services</li>
                    <li>To send you marketing communications (with your consent)</li>
                  </ul>
                </section>,
                <section key="sharing" data-reveal>
                  <h2 className="mb-3 text-[22px] font-semibold text-[var(--colorTextPrimary)]">
                    4. Data Sharing
                  </h2>
                  <p>
                    We may share your personal data with:
                  </p>
                  <ul className="mt-3 list-disc pl-5">
                    <li>Regulatory and law enforcement authorities</li>
                    <li>Financial institutions and payment partners</li>
                    <li>Identity verification and fraud prevention service providers</li>
                    <li>Technology and hosting service providers</li>
                  </ul>
                  <p className="mt-3">
                    We do not sell your personal data to third parties.
                  </p>
                </section>,
                <section key="retention" data-reveal>
                  <h2 className="mb-3 text-[22px] font-semibold text-[var(--colorTextPrimary)]">
                    5. Data Retention
                  </h2>
                  <p>
                    We retain your personal data for as long as necessary to
                    fulfil the purposes outlined in this policy, comply with
                    legal obligations, resolve disputes, and enforce our
                    agreements.
                  </p>
                </section>,
                <section key="rights" data-reveal>
                  <h2 className="mb-3 text-[22px] font-semibold text-[var(--colorTextPrimary)]">
                    6. Your Rights
                  </h2>
                  <p>Under applicable data protection laws, you have the right to:</p>
                  <ul className="mt-3 list-disc pl-5">
                    <li>Access the personal data we hold about you</li>
                    <li>Request correction of inaccurate data</li>
                    <li>Request deletion of your data (subject to legal requirements)</li>
                    <li>Object to or restrict processing of your data</li>
                    <li>Data portability</li>
                    <li>Withdraw consent at any time</li>
                  </ul>
                </section>,
                <section key="contact" data-reveal>
                  <h2 className="mb-3 text-[22px] font-semibold text-[var(--colorTextPrimary)]">
                    7. Contact Us
                  </h2>
                  <p>
                    If you have questions about this Privacy Policy or wish to
                    exercise your rights, please contact us at{" "}
                    <a
                      href="mailto:support@paymit.co.uk"
                      className="font-medium text-[var(--colorTextActionPrimary)] underline-offset-4 hover:underline"
                    >
                      support@paymit.co.uk
                    </a>
                    .
                  </p>
                </section>,
              ]}
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
