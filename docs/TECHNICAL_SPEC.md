# Technical Specification

## 1. Purpose

Define the technical implementation for the bilingual, conversion-focused Lumina Creative website at `https://luminacreative.tech`.

## 2. Approved technical decisions

| Area | Decision |
|---|---|
| Framework and language | Keep existing stack; discover during repository audit |
| Styling | Keep existing styling system unless demonstrably unsuitable |
| Content | Static, version-controlled content |
| CMS | None in V1 |
| Languages | English (`en`) and Indonesian (`id`) |
| Lead storage | Relational database preferred |
| Notifications | Email notification after successful persistence |
| CRM | Not included in V1 |
| Hosting | Preserve current hosting/deployment |
| Domain | Preserve `luminacreative.tech` |

## 3. Repository audit requirements

Before coding, inspect and document:

- Framework and exact version.
- Runtime and package manager.
- Existing routes and rendering mode.
- Styling framework and design tokens.
- Existing component conventions.
- Existing forms and server/API capabilities.
- Database or ORM already installed, if any.
- Hosting platform and build/deploy commands.
- Environment variable conventions.
- Existing analytics, SEO and sitemap setup.
- Existing brand assets, fonts and logo files.
- Current contact details and social links.
- Existing tests and lint/type-check commands.

Do not expose secrets in audit output. Do not print `.env` values. Record variable names only.

## 4. Architecture principles

1. Preserve existing architecture and working functionality.
2. Prefer server-side form processing where supported.
3. Separate static content from presentation.
4. Centralize site configuration, contact details, social links and locale settings.
5. Reuse components and design tokens.
6. Keep secrets server-only.
7. Persist the inquiry before attempting email notification.
8. Make email failure observable and retryable; never report a lead as lost if database persistence succeeded.
9. Avoid adding dependencies without a clear requirement.
10. Keep the initial release small and maintainable.

## 5. Suggested logical architecture

Adapt names and implementation to the existing framework:

- Presentation layer: localized pages, layouts, navigation, reusable sections.
- Content layer: static typed content objects or Markdown/MDX files.
- Lead API/action: validation, spam controls, database persistence, notification.
- Data layer: inquiry repository/model and migration.
- Notification adapter: server-side email provider integration.
- Analytics adapter: consent-aware event tracking.
- Configuration: environment validation and centralized public site configuration.

## 6. Routing and localization

Support English and Indonesian consistently.

Preferred route shape, subject to existing router conventions:

- `/en/` and `/id/`
- `/en/services/` and `/id/layanan/` OR retain identical slugs with translated content if the current router makes this simpler.
- Localized service detail routes.
- Localized work/case-study routes.
- Localized about, insights and contact pages.

Choose one canonical route strategy and apply it consistently. Do not create duplicate pages with conflicting canonical tags.

Requirements:

- Visible language switcher.
- Switcher preserves the equivalent page where a translation exists.
- If a translated page does not exist, send the user to the localized homepage or a clearly defined fallback.
- Correct `<html lang>` value.
- `hreflang` annotations for equivalent pages.
- Localized metadata and form labels.
- Persist language preference only if appropriate and privacy-safe; do not force a locale based solely on IP.

## 7. Static content model

Use repository-managed content. Suggested collections:

### Services
- `id`
- `slug`
- `title.en`
- `title.id`
- `summary.en`
- `summary.id`
- `description.en`
- `description.id`
- `deliverables.en[]`
- `deliverables.id[]`
- `process.en[]`
- `process.id[]`
- `faq.en[]`
- `faq.id[]`
- `featuredProjectIds[]`
- `seo.title.en/id`
- `seo.description.en/id`
- `published`

### Projects
- `id`
- `slug`
- `title.en/id`
- `summary.en/id`
- `clientName` (nullable)
- `classification`: `client | internal | research | demo`
- `services[]`
- `challenge.en/id`
- `approach.en/id`
- `solution.en/id`
- `deliverables.en/id[]`
- `technology[]`
- `outcomes.en/id[]`
- `outcomeEvidence` (optional source/measurement note)
- `coverImage`
- `gallery[]`
- `published`
- `featured`
- `displayOrder`

### Articles
- `id`
- `slug`
- `title.en/id`
- `excerpt.en/id`
- `body.en/id`
- `author`
- `publishedAt`
- `category`
- `coverImage`
- `seo`

### Team
- `id`
- `name`
- `role.en/id`
- `bio.en/id`
- `photo`
- `socialLinks`
- `displayOrder`
- `published`

### Testimonials
- `id`
- `person`
- `roleOrCompany`
- `quote.en/id`
- `permissionConfirmed`
- `published`

