---
name: website-builder
description: InfraKraft website builder agent — use when building a client website or e-commerce store. Covers screenshot-to-code for fast cloning, Strapi/Payload as CMS backend, Medusa for e-commerce, Ghost for blogs, and PocketBase as a lightweight backend.
---

# Website Builder Agent

Use this agent when delivering website and web app services to clients.

## Repo toolkit

| Repo | Use |
|------|-----|
| [screenshot-to-code](https://github.com/theinfrakraft-dev/screenshot-to-code) | Convert any website screenshot to HTML/CSS instantly |
| [medusa](https://github.com/theinfrakraft-dev/medusa) | E-commerce store with Razorpay support |
| [strapi](https://github.com/theinfrakraft-dev/strapi) | CMS backend for content-heavy sites |
| [payload](https://github.com/theinfrakraft-dev/payload) | Modern CMS + app framework (TypeScript) |
| [Ghost](https://github.com/theinfrakraft-dev/Ghost) | Blog + newsletter platform |
| [pocketbase](https://github.com/theinfrakraft-dev/pocketbase) | Single-binary backend for small apps |

---

## Fastest workflow: screenshot-to-code

When a client says "I want something like [competitor URL]":

```bash
# Local setup
git clone https://github.com/theinfrakraft-dev/screenshot-to-code
cd screenshot-to-code
echo "OPENAI_API_KEY=your-key" > .env
docker-compose up -d
# Open http://localhost:7001
```

1. Screenshot the reference website
2. Upload to screenshot-to-code
3. Select: HTML + Tailwind output
4. Get a working HTML file in 30 seconds
5. Customise with client's brand colours, content, contact details
6. Deploy on Vercel/Netlify (free)

---

## E-Commerce: Medusa (from ₹8,000)

### Why Medusa over Shopify
- No monthly platform fee (Shopify = ₹1,800–₹18,000/month)
- Razorpay built-in via plugin
- Client owns the code + data
- One-time build fee = better value proposition

### Quick deploy
```bash
npx create-medusa-app@latest client-store
cd client-store
# Add Razorpay plugin
npm install medusa-payment-razorpay
```

### What to deliver
- Product catalogue with images
- Razorpay/UPI checkout
- Order management dashboard
- Email confirmations (via Resend/SES)
- Deploy on Railway or DigitalOcean

---

## CMS-backed website: Strapi (from ₹10,000)

Best for: restaurants, schools, clinics — clients who update content themselves.

```bash
npx create-strapi-app@latest client-cms --quickstart
```
- Build content types: Menu, Services, Team, Blog
- Connect to a static frontend (Next.js or plain HTML)
- Client logs into Strapi dashboard to update content

---

## Blog + Newsletter: Ghost (from ₹5,000)

```bash
# Deploy on DigitalOcean
ghost install --db mysql --dbhost localhost
```
Or: Ghost(Pro) at $9/month — easiest option for non-technical clients.

---

## Lightweight app backend: PocketBase

For small booking apps, admin dashboards, or internal tools:
```bash
# Single binary — no Docker needed
./pocketbase serve
# Gives you: REST API, auth, file storage, admin UI at :8090/_/
```
- Use as backend for Android apps (booking, catalogue)
- Zero infra overhead — runs on the cheapest $4/mo VPS

---

## Standard delivery checklist (all website projects)
- [ ] Brand assets collected (logo, colours, fonts, photos)
- [ ] Content written or received from client
- [ ] Screenshot-to-code used for design reference
- [ ] Built and tested on mobile + desktop
- [ ] Contact form wired (Web3Forms free tier)
- [ ] WhatsApp button added
- [ ] Google Analytics added
- [ ] Google Business listing set up for client
- [ ] SSL configured
- [ ] Client walkthrough call done
- [ ] All credentials handed over
