import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { SectionReveal } from "@/components/section-reveal";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Mobile App",
  description:
    "Download the Paymit app for fast, secure international money transfers on the go. Available on iOS and Android. Send money to 9+ countries from your phone.",
  openGraph: {
    title: "Mobile App | Paymit",
    description:
      "Download the Paymit app for fast, secure international money transfers on the go. Available on iOS and Android.",
    url: "https://paymit.co.uk/mobile-app",
  },
  twitter: {
    title: "Mobile App | Paymit",
    description:
      "Download the Paymit app for fast, secure international money transfers on the go. Available on iOS and Android.",
  },
};

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: "Instant Transfers",
    description:
      "Send money in seconds with same-day delivery to bank accounts and cash pickup locations worldwide.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      </svg>
    ),
    title: "Bank-Grade Security",
    description:
      "Biometric login, 2-factor approval, and full encryption keep your money and data safe.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: "Live Tracking",
    description:
      "Get real-time push notifications from 'Sent' to 'Received' — never wonder where your money is.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    title: "Great Rates",
    description:
      "Wholesale FX rates and flat fees — no surprises. Your first transfer is fee-free.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Refer & Earn",
    description:
      "Invite friends and earn £5 for every referral who sends £100 or more on their first transfer.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 11 18-5v12L3 13v-2z" />
        <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
      </svg>
    ),
    title: "9+ Countries",
    description:
      "Send to Nigeria, Ghana, Gambia, Cameroon, Senegal, Zambia, Pakistan, India, Bangladesh and more.",
  },
];

const corridors = [
  { country: "Nigeria", currency: "NGN", iso: "ng" },
  { country: "Ghana", currency: "GHS", iso: "gh" },
  { country: "Gambia", currency: "GMD", iso: "gm" },
  { country: "Cameroon", currency: "XAF", iso: "cm" },
  { country: "Senegal", currency: "XOF", iso: "sn" },
  { country: "Zambia", currency: "ZMW", iso: "zm" },
  { country: "Pakistan", currency: "PKR", iso: "pk" },
  { country: "India", currency: "INR", iso: "in" },
  { country: "Bangladesh", currency: "BDT", iso: "bd" },
];

export default function MobileAppPage() {
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
              Send Money{" "}
              <span className="text-[var(--colorTextActionPrimary)] block">Anywhere</span>
            </h1>
            <p
              className="mt-2.5 pt-10 text-4xl font-medium text-[var(--colorNeutral600)] pr-10"
              style={{ textWrap: "balance" }}
            >
              Download the Paymit app for <br /> fast, secure international money <br /> transfers on the go.
            </p>
          </div>
        </section>

        {/* Features */}
        <SectionReveal>
          <section className="w-full" style={{ backgroundColor: "var(--colorNeutral50)" }}>
          <div
            className="mx-auto w-full"
            style={{
              maxWidth: "var(--layoutMaxWidth)",
              padding: "var(--sectionPaddingY) var(--layoutMargin)",
            }}
          >
            <h2 data-reveal className="text-[36px] font-semibold text-[var(--colorTextPrimary)] max-md:text-[28px]" style={{ textWrap: "balance" }}>
              Everything You Need
            </h2>
            <Reveal targets="[data-reveal]" stagger={0.06} y={16} duration={0.45}>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex flex-col rounded-[var(--borderRadiusMd)] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  style={{ boxShadow: "var(--box-shadow-card)" }}
                >
                  <div data-reveal
                    className="flex size-12 items-center justify-center rounded-full"
                    style={{ backgroundColor: "var(--colorBrand25)" }}
                  >
                    <div className="size-5" style={{ color: "var(--colorBrand300)" }}>
                      {feature.icon}
                    </div>
                  </div>
                  <h3 data-reveal className="mt-4 text-[18px] font-semibold text-[var(--colorTextPrimary)]">
                    {feature.title}
                  </h3>
                  <p data-reveal className="mt-2 text-[14px] leading-[22px] text-[var(--colorNeutral600)]">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
            </Reveal>
          </div>
          </section>
        </SectionReveal>

        {/* Supported Countries */}
        <SectionReveal>
          <section className="mx-auto w-full" style={{ maxWidth: "var(--layoutMaxWidth)", padding: "var(--sectionPaddingY) var(--layoutMargin)" }}>
          <h2 data-reveal className="text-[36px] font-semibold text-[var(--colorTextPrimary)] max-md:text-[28px]">
            Send to <span className="text-[var(--colorTextActionPrimary)]">9+ Countries</span>
          </h2>
          <Reveal targets="[data-reveal]" stagger={0.05} y={14} duration={0.4}>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3">
            {corridors.map((c) => (
              <a
                key={c.iso}
                data-reveal
                className="flex items-center gap-3 rounded-[var(--borderRadiusMd)] border p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ borderColor: "var(--colorBorderLight)" }}
              >
                <img
                  src={`https://flagcdn.com/w80/${c.iso}.png`}
                  alt={`${c.country} flag`}
                  className="size-8 rounded-[2px] object-cover"
                  loading="lazy"
                />
                <div>
                  <span className="text-[15px] font-semibold text-[var(--colorTextPrimary)]">
                    {c.country}
                  </span>
                  <span className="block text-[12px] text-[var(--colorNeutral500)]">
                    {c.currency}
                  </span>
                </div>
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
