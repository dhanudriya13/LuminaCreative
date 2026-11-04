# Database Schema — Lead Management

## 1. Scope decision

A database is justified for V1 because Lumina requires durable lead storage and email notification. The website content itself remains static and repository-managed; do not put services, articles or portfolio content into the database in V1.

Use the database/ORM already present in the repository if suitable. If none exists, recommend a small relational database compatible with current hosting and obtain owner approval before provisioning a new provider.

## 2. Entity relationship overview

```text
Inquiry 1 ---- 0..N InquiryNotification
```

A single inquiry may have one or more notification attempts. Keep the schema minimal.

## 3. Table: inquiries

| Column | Type | Constraints / Notes |
|---|---|---|
| id | UUID | Primary key, internal only |
| public_reference | VARCHAR(20) | Unique, non-sequential public reference |
| name | VARCHAR(120) | Required |
| email | VARCHAR(254) | Required, normalized |
| company | VARCHAR(160) | Nullable |
| country | VARCHAR(100) | Required |
| locale | VARCHAR(5) | `en` or `id` |
| services | JSON/JSONB or normalized text array | Required, validated allowlist |
| budget_currency | CHAR(3) | Nullable ISO currency code |
| budget_min | DECIMAL(14,2) | Nullable |
| budget_max | DECIMAL(14,2) | Nullable |
| budget_label | VARCHAR(80) | Nullable; retain original selected range |
| description | TEXT | Required; enforce reasonable max length |
| preferred_contact | VARCHAR(20) | Nullable enum: `email`, `whatsapp`, `other` |
| privacy_consent | BOOLEAN | Required |
| source_path | VARCHAR(500) | Nullable; sanitized page path |
| utm_source | VARCHAR(120) | Nullable |
| utm_medium | VARCHAR(120) | Nullable |
| utm_campaign | VARCHAR(160) | Nullable |
| status | VARCHAR(20) | Default `new`; enum `new`, `contacted`, `qualified`, `proposal`, `won`, `lost`, `spam` |
| created_at | TIMESTAMP WITH TIME ZONE | Required |
| updated_at | TIMESTAMP WITH TIME ZONE | Required |

Notes:
- Do not store IP address unless there is a documented security/abuse need and retention policy.
- Do not store sensitive personal information.
- Normalize email for matching, but preserve a display form if required.
- Use a server-generated random public reference; do not expose sequential IDs.
- Validate services against a server-side allowlist.
- Keep budget currency explicit. Never assume an overseas lead's budget is IDR.

## 4. Table: inquiry_notifications

| Column | Type | Constraints / Notes |
|---|---|---|
| id | UUID | Primary key |
| inquiry_id | UUID | FK to inquiries.id |
| channel | VARCHAR(20) | `email` |
| recipient | VARCHAR(254) | Configured destination |
| status | VARCHAR(20) | `pending`, `sent`, `failed` |
| provider_message_id | VARCHAR(200) | Nullable |
| attempts | INTEGER | Default 0 |
| last_error_code | VARCHAR(100) | Nullable; avoid storing secrets or full provider payload |
| created_at | TIMESTAMP WITH TIME ZONE | Required |
| updated_at | TIMESTAMP WITH TIME ZONE | Required |
| sent_at | TIMESTAMP WITH TIME ZONE | Nullable |

## 5. Indexes

- Unique index on `inquiries.public_reference`.
- Index on `inquiries.created_at`.
- Index on `inquiries.status, inquiries.created_at`.
- Index on `inquiry_notifications.inquiry_id`.
- Index on `inquiry_notifications.status, inquiry_notifications.updated_at`.

Do not add indexes without query/use-case justification beyond these basic operational needs.

## 6. Validation rules

- `name`: trimmed, 1–120 characters.
- `email`: valid format, maximum 254 characters.
- `company`: maximum 160 characters.
- `country`: required, maximum 100 characters.
- `locale`: `en` or `id`.
- `services`: at least one valid service identifier.
- `description`: trimmed, non-empty, sensible maximum such as 5,000 characters.
- `preferred_contact`: allowlisted enum.
- `privacy_consent`: true.
- Budget: validate currency and range consistency if numeric values are collected.
- Reject unexpected fields where practical.
- Honeypot field must be empty.

## 7. Data lifecycle and privacy

- Store only information needed to respond to the inquiry.
- Restrict database credentials to server-side runtime.
- Do not expose lead records through public APIs.
- Define a retention period with the owner; propose review after 24 months of inactivity rather than assuming indefinite retention.
- Provide a documented process for deletion/export requests.
- Back up the database according to hosting capabilities.
- Ensure backups follow the same access and retention controls.

## 8. Transaction and notification behavior

1. Validate request.
2. Insert inquiry.
3. Insert notification row as `pending`.
4. Commit transaction.
5. Send email.
6. Update notification status to `sent` or `failed`.
7. If email fails, keep inquiry and pending/failed notification record.
8. Provide retry mechanism or documented manual retry procedure.

Do not roll back a valid inquiry because an email provider is unavailable.

## 9. Migration and testing

- Use versioned migrations.
- Never run destructive schema changes without backup and review.
- Test successful insert.
- Test validation failures.
- Test duplicate submissions.
- Test database unavailable.
- Test email provider unavailable.
- Test notification retry.
- Verify public reference is not predictable.
- Verify no public read endpoint exposes inquiry data.

## 10. Admin access

No public admin dashboard is included in V1. Leads can initially be reviewed through a restricted database console/provider interface or existing secure internal tooling. If an admin UI is later required, it must include authentication, authorization, audit logging and secure session handling.
