# Paymit — Design System

Pixel-perfect reference extracted from **link.com** (Stripe Link wallet) + adapted for **Paymit** brand.
Source: Next.js SSR + CSS Modules (link.com) / Next.js + Tailwind CSS v4 + shadcn/ui (Paymit).
All values from real CSS. Design tokens defined in `src/app/globals.css`.

---

## 1. Color Palette — Paymit

### Brand Palette — Paymit Blue

Mapped from Stripe Link green (`#00D66F` → `#6E9BFF`, `#011E0F` → `#0A1228`, etc.).
Defined in `src/app/globals.css:52-65`.

| Token | Value | Usage |
|-------|-------|-------|
| `--colorBrand0`   | `#FFFFFF` | White |
| `--colorBrand25`  | `#EEF3FF` | Hero wash (whisper-blue offset), accent surfaces |
| `--colorBrand50`  | `#D7E2FF` | Soft tint backgrounds |
| `--colorBrand100` | `#AEC4FF` | Secondary surface |
| `--colorBrand200` | `#6E9BFF` | Icon accent on dark |
| `--colorBrand300` | `#3B73FF` | **Primary blue** — accent text, CTA buttons, links, hero emphasis, ring/focus color |
| `--colorBrand400` | `#2A5FE6` | CTA hover (darker blue) |
| `--colorBrand500` | `#1F4DC0` | Hover darker text action, "≈" separator in rate pill |
| `--colorBrand600` | `#1A40A0` | Deep blue |
| `--colorBrand700` | `#163380` | Deeper blue |
| `--colorBrand800` | `#112657` | Very deep blue |
| `--colorBrand850` | `#14213F` | **Dark mode surface** — Sign Up button hover, dark bands |
| `--colorBrand900` | `#0A1228` | **Ink** — primary CTAs (Sign Up button), logo text, dark bands, shadcn primary, secondary button bg |

### Neutral Palette

| Token | Value | Role |
|-------|-------|------|
| `--colorNeutral0`   | `#FFFFFF` | Page surface, card bg |
| `--colorNeutral50`  | `#FAFAFA` | Offset section background |
| `--colorNeutral100` | `#F5F5F5` | Light gray surface — tertiary button bg |
| `--colorNeutral200` | `#E5E5E5` | Hairline borders, divider |
| `--colorNeutral300` | `#D4D4D4` | Border primary |
| `--colorNeutral400` | `#A3A3A3` | Muted gray |
| `--colorNeutral500` | `#737373` | Secondary text |
| `--colorNeutral600` | `#525252` | Body secondary text |
| `--colorNeutral700` | `#404040` | Dark gray |
| `--colorNeutral800` | `#262626` | Very dark gray |
| `--colorNeutral900` | `#171717` | Primary text — body ink, headlines on light |

### Semantic Color Tokens

| Token | Value | Maps to |
|-------|-------|---------|
| `--colorTextPrimary`           | `--colorNeutral900`  | #171717 |
| `--colorTextSecondary`         | `--colorNeutral0`    | #FFFFFF |
| `--colorTextActionPrimary`     | `--colorBrand300`    | #3B73FF |
| `--colorTextActionPrimaryHover` | `--colorBrand500`   | #1F4DC0 |
| `--colorTextActionSecondary`   | `--colorNeutral900`  | #171717 |
| `--colorTextOnAction`          | `--colorBrand900`    | #0A1228 |
| `--colorIconPrimary`           | `--colorBrand200`    | #6E9BFF |
| `--colorIconSecondary`         | `--colorBrand900`    | #0A1228 |
| `--colorIconUserLogo`          | `--colorNeutral0`    | #FFFFFF |
| `--colorBorderLight`           | `--colorNeutral200`  | #E5E5E5 |
| `--colorBorderPrimary`         | `--colorNeutral300`  | #D4D4D4 |
| `--colorBorderSecondary`       | `--colorNeutral500`  | #737373 |
| `--colorBackgroundSurface`     | `--colorNeutral0`    | #FFFFFF |
| `--colorBackgroundAction`      | `--colorBrand200`    | #6E9BFF |
| `--colorBackgroundOffset`      | `--colorNeutral50`   | #FAFAFA |
| `--colorShadowCard`            | `rgba(0,0,0,0.29)`  | — |

### Color Design Rules

