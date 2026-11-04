# Prompt 05 — SEO, Analytics, QA and Release

Implement `/docs/SEO_ANALYTICS_QA.md`.

SEO:
- Titles and descriptions for every locale and route.
- Canonical URLs.
- Open Graph metadata.
- XML sitemap and robots.txt.
- hreflang for real translation pairs.
- Structured data only for verified information.
- Redirects for legacy routes where needed.

Analytics:
- Implement specified events using existing provider if configured.
- Otherwise propose a privacy-conscious option for approval.
- Never send names, emails, phone numbers or project descriptions.
- Record form success only after server persistence succeeds.
- Preserve UTM attribution where appropriate.

QA:
- Functional tests.
- Bilingual checks.
- Responsive checks at 360, 390, 768, 1024 and 1440px.
- Keyboard and accessibility checks.
- Performance checks.
- Security checks.
- Production form end-to-end test.

Release:
- Verify environment variables, migrations, email sender, HTTPS, redirects, sitemap and analytics.
- Document deployment and rollback steps.
- Do not deploy to production without explicit owner approval if the agent has deployment access.
- Report test results, unresolved defects, manual steps and launch readiness.
