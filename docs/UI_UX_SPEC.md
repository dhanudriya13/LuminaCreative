# UI/UX Specification

## 1. Design intent

Create a premium, technology-focused website that combines editorial confidence with clean product-design conventions.

The experience should feel:
- Technically capable.
- Human-centered.
- Trustworthy.
- Modern and refined.
- Approachable rather than corporate-heavy.

The site is a lead-generation product. Visual effects must never obscure service clarity, proof, navigation or calls to action.

## 2. Design principles

1. Clarity before decoration.
2. Show real work, not generic visual filler.
3. Explain outcomes in customer language.
4. Keep a visible next step on every major page.
5. Use consistent components and spacing.
6. Design mobile-first and test real content lengths in both languages.
7. Respect reduced-motion preferences.
8. Do not use unsupported client counts, ratings, testimonials or performance claims.

## 3. Visual system

### Palette proposal

- Midnight: `#101827`
- Electric Blue: `#2563EB`
- Violet: `#8B5CF6`
- Cloud: `#F8FAFC`
- Slate Border: `#E2E8F0`
- Secondary Text: `#475569`
- Success: `#16A34A`
- Warning: `#D97706`
- Error: `#DC2626`

Use the current logo and brand assets as the source of truth. Confirm colors against existing assets before finalizing tokens.

### Typography

Preferred:
- Headings: Space Grotesk.
- Body: Inter.
- Technical labels: JetBrains Mono.

If these fonts are not already available, evaluate licensing, loading performance and current font conventions before adding them.

### Type scale

| Token | Desktop | Mobile |
|---|---:|---:|
| Display | 64/70 | 40/46 |
| H1 | 48/56 | 36/42 |
| H2 | 36/44 | 30/36 |
| H3 | 24/32 | 22/28 |
| Body | 16/26 | 16/26 |
| Small | 14/22 | 13/20 |

Use fluid sizing if supported by the existing styling system.

### Layout

- Max content width: 1200px.
- Desktop: 12-column grid.
- Tablet: 8-column grid.
- Mobile: 4-column grid.
- Desktop section spacing: 80–120px.
- Mobile section spacing: 48–72px.
- Card radius: 12–20px.
- Button minimum height: 48px.
- Consistent page gutters and image aspect ratios.

## 4. Global shell

### Header
- Logo links to the localized homepage.
- Services dropdown.
- Work.
- About.
- Insights.
- Language switcher.
- Primary `Start a Project` CTA.
- Sticky behavior only if it does not consume excessive mobile viewport space.
- Keyboard-accessible menu and visible focus states.

### Footer
- Short studio positioning statement.
- Service links.
- Main navigation.
- Contact email and configured WhatsApp.
- Social links.
- Language switcher if useful.
- Privacy and terms.
- Copyright year generated dynamically.

## 5. Page specifications

### Homepage

Order:
1. Header.
2. Hero.
3. Trust/credibility strip using only verified facts.
4. Services overview.
5. Featured work.
6. Why Lumina.
7. Process: Discover → Design → Develop → Deliver.
8. Technology/capabilities.
9. Verified testimonials, only if available.
10. Final CTA.
11. Footer.

Hero:
- Eyebrow: `DIGITAL TECHNOLOGY STUDIO`.
- Headline: `Illuminate Your Digital Potential.`
- Supporting copy: `We design, engineer, and develop digital experiences that help businesses transform ideas into meaningful solutions.`
- Primary CTA: `Start a Project`.
- Secondary CTA: `Explore Our Work`.
- Visual: authentic project screenshots, product mockups based on real work, or a restrained abstract brand graphic.

Do not invent client logos, customer counts, ratings, awards or testimonials.

### Services index

- Intro headline and short positioning.
- Four service cards: Web Development, Custom Web Applications, UI/UX Design, Branding & Graphic Design.
- Each card explains customer problem, outcome and CTA.
- Process section.
- Relevant case studies.
- FAQ.
- Final inquiry CTA.

### Service detail template

- Service-specific hero.
- Problems addressed.
- Outcomes and deliverables.
- Typical workflow.
- Relevant work.
- FAQs.
- CTA with service preselected in inquiry form.

### Work index

- Intro.
- Category filters.
- Project cards with title, category, short description and classification.
- Clear labels for Client, Internal, Research or Demo projects.
- Empty state if no projects match.
- No fake client work.

