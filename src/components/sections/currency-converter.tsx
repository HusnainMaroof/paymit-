"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { siteConfig } from "@/lib/site";

const currencies = [
  { code: "NGN", country: "Nigeria", flag: "ng" },
  { code: "GHS", country: "Ghana", flag: "gh" },
  { code: "GMD", country: "Gambia", flag: "gm" },
  { code: "XAF", country: "Cameroon", flag: "cm" },
  { code: "XOF", country: "Senegal", flag: "sn" },
  { code: "ZMW", country: "Zambia", flag: "zm" },
  { code: "PKR", country: "Pakistan", flag: "pk" },
  { code: "INR", country: "India", flag: "in" },
  { code: "BDT", country: "Bangladesh", flag: "bd" },
];

export function CurrencyConverter() {
  const [amount, setAmount] = useState("1,000.00");
  const [currency, setCurrency] = useState(currencies[0].code);

  return (
    // DESIGN.md §5: hero card uses borderRadiusLg = 28px. Shadow = shadow-card
    // (3-layer soft blue-cast). Card padding 20px (--spacing-md).
    <div
      className="w-full max-w-md rounded-[28px] border border-[var(--neutral-200)] bg-white p-5 sm:p-6"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      {/* Status pill — small dot + monospace label (link.com motif) */}
      <div className="mb-5 flex items-center justify-between">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--neutral-500)]">
          <span className="h-2 w-2 rounded-full bg-[var(--brand-300)]" />
          Live rate
        </span>
        <span className="text-xs font-medium text-[var(--neutral-400)]">
          Updated just now
        </span>
      </div>
      <div className="space-y-4">
        {/* You Pay */}
        <div className="space-y-2">
          <Label
            htmlFor="you-pay"
            className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--neutral-500)]"
          >
            You pay
          </Label>
          <div className="flex items-center gap-3 rounded-lg border border-[var(--neutral-200)] bg-white px-4 py-3 transition-colors duration-[var(--dur-fast)] focus-within:border-[var(--brand-300)]">
            <span className="fi fi-gb text-lg leading-none" aria-label="United Kingdom" role="img" />
            <span className="text-sm font-semibold text-[var(--ink)]">GBP</span>
            <Input
              id="you-pay"
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="nums h-auto border-0 bg-transparent p-0 text-right text-xl text-[var(--ink)] shadow-none focus-visible:ring-0"
              aria-label="Amount to send in GBP"
              inputMode="decimal"
            />
          </div>
        </div>

        {/* Direction indicator */}
        <div className="flex justify-center py-0.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-md border border-[var(--neutral-200)] bg-white text-[var(--neutral-500)] transition-colors duration-[var(--dur-fast)] hover:border-[var(--brand-300)] hover:text-[var(--brand-300)]">
            <svg
              className="h-3.5 w-3.5 transition-transform duration-[var(--dur-default)] [transition-timing-function:var(--ease-out-expo)] group-hover:translate-y-[1px]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M12 5v14M5 12l7-7 7 7" />
            </svg>
          </div>
        </div>

        {/* They Get */}
        <div className="space-y-2">
          <Label
            htmlFor="they-get"
            className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--neutral-500)]"
          >
            They get
          </Label>
          <div className="flex items-center gap-3 rounded-lg border border-[var(--neutral-200)] bg-[var(--neutral-50)] px-4 py-3">
            <Select value={currency} onValueChange={(v) => v && setCurrency(v)}>
              <SelectTrigger
                id="they-get"
                className="h-auto w-auto border-0 bg-transparent p-0 text-sm font-semibold text-[var(--ink)] shadow-none focus:ring-0"
              >
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                {currencies.map((c) => (
                  <SelectItem key={c.code} value={c.code}>
                    <span
                      className={cn("fi mr-2 text-base leading-none", `fi-${c.flag}`)}
                      aria-label={c.country}
                      role="img"
                    />
                    {c.code} · {c.country}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <span className="nums ml-auto text-right text-xl text-[var(--neutral-400)]">
              —
            </span>
          </div>
        </div>

        {/* Tiny inline receipt — link.com's "12px internal / 16px padding" hint */}
        <div className="mt-3 flex items-center justify-between text-xs text-[var(--neutral-500)]">
          <span>
            Delivery to <span className="font-semibold text-[var(--ink)]">Bank · Wallet · Cash</span>
          </span>
          <span className="nums font-medium text-[var(--brand-900)]">Zero fees on transfer №1</span>
        </div>

        {/* CTA — Link's primary button is dark navy, not bright blue. Medium radius. */}
        <a
          href={`${siteConfig.appBaseUrl}/login`}
          className="group mt-3 inline-flex h-12 w-full items-center justify-center gap-3 rounded-xl bg-[var(--brand-900)] text-sm font-medium text-white transition-colors duration-[var(--dur-fast)] hover:bg-[var(--brand-850)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        >
          Send money now
          <span
            aria-hidden
            className="flex h-7 w-7 items-center justify-center rounded-md bg-white/12"
          >
            <svg
              className="arrow-nudge h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17 17 7M9 7h8v8" />
            </svg>
          </span>
        </a>
      </div>
    </div>
  );
}