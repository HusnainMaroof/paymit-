"use client";

import Link from "next/link";
import { useState, useRef, useEffect, useCallback } from "react";
import { NAV_LINKS, isDropdown, type NavDropdown } from "@/data/nav";

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const close = useCallback(() => setMobileOpen(false), []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [mobileOpen, close]);

  return (
    <>
      <div
        className="fixed top-[10px] z-50 w-full"
        style={{ padding: "0 var(--layoutMargin)" }}
      >
        <nav
          className="mx-auto flex h-auto max-w-[var(--layoutMaxWidth)] items-center justify-between border bg-white p-4 max-md:px-3 max-md:py-2.5"
          style={{
            borderRadius: "var(--borderRadiusXs)",
            borderColor: "var(--colorBorderLight)",
          }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <span
              className="text-[20px] font-bold tracking-[-0.02em] max-md:text-[18px]"
              style={{ color: "var(--colorTextPrimary)" }}
            >
              Paymit
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="ml-auto hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((item, idx) =>
              isDropdown(item) ? (
                <NavDropdown key={idx} item={item} />
              ) : (
                <Link
                  key={idx}
                  href={item.href}
                  className="btn-morph inline-flex h-10 items-center justify-center px-3 text-[14px] font-medium transition-colors duration-150 hover:bg-[var(--colorNeutral100)]"
                  style={{ color: "var(--colorTextPrimary)" }}
                >
                  {item.label}
                </Link>
              ),
            )}
          </div>

          {/* Divider */}
          <span
            className="mx-3 hidden h-5 w-px lg:block"
            style={{ backgroundColor: "var(--colorBorderPrimary)" }}
          />

          {/* Action buttons */}
          <div className="flex items-center gap-2 max-sm:gap-1.5">
            <Link
              href="https://app.paymit.co.uk/login"
              className="btn-morph hidden h-10 items-center justify-center border bg-white px-5 text-[14px] font-medium transition-all duration-200 hover:scale-[1.03] hover:border-[var(--colorNeutral300)] hover:bg-[var(--colorNeutral100)] hover:shadow-sm sm:inline-flex"
              style={{ borderColor: "var(--colorBorderLight)", color: "var(--colorTextPrimary)" }}
            >
              Login
            </Link>
            <Link
              href="https://app.paymit.co.uk/register"
              className="btn-morph inline-flex h-10 items-center justify-center px-5 text-[14px] font-medium text-white transition-all duration-200 hover:scale-[1.03] hover:bg-[var(--colorBrand850)] hover:shadow-md hover:shadow-[var(--colorBrand300)]/30 max-sm:px-4"
              style={{ backgroundColor: "var(--colorBrand900)" }}
            >
              Sign Up
            </Link>

            {/* Mobile hamburger — animated morph */}
            <button
              className="ml-1 inline-flex size-10 cursor-pointer items-center justify-center rounded-[var(--borderRadiusXs)] border bg-white transition-all duration-200 hover:border-[var(--colorNeutral300)] hover:bg-[var(--colorNeutral100)] active:scale-90 lg:hidden"
              style={{ borderColor: "var(--colorBorderLight)", color: "var(--colorTextPrimary)" }}
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              <div className="relative h-4 w-5">
                <span
                  className="absolute left-0 h-[2px] w-5 rounded-full bg-current transition-all duration-300 ease-out"
                  style={{
                    top: mobileOpen ? "7px" : "2px",
                    transform: mobileOpen ? "rotate(45deg)" : "none",
                  }}
                />
                <span
                  className="absolute left-0 top-[7px] h-[2px] w-5 rounded-full bg-current transition-all duration-200"
                  style={{ opacity: mobileOpen ? 0 : 1, transform: mobileOpen ? "scaleX(0)" : "scaleX(1)" }}
                />
                <span
                  className="absolute left-0 h-[2px] w-5 rounded-full bg-current transition-all duration-300 ease-out"
                  style={{
                    top: mobileOpen ? "7px" : "12px",
                    transform: mobileOpen ? "rotate(-45deg)" : "none",
                  }}
                />
              </div>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile drawer + backdrop */}
      <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-[3px] lg:hidden"
            onClick={close}
            style={{
              opacity: mobileOpen ? 1 : 0,
              pointerEvents: mobileOpen ? "auto" : "none",
              transition: "opacity 0.3s ease-out",
            }}
          />

          {/* Drawer */}
          <div
            className="fixed right-0 top-0 z-50 flex h-full w-[300px] max-w-[85vw] flex-col bg-white lg:hidden"
            style={{
              borderLeft: "1px solid var(--colorBorderLight)",
              transform: mobileOpen ? "translateX(0)" : "translateX(100%)",
              transition: "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
              boxShadow: mobileOpen ? "-8px 0 40px rgba(0,0,0,0.12)" : "none",
            }}
          >
            {/* Drawer header */}
            <div className="flex items-center justify-between p-5 pb-3">
              <span
                className="text-[18px] font-bold"
                style={{ color: "var(--colorTextPrimary)" }}
              >
                Menu
              </span>
              <button
                className="inline-flex size-8 cursor-pointer items-center justify-center rounded-[8px] transition-all duration-200 hover:bg-[var(--colorNeutral100)] active:scale-90"
                style={{ color: "var(--colorTextPrimary)" }}
                onClick={close}
                aria-label="Close menu"
              >
                <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Menu items */}
            <div
              className="flex flex-col gap-0.5 overflow-y-auto px-3 py-2"
              style={{ opacity: mobileOpen ? 1 : 0, transition: "opacity 0.3s ease-in 0.1s" }}
            >
              {NAV_LINKS.map((item, idx) =>
                isDropdown(item) ? (
                  <MobileDropdown
                    key={idx}
                    item={item}
                    onClose={close}
                    idx={idx}
                    open={mobileOpen}
                  />
                ) : (
                  <DrawerLink
                    key={idx}
                    href={item.href}
                    label={item.label}
                    idx={idx}
                    open={mobileOpen}
                    onClose={close}
                  />
                ),
              )}
            </div>

            {/* Action buttons */}
            <div className="mt-auto flex flex-col gap-2 p-5 pt-4"
              style={{
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? "translateY(0)" : "translateY(12px)",
                transition: "all 0.3s ease-out 0.25s",
              }}
            >
              <Link
                href="https://app.paymit.co.uk/login"
                className="btn-morph inline-flex h-11 items-center justify-center border bg-white px-5 text-[15px] font-medium transition-all duration-200 active:scale-[0.98]"
                style={{ borderColor: "var(--colorBorderLight)", color: "var(--colorTextPrimary)" }}
                onClick={close}
              >
                Login
              </Link>
              <Link
                href="https://app.paymit.co.uk/register"
                className="btn-morph inline-flex h-11 items-center justify-center px-5 text-[15px] font-medium text-white transition-all duration-200 active:scale-[0.98]"
                style={{ backgroundColor: "var(--colorBrand900)" }}
                onClick={close}
              >
                Sign Up
              </Link>
            </div>
          </div>
      </>
    </>
  );
}

