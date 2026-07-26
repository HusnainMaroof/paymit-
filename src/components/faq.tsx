"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    id: "1",
    title: "How safe is Paymit?",
    content:
      "Paymit is regulated by the FCA as a Small Payment Institution (License #945293) and registered with HMRC as a Money Services Business. All transactions are encrypted, we never ask for passwords, OTPs, or CVC codes, and we never store your card details. Staff and customer logins are protected by mandatory 2-factor authentication.",
  },
  {
    id: "2",
    title: "How do I sign up?",
    content:
      "Sign up free in minutes using only your email address. You must be 18+ years old and complete a quick KYC identity verification. Personal use only — no gambling, escrow, or trust transactions. The full signup flow is available at app.paymit.co.uk/register.",
  },
  {
    id: "3",
    title: "How much does Paymit cost per transfer?",
    content:
      "Fees are disclosed upfront before you process any transfer, based on interbank rates plus a small margin. New customers get their first transaction fee-free as part of our Try Us Free offer. Additional charges from receiving banks, local taxes, or mobile network fees may apply depending on the destination.",
  },
  {
    id: "4",
    title: "How do I contact Paymit?",
    content:
      "Email support is available 24/7 at support@paymit.co.uk for a detailed written response. You can also call our team directly on (+44) 7577 220592, or visit us at 85 Great Portland Street, First Floor, London, W1W 7LT. Our team handles complaints within 15 business days and final responses within 35 days.",
  },
  {
    id: "5",
    title: "Why was my transfer cancelled or rejected?",
    content:
      "Transfers may be cancelled or rejected if details are inaccurate or fraudulent, identity can't be verified, there are money laundering or sanctions concerns, regulatory or court orders apply, or the terms of service are not met. Transaction fees are non-refundable unless the cancellation was caused by a Paymit error.",
  },
  {
    id: "6",
    title: "How can I track my transfer status?",
    content:
      'Paymit provides live push alerts from "Sent" to "Received" once your transfer is funded. You can follow each stage — Payment Started, Processing, and Delivered — in real time from your account dashboard or the Paymit mobile app on iOS and Android.',
  },
  {
    id: "7",
    title: "My transfer is pending. How do I fix it?",
    content:
      "Pending transfers usually resolve within minutes, but depending on the partner location and compliance checks the timeframe can extend up to 7 business days. If your transfer hasn't settled, contact support@paymit.co.uk with your transaction reference, or call (+44) 7577 220592 to speak with our team.",
  },
  {
    id: "8",
    title: "Why is my account suspended or locked?",
    content:
      "Accounts can be suspended when identity cannot be verified, when fraudulent or sanctioned activity is suspected, when another person's card or bank account is used, or after extended inactivity. To restore your account, complete any outstanding KYC/AML verification requests and contact support@paymit.co.uk.",
  },
  {
    id: "9",
    title: "How do I send money online?",
    content:
      "Create your free account, set up your transfer by entering the amount and destination, and we show fees and exchange rates upfront. Fund the transfer by bank or card and choose your delivery method — Bank Deposit, Cash Pickup, Mobile Wallet, or Mobile Top-ups. We handle the rest with live updates.",
  },
  {
    id: "10",
    title: 'How does "refer a friend" work?',
    content:
      "Refer a friend through your account dashboard. Once your friend sends at least £100 on their first transfer, you earn a £5 reward credited to your Paymit balance. There's no limit to the number of friends you can refer — share your unique link and grow your rewards every time someone new signs up and transacts.",
  },
];

export function Faq() {
  const [openId, setOpenId] = useState<string>("1");

  return (
    <section
      className="relative mx-auto w-full bg-white"
      style={{
        maxWidth: "var(--layoutMaxWidth)",
        padding: "var(--sectionPaddingY) var(--layoutMargin)",
      }}
    >
      {/* Header */}
      <div className="mx-auto max-w-3xl text-center">
        <h1
          className="text-[56px] font-semibold leading-[54px] tracking-[-1.7px] text-[var(--colorTextPrimary)] max-lg:text-[44px] max-lg:leading-[42px] max-lg:tracking-[-1.3px]"
          style={{ textWrap: "balance" }}
        >
          Frequently Asked{" "}
          <span className="text-[var(--colorTextActionPrimary)]">Questions</span>
        </h1>
      </div>

      {/* Accordion */}
      <div className="mx-auto mt-16 w-full max-w-5xl">
        <Accordion
          type="single"
          value={openId}
          onValueChange={setOpenId}
          collapsible
          className="w-full"
        >
          {items.map((item) => (
            <AccordionItem
              value={item.id}
              key={item.id}
              className="group/item last:border-b border-[var(--colorBorderLight)]"
              onMouseEnter={() => setOpenId(item.id)}
            >
              <AccordionTrigger
                className="text-left pl-6 md:pl-14 overflow-hidden cursor-pointer -space-y-6 py-4  no-underline hover:no-underline transition-colors duration-300 [&>svg]:hidden"
                indicator={null}
              >
                <div className="flex flex-1 items-start gap-4">
                  <p className="text-xs font-mono pt-2 text-[var(--colorNeutral400)] transition-colors duration-300 group-hover/item:text-[var(--colorBrand300)] group-data-[state=open]/item:text-[var(--colorBrand300)]">
                    {item.id}
                  </p>
                  <h2 className="uppercase text-[28px] md:text-[44px] font-semibold leading-[1.05] tracking-[-0.5px] md:tracking-[-1px] text-foreground/20 transition-colors duration-300 group-hover/item:text-[var(--colorTextActionPrimary)] group-data-[state=open]:space-y-0 group-data-[state=open]:text-primary">
                    {item.title}
                  </h2>
                </div>
              </AccordionTrigger>

              <AccordionContent className="text-muted-foreground pb-8 pl-6 md:pl-20 md:pr-10">
                <p className="text-[16px] font-normal leading-[1.7] text-[var(--colorNeutral600)] md:max-w-[640px]">
                  {item.content}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}