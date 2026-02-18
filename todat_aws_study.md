# Today AWS Study Log

Date: 2026-02-18  
Project: `space_portfolio`

## Goal
- Practice AWS with low cost.
- Build deployment + security basics.
- Create portfolio-ready AWS evidence for job applications.

## What I Completed

### 1) Amplify hosting setup (Next.js app)
- Confirmed app deployment on Amplify.
- Verified protected route behavior for `/clientworks` using Basic Auth.
- Kept public pages (`/en`, `/jp`) open.

### 2) Security hardening (no extra paid services)
- Added security headers via `customHttp.yml`.
- Verified headers are active:
  - `strict-transport-security`
  - `x-content-type-options`
  - `x-frame-options`
  - `referrer-policy`
  - `permissions-policy`

### 3) Cost protection
- Created AWS Budgets:
  - Zero-spend budget
  - Monthly cost budget
- Decision: keep WAF disabled for now to avoid extra monthly cost.

### 4) S3 + CloudFront practice
- Created private S3 bucket: `rikiya-practice-assets-20260218`
- Uploaded test image: `hello.png`
- Created CloudFront distribution with private S3 access (OAC/recommended settings).
- Confirmed access:
  - `https://d3br1tko5k4ptc.cloudfront.net/hello.png`
- Validation result: `HTTP/2 200`, `content-type: image/png`

### 5) Lambda + API Gateway practice
- Created Lambda function: `portfolio-practice-hello` (Node.js runtime)
- Function output:
```json
{
  "message": "Hello from Lambda",
  "time": "ISO timestamp"
}
```
- Created API Gateway HTTP API:
  - API name: `portfolio-practice-http-api`
  - Route: `GET /hello`
  - Stage: `$default` (auto-deploy enabled)
- Validation result:
```json
{"message":"Hello from Lambda","time":"2026-02-18T09:54:37.823Z"}
```

## Key Learning
- For low-traffic learning, Amplify + S3 + CloudFront + Lambda/API Gateway gives strong AWS practice without complex ops.
- WAF is useful but not required in the first phase due to added cost.
- Budgets + private S3 + OAC + security headers are a practical baseline.

## Next Steps
1. Connect API Gateway endpoint to Next.js UI (fetch `/hello` from app).
2. Add architecture diagram + URLs to README.
3. Rotate any exposed test credentials.
4. Keep monitoring Budgets alerts.