function DrawerLink({
  href,
  label,
  idx,
  open,
  onClose,
}: {
  href: string;
  label: string;
  idx: number;
  open: boolean;
  onClose: () => void;
}) {
  return (
    <Link
      href={href}
      className="rounded-[8px] px-3 py-2.5 text-[15px] font-medium transition-all duration-200 hover:bg-[var(--colorNeutral100)] hover:translate-x-1 active:scale-[0.98]"
      style={{
        color: "var(--colorTextPrimary)",
        opacity: open ? 1 : 0,
        transform: open ? "translateX(0)" : "translateX(20px)",
        transition: "all 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
        transitionDelay: `${0.08 + idx * 0.05}s`,
      }}
      onClick={onClose}
    >
      {label}
    </Link>
  );
}

function NavDropdown({ item }: { item: NavDropdown }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback((e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      setOpen(false);
    }
  }, []);

  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open, handleClickOutside]);

  return (
    <div className="relative" ref={ref}>
      <button
        className="btn-morph inline-flex h-10 cursor-pointer items-center gap-1 px-3 text-[14px] font-medium transition-colors duration-150 hover:bg-[var(--colorNeutral100)]"
        style={{ color: "var(--colorTextPrimary)" }}
        onClick={() => setOpen((o) => !o)}
      >
        {item.label}
        <svg
          className={`size-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      <div
        className={`absolute left-0 top-full min-w-[180px] origin-top pt-1 transition-all duration-200 ${
          open ? "translate-y-0 opacity-100" : "-translate-y-1 pointer-events-none opacity-0"
        }`}
      >
        <div
          className="overflow-hidden rounded-[var(--borderRadiusXs)] border bg-white p-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
          style={{ borderColor: "var(--colorBorderLight)" }}
        >
          {item.items.map((dest, i) => (
            <Link
              key={dest.href}
              href={dest.href}
              className="flex cursor-pointer items-center gap-2 rounded-[8px] px-3 py-2 text-[14px] font-medium transition-all duration-150 hover:translate-x-0.5 hover:bg-[var(--colorNeutral100)]"
              style={{
                color: "var(--colorTextPrimary)",
                animation: open ? `fade-in-dropdown 0.2s ease-out ${i * 0.03}s both` : "none",
              }}
              onClick={() => setOpen(false)}
            >
              {dest.flag && (
                <img
                  src={`https://flagcdn.com/w40/${dest.flag}.png`}
                  srcSet={`https://flagcdn.com/w40/${dest.flag}.png 1x, https://flagcdn.com/w80/${dest.flag}.png 2x`}
                  width={18}
                  height={13.5}
                  alt={`${dest.label} flag`}
                  loading="lazy"
                  className="block rounded-[2px] object-cover"
                />
              )}
              {dest.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileDropdown({
  item,
  onClose,
  idx,
  open,
}: {
  item: NavDropdown;
  onClose: () => void;
  idx: number;
  open: boolean;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      style={{
        opacity: open ? 1 : 0,
        transform: open ? "translateX(0)" : "translateX(20px)",
        transition: "all 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
        transitionDelay: `${0.08 + idx * 0.05}s`,
      }}
    >
      <button
        className="flex w-full cursor-pointer items-center justify-between rounded-[8px] px-3 py-2.5 text-[15px] font-medium transition-all duration-200 hover:bg-[var(--colorNeutral100)] active:scale-[0.98]"
        style={{ color: "var(--colorTextPrimary)" }}
        onClick={() => setExpanded((e) => !e)}
      >
        {item.label}
        <svg
          className={`size-4 transition-transform duration-300 ease-out ${expanded ? "rotate-180" : ""}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      <div
        style={{
          maxHeight: expanded ? "500px" : "0px",
          opacity: expanded ? 1 : 0,
          overflow: "hidden",
          transition: "max-height 0.35s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.25s ease-out",
        }}
      >
        <div className="flex flex-col gap-0.5 pl-4 pt-1">
          {item.items.map((dest, i) => (
            <Link
              key={dest.href}
              href={dest.href}
              className="flex items-center gap-2 rounded-[8px] px-3 py-2 text-[14px] font-normal transition-all duration-200 hover:translate-x-1 hover:bg-[var(--colorNeutral100)]"
              style={{
                color: "var(--colorNeutral600)",
                opacity: expanded ? 1 : 0,
                transform: expanded ? "translateX(0)" : "translateX(-8px)",
                transition: "all 0.3s ease-out",
                transitionDelay: `${i * 0.04}s`,
              }}
              onClick={onClose}
            >
              {dest.flag && (
                <img
                  src={`https://flagcdn.com/w40/${dest.flag}.png`}
                  srcSet={`https://flagcdn.com/w40/${dest.flag}.png 1x, https://flagcdn.com/w80/${dest.flag}.png 2x`}
                  width={18}
                  height={13.5}
                  alt={`${dest.label} flag`}
                  loading="lazy"
                  className="block rounded-[2px] object-cover"
                />
              )}
              {dest.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}