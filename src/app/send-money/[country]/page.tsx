import type { Metadata } from "next";
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

export async function generateMetadata({ params }: { params: Promise<{ country: string }> }): Promise<Metadata> {
  const { country } = await params;
  const corridor = getCorridor(country);
  if (!corridor) return {};
  const title = `Send Money to ${corridor.country} from UK`;
  const description = `Send money to ${corridor.country} from the UK with Paymit. ${corridor.deliveryMethods.join(", ")}. Competitive exchange rates and low fees. Fast and secure transfers.`;
  return {
    title,
    description,
    openGraph: {
      title: `${title} | Paymit`,
      description,
      url: `https://paymit.co.uk/send-to/${corridor.slug}`,
    },
    twitter: {
      title: `${title} | Paymit`,
      description,
    },
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
        <section className="w-full">
          <div className="mx-auto w-full" style={{ maxWidth: "var(--layoutMaxWidth)", padding: "var(--sectionPaddingY) var(--layoutMargin)" }}>
            <span className="inline-block rounded-full px-3 py-1 text-[12px] font-semibold" style={{ backgroundColor: "var(--colorBrand25)", color: "var(--colorBrand500)" }}>
              {corridor.region}
            </span>
            <h1 className="mt-4 text-[80px] font-semibold leading-[78px] tracking-[-2.4px] text-[var(--colorTextPrimary)] max-lg:text-[68px] max-lg:leading-[66px] max-lg:tracking-[-2px]" style={{ textWrap: "balance", maxWidth: "720px" }}>
              {corridor.headline.split(" to ").map((part, i) => (
                <span key={i}>
                  {i > 0 && " to "}
                  {i === 1 ? <span className="text-[var(--colorTextActionPrimary)]">{part}</span> : part}
                </span>
              ))}
            </h1>
            <p className="mt-2.5 text-lg font-medium text-[var(--colorNeutral600)] max-lg:mt-0 max-lg:mb-2" style={{ textWrap: "balance", maxWidth: "720px" }}>
              {corridor.description.split(". ").reduce((acc: React.ReactNode[], sentence, i, arr) => {
                if (i === 0) return [sentence];
                if (i === Math.ceil(arr.length / 2)) {
                  return [...acc, <span key="break" className="block mt-1" />, sentence];
                }
                return [...acc, ". ", sentence];
              }, [])}
              {corridor.description.includes(".") ? "." : null}
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


      </main>
      <Footer />
    </>
  );
}
