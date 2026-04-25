---
name: Fountain of Mercy
description: A welcoming church in Puerto Rico — where warmth, editorial craft, and sacred tradition meet.
colors:
  warm-parchment: "oklch(96.5% 0.009 82)"
  parchment-deep: "oklch(92.5% 0.014 82)"
  parchment-border: "oklch(88% 0.018 82)"
  vesper-navy: "oklch(27% 0.075 248)"
  vesper-navy-mid: "oklch(38% 0.065 248)"
  vesper-navy-pale: "oklch(92% 0.025 248)"
  liturgical-gold: "oklch(67% 0.13 70)"
  liturgical-gold-pale: "oklch(90% 0.055 74)"
  ember-copper: "oklch(57% 0.11 38)"
  ember-copper-pale: "oklch(94% 0.035 38)"
  deep-text: "oklch(13% 0.015 82)"
  muted-text: "oklch(42% 0.014 82)"
  sanctuary-white: "oklch(99% 0.003 82)"
  error-warm: "oklch(55% 0.15 25)"
typography:
  display:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(3.5rem, 2rem + 7.5vw, 8rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(2.25rem, 1.75rem + 2.5vw, 4rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(1.75rem, 1.5rem + 1.3vw, 2.5rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  body:
    fontFamily: "DM Sans, system-ui, sans-serif"
    fontSize: "clamp(1rem, 0.92rem + 0.4vw, 1.125rem)"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "DM Sans, system-ui, sans-serif"
    fontSize: "clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)"
    fontWeight: 500
    letterSpacing: "0.12em"
rounded:
  sm: "4px"
  lg: "12px"
  pill: "100px"
spacing:
  1: "0.25rem"
  2: "0.5rem"
  4: "1rem"
  6: "1.5rem"
  8: "2rem"
  12: "3rem"
  16: "4rem"
  24: "6rem"
  32: "8rem"
components:
  button-primary:
    backgroundColor: "{colors.vesper-navy}"
    textColor: "{colors.sanctuary-white}"
    rounded: "{rounded.sm}"
    padding: "0.85em 1.75em"
  button-primary-hover:
    backgroundColor: "{colors.vesper-navy-mid}"
  button-gold:
    backgroundColor: "{colors.liturgical-gold}"
    textColor: "{colors.vesper-navy}"
    rounded: "{rounded.sm}"
    padding: "0.85em 1.75em"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.vesper-navy}"
    rounded: "{rounded.sm}"
    padding: "0.85em 1.75em"
  button-outline-hover:
    backgroundColor: "{colors.vesper-navy}"
    textColor: "{colors.sanctuary-white}"
  input-default:
    backgroundColor: "{colors.sanctuary-white}"
    textColor: "{colors.deep-text}"
    rounded: "{rounded.sm}"
    padding: "0.85em 1em"
---

# Design System: Fountain of Mercy

## 1. Overview

**Creative North Star: "The Illuminated Folio"**

The Fountain of Mercy design system treats every screen the way a master printer treats a page: nothing placed without reason, every element considered at the level of craft that makes the reader feel the care behind it. Cormorant Garamond carries the weight of centuries — expressive, weighted, built for both intimate scripture and authoritative display. DM Sans grounds body copy in clean modern clarity without ever reading corporate. Together they create the traditional-yet-modern tension the brand needs: a serious organization that genuinely wants to serve.

Every surface starts from warm parchment, not white. Sections shift through cream, parchment-deep, and vesper-navy in a rhythm that functions like turning pages — predictable enough to feel familiar, varied enough to create flow. The navy sections feel like a printed cover: dark, confident, and set apart. Transitions between zones are abrupt (background color shifts, not gradients) to preserve the editorial block structure.

What this system explicitly rejects: the "cheesy church aesthetic" of clip art and decorative crosses; the clutter and absent hierarchy of sites like centrovida.com; dark or somber aesthetics with heavy blacks and gothic weight; SaaS landing-page templates with gradient-text heroes, hero-metric panels, and identical icon-heading-text card grids. Nothing should make a visitor say "this looks like a church website from 2009" or "this looks like a startup website."

**Key Characteristics:**
- Serif display leadership with high-contrast scale ratio (4-7× body → display)
- Parchment-to-navy surface rhythm as the elevation system; shadows are state-only
- Liturgical Gold as a precision pointing tool — never a fill, always a signal
- Fluid clamp() type scale that maintains display drama across all viewport widths
- Warm but unhurried; whitespace is hospitality, not emptiness

## 2. Colors: The Illuminated Palette

The palette is built from the quality of light in a stone sanctuary at midday: warm amber through narrow windows, cool contemplative depth in the nave, earthen warmth underfoot. Every neutral leans just slightly toward the 82° gold-amber hue axis so nothing in the system ever reads as clinical.

### Primary
- **Vesper Navy** (`oklch(27% 0.075 248)`): The authoritative presence. Used for hero headlines, primary buttons, footer backgrounds, and all high-contrast text that must command the page. The darkest surface in the system. Its slightly desaturated blue keeps it from reading as corporate or cold — it is contemplative, not aggressive.

### Secondary
- **Liturgical Gold** (`oklch(67% 0.13 70)`): The singular accent. Eyebrow text, nav link underlines, focus rings, event tags, decorative rule lines, italic `em` text in display headings. Its rarity is its authority.
- **Liturgical Gold Pale** (`oklch(90% 0.055 74)`): Background tint for featured items (featured schedule events, first-visit banners). Warm without being loud.

### Tertiary
- **Ember Copper** (`oklch(57% 0.11 38)`): Appears in hover transitions (value item top borders, link hover states). Warmer and earthier than gold — signals interactivity in contexts where gold is already in use.
- **Ember Copper Pale** (`oklch(94% 0.035 38)`): Tint version for subtle warmth.

### Neutral
- **Warm Parchment** (`oklch(96.5% 0.009 82)`): The primary page background. Not white. The warm tint is almost imperceptible but its absence is immediately noticed.
- **Parchment Deep** (`oklch(92.5% 0.014 82)`): Section alternation background. Slightly darker and warmer — creates visual rhythm without introducing a new color.
- **Parchment Border** (`oklch(88% 0.018 82)`): All structural dividers, form field borders, separator lines. Warm-tinted.
- **Deep Text** (`oklch(13% 0.015 82)`): Near-black body text, tinted toward the parchment hue family. Never `#000`.
- **Muted Text** (`oklch(42% 0.014 82)`): Supporting body copy, captions, labels, placeholder text.
- **Sanctuary White** (`oklch(99% 0.003 82)`): Text on vesper-navy surfaces; form field backgrounds. Not `#fff` — barely perceptibly warm.

### Named Rules
**The Rarity Rule.** Liturgical Gold appears on 15% or less of any surface. Use it to point: eyebrows, underlines, rule lines, focus indicators, tags. The moment gold covers a large background area it loses all authority. There is no gold hero, no gold section background, no gold button that fills a full-width row.

**The Warm Axis Rule.** Every neutral in this system — text, backgrounds, borders — is tinted toward the 82° amber-gold hue axis (chroma 0.003–0.018). Introducing a neutral with zero chroma or a different hue (cool gray, blue-gray, green-tinted off-white) breaks the palette harmony immediately.

## 3. Typography

**Display Font:** Cormorant Garamond (Georgia, serif fallback)
**Body Font:** DM Sans (system-ui, sans-serif fallback)

**Character:** Cormorant Garamond's expressive weight range handles everything from intimate italic scripture to authoritative display. Its high contrast between thick and thin strokes gives large text genuine visual drama. DM Sans is geometric-humanist: warm, clean, and highly legible at small sizes. The pairing creates deliberate tension — permanence against approachability — that mirrors the brand itself.

### Hierarchy

- **Display** (700, `clamp(3.5rem, 2rem + 7.5vw, 8rem)`, line-height 1, letter-spacing −0.02em): Hero headline only. The single largest moment on the page — `A Place to Belong`. Cormorant Garamond at this size has genuine visual presence. Key words set in italic `em` appear in Liturgical Gold.
- **Headline** (700, `clamp(2.25rem, 1.75rem + 2.5vw, 4rem)`, line-height 1.1, −0.02em): Page hero h1 for interior pages, section-centered CTA headings. Shares the weight of Display but narrower in scope.
- **Title** (600, `clamp(1.75rem, 1.5rem + 1.3vw, 2.5rem)`, line-height 1.1, −0.01em): Section headings (h2), large content headings within sections. The workhorse heading level.
- **Body** (400, `clamp(1rem, 0.92rem + 0.4vw, 1.125rem)`, line-height 1.65): All prose. Line length constrained to 48–65ch in most contexts; never more than 72ch. DM Sans at this size reads with warmth and clarity.
- **Label** (500, `clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)`, letter-spacing 0.12em, UPPERCASE): Navigation items, eyebrows, event tags, footer column headers. Gold when on cream; muted-text for generic supporting labels.

### Named Rules
**The Italic Accent Rule.** Cormorant Garamond's italic is a design tool, not a grammatical marker. Reserve it for: emotionally important words in display headlines, scripture quotations, and section-opening pullquotes. Italic adds warmth; saturation kills it.

**The Scale Ratio Rule.** The jump from body (1rem base) to display (3.5rem–8rem fluid) is 4–7×. This ratio is load-bearing. Compressing it to "feel safe" is the primary way this system loses its character. If a heading feels too large, the problem is almost always the surrounding spacing, not the heading size.

## 4. Elevation

This is a flat-first system. Surfaces are differentiated by background tint (parchment → parchment-deep → vesper-navy), not by lifting them above each other. Depth is a color-zone property, not a shadow property.

**Shadows exist as responses to state only — never at rest.** A card at rest has no shadow. A section container has no shadow. Shadows appear when a user moves toward an element (hover) or when an interactive state must be surfaced (focus).

### Shadow Vocabulary
- **Hover lift** (`box-shadow: 0 12px 40px oklch(13% 0.015 82 / 0.1)`): Leader cards on hover. Diffuse and low-contrast; it whispers "this is interactive."
- **Button navy glow** (`box-shadow: 0 6px 24px oklch(27% 0.075 248 / 0.25)`): Primary button hover. The shadow matches the button's own color — a contained glow rather than a dark drop shadow.
- **Button gold glow** (`box-shadow: 0 6px 24px oklch(67% 0.13 70 / 0.35)`): Gold button hover. Slightly more prominent.
- **Nav scroll** (`backdrop-filter: blur(12px); box-shadow: 0 1px 0 var(--parchment-border), 0 4px 24px oklch(13% 0.015 82 / 0.06)`): Navigation on scroll. Ultra-subtle — the blur creates perception of a surface without any strong shadow.

### Named Rules
**The Flat-by-Default Rule.** Surfaces rest flat. A shadow on a card at rest signals "this is special" — which means everything cannot be special. Reserve lift for hover states and genuinely elevated overlays (modals, dropdowns if needed).

## 5. Components

### Buttons
Warm and inviting — soft enough to welcome a first-time visitor, confident enough to signal that this is a real organization. The near-square radius (4px) keeps buttons from looking rounded and corporate while avoiding the harsh edge of a 0px box. Hover lifts 1px with a color-matched glow rather than aggressive darkening.

- **Shape:** Near-square (4px radius); pill (100px) for status chips and tags only
- **Primary:** Vesper Navy fill, Sanctuary White text. `padding: 0.85em 1.75em`. 1.5px navy border included for outline-mode parity.
- **Hover / Focus:** `translateY(-1px)` lift, vesper-navy-mid fill, navy glow shadow. Focus: 2px Liturgical Gold outline, 3px offset.
- **Gold:** Liturgical Gold fill, Vesper Navy text. Use for the highest-priority CTA in navy-background sections only. Rare.
- **Outline:** Transparent fill, Vesper Navy border and text. Fills navy on hover. Paired alongside Primary; never used alone as the only CTA.
- **Outline Light:** Transparent fill, Sanctuary White border and text. For CTAs on navy backgrounds where Gold would be too festive.

### Navigation
Fixed at 80px (68px mobile). Transparent at page top; frosted parchment on scroll (0.92 opacity, blur 12px, hair-line bottom border). Cormorant Garamond wordmark at title scale on the left; DM Sans links at label scale on the right.

- Link underline: Gold `::after` pseudo-element slides from 0 to 100% width on hover (0.2s expo-out). Active page: navy weight 500.
- CTA: `.btn-primary` pinned to the right; hidden on mobile (hamburger menu replaces the nav).
- Mobile: Full-screen parchment overlay, links at title scale with `var(--sp-3)` padding each.

### Form Inputs
White field on parchment background. Clean at rest; warmly responsive on focus.

- **Style:** Sanctuary White fill, 1.5px parchment-border stroke, 4px radius
- **Focus:** Vesper Navy border + `0 0 0 3px oklch(27% 0.075 248 / 0.12)` focus ring. No harsh glow — it is a precise pulse.
- **Error:** `oklch(55% 0.15 25)` border + ring (warm red-orange, not a hard red)
- **Placeholder:** Muted text color. No italic.

### Schedule Event (Signature Component)
The schedule is a structured list, not a card grid. Each event is a horizontal row with a time column (Cormorant Garamond, title size), event name + description block, and a status tag (pill, gold background). Featured events carry a 3px gold left-indicator paired with an amber background tint — the pair makes the indicator structural, not decorative.

- Default: Parchment Deep fill, 4px radius
- Hover: `border-left: 3px gold` + amber tint `oklch(92% 0.024 74)`. The background shift accompanies the border so it reads as state, not stripe.
- Featured: Same gold indicator + slightly warmer amber `oklch(94% 0.022 74)`.

### Ministry Cards (Signature Component)
Full-bleed dark-gradient image tiles in an asymmetric 12-column grid (7+5 first row; 4+4+4 second row). Content — heading, description, uppercase link — anchors to bottom-left. A 3px gold top-rule slides in on hover (`opacity: 0 → 1`).

- No resting shadow. The dark gradient overlay handles depth.
- Image scale on hover: `transform: scale(1.04)` (0.5s expo-out). Subtle zoom, never a crop.
- Text overlaid on gradient: Sanctuary White heading, 85%-opacity muted-white body.

### Cards / Containers
Leader cards use Sanctuary White fill and lift on hover (hover-lift shadow). All other containers use background tint differentiation (parchment-deep) rather than surface cards.

- **Leader Card:** White fill, 12px radius, 0 resting shadow, `translateY(-3px)` + hover-lift on hover.
- **Stats Panel:** Amber-warm tint `oklch(93% 0.018 74)`, 12px radius, 2-column interior grid with parchment-border dividers. Sticky on desktop.
- **Avoid** identical-size cards with icon + heading + text in a uniform grid. Vary scale, span, or visual treatment.

### Pullquote / Mission Statement
Mission-statement text uses a 3px Liturgical Gold `border-left` as a traditional blockquote marker. This is the single sanctioned use of a left-side color accent, limited to italic sermon quotes and mission statements. Never applied to list items, navigation items, callout boxes, or standard content cards.

## 6. Do's and Don'ts

### Do:
- **Do** use Cormorant Garamond at unmistakably large sizes for display and headline levels. The font earns its place at scale; at 18px it just looks like a body serif.
- **Do** use the cream → parchment-deep → vesper-navy section rhythm to create depth. That is your elevation system.
- **Do** apply Liturgical Gold only for pointing: eyebrows, underlines, focus rings, rule lines, event tags. If a surface would require gold fill larger than a chip, the answer is parchment or navy instead.
- **Do** cap body text line length at 48–65ch. Unconstrained full-width paragraphs destroy readability on large screens.
- **Do** use `var(--ease-out)` (`cubic-bezier(0.22, 1, 0.36, 1)`) for all transitions. State changes decelerate into place — they never bounce or spring.
- **Do** ensure every interactive element has a 2px Liturgical Gold focus ring with 3px offset. Accessibility is hospitality.
- **Do** use Cormorant Garamond italic (`em`) deliberately: hero display emphasis, scripture quotations, pullquotes. One or two words per heading maximum.

### Don't:
- **Don't** use clip art, decorative crosses as visual filler, soft-vignette stock imagery, or any visual shorthand that reads "generic church website."
- **Don't** add a dark mode. The parchment-to-navy rhythm is a light-mode-only system; a dark mode variant breaks the surface logic and halves the maintenance budget.
- **Don't** use pure black (`#000`) or pure white (`#fff`) anywhere. Every neutral is tinted toward the warm 82° hue axis. Introducing cold grays immediately breaks the palette.
- **Don't** fill large backgrounds with Liturgical Gold. Tags, eyebrows, lines — that is its domain.
- **Don't** use a colored `border-left` or `border-right` greater than 1px as a decorative accent on cards, list items, or callout boxes. The schedule-event gold indicator is the single sanctioned exception — it is always paired with a background tint change to signal state, not decorate.
- **Don't** use gradient text (`background-clip: text` with a gradient fill). Use a solid color. Emphasis through weight or size, not decoration.
- **Don't** apply resting shadows to cards or containers. Shadows appear on hover only.
- **Don't** compress the display type scale. If a heading feels too large, adjust spacing — not font size.
- **Don't** reproduce the centrovida.com pattern: dense content with no whitespace, absent typographic hierarchy, poor kerning, competing visual elements.
- **Don't** use the hero-metric template (large number, small label, gradient accent). This is a SaaS cliché that signals corporate dashboard, not community.
- **Don't** use identical card grids with repeated icon + heading + text at the same size. Every repeated component should have visual differentiation (span variation, background differentiation, or structural asymmetry).
