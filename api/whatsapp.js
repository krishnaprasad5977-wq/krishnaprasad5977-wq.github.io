// InfraKraft WhatsApp webhook — Meta Cloud API + Claude AI fallback
// Env vars needed (Vercel dashboard):
//   WA_VERIFY_TOKEN   — any string you choose during Meta app setup
//   WA_ACCESS_TOKEN   — from Meta developer portal (System User token)
//   WA_PHONE_ID       — WhatsApp Phone Number ID from Meta portal
//   ANTHROPIC_API_KEY — claude-haiku-4-5 for fast, cheap AI replies

const KEYWORD_RULES = [
  {
    match: /pric|cost|rate|charges?|₹|rupee/i,
    reply: `Here's a quick overview 👇

*Websites*
• Starter — ₹5,000 (3 pages, 5–7 days)
• Business — ₹15,000 (up to 8 pages, e-commerce ready)
• Monthly Retainer — ₹8,000/mo

*Cloud & DevOps*
• AWS Setup — from ₹8,000
• CI/CD Pipeline — from ₹6,000
• Cloud Security Audit — ₹4,999

*AI & Automation*
• WhatsApp / Website Bot — from ₹8,999

Full pricing 👉 https://theinfrakraft.vercel.app/pricing.html

Want a free 30-min scoping call? https://cal.com/infrakraft/30min`,
  },
  {
    match: /aws|cloud|ec2|s3|terraform|devops|infra/i,
    reply: `I'm AWS-certified (Solutions Architect) and work with:

• EC2, ECS/Fargate, RDS, S3, CloudFront
• Terraform for infrastructure-as-code
• IAM, VPC, security groups
• CI/CD via GitHub Actions or CodePipeline
• Monitoring with CloudWatch

Typical cloud setup: *₹8,000–₹20,000* depending on scope.

Let's talk specifics — book a free call 👉 https://cal.com/infrakraft/30min`,
  },
  {
    match: /ci.?cd|pipeline|deploy|github.action|codepipeline/i,
    reply: `CI/CD is one of my specialties 🚀

A typical setup covers:
• Automated builds + tests on every push
• Staging → production promotion
• Docker + container deployments
• Slack/email notifications on failures

Most pipelines: *₹6,000–₹14,000*, delivered in 3–5 days.

One of my clients went from 45-min manual deploys to 8-min automated ones.

Free scoping call 👉 https://cal.com/infrakraft/30min`,
  },
  {
    match: /whatsapp.?bot|chatbot|ai.?bot|automation|bot/i,
    reply: `WhatsApp AI bots are one of my favourite builds 🤖

What I set up:
• Instant replies to pricing, booking, and FAQ queries
• Automated appointment flow
• Escalation to you for complex requests
• Works 24/7 — even at 11pm when someone sees your ad

Starting from *₹8,999*. Most clients see ROI within the first month.

See a real case study 👉 https://theinfrakraft.vercel.app/blog.html

Want to see one in action? Reply "demo" and I'll show you 👇`,
  },
  {
    match: /tutor|mentor|learn|course|aws.?certif|cloud.?certif/i,
    reply: `I offer 1-on-1 tutoring for:

• *AWS Cloud Practitioner* — ₹3,000 (4 sessions)
• *AWS Solutions Architect Associate* — ₹6,500 (8 sessions)
• *DevOps / CI-CD Fundamentals* — ₹5,000 (6 sessions)
• *Custom mentorship* — ₹500/hr (on-demand)

Sessions are recorded on request. WhatsApp support between sessions included.

Start with a free 30-min intro call 👉 https://cal.com/infrakraft/30min`,
  },
  {
    match: /website|web.?app|ecommerce|e-commerce|shop|store/i,
    reply: `I build fast, mobile-first websites for Indian businesses 🇮🇳

• Starter (3 pages) — *₹5,000*, 5–7 days
• Business (up to 8 pages, e-commerce) — *₹15,000*, 10–14 days
• Monthly Retainer — *₹8,000/mo* for ongoing updates

Every site includes:
✓ Mobile-friendly & fast
✓ Contact form + WhatsApp button
✓ Google Maps & SSL
✓ Full credentials handover — you own everything

Full pricing 👉 https://theinfrakraft.vercel.app/pricing.html`,
  },
  {
    match: /demo|example|sample|portfolio|work|project/i,
    reply: `Here's some of my recent work 👇

🥐 *Local Bakery, Bangalore* — website + SEO → first Google enquiry in 2 weeks
🏥 *Healthcare Startup* — CI/CD on AWS → deploys cut from 45 min to 8 min
🏠 *Home Services, Chennai* — WhatsApp AI bot → 20+ bookings in month one

See details 👉 https://theinfrakraft.vercel.app/#work

Want to discuss your project? Book a free call 👉 https://cal.com/infrakraft/30min`,
  },
];

