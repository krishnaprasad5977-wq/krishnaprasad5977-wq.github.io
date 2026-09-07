# InfraKraft — Website Project

**Live site:** https://theinfrakraft.github.io  
**Vercel (primary):** https://theinfrakraft-github-io.vercel.app  
**Repo:** https://github.com/theinfrakraft/theinfrakraft.github.io  
**Owner:** Krishna Prasad · contact.theinfrakraft@gmail.com · +91 9989128449

---

## What This Is

Single-page freelance business website for **InfraKraft** — a freelance cloud, DevOps, AI, web, mobile, and tutoring service based in Bangalore/Chennai.

Everything lives in one file: `index.html`. No framework, no build system, no dependencies. Pure HTML + CSS + JS.

---

## Tech Stack

| Layer | What |
|---|---|
| Hosting | Vercel (primary) + GitHub Pages (fallback) |
| Database | Supabase (leads + newsletter subscribers) |
| Forms | Web3Forms (email delivery) + Supabase (persistent storage) |
| Analytics | Google Analytics 4 (G-10CL2MDDPK) |
| Search | Google Search Console (verified via GA tag) |
| Fonts | Syne 800 (wordmark), Inter (body), DM Mono, Playfair Display — all via Google Fonts |

---

## Brand

| Token | Value |
|---|---|
| Navy (primary bg) | `#0D1B2A` |
| Teal (accent) | `#00C9B8` |
| Teal on light | `#008F83` |
| Slate (muted text) | `#7A92A3` |
| Off-white | `#EEF2F5` |

**Logo:** SVG K-node icon — vertical white spine, two teal arms angled up/down, node dots at tips. Always inline SVG, never an image file.

---

## Site Sections (top to bottom)

| Section | ID | What it does |
|---|---|---|
| Navbar | — | Logo + nav links + mobile hamburger. Becomes solid on scroll. |
| Hero | `#hero` | Headline, sub, two CTAs (WhatsApp + contact form). Typewriter effect cycling through services. Stats counter (projects / years / certs). |
| Trust bar | — | Dark strip: AWS Certified · 6+ years · SSL · 24h response · UPI accepted · Bangalore/Chennai |
| Value pillars | — | 3 cards: Direct access / Start in 24h / Pay as you go |
| Services | `#services` | 6 service cards with pricing (Website, Cloud/DevOps, AI, Mobile, Marketing, Tutoring) |
| Pricing plans | — | 3 cards: Starter ₹5k / Business ₹15k / Retainer ₹8k/month |
| AI services | `#ai-services` | AI-specific offerings |
| Tutoring | `#tutoring` | 6 topics with price per hour |
| How It Works | `#how` | 6 tabbed service journeys — one per service. Each tab shows 3–4 steps + "You get:" deliverables. |
| Experience | `#experience` | Employment history + certifications |
| Portfolio | `#portfolio` | Project case studies |
| FAQ | `#faq` | Accordion Q&A |
| Resources | `#resources` | 9 affiliate/free tool cards (Cloud, Learning, Dev Tools) |
| Contact | `#contact` | Contact form + sidebar with WhatsApp/email/phone |
| Newsletter | `#newsletter` | Teal email signup banner — saves to Supabase |
| Footer | — | Social icons (Instagram, LinkedIn) + copyright |
| Scroll CTA bar | — | Fixed bottom bar at 60% scroll threshold — "Book Free Call" WhatsApp link |
| Exit intent popup | — | Triggers on cursor leaving viewport top — free consultation offer |

---

## Integrations

### Web3Forms
- Handles contact form email delivery
- Access key: `5965f5c5-0c64-4497-82dc-ec00be9b3379`
- Sends email to `contact.theinfrakraft@gmail.com`
- Auto-reply goes back to the user's email (synced via JS from the email input → hidden `replyto` field)
- To change notification email: log into web3forms.com → update form settings

### Supabase
- URL: `https://vxzsqsbappgeczombnmz.supabase.co`
- Two tables: `leads` and `subscribers`
- Contact form submissions save to `leads` (name, email, phone, service, message, created_at)
- Newsletter signups save to `subscribers` (email, created_at)
- Row Level Security enabled — anon key can INSERT only, cannot read
- To view leads: supabase.com → Table Editor → leads
- API calls use the `anon public` key — safe to expose in frontend JS

### Google Analytics
- Measurement ID: `G-10CL2MDDPK`
- GA tag in `<head>` — standard gtag.js setup
- Used also for Google Search Console verification

