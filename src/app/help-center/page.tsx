import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { SectionReveal } from "@/components/section-reveal";

export const metadata = {
  title: "Help Centre | Paymit",
  description:
    "Find answers to common questions about Paymit — getting started, payments, ID verification, and more.",
};

const faqSections = [
  {
    title: "Getting Started",
    questions: [
      {
        q: "What is Paymit?",
        a: "Paymit is a new digital platform for instant international money transfers. It brings the traditional 'brick and mortar' money remittance experience into the digital age.",
      },
      {
        q: "What do I need to sign up?",
        a: "To get started, all you need to do is enter your name, email, and phone number. You will be asked to confirm your email and mobile number before you can start sending money.",
      },
      {
        q: "Is Paymit safe to use?",
        a: "Yes! Security is our top priority. Paymit uses industry-leading encryption and multi-factor authentication to protect your account and personal information. We are also fully regulated by the UK Financial Conduct Authority (FCA) under the Payment Services Regulation 2017.",
      },
    ],
  },
  {
    title: "Making a Payment",
    questions: [
      {
        q: "How do I create a transfer?",
        a: "Simply follow the steps below:\n\n1. Select the destination country\n2. Choose a payment method: Bank Transfer, Cash Pickup, or Mobile Wallet\n3. Enter the amount you want to send\n4. Add the recipient's details\n5. Review the exchange rate and fees\n6. Confirm your transfer",
      },
      {
        q: "How long does the payment take?",
        a: "It depends on the destination country and payment method. Most transfers are completed within 1-2 business days. Cash pickup and mobile wallet transfers are often available within minutes.",
      },
      {
        q: "What are the fees?",
        a: "Paymit offers transparent, competitive fees. There are no hidden charges — you'll see the exact fee before confirming your transfer. Your first transfer is fee-free.",
      },
    ],
  },
  {
    title: "ID Verification",
    questions: [
      {
        q: "Why do I need to verify my identity?",
        a: "As a regulated payment service provider, we are required by law to verify the identity of our customers to prevent fraud and money laundering.",
      },
      {
        q: "What documents can I use?",
        a: "You can verify your identity using a valid passport, UK driving licence, or national identity card.",
      },
      {
        q: "How long does verification take?",
        a: "Most verifications are completed instantly. In some cases, it may take up to 24 hours if additional review is needed.",
      },
    ],
  },
  {
    title: "Account & Security",
    questions: [
      {
        q: "How do I reset my password?",
        a: "Click 'Forgot Password' on the login page, enter your registered email, and follow the instructions sent to your inbox.",
      },
      {
        q: "How do I enable two-factor authentication (2FA)?",
        a: "You can enable 2FA in your account settings under Security. We support both authenticator apps and SMS verification.",
      },
      {
        q: "What should I do if I notice suspicious activity?",
        a: "Contact our support team immediately at support@paymit.co.uk or call +44 7723 957734. We'll secure your account and investigate right away.",
      },
    ],
  },
  {
    title: "Contact & Support",
    questions: [
      {
        q: "How can I contact support?",
        a: "You can reach us via:\n• Email: support@paymit.co.uk\n• Phone: +44 7723 957734\n• WhatsApp: +44 7723 957734\n• Contact form on our website",
      },
      {
        q: "What are your support hours?",
        a: "Our support team is available Monday to Friday, 9:00 AM to 6:00 PM GMT. We aim to respond to all enquiries within 24 hours.",
      },
    ],
  },
];

export default function HelpCenterPage() {
  return (
    <>
      <Nav />
      <main className="w-full bg-white" style={{ paddingTop: "var(--headerNavOffset)" }}>
        {/* Hero */}
        <section
          className="mx-auto w-full"
          style={{
            maxWidth: "var(--layoutMaxWidth)",
            padding: "var(--sectionPaddingY) var(--layoutMargin)",
          }}
        >
          <div className="mx-auto max-w-3xl text-center">
            <h1
              className="text-[56px] font-semibold leading-[54px] tracking-[-1.7px] text-[var(--colorTextPrimary)] max-lg:text-[44px] max-lg:leading-[42px] max-lg:tracking-[-1.3px]"
              style={{ textWrap: "balance" }}
            >
              Help{" "}
              <span className="text-[var(--colorTextActionPrimary)]">Centre</span>
            </h1>
            <p
              className="mt-6 text-[18px] font-medium leading-[28px] text-[var(--colorNeutral600)]"
              style={{ textWrap: "balance" }}
            >
              Find answers to common questions or get in touch with our team.
            </p>
          </div>
        </section>

        {/* FAQ Sections */}
        <SectionReveal>
          <section
          className="mx-auto w-full"
          style={{
            maxWidth: "var(--layoutMaxWidth)",
            padding: "0 var(--layoutMargin) var(--sectionPaddingY)",
          }}
        >
          <div className="flex flex-col gap-12">
            {faqSections.map((section) => (
              <div key={section.title}>
                <h2
                  className="text-[28px] font-semibold text-[var(--colorTextPrimary)] max-md:text-[24px]"
                  style={{ textWrap: "balance" }}
                >
                  {section.title}
                </h2>
                <div className="mt-6 flex flex-col gap-4">
                  {section.questions.map((item) => (
                    <details
                      key={item.q}
                      className="group rounded-[var(--borderRadiusMd)] border transition-all duration-200"
                      style={{ borderColor: "var(--colorBorderLight)" }}
                    >
                      <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-5 text-[16px] font-semibold text-[var(--colorTextPrimary)] select-none">
                        {item.q}
                        <svg
                          className="size-5 shrink-0 transition-transform duration-200 group-open:rotate-180"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{ color: "var(--colorNeutral400)" }}
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </summary>
                      <div
                        className="border-t px-6 pb-5 pt-4 text-[15px] leading-[26px] text-[var(--colorNeutral600)]"
                        style={{ borderColor: "var(--colorBorderLight)" }}
                      >
                        {item.a.split("\n").map((line, i) => (
                          <span key={i}>
                            {line}
                            {i < item.a.split("\n").length - 1 && <br />}
                          </span>
                        ))}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
          </section>
        </SectionReveal>

        {/* Contact CTA */}
        <section
          className="w-full"
          style={{ backgroundColor: "var(--colorNeutral50)" }}
        >
          <div
            className="mx-auto w-full"
            style={{
              maxWidth: "var(--layoutMaxWidth)",
              padding: "var(--sectionPaddingY) var(--layoutMargin)",
            }}
          >
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-[32px] font-semibold text-[var(--colorTextPrimary)] max-md:text-[28px]">
                Still have questions?
              </h2>
              <p className="mt-3 text-[16px] text-[var(--colorNeutral600)]">
                Our support team is ready to help.
              </p>
              <a
                href="/contact-us"
                className="btn-morph mt-8 inline-flex h-11 items-center justify-center gap-2 rounded-[var(--borderRadiusSm)] px-6 text-[14px] font-medium text-white transition-all duration-200 hover:scale-[1.03] hover:bg-[var(--colorBrand850)] hover:shadow-md hover:shadow-[var(--colorBrand300)]/30"
                style={{ backgroundColor: "var(--colorBrand900)" }}
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
