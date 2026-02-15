## Space Portfolio

Personal portfolio site built with [Next.js](https://nextjs.org/) (App Router) + Tailwind CSS.

Includes optional Basic Auth protection for private work pages.

## Getting Started

Install dependencies and start the dev server:

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

Copy `.env.example` to `.env.local` and fill in values.

- `BASIC_AUTH_USER` / `BASIC_AUTH_PASSWORD`: Basic auth for `/clientworks` and `/clientworks_jp`
- `NEXT_PUBLIC_SITE_URL`: Used for `metadataBase` (SEO)

Security note: don’t commit `.env.local` or share real credentials in a public repo.

## Sharing Basic Auth (for job applications)

- Use demo-only credentials (no sensitive access), and rotate/delete them anytime.
- Share credentials privately (email/LinkedIn/password manager), not in the repo or a public page.

## Scripts

- `npm run dev`: local development
- `npm run lint`: lint
- `npm run build`: production build
- `npm run start`: start production server

## Notes

- Fonts are loaded via CSS `@import` (Google Fonts + Typekit).
- Basic auth is implemented in `middleware.ts`.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy is [Vercel](https://vercel.com/).

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Deploy on AWS Amplify

This repository includes `amplify.yml` for AWS Amplify Hosting (SSR compatible).

1. Push this repository to GitHub.
2. In AWS Amplify, create a new app and connect the GitHub repository/branch.
3. Add environment variables in Amplify:
   - `NEXT_PUBLIC_SITE_URL`
   - `BASIC_AUTH_USER`
   - `BASIC_AUTH_PASSWORD`
4. Trigger the first deployment.
5. Connect your custom domain from Amplify Console if needed.

`amplify.yml` writes the above variables into `.env.production` during build so middleware can read them at runtime.

## Deploy on GCP Cloud Run (GitHub Auto Deploy)

This repository includes `Dockerfile` and `cloudbuild.yaml` for Cloud Build -> Cloud Run deployment.

1. In GCP, open Cloud Build > Triggers and connect your GitHub repository.
2. Create a trigger for branch `main`.
3. Set the config file path to `cloudbuild.yaml`.
4. Ensure the following secrets exist in Secret Manager:
   - `BASIC_AUTH_USER`
   - `BASIC_AUTH_PASSWORD`
5. Grant required roles to the Cloud Build service account.
6. Push to `main` to deploy automatically.

Default substitutions in `cloudbuild.yaml`:
- `_REGION`: `asia-northeast1`
- `_SERVICE_NAME`: `rikiya-okawa-369`
- `_AR_REPOSITORY`: `cloud-run-source-deploy`
- `_IMAGE_NAME`: `space-portfolio`
- `_NEXT_PUBLIC_SITE_URL`: current `run.app` URL

Required IAM roles (minimum):
- `roles/run.admin`
- `roles/iam.serviceAccountUser`
- `roles/artifactregistry.writer`
- `roles/secretmanager.secretAccessor`

If Artifact Registry repository `cloud-run-source-deploy` does not exist in `asia-northeast1`, create it once before enabling trigger.

---

## スペースポートフォリオ（日本語）

Next.js（App Router）+ Tailwind CSS で構築した個人ポートフォリオサイトです。

クライアントワーク系ページには任意で Basic 認証をかけられます。

## はじめ方

依存関係をインストールして開発サーバーを起動します。

```bash
npm install
cp .env.example .env.local
npm run dev
```

ブラウザで `http://localhost:3000` を開いて確認してください。

## 環境変数

`.env.example` を `.env.local` にコピーして値を設定します。

- `BASIC_AUTH_USER` / `BASIC_AUTH_PASSWORD`: `/clientworks` と `/clientworks_jp` の Basic 認証
- `NEXT_PUBLIC_SITE_URL`: `metadataBase`（SEO）に使用

注意: `.env.local` はコミットせず、公開リポジトリに実際の認証情報を置かないでください。

## Basic 認証情報の共有（応募用）

- デモ専用の情報を使い、必要に応じてローテーション/削除してください。
- 認証情報はメール/LinkedIn/パスワードマネージャー等で個別に共有し、リポジトリや公開ページに載せないでください。

## スクリプト

- `npm run dev`: 開発サーバー
- `npm run lint`: Lint
- `npm run build`: 本番ビルド
- `npm run start`: 本番サーバー起動

## 補足

- フォントは CSS の `@import`（Google Fonts + Typekit）で読み込み。
- Basic 認証は `middleware.ts` で実装。

## 参考

- Next.js 公式ドキュメント: https://nextjs.org/docs
- チュートリアル: https://nextjs.org/learn
- リポジトリ: https://github.com/vercel/next.js

## Vercel へのデプロイ

最も簡単なのは Vercel を利用する方法です。

デプロイ手順は公式ドキュメントを参照してください: https://nextjs.org/docs/deployment

## AWS Amplify へのデプロイ

このリポジトリには AWS Amplify Hosting（SSR 対応）用の `amplify.yml` が含まれています。

1. リポジトリを GitHub に push します。
2. AWS Amplify で新規アプリを作成し、GitHub の対象リポジトリ/ブランチを接続します。
3. Amplify の環境変数に以下を設定します。
   - `NEXT_PUBLIC_SITE_URL`
   - `BASIC_AUTH_USER`
   - `BASIC_AUTH_PASSWORD`
4. 初回デプロイを実行します。
5. 必要に応じて Amplify Console で独自ドメインを接続します。

`amplify.yml` では、ビルド時に上記変数を `.env.production` へ書き出し、`middleware.ts` から参照できるようにしています。

## GCP Cloud Run へのデプロイ（GitHub自動デプロイ）

このリポジトリには Cloud Build から Cloud Run へデプロイするための `Dockerfile` と `cloudbuild.yaml` が含まれています。

1. GCP の Cloud Build > トリガー で GitHub リポジトリを接続します。
2. `main` ブランチ向けのトリガーを作成します。
3. ビルド設定ファイルを `cloudbuild.yaml` にします。
4. Secret Manager に以下のSecretを用意します。
   - `BASIC_AUTH_USER`
   - `BASIC_AUTH_PASSWORD`
5. Cloud Build のサービスアカウントに必要ロールを付与します。
6. `main` に push すると自動デプロイされます。

`cloudbuild.yaml` の既定置換変数:
- `_REGION`: `asia-northeast1`
- `_SERVICE_NAME`: `rikiya-okawa-369`
- `_AR_REPOSITORY`: `cloud-run-source-deploy`
- `_IMAGE_NAME`: `space-portfolio`
- `_NEXT_PUBLIC_SITE_URL`: 現在の `run.app` URL

必要IAMロール（最小）:
- `roles/run.admin`
- `roles/iam.serviceAccountUser`
- `roles/artifactregistry.writer`
- `roles/secretmanager.secretAccessor`

`asia-northeast1` に `cloud-run-source-deploy` リポジトリがない場合は、トリガー有効化前に一度だけ作成してください。
