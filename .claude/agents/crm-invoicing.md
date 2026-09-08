---
name: crm-invoicing
description: InfraKraft CRM and invoicing agent — manages Twenty CRM for lead/client tracking and Invoice Ninja for professional billing. Use when tracking a new lead, creating an invoice, or managing client pipeline.
---

# CRM & Invoicing Agent

## CRM — Twenty
**Forked repo:** https://github.com/theinfrakraft-dev/twenty

### What to track in Twenty
- **People:** every lead from Supabase contact form
- **Companies:** client businesses
- **Opportunities:** active project deals (stage: Lead → Quoted → In Progress → Delivered → Paid)
- **Notes:** call summaries, WhatsApp conversation notes

### Setup (cloud — free)
1. Go to twenty.com → sign up → create workspace "InfraKraft"
2. Import leads from Supabase: export `leads` table as CSV → Twenty → Import

### Sync leads automatically (via n8n)
Trigger: New row in Supabase `leads`
→ Create Person in Twenty via Twenty API
→ Create Opportunity linked to that Person

### Pipeline stages for InfraKraft
1. **New Lead** — form submitted, not yet contacted
2. **Contacted** — WhatsApp/call done
3. **Quoted** — price sent
4. **In Progress** — 50% advance received, work started
5. **Delivered** — work done, awaiting final payment
6. **Paid** — complete

---

## Invoicing — Invoice Ninja
**Forked repo:** https://github.com/theinfrakraft-dev/invoiceninja

### Setup (free hosted — up to 20 clients)
1. Go to invoiceninja.com → sign up free
2. Settings → Company → set InfraKraft name, address (Bangalore/Karnataka), GST if applicable
3. Add payment gateway: Razorpay (Settings → Payment Gateways → Razorpay)

### Invoice template for InfraKraft
- Currency: INR (₹)
- Payment terms: 50% advance, 50% on delivery
- Late fee: 2% per week after 7 days
- Footer: "Payment via UPI: [UPI ID] · GPay · PhonePe · Bank Transfer"

### Standard invoice items (save as line item templates)
| Item | Rate |
|------|------|
| Business Website — Starter | ₹5,000 |
| Business Website — Business | ₹15,000 |
| Monthly Retainer | ₹8,000/mo |
| AWS Cloud Setup | ₹8,000+ |
| CI/CD Pipeline Setup | ₹6,000+ |
| AI Solution | ₹8,999+ |
| Tutoring Session | ₹500–₹800 |

### Self-host (when > 20 clients)
```bash
docker-compose up -d
# Uses theinfrakraft-dev/invoiceninja docker-compose.yml
```
