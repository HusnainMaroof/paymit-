import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll";
import ScrollProgressIndicator from "@/components/scroll-progress-indicator";
import LoadingBar from "@/components/loading-bar";
import { PageTransition } from "@/components/page-transition";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-headline",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://paymit.co.uk"),
  title: {
    default: "Paymit | Fast, Secure International Money Transfers",
    template: "%s | Paymit",
  },
  description:
    "Send money to Nigeria, Ghana, India, Pakistan, Bangladesh and more. Low fees, great exchange rates, and fast transfers from the UK with Paymit.",
  keywords: [
    "remittance",
    "money transfer",
    "send money online",
    "international money transfer",
    "send money to Nigeria",
    "send money to Ghana",
    "send money to India",
    "send money to Pakistan",
    "send money from UK",
    "Paymit",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Paymit",
    title: "Paymit | Fast, Secure International Money Transfers",
    description:
      "Send money to Nigeria, Ghana, India, Pakistan, Bangladesh and more. Low fees, great exchange rates, and fast transfers from the UK with Paymit.",
    url: "https://paymit.co.uk",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paymit | Fast, Secure International Money Transfers",
    description:
      "Send money to Nigeria, Ghana, India, Pakistan, Bangladesh and more. Low fees, great exchange rates, and fast transfers from the UK with Paymit.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://paymit.co.uk/#organization",
      name: "Paymit Limited",
      url: "https://paymit.co.uk",
      logo: "https://paymit.co.uk/favicon.ico",
      description:
        "UK-regulated payment service provider for fast, secure international money transfers.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "85 Great Portland Street, First Floor",
        addressLocality: "London",
        postalCode: "W1W 7LT",
        addressCountry: "GB",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+44-7577-220592",
        contactType: "customer service",
        email: "support@paymit.co.uk",
      },
      sameAs: [
        "https://www.facebook.com/paymitlimited/",
        "https://www.linkedin.com/company/paymitlimited",
        "https://www.youtube.com/@Paymitlimited",
        "https://www.instagram.com/paymitlimited/",
        "https://www.tiktok.com/@paymitlimited",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://paymit.co.uk/#website",
      url: "https://paymit.co.uk",
      name: "Paymit",
      description:
        "Fast, secure international money transfers. Send money to Nigeria, Ghana, India, Pakistan and more.",
      publisher: { "@id": "https://paymit.co.uk/#organization" },
      inLanguage: "en-GB",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSans.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LoadingBar />
        <SmoothScrollProvider>
          <PageTransition>{children}</PageTransition>
          <ScrollProgressIndicator />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
