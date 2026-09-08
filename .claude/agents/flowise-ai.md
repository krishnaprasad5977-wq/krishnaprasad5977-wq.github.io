---
name: flowise-ai
description: InfraKraft Flowise agent — build and deploy AI chatbots and RAG pipelines for clients using Flowise. Use when building the AI Chatbot, WhatsApp AI Assistant, or AI Business Automation service for a client.
---

# Flowise AI Agent

Flowise is the core tool for building AI chatbots and automation pipelines for clients. Drag-and-drop, no code required.

## Forked repo
https://github.com/theinfrakraft-dev/Flowise

## Quick deploy (local)
```bash
npx flowise start
# Access at http://localhost:3000
```

## Deploy for client (Railway)
1. railway.app → New → Deploy from GitHub → theinfrakraft-dev/Flowise
2. Set: PORT=3000, FLOWISE_USERNAME=admin, FLOWISE_PASSWORD=<strong-password>
3. Share the Railway URL with the client

## Service: AI Chatbot for Client Website (₹8,999+)

### Build steps
1. Flowise → New Chatflow
2. Add nodes: **ChatOpenAI** → **ConversationalRetrievalQAChain** → **Upstash Redis** (memory)
3. Add **PDFLoader** or **TextFile** with client's FAQ/product info
4. Add **OpenAI Embeddings** + **Supabase Vector Store**
5. Connect to client's website via Flowise embed script

### Embed on client website
```html
<script type="module">
  import Chatbot from "https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js"
  Chatbot.init({
    chatflowid: "YOUR-CHATFLOW-ID",
    apiHost: "https://YOUR-FLOWISE-URL",
    theme: { chatWindow: { title: "Chat with us" } }
  })
</script>
```

## Service: WhatsApp AI Assistant (₹8,999+)

### Stack
- Flowise → build the AI brain (RAG + OpenAI)
- n8n → handle WhatsApp messages via Baileys/Twilio
- Flow: WhatsApp message → n8n webhook → Flowise API → reply

### Flowise API call from n8n
```
POST https://YOUR-FLOWISE-URL/api/v1/prediction/{chatflowId}
Body: { "question": "{{$json.message}}" }
```

## Service: Document Q&A for Businesses
- Upload client's product catalogue, policy docs, price list as PDFs
- Build a RAG chatflow on top
- Client staff can ask questions in plain English
- Price: ₹6,000 setup + ₹2,000/month hosting

## LLM options (in order of cost)
1. OpenAI GPT-4o-mini — best price/quality for most clients
2. Anthropic Claude Haiku — good for longer documents
3. Ollama (local) — free, for privacy-sensitive clients (healthcare)
