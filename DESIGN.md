# Paymit — Design System

Pixel-perfect reference extracted from **link.com** (Stripe Link wallet, `/en-fi`).  
Source: Next.js SSR + CSS Modules, 3 external stylesheets. All values from real CSS.

> Keep the color palette below. Everything else — spacing, fonts, sizes, radii, shadows — copied exactly from link.com.

---

## 1. Color Palette — (kept as-is)

The ink is `--brand-900 #0a1228` — a tinted near-black navy, never pure black. Surfaces alternate between `--neutral-0` (white) and `--neutral-50` (#fafafa offset).

| Token | Value | Usage |
|---|---|---|
| `--brand-25`  | #eef3ff | Hero wash (whisper-blue offset) |
| `--brand-50`  | #d7e2ff | Soft tint backgrounds |
| `--brand-100` | #aec4ff | Secondary surface |
| `--brand-200` | #6e9bff | Icon accent on dark |
| `--brand-300` | #3b73ff | Hero trailing dot, links, icon brand |
| `--brand-900` | #0a1228 | **Ink** — primary CTAs, logo, dark bands |
| `--brand-850` | #14213f | CTA hover, dark surfaces |
| `--neutral-0` | #ffffff | Page surface |
| `--neutral-50`| #fafafa | Offset section background |
| `--neutral-200`| #e5e5e5 | Hairline borders |
| `--neutral-600`| #525252 | Body secondary text |
| `--neutral-900`| #171717 | Body ink (headlines on light) |

- **Primary CTA is dark navy ink** (`--brand-900`), not bright blue — Link's move.
- **Bright blue (`--brand-300`) is reserved** — trailing punctuation dots, links, icon accents only.
- **No gradients.** Richness comes from layering solid tones.

---

## 2. Layout Grid (Link's 24-column system)

### Global tokens
```
--layoutColumnCount: 24    → 900px: 12  → 600px: 8
--layoutMargin:       64px → 1024px: 24px → 600px: 12px
--layoutGutter:       16px → 1024px: 10px
--layoutMaxWidth:     1800px
--headerNavOffset:    96px  (scroll-padding + section top padding)
```

### Container pattern (every section uses this)
```css
.Section_Inner {
  display: grid;
  grid-template-columns: repeat(var(--layoutColumnCount), 1fr); /* 24 cols */
  column-gap: var(--layoutGutter);        /* 16px */
  margin: 0 auto;
  max-width: var(--layoutMaxWidth);       /* 1800px */
  padding: 0 var(--layoutMargin);         /* 0 64px */
}
```
All child components use `grid-template-columns: subgrid` to snap to the master grid.

---

## 3. Typography — EXACT VALUES

### Font families
```css
--fontFamily:     "Matter", sans-serif     /* weights 400, 500, 600 — variable woff2 */
--fontMonospace: "MatterMono", monospace  /* weights 400, 500 */
```
- Matter = Stripe's custom geometric sans. Tight, modern, editorial.
- MatterMono = used for receipt/terminal UI (agent approval, subscription amounts).
- Fallback: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`
- Body default: `font: var(--fontSectionBody); letter-spacing: -.01em`

### Font weight tokens (LINK'S ACTUAL MAP)
```css
--fontWeightNormal:    400
--fontWeightSemibold: 500   /* ← "Semibold" = 500, NOT 600 */
--fontWeightBold:     600
```
**Key insight**: Bigger display titles use 500 (Semibold), while smaller subsection titles use 600 (Bold). Inverted weight hierarchy.

### Type scale — ALL EXACT VALUES from CSS
| Token / class | Weight | Size | Line-height | Letter-spacing | Responsive |
|---|---|---|---|---|---|
| typography_text2Xl | 500 | **88px** | **0.9** | **-2.4px** | 80px@1440 · 60px/ -1.8px@1024 · 48px@600 |
| --fontHeroTitle | 500 | **80px** | **78px** | -.01em (inherit) | — |
| typography_textXl | 500 | **64px** | **0.96** | **-1.92px** | 54px/0.9@1024 · 40px/ -1.2px@900 |
| --fontSectionTitle | 500 | **64px** | **62px** | — | (same responsive) |
| --fontSubsectionTitle | **600** | **48px** | **46px** | — | — |
| typography_textLg | 400 | **28px** | **1.04** | **-.56px** | 24px/ -.48px@900 |
| typography_textLgBold | 500 | **28px** | **1.04** | **-.56px** | 24px/ -.48px@900 |
| typography_textNormal | 400 | **20px** | **1.14** | **-.2px** | — |
| typography_textMd | 400 | **18px** | **1.12** | **-.2px** | — |
| typography_textMdBold | 500 | **18px** | **0.96** | **-.4px** | — |
| --fontHeroBody | 400 | **16px** | **26px** | — | — |
| --fontSectionBody | 400 | **18px** | **26px** | — | — |
| --fontSubsectionBody | 400 | **18px** | **26px** | — | — |
| --fontDetailBody | 400 | **16px** | **24px** | — | — |
| typography_textSm | 400 | **16px** | **1.2** | inherit | — |
| typography_textSmBold | 500 | **16px** | **1.2** | inherit | — |
| typography_textXSm | 400 | **14px** | **1** | inherit | — |
| typography_textXSmBold | 500 | **14px** | **1** | inherit | — |
| typography_textXXSm | 400 | **12px** | **1** | inherit | — |
| --fontCta | 500 | **16px** | **16px** | — | — |
| --fontLink | 500 | **14px** | **14px** | — | — |

### Line-height pattern
- Large display: **sub-1.0** (0.9–0.96)
- Medium: **1.04–1.2**
- Body: **1.12–1.26**
- Smallest: **1.0**

### Letter-spacing pattern
- Strong negative tracking on display sizes (down to **-2.4px**)
- Eases to `inherit` (= site default `-.01em`) at small sizes

### Emphasis / Italic rule (Link's approach)
Hero headline: "The **wallet** for the AI economy"
```css
.HeroSection_headingEmphasis__IM4aA {
  font-style: normal;       /* ← NOT italic */
  color: var(--colorBrand300);  /* ← accent color instead */
}
```
Emphasis = **hue, not slope**. Italic is never used for emphasis.

### Monospace usage (MatterMono)
- Agent approval rows: `font-family: var(--fontMonospace)`, **14px**, weight 400–500
- Creates a terminal/receipt aesthetic inside UI mockups

---

## 4. Spacing — EXACT PIXEL VALUES

### Section vertical rhythm
| Section | Spacing |
|---|---|
| Hero section | `padding-top: 96px` (=var(--headerNavOffset)) · ≤900px: 144px · ≤600px: 48px |
| Hero inner | `min-height: calc(100dvh - 96px)` · `padding-bottom: 48px` · `row-gap: 20px` (≤900px: 16px) |
| HorizontalCardSection | `margin-top: 80px` · inner `row-gap: 16px` |
| MerchantsSection | `margin-top: 80px` · animation container height: `720px` (≤600px: 620px) |
| ValuePropScrollSection | `margin-top: 96px` · `padding-bottom: 160px` (≤600px: 64px) · inner `row-gap: 16px` (≤600px: 64px) |
| ManifestoSection | `padding-top: 60px` · wrapper `padding: 42px 0 36px` · gap `36px` · max-width `620px` |
| Footer | `row-gap: 64px` (≤900px: 40px) · `padding: 64px (layoutMargin) 24px` (≤900px: 40px) |

### In-component gaps
| Context | Gap |
|---|---|
| Hero grid rows | **20px** (16px mobile) |
| ValueProp list item | `padding-top: 24px`, `padding-bottom: 24px`; first item `padding-top: 40px` (no top border) |
| Accordion | `margin-bottom: 16px` · title `margin-bottom: 10px` |
| Hero checkout card (HeroGraphic) | **8px** (--spacing-xs) |
| Subscription detail card | **12px** internal, padding **16px** |
| Agent approval card | padding-inline **16px**, gap **8px** between CTA buttons |
| Footer links | **24px** (wraps to **40px** row-gap) |
| Notifications list | **16px** |
| Cookie banner | `margin: 16px (layoutMargin)` · `padding: 16px` · `gap: 16px` |
| Globalization country grid | **24px** (≤1115px: 16px) |

### Internal spacing scale (HeroGraphic component)
```
--spacing-xs: 8px
--spacing-sm: 16px
--spacing-md: 20px
--spacing-lg: 24px
```

### Card dimensions (EXACT)
| Card | Width | Height | Border-radius |
|---|---|---|---|
| HeroGraphic_card | **408px** | **608px** | var(--borderRadiusLg) = **28px** |
| Agents approval phone | **360px** | **640px** | **24px** |
| ManageSubscriptions phone | **440px** | **330px** | var(--borderRadiusLg) = **28px** |
| ProtectYourPurchases phone | **440px** | **330px** | var(--borderRadiusLg) = **28px** |
| UpgradeYourWallet phone | **440px** | **330px** | var(--borderRadiusLg) = **28px** |

### Header dimensions
- Wrapper `padding: 16px`, `top: 10px`
- Border: `1px solid var(--colorBorderLight)`, border-radius: **8px**
- Logo: `height: 26px`, `margin-left: 5px`
- Buttons gap: **8px**

---

## 5. Border Radius Tokens (EXACT)
```css
--borderRadiusXs:   8px    /* cards, cookie banner, header */
--borderRadiusSm:  10px    /* buttons, detail cards */
--borderRadiusMd:  16px    /* popovers, section graphics */
--borderRadiusLg:  28px    /* hero card, phone mockups */
--borderRadiusXl:  90px    /* "Built by Stripe" pill */
--borderRadiusPill: 999px  /* full round, dots, pill CTAs */
```

### Where each radius is used
| Radius | Used on |
|---|---|
| **8px** (Xs) | Header nav wrapper, cookie banner, hero graphic container, value prop graphic container, footer topCard, manifest logo pill, "Built by Stripe" hover state |
| **10px** (Sm) | All buttons (default), manage subs detail card, detail actions, step card, subscription list items, merchant pill |
| **16px** (Md) | Globalization picker popover, merchant icons in hero card |
| **24px** (custom) | Agent approval phone mock container |
| **28px** (Lg) | Hero card, manage subscriptions phone, protect purchases phone, upgrade wallet phone, button hover state |
| **90px** (Xl) | "Built by Stripe" pill default |
| **999px** (Pill) | Status dots, cursor mock, hero "Built by Stripe" pill, logo pill background |

### Button radius behavior (Link's signature move)
```css
.Button_root { border-radius: var(--borderRadiusSm); }       /* 10px */
.Button_root:hover { border-radius: var(--borderRadiusLg); } /* 28px */
```
**Buttons start at 10px and expand to 28px on hover** — a signature micro-interaction.

---

## 6. Shadows — EXACT CSS VALUES

### Card shadow (global token)
```css
--shadowCard: 0px 25px 50px 0px rgba(48,49,61,.08),
              0px 7.5px 17.5px 0px rgba(48,49,61,.08),
              0px 2.5px 7.5px 0px rgba(0,0,0,.12);
```
Three-layer soft shadow. Used on: mismatched country banner, any card component.

### Hero graphic card shadow
```css
box-shadow: 0 28px 56px 0 hsla(0,0%,9%,.08);
```

### Inner shadow (merchant section)
```css
box-shadow: 0px 14px 28px 0px hsla(0,0%,9%,.08);
```

### Phone mockup shadows
```css
/* UpgradeYourWallet / ManageSubscriptions / ProtectYourPurchases */
box-shadow: 0 11.916px 30.64px 0 hsla(0,0%,9%,.08);

/* Agents approval */
box-shadow: 0 28px 56px 0 hsla(0,0%,9%,.08);
```

### Cookie banner shadow
```css
box-shadow: 0 13px 27px -5px rgba(50,50,93,.25),
            0 8px 16px -8px rgba(0,0,0,.3);
```

### Globalization picker popover
```css
box-shadow: 0 11.916px 30.64px 0 hsla(0,0%,9%,.08);
```

---

## 7. Animation & Motion — EXACT TIMINGS & EASINGS

### Transition durations from CSS
```css
.transition-colors:          .1s ease-in-out    /* cookie banner links/buttons */
.transition-colors:          .15s linear        /* inline links, manifest logo border */
.transition (color + bg):    .2s linear         /* buttons */
.transition (border-radius): .2s ease-in-out    /* buttons hover */
.transition (border-radius): .25s ease-in-out   /* "Built by Stripe" pill */
.transition (border-radius): .3s ease-in-out    /* hero CTA button + icon */
```

### Button hover (the signature)
```css
transition: color .2s linear,
            background-color .2s linear,
            border-radius .2s ease-in-out;
```
Three properties animated simultaneously. Border-radius morphs from 10px → 28px.

### Hero CTA button hover
```css
transition: border-radius .3s ease-in-out,
            background-color .3s ease-in-out;
/* Icon inside button: */
transition: border-radius .3s ease-in-out;
```

### Link hover
```css
transition: color .15s linear;
```

### @keyframes found in CSS
```css
@keyframes loader-spin {
  to { transform: rotate(1turn); }
}
/* Spinner: 0.5s linear infinite — used on hero payment button loader */

@keyframes shimmerText {
  0%   { color: var(--colorText); }
  50%  { color: var(--colorBrand300); }
  100% { color: var(--colorText); }
}
/* Text shimmer effect */
```

---

## 8. Buttons — EXACT MEASUREMENTS

### Button base (all)
```
Button_root:
  display: inline-flex
  height: 40px
  padding: 6px 24px              (≤450px: 6px 16px)
  justify-content: center
  align-items: center
  gap: 6px
  border-radius: var(--borderRadiusSm)    /* 10px */
  font: var(--fontLink)                  /* 500 14px/14px Matter */
  white-space: nowrap
```

### Button variants
| Variant | Background | Color | Hover bg |
|---|---|---|---|
| Primary | --colorBrand300 | --colorBrand900 | --colorBrand200 |
| Secondary | --colorBrand900 | --colorBrand0 | --colorBrand850 |
| DarkSecondary | --colorBrand850 | --colorNeutral50 | #354c40 |
| Tertiary | --colorNeutral100 | --colorBrand900 | --colorNeutral200 |
| Link | transparent | --colorBrand900 | — |
| InlineLink | transparent | inherit (underline) | --colorNeutral900 |

### CTA buttons (Hero section)
```
.HeroSection_button:
  padding: 16px
  gap: 16px
  border: 1px solid var(--colorBorderLight)
  border-radius: var(--borderRadiusXs)   /* 8px → expands to 90px on hover */
  background: var(--colorNeutral100)
  white-space: nowrap

  → hover: bg var(--colorNeutral200), border-radius var(--borderRadiusXl)
```

### Agent approval buttons
```css
.AgentsApprovalGraphic_btnApprove,
.AgentsApprovalGraphic_btnDecline {
  padding-block: 12px;
  flex-grow: 1;
  border-radius: 8px;
  font-size: 16px;
}
.btnDecline  { border: 1px solid var(--colorNeutral200); color: var(--colorTextPrimary); }
.btnApprove  { background-color: var(--colorNeutral900); color: #fff; }
```

---

## 9. Icons — EXACT MEASUREMENTS

### All icons are inline `<svg>` with `fill="none"` and vector paths.
- Stroke width: **1.5px** (uniform across all glyphs)
- Line caps: **round**
- No icon fonts. No duotone. No emoji system (one exception: 🏨).

### Inventory with exact sizes
| Icon | Location | Size | Detail |
|---|---|---|---|
| Link wordmark | Header logo | **26px** tall, margin-left 5px | viewBox 0 0 78 26 |
| Stripe pill mark | "Built by Stripe" | **15px** height, translateY(3px) | viewBox 0 0 34 14 |
| CTA trailing icon | Hero CTA button | **32×32px**, rx=4 tile + NE arrow | transition border-radius .3s |
| LinkSymbol | Merchants section | **100px** (≤1024: 70px) | viewBox 0 0 40 40 |
| Merchant icons | Hero card list | **56×56px** | border-radius 16px |
| Paid checkmark | Hero card paid badge | **52px** circle, inner icon **20px** | bg var(--colorBrand200) |
| Payment method card | Hero card | **52px** wide (svg), or img 100% | — |
| List chevron | Everywhere | **16×16px** | rotate(90deg) or 180deg |
| ValueProp list icon | Value prop | **32×32px** | flex-shrink 0 |
| Agent logo | Agent approval | **64px**, padding 11px, border-radius 16px | inner icon 42px |
| Row icon | Agent table | **48×48px**, border-radius 12px | — |
| Card icon | Agent card details | **48px** wide | — |
| Cursor mock | Animated graphic | **28×28px** | border-radius pill |
| Inspect button chevron | Agent table | **16×16px** | inline |
| Social icons | Footer | **20×20px** | — |

---

## 10. Footer — FULL SPEC

```
Footer_root:
  background-color: var(--colorBrand900)
  color: var(--colorTextSecondary)
  position: relative (static on ≤900px)

Footer_inner:
  padding: 64px var(--layoutMargin) 24px    (≤900px: 40px var(--layoutMargin))
  row-gap: 64px (≤900px: 40px)

Footer_topSection:
  display: grid
  grid-template-columns: repeat(3, 1fr)    (≤900px: 1fr)
  gap: 16px

Footer_topCard:
  height: 240px (≤600px: 200px)
  border-radius: var(--borderRadiusXs)   /* 8px */
  background: var(--colorBrand850)
  padding: 16px
  gap: 24px
  display: flex, flex-direction: column, align-items: center, justify-content: center

Footer_cardTitle:
  text-align: center
  max-width: 190px
  white-space: pre-line

Footer_builtByStripe (pill):
  display: flex, align-items: center, flex-wrap: wrap
  margin: 0 16px
  justify-content: center
  gap: 8px
  border: 3px solid var(--colorBrand300)
  padding: 5px 5px 5px 17px
  border-radius: var(--borderRadiusXl)   /* 90px */
  transition: border-radius .25s ease-in-out
  → hover: border-radius: var(--borderRadiusXs)   /* 8px */

Footer_bottomSection:
  padding-top: 24px
  border-top: 1px solid var(--colorBrand850)

Footer_links:
  display: flex, align-items: center, justify-content: center
  gap: 24px
  row-gap: 40px (when wrapping)
  flex-wrap: wrap
```

---

## 11. Merchants Section — FULL SPEC

```
MerchantsSection_content:
  grid-column: 1 / -1
  background-color: var(--colorBrand900)

MerchantsSection_animationContainer:
  height: 720px (≤600px: 620px)
  grid-column: 1 / -1

MerchantsSection_title:
  grid-column: 2 / 10
  max-width: 400px
  color: var(--colorNeutral0)
  (≤900px: grid 2/-2, center text, max-width 500px, mt-48)
  (≤600px: grid 1/-1)

MerchantsSection_linkSymbol:
  width: 100px (≤1024px: 70px)

MerchantsSection_merchantsTrack:
  grid-column: 13 / -1 (≤1024px: 12/-1 · ≤900px: 1/-1)
  overflow: hidden
```

---

## 12. Header — FULL SPEC

```
HeaderNav_section:
  position: fixed; top: 0; z-index: 10
  width: 100%

HeaderNav_header:
  grid-column: 1 / -1
  display: flex; justify-content: space-between; align-items: center
  padding: 16px
  top: 10px
  border: 1px solid var(--colorBorderLight)
  border-radius: var(--borderRadiusXs)    /* 8px */
  background: var(--colorNeutral0)

HeaderNav_logo:
  height: 26px
  margin-left: 5px

HeaderNav_buttons:
  display: flex; align-items: center
  gap: 8px
  min-height: 2.5rem

HeaderNav_divider:
  height: 16px; width: 1px
  margin: 0 8px
  background: var(--colorNeutral300)
  (hidden on ≤900px)
```

---

## 13. Key construction rules to copy

1. **One 24-col subgrid** governs every section. Children `subgrid` into it — guarantees alignment.
2. **Larger text = lighter weight (500). Smaller labels = bolder (600).** Inverted hierarchy.
3. **Emphasis = hue, not italic.** Keep text upright; change color to emphasize.
4. **Negative tracking** tightens with size: -2.4px on 88px down to -.01em on body.
5. **Button radius morphs** on hover: 10px → 28px (.2s ease-in-out).
6. **Button bg fades** with .2s linear. No transforms on buttons.
7. **Card dimensions are fixed** — 408×608px (hero), 360×640px (phone).
8. **Borders replace heavy shadows** on most surfaces. Shadows are subtle 3-layer stacks.
9. **14px/14px Matter at 500 weight** = default button typography (not 16px).
10. **Border-radius scale**: 8 / 10 / 16 / 28 / 90 / 999px.
11. **Section spacing** uses multiples of 16 / 20 / 24 / 48 / 64 / 96 / 160px.
12. **Hover transitions are short**: .1s–.3s max. Never .4s+ except ambient (4s spinner).
13. **Dark section backgrounds** (Footer, Merchants) use brand-850 (`--colorBrand850`) for the surface, not pure 900.
14. **MatterMono** at 14px for any receipt/terminal/numeric-display content.
15. **Container max-width**: 1800px, but actual content floats in the 24-col grid flow.

---

## 14. Page structure (link.com)

1. **Header** — Fixed top (z-index 10), 16px padding, 10px top offset, 8px-radius border, 26px logo
2. **Hero** — 96px top padding, 24-col grid layout (text left 11 cols, graphic right 12 cols), min-height 100dvh-96px
3. **Built by Stripe pill** — Inline pill, border-radius 999px, 4px 7px 4px 8px padding
4. **Hero CTA** — 16px padding, 8px border-radius → 90px on hover, trailing 32×32 NE arrow tile
5. **Merchants** — 80px margin-top, dark brand-900 bg, 720px animation zone, title at cols 2-10
6. **Value Props (scroll)** — 96px margin-top, 160px padding-bottom, sticky accordion (left) + graphic (right)
7. **Horizontal Cards** — 80px margin-top, 16px row-gap, cards span 8 cols
8. **Manifesto** — 60px padding-top, 620px centered wrapper, 42/0/36 padding, 36px gap
9. **Footer** — 64px padding-top, 3-column top section with 240px card, "Built by Stripe" pill (90px radius → 8px hover)