- **Blue is the single accent color.** No green, no orange — pure blue-scale + neutral-scale.
- **Primary CTA is ink (`--colorBrand900` / `#0A1228`)** with white text — not bright blue.
- **Bright blue (`--colorBrand300` / `#3B73FF`) is reserved** for accent text, links, emphasis spans.
- **Emphasis in text = hue change** to `--colorBrand300` (#3B73FF), NOT italic or bold.
- **No gradients.** Richness comes from layering solid tones.
- **Selection highlight:** `background: rgba(59, 115, 255, 0.5)`, text `--colorBrand900`.

---

## 2. Layout Grid & Max-Width System

### Global tokens (from `globals.css:98-104`)

```
--layoutColumnCount: 24    (not actively used outside CSS vars — hero hardcodes 24 in gridTemplateColumns)
--layoutMargin:       64px → 768px: 16px → 1024px: 32px
--layoutGutter:       16px → 768px: 8px
--layoutMaxWidth:     1800px   ← THE KEY CONSTRAINT
--headerNavOffset:    96px → 768px: 72px
--scrollbar-width:    0px
```

### Max-width chain (how it flows)

```
--layoutMaxWidth: 1800px
  ↓
Nav outer wrapper:   padding: 0 var(--layoutMargin)   ← stretches full viewport
Nav inner <nav>:     max-width: var(--layoutMaxWidth); mx-auto   ← caps at 1800px, centered
  ↓
Hero section:        padding-top: var(--headerNavOffset)
Hero desktop grid:   max-width: var(--layoutMaxWidth); mx-auto; padding: 0 var(--layoutMargin) 48px
Hero heading <h1>:   max-width: 720px   ← caps text width tighter than container
  ↓
Converter card:      max-width: 440px (md+: fixed 440px width)
```

**Rule:** The outer wrapper always fills the viewport with `padding: 0 var(--layoutMargin)`. Inner containers use `max-width: var(--layoutMaxWidth)` with `mx-auto` to center at 1800px. Sub-content (headings, cards) tightens further with their own max-widths.

### Paymit responsive overrides

```css
@media (max-width: 768px) {
  :root {
    --layoutMargin: 16px;       /* from 64px */
    --layoutGutter: 8px;        /* from 16px */
    --headerNavOffset: 72px;    /* from 96px */
  }
}
@media (max-width: 1024px) and (min-width: 769px) {
  :root {
    --layoutMargin: 32px;       /* tablet: 32px instead of 64px */
  }
}
```

### Container pattern (reference — not used as a class in Paymit)

```css
/* Conceptual pattern — each section reimplements this inline */
section {
  max-width: var(--layoutMaxWidth);   /* 1800px */
  margin: 0 auto;
  padding: 0 var(--layoutMargin);     /* 0 64px → 0 16px (mobile) */
}
```

### Hero grid areas (Paymit desktop — 24 cols, 5 rows)

```
grid-template-areas:
  ". . . . . . . . . . . . g g g g g g g g g g g g"   12 empty + 12 graphic
  "p p p p p p . . . . . . g g g g g g g g g g g g"   6 pill + 6 empty + 12 graphic
  "h h h h h h h h h h h . g g g g g g g g g g g g"   11 heading + 1 empty + 12 graphic
  "t t t t t t t t . . . . g g g g g g g g g g g g"   8 tagline + 4 empty + 12 graphic
  "b b b b b b . . . . . . g g g g g g g g g g g g"   6 button + 6 empty + 12 graphic

grid-template-rows: 1fr repeat(3, min-content) 1fr
row-gap: 20px
```

### Hero mobile layout (<768px)

```
Outer:   flex flex-col items-center justify-between
         h-[90vh]   ← 90% viewport height (not 100dvh)
         px-5 pb-12 pt-6   ← 20px sides, 48px bottom, 24px top

Content: flex flex-col gap-5
         max-w-[440px]   ← caps content at 440px

Order:   Heading → Body paragraph → CTA button → (gap via justify-between) → Converter card at bottom
```

---

## 3. Typography — Paymit

### Font families

```css
--fontFamily:    "Inter", "DM Sans", -apple-system, BlinkMacSystemFont,
                 "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
--fontMonospace: "JetBrains Mono", "Fira Code", "SF Mono", monospace;
```

**Loaded via next/font/google in `layout.tsx`:**
- `Inter` → CSS variable `--font-sans` (weights 400, 500, 600, 700)
- `DM Sans` → CSS variable `--font-headline` (weights 400, 500, 600, 700)

### Font weight tokens

```css
--fontWeightNormal:   400
--fontWeightSemibold: 500
--fontWeightBold:     600
```

### Shorthand font tokens

| Token | Value |
|-------|-------|
| `--fontHeroTitle`       | `500 80px/78px var(--fontFamily)` |
| `--fontSectionTitle`    | `500 64px/62px var(--fontFamily)` |
| `--fontSubsectionTitle` | `600 48px/46px var(--fontFamily)` |
| `--fontDetailTitle`     | `500 16px/24px var(--fontFamily)` |
| `--fontHeroBody`        | `400 16px/26px var(--fontFamily)` |
| `--fontSectionBody`     | `400 18px/26px var(--fontFamily)` |
| `--fontSubsectionBody`  | `400 18px/26px var(--fontFamily)` |
| `--fontDetailBody`      | `400 16px/24px var(--fontFamily)` |
| `--fontCta`             | `500 16px/16px var(--fontFamily)` |
| `--fontLink`            | `500 14px/14px var(--fontFamily)` |

### Typography scale — Paymit actual values

| Context | Size | Line-height | Letter-spacing | Weight |
|---|---|---|---|---|
| **Hero heading (desktop)** | `80px` → `68px`(lg) | `78px` → `66px`(lg) | `-2.4px` → `-2px`(lg) | 600 (semibold) |
| **Hero heading (mobile)** | `40px` | `38px` | `-1px` | 600 |
| **Hero body (desktop)** | `18px` | `26px` | normal | 500 (medium) |
| **Hero body (mobile)** | `18px` | `26px` | normal | 500 |
| **Section headings** | `var(--fontSectionTitle)` | — | — | — |
| **Card input amount** | `36px` → `28px`(md) → `24px`(sm) | `1.1` | `-0.02em` | 600 |
| **Label text (card)** | `14px` | — | — | 600 |
| **Rate pill** | `14px` | — | — | 600 |
| **Body secondary** | `13px` | — | — | 500 |
| **Button text** | `14px` | `14px` | `-0.01em` | 500 |
| **CTA button (hero card)** | `16px` | — | `-0.01em` | 600 |
| **Nav links** | `14px` | — | — | 500 |
| **Mobile nav links** | `15px` | — | — | 500 |
| **Mobile drawer title** | `18px` | — | — | 700 |

### Line-height pattern

- Display (80px): **sub-1.0** (0.975)
- Medium headings: **1.04–1.2**
- Body: **1.12–1.44**
- Labels/buttons: **1.0**

### Text wrapping

- Hero heading: `text-wrap: balance`
- Max-width heading: `720px` on desktop, none on mobile

### Emphasis pattern

```tsx
<h1>Send <span className="text-[var(--colorTextActionPrimary)]">money</span> worldwide.</h1>
```

Emphasis = **hue, not slope**. The emphasized word gets the brand blue color (`--colorBrand300` / `#3B73FF`), NOT italic or bold.

### Body default

```css
body {
  font-family: var(--font-sans), ui-sans-serif, system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-headline), var(--font-sans), sans-serif;
}
```

---

## 4. Spacing — EXACT PIXEL VALUES

### Base unit: **8px system**

| Token | Value | Usage |
|-------|-------|-------|
| `--spacing-xs` | 8px | Icon gaps, tight spacing |
| `--spacing-sm` | 16px | Card padding, section gaps, layout gutter (default) |
| `--spacing-md` | 20px | Interior card padding, field padding |
| `--spacing-lg` | 24px | Section spacing, multi-line gaps |

### Section vertical rhythm

| Section | Spacing |
|---|---|
| **Hero section outer** | `padding-top: var(--headerNavOffset) [96px]` · mobile: `72px` |
| **Hero inner (desktop)** | `min-height: calc(100dvh - 96px)` · `padding-bottom: 48px` · `row-gap: 20px` |
| **Hero inner (mobile)** | `height: 90vh` · `padding: 24px 20px 48px` · `gap: 20px` |

### In-component gaps (Hero card)

| Context | Gap |
|---|---|
| Card flex gap | `12px` (gap-3) |
| Input field container padding | `20px` (p-5) → mobile `16px` |
| Input label to select | `8px` (mb-2) |
| Amount to USD equivalent | `4px` (mt-1) |
| Rate pill top offset | `4px` (pt-1) |
| CTA button top offset | `4px` (mt-1) |
| Currency select trigger | `8px` gap between elements |
| Flag icon size | `30px` → mobile `18px` |
| Select dropdown items | `10px` radius, `12px` vertical padding |

### Navigation spacing

| Context | Gap |
|---|---|
| Nav outer padding | `16px` · mobile `12px 10px` |
| Nav link padding (horizontal) | `12px` (px-3) |
| Nav link height | `40px` (h-10) |
| Nav action buttons gap | `8px` · mobile `6px` |
| Nav divider | `margin: 0 12px` |
| Logo to links | `margin-left: auto` |
| Mobile drawer padding | `20px` (p-5) |
| Mobile drawer items gap | `4px` (gap-1) |
| Mobile drawer item padding | `12px 10px` (py-2.5 px-3) |

### Header dimensions

- Wrapper: `position: fixed; top: 10px; z-index: 50`
- Nav: `border-radius: var(--borderRadiusXs)` (8px), `border: 1px solid var(--colorBorderLight)`
- Logo text: `20px` bold → mobile `18px`
- Button padding: `20px` horizontal (px-5) → mobile `16px`

---

## 5. Border Radius Tokens

```css
--borderRadiusXs:   8px     /* cards, nav, cookie banner, section graphics */
--borderRadiusSm:  10px     /* buttons (default state), select items */
--borderRadiusMd:  16px     /* popovers, larger cards */
--borderRadiusLg:  28px     /* hero card, phone mockups, button hover state */
--borderRadiusXl:  90px     /* special pills */
--borderRadiusPill: 999px   /* full round — dots, cursor, pill CTAs */
```

### Where each radius is used (Paymit)

| Radius | Used on |
|---|---|
| **8px** (Xs) | Nav wrapper, hero graphic container, mobile drawer items, mobile menu close button, value prop graphic, CTA buttons (default state) |
| **10px** (Sm) | Default buttons, select dropdown items, detail cards |
| **14px** (custom) | Select popover content |
| **16px** (Md) | Currency input fields ("You Pay" / "They get" cards) |
| **28px** (Lg) | Hero converter card (`rounded-[var(--borderRadiusLg)]`) |
| **999px** (Pill) | Rate pill tags, badge backgrounds |

### Button radius behavior

```css
.btn-morph {
  border-radius: var(--borderRadiusSm);   /* 10px */
  transition: border-radius var(--transitionButtonRadius); /* 0.2s ease-in-out */
}
.btn-morph:hover {
  border-radius: var(--borderRadiusLg);   /* 28px */
}
.btn-hero-morph {
  border-radius: var(--borderRadiusXs);   /* 8px */
  transition: border-radius var(--transitionHeroCtaRadius); /* 0.3s ease-in-out */
}
.btn-hero-morph:hover {
  border-radius: var(--borderRadiusXl);   /* 90px */
}
.btn-hero-morph .arrow-tile {
  border-radius: var(--borderRadiusXs);   /* 8px */
  transition: border-radius var(--transitionHeroCtaRadius); /* 0.3s ease-in-out */
}
.btn-hero-morph:hover .arrow-tile {
  border-radius: var(--borderRadiusLg);   /* 28px */
}
```

**Buttons start at 10px (standard) or 8px (hero CTA) and expand on hover** — signature micro-interaction.

---

## 6. Shadows — EXACT VALUES

### Card shadow (global token)

```css
--shadowCard:
  0px 25px 50px 0px rgba(48,49,61,.08),
  0px 7.5px 17.5px 0px rgba(48,49,61,.08),
  0px 2.5px 7.5px 0px rgba(0,0,0,.12);
```

### Hero card shadow

```css
--box-shadow-card: 0 28px 56px 0 hsla(0,0%,9%,.08);
```

### Inner shadow (merchant section)

```css
--box-shadow-inner: 0px 14px 28px 0px hsla(0,0%,9%,.08);
```

### Low elevation (popovers, dropdowns)

```css
--box-shadow-low: 0 11.916px 30.64px 0 hsla(0,0%,9%,.08);
```

### Dropdown shadow (Paymit select + nav)

```css
/* Select dropdown */
box-shadow: 0 8px 32px rgba(0,0,0,0.1);

/* Nav dropdown */
box-shadow: 0 8px 32px rgba(0,0,0,0.12);
```

### CTA button hover shadow (Paymit)

```css
box-shadow: 0 4px 14px 0 rgba(59, 115, 255, 0.3);
```

---

## 7. Animation & Motion — COMPLETE REFERENCE

### Transition tokens (CSS custom properties)

```css
--transitionButtonColor:      0.2s linear;
--transitionButtonBg:         0.2s linear;
--transitionButtonRadius:     0.2s ease-in-out;
--transitionHeroCtaRadius:    0.3s ease-in-out;
--transitionHeroCtaBg:        0.3s ease-in-out;
--transitionLink:             0.15s linear;
--transitionFooterPillRadius: 0.25s ease-in-out;
```

### Transition durations map

| Context | Duration | Easing | Properties |
|---|---|---|---|
| Button color/bg | 0.2s | linear | color, background-color |
| Button border-radius | 0.2s | ease-in-out | border-radius |
| Hero CTA button | 0.3s | ease-in-out | border-radius, background-color |
| Hero CTA arrow-tile | 0.3s | ease-in-out | border-radius |
| Nav link hover | 0.15s | ease-in-out | background-color, color |
| Select trigger border | 0.15s | ease-in-out | border-color |
| Card input amount | 0.3s | ease-in-out | font-size (responsive) |
| Arrow icon translate | 0.2s | ease-out | transform |
| Mobile drawer | 0.25s | ease-out | transform, opacity |
| Dropdown animation | 0.2s | ease-out | transform, opacity |
| Chevron rotate | 0.2s | ease-out | transform |
| CDN flag image | 0.2s | ease-out | opacity |
| CTA button hover | 0.2s | ease-out | transform, box-shadow, background-color |
| Select popover open/close | 0.1s | — | opacity, transform |

### CSS @keyframes defined

```css
@keyframes fade-in {
  from { opacity: 0; transform: translateY(-2px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes fade-in-dropdown {
  from { opacity: 0; transform: translateX(-4px); }
  to   { opacity: 1; transform: translateX(0); }
}

@keyframes slide-in-right {
  from { opacity: 0; transform: translateX(100%); }
  to   { opacity: 1; transform: translateX(0); }
}
```

### Animation usage in components

| Animation | Used on | CSS |
|---|---|---|
| `fade-in` | Flag image on select change | `animate-[fade-in_0.2s_ease-out]` |
| `fade-in-dropdown` | Dropdown menu items (staggered) | `animation: fade-in-dropdown 0.2s ease-out ${i * 0.03}s both` |
| `slide-in-right` | Mobile drawer panel | `animation: slide-in-right 0.25s ease-out` |
| Chevron rotation | Dropdown toggle | `transition-transform duration-200` + `rotate-180` |
| Arrow translate | Hero CTA arrow icon | `group-hover:translate-x-0.5 group-hover:-translate-y-0.5` |
| Button morph | Standard buttons | See `.btn-morph` classes |
| Drawer overlay | Mobile menu backdrop | `backdrop-blur-[2px]` + `bg-black/20` |

---

## 8. Buttons — EXACT MEASUREMENTS

### Standard button base

```
.btn-morph (base class):
  display: inline-flex
  height: 40px
  padding: 6px 24px
  justify-content: center
  align-items: center
  border-radius: var(--borderRadiusSm)   /* 10px */
  white-space: nowrap
```

### Button variants (Paymit — actual CSS values)

| Variant | Background | Color | Hover bg | Hover effects | Active |
|---|---|---|---|---|---|
| **Primary (Sign Up)** | `--colorBrand900` (#0A1228) | `white` | `--colorBrand850` (#14213F) | `scale(1.03)` + `shadow-md` + `shadow-[var(--colorBrand300)]/30` | none |
| **Secondary (Login)** | `white` | `--colorTextPrimary` (#171717) | `--colorNeutral100` (#F5F5F5) | `scale(1.03)` + `border-[var(--colorNeutral300)]` + `shadow-sm` | none |
| **Tertiary (Nav links)** | transparent | `--colorTextPrimary` | `--colorNeutral100` | radius morph 10px→28px via `.btn-morph` | none |
| **Hero CTA** | `--colorNeutral100` (#F5F5F5) | `--colorTextPrimary` | `--colorNeutral200` (#E5E5E5) | radius morph 8px→90px via `.btn-hero-morph` | none |
| **Card CTA (Send Money)** | `--colorBrand300` (#3B73FF) | `white` | `--colorBrand400` (#2A5FE6) | `scale(1.01)` + `shadow-lg` + `shadow-[var(--colorBrand300)]/30` | `scale(0.99)` |

### `cursor: pointer` usage

Every interactive element uses `cursor: pointer`:
- Nav links (both desktop and mobile)
- Dropdown triggers and items
- Login / Sign Up buttons
- Hamburger toggle and close button
- Currency select triggers
- Select dropdown items
- "Send money now" CTA button

### Button hover references

```tsx
// Sign Up — nav.tsx:72
className="btn-morph ... transition-all duration-200 hover:scale-[1.03] hover:bg-[var(--colorBrand850)] hover:shadow-md hover:shadow-[var(--colorBrand300)]/30"

// Login — nav.tsx:60
className="btn-morph ... transition-all duration-200 hover:scale-[1.03] hover:border-[var(--colorNeutral300)] hover:bg-[var(--colorNeutral100)] hover:shadow-sm"

// Card CTA — hero.tsx:335
className="... transition-all duration-200 hover:bg-[var(--colorBrand400)] hover:shadow-lg hover:shadow-[var(--colorBrand300)]/30 hover:scale-[1.01] active:scale-[0.99]"
```

### Hero CTA button

```
.btn-hero-morph:
  display: flex; flex-direction: row; align-items: center
  padding: 16px; gap: 16px
  border: 1px solid var(--colorBorderLight)
  border-radius: var(--borderRadiusXs)   /* 8px → expands to 90px on hover */
  background: var(--colorNeutral100)
  white-space: nowrap (mobile: normal wrap)
  width: min-content (mobile: 100%)
  transition: border-radius 0.3s ease-in-out, background-color 0.3s ease-in-out

  → hover: bg var(--colorNeutral200), border-radius 90px

Arrow icon tile (inside):
  display: flex; width: 32px; height: 32px
  border-radius: var(--borderRadiusXs)    /* 8px → 28px hover */
  background: white
  transition: border-radius 0.3s ease-in-out
  arrow svg: 16×16px, NE path, stroke-width 1.5, round caps

  → hover arrow svg: translate(0.5px, -0.5px)
```

### Card CTA button ("Send money now")

```
.hero-card-cta:
  width: 100%
  padding: 16px 16px (mobile: 14px)
  border-radius: 16px (rounded-2xl)
  background: var(--colorBrand300)
  color: white
  font-size: 16px; font-weight: 600; letter-spacing: -0.01em
  transition: all 0.2s ease-out

  → hover:
    background: var(--colorBrand400)
    box-shadow: 0 4px 14px 0 rgba(59, 115, 255, 0.3)
    transform: scale(1.01)

  → active:
    transform: scale(0.99)
```

---

## 9. Navigation — PAYMIT IMPLEMENTATION

### Structure

```
Nav container:
  position: fixed; top: 10px; z-index: 50
  padding: 0 var(--layoutMargin)

Nav:
  display: flex; align-items: center; justify-content: space-between
  margin: 0 auto; max-width: var(--layoutMaxWidth)
  padding: 16px · mobile: 12px 10px
  border: 1px solid var(--colorBorderLight)
  border-radius: var(--borderRadiusXs)   /* 8px */
  background: white

Logo:
  display: flex; align-items: center; gap: 8px
  font-size: 20px · mobile: 18px
  font-weight: 700; letter-spacing: -0.02em
  color: var(--colorTextPrimary)

Desktop nav links:
  display: flex; align-items: center
  gap: 4px (gap-1)
  hidden below lg breakpoint

Nav link item:
  height: 40px
  padding: 0 12px (px-3)
  font-size: 14px; font-weight: 500
  border-radius: var(--borderRadiusSm)   /* 10px → 28px hover */
  color: var(--colorTextPrimary)
  transition: color 0.15s, background-color 0.15s, border-radius 0.2s
  → hover: background var(--colorNeutral100)

Divider:
  width: 1px; height: 20px
  margin: 0 12px
  background: var(--colorBorderPrimary)
  hidden below lg

Action buttons:
  display: flex; align-items: center; gap: 8px · mobile: 6px

Login button:
  height: 40px; padding: 0 20px
  font-size: 14px; font-weight: 500
  border: 1px solid var(--colorBorderLight)
  background: white; color: var(--colorTextPrimary)
  hidden below sm (shown on sm+ via inline-flex)
  → hover: scale(1.03), bg var(--colorNeutral100), shadow-sm

Sign Up button:
  height: 40px; padding: 0 20px · mobile: 0 16px
  font-size: 14px; font-weight: 500
  background: var(--colorBrand900); color: white
  → hover: scale(1.03), bg var(--colorBrand850), shadow-md

Hamburger button:
  display: inline-flex (only below lg)
  width: 40px; height: 40px
  border: 1px solid var(--colorBorderLight)
  border-radius: var(--borderRadiusXs)
  background: white
  → hover: bg var(--colorNeutral100)
```

### Desktop dropdown

```
Dropdown trigger:
  Same as nav link button, plus chevron icon (12×12px)
  Chevron rotates 180deg when open (transition: 0.2s)

Dropdown panel:
  position: absolute; left: 0; top: 100%
  min-width: 180px; padding-top: 4px
  origin-top; transition: all 0.2s
  opacity + translateY animation

Dropdown content:
  border: 1px solid var(--colorBorderLight)
  border-radius: var(--borderRadiusXs)   /* 8px */
  background: white; padding: 6px
  box-shadow: 0 8px 32px rgba(0,0,0,0.12)

Dropdown item:
  padding: 8px 12px; font-size: 14px; font-weight: 500
  border-radius: 8px
  color: var(--colorTextPrimary)
  animation: fade-in-dropdown (staggered by index: 0.03s delay each)
  → hover: translateX(2px), bg var(--colorNeutral100)

Close behavior: 180ms delay on mouseleave before hiding
```

### Mobile drawer

```
Overlay:
  position: fixed; inset: 0; z-index: 40
  background: black/20; backdrop-blur-[2px]

Drawer panel:
  position: fixed; right: 0; top: 0; z-index: 50
  width: 300px; max-width: 85vw; height: 100%
  background: white; padding: 20px
  border-left: 1px solid var(--colorBorderLight)
  box-shadow: 2xl
  animation: slide-in-right 0.25s ease-out

Drawer header:
  display: flex; justify-content: space-between; align-items: center
  margin-bottom: 24px

Drawer nav items:
  flex-direction: column; gap: 4px

Drawer nav link:
  padding: 10px 12px; border-radius: 8px
  font-size: 15px; font-weight: 500
  → hover: bg var(--colorNeutral100)

Mobile dropdown:
  Expandable with chevron rotate animation (0.2s)
  Sublinks: pl-4, pt-1, gap-0.5; font-size: 14px, normal weight

Drawer footer (Login/Sign Up):
  margin-top: auto; padding-top: 24px; flex-direction: column; gap: 8px
```

### Z-index layering

| Layer | Z-index | Elements |
|---|---|---|
| Navigation wrapper | 50 | Fixed nav, mobile drawer |
| Drawer overlay | 40 | Mobile menu backdrop |
| Standard content | 1-10 | Hero, sections, footer |
| Select popover | 50 | Currency dropdown (base-ui portal) |

---

## 10. Hero Section — PAYMIT IMPLEMENTATION

### Section container

```
Hero section:
  width: 100%; background: white
  padding-top: var(--headerNavOffset) /* 96px → mobile: 72px */
```

### Desktop layout (≥768px)

```
24-column CSS Grid:
  max-width: var(--layoutMaxWidth)
  min-height: calc(100dvh - 96px)
  padding: 0 var(--layoutMargin) 48px
  column-gap: var(--layoutGutter)

Grid areas:
  g (graphic): cols 13-24
  p (pill):    cols 1-6     (not used in Paymit — reserved for "Built by Stripe")
  h (heading): cols 1-11
  t (tagline): cols 1-7
  b (button):  cols 1-6

Grid rows: 1fr repeat(3, min-content) 1fr
Row gap: 20px
```

### Heading (desktop)

```tsx
// hero.tsx:61-68
className="text-[80px] font-semibold leading-[78px] tracking-[-2.4px] text-[var(--colorTextPrimary)] max-lg:text-[68px] max-lg:leading-[66px] max-lg:tracking-[-2px]"
style={{ gridArea: "h", textWrap: "balance", maxWidth: "720px" }}
```

| Property | Value | lg (≤1024px) |
|---|---|---|
| font-size | **80px** | **68px** |
| font-weight | **600** (semibold) | 600 |
| line-height | **78px** (0.975) | **66px** |
| letter-spacing | **-2.4px** | **-2px** |
| max-width | **720px** | (inherits) |
| text-wrap | balance | balance |
| color | `var(--colorTextPrimary)` (#171717) | — |
| Emphasis word | `var(--colorTextActionPrimary)` (#3B73FF) | — |

### Heading (mobile)

```tsx
// hero.tsx:119-125
className="self-start text-[40px] font-semibold leading-[38px] tracking-[-1px] text-[var(--colorTextPrimary)] pt-10"
style={{ textWrap: "balance" }}
```

| Property | Value |
|---|---|
| font-size | **40px** |
| font-weight | **600** (semibold) |
| line-height | **38px** (0.95) |
| letter-spacing | **-1px** |
| padding-top | **40px** (pt-10) |
| text-wrap | balance |

### Body text

**Desktop (hero.tsx:71-77):**
```tsx
className="mt-2.5 text-lg font-medium max-lg:mt-0 max-lg:mb-2"
```
- font-size: `18px` (text-lg in Tailwind v4)
- font-weight: `500` (font-medium)
- line-height: `26px` (~1.44)
- margin-top: `10px` (mt-2.5), reset at lg breakpoint

**Mobile (hero.tsx:128-133):**
```tsx
className="self-start text-[18px] font-medium leading-[26px] text-[var(--colorNeutral600)]"
style={{ textWrap: "balance" }}
```
- font-size: `18px`
- font-weight: `500`
- line-height: `26px`
- color: `var(--colorNeutral600)` (#525252) — slightly muted vs desktop
- text-wrap: balance

### Graphic container

```
Desktop grid area "g":
  display: flex; align-items: center; justify-content: center
  border-radius: var(--borderRadiusXs)    /* 8px */
  border: 1px solid var(--colorBorderLight)
  background: var(--colorNeutral100)
  aspect-ratio (mobile): 366/436
```

### Currency converter card (HeroGraphicCard — hero.tsx:167-339)

```
Card container:
  width: 100%
  max-width: 440px (desktop: md:w-[440px] = fixed 440px; mobile/sm: max-w-none)
  z-index: 2 (z-2, relative)
  display: flex; flex-direction: column; gap: 12px (gap-3)
  padding: 20px (p-5) · mobile: 16px (max-md:p-4)
  border-radius: var(--borderRadiusLg)    /* 28px */
  background: var(--colorNeutral100)       /* #F5F5F5 */
  box-shadow: var(--box-shadow-card)

Input field ("You Pay" / "They get"):
  border-radius: 16px (rounded-2xl)       ← NOT a token value, hardcoded 16px
  border: 1px solid var(--colorNeutral200)  /* #E5E5E5 */
  background: white
  padding: 20px (p-5) · mobile: 16px (max-md:p-4)
  transition: border-color 0.2s
  → hover: border-color var(--colorNeutral300)  /* #D4D4D4 */

  Label row:
    display: flex; justify-content: space-between; align-items: center; gap: 8px
    margin-bottom: 8px (mb-2)

  "You Pay" / "They get" badge:
    display: inline-flex; align-items: center
    padding: 2px 10px (px-2.5 py-0.5)
    border-radius: 9999px (rounded-full)
    font-size: 14px; font-weight: 600 (font-semibold)

  Amount display row:
    display: flex; align-items: baseline
    currency symbol: font-size 36px → 28px (md) → 24px (sm), color var(--colorNeutral400)
    input / value: font-size 36px → 28px (md) → 24px (sm)
    font-weight: 600; line-height: 1.1; letter-spacing: -0.02em
    input: color var(--colorTextPrimary), bg-transparent, w-full, ml-1
    transition: all 0.3s (transition-all duration-300)

  USD equivalent:
    margin-top: 4px (mt-1)
    font-size: 13px; font-weight: 500 (font-medium)
    color: var(--colorNeutral400)   /* #A3A3A3 */
    transition: all 0.3s

Select trigger (currency picker):
  height: 44px (h-11)
  cursor: pointer; gap: 8px (gap-2)
  border: 1px solid var(--colorNeutral200)
  background: white
  padding: 14px horizontal (px-3.5), 20px vertical (py-5)  ← unconventional
  font-weight: 600 (font-semibold)
  letter-spacing: -0.01em (tracking-[-0.01em])
  color: var(--colorTextPrimary)
  transition: border-color 0.15s (transition-colors duration-150)
  → hover: border-color var(--colorNeutral300)
  → flag inside: size 30px · mobile: 18px
  → code text: text-base font-semibold · mobile: text-sm

Select dropdown (SelectContent):
  max-height: 280px; min-width: 140px
  border-radius: 14px (rounded-[14px]) ← custom value
  border: 1px solid var(--colorNeutral200)
  padding: 6px (p-1.5)
  box-shadow: 0 8px 32px rgba(0,0,0,0.1)

Select item:
  margin: 2px vertical (my-0.5)
  border-radius: 10px (rounded-[10px]) ← matches --borderRadiusSm
  padding: 10px 12px (px-3 py-2.5)
  font-size: 14px (text-sm)
  transition: background-color 0.1s
  → highlighted: bg var(--colorNeutral50)
  → cursor: pointer

Rate pill (below inputs, hero.tsx:319-332):
  padding-inline: 4px (px-1)
  padding-top: 4px (pt-1)
  display: flex; align-items: center

  Inner pill:
    display: inline-flex; align-items: center; gap: 6px (gap-1.5)
    border-radius: 9999px (rounded-full)
    padding: 2px 10px (px-2.5 py-0.5)
    font-size: 14px; font-weight: 600 (font-semibold)

    "1 GBP":     font-semibold, color var(--colorTextPrimary)
    "≈":         color var(--colorBrand500)
    rate value:  font-bold, color var(--colorTextActionPrimary) (#3B73FF)
    "NGN":       font-semibold, color var(--colorTextPrimary)

CTA button ("Send money now", hero.tsx:335-337):
  margin-top: 4px (mt-1)
  width: 100%
  padding: 16px (px-4 py-4) · mobile: 14px vertical (max-sm:py-3.5)
  border-radius: 16px (rounded-2xl)       ← custom, not a token
  background: var(--colorBrand300)         /* #3B73FF */
  color: white
  font-size: 16px (text-base); font-weight: 600 (font-semibold)
  letter-spacing: -0.01em
  border: none (border-none)
  cursor: pointer
  transition: all 0.2s (transition-all duration-200)

  → hover:
    background: var(--colorBrand400)               /* #2A5FE6 */
    box-shadow: 0 4px 14px rgba(59,115,255,0.3)    /* shadow-lg + shadow-[var(--colorBrand300)]/30 */
    transform: scale(1.01)

  → active:
    transform: scale(0.99)   ← press feedback
```

### Mobile layout (<768px)

```
Container: flex flex-col
  width: 100%; padding: 24px 20px 48px
  height: 90vh
  justify-content: space-between

Content wrapper: max-width 440px; flex-col; gap-5

Heading: pt-10 (top padding)
Body: color var(--colorNeutral600)

CTA button: width 100%
Card: at bottom of flex layout
```

---

## 11. Paymit Design Guide — IMPLEMENTATION PATTERNS

### Component architecture

```
src/
├── app/
│   ├── globals.css          # Design tokens + Tailwind v4 + shadcn + animations
│   ├── layout.tsx           # Root layout, font loading (Inter + DM Sans)
│   └── page.tsx             # Page composition (Nav + Hero + sections)
├── components/
│   ├── hero.tsx             # HeroSection + HeroGraphicCard (client component)
│   ├── nav.tsx              # Navigation + Dropdown + MobileDrawer (client component)
│   └── ui/
│       └── select.tsx       # Currency picker (uses @base-ui/react Select)
├── data/
│   ├── currencies.ts        # Currency list, exchange rates, formatting
│   └── nav.ts               # Nav link data model + items
└── lib/
    └── utils.ts             # cn() utility + formatCurrency()
```

### Client vs Server components

| Component | Type | Reason |
|---|---|---|
| `Nav` | `"use client"` | useState for mobile toggle, useRef for dropdown timers |
| `Hero` | `"use client"` | useState for currency selection, amount input |
| `Select` | `"use client"` | Uses @base-ui/react interactive primitive |
| `page.tsx` | Server (default) | Composes static layout, no interactivity |

### Currency data pattern

```ts
// src/data/currencies.ts
CURRENCIES: { code, iso, symbol }[]
RATES: Record<code, Record<code, number>>
getRate(from, to): number
getSymbol(code): string
formatRate(rate): string
fmt(n, min, max): string
```

### Flag image pattern

```tsx
<img
  src={`https://flagcdn.com/w80/${iso}.png`}
  srcSet={`https://flagcdn.com/w80/${iso}.png 1x, https://flagcdn.com/w160/${iso}.png 2x`}
  width={size}
  height={size * 0.75}
  loading="lazy"
  className="block rounded-[2px] object-cover transition-opacity duration-200"
/>
```

### CSSTransition class naming pattern

```css
.btn-morph       → standard button border-radius morph (10px → 28px)
.btn-hero-morph  → hero CTA button morph (8px → 90px)
.arrow-tile      → icon tile inside hero CTA (8px → 28px)
```

### Tailwind v4 theme block

```css
@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-sans);
  --font-mono: var(--font-geist-mono);
  /* ... shadcn mappings ... */
}
```

---

## 12. GSAP Micro-Animations Guide

**GSAP is NOT currently installed.** Install via:
```bash
npm install gsap @types/gsap
```

All micro-animations below are designed as optional enhancements that layer on top of existing CSS transitions without breaking the base experience.

### 12.1 Button hover (enhanced pulse)

```tsx
// Hook: useGsapButtonHover.ts
import { useRef } from "react";
import gsap from "gsap";

export function useGsapButtonHover() {
  const ref = useRef<HTMLButtonElement>(null);

  const handleEnter = () => {
    gsap.to(ref.current, {
      scale: 1.03,
      duration: 0.3,
      ease: "power2.out",
    });
  };
  const handleLeave = () => {
    gsap.to(ref.current, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return { ref, handleEnter, handleLeave };
}
```

### 12.2 Hero heading entrance (stagger)

```tsx
// Animate heading words on mount
useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.from(".hero-word", {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.08,
      ease: "power3.out",
    });
  });
  return () => ctx.revert();
}, []);
```

### 12.3 Hero CTA arrow icon bounce

```tsx
// Gentle arrow bounce on hover
const handleArrowEnter = () => {
  gsap.to(arrowRef.current, {
    x: 3,
    y: -3,
    duration: 0.3,
    ease: "back.out(1.7)",
  });
};
const handleArrowLeave = () => {
  gsap.to(arrowRef.current, {
    x: 0,
    y: 0,
    duration: 0.3,
    ease: "power2.out",
  });
};
```

### 12.4 Amount number transition (count-up)

```tsx
// Animate the "They get" amount when rate changes
useEffect(() => {
  const obj = { value: prevAmount };
  gsap.to(obj, {
    value: receiveAmount,
    duration: 0.4,
    ease: "power2.out",
    onUpdate: () => {
      setDisplayAmount(obj.value);
    },
  });
}, [receiveAmount]);
```

### 12.5 Select dropdown entrance

```tsx
// GSAP-powered dropdown open animation
useEffect(() => {
  if (open) {
    gsap.from(dropdownRef.current, {
      opacity: 0,
      y: -4,
      scaleY: 0.95,
      duration: 0.15,
      ease: "power2.out",
      transformOrigin: "top center",
    });
  }
}, [open]);
```

### 12.6 Mobile menu drawer (GSAP version)

```tsx
// Replace CSS animation with GSAP for finer control
useEffect(() => {
  if (mobileOpen) {
    gsap.fromTo(drawerRef.current,
      { x: "100%", opacity: 0 },
      { x: "0%", opacity: 1, duration: 0.3, ease: "power3.out" }
    );
    gsap.fromTo(overlayRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.2, ease: "power2.out" }
    );
  }
}, [mobileOpen]);
```

### 12.7 Nav dropdown stagger

```tsx
// Replace CSS staggered animation with GSAP
useEffect(() => {
  if (visible) {
    gsap.from(dropdownItems.current.children, {
      opacity: 0,
      x: -4,
      duration: 0.15,
      stagger: 0.025,
      ease: "power1.out",
    });
  }
}, [visible]);
```

### 12.8 Scroll-triggered section reveals

```tsx
// Requires gsap/ScrollTrigger
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.from(".section-reveal", {
      scrollTrigger: {
        trigger: ".section-reveal",
        start: "top 85%",
        end: "top 60%",
        toggleActions: "play none none reverse",
      },
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    });
  });
  return () => ctx.revert();
}, []);
```

### 12.9 Rate pill shimmer

```tsx
// Gentle shimmer animation on the rate value when it changes
useEffect(() => {
  gsap.fromTo(rateRef.current,
    { color: "#3B73FF", scale: 1.05 },
    { color: "#171717", scale: 1, duration: 0.6, ease: "power2.out" }
  );
}, [rate]);
```

### 12.10 Micro-interaction timing reference

| Animation | Duration | Easing | Delay |
|---|---|---|---|
| Word stagger entrance | 0.8s total | power3.out | 0.08s between words |
| Button hover scale | 0.3s | power2.out | none |
| Arrow icon bounce | 0.3s | back.out(1.7) | none |
| Count-up number | 0.4s | power2.out | none |
| Dropdown open | 0.15s | power2.out | none |
| Mobile drawer slide | 0.3s | power3.out | none |
| Dropdown stagger | 0.15s | power1.out | 0.025s between |
| Section reveal | 0.6s | power2.out | scroll-triggered |
| Rate shimmer | 0.6s | power2.out | none |

---

## 13. Cursor & Pointer Interactions

### 13.1 Custom cursor follower (global)

```tsx
// components/cursor-follower.tsx
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function CursorFollower() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: "power2.out",
      });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed left-0 top-0 z-[9999] size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--colorBrand300)] opacity-40 mix-blend-difference"
      style={{ willChange: "transform" }}
    />
  );
}
```

### 13.2 Magnetic button effect

```tsx
// Hook: useMagneticEffect.ts
import { useRef, useCallback } from "react";
import gsap from "gsap";

