---
name: n8n-automation
description: InfraKraft n8n agent — build and sell automation workflows using n8n. Covers WhatsApp auto-reply, lead nurture sequences, invoice reminders, CRM sync, and social media scheduling. Use when building AI automation for clients or for InfraKraft internal ops.
---

# n8n Automation Agent

n8n is InfraKraft's core automation platform. Self-host it, build workflows for your own ops, and sell the same workflows to clients as a service.

## Forked repo
https://github.com/theinfrakraft-dev/n8n

## Quick deploy (Docker)
```bash
docker run -d --name n8n -p 5678:5678 \
  -v ~/.n8n:/home/node/.n8n \
  n8nio/n8n
```
Access at http://localhost:5678

## Deploy on Railway (free tier)
railway.app → New → Deploy from GitHub → theinfrakraft-dev/n8n

## Key workflows to build for InfraKraft

### 1. Lead auto-follow-up
Trigger: New row in Supabase `leads` table
→ Wait 30 min → Send WhatsApp message via Baileys or Twilio
→ If no reply in 24h → Send follow-up email via Gmail

### 2. Newsletter automation
Trigger: New row in Supabase `subscribers`
→ Send welcome email via Gmail/SES
→ Add to Listmonk subscriber list

### 3. Social media scheduler
Trigger: Schedule (Mon/Wed/Fri 9am)
→ Generate post copy via OpenAI node
→ Post to Instagram via Facebook Graph API

### 4. Invoice reminder
Trigger: Schedule (every Monday)
→ Check Invoice Ninja for overdue invoices
→ Send WhatsApp reminder to client

### 5. Google Analytics weekly report
Trigger: Schedule (every Monday 8am)
→ Pull GA4 data via HTTP Request
→ Format summary → Send to WhatsApp

## Selling automation to clients
- Build the workflow once, charge ₹5,000–₹15,000 setup fee
- Charge ₹2,000/month hosting + maintenance
- Most valuable for: WhatsApp auto-reply, booking confirmations, lead follow-up
