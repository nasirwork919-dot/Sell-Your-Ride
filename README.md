# CarLead — Lead Collection + WhatsApp Delivery (not a marketplace)

This app collects car-selling leads and delivers a structured notification to an admin WhatsApp number.

- **Frontend**: Vite + React + TypeScript + Tailwind + shadcn/ui
- **Backend**: Express API (in `src/server`) with server-side validation + rate limiting + honeypot
- **Data**: Prisma schema ready for PostgreSQL, with **in-memory fallback** if `DATABASE_URL` is not set
- **WhatsApp**: Meta WhatsApp Cloud API (preferred) with optional Twilio adapter
- **No public admin**: there is no endpoint to list or view submissions

## 1) Environment setup

1. Copy env template:
   - Create a `.env` file from `.env.example`.

2. Required variables:
   - `ADMIN_WHATSAPP_PHONE` (E.164, e.g. `+15551234567`)

3. WhatsApp Cloud API (Meta) variables:
   - `WHATSAPP_PROVIDER=meta`
   - `WHATSAPP_TOKEN=...`
   - `WHATSAPP_PHONE_NUMBER_ID=...`

4. Database (optional but recommended):
   - `DATABASE_URL=postgresql://...`

If you **do not** set `DATABASE_URL`, submissions are stored in memory for the runtime session.

## 2) Prisma (PostgreSQL)

- Prisma schema: `prisma/schema.prisma`

Migration steps (typical Prisma flow):
1. Ensure `DATABASE_URL` points to your Postgres.
2. Generate client & run migrations using Prisma.

> In Dyad, use the UI rebuild/restart workflow after changing dependencies/config.

## 3) WhatsApp Cloud API (Meta) steps

High-level steps:
1. Create a Meta app and enable **WhatsApp**.
2. Add a phone number in WhatsApp Manager.
3. Get:
   - Permanent access token (or system user token)
   - `PHONE_NUMBER_ID`
4. Add these to `.env`.

The server sends a **text message** using:
`POST https://graph.facebook.com/v20.0/{PHONE_NUMBER_ID}/messages`

## 4) Local dev behavior

- The landing page is a single page at `/` with:
  - Sticky header + nav
  - Hero
  - Lead form
  - How it works
  - Architecture flow strip
  - Trust/security
  - Testimonials
  - CTA + footer

- Form submission:
  - client validation (react-hook-form + zod)
  - server validation (zod)
  - honeypot field
  - rate limiting
  - save lead
  - send WhatsApp message to admin

If WhatsApp fails:
- lead still saved
- status becomes `whatsapp_failed`
- API returns success to user

## 5) Testing (minimal examples)

- Validation tests: `src/server/tests/validation.test.ts`
- Template tests: `src/server/tests/template.test.ts`

## 6) Deployment notes

### Option A: Vercel
This repo is built as a Vite SPA + separate Express server code.
For Vercel you typically want serverless functions; for this codebase, prefer a VPS/container.

### Option B: VPS / Docker / Render / Railway
- Run the Express server (API) and serve the Vite build.
- Set environment variables securely.
- Ensure outbound HTTPS access to Meta/Twilio.

**Important**: Do not expose any admin endpoint that lists leads.

## Security checklist
- Rate limiting enabled
- Honeypot enabled
- Server-side validation enabled
- Helmet enabled
- No endpoint to retrieve leads
