# Space Portfolio

Personal portfolio site built with Next.js (App Router) + TypeScript + Tailwind CSS.

Japanese README: [`README_JP.md`](README_JP.md)

This repository is also used as a job application proof project:
- bilingual portfolio pages (`/en`, `/jp`)
- protected client-work pages with Basic Auth (`/clientworks`, `/clientworks_jp`)
- multi-platform deployment experience (Vercel / AWS Amplify / GCP Cloud Run)
- CI checks (GitHub Actions)

## Why This Repo Matters (Application / Interview)

- Built and maintained a real Next.js 15 project (App Router).
- Implemented route protection using `middleware.ts` and Basic Auth.
- Deployed the same app to multiple platforms with environment-specific configs.
- Worked with cloud secrets/IAM and deployment troubleshooting (documented in this repo).
- Added reproducible setup, deployment notes, and CI workflow for reviewer confidence.

## Key Features

- Next.js App Router + TypeScript
- Bilingual routing (`/en`, `/jp`)
- Client work pages protected by Basic Auth
- SEO metadata support (`sitemap`, `robots`, `metadataBase`)
- Cloud Run container deployment (`Dockerfile`, `cloudbuild.yaml`)
- AWS Amplify deployment config (`amplify.yml`)

## Tech Stack

- `Next.js 15`
- `React 19`
- `TypeScript`
- `Tailwind CSS`
- `Framer Motion`
- `Three.js` / `react-three-fiber`

## CI (GitHub Actions)

Minimal CI is included in `.github/workflows/ci.yml`:
- `npm ci`
- `npm run lint`
- `npm run build`

This helps reviewers verify the project installs and builds cleanly.

## Local Development

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

## Environment Variables

Copy `.env.example` to `.env.local` and set values:

- `BASIC_AUTH_USER`
- `BASIC_AUTH_PASSWORD`
- `NEXT_PUBLIC_SITE_URL`

Notes:
- `BASIC_AUTH_*` protects `/clientworks` and `/clientworks_jp`.
- `NEXT_PUBLIC_SITE_URL` is used for SEO metadata (e.g. `metadataBase`).

## Security Notes (For Job Applications)

- Do not commit `.env.local`.
- Use demo-only Basic Auth credentials for portfolio review.
- Share credentials privately (email / LinkedIn message / password manager), never in the public repo.
- Rotate or delete shared demo credentials after interviews.

## Scripts

- `npm run dev` - local development
- `npm run lint` - lint
- `npm run build` - production build
- `npm run start` - run production server

## Deployment Options

### 1) Vercel

Fastest option for preview/public hosting.

### 2) AWS Amplify (SSR Hosting)

This repo includes `amplify.yml` for Amplify Hosting.

Setup summary:
1. Connect GitHub repo/branch in Amplify.
2. Set env vars:
   - `NEXT_PUBLIC_SITE_URL`
   - `BASIC_AUTH_USER`
   - `BASIC_AUTH_PASSWORD`
3. Deploy.

Implementation detail:
- `amplify.yml` writes environment variables into `.env.production` during build so middleware/runtime can read them.

### 3) GCP Cloud Run (Cloud Build -> Cloud Run)

This repo includes:
- `Dockerfile`
- `cloudbuild.yaml`

`cloudbuild.yaml` default substitutions:
- `_REGION`: `asia-northeast1`
- `_SERVICE_NAME`: `rikiya-okawa-369`
- `_AR_REPOSITORY`: `cloud-run-source-deploy`
- `_IMAGE_NAME`: `space-portfolio`

Required roles (minimum, for deploy flow):
- `roles/run.admin`
- `roles/iam.serviceAccountUser`
- `roles/artifactregistry.writer`
- `roles/secretmanager.secretAccessor`

## Interview Talking Points (Based on Real Troubleshooting)

Use these when explaining practical experience:

- Basic Auth failure caused by shell expansion of `$` in a password during secret registration.
- Cloud Build deploy failure caused by missing `iam.serviceaccounts.actAs` permission.
- Secret access failures resolved by assigning Secret Manager access to the correct runtime service account.
- Cost/security trade-offs: enabled budgets and headers first, postponed WAF in low-cost practice phase.

## Deployment Case Study

Detailed daily logs are kept in the working repository. For this application repository, the troubleshooting evidence is condensed into one file:

- `docs/deployment-case-study.md`

---

## 日本語（応募用サマリー）

Next.js（App Router）+ TypeScript + Tailwind CSS で構築した個人ポートフォリオです。

応募・面接向けの強み:
- 英語/日本語のページ構成（`/en`, `/jp`）
- `middleware.ts` による Basic 認証（`/clientworks`, `/clientworks_jp`）
- Vercel / AWS Amplify / GCP Cloud Run の複数デプロイ経験
- CI（GitHub Actions）で `lint` / `build` を自動確認
- クラウド運用時のエラーと対処ログを Markdown で記録

ローカル起動:

```bash
npm install
cp .env.example .env.local
npm run dev
```

認証情報の扱い:
- 応募時はデモ用の Basic 認証情報を使用
- 認証情報は個別共有（メール / LinkedIn 等）
- 公開リポジトリには載せない
