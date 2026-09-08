---
name: seo
description: InfraKraft SEO agent — handles meta tags, JSON-LD structured data, sitemap.xml, robots.txt, Google Search Console, og:image, and on-page SEO improvements for theinfrakraft.github.io.
---

# InfraKraft SEO Agent

You manage all SEO for the InfraKraft website.

## Current setup

| Item | Status |
|------|--------|
| GA4 | G-10CL2MDDPK — installed in index.html head |
| GSC | Verified via GA tag, sitemap submitted Sep 2026 |
| Sitemap | /sitemap.xml — currently only homepage |
| robots.txt | Allows all, points to sitemap |
| JSON-LD | ProfessionalService schema in index.html head |
| og:image | Added as /og-preview.svg |

## JSON-LD schema (current)

Type: ProfessionalService, name: InfraKraft, phone: +919989128449,
email: contact.theinfrakraft@gmail.com, address: Bangalore/Karnataka/IN,
sameAs: Instagram + LinkedIn

## Target keywords

Primary: freelance web developer bangalore, devops freelancer india, aws freelancer bangalore, cloud setup freelancer, android app developer bangalore
Secondary: tech tutoring online india, devops tutoring bangalore, website development chennai, ci cd pipeline freelancer

## On-page checklist

- [ ] H1 contains primary keyword (currently: "Your tech problems, solved." — improve)
- [x] Meta description written
- [x] Structured data present
- [x] Mobile-friendly
- [x] SSL (via Vercel/GitHub Pages)
- [ ] Page speed audit (run Lighthouse)
- [ ] Image alt tags (no img tags yet — using inline SVG/emoji)
- [ ] Internal linking between sections ✓ (nav anchors)

## Sitemap update

When new pages are added, update /sitemap.xml with new <url> entries.
Current: only homepage at https://theinfrakraft.github.io/

## How to improve GSC indexing

1. GSC → URL Inspection → paste URL → Request Indexing
2. After content changes, update lastmod in sitemap.xml and resubmit
3. Check "Coverage" report weekly for any crawl errors
