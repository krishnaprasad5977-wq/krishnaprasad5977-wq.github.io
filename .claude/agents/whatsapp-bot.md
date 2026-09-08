---
name: whatsapp-bot
description: InfraKraft WhatsApp bot agent — build WhatsApp automation using Baileys (free, no API cost). Use when setting up WhatsApp auto-reply, order confirmations, lead follow-up, or appointment reminders for InfraKraft or clients.
---

# WhatsApp Bot Agent — Baileys

Baileys connects to WhatsApp Web directly — no paid WhatsApp Business API needed. Free for low-to-medium volume.

## Forked repo
https://github.com/theinfrakraft-dev/Baileys

## Quick start
```bash
git clone https://github.com/theinfrakraft-dev/Baileys
cd Baileys
npm install
npx ts-node Example/example.ts
# Scan the QR code with WhatsApp on your phone
```

## Basic auto-reply bot (Node.js)
```js
const { makeWASocket, DisconnectReason, useMultiFileAuthState } = require('@whiskeysockets/baileys')

async function startBot() {
  const { state, saveCreds } = await useMultiFileAuthState('auth_info')
  const sock = makeWASocket({ auth: state })

  sock.ev.on('creds.update', saveCreds)
  sock.ev.on('messages.upsert', async ({ messages }) => {
    const msg = messages[0]
    if (!msg.key.fromMe && msg.message) {
      const text = msg.message.conversation || ''
      const from = msg.key.remoteJid

      // Auto-reply logic
      if (text.toLowerCase().includes('price') || text.toLowerCase().includes('cost')) {
        await sock.sendMessage(from, { text: 'Hi! Our website starts from ₹5,000. WhatsApp us your requirements and I\'ll send a quote within 24 hours. — InfraKraft' })
      } else if (text.toLowerCase().includes('hi') || text.toLowerCase().includes('hello')) {
        await sock.sendMessage(from, { text: '👋 Hi! I\'m the InfraKraft assistant. How can I help? Reply with:\n1️⃣ Website\n2️⃣ App\n3️⃣ Cloud/DevOps\n4️⃣ Tutoring\n5️⃣ Talk to Krishna' })
      }
    }
  })
}

startBot()
```

## Connect Baileys to Flowise (AI replies)
```js
// Instead of static replies, call Flowise API
const response = await fetch('https://YOUR-FLOWISE-URL/api/v1/prediction/CHATFLOW-ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ question: text })
})
const { text: aiReply } = await response.json()
await sock.sendMessage(from, { text: aiReply })
```

## Deploy on DigitalOcean ($6/mo droplet)
```bash
# Install PM2 to keep it running
npm install -g pm2
pm2 start bot.js --name whatsapp-bot
pm2 save
pm2 startup
```

## Selling to clients
- Setup fee: ₹5,000–₹8,000
- Monthly hosting: ₹2,000 (includes your DigitalOcean cost + margin)
- Best for: restaurants (order confirmations), salons (appointment reminders), shops (catalogue requests)

## Limitations
- Baileys uses WhatsApp Web — phone must stay connected
- For high volume (1000+ messages/day), upgrade to official WhatsApp Business API via 360dialog (~$5/month)
