import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { SectionReveal } from "@/components/section-reveal";

export const metadata = {
  title: "Contact Us | Paymit",
  description:
    "Get in touch with Paymit — phone, email, WhatsApp, or visit us in London.",
};

const contactChannels = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    label: "Phone",
    value: "+44 7723 957734",
    href: "tel:+447723957734",
    note: "Monday - Friday, 9am - 6pm GMT",
  },
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
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    label: "WhatsApp",
    value: "+44 7723 957734",
    href: "https://wa.me/447723957734",
    note: "Quick replies during business hours",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Address",
    value: "85 Great Portland Street, First Floor, London, England, W1W 7LT",
    href: "https://maps.google.com/?q=85+Great+Portland+Street+London+W1W+7LT",
    note: "By appointment only",
  },
];

export default function ContactUsPage() {
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
              Contact{" "}
              <span className="text-[var(--colorTextActionPrimary)]">Us</span>
            </h1>
            <p
              className="mt-6 text-[18px] font-medium leading-[28px] text-[var(--colorNeutral600)]"
              style={{ textWrap: "balance" }}
            >
              Have a question or need help? We&apos;re here for you.
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
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactChannels.map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                target={channel.label === "WhatsApp" || channel.label === "Address" ? "_blank" : undefined}
                rel={channel.label === "WhatsApp" || channel.label === "Address" ? "noopener noreferrer" : undefined}
                className="group flex flex-col rounded-[var(--borderRadiusMd)] border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ borderColor: "var(--colorBorderLight)" }}
              >
                <div
                  className="flex size-12 items-center justify-center rounded-full"
                  style={{ backgroundColor: "var(--colorBrand25)" }}
                >
                  <div
                    className="size-5"
                    style={{ color: "var(--colorBrand300)" }}
                  >
                    {channel.icon}
                  </div>
                </div>
                <h3 className="mt-4 text-[18px] font-semibold text-[var(--colorTextPrimary)]">
                  {channel.label}
                </h3>
                <p className="mt-1 text-[14px] font-medium text-[var(--colorTextActionPrimary)]">
                  {channel.value}
                </p>
                <p className="mt-2 text-[13px] text-[var(--colorNeutral500)]">
                  {channel.note}
                </p>
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
