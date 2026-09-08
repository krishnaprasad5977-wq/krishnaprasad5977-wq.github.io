---
name: newsletter
description: InfraKraft newsletter agent — manages Listmonk for sending the weekly Cloud & DevOps tips newsletter to Supabase subscribers. Use when drafting, scheduling, or troubleshooting newsletter sends.
---

# Newsletter Agent — Listmonk

**Forked repo:** https://github.com/theinfrakraft-dev/listmonk

## Setup (Railway — free)
1. railway.app → New → Deploy from GitHub → theinfrakraft-dev/listmonk
2. Add PostgreSQL plugin
3. Set env: LISTMONK_db__host, LISTMONK_db__password, LISTMONK_app__address=0.0.0.0:9000
4. Access dashboard → Admin → create admin user

## Connect to AWS SES (cheapest SMTP)
- AWS SES → Verified identity → contact.theinfrakraft@gmail.com
- Create SMTP credentials → copy host/user/pass
- Listmonk → Settings → SMTP → paste credentials
- Cost: $0.10 per 1,000 emails (~₹8)

## Import subscribers from Supabase
```sql
-- Export from Supabase SQL editor
SELECT email, created_at FROM subscribers ORDER BY created_at;
```
Save as CSV → Listmonk → Lists → Import subscribers

## Weekly newsletter workflow

### Content structure (Cloud & DevOps tips)
1. **One tip** — practical AWS/DevOps/Linux trick (3–4 sentences)
2. **One tool** — something useful from theinfrakraft-dev org repos
3. **One offer** — current InfraKraft service or tutoring slot
4. **CTA** — WhatsApp link or website link

### Example subject lines
- "The 1 AWS IAM mistake that costs startups money"
- "How to cut your deploy time from 45 min to 8 min"
- "Free K8s lab setup in 10 minutes (no cloud account needed)"

### Schedule
- Send: every Tuesday 9am
- List: InfraKraft Subscribers
- From: InfraKraft <contact.theinfrakraft@gmail.com>

## Sync new subscribers automatically (via n8n)
Trigger: New row in Supabase `subscribers`
→ POST to Listmonk API: `POST /api/subscribers`
→ Add to "InfraKraft Newsletter" list
