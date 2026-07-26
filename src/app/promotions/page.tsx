import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { SectionReveal } from "@/components/section-reveal";

export const metadata = {
  title: "Promotions | Paymit",
  description:
    "Explore Paymit promotions — send your first transfer fee-free and earn rewards by referring friends.",
};

export default function PromotionsPage() {
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
             {" "}
              <span className="text-[var(--colorTextActionPrimary)]">
                Promotions
              </span>
            </h1>
            <p
              className="mt-6 text-[18px] font-medium leading-[28px] text-[var(--colorNeutral600)]"
              style={{ textWrap: "balance" }}
            >
              Exclusive offers to make your money transfers even better.
            </p>
          </div>
        </section>

        {/* Offers */}
        <SectionReveal>
          <section
            className="mx-auto w-full"
            style={{
              maxWidth: "var(--layoutMaxWidth)",
              padding: "0 var(--layoutMargin) var(--sectionPaddingY)",
            }}
          >
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* Offer 1 */}
              <div
                className="group flex flex-col overflow-hidden rounded-[var(--borderRadiusMd)] border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ borderColor: "var(--colorBorderLight)" }}
              >
                <div
                  className="flex items-center justify-center px-7 py-10"
                  style={{ backgroundColor: "var(--colorBrand25)" }}
                >
                  <div
                    className="flex size-20 items-center justify-center rounded-full"
                    style={{ backgroundColor: "var(--colorBrand300)" }}
                  >
                    <span className="text-[36px]">🎉</span>
                  </div>
                </div>
                <div className="p-7">
                  <span
                    className="inline-block rounded-full px-3 py-1 text-[12px] font-semibold"
                    style={{
                      backgroundColor: "var(--colorBrand25)",
                      color: "var(--colorBrand500)",
                    }}
                  >
                    New Customers
                  </span>
                  <h2 className="mt-3 text-[24px] font-semibold text-[var(--colorTextPrimary)]">
                    No Fee on Your First Transaction
                  </h2>
                  <p className="mt-3 text-[15px] leading-[24px] text-[var(--colorNeutral600)]">
                    We&apos;re waiving the fee on your very first transfer. Send
                    money to your loved ones without any extra cost — experience
                    the Paymit difference risk-free.
                  </p>
                  <a
                    href="https://app.paymit.co.uk/register"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-morph mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-[var(--borderRadiusSm)] px-6 text-[14px] font-medium text-white transition-all duration-200 hover:scale-[1.03] hover:bg-[var(--colorBrand850)] hover:shadow-md hover:shadow-[var(--colorBrand300)]/30"
                    style={{ backgroundColor: "var(--colorBrand900)" }}
                  >
                    Send Money Now
                    <svg
                      className="size-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Offer 2 */}
              <div
                className="group flex flex-col overflow-hidden rounded-[var(--borderRadiusMd)] border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ borderColor: "var(--colorBorderLight)" }}
              >
                <div
                  className="flex items-center justify-center px-7 py-10"
                  style={{ backgroundColor: "var(--colorBrand25)" }}
                >
                  <div
                    className="flex size-20 items-center justify-center rounded-full"
                    style={{ backgroundColor: "var(--colorBrand300)" }}
                  >
                    <span className="text-[36px]">💷</span>
                  </div>
                </div>
                <div className="p-7">
                  <span
                    className="inline-block rounded-full px-3 py-1 text-[12px] font-semibold"
                    style={{
                      backgroundColor: "var(--colorBrand25)",
                      color: "var(--colorBrand500)",
                    }}
                  >
                    Earn Rewards
                  </span>
                  <h2 className="mt-3 text-[24px] font-semibold text-[var(--colorTextPrimary)]">
                    Refer a Friend & Earn £5
                  </h2>
                  <p className="mt-3 text-[15px] leading-[24px] text-[var(--colorNeutral600)]">
                    Get a £5 reward when your friend sends at least £100 on their
                    first transfer. There&apos;s no limit — share your unique link
                    and grow your rewards every time someone new joins.
                  </p>
                  <a
                    href="https://app.paymit.co.uk/register"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-morph mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-[var(--borderRadiusSm)] px-6 text-[14px] font-medium text-white transition-all duration-200 hover:scale-[1.03] hover:bg-[var(--colorBrand850)] hover:shadow-md hover:shadow-[var(--colorBrand300)]/30"
                    style={{ backgroundColor: "var(--colorBrand900)" }}
                  >
                    Refer a Friend
                    <svg
                      className="size-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </SectionReveal>
      </main>
      <Footer />
    </>
  );
}