export function useMagneticEffect() {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(el, {
      x: x * 0.15,
      y: y * 0.15,
      duration: 0.4,
      ease: "power2.out",
    });
  }, []);

  const handleLeave = useCallback(() => {
    gsap.to(ref.current, {
      x: 0,
      y: 0,
      duration: 0.4,
      ease: "power2.out",
    });
  }, []);

  return { ref, handleMove, handleLeave };
}
```

### 13.3 Nav link hover glow

```tsx
// Add to each nav link
const handleEnter = () => {
  gsap.to(glowRef.current, {
    opacity: 1,
    width: "100%",
    duration: 0.2,
    ease: "power2.out",
  });
};
const handleLeave = () => {
  gsap.to(glowRef.current, {
    opacity: 0,
    width: "0%",
    duration: 0.2,
    ease: "power2.out",
  });
};
```

### 13.4 CTA button ripple

```tsx
// Hook: useRippleEffect.ts
export function useRippleEffect() {
  const createRipple = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const size = Math.max(rect.width, rect.height);

    const ripple = document.createElement("span");
    ripple.className = "pointer-events-none absolute rounded-full bg-white/30";
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x - size / 2}px`;
    ripple.style.top = `${y - size / 2}px`;

    el.appendChild(ripple);

    gsap.to(ripple, {
      scale: 2.5,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
      onComplete: () => ripple.remove(),
    });
  };

  return createRipple;
}
```

