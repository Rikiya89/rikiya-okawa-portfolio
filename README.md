# Rikiya Okawa Portfolio

Personal portfolio of Rikiya Okawa, a front-end engineer and creative developer, built with Next.js (App Router), TypeScript, and Tailwind CSS.

The current design uses a Neo-Swiss layout: warm off-white backgrounds, near-black typography, signal-red accents, and an interactive Flower of Life hero rendered with WebGL / GLSL. The portfolio brings together selected case studies, real-time graphics experiments, and client work.

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

## Design and Content

- **Flower of Life hero** — a pointer-responsive shader built with raw WebGL / GLSL, with responsive sizing and reduced-motion handling.
- **Selected Work** — project case studies with detail pages and modal navigation.
- **Lab** — creative-coding and real-time graphics studies, with links to experiments and Instagram.
- **Client Work** — a public preview leading to Basic Auth-protected project pages.
- **Toolkit** — tools used across web development, real-time graphics, design, and AI.
- **Typography** — Inter, Inter Tight, and JetBrains Mono, with Japanese font fallbacks.

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
- `WebGL` / `GLSL` (Flower of Life hero)
- `Three.js` / `@react-three/fiber`

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

Use Node.js 20–22, as specified in `package.json`.

Open `http://localhost:3000`. The root route redirects to `/jp` when the browser’s `Accept-Language` header includes Japanese; otherwise it redirects to `/en`. You can also open either route directly.

## Main Source Files

- `app/(en)/en/page.tsx` / `app/(jp)/jp/page.tsx` — English and Japanese homepages.
- `app/components/en/home/` / `app/components/jp/home/` — homepage sections.
- `app/components/en/home/FlowerField.tsx` / `flowerField.glsl.ts` — hero renderer and shader (both in the same directory).
- `app/globals.css` — design tokens, typography, layout, and shared styles.
- `app/lib/homeEn.ts` — selected-work and Lab ordering, featured client, and toolkit data.
- `app/lib/siteProjectsEn.ts` / `siteProjectsJp.ts` — project listings (both in `app/lib/`).
- `app/lib/projectDetails.ts` / `projectDetails_jp.ts` — project case-study content (both in `app/lib/`).
- `middleware.ts` — client-work authentication and security headers.

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
- `_IMAGE_NAME`: `space-portfolio` (existing container image identifier in `cloudbuild.yaml`)

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

大川力也のフロントエンド開発・クリエイティブコーディングの個人ポートフォリオです。Next.js（App Router）+ TypeScript + Tailwind CSS で構築しています。

現在はオフホワイト・黒・赤を基調とした Neo-Swiss デザインを採用し、WebGL / GLSL の Flower of Life ヒーロー、制作事例、Lab、クライアントワーク、Toolkit を掲載しています。

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