### Case study detail

- Project title and classification.
- Overview.
- Challenge.
- Approach.
- Solution.
- Deliverables.
- Technology.
- Evidence-based outcomes.
- Gallery with accessible captions/alt text.
- Related projects.
- CTA.

If a project is conceptual, say so clearly. Do not frame prototype outcomes as client business results.

### About

- Studio positioning.
- Mission and values.
- Design + engineering approach.
- Team profiles with approved bios/photos.
- CTA.

### Insights

- Article list with category, date, title and excerpt.
- Article page with semantic heading hierarchy, author, date, table of contents where useful, related content and CTA.
- Localized content should not be represented as translated if no translation exists.

### Contact

- Reassuring intro and expected response time only if operationally supportable.
- Form with clear labels, inline errors and success state.
- Alternative email and WhatsApp routes.
- Explain what happens after submission.
- Do not require budget if visitor is unsure.

## 6. Inquiry form UX

Fields:
- Name (required).
- Email (required).
- Company (optional).
- Country (required).
- Services (one or more required).
- Budget (optional).
- Project description (required).
- Preferred contact method (optional).
- Privacy consent (required where applicable).
- Hidden honeypot (not visible to users).

Budget options:
- Below IDR 3M.
- IDR 3–5M.
- IDR 5–10M.
- IDR 10–25M.
- IDR 25–50M.
- Above IDR 50M.
- Not sure yet.

For international visitors, clarify that budget can be submitted in the visitor's currency or provide a currency selector if the implementation supports accurate normalization. Do not silently assume all amounts are IDR.

Interaction:
- Validate on blur and on submit without being overly aggressive.
- Preserve entered values after recoverable errors.
- Disable duplicate submission while request is pending.
- Show a clear success message only after database persistence is confirmed.
- Provide a reference code.
- Offer WhatsApp/email alternative if submission fails.

## 7. Bilingual UX

- English and Indonesian are first-class locales.
- Use a clear language switcher, preferably `EN | ID`.
- Preserve equivalent page when switching locale.
- Translate navigation, buttons, forms, validation, metadata, FAQs and core page content.
- Do not machine-translate published content without review.
- Ensure Indonesian copy does not overflow buttons/cards.
- Set correct document language.
- Localize dates and number/currency formatting.
- Use language-specific SEO metadata and hreflang.

## 8. Responsive behavior

### Mobile
- Single-column sections where appropriate.
- Compact accessible navigation.
- Full-width primary CTA where useful.
- Cards stack vertically.
- Avoid tiny multi-column text.
- Forms use full-width controls.
- Touch targets at least 44x44 CSS pixels.
- No horizontal overflow.

### Tablet
- Two-column card grids where content permits.
- Adapt hero composition.
- Maintain readable text widths.

### Desktop
- Use editorial split layouts and asymmetric grids selectively.
- Keep line lengths readable.
- Avoid excessive empty space that pushes services or proof too far below the fold.

## 9. Interaction and motion

- Hover/focus states for links and cards.
- Subtle transitions, generally 150–250ms.
- Small entrance motion only where it adds hierarchy.
- No animation required to access content.
- Respect `prefers-reduced-motion`.
- Avoid autoplay video/audio.
- Ensure all interactions work by keyboard and touch.

## 10. Accessibility

Target WCAG 2.2 AA:
- Semantic landmarks.
- One clear H1 per page.
- Logical heading hierarchy.
- Keyboard navigation.
- Visible focus indicators.
- Sufficient contrast.
- Labels and error descriptions for form fields.
- Accessible dropdowns/dialogs.
- Alt text for meaningful images.
- Empty alt for decorative imagery.
- Reduced motion support.
- Do not communicate state by color alone.

## 11. Design QA checklist

- [ ] Logo and brand colors are consistent.
- [ ] English and Indonesian layouts both tested.
- [ ] No text clipping or overflow.
- [ ] CTA hierarchy is clear.
- [ ] All interactive elements have hover, focus and disabled states.
- [ ] Mobile menu works with keyboard and touch.
- [ ] Forms have loading, error and success states.
- [ ] Images have correct crop and alt text.
- [ ] Contrast checked.
- [ ] Reduced-motion mode checked.
- [ ] No decorative animation blocks access to content.
