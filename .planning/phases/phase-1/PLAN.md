# Phase 1 Plan — Content & Assets

## Goal
Replace every placeholder with real or intentional content. No broken links, no `[Name]` text visible to visitors, no missing favicon.

## Decisions Made
- **Leadership photos:** Use styled placeholders — make the letter-circle avatars look intentional (consistent color, typography, sizing). Real photos can be swapped in later with no structural changes.
- **Leader names:** Still needed from client. Plan stubs the structure; names will be filled in when provided.
- **Social media:**
  - Facebook: https://www.facebook.com/fdmpalmview
  - Instagram: https://www.instagram.com/fdmpalmview
  - YouTube: https://www.youtube.com/@fdmpalmview
- **Favicon:** Generate from `assets/aa/aalogo1.png`. Claude will add the `<link>` tags; user must provide the generated .ico and 192px PNG files.

---

## Plan A — Social Media Links
**File scope:** All 10 HTML pages (footer section in each)  
**Applies to:** `en/index.html`, `es/index.html`, `en/about.html`, `es/about.html`, `en/schedule.html`, `es/schedule.html`, `en/programs.html`, `es/programs.html`, `en/contact.html`, `es/contact.html`

Replace all `href="#"` social links in the footer with real URLs:
- Facebook `href="#"` → `href="https://www.facebook.com/fdmpalmview"`
- Instagram `href="#"` → `href="https://www.instagram.com/fdmpalmview"`
- YouTube `href="#"` → `href="https://www.youtube.com/@fdmpalmview"`

Add `target="_blank" rel="noopener noreferrer"` to each social link (opens in new tab safely).

**Verification:** Open any page footer and confirm all three links resolve to the correct social profiles.

---

## Plan B — Leadership Placeholder Styling
**File scope:** `css/style.css`, `en/about.html`, `es/about.html`

The `.leader-photo` div currently shows a single letter on a generic background. Make it intentional:
- Set background to `var(--navy)`, text to `var(--white)`, font to `var(--font-display)` at a larger size
- Round to a circle (`border-radius: 50%`)
- Give it a fixed square size (e.g. 80×80px) that matches the card layout
- Add a subtle gold ring (`outline: 2px solid var(--gold); outline-offset: 3px`) to signal "photo placeholder"

**Verification:** Leadership grid looks polished — not like a broken image state.

---

## Plan C — Favicon Wiring
**File scope:** All 10 HTML pages (`<head>` section)

Add the following `<link>` tags to the `<head>` of all 10 pages:
```html
<link rel="icon" type="image/x-icon" href="../assets/icons/favicon.ico" />
<link rel="icon" type="image/png" sizes="192x192" href="../assets/icons/icon-192.png" />
<link rel="apple-touch-icon" href="../assets/icons/icon-192.png" />
```

Create `assets/icons/` directory. The user must place `favicon.ico` and `icon-192.png` there (generated from `assets/aa/aalogo1.png`).

**Instructions for user to generate icons:**
1. Go to https://favicon.io/favicon-converter/ or https://realfavicongenerator.net/
2. Upload `assets/aa/aalogo1.png`
3. Download and place `favicon.ico` and a 192×192 PNG into `assets/icons/`

**Verification:** Browser tab shows the logo icon. On mobile, "Add to Home Screen" uses the icon.

---

## Plan D — Consistency Audit
**File scope:** Read-only audit across all 10 pages

Verify the following are identical across all pages:
- Phone: (956) 735-2569
- Address: 605 Leal's Dr, Mission, TX 78572
- Sunday service times: 9:00 AM and 11:00 AM
- Wednesday Bible Study time
- Friday Youth time

Fix any mismatches found. Also check that the `href="tel:+19567352569"` links are correct.

---

## Execution Order
1. Plan D (audit first — find any mismatches before touching files)
2. Plan A (social links — pure find/replace across 10 files)
3. Plan B (leadership styling — CSS + minor HTML)
4. Plan C (favicon link tags — same change across 10 files)

## Out of Scope for This Phase
- Filling in real pastor/leader names (awaiting client)
- Real leadership photos (deferred to when available)
- Any changes to page copy beyond the items above

## Commit Strategy
One commit per plan (A, B, C, D) with descriptive messages.