### 13.5 Cursor interaction reference

| Interaction | Trigger | Effect | Duration | Easing |
|---|---|---|---|---|
| **Cursor follower** | Mouse move | Dot trails cursor with 0.3s lag | 0.3s | power2.out |
| **Magnetic button** | Hover | Button shifts toward cursor (15% of distance) | 0.4s | power2.out |
| **Nav link glow** | Hover | Underline glow sweeps in from left | 0.2s | power2.out |
| **Button ripple** | Click | Expanding circle from click point, fades out | 0.6s | power2.out |
| **Card hover lift** | Hover | Card elevates (translateY -2px) + shadow deepens | 0.3s | power2.out |
| **Arrow icon bounce** | Hover | Arrow overshoots and rebounds | 0.3s | back.out(1.7) |
| **Rate pill hover** | Hover | Slight scale + brightness increase | 0.2s | power2.out |
| **Flag hover pulse** | Hover | Subtle scale pop on flag | 0.2s | power1.out |

---

## 14. Design Tokens & CSS Architecture

### Where tokens are defined

```css
/* src/app/globals.css — all design tokens */
:root {
  --colorBrand0:   #FFFFFF;
  --colorBrand25:  #EEF3FF;
  /* ... full palette ... */
  --colorNeutral900: #171717;
  /* ... semantic tokens ... */
  --layoutColumnCount: 24;
  --layoutMargin: 64px;
  /* ... typography tokens ... */
  --spacing-xs: 8px;
  /* ... border radius tokens ... */
  --borderRadiusXs: 8px;
  /* ... shadow tokens ... */
  --shadowCard: ...;
  /* ... transition tokens ... */
  --transitionButtonColor: 0.2s linear;
  /* ... shadcn mappings ... */
}
```

