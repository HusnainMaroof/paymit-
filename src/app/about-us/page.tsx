import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { SectionReveal } from "@/components/section-reveal";
import { Reveal } from "@/components/reveal";

export const metadata = {
  title: "About Us | Paymit",
  description:
    "Learn about Paymit Limited — a UK-regulated payment service provider bringing money remittance into the digital age.",
};

export default function AboutUsPage() {
  return (
    <>
      <Nav />
      <main className="w-full bg-white" style={{ paddingTop: "var(--headerNavOffset)" }}>
        {/* Hero */}
        <section className="w-full">
          <div
            className="mx-auto w-full"
            style={{
              maxWidth: "var(--layoutMaxWidth)",
              padding: "var(--sectionPaddingY) var(--layoutMargin)",
            }}
          >
            <h1
              className="text-[80px] font-semibold leading-[78px] tracking-[-2.4px] text-[var(--colorTextPrimary)] max-lg:text-[68px] max-lg:leading-[66px] max-lg:tracking-[-2px]"
              style={{ textWrap: "balance", maxWidth: "720px" }}
            >
              About{" "}
              <span className="text-[var(--colorTextActionPrimary)]">Paymit</span>
            </h1>
            <p
              className="mt-2.5 text-lg font-medium text-[var(--colorNeutral600)] max-lg:mt-0 max-lg:mb-2"
              style={{ textWrap: "balance" }}
            >
              Bringing money remittance into the digital age — fast, affordable,
              and completely secure.
            </p>
          </div>
        </section>

        {/* Company Overview */}
        <SectionReveal>
          <section
            className="mx-auto w-full"
            style={{
              maxWidth: "var(--layoutMaxWidth)",
              padding: "0 var(--layoutMargin) var(--sectionPaddingY)",
            }}
          >
            <Reveal targets="[data-reveal]" stagger={0.08} y={16} duration={0.5}>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <h2 data-reveal
                  className="text-[36px] font-semibold leading-[1.1] tracking-[-1px] text-[var(--colorTextPrimary)] md:text-[44px] md:tracking-[-1.2px]"
                  style={{ textWrap: "balance" }}
                >
                  Our{" "}
                  <span className="text-[var(--colorTextActionPrimary)]">Story</span>
                </h2>
                <p data-reveal className="mt-6 text-[16px] font-normal leading-[26px] text-[var(--colorNeutral600)]">
                  Paymit Limited is a Payment Service Provider (PSP) incorporated
                  in England. We focus on bringing the traditional "brick and
                  mortar" money remittance experience into the digital age — making
                  it faster, more affordable, and accessible from anywhere.
                </p>
                <p data-reveal className="mt-4 text-[16px] font-normal leading-[26px] text-[var(--colorNeutral600)]">
                  Our office is located at 85 Great Portland Street, First Floor,
                  London, England, W1W 7LT.
                </p>
              </div>

              {/* Regulatory cards */}
              <div className="flex flex-col gap-4">
                <div
                  data-reveal
                  className="rounded-[var(--borderRadiusMd)] border p-6"
                  style={{ borderColor: "var(--colorBorderLight)" }}
                >
                  <div data-reveal className="flex items-center gap-3">
                    <div
                      className="flex size-10 shrink-0 items-center justify-center rounded-full"
                      style={{ backgroundColor: "var(--colorBrand25)" }}
                    >
                      <svg
                        className="size-5"
                        style={{ color: "var(--colorBrand300)" }}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                      </svg>
                    </div>
                    <div>
                      <h3 data-reveal className="text-[18px] font-semibold text-[var(--colorTextPrimary)]">
                        FCA Regulated
                      </h3>
                      <p data-reveal className="text-[14px] text-[var(--colorNeutral500)]">
                        Small Payment Institution — License #945293
                      </p>
                    </div>
                  </div>
                  <p data-reveal className="mt-3 text-[14px] leading-[22px] text-[var(--colorNeutral600)]">
                    Regulated under the Payment Services Regulation 2017 by the
                    Financial Conduct Authority.
                  </p>
                </div>

                <div
                  data-reveal
                  className="rounded-[var(--borderRadiusMd)] border p-6"
                  style={{ borderColor: "var(--colorBorderLight)" }}
                >
                  <div data-reveal className="flex items-center gap-3">
                    <div
                      className="flex size-10 shrink-0 items-center justify-center rounded-full"
                      style={{ backgroundColor: "var(--colorBrand25)" }}
                    >
                      <svg
                        className="size-5"
                        style={{ color: "var(--colorBrand300)" }}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect width="20" height="14" x="2" y="3" rx="2" />
                        <line x1="2" x2="22" y1="10" y2="10" />
                      </svg>
                    </div>
                    <div>
                      <h3 data-reveal className="text-[18px] font-semibold text-[var(--colorTextPrimary)]">
                        HMRC Registered
                      </h3>
                      <p data-reveal className="text-[14px] text-[var(--colorNeutral500)]">
                        Money Services Business — Reg #XFML00000159053
                      </p>
                    </div>
                  </div>
                  <p data-reveal className="mt-3 text-[14px] leading-[22px] text-[var(--colorNeutral600)]">
                    Fully compliant with Money Laundering Regulations and all
                    HMRC requirements.
                  </p>
                </div>
              </div>
            </div>
            </Reveal>
      </section>
    </SectionReveal>

        {/* Vision & Mission */}
        <SectionReveal>
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
              <Reveal targets="[data-reveal]" stagger={0.1} y={16} duration={0.5}>
              <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
                <div>
                  <h2 data-reveal
                    className="text-[36px] font-semibold leading-[1.1] tracking-[-1px] text-[var(--colorTextPrimary)] md:text-[40px]"
                    style={{ textWrap: "balance" }}
                  >
                    Our{" "}
                    <span className="text-[var(--colorTextActionPrimary)]">
                      Vision
                    </span>
                  </h2>
                  <blockquote data-reveal className="mt-6 border-l-2 pl-6 text-[16px] font-normal leading-[26px] text-[var(--colorNeutral600)]" style={{ borderColor: "var(--colorBrand300)" }}>
                    &ldquo;Create a world where sending money to family and loved
                    ones is fast, affordable, and completely secure. Eliminate the
                    barriers of distance, enabling people to support and connect
                    with those who matter most anytime, anywhere.&rdquo;
                  </blockquote>
                </div>

                <div>
                  <h2 data-reveal
                    className="text-[36px] font-semibold leading-[1.1] tracking-[-1px] text-[var(--colorTextPrimary)] md:text-[40px]"
                    style={{ textWrap: "balance" }}
                  >
                    Our{" "}
                    <span className="text-[var(--colorTextActionPrimary)]">
                      Mission
                    </span>
                  </h2>
                  <blockquote data-reveal className="mt-6 border-l-2 pl-6 text-[16px] font-normal leading-[26px] text-[var(--colorNeutral600)]" style={{ borderColor: "var(--colorBrand300)" }}>
                    &ldquo;Provide individuals with seamless, dependable, and fast
                    money transfers through{" "}
                    <strong className="font-semibold text-[var(--colorTextPrimary)]">
                      Cash Pickup
                    </strong>
                    ,{" "}
                    <strong className="font-semibold text-[var(--colorTextPrimary)]">
                      Direct-to-Bank
                    </strong>
                    , and{" "}
                    <strong className="font-semibold text-[var(--colorTextPrimary)]">
                      Mobile Wallets
                    </strong>
                    . Combine competitive rates, transparent fees, and real-time
                    tracking with advanced security measures.&rdquo;
                  </blockquote>
                </div>
              </div>
              </Reveal>
            </div>
          </section>
        </SectionReveal>
      </main>
      <Footer />
    </>
  );
}
