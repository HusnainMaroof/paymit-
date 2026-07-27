import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { SectionReveal } from "@/components/section-reveal";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the Paymit team and help build the future of international money transfers. We're a small, passionate team based in London.",
  openGraph: {
    title: "Careers | Paymit",
    description:
      "Join the Paymit team and help build the future of international money transfers.",
    url: "https://paymit.co.uk/careers",
  },
  twitter: {
    title: "Careers | Paymit",
    description:
      "Join the Paymit team and help build the future of international money transfers.",
  },
};

export default function CareersPage() {
  return (
    <>
      <Nav />
      <main className="w-full bg-white" style={{ paddingTop: "var(--headerNavOffset)" }}>
        {/* Hero */}
        <section className="w-full">
          <div
            className="mx-auto w-full flex justify-between items-center"
            style={{
              maxWidth: "var(--layoutMaxWidth)",
              padding: "var(--sectionPaddingY) var(--layoutMargin)",
            }}
          >
            <h1
              className="text-[80px] font-semibold leading-[78px] tracking-[-2.4px] text-[var(--colorTextPrimary)] max-lg:text-[68px] max-lg:leading-[66px] max-lg:tracking-[-2px]"
              style={{ textWrap: "balance", maxWidth: "720px" }}
            >
              Careers at{" "}
              <span className="text-[var(--colorTextActionPrimary)] block">Paymit</span>
            </h1>
            <p
              className="text-4xl font-medium text-[var(--colorNeutral600)] pr-10"
              style={{ textWrap: "balance" }}
            >
              We&apos;re building the future of <br /> international money transfers <br /> with a small, passionate team.
            </p>
          </div>
        </section>

        {/* No open roles */}
        <SectionReveal>
          <section
            className="mx-auto w-full"
            style={{
              maxWidth: "var(--layoutMaxWidth)",
              padding: "0 var(--layoutMargin) var(--sectionPaddingY)",
            }}
          >
            <Reveal targets="[data-reveal]" stagger={0.1} y={16} duration={0.5}>
            <div className="mx-auto max-w-2xl">
              <div
                className="rounded-[var(--borderRadiusLg)] border p-12 text-center"
                style={{
                  borderColor: "var(--colorBorderLight)",
                  backgroundColor: "var(--colorNeutral50)",
                }}
              >
                <div
                  data-reveal
                  className="mx-auto flex size-16 items-center justify-center rounded-full"
                  style={{ backgroundColor: "var(--colorBrand25)" }}
                >
                  <svg
                    className="size-7"
                    style={{ color: "var(--colorBrand300)" }}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h2 data-reveal className="mt-6 text-[28px] font-semibold text-[var(--colorTextPrimary)]">
                  No Open Roles Right Now
                </h2>
                <p data-reveal className="mt-3 text-[16px] leading-[26px] text-[var(--colorNeutral600)]">
                  We&apos;re always growing. Check back soon or connect with us on
                  LinkedIn to be the first to know when new positions open up.
                </p>
                <a
                  data-reveal
                  href="https://www.linkedin.com/company/paymitlimited"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-morph mt-8 inline-flex h-11 items-center justify-center gap-2 rounded-[var(--borderRadiusSm)] px-6 text-[14px] font-medium text-white transition-all duration-200 hover:scale-[1.03] hover:bg-[var(--colorBrand850)] hover:shadow-md hover:shadow-[var(--colorBrand300)]/30"
                  style={{ backgroundColor: "var(--colorBrand900)" }}
                >
                  <svg
                    className="size-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  Connect on LinkedIn
                </a>
              </div>
            </div>
            </Reveal>
          </section>
        </SectionReveal>
      </main>
      <Footer />
    </>
  );
}