### CSS architecture summary

| Aspect | Pattern |
|---|---|
| Framework | Tailwind CSS v4 |
| Animations | `tw-animate-css` (CSS keyframes) + optional GSAP |
| UI library | shadcn/ui (base-nova style) via `@base-ui/react` |
| Theme | `@theme inline{}` directive for Tailwind v4 |
| CSS Modules | Not used — pure Tailwind utility classes |
| Custom properties | :root-scoped CSS custom properties for all tokens |
| Responsive | Tailwind breakpoints: `sm: 640px, md: 768px, lg: 1024px` + custom media queries |
| Icons | lucide-react (SVG components) |

### Token usage by file

| File | Tokens used |
|---|---|
| `globals.css` | Defines ALL tokens at `:root` |
| `nav.tsx` | `--layoutMaxWidth`, `--layoutMargin`, `--borderRadiusXs`, `--borderRadiusSm`, `--colorBorderLight`, `--colorBorderPrimary`, `--colorNeutral100`, `--colorNeutral300`, `--colorBrand900`, `--colorBrand850`, `--colorTextPrimary` |
| `hero.tsx` | `--headerNavOffset`, `--layoutMaxWidth`, `--layoutMargin`, `--layoutGutter`, `--borderRadiusXs`, `--borderRadiusLg`, `--colorBorderLight`, `--colorNeutral100`, `--colorNeutral200`, `--colorNeutral300`, `--colorNeutral400`, `--colorNeutral600`, `--colorNeutral900`, `--colorTextPrimary`, `--colorTextActionPrimary`, `--colorBrand300`, `--colorBrand400`, `--colorBrand500`, `--box-shadow-card` |
| `select.tsx` | Uses Tailwind utility classes + shadcn theme variables (`--color-border`, `--color-ring`, etc.) |

