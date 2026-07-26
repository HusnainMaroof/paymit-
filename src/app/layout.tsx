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
  title: "Paymit | Fast, Secure International Money Transfers",
  description: "Send money globally with Paymit. Enjoy low fees, great exchange rates, and a secure platform for all your remittance needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSans.variable}`}>
      <body>
        <LoadingBar />
        <SmoothScrollProvider>
          <PageTransition>{children}</PageTransition>
          <ScrollProgressIndicator />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
