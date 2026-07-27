import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { SectionReveal } from "@/components/section-reveal";
import { Reveal } from "@/components/reveal";

export const metadata = {
  title: "Cookie Policy | Paymit",
  description:
    "Paymit Limited Cookie Policy — how we use cookies and similar technologies on our website.",
};

export default function CookiePolicyPage() {
  return (
    <>
      <Nav />
      <main className="w-full bg-white" style={{ paddingTop: "var(--headerNavOffset)" }}>
        <section className="w-full">
          <div
            className="mx-auto w-full"
            style={{
              maxWidth: "var(--layoutMaxWidth)",
              padding: "var(--sectionPaddingY) var(--layoutMargin)",
            }}
          >
            <div className="mx-auto max-w-3xl">
              <h1
                className="text-[80px] font-semibold leading-[78px] tracking-[-2.4px] text-[var(--colorTextPrimary)] max-lg:text-[68px] max-lg:leading-[66px] max-lg:tracking-[-2px]"
                style={{ textWrap: "balance", maxWidth: "720px" }}
              >
                Cookie{" "}
                <span className="text-[var(--colorTextActionPrimary)]">Policy</span>
              </h1>
              <p className="mt-2.5 text-lg font-medium text-[var(--colorNeutral600)] max-lg:mt-0 max-lg:mb-2">
                Last updated: 18 March 2024
              </p>
            <Reveal targets="[data-reveal]" stagger={0.06} y={16} duration={0.45}>
            <div className="mt-10 flex flex-col gap-10 text-[15px] leading-[26px] text-[var(--colorNeutral600)]">
              <section data-reveal>
                <h2 className="mb-3 text-[22px] font-semibold text-[var(--colorTextPrimary)]">
                  1. What Are Cookies?
                </h2>
                <p>
                  Cookies are small text files placed on your device when you
                  visit a website. They help us understand how you use our site
                  and improve your experience.
                </p>
              </section>

              <section data-reveal>
                <h2 className="mb-3 text-[22px] font-semibold text-[var(--colorTextPrimary)]">
                  2. How We Use Cookies
                </h2>
                <p>We use cookies for the following purposes:</p>
                <ul className="mt-3 list-disc pl-5">
                  <li>
                    <strong className="font-medium text-[var(--colorTextPrimary)]">
                      Essential Cookies:
                    </strong>{" "}
                    Required for the website to function properly (e.g.,
                    session management, security).
                  </li>
                  <li>
                    <strong className="font-medium text-[var(--colorTextPrimary)]">
                      Analytics Cookies:
                    </strong>{" "}
                    Help us understand how visitors interact with our website
                    so we can improve it.
                  </li>
                  <li>
                    <strong className="font-medium text-[var(--colorTextPrimary)]">
                      Preference Cookies:
                    </strong>{" "}
                    Remember your settings and choices to provide a personalised
                    experience.
                  </li>
                  <li>
                    <strong className="font-medium text-[var(--colorTextPrimary)]">
                      Marketing Cookies:
                    </strong>{" "}
                    Used to deliver relevant advertisements and track campaign
                    performance.
                  </li>
                </ul>
              </section>

              <section data-reveal>
                <h2 className="mb-3 text-[22px] font-semibold text-[var(--colorTextPrimary)]">
                  3. Third-Party Cookies
                </h2>
                <p>
                  Some cookies are placed by third-party services that appear
                  on our pages. We use third-party analytics and advertising
                  services that may collect information about your browsing
                  habits.
                </p>
              </section>

              <section data-reveal>
                <h2 className="mb-3 text-[22px] font-semibold text-[var(--colorTextPrimary)]">
                  4. Managing Cookies
                </h2>
                <p>
                  You can control and manage cookies through your browser
                  settings. You can choose to:
                </p>
                <ul className="mt-3 list-disc pl-5">
                  <li>Accept all cookies</li>
                  <li>Reject all cookies</li>
                  <li>Accept only essential cookies</li>
                  <li>Choose which cookies to accept</li>
                </ul>
                <p className="mt-3">
                  Note: Disabling cookies may affect the functionality of our
                  website.
                </p>
              </section>

              <section data-reveal>
                <h2 className="mb-3 text-[22px] font-semibold text-[var(--colorTextPrimary)]">
                  5. Contact Us
                </h2>
                <p>
                  If you have questions about this Cookie Policy, please
                  contact us at{" "}
                  <a
                    href="mailto:support@paymit.co.uk"
                    className="font-medium text-[var(--colorTextActionPrimary)] underline-offset-4 hover:underline"
                  >
                    support@paymit.co.uk
                  </a>
                  .
                </p>
              </section>
            </div>
            </Reveal>
          </div>
        </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
