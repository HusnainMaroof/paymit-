# PAYMIT.CO.UK — Full Scraped Content (Organized by Page)

**Website:** https://paymit.co.uk/
**Built with:** Next.js (React) + Tailwind CSS + shadcn/ui
**Fetched:** All public pages

---

## TABLE OF CONTENTS

- [1. GLOBAL — Site-Wide Elements](#1-global--site-wide-elements)
  - [1.1 SEO & Metadata](#11-seo--metadata)
  - [1.2 Tech Stack](#12-tech-stack)
  - [1.3 Third-Party Integrations / Tracking](#13-third-party-integrations--tracking)
  - [1.4 Navigation / Header](#14-navigation--header)
  - [1.5 Footer](#15-footer)
  - [1.6 404 Page](#16-404-page)
- [2. HOME PAGE (/)](#2-home-page-)
  - [2.1 Hero Section](#21-hero-section)
  - [2.2 Currency Converter](#22-currency-converter)
  - [2.3 Why Choose Paymit](#23-why-choose-paymit)
  - [2.4 How It Works — 3 Easy Steps](#24-how-it-works--3-easy-steps)
  - [2.5 FAQ Accordion](#25-faq-accordion)
  - [2.6 Mobile App CTA](#26-mobile-app-cta)
- [3. ABOUT US (/about-us)](#3-about-us-about-us)
- [4. CAREERS (/careers)](#4-careers-careers)
- [5. PROMOTIONS (/promotions)](#5-promotions-promotions)
- [6. HELP CENTER (/help-center)](#6-help-center-help-center)
- [7. TERMS OF SERVICE (/terms-of-service)](#7-terms-of-service-terms-of-service)
- [8. PRIVACY POLICY / GDPR (/privacy-policy)](#8-privacy-policy--gdpr-privacy-policy)
- [9. FRAUD PREVENTION POLICY (/fraud-prevention-policy)](#9-fraud-prevention-policy-fraud-prevention-policy)
- [10. COOKIE POLICY (/cookie-policy)](#10-cookie-policy-cookie-policy)
- [11. CONTACT US (/contact-us)](#11-contact-us-contact-us)
- [12. APP STORE & GOOGLE PLAY (External)](#12-app-store--google-play-external)
- [13. TRUSTPILOT REVIEWS (External)](#13-trustpilot-reviews-external)
- [14. SOCIAL MEDIA (External)](#14-social-media-external)
- [15. COUNTRY & CORRIDOR DATA (Source Code)](#15-country--corridor-data-source-code)
  - [15.1 Master Corridor Table (All 9)](#151-master-corridor-table-all-9)
  - [15.2 Country Data Breakdown By File](#152-country-data-breakdown-by-file)
  - [15.3 Live Send-To Pages (6)](#153-live-send-to-pages-6)
    - [15.3.1 India](#1531-india)
    - [15.3.2 Nigeria](#1532-nigeria)
    - [15.3.3 Ghana](#1533-ghana)
    - [15.3.4 Senegal](#1534-senegal)
    - [15.3.5 Pakistan](#1535-pakistan)
    - [15.3.6 Bangladesh](#1536-bangladesh)
  - [15.4 Defined in Source But Not Deployed (3)](#154-defined-in-source-but-not-deployed-3)
- [16. CURRENCY CONVERTER COUNTRIES (12 Currencies)](#16-currency-converter-countries-12-currencies)
  - [16.1 Master Currency Table](#161-master-currency-table)
  - [16.2 GBP Exchange Rates (from currencies.ts)](#162-gbp-exchange-rates-from-currenciests)

---

## 1. GLOBAL — Site-Wide Elements

### 1.1 SEO & Metadata

| Tag | Content |
|-----|---------|
| **Title** | Paymit \| Fast, Secure International Money Transfers |
| **Meta Description** | Send money globally with Paymit. Enjoy low fees, great exchange rates, and a secure platform for all your remittance needs. |
| **Meta Keywords** | remittance, money transfer, send money online, international money transfer, paymit |
| **Facebook Domain Verification** | w1ftth4wfjtv84e6950njoxyd5mri1 |
| **Favicon** | /favicon.ico (type: image/x-icon, size: 256x256) |
| **Viewport** | width=device-width, initial-scale=1 |
| **CharSet** | utf-8 |

### 1.2 Tech Stack

| Technology | Details |
|------------|---------|
| **Framework** | Next.js (React) |
| **UI Library** | shadcn/ui (Radix UI primitives — DropdownMenu, Dialog, Accordion, Select) |
| **Styling** | Tailwind CSS (v4 class utilities) |
| **Fonts** | PT Sans (body, w400/700) · Space Grotesk (headline, w400/500/700) |
| **Icons** | Lucide React icons |
| **Flags** | lipis/flag-icons via jsdelivr CDN |

### 1.3 Third-Party Integrations / Tracking

| Integration | ID / Details | Purpose |
|-------------|--------------|---------|
| **Facebook Pixel** | 2251509101982654 | Conversion tracking & analytics |
| **Zoho SalesIQ** | siq26053d7fbf3d4acdbd23d3c44709ef33402ba6e143d1073be01ee3c484fcbf21 | Live chat widget |
| **Google Fonts** | preconnect to fonts.googleapis.com + fonts.gstatic.com | PT Sans / Space Grotesk |

### 1.4 Navigation / Header

**Type:** Sticky header, shadow-md, bg-primary, text-primary-foreground

#### Desktop Navigation (left-aligned)

| Item | Type | Href |
|------|------|------|
| Paymit Logo (white SVG, 120x34) | Link (home) | `/` |
| About Us | Text link | `/about-us` |
| Careers | Text link | `/careers` |
| Promotions | Text link | `/promotions` |
| Send Money To | Dropdown (Radix UI) — see destinations below | — |
| Mobile App | Text link (scroll) | `/#mobile-app-section` |

**"Send Money To" dropdown:** Button with Lucide `chevron-down` icon (rotates 180° on open via Radix UI). Content rendered client-side. Destinations served in nav: **Nigeria, Ghana, Gambia, Cameroon, Senegal, Zambia, Pakistan, India, Bangladesh** (more coming soon). Only 6 have live pages — see [Section 15](#15-send-to-country-pages).

#### Desktop Action Buttons (right-aligned)

| Item | Style | Href |
|------|-------|------|
| Login | Text link, hover:bg-white/10 | `https://app.paymit.co.uk/login` |
| Sign Up | White button (bg-white text-primary), hover:bg-white/90 | `https://app.paymit.co.uk/register` |

#### Mobile Navigation

- **Hamburger icon** (Lucide `Menu`, 24x24) inside a button
- **sr-only text:** "Open menu"
- Uses Radix UI Dialog (mobile drawer/sheet) — content rendered client-side

### 1.5 Footer

**Layout:** Grid (1 col mobile → 5 col desktop). Logo+info spans 2 cols. Company / Legal / Support each take 1 col.

| Element | Content |
|---------|---------|
| **Logo** | Paymit Logo (blue SVG, 120x34) |
| **Tagline** | Fast, secure, and reliable money transfers across the globe. |
| **Address** | 85 Great Portland Street, First Floor, London, England, W1W 7LT (with MapPin icon) |
| **Phone** | (+44)7577 220592 (with Phone icon) |
| **Email** | support@paymit.co.uk (with Mail icon) |
| **Copyright** | © 2025 Paymit Limited. All Rights Reserved. |

**Column 3 — Company:**
- About Us `/about-us`
- Promotions `/promotions`
- Careers `/careers`

**Column 4 — Legal:**
- Terms of Service `/terms-of-service`
- Privacy Policy `/privacy-policy`
- Fraud Prevention Policy `/fraud-prevention-policy`
- Cookie Policy `/cookie-policy`

**Column 5 — Support:**
- Contact Us `/contact-us`
- FAQ `/help-center#faq`
- Help Center `/help-center`

**Social Media Icons (Lucide SVG):** Facebook · LinkedIn · YouTube · Instagram · TikTok

| Platform | URL |
|----------|-----|
| Facebook | https://www.facebook.com/paymitlimited/ |
| LinkedIn | https://www.linkedin.com/company/paymitlimited |
| YouTube | https://www.youtube.com/@Paymitlimited |
| Instagram | https://www.instagram.com/paymitlimited/ |
| TikTok | https://www.tiktok.com/@paymitlimited |

### 1.6 404 Page

Custom Next.js 404 page:
- Title: "404: This page could not be found."
- Inline styles: system-ui font, centred flex layout
- Dark mode support via `prefers-color-scheme`

---

## 2. HOME PAGE (/)

### 2.1 Hero Section

- **Background:** London city image (object-cover, opacity-50) + gradient overlay (`bg-gradient-to-t from-background via-background/80 to-transparent`)
- **Layout:** 2-column grid (text left, converter right)
- **Headline:** "Send Money Worldwide" (text-4xl → lg:text-7xl, font-headline, tracking-tighter)
- **Subtext:** "Experience fast, secure, and hassle-free international transfers with our commitment to the lowest fees."
- **CTAs:**
  - "Get Started" — primary button with Lucide `arrow-right` icon → `https://app.paymit.co.uk/register`
  - "How It Works" — outline button (border-input, bg-background) → `/#how-it-works`

### 2.2 Currency Converter

- **Container:** Circular form (`rounded-full w-96 h-96`, bg-background/90 backdrop-blur-sm, border-4 border-primary, shadow-2xl shadow-primary/40)
- **"You Pay":** GBP input (value: £1,000.00) with UK flag icon (from lipis/flag-icons CDN)
- **"They Get":** Disabled input + "Select" currency dropdown (Radix UI Select, also disabled)
- **Button:** "Send Money Now" — rounded-full, bg-primary, w-48 → `https://app.paymit.co.uk/login`

### 2.3 Why Choose Paymit

**Background:** `bg-card`
**Layout:** 3-column grid, each row: icon (circle, bg-primary/10) + heading + description

| Icon | Heading | Description |
|------|---------|-------------|
| 💷 | Best Rates, Bigger Smiles | Avg. customers save £2.13 for every £100 sent vs market average |
| 🚀 | Speed-to-Hand | Avg. transfer reaches recipient in ~1 minute |
| ❤️ | Repeat Love Rate | Over 70% of customers make another transfer within the same month |

### 2.4 How It Works — 3 Easy Steps

**Layout:** 3-column card grid (shadow-sm, hover:shadow-lg, transition-shadow)
**Icons:** Lucide icons in primary colour, circular bg-primary/10 container (w-20 h-20)

| Step | Icon | Title | Detail |
|------|------|-------|--------|
| 1 | UserPlus | Create Your Account | Sign up free in minutes (email only) |
| 2 | Send | Set Up Your Transfer | Enter amount + destination; fees & rates shown upfront |
| 3 | CircleCheckBig | Send & Track | Fund via bank/card; we handle the rest with live updates |

### 2.5 FAQ Accordion

**Type:** Radix UI Accordion (chevron-down rotates 180° on open). All answer panels hidden in static HTML — loaded client-side.
**Questions (10):**

1. How safe is Paymit?
2. How do I sign up?
3. How much does Paymit cost per transfer?
4. How do I contact Paymit?
5. Why was my transfer cancelled or rejected?
6. How can I track my transfer status?
7. My transfer is pending. How do I fix it?
8. Why is my account suspended/locked?
9. How do I send money online?
10. How does "refer a friend" work?

### 2.6 Mobile App CTA

- **Container:** `rounded-3xl bg-primary shadow-xl shadow-primary/30 overflow-visible`
- **Phone mockup image:** Positioned absolute (`-right-16 -top-56`, w-[700px]) on desktop; centered on mobile
- **Headline:** "Send Money on the Go"
- **Subtext:** "Download the Paymit app for the easiest way to send and track your money transfers anytime, anywhere."
- **Buttons:**
  - Apple App Store → `https://apps.apple.com/gb/app/paymit/id6751227334` (with Apple SVG)
  - Google Play → `https://play.google.com/store/apps/details?id=com.paymit.transfer` (with Google SVG)

---

## 3. ABOUT US (/about-us)

### Company Overview

| Field | Detail |
|-------|--------|
| **Company** | Paymit Limited |
| **Type** | Payment Service Provider (PSP) |
| **Focus** | Bringing "brick and mortar" money remittance to the digital age |
| **Office** | 85 Great Portland Street, First Floor, London, W1W 7LT |

### Regulatory Status

| Body | Status | Reference |
|------|--------|-----------|
| **FCA** | Small Payment Institution (SPI) — regulated under Payment Services Regulation 2017 | License #945293 |
| **HMRC** | Money Services Business — compliant with Money Laundering Regulations | Reg #XFML00000159053 |

### Vision

> "Create a world where sending money to family and loved ones is fast, affordable, and completely secure. Eliminate the barriers of distance, enabling people to support and connect with those who matter most anytime, anywhere."

### Mission

> "Provide individuals with seamless, dependable, and fast money transfers through **Cash Pickup**, **Direct-to-Bank**, and **Mobile Wallets**. Combine competitive rates, transparent fees, and real-time tracking with advanced security measures."

---

## 4. CAREERS (/careers)

- **Status:** No open roles currently
- **Message:** "We're building the future of international money transfers with a small, passionate team."
- **CTA:** Connect on LinkedIn for future opportunities
- **Image:** Team culture photo (`/assets/career.png`)

---

## 5. PROMOTIONS (/promotions)

### Offer 1 — Try Us Free
- **Headline:** No Fee on Your First Transaction
- **Detail:** Waiving the fee on the very first transfer for new customers
- **CTA:** Send Money Now

### Offer 2 — Refer a Friend
- **Headline:** Refer a Friend & Earn £5
- **Detail:** Get £5 reward after your friend sends at least £100 on their first transfer
- **CTA:** Refer a Friend

---

## 6. HELP CENTER (/help-center)

### Support Categories

| Category | Description |
|----------|-------------|
| Account Management | Manage profile, settings, and verification |
| Transfers | Everything about sending money |
| Getting Started | Basics of setting up and using Paymit |
| Security & Fraud | Account protection and fraud prevention |

### FAQ
*(Same 10 questions as homepage accordion — listed in [2.5](#25-faq-accordion))*

### Support Channels (24/7)

| Channel | Details |
|---------|---------|
| **Email Support** | support@paymit.co.uk (detailed response) |
| **Phone Support** | (+44)7577 220592 (speak with team directly) |

---

## 7. TERMS OF SERVICE (/terms-of-service)

**Last Updated:** December 2024

### Key Definitions

| Term | Definition |
|------|------------|
| You / Your | Person using Paymit Website as Sender |
| We / Us | Paymit Ltd., its affiliates, agents, and partners |
| Transaction | Execution of remitter's instructions via any electronic means |
| Business Day | Any day except Sat/Sun when banks are open in England |

### About Paymit Ltd.

- Incorporated in England
- FCA FRN: 945293
- HMRC MSB: XFML00000159053
- **Registered Office:** 85 Great Portland Street, First Floor, London, England, W1W 7LT
- **Scope:** Only money remittance — not a financial partner for third-party services

### Contract
- Each transfer = separate agreement
- Paymit may use partners to process transactions
- Terms may be modified per legal/regulatory requirements (not retroactive)

### Services Offered
- **Cash Collection** at agent locations
- **Bank Transfer** to recipient's bank account
- **Digital Wallet** via mobile app/web portal
- **Delivery Timeframes:** Minutes to max 7 business days (depending on partner location & compliance)

### Security & Responsibilities
- Paymit never asks for passwords, OTPs, or CVC codes
- Does not store card details
- All transactions encrypted
- Users must keep login details safe, ensure sufficient funds, update credentials regularly

### Eligibility
- 18+ years old
- Personal use only (no gambling, escrow, or trust)
- ID verification (KYC) required
- Control number/PIN only to be shared with recipient

### Our Responsibility
- Reasonable care in processing
- **Not liable for:** card issuer issues, incorrect/incomplete info, system failures, unauthorized use (unless our negligence), exchange rate fluctuations, third-party restrictions, agent location hours, currency availability

### Suspension / Termination Triggers
- Inaccurate/fraudulent/incomplete details
- Unable to verify identity
- Money laundering/fraud/terrorist financing concerns
- Regulatory/government requirement
- Court order
- Non-compliance with terms
- Attempting to use another's card/bank account
- Extended account inactivity

### Your Responsibilities
- Provide accurate, complete information
- No illegal activities or transactions with sanctioned entities
- Comply with KYC/AML verification requests
- Keep account credentials secure
- Share transaction details **only** with intended recipient
- Allow Paymit to report suspicious transactions to authorities

### Refunds & Cancellations
- Transaction fees non-refundable unless Paymit error
- Refunds possible if recipient hasn't received funds after **30 business days**
- Must be requested in writing
- Processing: 4-5 business days
- Not liable for incorrect recipient details

### Fees & Exchange Rates
- Disclosed before processing
- Based on interbank rates + margin
- **Additional charges:** receiving bank fees, local taxes/charges, mobile network fees
- **Uncollected transactions:** admin fee after 1 year; considered expired after 90 days

### Compliance Framework
- UK Money Laundering Regulations 2017 (as amended)
- Proceeds of Crime Act 2002
- Counter-Terrorism Act 2008
- All FCA and HMRC requirements
- All transactions screened against financial sanctions lists

### Complaints Procedure
1. Contact: **support@paymit.co.uk**
2. Initial response within **15 business days** (or holding response)
3. Final response within **35 days**
4. Escalation: **Financial Ombudsman Service**

### Governing Law
- Laws of England and Wales
- Exclusive jurisdiction of courts of England and Wales

---

## 8. PRIVACY POLICY / GDPR (/privacy-policy)

**Last Updated:** March 2025 | **Version:** 2025.1

### Data Collected

| Category | Details |
|----------|---------|
| Customer Data | Personal info, ID documents, transaction history |
| Employee & Contractor Data | HR records, payroll, background checks |
| Business Partner & Supplier Data | Company details, contact info, contracts |

### How Data Is Used

1. **Providing Services** — KYC/AML identity verification, processing transfers, fraud prevention, FCA/HMRC compliance
2. **Business Operations** — Account management, transaction records, internal audits
3. **Marketing** — Service updates, newsletters (with consent), surveys, feedback collection

> **Policy:** Paymit **never sells, rents, or trades** personal data.

### Legal Basis for Processing

| Basis | Application |
|-------|-------------|
| Contractual Obligation | Remittance & currency exchange services |
| Legal Obligation | AML/KYC laws, HMRC & FCA regulations |
| Legitimate Interest | Fraud prevention, risk management, service improvement |
| Consent | Marketing & promotional communication (opt-in required) |

### Data Sharing / Disclosure

| Recipient | Purpose |
|-----------|---------|
| FCA, HMRC, National Crime Agency (NCA) | Regulatory & law enforcement |
| Banking partners & payment processors | Secure financial transactions |
| Fraud prevention & credit agencies | Risk mitigation, AML checks |
| Cloud storage & IT providers | Secure data storage, system operations |

### International Data Transfers

Transfers outside UK/EEA for:
- Processing international remittances
- Compliance checks with international bodies
- Secure cloud storage

**Safeguards:**
- Standard Contractual Clauses (SCCs) approved by UK GDPR
- Countries with adequate data protection laws only
- Encryption & access controls

### Data Retention

| Data Type | Retention Period | Legal Basis |
|-----------|-----------------|-------------|
| Customer Data | 5 years after end of business relationship | MLR 2017 |
| Employee Records | 6 years after termination | Tax & legal compliance |
| Transaction & Compliance Reports (AML/SARs) | 6 years | FCA & HMRC regulations |
| Marketing Data | Until consent withdrawn or inactivity | GDPR consent rules |

**Disposal:** Encrypted deletion for digital data; industrial shredding for physical records; backups wiped after retention period.

### Data Security Measures

- **Encryption:** All stored and transmitted data encrypted
- **Authentication:** 2FA mandatory for staff & customer logins
- **Access Controls:** Role-based, need-to-know, regular audits
- **Network:** Firewall + Intrusion Detection Systems (IDS)
- **Audits:** Regular security audits, penetration testing, vulnerability assessments
- **Training:** Mandatory annual GDPR & data protection training for employees

### Individual Rights (UK GDPR)

1. Access personal data
2. Request rectification
3. Request erasure ("Right to be Forgotten")
4. Restrict processing
5. Data portability
6. Object to processing (including marketing)
7. Withdraw consent
8. Lodge a complaint with the ICO

**To exercise rights:** Email `support@paymit.co.uk`

### Data Breach Response

1. Assessment & containment
2. Notify ICO within 72 hours (if high risk)
3. Notify affected individuals without undue delay
4. Implement preventative measures

### Contact

- **Email:** support@paymit.co.uk
- **Address:** 85 Great Portland Street, First Floor, London, W1W 7LT
- **Complaint:** Information Commissioner's Office (ICO)

---

## 9. FRAUD PREVENTION POLICY (/fraud-prevention-policy)

**Last Updated:** December 2024 | **Version:** 2024.1

### Zero-Tolerance Policy
All employees, customers, and partners must uphold honesty, transparency, and accountability.

### Legislative Framework

| Legislation | Relevance |
|-------------|-----------|
| Fraud Act 2006 | Criminal fraud |
| Bribery Act 2010 | Corruption |
| Money Laundering Regulations 2017 | AML compliance |
| Proceeds of Crime Act 2002 | Asset recovery |
| GDPR & Data Protection Act 2018 | Data protection |
| FCA & HMRC Regulatory Framework | Financial regulation |

### Fraud Categories
- Theft
- Identity Theft
- False Accounting
- Bribery & Corruption
- Conspiracy to Defraud

### Fraud Types Addressed
- Consumer Fraud
- Account Takeover & Unauthorized Access
- Card Fraud
- Money Laundering via Platform
- Internal Fraud
- Chargeback Fraud
- Phishing & Social Engineering Attacks

### Reporting & Response
1. **Investigate & Block** — Compliance team reviews suspicious transactions
2. **Report to Authorities** — Action Fraud / National Crime Agency (NCA)
3. **Legal Action** — Account termination + prosecution

**Report Fraud:** https://reporting.actionfraud.police.uk/login
**Email:** security@paymit.co.uk

---

## 10. COOKIE POLICY (/cookie-policy)

### Cookie Types

| Category | Purpose |
|----------|---------|
| **Essential** | Authentication, security features |
| **Performance & Analytics** | Usage understanding, performance improvement (e.g. Google Analytics) |
| **Functionality** | Remember preferences (language, region) |
| **Marketing** | Relevant ads, campaign tracking |

### Cookie Categories (by lifespan/source)
- **Session Cookies** — expire on browser close
- **Persistent Cookies** — stored for a set period
- **First-party Cookies** — set by Paymit directly
- **Third-party Cookies** — set by analytics partners (e.g. Google Analytics)

### Management
- Cookie consent tool available on site
- Browser controls can adjust settings
- Rejecting cookies may restrict some functionality

---

## 11. CONTACT US (/contact-us)

| Channel | Details |
|---------|---------|
| **Office Address** | 85 Great Portland Street, First Floor, London, England, W1W 7LT |
| **Email** | support@paymit.co.uk |
| **WhatsApp** | (+44)7577 220592 |
| **Phone** | (+44)7577 220592 |
| **Contact Form** | Fields: Full Name, Email Address, Subject, Message + Send Message button |

---

## 12. APP STORE & GOOGLE PLAY (External)

### Apple App Store
- **App Name:** Paymit Limited
- **Description:** International money transfers made simple, fast, and secure. For UK residents sending money home.
- **URL:** https://apps.apple.com/gb/app/paymit/id6751227334
- **Published:** Nov 5, 2025

### Google Play Store
| Field | Detail |
|-------|--------|
| **App Name** | Paymit Limited |
| **Rating** | 4.7 (7 reviews) |
| **Downloads** | 500+ |
| **Developer** | Maryam Tahir (nam.nguyen@emlotech.com, UK) |
| **Contact Phone** | +447930318909 |
| **Support Email** | info@paymit.co.uk |
| **Last Updated** | Dec 11, 2025 |
| **Content Rating** | Rated for 3+ |

**Why Paymit (from app description):**
- Same-day delivery
- Wholesale FX & flat fees — zero surprises
- First transfer fee-free
- Refer & earn £5 when friends join
- Live push alerts from "Sent" to "Received"
- Biometric login, 2-factor approval & bank-grade encryption
- Fully regulated under UK FCA rules

**Delivery methods:** Bank Deposit, Cash Pickup, Mobile Wallet, Mobile Top-ups

**Supported corridors:**
| Country | Region |
|---------|--------|
| Nigeria | Africa |
| Ghana | Africa |
| Gambia | Africa |
| Cameroon | Africa |
| Senegal | Africa |
| Zambia | Africa |
| Pakistan | South Asia |
| India | South Asia |
| Bangladesh | South Asia |

> More destinations coming soon.

---

## 13. TRUSTPILOT REVIEWS (External)

- **URL:** https://www.trustpilot.com/review/paymit.co.uk
- **Rating:** 4.6 / 5 (Excellent)
- **Total Reviews:** 28

### Rating Distribution

| Stars | % |
|-------|---|
| 5-star | 96% |
| 4-star | 0% |
| 3-star | 0% |
| 2-star | 0% |
| 1-star | 4% |

### Review Highlights

| Reviewer | Date | Quote |
|----------|------|-------|
| Kofi Ababio | Dec 2025 | "Excellent rate. Fast and Best customer support unlike others. Consultant Amir was very polite, patient and knowledgeable." |
| Florence Kyei | Dec 2025 | "Started with a small amount... panicked when I typed wrong account number. This was quickly sorted. Very good customer service." |
| Amos | Mar 2026 | "The best money transfer app is PAYMIT MONEY TRANSFER, instant receive, reliable and legit" |
| Jacqueline Anane | Nov 2025 | "Good service, with the highest rate, user friendly. They respond to any concern you have. Customer service is excellent." |
| Eric Agyapong | Dec 2025 | "Best rate at the moment. Good rate and fast transaction. Good customer relations and support." |
| Saira Naz | Nov 2025 | "Fastest services and quick delivery of amount. Had great experience and staff is also very helpful. 100% Recommended." |

---

## 14. SOCIAL MEDIA (External)

| Platform | Handle | URL |
|----------|--------|-----|
| Facebook | @paymitlimited | https://www.facebook.com/paymitlimited/ |
| LinkedIn | /company/paymitlimited | https://www.linkedin.com/company/paymitlimited |
| YouTube | @Paymitlimited | https://www.youtube.com/@Paymitlimited |
| Instagram | @paymitlimited | https://www.instagram.com/paymitlimited/ |
| TikTok | @paymitlimited | https://www.tiktok.com/@paymitlimited |

---

## 15. SEND-TO COUNTRY PAGES

**6 live pages with dedicated content, 3 listed in nav but return homepage.**
**Route pattern:** `/send-to/[country]`
**Layout:** Hero section (headline + description + "Send Now" CTA + country image) → Delivery options grid → Global footer.

---

### 15.1 Master Corridor Table (9 Total)

| # | Country | Slug | ISO | Flag | Region | Currency | Currency Code | Delivery Methods (Live Page) | Status |
|---|---------|------|-----|------|--------|----------|---------------|-----------------------------|--------|
| 1 | **Nigeria** | `nigeria` | NG | `ng` | Africa | Nigerian Naira | NGN | Bank Transfer | ✅ Live page |
| 2 | **Ghana** | `ghana` | GH | `gh` | Africa | Ghanaian Cedi | GHS | Bank Transfer, Cash Pickup, Mobile Wallets | ✅ Live page |
| 3 | **Gambia** | `gambia` | GM | `gm` | Africa | Gambian Dalasi | GMD | *(not deployed)* | ❌ Returns homepage |
| 4 | **Cameroon** | `cameroon` | CM | `cm` | Africa | Central African CFA Franc | XAF | *(not deployed)* | ❌ Returns homepage |
| 5 | **Senegal** | `senegal` | SN | `sn` | Africa | West African CFA Franc | XOF | Mobile Wallets | ✅ Live page |
| 6 | **Zambia** | `zambia` | ZM | `zm` | Africa | Zambian Kwacha | ZMW | *(not deployed)* | ❌ Returns homepage |
| 7 | **Pakistan** | `pakistan` | PK | `pk` | South Asia | Pakistani Rupee | PKR | Bank Transfer, Cash Pickup | ✅ Live page |
| 8 | **India** | `india` | IN | `in` | South Asia | Indian Rupee | INR | Bank Transfer, Cash Pickup | ✅ Live page |
| 9 | **Bangladesh** | `bangladesh` | BD | `bd` | South Asia | Bangladeshi Taka | BDT | Bank Transfer, Cash Pickup, Mobile Wallets | ✅ Live page |

---

### 15.2 Nigeria

| Field | Content |
|-------|---------|
| **URL** | https://paymit.co.uk/send-to/nigeria |
| **Hero Headline** | "Send Money to Nigeria" |
| **Hero Description** | "Supporting your connections across Nigeria. Whether your family is in Lagos, Abuja, Kano, Port Harcourt, or anywhere else, Paymit lets you send money quickly and securely. Your funds reach loved ones safely and on time, making support easy and reliable whenever it's needed." |
| **Hero Image** | `/assets/send-to/nigeria.jpg` |
| **Delivery Methods** | Bank Transfer (direct deposit to any bank account in Nigeria) |
| **CTA Button** | "Send Now" → https://app.paymit.co.uk/register |

### 15.3 Ghana

| Field | Content |
|-------|---------|
| **URL** | https://paymit.co.uk/send-to/ghana |
| **Hero Headline** | "Send Money to Ghana" |
| **Hero Description** | "Bringing Ghana closer to you. Whether your loved ones are in Accra, Kumasi, Tamale, Takoradi, or anywhere across the country, Paymit makes sending money effortless, fast, and secure. Enjoy peace of mind knowing your funds arrive safely and promptly, empowering your family and friends with the support they deserve. With Paymit, transferring money is simple, reliable, and stress-free every time." |
| **Hero Image** | `/assets/send-to/Ghana.jpg` |
| **Delivery Methods** | Bank Transfer (direct deposit to any bank account in Ghana), Cash Pickup (collect cash from trusted locations), Mobile Wallets (instantly deposit to mobile wallets) |
| **CTA Button** | "Send Now" → https://app.paymit.co.uk/register |

### 15.4 Senegal

| Field | Content |
|-------|---------|
| **URL** | https://paymit.co.uk/send-to/senegal |
| **Hero Headline** | "Send Money to Senegal" |
| **Hero Description** | "Connecting you to Senegal effortlessly. Whether your loved ones are in Dakar, Saint-Louis, Thiès, or anywhere across the country, Paymit helps you send money quickly and securely. Your funds arrive safely and on time, providing support whenever it's needed most. Simple, reliable, and stress-free." |
| **Hero Image** | `/assets/send-to/Senegal.jpg` |
| **Delivery Methods** | Mobile Wallets (instantly deposit to mobile wallets) |
| **CTA Button** | "Send Now" → https://app.paymit.co.uk/register |

### 15.5 Pakistan

| Field | Content |
|-------|---------|
| **URL** | https://paymit.co.uk/send-to/pakistan |
| **Hero Headline** | "Send Money to Pakistan" |
| **Hero Description** | "Bringing Pakistan closer with every transfer. Whether you're sending love to Punjab, Sindh, Khyber Pakhtunkhwa, Balochistan, Islamabad, or anywhere across Pakistan, Paymit makes it easy, fast, and secure. Our platform ensures your money moves safely and reaches your loved ones exactly when they need it. No stress and no hassle." |
| **Hero Image** | `/assets/send-to/Pakistan.jpg` |
| **Delivery Methods** | Bank Transfer (direct deposit to any bank account in Pakistan), Cash Pickup (collect cash from trusted locations) |
| **CTA Button** | "Send Now" → https://app.paymit.co.uk/register |

### 15.6 India

| Field | Content |
|-------|---------|
| **URL** | https://paymit.co.uk/send-to/india |
| **Hero Headline** | "Send Money to India" |
| **Hero Description** | "Now India is just a click away. Move your money quickly and securely with no queues, no delays, and no hassle. Whether it's for family support or a special occasion, your funds reach home in minutes. Fast, simple, and reliable." |
| **Hero Image** | `/assets/send-to/India.jpg` |
| **Delivery Methods** | Bank Transfer (direct deposit to any bank account in India), Cash Pickup (collect cash from trusted locations) |
| **CTA Button** | "Send Now" → https://app.paymit.co.uk/register |

### 15.7 Bangladesh

| Field | Content |
|-------|---------|
| **URL** | https://paymit.co.uk/send-to/bangladesh |
| **Hero Headline** | "Send Money to Bangladesh" |
| **Hero Description** | "Bangladesh is always within reach. With Paymit, your money moves fast and securely—straight to any bank, ready for cash pickup, or delivered to mobile wallets from Dhaka to Sylhet and beyond. Sending money to Bangladesh has never been easier." |
| **Hero Image** | `/assets/send-to/bangladesh man.jpg` |
| **Delivery Methods** | Bank Transfer (direct deposit to any bank account in Bangladesh), Cash Pickup (collect cash from trusted locations), Mobile Wallets (instantly deposit to mobile wallets) |
| **CTA Button** | "Send Now" → https://app.paymit.co.uk/register |

### 15.8 Not Deployed (3 Countries — Return Homepage)

| Country | Slug | What happens |
|---------|------|-------------|
| **Gambia** | `/send-to/gambia` | Redirects to homepage — no dedicated page exists |
| **Cameroon** | `/send-to/cameroon` | Redirects to homepage — no dedicated page exists |
| **Zambia** | `/send-to/zambia` | Redirects to homepage — no dedicated page exists |

These 3 are defined in the source code's `corridors.ts` with full metadata (descriptions, benefits, delivery methods) and appear in the nav dropdown, but their routes are not deployed.

---

## 16. CURRENCY CONVERTER COUNTRIES (12 Currencies)

**Source:** Currency dropdown on the homepage hero (Radix UI Select). Shows 12 currencies with flag + code.

### 16.1 Master Currency Table

| # | Country / Region | Currency Code | ISO Flag | Symbol |
|---|-----------------|---------------|----------|--------|
| 1 | **United Kingdom** | GBP | `gb` | £ |
| 2 | **United States** | USD | `us` | $ |
| 3 | **Eurozone** | EUR | `eu` | € |
| 4 | **Nigeria** | NGN | `ng` | ₦ |
| 5 | **Norway** | NOK | `no` | kr |
| 6 | **India** | INR | `in` | ₹ |
| 7 | **Ghana** | GHS | `gh` | ₵ |
| 8 | **Kenya** | KES | `ke` | KSh |
| 9 | **Canada** | CAD | `ca` | C$ |
| 10 | **Australia** | AUD | `au` | A$ |
| 11 | **Japan** | JPY | `jp` | ¥ |
| 12 | **Brazil** | BRL | `br` | R$ |

**Notes:**
- Only 3 of 12 converter currencies overlap with send-to corridors: NGN (Nigeria), INR (India), GHS (Ghana)
- 6 currencies (GBP, USD, EUR, NOK, KES, CAD, AUD, JPY, BRL) appear in the converter but have **no send-to page**
- PKR (Pakistan), BDT (Bangladesh), XOF (Senegal), XAF (Cameroon), GMD (Gambia), ZMW (Zambia) are send-to corridors but **not in the converter dropdown**
- Default state: GBP → NGN

### 16.2 GBP Exchange Rates

| Currency | Code | Rate vs 1 GBP |
|----------|------|--------------|
| US Dollar | USD | 1.27 |
| Euro | EUR | 1.17 |
| Nigerian Naira | NGN | 1,800.00 |
| Norwegian Krone | NOK | 13.80 |
| Indian Rupee | INR | 106.50 |
| Ghanaian Cedi | GHS | 15.80 |
| Kenyan Shilling | KES | 165.00 |
| Canadian Dollar | CAD | 1.72 |
| Australian Dollar | AUD | 1.95 |
| Japanese Yen | JPY | 191.00 |
| Brazilian Real | BRL | 6.20 |