### Known issue: `--colorText` is undefined

In `hero.tsx:83` and `hero.tsx:139`:
```tsx
color: "var(--colorText)"
```

`--colorText` is **NOT defined** in `globals.css`. The correct token is `--colorTextPrimary`. The fallback resolves to the browser default text color (black), which matches `--colorTextPrimary` (#171717) by coincidence. **Fix**: replace with `var(--colorTextPrimary)`.

### Selection highlight (`globals.css:222-225`)

```css
::selection {
  background: rgba(59, 115, 255, 0.5);   /* --colorBrand300 at 50% opacity */
  color: var(--colorBrand900);             /* #0A1228 ink */
}
```

---

## 15. Key Construction Rules

1. **One 24-col subgrid** governs desktop layout. Mobile reflows to stacked flex.
2. **Larger text = lighter weight (500). Smaller labels = bolder (600).** Inverted weight hierarchy.
3. **Emphasis = hue, not italic.** Keep text upright; change color to `#3B73FF` (blue).
4. **Negative tracking** tightens with size: -2.4px on 80px down to -0.01em on body.
5. **Button radius morphs** on hover: 10px → 28px (0.2s ease-in-out) — signature move.
6. **Hero CTA button morphs** 8px → 90px with 0.3s ease-in-out — larger, slower morph.
7. **Card dimensions are fluid** (max-width 440px) — not fixed like link.com.
8. **Borders replace heavy shadows** on most surfaces. Shadows are subtle.
9. **14px/14px at 500 weight** = default button and nav typography (not 16px).
10. **Border-radius scale**: 8 / 10 / 14 / 16 / 28 / 90 / 999px.
11. **Section spacing** uses multiples of 8/16/20/24/48/64/96px (8px-base system).
12. **Hover transitions are short**: 0.15s–0.3s max. Never 0.4s+.
13. **Dark section backgrounds** use `--colorBrand850` (#14213F) for the surface.
14. **Container max-width**: 1800px, but actual content floats in the 24-col grid.
15. **The palette is blue + neutral.** No green, no purple — blue is the single accent.
16. **GSAP is optional** — all core interactions work with pure CSS. GSAP adds polish.
17. **Z-index layers**: nav 50, mobile drawer 50, dropdown 50, select popover via portal.
18. **Mobile-first responsive** — desktop uses 24-col grid; mobile uses stacked flex.
19. **All interactive elements need `cursor: pointer`** — buttons, select triggers, nav links, dropdown toggles, hamburger, close buttons.
20. **Focus styles** — use `focus-visible` for keyboard users, `focus:ring` for select fields, `outline-ring/50` globally.

---

## 16. Accessibility Checklist

| Aspect | Implementation |
|---|---|
| **Contrast** | Primary text (#171717) on white (#FFF) = ~18:1. Blue emphasis (#3B73FF) on white = ~4:1 (meets large text). |
| **Focus visibility** | `focus-visible:border-ring` on selects, `focus-visible:ring-3` standard |
| **Selection** | `::selection { background: rgba(59,115,255,0.5); }` |
| **Reduced motion** | GSAP respects `prefers-reduced-motion` via `gsap.ticker.lagSmoothing(0)`. Add `@media (prefers-reduced-motion: reduce) { * { animation-duration: 0.01ms !important; } }` |
| **Keyboard navigation** | All buttons are `<button>` or `<a>`. Dropdowns managed with hover + keyboard. |
| **Touch targets** | All interactive ≥40px height. Mobile drawer has adequate tap areas. |
| **ARIA labels** | `aria-label="Toggle menu"`, `aria-label="Close menu"`, `aria-label="Amount to send"` |
| **Images** | `alt` text on flag images (`{country} flag`). `loading="lazy"` for offscreen. |
| **Font loading** | next/font/google with `display: swap` (default). |

---

## 17. Page Structure (Paymit)

1. **Header/Nav** — Fixed top (z-index 50), max-width 1800px centered, 8px border-radius, logo + nav links + Login/Sign Up
2. **Hero** — 96px top padding, 24-col grid desktop / stacked mobile, min-height 100dvh-96px
   - Heading: "Send money worldwide." (blue emphasis on "money")
   - Body: "Experience fast, secure, and hassle-free international transfers..."
   - CTA button: "Get started" with trailing 32×32 NE arrow tile
   - Graphic: Currency converter card (max-width 440px, 28px border-radius)
3. **Future sections** — (to be added: features, rates, testimonials, footer)

---

## 18. Code Snippets — CRITICAL PATTERNS

### CSS animation classes (survive Tailwind v4 purge)

```css
@keyframes fade-in {
  from { opacity: 0; transform: translateY(-2px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes fade-in-dropdown {
  from { opacity: 0; transform: translateX(-4px); }
  to   { opacity: 1; transform: translateX(0); }
}
@keyframes slide-in-right {
  from { opacity: 0; transform: translateX(100%); }
  to   { opacity: 1; transform: translateX(0); }
}
```

### Button morph utility classes

```css
.btn-morph {
  border-radius: var(--borderRadiusSm);
  transition:
    color var(--transitionButtonColor),
    background-color var(--transitionButtonBg),
    border-radius var(--transitionButtonRadius);
}
.btn-morph:hover {
  border-radius: var(--borderRadiusLg);
}

.btn-hero-morph {
  border-radius: var(--borderRadiusXs);
  transition:
    border-radius var(--transitionHeroCtaRadius),
    background-color var(--transitionHeroCtaBg);
}
.btn-hero-morph:hover {
  border-radius: var(--borderRadiusXl);
}
.btn-hero-morph .arrow-tile {
  border-radius: var(--borderRadiusXs);
  transition: border-radius var(--transitionHeroCtaRadius);
}
.btn-hero-morph:hover .arrow-tile {
  border-radius: var(--borderRadiusLg);
}
```

### Dropdown stagger animation (inline style)

```tsx
style={{
  animation: visible
    ? `fade-in-dropdown 0.2s ease-out ${i * 0.03}s both`
    : "none",
}}
```

### Mobile drawer animation (inline style)

```tsx
style={{
  animation: "slide-in-right 0.25s ease-out",
  borderLeft: "1px solid var(--colorBorderLight)",
}}
```
