import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { SectionReveal } from "@/components/section-reveal";

export const metadata = {
  title: "Mobile App | Paymit",
  description:
    "Download the Paymit app for fast, secure international money transfers on the go. Available on iOS and Android.",
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
        <section
          className="mx-auto w-full"
          style={{
            maxWidth: "var(--layoutMaxWidth)",
            padding: "var(--sectionPaddingY) var(--layoutMargin)",
          }}
        >
          <div className="flex flex-col items-center gap-12 md:flex-row md:items-center md:justify-between">
            <div className="max-w-lg text-center md:text-left">
              <h1
                className="text-[56px] font-semibold leading-[54px] tracking-[-1.7px] text-[var(--colorTextPrimary)] max-lg:text-[44px] max-lg:leading-[42px]"
                style={{ textWrap: "balance" }}
              >
                Send Money{" "}
                <span className="text-[var(--colorTextActionPrimary)]">
                  Anywhere
                </span>
              </h1>
              <p
                className="mt-6 text-[18px] font-medium leading-[28px] text-[var(--colorNeutral600)]"
                style={{ textWrap: "balance" }}
              >
                The Paymit app makes international money transfers fast, secure,
                and affordable — all from your phone.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
                <a
                  href="https://apps.apple.com/gb/app/paymit/id6751227334"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex h-14 items-center gap-3 rounded-[var(--borderRadiusMd)] bg-[var(--colorNeutral100)] px-6 transition-all duration-200 hover:scale-[1.03] hover:shadow-lg"
                >
                  <svg className="size-6" viewBox="0 0 24 24" fill="var(--colorBrand900)">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <div className="flex flex-col items-start">
                    <span className="text-[10px] leading-tight text-neutral-500">Download on the</span>
                    <span className="text-[16px] font-semibold leading-tight text-[var(--colorBrand900)]">App Store</span>
                  </div>
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.paymit.transfer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex h-14 items-center gap-3 rounded-[var(--borderRadiusMd)] bg-[var(--colorNeutral100)] px-6 transition-all duration-200 hover:scale-[1.03] hover:shadow-lg"
                >
                  <svg className="size-6" viewBox="0 0 24 24" fill="var(--colorBrand900)">
                    <path d="M3.609 1.814 13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893 2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199 2.302 2.302a1 1 0 0 1 0 1.38l-2.302 2.302L15.396 12l2.302-2.492zM5.864 2.658 16.8 8.99l-2.302 2.302L5.864 2.658z" />
                  </svg>
                  <div className="flex flex-col items-start">
                    <span className="text-[10px] leading-tight text-neutral-500">Get it on</span>
                    <span className="text-[16px] font-semibold leading-tight text-[var(--colorBrand900)]">Google Play</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Phone mockup */}
            <div
              className="relative flex size-[300px] shrink-0 items-center justify-center rounded-[var(--borderRadiusLg)] md:size-[360px]"
              style={{
                background: "linear-gradient(145deg, var(--colorBrand300), var(--colorBrand900))",
                boxShadow: "0 28px 56px 0 rgba(59, 115, 255, 0.3)",
              }}
            >
              <div className="flex flex-col items-center gap-5 text-center">
                <div className="flex size-16 items-center justify-center rounded-full bg-white/20">
                  <span className="text-[28px] font-bold text-white">P</span>
                </div>
                <span className="text-[16px] font-semibold text-white/90">Paymit</span>
                <div className="flex gap-3">
                  {["£", "₦", "₹", "₵"].map((symbol) => (
                    <div key={symbol} className="flex size-10 items-center justify-center rounded-full bg-white/15">
                      <span className="text-[14px] font-semibold text-white">{symbol}</span>
                    </div>
                  ))}
                </div>
                <span className="mt-2 text-[12px] text-white/60">Fast · Secure · Affordable</span>
              </div>
            </div>
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
            <h2 className="text-[36px] font-semibold text-[var(--colorTextPrimary)] max-md:text-[28px]" style={{ textWrap: "balance" }}>
              Everything You Need
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex flex-col rounded-[var(--borderRadiusMd)] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  style={{ boxShadow: "var(--box-shadow-card)" }}
                >
                  <div
                    className="flex size-12 items-center justify-center rounded-full"
                    style={{ backgroundColor: "var(--colorBrand25)" }}
                  >
                    <div className="size-5" style={{ color: "var(--colorBrand300)" }}>
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="mt-4 text-[18px] font-semibold text-[var(--colorTextPrimary)]">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-[22px] text-[var(--colorNeutral600)]">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          </section>
        </SectionReveal>

        {/* Supported Countries */}
        <SectionReveal>
          <section className="mx-auto w-full" style={{ maxWidth: "var(--layoutMaxWidth)", padding: "var(--sectionPaddingY) var(--layoutMargin)" }}>
          <h2 className="text-[36px] font-semibold text-[var(--colorTextPrimary)] max-md:text-[28px]">
            Send to <span className="text-[var(--colorTextActionPrimary)]">9+ Countries</span>
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3">
            {corridors.map((c) => (
              <a
                key={c.iso}
                href={`/send-money/${c.iso === "gm" ? "gambia" : c.iso === "cm" ? "cameroon" : c.iso === "sn" ? "senegal" : c.iso === "zm" ? "zambia" : c.iso === "pk" ? "pakistan" : c.iso === "in" ? "india" : c.iso === "bd" ? "bangladesh" : c.iso === "ng" ? "nigeria" : "ghana"}`}
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
          </section>
        </SectionReveal>
      </main>
      <Footer />
    </>
  );
}
