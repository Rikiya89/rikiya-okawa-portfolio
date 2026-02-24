# Deployment Case Study (Application Summary)

This file condenses the practical deployment/troubleshooting evidence from the working repository into one recruiter-friendly summary.

## Project Context

- App: Next.js portfolio (App Router)
- Protected routes: `/clientworks`, `/clientworks_jp` (Basic Auth)
- Platforms used: Vercel, AWS Amplify, GCP Cloud Run
- Goal: deploy the same app safely with low cost and explain decisions clearly

## What I Implemented

- Route protection with `middleware.ts` (Basic Auth)
- AWS Amplify SSR deployment config (`amplify.yml`)
- GCP Cloud Run container deployment (`Dockerfile`, `cloudbuild.yaml`)
- Secret-based credential handling (no credentials in repo)
- Security headers for Amplify (`customHttp.yml`)
- Basic cost controls (budgets) and security/cost trade-off decisions

## Troubleshooting Examples (Real Incidents)

### 1) Basic Auth failed after deployment

- Symptom: correct credentials were rejected
- Root cause: password contained `$`, and shell expansion changed the value during secret registration
- Fix: re-register secret using safe quoting and redeploy
- Lesson: secret registration commands must account for shell expansion

### 2) Cloud Build -> Cloud Run deploy failed (`actAs`)

- Symptom: deploy step failed with `PERMISSION_DENIED` on service account impersonation
- Root cause: deployer service account lacked `iam.serviceaccounts.actAs` on the runtime service account
- Fix: grant `roles/iam.serviceAccountUser` to the deployer for the runtime service account
- Lesson: separate build/runtime service accounts improve security, but IAM links must be explicit

### 3) Secret access permission errors at runtime

- Symptom: Cloud Run service could not read Secret Manager values
- Root cause: secret access was granted to the wrong principal
- Fix: grant `roles/secretmanager.secretAccessor` to the runtime service account used by Cloud Run
- Lesson: verify the actual runtime identity, not just the build identity

### 4) Low-cost security decisions (AWS practice)

- Implemented first:
  - security headers
  - budgets / spend alerts
  - private S3 + CloudFront OAC practice
- Deferred initially:
  - WAF (to avoid fixed + request-based cost during learning phase)
- Lesson: explain trade-offs, not just tools

## Interview Talking Points

- Why Cloud Run was more suitable than static hosting for this Next.js setup (SSR + middleware)
- How Basic Auth in middleware differs from app-level auth
- How I handled secrets across build-time and runtime environments
- Why I chose low-cost defaults first and what I would add next in production

---

## 日本語サマリー（面接用）

- Next.js（App Router）サイトを複数環境（Vercel / AWS Amplify / GCP Cloud Run）へデプロイ
- `middleware.ts` による Basic 認証保護を実装
- Secret / IAM 周りの実エラーを解消（`actAs`, Secret Access）
- AWS 学習ではコスト制約を前提に、Budgets・セキュリティヘッダー・S3/CloudFront を優先
- 面接では「設定名」よりも「原因・対処・判断理由」を説明可能
