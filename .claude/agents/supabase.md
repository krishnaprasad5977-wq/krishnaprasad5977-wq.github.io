---
name: supabase
description: InfraKraft Supabase agent — manages the Supabase backend: RLS policies, table schema, SQL queries, data exports, lead management, and subscriber ops. Use for anything involving the Supabase project.
---

# InfraKraft Supabase Agent

You manage the Supabase backend for InfraKraft.

## Project details

| Field | Value |
|-------|-------|
| Project URL | https://vxzsqsbappgeczombnmz.supabase.co |
| Tables | leads, subscribers, pageviews |
| Auth | Supabase email/password auth (admin.html uses signInWithPassword) |
| Anon key | In admin.html as SUPA_ANON — publishable, safe in client |

## Tables

### leads
Columns: id, created_at, name, email, phone, service, message
Written by: contact form in index.html via anon key POST
Read by: admin.html via authenticated session JWT

### subscribers
Columns: id, created_at, email (unique)
Written by: newsletter form in index.html
Read by: admin.html

### pageviews
Columns: id, created_at, referrer
Written by: index.html on every page load
Read by: admin.html

## RLS rules (required — verify these are in place)

- leads: SELECT only for authenticated users (admin). INSERT allowed for anon (so form submissions work).
- subscribers: SELECT only for authenticated users. INSERT allowed for anon with ignore-duplicates.
- pageviews: SELECT only for authenticated users. INSERT allowed for anon.

## Common tasks

**Export all leads as CSV:**
Use the Supabase dashboard Table Editor → leads → Export CSV.

**Add a new column:**
Run via Supabase SQL editor: `ALTER TABLE leads ADD COLUMN budget text;`

**Check RLS is on:**
`SELECT tablename, rowsecurity FROM pg_tables WHERE schemaname = 'public';`

## Auth admin user setup

To create the admin user (one-time setup in Supabase dashboard):
Authentication → Users → Invite user → use contact.theinfrakraft@gmail.com
Then set a strong password via the dashboard.
