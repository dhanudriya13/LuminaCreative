# Prompt 01 — Repository Audit

Read `/docs/PRD.md`, `/docs/TECHNICAL_SPEC.md`, `/docs/UI_UX_SPEC.md`, `/docs/DATABASE_SCHEMA.md` and `/docs/SEO_ANALYTICS_QA.md`.

Do not modify files yet.

Audit the existing repository and report:

1. Framework, versions, runtime and package manager.
2. Route structure and rendering strategy.
3. Styling system, fonts, design tokens and component patterns.
4. Current pages, forms and integrations.
5. Existing database/ORM/migrations, if any.
6. Hosting, domain, build and deployment process.
7. Environment variable names (never reveal values).
8. Analytics, SEO, sitemap and robots setup.
9. Existing logo, brand assets, images and content.
10. Existing tests, lint, type-check and build commands.

Then provide:
- Current architecture diagram in Mermaid.
- Requirements-to-existing-code mapping.
- Gaps against the PRD.
- Recommended minimal implementation plan.
- Any decision requiring owner approval.
- Risks and migration concerns.

Preserve the existing stack. Do not add dependencies, create a database, change deployment or edit source files during this audit.
