# Project: Fountain of Mercy Website

## Summary
A bilingual (EN/ES) church website for Fountain of Mercy, based in Mission, TX. Static HTML/CSS/JS site with no build tooling. The primary conversion goal is getting visitors to attend Sunday service. Secondary goal: helping people discover programs and feel welcomed before visiting in person.

## Current State
The site is functionally complete at the page level — all 5 core pages exist in both languages. The design system is established (Cormorant Garamond + DM Sans, parchment-to-navy palette). A doctrinal points carousel with lightbox is on the About page. The contact form has client-side validation but no real submission backend.

## What Remains to Ship
- Leadership section has placeholder initials (no photos, no real names)
- Social media links are all `#` placeholders
- Contact form submits to nothing (fake setTimeout)
- No favicon or app icons
- No Open Graph / SEO metadata
- No Google Maps embed on Contact page
- No 404 page
- robots.txt and sitemap.xml missing

## Tech Stack
- Pure HTML5 / CSS3 / Vanilla JS — no framework, no build step
- Hosted statically (deployment target TBD)
- Fonts via Google Fonts (Cormorant Garamond, DM Sans)
- Assets: `assets/aa/` (logo), `assets/doctrine/` (18 PNG cards)

## Pages
| Page | EN | ES |
|------|----|----|
| Home | `en/index.html` | `es/index.html` |
| About | `en/about.html` | `es/about.html` |
| Schedule | `en/schedule.html` | `es/schedule.html` |
| Programs | `en/programs.html` | `es/programs.html` |
| Contact | `en/contact.html` | `es/contact.html` |

## Design System
- `css/style.css` — all styles, single file
- `js/main.js` — nav, animations, contact form validation, doctrine carousel + lightbox
- `DESIGN.md` / `DESIGN.json` — design tokens and component specs
- `PRODUCT.md` — brand context and register

## Key Contacts
- Address: 605 Leal's Dr, Mission, TX 78572
- Phone: (956) 735-2569

## Success Criteria
The site is production-ready when:
1. All placeholder content (names, photos, social links) is filled in or intentionally stubbed
2. Contact form submissions reach a real inbox
3. SEO metadata is complete on all pages
4. Favicon and app icons are present
5. Site passes WCAG AA color contrast checks
6. 404 page exists
7. sitemap.xml and robots.txt are present