const SYSTEM_PROMPT = `You are the AI assistant for InfraKraft, a freelance tech service run by Krishna Prasad — an AWS-certified engineer based in Bangalore and Chennai.

Services and pricing:
- Websites: Starter ₹5,000 (3 pages, 5–7 days), Business ₹15,000 (up to 8 pages), Monthly Retainer ₹8,000/mo
- AWS Cloud Setup: from ₹8,000 | CI/CD Pipeline: from ₹6,000 | Cloud Security Audit: ₹4,999
- WhatsApp/AI Bot: from ₹8,999 | Business Automation: ₹15,000–₹35,000
- Tutoring: Cloud Practitioner ₹3,000 (4 sessions), Solutions Architect ₹6,500 (8 sessions), DevOps ₹5,000 (6 sessions), ad-hoc ₹500/hr
- Payment: 50% advance, 50% on delivery. Free 30-min scoping call before any project.

Contact: WhatsApp this number | cal.com/infrakraft/30min | contact.theinfrakraft@gmail.com
Site: https://theinfrakraft.vercel.app

Tone: friendly, direct, helpful. Keep replies concise — under 120 words unless pricing details genuinely require more. Always end with a clear CTA (book a call, visit the site, or ask a follow-up). Use WhatsApp-friendly formatting: *bold* for emphasis, bullet points. Never say you are an AI.`;

async function callClaude(userMessage) {
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 300,
      system: SYSTEM_PROMPT,
      messages: [{ role: 'user', content: userMessage }],
    }),
  });
  const data = await res.json();
  return data.content?.[0]?.text || "Thanks for reaching out! I'll get back to you shortly. Or book a call directly 👉 https://cal.com/infrakraft/30min";
}

async function sendReply(phoneId, accessToken, to, text) {
  await fetch(`https://graph.facebook.com/v20.0/${phoneId}/messages`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      messaging_product: 'whatsapp',
      to,
      type: 'text',
      text: { body: text, preview_url: false },
    }),
  });
}

export default async function handler(req, res) {
  const { WA_VERIFY_TOKEN, WA_ACCESS_TOKEN, WA_PHONE_ID } = process.env;

  // GET — webhook verification from Meta
  if (req.method === 'GET') {
    const { 'hub.mode': mode, 'hub.verify_token': token, 'hub.challenge': challenge } = req.query;
    if (mode === 'subscribe' && token === WA_VERIFY_TOKEN) {
      return res.status(200).send(challenge);
    }
    return res.status(403).end();
  }

  // POST — incoming messages
  if (req.method === 'POST') {
    const body = req.body;
    try {
      const entry = body?.entry?.[0]?.changes?.[0]?.value;
      const msg = entry?.messages?.[0];
      if (!msg || msg.type !== 'text') return res.status(200).end();

      const from = msg.from;
      const text = msg.text.body.trim();

      // Mark as read
      await fetch(`https://graph.facebook.com/v20.0/${WA_PHONE_ID}/messages`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${WA_ACCESS_TOKEN}` },
        body: JSON.stringify({ messaging_product: 'whatsapp', status: 'read', message_id: msg.id }),
      });

      // Try keyword match first
      const matched = KEYWORD_RULES.find(r => r.match.test(text));
      const reply = matched ? matched.reply : await callClaude(text);

      await sendReply(WA_PHONE_ID, WA_ACCESS_TOKEN, from, reply);
    } catch (e) {
      console.error('WhatsApp webhook error:', e);
    }
    return res.status(200).end();
  }

  res.status(405).end();
}
