# SEO, Analytics, Testing and Launch Specification

## 1. SEO

For every indexable route:
- Unique title and meta description per locale.
- Canonical URL.
- Open Graph title, description and image.
- Correct locale metadata.
- Semantic headings.
- Descriptive internal links.
- Meaningful image alt text.
- Breadcrumbs where appropriate.

Technical:
- XML sitemap with canonical URLs only.
- robots.txt.
- 301 redirects for changed legacy URLs.
- Noindex for thank-you/internal utility pages where appropriate.
- Structured data only when content supports it.
- Organization schema with verified business details.
- Article schema for published articles.
- BreadcrumbList where implemented.
- hreflang for actual translated page pairs.

Do not invent a physical address, opening hours, ratings or business details for structured data.

## 2. Analytics

Use the existing analytics provider if one is configured. Otherwise recommend a privacy-conscious option compatible with the project and obtain approval.

Events:
- `page_view`
- `language_switch`
- `service_view`
- `portfolio_view`
- `primary_cta_click`
- `secondary_cta_click`
- `whatsapp_click`
- `contact_form_start`
- `contact_form_submit`
- `contact_form_success`
- `contact_form_error`

Useful event properties:
- locale
- page path
- service slug
- project slug
- CTA identifier
- UTM source/medium/campaign

Never send name, email, phone number, project description or other personal information to analytics.

Track form success only after server persistence succeeds.

## 3. Conversion reporting

Review weekly:
- Sessions by source and locale.
- Service page views.
- Portfolio detail views.
- CTA click rate.
- Form start-to-submit rate.
- Qualified inquiries.
- Discovery calls.
- Proposals.
- Closed deals.
- Lead source and service requested.

Do not optimize for traffic alone. Evaluate lead quality and sales outcomes.

## 4. QA test matrix

### Functional
- Navigation links work.
- Service links work.
- Portfolio filters work.
- Case-study routes render.
- Language switcher works.
- Contact form validation works.
- Database persistence works.
- Email notification works.
- Email failure does not lose inquiry.
- WhatsApp opens correct destination.
- 404 page works.

### Localization
- All navigation and CTA labels translated.
- Form labels and errors translated.
- Page metadata localized.
- Correct `lang` attribute.
- Correct hreflang pairs.
- No overflow in Indonesian.
- No broken locale switching.

### Responsive
Test at minimum:
- 360px mobile.
- 390px mobile.
- 768px tablet.
- 1024px laptop.
- 1440px desktop.

### Accessibility
- Keyboard-only navigation.
- Focus visibility.
- Screen-reader labels.
- Form error association.
- Contrast.
- Heading order.
- Reduced motion.
- Touch target sizes.

### Performance
- Optimized image sizes.
- No unnecessary third-party scripts.
- No large layout shifts.
- No blocking animation.
- Test representative pages on mobile and desktop.

### Security
- No secrets in client bundle.
- Server-side validation.
- Rate limiting/spam protection.
- No public lead read endpoint.
- No sensitive data in analytics.
- Safe error messages.
- HTTPS and secure headers.

## 5. Launch checklist

- [ ] Production environment variables configured.
- [ ] Database migration applied.
- [ ] Database backup/recovery approach documented.
- [ ] Email sender verified.
- [ ] SPF/DKIM/DMARC checked where supported.
- [ ] Contact form tested on production.
- [ ] Notification email received.
- [ ] Email failure path tested.
- [ ] Domain and HTTPS verified.
- [ ] Redirects verified.
- [ ] Sitemap and robots.txt verified.
- [ ] Canonical and hreflang checked.
- [ ] Analytics events verified.
- [ ] Privacy policy published.
- [ ] No placeholder claims or testimonials.
- [ ] Mobile QA complete.
- [ ] Rollback procedure documented.
- [ ] Owner approval obtained.
