# Rikiya Okawa Portfolio（日本語版）

大川力也のフロントエンド開発・クリエイティブコーディングの個人ポートフォリオサイトです。Next.js（App Router）+ TypeScript + Tailwind CSS で構築しています。

現在はオフホワイトの背景、黒を基調とした文字、赤のアクセントを使った Neo-Swiss デザインを採用しています。WebGL / GLSL による Flower of Life のヒーローと、制作事例、リアルタイム表現の実験、クライアントワークを掲載しています。

English README: [`README.md`](README.md)

このリポジトリは、応募・面接時の技術証跡としても利用しております。
- 英語/日本語のポートフォリオページ（`/en`, `/jp`）
- Basic 認証付きクライアントワークページ（`/clientworks`, `/clientworks_jp`）
- 複数環境へのデプロイ実績（Vercel / AWS Amplify / GCP Cloud Run）
- GitHub Actions による CI（`lint` / `build`）

## このリポジトリの評価ポイント（応募・面接向け）

- Next.js 15（App Router）の実案件形式の構成で継続運用
- `middleware.ts` を用いたルート保護（Basic 認証）
- 同一アプリを複数のクラウド環境へデプロイ
- Secret / IAM を含むクラウド設定とトラブル対応の経験
- 再現可能なセットアップ手順とデプロイ手順を Markdown 化

## デザインとコンテンツ

- **Flower of Life ヒーロー** — ポインターに反応する raw WebGL / GLSL シェーダー。画面幅に応じたサイズ調整と、動きを減らす設定への対応を実装。
- **Selected Work** — 制作事例と、詳細ページ・モーダルによる閲覧。
- **Lab** — クリエイティブコーディングやリアルタイム表現の実験。作品や Instagram へのリンクを掲載。
- **Client Work** — 公開プレビューから Basic 認証付きの実績ページへ誘導。
- **Toolkit** — Web開発、リアルタイムグラフィックス、デザイン・AIの使用ツール。
- **タイポグラフィ** — Inter、Inter Tight、JetBrains Mono と日本語フォールバックフォント。

## 主な機能

- Next.js App Router + TypeScript
- 英語 / 日本語ルーティング（`/en`, `/jp`）
- クライアントワークページの Basic 認証保護
- SEO 対応（`sitemap`, `robots`, `metadataBase`）
- Cloud Run 向けコンテナデプロイ（`Dockerfile`, `cloudbuild.yaml`）
- AWS Amplify 用デプロイ設定（`amplify.yml`）

## 技術スタック

- `Next.js 15`
- `React 19`
- `TypeScript`
- `Tailwind CSS`
- `Framer Motion`
- `WebGL` / `GLSL`（Flower of Life ヒーロー）
- `Three.js` / `@react-three/fiber`

## CI（GitHub Actions）

最小構成の CI を `.github/workflows/ci.yml` に追加しています。

実行内容:
- `npm ci`
- `npm run lint`
- `npm run build`

これにより、採用担当者・面接官が「インストール可能」「Lint/Build が通る」状態を確認しやすくなります。

## ローカル開発

```bash
npm install
cp .env.example .env.local
npm run dev
```

`package.json` の指定に合わせ、Node.js 20〜22 を使用してください。

`http://localhost:3000` を開いて確認してください。ルートはブラウザーの `Accept-Language` に日本語が含まれる場合 `/jp`、それ以外は `/en` にリダイレクトします。各ルートを直接開くこともできます。

## 主なソースファイル

- `app/(en)/en/page.tsx` / `app/(jp)/jp/page.tsx` — 英語・日本語のホームページ。
- `app/components/en/home/` / `app/components/jp/home/` — ホームページの各セクション。
- `app/components/en/home/FlowerField.tsx` / `flowerField.glsl.ts` — ヒーローのレンダラーとシェーダー（同じディレクトリ内）。
- `app/globals.css` — デザイントークン、文字組み、レイアウト、共通スタイル。
- `app/lib/homeEn.ts` — Selected Work・Lab の表示順、注目クライアント、Toolkit のデータ。
- `app/lib/siteProjectsEn.ts` / `siteProjectsJp.ts` — 作品一覧（いずれも `app/lib/` 内）。
- `app/lib/projectDetails.ts` / `projectDetails_jp.ts` — 制作事例の詳細（いずれも `app/lib/` 内）。
- `middleware.ts` — クライアントワークの認証とセキュリティヘッダー。

## 環境変数

`.env.example` を `.env.local` にコピーし、以下を設定してください。

- `BASIC_AUTH_USER`
- `BASIC_AUTH_PASSWORD`
- `NEXT_PUBLIC_SITE_URL`

補足:
- `BASIC_AUTH_*` は `/clientworks` と `/clientworks_jp` の保護に使用
- `NEXT_PUBLIC_SITE_URL` は SEO メタデータ（`metadataBase`）等に使用

## セキュリティ注意点（応募用）

- `.env.local` はコミットしない
- 応募用にはデモ専用の Basic 認証情報を使用
- 認証情報はメール / LinkedIn / パスワードマネージャー等で個別共有
- 面接後はデモ認証情報をローテーションまたは削除

## スクリプト

- `npm run dev` - ローカル開発
- `npm run lint` - Lint
- `npm run build` - 本番ビルド
- `npm run start` - 本番サーバー起動

## デプロイ方法

### 1) Vercel

最短で公開・プレビューしたい場合に適しています。

### 2) AWS Amplify（SSR Hosting）

このリポジトリには `amplify.yml` を含めています。

手順（要約）:
1. Amplify で GitHub リポジトリ/ブランチを接続
2. 環境変数を設定
   - `NEXT_PUBLIC_SITE_URL`
   - `BASIC_AUTH_USER`
   - `BASIC_AUTH_PASSWORD`
3. デプロイ実行

実装上のポイント:
- `amplify.yml` でビルド時に環境変数を `.env.production` へ書き出し、middleware/runtime から参照可能にしています。

### 3) GCP Cloud Run（Cloud Build -> Cloud Run）

このリポジトリには以下を含めています。
- `Dockerfile`
- `cloudbuild.yaml`

`cloudbuild.yaml` の既定置換変数:
- `_REGION`: `asia-northeast1`
- `_SERVICE_NAME`: `rikiya-okawa-369`
- `_AR_REPOSITORY`: `cloud-run-source-deploy`
- `_IMAGE_NAME`: `space-portfolio`（`cloudbuild.yaml` に設定されている既存のコンテナイメージ識別子）

必要ロール（最小構成の目安）:
- `roles/run.admin`
- `roles/iam.serviceAccountUser`
- `roles/artifactregistry.writer`
- `roles/secretmanager.secretAccessor`

## 面接で話せる実務的トラブルシュート例

- Secret 登録時、パスワード内の `$` がシェル展開され、Basic 認証が失敗
- Cloud Build デプロイ時、`iam.serviceaccounts.actAs` 不足で失敗
- 実行用サービスアカウントへの Secret 権限不足で参照エラー
- コストとセキュリティのトレードオフとして、初期段階は Budgets とヘッダー強化を優先し、WAF は保留

## ケーススタディ（面接準備向け）

応募用リポジトリでは、日次ログを 1 ファイルに要約しています。

- `docs/deployment-case-study.md`

詳細ログは作業用リポジトリで管理しています。
