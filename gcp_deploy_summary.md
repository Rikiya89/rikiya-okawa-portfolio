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

## 次アクション（進行中テーマ）
- GitHub自動デプロイ設定。
  - Cloud Run画面では `Cloud Build` を選択。
  - サービス名は既存 `rikiya-okawa-369` を利用。
  - リージョンは `asia-northeast1 (Tokyo)` に統一（`europe-west1`は使わない）。
