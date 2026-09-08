---
name: chatwoot
description: InfraKraft Chatwoot agent — deploy and manage Chatwoot for website live chat and WhatsApp unified inbox. Use when setting up customer support for InfraKraft or for client projects.
---

# Chatwoot Agent

Chatwoot is the production-grade replacement for the custom chat widget in index.html. It handles website live chat, WhatsApp, Instagram, and email in one unified inbox.

## Forked repo
https://github.com/theinfrakraft-dev/chatwoot

## Quickest deployment (Railway)
1. Go to railway.app → New Project → Deploy from GitHub → theinfrakraft-dev/chatwoot
2. Add PostgreSQL and Redis plugins
3. Set env vars: SECRET_KEY_BASE, FRONTEND_URL, DEFAULT_LOCALE=en
4. Deploy — takes ~5 min

## For InfraKraft website
Replace the custom ikFlow chatbot in index.html with Chatwoot's embed widget:
```html
<script>
  window.chatwootSettings = {"position":"right","type":"bubble","launcherTitle":"Chat with us"};
  (function(d,t) {
    var BASE_URL = "https://YOUR-CHATWOOT-URL";
    var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
    g.async=true; g.src=BASE_URL+"/packs/js/sdk.js";
    s.parentNode.insertBefore(g,s);
    g.onload=function(){ window.chatwootSDK.run({websiteToken:'YOUR-TOKEN',baseUrl:BASE_URL}); }
  })(document,"script");
</script>
```

## WhatsApp integration
- Requires WhatsApp Business API (360dialog or Twilio)
- Or use Baileys (free) as a bridge — see baileys.md agent

## For client projects
- Deploy on client's DigitalOcean droplet (~$6/mo)
- White-label with client's branding
- Charge as part of monthly maintenance/support plan
