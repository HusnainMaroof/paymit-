"use client";

import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { navLinks, destinations, siteConfig } from "@/lib/site";

/*
  Header — DESIGN.md §12 full spec:
  Fixed top, 10px offset, 8px-radius border, 16px padding, white bg.
  Logo left (26px area), nav centered, divider, auth buttons right (8px gap).
  Button radius morphs 10px → 28px on hover (.btn-morph).
*/
export function Header() {
  return (
    <div className="fixed top-2.5 z-50 w-full px-4 sm:top-[10px] sm:px-6">
      <div className="mx-auto flex max-w-[var(--layoutMaxWidth)] items-center justify-between rounded-lg border border-[var(--neutral-200)] bg-white p-3 sm:px-4">
        {/* Logo — branded square + wordmark, 26px area */}
        <Link
          href="/"
          className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2"
        >
          <span className="flex h-[26px] w-[26px] items-center justify-center rounded-md bg-[var(--brand-900)] text-xs font-semibold text-white">
            P
          </span>
          <span className="text-[15px] font-semibold tracking-[-0.02em] text-[var(--ink)]">
            {siteConfig.name}
          </span>
        </Link>

        {/* Center: nav links + dropdown */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {navLinks
            .filter((link) => link.label !== "Send Money To")
            .map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-[var(--neutral-600)] transition-colors duration-150 hover:text-[var(--ink)] focus-visible:text-[var(--ink)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]"
              >
                {link.label}
              </Link>
            ))}

          {/* "Send Money To" dropdown — DESIGN.md button style: 10px radius, morphs to 28px */}
          <DropdownMenu>
            <DropdownMenuTrigger className="btn-morph group inline-flex h-10 items-center gap-1.5 border border-[var(--neutral-200)] bg-[var(--neutral-0)] px-4 text-sm font-medium text-[var(--ink)] outline-none hover:bg-[var(--neutral-50)] focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2">
              Send Money To
              <ChevronDown className="h-4 w-4 text-[var(--neutral-500)] transition-transform duration-200 ease-in-out group-data-[state=open]:rotate-180" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              sideOffset={6}
              className="w-56 rounded-lg border border-[var(--neutral-200)] bg-white p-1.5 shadow-lg"
            >
              {destinations.map((d) => (
                <DropdownMenuItem
                  key={d.country}
                  className="rounded-md px-3 py-2 text-sm font-medium text-[var(--ink)] transition-colors hover:bg-[var(--brand-25)] hover:text-[var(--brand-900)] focus:bg-[var(--brand-25)] focus:text-[var(--brand-900)]"
                  render={
                    <Link
                      href={`/send-money-to/${d.country.toLowerCase()}`}
                      className="block w-full"
                    >
                      {d.country}
                    </Link>
                  }
                />
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Divider (from DESIGN.md §12: height 16px, width 1px, margin 0 8px) */}
        <span className="mx-2 hidden h-4 w-px bg-[var(--neutral-300)] md:block" aria-hidden />

        {/* Right: auth buttons — DESIGN.md button spec: h-10, 10px→28px radius morph, font-link 500 14px */}
        <div className="hidden items-center gap-2 md:flex">
          {/* Log in — Tertiary variant: neutral-100 bg, brand-900 text, hover neutral-200 */}
          <Link
            href={`${siteConfig.appBaseUrl}/login`}
            className="btn-morph inline-flex h-10 items-center justify-center px-6 text-sm font-medium text-[var(--ink)] transition-colors hover:bg-[var(--neutral-100)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2"
          >
            Log in
          </Link>
          {/* Sign up — Secondary variant: brand-900 bg, white text, hover brand-850 */}
          <Link
            href={`${siteConfig.appBaseUrl}/register`}
            className="btn-morph inline-flex h-10 items-center justify-center bg-[var(--brand-900)] px-6 text-sm font-medium text-white transition-colors hover:bg-[var(--brand-850)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2"
          >
            Sign up
          </Link>
        </div>

        {/* Mobile menu */}
        <Dialog>
          <DialogTrigger
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5 text-[var(--ink)]" />
          </DialogTrigger>
          <DialogContent className="max-w-xs p-0">
            <DialogTitle className="sr-only">Navigation Menu</DialogTitle>
            <div className="flex flex-col gap-1 p-5 pb-7">
              <div className="mb-3 flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[var(--brand-900)] text-xs font-semibold text-white">
                  P
                </span>
                <span className="text-sm font-semibold tracking-tight">{siteConfig.name}</span>
              </div>

              {navLinks
                .filter((link) => link.label !== "Send Money To")
                .map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-lg px-3 py-3 text-sm font-medium text-[var(--neutral-600)] transition-colors hover:bg-[var(--neutral-50)] hover:text-[var(--ink)]"
                  >
                    {link.label}
                  </Link>
                ))}

              <div className="mt-2 rounded-lg bg-[var(--neutral-50)] p-1">
                <p className="px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--neutral-500)]">
                  Send Money To
                </p>
                {destinations.map((d) => (
                  <Link
                    key={d.country}
                    href={`/send-money-to/${d.country.toLowerCase()}`}
                    className="block rounded-md px-3 py-2 text-sm font-medium text-[var(--ink)] transition-colors hover:bg-[var(--brand-25)]"
                  >
                    {d.country}
                  </Link>
                ))}
              </div>

              <div className="mt-3 flex flex-col gap-2 border-t border-[var(--neutral-200)] pt-3">
                <Link
                  href={`${siteConfig.appBaseUrl}/login`}
                  className="btn-morph inline-flex h-11 items-center justify-center px-4 text-sm font-medium text-[var(--ink)] transition-colors hover:bg-[var(--neutral-100)]"
                >
                  Log in
                </Link>
                <Link
                  href={`${siteConfig.appBaseUrl}/register`}
                  className="btn-morph inline-flex h-11 items-center justify-center bg-[var(--brand-900)] px-4 text-sm font-medium text-white transition-colors hover:bg-[var(--brand-850)]"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}