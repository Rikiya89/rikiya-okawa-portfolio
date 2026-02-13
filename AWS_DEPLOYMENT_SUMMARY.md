# AWSデプロイやり取りまとめ

更新日: 2026-02-13
対象プロジェクト: `space_portfolio` (Next.js 15 / App Router)

## 1. 相談の背景
- 現在は Vercel で公開中。
- AWS で公開する場合の方法を知りたい。
- さらに「自分でサーバー言語・ネットワーク・セキュリティパッチを選定したい」ケースも確認。
- 最終的に「まずは AWS でこのプロジェクトをデプロイしたい」という要望。

## 2. 方針の結論
- 最短でこの Next.js プロジェクトをAWS公開するなら **AWS Amplify Hosting** が最適。
- 理由:
  - Next.js SSR / middleware 構成に対応しやすい。
  - GitHub連携でデプロイを簡略化できる。
  - 運用の初期負荷が EC2/ECS より低い。

補足:
- 「自由度最優先（言語/ネットワーク/パッチを全て自分で決める）」なら EC2セルフホストが最短。
- ただし運用負荷は Amplify より高い。

## 3. リポジトリに実施した変更
- 追加: `amplify.yml`
- 更新: `.env.example`
- 更新: `app/robots.ts`（Vercel固定フォールバック依存を緩和）
- 更新: `app/sitemap.ts`（Vercel固定フォールバック依存を緩和）
- 更新: `README.md`（AWS Amplifyデプロイ手順追記）

## 4. 検証結果
- `npm run lint`: 成功
- `npm run build`: この実行環境では失敗
  - 原因: `fonts.googleapis.com` への名前解決不可（ネットワーク制限）
  - AWS Amplify の通常環境では解消される想定

## 5. AWS Amplify デプロイ手順（実行版）
1. ローカル変更を GitHub に push。
2. AWS Console でリージョンを固定（例: `us-east-1`）。
3. `Amplify` を開く。
4. `Create new app` / `Deploy an app` を押す。
5. リポジトリプロバイダに GitHub を選択し連携。
6. 対象リポジトリとブランチを選択。
7. Build設定で `amplify.yml` が読み込まれていることを確認。
8. 環境変数を設定:
   - `NEXT_PUBLIC_SITE_URL`
   - `BASIC_AUTH_USER`
   - `BASIC_AUTH_PASSWORD`
9. `Save and deploy`。
10. 生成URL（`*.amplifyapp.com`）で動作確認。
11. 必要なら `NEXT_PUBLIC_SITE_URL` を本番URLに更新して再デプロイ。
12. 必要に応じて Custom Domain を接続。

## 6. 面接/応募観点での整理（やり取り結論）
- この求人は **必須要件3つを満たすことが最優先**:
  - Next.js/Nuxt.js経験1年以上
  - REST API利用経験
  - 3人以上チームでのGit継続開発経験
- デプロイまでできると強い評価につながる。
- GCPデプロイ実績で応募は問題なし（AWSは歓迎要件）。
- ただし AWS への置換説明（Cloud Storage→S3 など）ができるとさらに有利。

## 7. 現時点の推奨アクション
1. GitHubに push
2. Amplify で初回デプロイ
3. `/en` と `/clientworks` の動作確認（Basic Auth含む）
4. ドメイン接続

## 8. 共有用ショートメッセージ（必要ならコピペ）
> この案件は必須要件（Next.js経験・REST API・チームGit）を満たすことが最優先です。  
> そのうえで、実運用URLまでデプロイできていれば評価はかなり上がります。  
> 現在はAWS Amplifyでデプロイ可能な構成まで整備済みです。

