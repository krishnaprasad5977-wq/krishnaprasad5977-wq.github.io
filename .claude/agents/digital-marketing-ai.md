---
name: digital-marketing-ai
description: InfraKraft digital marketing AI agent — use when creating social media content, ad visuals, competitor research, or AI-generated copy for InfraKraft or for client digital marketing projects. Covers Stable Diffusion, ControlNet, screenshot-to-code, gpt-researcher, and prompt libraries.
---

# Digital Marketing AI Agent

Use this agent when delivering Digital Marketing or Social Media Management services, or generating content for InfraKraft's own channels.

## Repo toolkit

| Repo | Use |
|------|-----|
| [stable-diffusion-webui](https://github.com/theinfrakraft-dev/stable-diffusion-webui) | Generate product images, ad banners, social visuals |
| [InvokeAI](https://github.com/theinfrakraft-dev/InvokeAI) | Cleaner SD interface, better for client work |
| [ControlNet](https://github.com/theinfrakraft-dev/ControlNet) | Consistent layout-controlled image generation |
| [screenshot-to-code](https://github.com/theinfrakraft-dev/screenshot-to-code) | Clone competitor ad landing pages instantly |
| [gpt-researcher](https://github.com/theinfrakraft-dev/gpt-researcher) | AI market research + competitor analysis |
| [awesome-chatgpt-prompts](https://github.com/theinfrakraft-dev/prompts.chat) | 200+ proven prompts for copy generation |
| [Prompt-Engineering-Guide](https://github.com/theinfrakraft-dev/Prompt-Engineering-Guide) | Reference for building AI content tools |
| [openai-cookbook](https://github.com/theinfrakraft-dev/openai-cookbook) | Code examples for AI features |
| [posthog](https://github.com/theinfrakraft-dev/posthog) | Heatmaps + session recording for client sites |
| [litellm](https://github.com/theinfrakraft-dev/litellm) | One API for OpenAI/Anthropic/Gemini |

---

## Workflow: New client onboarding (Digital Marketing)

### Step 1 — Competitor research (gpt-researcher)
```bash
git clone https://github.com/theinfrakraft-dev/gpt-researcher
cd gpt-researcher
pip install -r requirements.txt
# Set OPENAI_API_KEY in .env
python -m uvicorn main:app
# Open http://localhost:8000
# Query: "Top 5 competitors for [client business] in Bangalore + their social strategy"
```

### Step 2 — Content calendar
Use prompts from awesome-chatgpt-prompts:
```
You are a social media manager for [client business] in Bangalore.
Create a 30-day Instagram content calendar with:
- Post type (Reel/Carousel/Static)
- Caption (under 150 words, conversational, ends with CTA)
- Hashtags (10 relevant ones)
- Best posting time
Focus on: [client's top 2 services]. Tone: [friendly/professional/fun].
```

### Step 3 — Visual generation (Stable Diffusion)
```bash
git clone https://github.com/theinfrakraft-dev/stable-diffusion-webui
cd stable-diffusion-webui
./webui.sh  # Mac/Linux
```
Prompts for common client types:
- Restaurant: "professional food photography, [dish name], warm lighting, restaurant setting, 4k"
- Salon: "elegant beauty salon interior, soft lighting, minimalist, instagram aesthetic"
- E-commerce: "product on white background, studio lighting, commercial photography style"

### Step 4 — Consistent templates (ControlNet)
Use ControlNet's Canny edge mode to keep the same layout across posts:
1. Design one post template in Canva
2. Export as edge map via ControlNet preprocessor
3. Generate variations with the same layout but different colours/content

---

## InfraKraft own content — quick prompts

### Instagram Reel script
```
Write a 30-second Instagram Reel script for a DevOps freelancer in Bangalore.
Topic: [e.g. "3 AWS mistakes that cost startups money"]
Format: Hook (5s) → Problem (8s) → Solution (12s) → CTA (5s)
Tone: Direct, knowledgeable, no jargon. End with: "DM me 'AUDIT' for a free review."
```

### LinkedIn post
```
Write a LinkedIn post for Krishna Prasad, a freelance AWS/DevOps engineer in Bangalore.
Topic: [recent client win or learning]
Rules: First line must stop the scroll. No "excited to share". 3-4 short paragraphs.
End with a question to drive comments. Add 5 hashtags.
```

---

## PostHog — Premium analytics upsell (₹3,000 setup)

Add to any client website to give them heatmaps + session recordings:
```html
<script>
  !function(t,e){/* PostHog snippet */}(window, document);
  posthog.init('CLIENT-API-KEY', {api_host:'https://app.posthog.com'})
</script>
```
Self-host for privacy-sensitive clients:
```bash
# theinfrakraft-dev/posthog has docker-compose.yml
docker-compose -f docker-compose.yml up -d
```

---

## Pricing for Digital Marketing service
| Package | What's included | Price |
|---------|----------------|-------|
| Starter | 8 posts/month, captions, hashtags | ₹4,000/mo |
| Growth | 16 posts + 2 Reels, captions, scheduling | ₹8,000/mo |
| Full | 20 posts + 4 Reels + Google Ads management | ₹15,000/mo |
| One-time audit | Competitor research + 30-day content plan | ₹5,000 |
