# GCPデプロイやり取りまとめ

## 目的
- Vercel運用中のNext.jsサイトをGCPで公開したい。
- まずは独自ドメインなしで `run.app` URL で公開。
- `/clientworks` 系ページにBasic認証を設定。
- 最終的にGitHub自動デプロイも設定したい。

## 前提確認
- プロジェクトはNext.js（App Router）で、`/Users/okawa_rikiya/Documents/PracTice/space_portfolio/middleware.ts` を使用。
- この構成は静的ホスティングより **Cloud Run** が適切。

## 実施したこと
- GCPプロジェクトを作成（`rikiya-okawa-portfolio-prod`）。
- 予算アラートを設定。
- 必要APIを有効化。
  - `Cloud Run Admin API (run.googleapis.com)`
  - `Cloud Build API`
  - `Artifact Registry API`
  - `Secret Manager API`
- Cloud Runへソースデプロイを実行。
- Basic認証用Secret（`BASIC_AUTH_USER`, `BASIC_AUTH_PASSWORD`）を作成・更新。
- Cloud Runサービス更新でSecretを環境変数に紐付け。

## 発生したエラーと対処

| エラー | 原因 | 対処 |
|---|---|---|
| `storage.objects.get denied` | ビルド用SAの権限不足 | IAMロール付与（Cloud Run/Cloud Build/Storage関連） |
| `Permission denied on secret` | 実行SAがSecret参照不可 | `roles/secretmanager.secretAccessor` を付与 |
| `Secret ... latest was not found` | SecretまたはVersion未作成 | Secret作成 + `versions add` 実行 |
| Basic認証でログイン不可 | パスワードに `$` を含み、シェル展開で値ズレ | シングルクォートで再登録して反映 |

## 現在の状態
- サービスは公開済み（HTTPS有効）。
- 公開URL:  
  [https://rikiya-okawa-369-751547237835.asia-northeast1.run.app](https://rikiya-okawa-369-751547237835.asia-northeast1.run.app)
- 保護対象ルート:
  - `/clientworks`
  - `/clientworks_jp`
- 注意:
  - `/clientpage` は保護対象ではない（`middleware.ts`のmatcher外）。

## 料金・ドメイン整理
- `run.app` URL はそのままHTTPS利用可（追加ドメイン費なし）。
- 独自ドメインは通常有料（ドメイン取得費・DNS等）。
- SSL証明書（Google管理）は通常無料。

## 追加したリポジトリ設定（2026-02-15）
- `Dockerfile` を追加（Next.js standalone で Cloud Run 向けに軽量実行）。
- `.dockerignore` を追加（不要ファイルを除外）。
- `cloudbuild.yaml` を追加（build -> push -> Cloud Run deploy）。
- `next.config.mjs` に `output: 'standalone'` を追加。
- `README.md` に GCP 自動デプロイ手順（英語/日本語）を追記。

## 次アクション（未完了）
1. Cloud Build の GitHub トリガーを `main` 向けに作成し、`cloudbuild.yaml` を指定。
2. Cloud Build サービスアカウントに必要ロールを付与（Run Admin / SA User / Artifact Registry Writer / Secret Accessor）。
3. `BASIC_AUTH_USER` と `BASIC_AUTH_PASSWORD` のSecretが `latest` で参照可能か確認。
4. `main` へ push して自動デプロイを実行し、`/clientworks` と `/clientworks_jp` の認証動作を確認。

---

## 2026-02-16 作業ログ（本日のやり取り）

### 1) セキュリティ強化（Cloud Run / Secret Manager）
- IAM確認:
  - `Owner` は本人のみ。
  - `Editor` は見つからず（付与なし）。
- `Default compute service account`:
  - キーは 0 件（OK）。
  - 付与されていた `Cloud Run ビルダー` は削除。
- 実行用サービスアカウントを新規作成:
  - `cloudrun-runtime@rikiya-okawa-portfolio-prod.iam.gserviceaccount.com`
- Secretアクセスを最小化:
  - `BASIC_AUTH_USER` / `BASIC_AUTH_PASSWORD` に `cloudrun-runtime` を付与。
  - 既存の `...compute@developer.gserviceaccount.com` の Secret Access を削除（継承表示がある場合は IAM 側で削除）。
- Cloud Runサービス `rikiya-okawa-369` の実行SAを `cloudrun-runtime` に変更。
- 動作確認:
  - `/clientworks` と `/clientworks_jp` の Basic認証表示を確認済み。

### 2) GitHub自動デプロイ準備（Cloud Build）
- デプロイ用サービスアカウントを新規作成:
  - `cloudbuild-deployer@rikiya-okawa-portfolio-prod.iam.gserviceaccount.com`
- 付与ロール（プロジェクト）:
  - `Artifact Registry 書き込み`
  - `Cloud Build 編集者`
  - `Cloud Run 管理者`
  - `ログ書き込み`
- トリガー作成:
  - 名前: `deploy-main-cloudrun`
  - イベント: `main` への push
  - リポジトリ: `Rikiya89/rikiya-okawa-portfolio`

### 3) 詰まったポイントと対処
- Git push 認証:
  - GitHubパスワードは使用不可（PAT/SSH必須）。
  - PAT運用で複数回認証エラーが発生。
  - `git-lfs` 未導入で `pre-push` に止まり、`git push --no-verify` で回避して push 実施。
- Cloud Build:
  - `File cloudbuild.yaml not found` が発生。
  - `main` へ `cloudbuild.yaml` を push 後、トリガー設定を調整（`自動検出`で実行開始までは到達）。
- 最新ビルド失敗（確定エラー）:
  - `PERMISSION_DENIED: iam.serviceaccounts.actAs` on `cloudrun-runtime`
  - 実行主体: `cloudbuild-deployer`

### 4) 本日追加したコード変更
- `cloudbuild.yaml` の `Deploy to Cloud Run` ステップで、実行SAを明示:
  - `--service-account=cloudrun-runtime@${PROJECT_ID}.iam.gserviceaccount.com`

### 5) 現在の未解決（明日に持ち越し）
- `cloudbuild-deployer` に対し、`cloudrun-runtime` への `roles/iam.serviceAccountUser`（actAs）付与を最終確認。
- 付与後にトリガー再実行し、`Step 3: Deploy to Cloud Run` 成功を確認。

## 2026-02-17 再開チェックリスト
1. `cloudrun-runtime` の「アクセス権を持つプリンシパル」に以下があるか確認  
   `cloudbuild-deployer@rikiya-okawa-portfolio-prod.iam.gserviceaccount.com` + `サービス アカウント ユーザー`
2. `Cloud Build > トリガー > deploy-main-cloudrun > 実行`（`main`）
3. ビルド4ステップがすべて `SUCCESS` になることを確認
4. Cloud Run最新リビジョン更新を確認
5. 下記URLで動作確認
   - `https://rikiya-okawa-369-751547237835.asia-northeast1.run.app/`
   - `https://rikiya-okawa-369-751547237835.asia-northeast1.run.app/clientworks`
   - `https://rikiya-okawa-369-751547237835.asia-northeast1.run.app/clientworks_jp`
