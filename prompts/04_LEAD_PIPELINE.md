# Prompt 04 — Database-Backed Lead Capture

Implement the inquiry pipeline based on `/docs/TECHNICAL_SPEC.md` and `/docs/DATABASE_SCHEMA.md`.

Before implementation:
- Inspect existing database, ORM and hosting support.
- Reuse existing infrastructure if suitable.
- If a new paid database or email provider is needed, stop and request owner approval with options and cost implications.
- Never print or expose secret values.

Implement:
1. Versioned database migration for inquiries and notification attempts.
2. Server-side validated inquiry endpoint/action.
3. Client-side validation and accessible error states.
4. Honeypot and suitable rate limiting/spam controls.
5. Database persistence before success response.
6. Email notification after persistence.
7. Notification status tracking and recoverable failure behavior.
8. Public reference code.
9. Localized success and error messages.
10. Tests for success, invalid input, DB failure, email failure, duplicate requests and spam controls.

Security:
- No public read API for leads.
- No secrets in client bundle.
- Parameterized queries/ORM.
- Do not send personal information to analytics.
- Avoid logging full project descriptions or credentials.

Important:
A saved inquiry remains saved if email delivery fails. Return success only when persistence succeeds, and log notification failure for operational recovery.

Document required environment variables in `.env.example` using placeholders. Do not create production secrets or provision paid infrastructure without approval.
