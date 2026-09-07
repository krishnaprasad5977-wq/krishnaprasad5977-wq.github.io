# InfraKraft Website — Claude Co-pilot

## Project Context

This is the **InfraKraft** freelance business website — a single-page HTML site hosted on GitHub Pages.

- **Live URL:** https://theinfrakraft.github.io
- **Repo:** https://github.com/theinfrakraft/theinfrakraft.github.io
- **Owner:** Krishna Prasad (Vijay)
- **Stack:** Pure HTML/CSS/JS — single `index.html`, no build system, no framework
- **Hosting:** GitHub Pages — auto-deploys on push to `main` (~1–2 min)
- **Analytics:** Google Analytics G-10CL2MDDPK
- **Forms:** Web3Forms (key: `5965f5c5-0c64-4497-82dc-ec00be9b3379`)

---

## Brand

| Token | Value |
|-------|-------|
| Primary Navy | `#0D1B2A` |
| Teal (accent) | `#00C9B8` |
| Teal on light | `#008F83` |
| Slate (subtext) | `#7A92A3` |
| Off-white | `#EEF2F5` |
| Display font | Syne 800 (wordmark) |
| Body font | Inter |
| Mono font | DM Mono |

Logo: SVG K-node icon mark (spine = white rect, arms = teal lines, node dots at tips). Always use the SVG inline — no external image files.

---

## Contact Details

| Field | Value |
|-------|-------|
| Email | contact.theinfrakraft@gmail.com |
| WhatsApp | +91 9989128449 |
| Instagram | https://www.instagram.com/theinfrakraft/ |
| LinkedIn | https://www.linkedin.com/in/krishna-prasad-15b555375/ |
| Location | Bangalore / Chennai |

---

## Pricing (current)

| Service | Price |
|---------|-------|
| Business Website | From ₹5,000 |
| Website Maintenance | ₹1,500/month |
| Custom Web App | From ₹10,000 |
| AWS Cloud Setup | From ₹8,000 |
| CI/CD Pipeline | From ₹6,000 |
| AI Solutions | From ₹8,999 |
| Starter Plan | ₹5,000 one-time |
| Business Plan | ₹15,000 one-time |
| Retainer Plan | ₹8,000/month |
| Tutoring | ₹500–₹800/hr |

---

## Integrations

| Service | Purpose | Key/ID |
|---|---|---|
| Web3Forms | Contact form email delivery | `5965f5c5-0c64-4497-82dc-ec00be9b3379` |
| Supabase | Leads DB + newsletter subscribers | URL: `https://vxzsqsbappgeczombnmz.supabase.co` |
| Google Analytics | Visitor tracking | `G-10CL2MDDPK` |
| Google Search Console | Indexing + sitemap | Verified via GA tag, sitemap submitted Sep 2026 |
| Vercel | Primary hosting (auto-deploy from GitHub) | `theinfrakraft-github-io.vercel.app` |

## What's Been Done (completed work)

- [x] SVG K-node logo in navbar (Syne font)
- [x] Google Analytics G-10CL2MDDPK
- [x] JSON-LD structured data (ProfessionalService schema)
- [x] sitemap.xml + robots.txt
- [x] Exit intent popup (WhatsApp CTA)
- [x] Scroll-triggered CTA bar (60% scroll threshold)
- [x] Web3Forms auto-reply on contact form submit
- [x] Trust bar (AWS Certified, 6+ years, SSL, 24h response, UPI, location)
- [x] Value pillars section (Direct access / Start in 24h / Pay as you go)
- [x] Risk-reduction line under hero CTAs
- [x] Instagram + LinkedIn icons in footer
- [x] Copyright year (auto-updates)
- [x] .gitignore for .idea/ and .DS_Store
- [x] Email updated to contact.theinfrakraft@gmail.com
- [x] Per-service "How It Works" — tabbed UI, 6 services, each with steps + deliverables
- [x] Resources section — 9 affiliate/free tool cards (Cloud, Learning, Dev Tools)
- [x] Supabase wired to contact form — every lead saved to `leads` table
- [x] Newsletter signup section — saves to Supabase `subscribers` table
- [x] Migrated to Vercel (auto-deploys from same GitHub repo)
- [x] Google Search Console verified + sitemap submitted + indexing requested

## Pending / In Progress

- [ ] YouTube channel URL → add icon to footer
- [ ] Facebook page URL → add icon to footer
- [ ] Custom domain (infrakraft.in) — on hold (Namecheap ~₹800/yr)
- [ ] Zoho email (hello@infrakraft.in) — waiting for domain
- [ ] Affiliate links — sign up Hostinger/Udemy/DigitalOcean, update Resources hrefs
- [ ] Testimonials section — need real client quotes
- [ ] Portfolio case studies — need real project examples
- [ ] Web3Forms notification email — update to contact.theinfrakraft@gmail.com in dashboard

---

## How to Make Changes

Always edit `index.html` directly — everything lives in this one file.

```bash
# After editing
cd /Users/7000043820/IdeaProjects/theinfrakraft.github.io
git add index.html
git commit -m "short description of change"
git push origin main
```

Never stage `.idea/` files — they're in `.gitignore`.

---

## Style Rules for This Project

- No AI references in any copy — write as a human freelancer would
- All prices in INR (₹)
- CTAs always point to WhatsApp or the contact section — never external booking tools unless Calendly is set up
- Keep the single-file structure — no splitting into multiple HTML/CSS/JS files
- Test locally before pushing: `file:///Users/7000043820/IdeaProjects/theinfrakraft.github.io/index.html`
- After pushing, verify at https://theinfrakraft.github.io (~2 min deploy time)
- Social icon SVGs are inline — no external icon libraries

---

## Social & Marketing Assets (local files)

| File | Purpose |
|------|---------|
| `~/Desktop/infrakraft-logo.html` | Full logo system — all variants, colour palette |
| `~/Desktop/infrakraft-instagram-dp.html` | Instagram profile photo generator (400×400 PNG) |
| `~/Desktop/infrakraft-ads.html` | Google Ads assets — landscape 1200×628, square 1200×1200, logo 1200×1200 |
| `~/Desktop/infrakraft-content-kit.html` | 4-week Instagram + LinkedIn content calendar with copy-paste captions |
