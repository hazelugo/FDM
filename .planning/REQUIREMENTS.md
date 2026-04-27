# Requirements: Fountain of Mercy Website

## Functional Requirements

### FR-01: Contact Form Submission
The contact form on `contact.html` (EN + ES) must deliver messages to a real inbox. The current fake setTimeout must be replaced with a working form service (Formspree recommended — free tier, no backend needed, works with static HTML).

### FR-02: Leadership Content
The leadership grid on `about.html` (EN + ES) currently shows placeholder initials and `[Name]` text. Real names, roles, and optionally photos must be populated. If photos are not yet available, a consistent placeholder image system should replace the letter-only circles.

### FR-03: Social Media Links
Footer links to Facebook, Instagram, and YouTube are all `href="#"`. These must point to real URLs or be removed if accounts don't exist yet.

### FR-04: Google Maps Embed
The Contact page should include an embedded map for 605 Leal's Dr, Mission, TX 78572 so visitors can find the church without leaving the site.

### FR-05: Favicon & App Icons
No favicon exists. A favicon.ico and at minimum a 192×192 PNG icon must be added, with appropriate `<link>` tags on all 10 HTML pages.

## SEO & Discoverability Requirements

### SR-01: Open Graph Metadata
All 10 pages need `og:title`, `og:description`, `og:image`, `og:url`, `og:type`, and `og:locale` meta tags. The ES pages need `og:locale` set to `es_US`.

### SR-02: Twitter/X Card Tags
`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image` on all pages.

### SR-03: sitemap.xml
A sitemap listing all 10 pages at the site root.

### SR-04: robots.txt
A robots.txt at the site root allowing all crawlers and pointing to the sitemap.

### SR-05: Canonical URLs
Each page needs a `<link rel="canonical">` pointing to its definitive URL.

## Quality Requirements

### QR-01: 404 Page
A branded 404.html matching the site design, with navigation back to the home page. Must work for both EN and ES visitors.

### QR-02: WCAG AA Contrast
All text/background color combinations must meet 4.5:1 contrast ratio (3:1 for large text). Gold-on-cream combinations in particular need verification.

### QR-03: Mobile Navigation
The hamburger menu must work correctly on iOS Safari and Android Chrome. Focus trap and Escape-to-close must function on all mobile browsers.

### QR-04: Form Error States
Contact form error messages must be visible and ARIA-announced on all tested browsers (Chrome, Safari, Firefox).

## Out of Scope
- CMS or dynamic content management
- Blog or sermon archive
- Online giving / payment integration
- Member portal or login
- Custom email hosting
