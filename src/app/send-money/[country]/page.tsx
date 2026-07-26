import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { getCorridor } from "@/data/corridors";
import { notFound } from "next/navigation";
import { SectionReveal } from "@/components/section-reveal";

export function generateStaticParams() {
  return [
    { country: "nigeria" },
    { country: "ghana" },
    { country: "gambia" },
    { country: "cameroon" },
    { country: "senegal" },
    { country: "zambia" },
    { country: "pakistan" },
    { country: "india" },
    { country: "bangladesh" },
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;
  const corridor = getCorridor(country);
  if (!corridor) return {};
  return {
    title: `${corridor.headline} | Paymit`,
    description: corridor.description,
  };
}

export default async function SendMoneyCountryPage({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;
  const corridor = getCorridor(country);
  if (!corridor) notFound();

  return (
    <>
      <Nav />
      <main className="w-full bg-white" style={{ paddingTop: "var(--headerNavOffset)" }}>
        {/* Hero */}
        <section className="mx-auto w-full" style={{ maxWidth: "var(--layoutMaxWidth)", padding: "var(--sectionPaddingY) var(--layoutMargin)" }}>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full px-3 py-1 text-[12px] font-semibold" style={{ backgroundColor: "var(--colorBrand25)", color: "var(--colorBrand500)" }}>
              {corridor.region}
            </span>
            <h1 className="mt-4 text-[56px] font-semibold leading-[54px] tracking-[-1.7px] text-[var(--colorTextPrimary)] max-lg:text-[44px] max-lg:leading-[42px]" style={{ textWrap: "balance" }}>
              {corridor.headline.split(" to ").map((part, i) => (
                <span key={i}>
                  {i > 0 && " to "}
                  {i === 1 ? <span className="text-[var(--colorTextActionPrimary)]">{part}</span> : part}
                </span>
              ))}
            </h1>
            <p className="mt-6 text-[18px] font-medium leading-[28px] text-[var(--colorNeutral600)]" style={{ textWrap: "balance" }}>
              {corridor.description}
            </p>
            <a href="https://app.paymit.co.uk/register" target="_blank" rel="noopener noreferrer" className="btn-morph mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-[var(--borderRadiusSm)] px-8 text-[15px] font-medium text-white transition-all duration-200 hover:scale-[1.03] hover:bg-[var(--colorBrand850)] hover:shadow-md hover:shadow-[var(--colorBrand300)]/30" style={{ backgroundColor: "var(--colorBrand900)" }}>
              Send Money to {corridor.country}
              <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
          </div>
        </section>

        {/* Delivery Methods */}
        <SectionReveal>
          <section className="mx-auto w-full" style={{ maxWidth: "var(--layoutMaxWidth)", padding: "0 var(--layoutMargin) var(--sectionPaddingY)" }}>
          <h2 className="text-[32px] font-semibold text-[var(--colorTextPrimary)] max-md:text-[28px]">Delivery Methods</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {corridor.deliveryMethods.map((method) => (
              <div key={method} className="group flex flex-col rounded-[var(--borderRadiusMd)] border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg" style={{ borderColor: "var(--colorBorderLight)" }}>
                <div className="flex size-12 items-center justify-center rounded-full" style={{ backgroundColor: "var(--colorBrand25)" }}>
                  <svg className="size-5" style={{ color: "var(--colorBrand300)" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {method === "Bank Deposit" && <><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></>}
                    {method === "Cash Pickup" && <><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></>}
                    {method === "Mobile Wallet" && <><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></>}
                  </svg>
                </div>
                <h3 className="mt-4 text-[18px] font-semibold text-[var(--colorTextPrimary)]">{method}</h3>
                <p className="mt-2 text-[14px] leading-[22px] text-[var(--colorNeutral600)]">
                  {method === "Bank Deposit" && `Direct deposit to bank accounts across ${corridor.country}.`}
                  {method === "Cash Pickup" && `Collect cash at convenient locations throughout ${corridor.country}.`}
                  {method === "Mobile Wallet" && `Send directly to mobile wallets in ${corridor.country}.`}
                </p>
              </div>
            ))}
          </div>
          </section>
        </SectionReveal>

        {/* Benefits */}
        <SectionReveal>
          <section className="w-full" style={{ backgroundColor: "var(--colorNeutral50)" }}>
          <div className="mx-auto w-full" style={{ maxWidth: "var(--layoutMaxWidth)", padding: "var(--sectionPaddingY) var(--layoutMargin)" }}>
            <h2 className="text-[32px] font-semibold text-[var(--colorTextPrimary)] max-md:text-[28px]">Why Send with Paymit?</h2>
            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
              {corridor.benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3 rounded-[var(--borderRadiusMd)] bg-white p-5" style={{ boxShadow: "var(--box-shadow-card)" }}>
                  <div className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: "var(--colorBrand300)" }}>
                    <svg className="size-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <span className="text-[15px] font-medium text-[var(--colorTextPrimary)]">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          </section>
        </SectionReveal>
      </main>
      <Footer />
    </>
  );
}
