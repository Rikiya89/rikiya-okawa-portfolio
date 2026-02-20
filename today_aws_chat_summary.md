# Today AWS Chat Summary

Date: 2026-02-20  
Workspace: `/Users/okawa_rikiya/Documents/PracTice/space_portfolio`

## Objective
- Learn AWS step-by-step with low cost.
- Build practical deployment and security knowledge for job applications.
- Understand the meaning of each setting (not just click-through).

## What We Completed

### 1) Amplify (Next.js hosting)
- Confirmed Amplify deployment flow from GitHub branch.
- Clarified key env vars:
  - `NEXT_PUBLIC_SITE_URL`
  - `BASIC_AUTH_USER`
  - `BASIC_AUTH_PASSWORD`
- Confirmed intended route policy:
  - Public: `/en`, `/jp`
  - Basic Auth protected: `/clientworks`, `/clientworks_jp`

### 2) Security baseline (low-cost mode)
- Added and validated security headers via `customHttp.yml`:
  - `strict-transport-security`
  - `x-content-type-options`
  - `x-frame-options`
  - `referrer-policy`
  - `permissions-policy`
- Decision: keep WAF off for now to avoid extra fixed + request-based cost.

### 3) Cost controls
- Created budgets and confirmed healthy status:
  - Zero-spend budget
  - Monthly cost budget

### 4) S3 + CloudFront practice
- Created private S3 bucket with public access blocked.
- Uploaded `hello.png`.
- Created CloudFront distribution with private S3 access.
- Confirmed successful access:
  - `https://d3br1tko5k4ptc.cloudfront.net/hello.png`
  - Response included `HTTP/2 200` and `content-type: image/png`.

### 5) Lambda + API Gateway practice
- Created Lambda function: `portfolio-practice-hello`.
- Created HTTP API: `portfolio-practice-http-api`.
- Added route: `GET /hello`.
- Verified working endpoint response:
```json
{"message":"Hello from Lambda","time":"2026-02-18T09:54:37.823Z"}
```

### 6) Interview readiness review
- Confirmed current state is strong enough to apply.
- Identified explanation areas to prepare:
  - Amplify CI/CD flow
  - S3 + CloudFront (OAC/private origin)
  - Lambda + API Gateway flow
  - Security/cost trade-off decisions
  - Troubleshooting examples (`401`, route mismatch, env reflection)

## Key Meanings You Clarified
- **Amplify**: managed hosting + deployment automation for Next.js.
- **`NEXT_PUBLIC_SITE_URL`**: canonical public URL used by metadata/sitemap logic.
- **WAF setting**: security increase with extra recurring + request cost.
- **S3 private + CloudFront**: secure static delivery without opening S3 publicly.
- **API Gateway route**: URL path mapping to Lambda integration.

## Recommended Next Steps
1. Connect API Gateway `/hello` to your Next.js UI.
2. Add architecture + proof URLs in README for applications.
3. Rotate any previously exposed credentials.
4. Keep Budgets alerts enabled and monitor monthly cost.