### Google Search Console
- Verified via GA tag method
- Sitemap submitted: `https://theinfrakraft.github.io/sitemap.xml`
- Indexing requested Sep 2026

### Vercel
- Auto-deploys on every push to `main` branch (same GitHub repo)
- No build config needed — framework preset: Other, build command: blank
- Deploy URL: `theinfrakraft-github-io.vercel.app`
- GitHub Pages also still works as a fallback

---

## Contact Details

| Field | Value |
|---|---|
| Email | contact.theinfrakraft@gmail.com |
| WhatsApp | +91 9989128449 |
| Instagram | https://www.instagram.com/theinfrakraft/ |
| LinkedIn | https://www.linkedin.com/in/krishna-prasad-15b555375/ |

---

## Pricing

| Service | Price |
|---|---|
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

## How to Make Changes

Everything is in `index.html`. Edit it, then:

```bash
cd /Users/7000043820/IdeaProjects/theinfrakraft.github.io
git add index.html
git commit -m "short description"
git push origin main
```

Vercel auto-deploys in ~30 seconds. GitHub Pages takes ~2 minutes.

**Never stage `.idea/` files** — they're in `.gitignore`. Run `git status` before committing.

**Test locally:** open `file:///Users/7000043820/IdeaProjects/theinfrakraft.github.io/index.html` in a browser.

---

## AI Agent Setup

This repo has Claude Code agents configured in `.claude/agents/`:

| Agent | File | Use for |
|---|---|---|
| `website` | `.claude/agents/website.md` | Any index.html change, SEO, new sections, deploy |
| `content` | `.claude/agents/content.md` | Instagram captions, LinkedIn posts, ad copy, email templates |

`CLAUDE.md` in the repo root has full project context — brand tokens, pricing, credentials, completed/pending checklist. Any Claude Code session started from this repo picks it up automatically.

---

## SEO Setup

- `sitemap.xml` — single URL entry for the live site
- `robots.txt` — allow all crawlers, points to sitemap
- JSON-LD structured data in `<head>` — `ProfessionalService` schema with name, URL, description, contact, location, services offered
- Google Search Console verified + sitemap submitted
- Indexing requested Sep 2026 — expect first Google appearance within 1–3 weeks

---

## Marketing Assets (local files)

These are on the owner's machine, not in the repo:

| File | Purpose |
|---|---|
| `~/Desktop/infrakraft-logo.html` | Full logo system — all variants, colour palette, dark/light/mono |
| `~/Desktop/infrakraft-instagram-dp.html` | Instagram profile photo generator — 400×400 PNG, circle-crop safe |
| `~/Desktop/infrakraft-ads.html` | Google Ads assets — 1200×628 landscape, 1200×1200 square, 1200×1200 logo |
| `~/Desktop/infrakraft-content-kit.html` | 4-week content calendar — 8 Instagram posts + 6 LinkedIn posts with copy-paste captions |

---

## Social Accounts

| Platform | Status | URL |
|---|---|---|
| Instagram | ✅ Active | https://www.instagram.com/theinfrakraft/ |
| LinkedIn | ✅ Active | https://www.linkedin.com/in/krishna-prasad-15b555375/ |
| YouTube | ⏳ Pending | Create channel → add URL to footer |
| Facebook | ⏳ Pending | Create page → add URL to footer |

---

## Pending / To Do

- [ ] YouTube channel — create, share URL, add icon to footer
- [ ] Facebook page — create, share URL, add icon to footer
- [ ] Custom domain (infrakraft.in) — Namecheap ~₹800/yr, on hold
- [ ] Zoho Mail (hello@infrakraft.in) — waiting for domain
- [x] Hostinger affiliate link — `https://www.hostinger.com?REFERRALCODE=JOKCONTAC25B`
- [ ] Udemy affiliate — sign up at impact.com, update Resources section href
- [ ] DigitalOcean affiliate — sign up at digitalocean.com/referral, update Resources section href
- [ ] Testimonials section — need real client quotes
- [ ] Portfolio case studies — need real project examples
- [ ] Web3Forms notification email — update to contact.theinfrakraft@gmail.com in web3forms.com dashboard

---

## Security

- `_headers` file sets: CSP, X-Frame-Options, X-XSS-Protection, X-Content-Type-Options
- Contact form has honeypot botcheck field
- Supabase RLS — anon key is INSERT-only on both tables, no public reads
- `.gitignore` covers `.idea/` and `.DS_Store`
