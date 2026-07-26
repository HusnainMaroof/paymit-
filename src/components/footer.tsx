"use client";

import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";

const COMPANY_LINKS = [
  { label: "About Us", href: "/about-us" },
  { label: "Promotions", href: "/promotions" },
  { label: "Careers", href: "/careers" },
];

const LEGAL_LINKS = [
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Fraud Prevention Policy", href: "/fraud-prevention-policy" },
  { label: "Cookie Policy", href: "/cookie-policy" },
];

const SUPPORT_LINKS = [
  { label: "Contact Us", href: "/contact-us" },
  { label: "FAQ", href: "/help-center#faq" },
  { label: "Help Center", href: "/help-center" },
];

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/paymitlimited/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/paymitlimited",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@Paymitlimited",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/paymitlimited/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@paymitlimited",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      </svg>
    ),
  },
];

const CONTACT_INFO = [
  {
    icon: (
      <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    text: "85 Great Portland Street, First Floor, London, England, W1W 7LT",
  },
  {
    icon: (
      <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    text: "(+44)7577 220592",
  },
  {
    icon: (
      <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    text: "support@paymit.co.uk",
  },
];

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !footerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Footer columns stagger in from bottom
      tl.from(".footer-col", {
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
      });

      // Social icons pop in
      tl.from(
        ".social-icon",
        {
          scale: 0,
          opacity: 0,
          duration: 0.4,
          stagger: 0.06,
          ease: "back.out(1.7)",
        },
        "-=0.3"
      );

      // Contact items fade in
      tl.from(
        ".contact-item",
        {
          x: -20,
          opacity: 0,
          duration: 0.5,
          stagger: 0.08,
        },
        "-=0.4"
      );

      // Copyright line fades in
      tl.from(
        ".copyright-line",
        {
          opacity: 0,
          y: 10,
          duration: 0.5,
        },
        "-=0.2"
      );
    }, footerRef);

    return () => ctx.revert();
  }, [mounted]);

  return (
    <footer
      ref={footerRef}
      className="relative w-full border-t"
      style={{
        backgroundColor: "var(--colorNeutral0)",
        borderColor: "var(--colorBorderLight)",
      }}
    >
      <div
        className="mx-auto w-full max-w-[var(--layoutMaxWidth)] px-[var(--layoutMargin)] py-16 max-md:py-10 max-md:px-4"
      >
        {/* Main grid: 1 col mobile → 5 col desktop */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          {/* Col 1-2: Logo + Info (spans 2 cols on desktop) */}
          <div className="footer-col lg:col-span-2">
            {/* Logo */}
            <Link href="/" className="mb-4 inline-flex items-center gap-2.5">
              <span
                className="text-[20px] font-bold tracking-[-0.02em]"
                style={{ color: "var(--colorTextPrimary)" }}
              >
                Paymit
              </span>
            </Link>

            {/* Tagline */}
            <p
              className="mb-6 max-w-[280px] text-[14px] font-normal leading-[22px]"
              style={{ color: "var(--colorNeutral600)" }}
            >
              Fast, secure, and reliable money transfers across the globe.
            </p>

            {/* Contact info */}
            <div className="flex flex-col gap-3">
              {CONTACT_INFO.map((item, i) => (
                <div
                  key={i}
                  className="contact-item flex items-start gap-2.5"
                >
                  <span
                    className="mt-0.5 shrink-0"
                    style={{ color: "var(--colorBrand300)" }}
                  >
                    {item.icon}
                  </span>
                  <span
                    className="text-[13px] font-normal leading-[18px]"
                    style={{ color: "var(--colorNeutral600)" }}
                  >
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Social icons */}
            <div className="mt-6 flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="social-icon group flex size-9 cursor-pointer items-center justify-center rounded-[var(--borderRadiusXs)] transition-all duration-200 hover:scale-110 hover:bg-[var(--colorBrand300)] hover:text-white active:scale-95"
                  style={{
                    color: "var(--colorNeutral500)",
                    border: "1px solid var(--colorBorderLight)",
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 3: Company */}
          <div className="footer-col">
            <h4
              className="mb-4 text-[14px] font-semibold tracking-[-0.01em]"
              style={{ color: "var(--colorTextPrimary)" }}
            >
              Company
            </h4>
            <ul className="flex flex-col gap-2.5">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group relative inline-block cursor-pointer text-[13px] font-normal transition-all duration-150 hover:translate-x-1 hover:text-[var(--colorBrand300)]"
                    style={{ color: "var(--colorNeutral600)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Legal */}
          <div className="footer-col">
            <h4
              className="mb-4 text-[14px] font-semibold tracking-[-0.01em]"
              style={{ color: "var(--colorTextPrimary)" }}
            >
              Legal
            </h4>
            <ul className="flex flex-col gap-2.5">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group relative inline-block cursor-pointer text-[13px] font-normal transition-all duration-150 hover:translate-x-1 hover:text-[var(--colorBrand300)]"
                    style={{ color: "var(--colorNeutral600)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Support */}
          <div className="footer-col">
            <h4
              className="mb-4 text-[14px] font-semibold tracking-[-0.01em]"
              style={{ color: "var(--colorTextPrimary)" }}
            >
              Support
            </h4>
            <ul className="flex flex-col gap-2.5">
              {SUPPORT_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group relative inline-block cursor-pointer text-[13px] font-normal transition-all duration-150 hover:translate-x-1 hover:text-[var(--colorBrand300)]"
                    style={{ color: "var(--colorNeutral600)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div
          className="copyright-line mt-12 flex items-center justify-between border-t pt-6 max-md:flex-col max-md:gap-4"
          style={{ borderColor: "var(--colorBorderLight)" }}
        >
          <p
            className="text-[12px] font-normal"
            style={{ color: "var(--colorNeutral500)" }}
          >
            © 2025 Paymit Limited. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="cursor-pointer transition-colors duration-150 hover:text-[var(--colorBrand300)]"
                style={{ color: "var(--colorNeutral400)" }}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
