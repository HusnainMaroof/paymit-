import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { SectionReveal } from "@/components/section-reveal";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Paymit for support. Email us at support@paymit.co.uk or reach us by phone at (+44)7577 220592. We're here to help with your money transfer questions.",
  openGraph: {
    title: "Contact Us | Paymit",
    description:
      "Get in touch with Paymit for support. Email us at support@paymit.co.uk or reach us by phone.",
    url: "https://paymit.co.uk/contact-us",
  },
  twitter: {
    title: "Contact Us | Paymit",
    description:
      "Get in touch with Paymit for support. Email us at support@paymit.co.uk or reach us by phone.",
  },
};

const contactChannels = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    label: "Email",
    value: "support@paymit.co.uk",
    href: "mailto:support@paymit.co.uk",
    note: "We aim to respond within 24 hours",
    color: "#0078D4",
    bgColor: "rgba(0, 120, 212, 0.1)",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    label: "WhatsApp",
    value: "+44 7577 220592",
    href: "https://wa.me/447577220592",
    note: "Quick replies during business hours",
    color: "#25D366",
    bgColor: "rgba(37, 211, 102, 0.1)",
  },
];

export default function ContactUsPage() {
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
              Contact{" "}
              <span className="text-[var(--colorTextActionPrimary)] block">Us</span>
            </h1>
            <p
              className="mt-2.5 pt-10 text-4xl font-medium text-[var(--colorNeutral600)] pr-10"
              style={{ textWrap: "balance" }}
            >
              Have a question or need help? <br /> We&apos;re here for you via email <br /> or WhatsApp.
            </p>
          </div>
        </section>

        {/* Contact Cards */}
        <SectionReveal>
          <section
          className="mx-auto w-full"
          style={{
            maxWidth: "var(--layoutMaxWidth)",
            padding: "0 var(--layoutMargin) var(--sectionPaddingY)",
          }}
        >
          <Reveal targets="[data-reveal]" stagger={0.08} y={16} duration={0.5}>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 max-w-md mx-auto">
            {contactChannels.map((channel) => (
              <a
                key={channel.label}
                data-reveal
                href={channel.href}
                target={channel.label === "WhatsApp" ? "_blank" : undefined}
                rel={channel.label === "WhatsApp" ? "noopener noreferrer" : undefined}
                className="group flex flex-col rounded-[var(--borderRadiusMd)] border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ borderColor: "var(--colorBorderLight)" }}
              >
                <div
                  className="flex size-12 items-center justify-center rounded-full"
                  style={{ backgroundColor: channel.bgColor }}
                >
                  <div
                    className="size-5"
                    style={{ color: channel.color }}
                  >
                    {channel.icon}
                  </div>
                </div>
                <h3 className="mt-4 text-[18px] font-semibold text-[var(--colorTextPrimary)]">
                  {channel.label}
                </h3>
                <p className="mt-1 text-[14px] font-medium" style={{ color: channel.color }}>
                  {channel.value}
                </p>
                <p className="mt-2 text-[13px] text-[var(--colorNeutral500)]">
                  {channel.note}
                </p>
              </a>
            ))}
          </div>
          </Reveal>
          </section>
        </SectionReveal>
      </main>
      <Footer />
    </>
  );
}
