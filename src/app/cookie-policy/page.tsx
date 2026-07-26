import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

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
        <section
          className="mx-auto w-full"
          style={{
            maxWidth: "var(--layoutMaxWidth)",
            padding: "var(--sectionPaddingY) var(--layoutMargin)",
          }}
        >
          <div className="mx-auto max-w-3xl">
            <h1
              className="text-[44px] font-semibold leading-[1.1] tracking-[-1.2px] text-[var(--colorTextPrimary)] max-lg:text-[36px] max-lg:tracking-[-1px]"
              style={{ textWrap: "balance" }}
            >
              Cookie{" "}
              <span className="text-[var(--colorTextActionPrimary)]">Policy</span>
            </h1>
            <p className="mt-4 text-[14px] text-[var(--colorNeutral500)]">
              Last updated: 18 March 2024
            </p>
            <div className="mt-10 flex flex-col gap-10 text-[15px] leading-[26px] text-[var(--colorNeutral600)]">
              <section>
                <h2 className="mb-3 text-[22px] font-semibold text-[var(--colorTextPrimary)]">
                  1. What Are Cookies?
                </h2>
                <p>
                  Cookies are small text files placed on your device when you
                  visit a website. They help us understand how you use our site
                  and improve your experience.
                </p>
              </section>

              <section>
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

              <section>
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

              <section>
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

              <section>
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
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
