import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Privacy Policy | Paymit",
  description:
    "Paymit Limited Privacy Policy — how we collect, use, and protect your personal data.",
};

export default function PrivacyPolicyPage() {
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
              Privacy{" "}
              <span className="text-[var(--colorTextActionPrimary)]">Policy</span>
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
                  This Privacy Policy explains how Paymit Limited (&quot;Paymit&quot;,
                  &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses, stores,
                  shares, and protects your personal information when you use
                  our website, mobile application, and related services
                  (collectively, the &quot;Services&quot;).
                </p>
                <p className="mt-3">
                  By using our Services, you acknowledge that you have read and
                  understood this Privacy Policy.
                </p>
              </section>

              <section>
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
              </section>

              <section>
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
              </section>

              <section>
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
              </section>

              <section>
                <h2 className="mb-3 text-[22px] font-semibold text-[var(--colorTextPrimary)]">
                  5. Data Retention
                </h2>
                <p>
                  We retain your personal data for as long as necessary to
                  fulfil the purposes outlined in this policy, comply with
                  legal obligations, resolve disputes, and enforce our
                  agreements.
                </p>
              </section>

              <section>
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
              </section>

              <section>
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
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
