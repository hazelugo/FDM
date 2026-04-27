# Roadmap: Fountain of Mercy Website

## Goal
Ship a production-ready bilingual church website. All placeholder content resolved, contact form functional, SEO complete, accessibility verified.

---

## Phase 1 — Content & Assets
**Goal:** Replace every placeholder with real or intentional content. No more `[Name]`, `href="#"`, or letter-circle photos.

**Tasks:**
- Fill in pastor and leadership names and roles on `en/about.html` and `es/about.html`
- Add leadership photos (or a consistent styled placeholder if photos are pending)
- Update social media links in footer across all 10 pages (real URLs or remove the links)
- Verify phone number, address, and service times are consistent across all pages
- Add favicon.ico and a 192×192 PNG icon; wire `<link>` tags across all 10 pages

**Requirements:** FR-02, FR-03, FR-05  
**Depends on:** User providing real names, photos, and social URLs

---

## Phase 2 — Contact Form Backend
**Goal:** Contact form submissions reach the church inbox.

**Tasks:**
- Set up Formspree (or equivalent) account and create a form endpoint
- Replace the fake setTimeout submission in `js/main.js` with a real `fetch` POST to the endpoint
- Handle success and error states in the UI (both EN and ES copy)
- Test submission end-to-end

**Requirements:** FR-01  
**Depends on:** Phase 1 (stable codebase)

---

## Phase 3 — Maps & Location
**Goal:** Visitors can find the church location directly from the Contact page.

**Tasks:**
- Embed a Google Maps iframe for 605 Leal's Dr, Mission, TX 78572 on `en/contact.html` and `es/contact.html`
- Style the embed to match the page layout (full-width or contained)
- Add a "Get Directions" link alongside the map

**Requirements:** FR-04  
**Depends on:** Phase 1

---

## Phase 4 — SEO & Discoverability
**Goal:** All pages are indexable, shareable, and correctly described to search engines and social platforms.

**Tasks:**
- Add Open Graph meta tags to all 10 pages (title, description, image, url, type, locale)
- Add Twitter card tags to all 10 pages
- Add `<link rel="canonical">` to all 10 pages
- Create `sitemap.xml` at project root
- Create `robots.txt` at project root
- Choose or create a 1200×630 OG image for social sharing

**Requirements:** SR-01, SR-02, SR-03, SR-04, SR-05  
**Depends on:** Phase 1 (final URLs and page titles locked in)

---

## Phase 5 — Quality & Launch Prep
**Goal:** The site passes accessibility, cross-browser, and completeness checks. Ready to deploy.

**Tasks:**
- Build a branded `404.html` (EN primary, link to ES) with site navigation
- Audit color contrast for WCAG AA — especially gold-on-cream and navy-on-cream combinations
- Test mobile navigation (hamburger) on iOS Safari and Android Chrome
- Test contact form error states across browsers
- Final copy review across all 10 pages (no placeholder text remaining)
- Verify doctrine carousel and lightbox work on mobile
- Deployment checklist: hosting setup, domain configuration, HTTPS

**Requirements:** QR-01, QR-02, QR-03, QR-04  
**Depends on:** Phases 1–4

---

## Phase Status

| # | Phase | Status |
|---|-------|--------|
| 1 | Content & Assets | not_started |
| 2 | Contact Form Backend | not_started |
| 3 | Maps & Location | not_started |
| 4 | SEO & Discoverability | not_started |
| 5 | Quality & Launch Prep | not_started |