Never publish unverified claims, client names, logos, quotes, outcome metrics or project screenshots without permission.

## 8. Lead submission flow

1. Visitor submits localized project inquiry form.
2. Client validates required fields for usability.
3. Server validates and normalizes all values independently.
4. Apply rate limiting and spam controls.
5. Insert inquiry into database.
6. If persistence fails, return a clear error and do not claim success.
7. If persistence succeeds, enqueue or attempt email notification.
8. If email fails, retain the lead and log notification failure for retry/operations.
9. Return a success response with a reference ID, not internal database identifiers.
10. Track successful submission only after confirmed persistence.

Do not send the visitor's full project description to analytics.

## 9. API contract

Adapt endpoint naming to the existing stack. Suggested endpoint: `POST /api/inquiries`.

Request fields:

```json
{
  "name": "Required string",
  "email": "Required valid email",
  "company": "Optional string",
  "country": "Required country code or normalized name",
  "locale": "en or id",
  "services": ["web-development"],
  "budget": "optional enum",
  "description": "Required string",
  "preferredContact": "optional enum",
  "privacyConsent": true,
  "website": ""
}
```

`website` is a honeypot field and should remain empty for normal users.

Success:

```json
{
  "success": true,
  "reference": "Public inquiry reference"
}
```

Validation error:

```json
{
  "success": false,
  "error": "validation_error",
  "fieldErrors": {
    "email": "Please enter a valid email address."
  }
}
```

Server error:

```json
{
  "success": false,
  "error": "submission_failed",
  "message": "We could not submit your inquiry. Please try again or contact us directly."
}
```

Do not expose stack traces, SQL errors, provider credentials or internal IDs.

## 10. Environment configuration

Determine provider choices during audit. Use server-only environment variables such as:

- `DATABASE_URL`
- `EMAIL_PROVIDER_API_KEY`
- `INQUIRY_NOTIFICATION_TO`
- `INQUIRY_NOTIFICATION_FROM`
- `PUBLIC_SITE_URL`
- `PUBLIC_WHATSAPP_NUMBER`
- `PUBLIC_ANALYTICS_ID` (only if applicable)
- `PUBLIC_TURNSTILE_SITE_KEY` (if using Turnstile)
- `TURNSTILE_SECRET_KEY`

Names are suggestions; follow repository conventions. Never commit real secrets. Provide `.env.example` with placeholders only.

## 11. Email notification

Send a concise notification to the configured Lumina inbox containing:

- Public reference.
- Name.
- Email.
- Company (if provided).
- Country.
- Selected services.
- Budget range (if provided).
- Preferred contact method.
- Locale.
- Submission timestamp.
- Link to the internal lead view only if one exists and is access-controlled.

Do not create an unauthenticated public lead dashboard in V1.

Email failure must not undo a successful database insert. Log notification status and provide an operational retry mechanism or documented manual recovery.

## 12. Security

- Server-side validation and output encoding.
- Parameterized queries or ORM.
- Rate limit by IP/session using a suitable server-side mechanism.
- Honeypot field; add CAPTCHA/Turnstile only if needed.
- Request size limits.
- CSRF protection where applicable to the framework/session model.
- Restrictive CORS; same-origin by default.
- HTTPS.
- Secure headers.
- No secrets in client bundles or logs.
- Minimize personal data.
- Restrict database access to server-side application code.
- Define retention and deletion procedure.
- Do not store payment or sensitive personal data.

## 13. Performance

- Optimize image formats and dimensions.
- Use responsive images.
- Lazy-load below-the-fold images.
- Avoid loading large animation libraries for simple transitions.
- Minimize third-party scripts.
- Avoid layout shift from images/fonts.
- Prefer static rendering for public content where the existing stack supports it.

Targets: Lighthouse performance 90+ on representative pages where practical; no critical Core Web Vitals regressions. Treat scores as test outcomes, not guarantees.

## 14. Deployment

- Preserve current hosting and deployment workflow.
- Configure production environment variables.
- Apply database migrations safely.
- Verify domain, HTTPS, redirects and canonical URLs.
- Verify email sender/domain authentication (SPF/DKIM/DMARC as supported by provider).
- Configure backups and retention for inquiry data.
- Test production form end-to-end.
- Document rollback procedure.

## 15. Technical acceptance criteria

- Existing stack retained unless owner approves change.
- All routes render correctly in both languages.
- Static content is easy for developers to update.
- Inquiry is stored before success is shown.
- Email notification works or failure is logged and recoverable.
- No secrets exposed.
- No critical security, accessibility or runtime errors.
- Build, lint, type-check and tests pass.
- Deployment and rollback instructions documented.
