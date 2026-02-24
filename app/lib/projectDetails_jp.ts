// app/lib/projectDetails_jp.ts
export type ProjectDetails = {
  title: string;
  intro?: string;
  role?: string;
  responsibilities?: string[];
  responsibilitiesHeading?: string;
  outcomes?: string[];
  techStack?: string[];
};

const detailsMap: Record<string, ProjectDetails> = {
  "portfolio-website": {
    title: "ポートフォリオサイト",
    role: "役割: Webエンジニア — 企画・設計・実装・ビルド環境構築",
    intro:
      "自身の制作実績とプロフィールをまとめたポートフォリオサイトを制作しました。SCSSとGulp/webpackで開発環境を整備し、保守性と更新性を重視した構成にしています。JavaScriptを用いたアニメーションを取り入れ、自身のイメージに合った表現を保ちながら、PC・モバイル双方に最適化されたUIを実装しました。",
    techStack: ["HTML", "SCSS", "JavaScript", "Node.js", "Gulp", "webpack", "Babel"],
  },
  "udemy-business": {
    title: "Udemy Interview メディアサイト",
    role: "役割: WordPress開発 — テーマ改修／検索・絞り込み／API連携／リバースプロキシ（Nginx）",
    intro:
      "WordPressでインタビュー記事サイトを構築。カスタム投稿タイプとACF設計を行い、4タクソノミーの複数絞り込みと本文＋ACFを対象としたフリーワード検索を実装。さらにUdemy APIから講座情報を取得して記事に表示し、Nginxのリバースプロキシで安定した配信とルーティングを確保しました。",
    responsibilitiesHeading: "主な内容",
    responsibilities: [
      "カスタム投稿タイプ／ACFフィールド設計とテーマ改修",
      "4タクソノミー（年代・性別・職種・カテゴリ）の複合フィルター",
      "ACF柔軟コンテンツを検索対象化し、本文＋ACF横断の検索ロジックを実装",
      "Udemy API連携（講座IDからタイトル・画像・URLを取得し表示）",
      "クリーンURL化とリライトルール整備",
      "Nginxリバースプロキシ設定",
    ],
    outcomes: [
      "複数フィルターをAND/OR条件で整理し、検索精度を向上",
      "ACF含むフリーワード検索によりコンテンツ横断の検索を実現",
      "API連携で講座情報の自動取得を実装し更新負荷を削減",
      "検索ロジックを簡潔化して保守性と性能を改善",
    ],
    techStack: ["WordPress", "PHP", "ACF Pro", "MySQL", "Docker", "WP-CLI", "Nginx", "Udemy API", "Node.js", "Gulp"],
  },
  "timerland-official": {
    title: "Timberland公式サイト",
    role: "役割: Webエンジニア — 運用・保守・LP制作",
    intro:
      "Timberland Japan公式サイトの運用・保守を担当しました。シーズンごとのキャンペーンLPを短納期（平均3日以内）で制作し、ニュースを即日更新することで、安定した運用と迅速な情報発信を実現しました。ブランドの世界観を保ちながら、PC・モバイル双方に最適化されたUIを設計しました。",
    outcomes: [
      "シーズンごとのLPを平均3日以内に制作",
      "ニュースを当日中に更新し、迅速な情報発信を実現",
      "安定した運用体制でブランドの信頼性を維持",
      "レスポンシブデザインで全デバイスに最適化",
    ],
    techStack: ["HTML", "SCSS", "JavaScript", "Node.js", "Gulp"],
  },
  "vans-official": {
    title: "VANS公式サイト",
    role: "役割: Webエンジニア — 運用・保守・LP制作",
    intro:
      "VANS Japan公式サイトの運用・保守を担当しました。トレンドを意識したキャンペーンLPを短納期で制作し、ニュース更新を迅速に行うことで、常に最新情報をユーザーへ発信。また、安定した運用とビジュアル品質の両立を図り、ブランドサイトとしての信頼性を維持しました。",
    outcomes: [
      "シーズンLPやキャンペーンページを短納期で制作",
      "ニュース更新を迅速に行い、鮮度の高い情報発信を実現",
      "トレンドを意識したUIでブランドの魅力を強化",
      "安定したサイト運用により継続的な改善を実現",
    ],
    techStack: ["HTML", "SCSS", "JavaScript", "Node.js", "Gulp"],
  },
  "lacoste-official": {
    title: "Lacoste公式サイト",
    role: "役割: Webエンジニア — LP制作専任",
    intro:
      "Lacoste Japan公式オンラインストア向けにキャンペーンLPを制作しました。ブランドの洗練されたトーンを守りながら、限られた制作期間でもクオリティを落とさないクリエイティブを心がけました。",
    outcomes: [
      "シーズンキャンペーンやセールLPを最短2日で制作し、開始日に合わせて公開",
      "ブランドガイドラインに沿ったタイポグラフィと配色を再現し、世界観を維持",
      "公開前QAを徹底し、主要デバイスでの表示崩れゼロを継続",
      "マーケ/ECチームと連携し、価格やバナー差し替えを同日中に完了",
    ],
    techStack: ["HTML", "SCSS", "JavaScript", "Node.js", "Gulp"],
  },
  "mhd-official": {
    title: "MHD公式サイト",
    role: "担当領域: フロントエンドエンジニアリング（パフォーマンス最適化・保守）",
    intro:
      "既存サイトのパフォーマンス最適化を担当しました。JavaScriptを用いてキャッシュ制御を実装し、ページ表示の安定化と高速化を実現。また、リソースの最適化やブラウザ挙動の調整を行い、ユーザー体験の向上に貢献しました。",
    outcomes: [
      "JavaScriptによるキャッシュ制御を実装し、ページ表示の安定性を向上",
      "リソースとブラウザ挙動を最適化し、読み込み速度を改善",
      "パフォーマンスチューニングにより、全体的なユーザー体験を向上",
      "最適化されたパフォーマンスで安定したウェブサイト運用を維持",
    ],
    techStack: ["JavaScript", "HTML", "CSS", "Node.js", "Gulp"],
  },
  "meiji-official": {
    title: "明治公式サイト",
    role: "役割: Webエンジニア — LP制作専任",
    intro:
      "明治 公式サイト向けに新商品や季節キャンペーンのLP制作を担当しました。安心感と親しみやすさを前面に押し出し、ブランドメッセージをわかりやすく伝える構成を意識しています。",
    outcomes: [
      "商品特集LPを週次で公開し、販促スケジュールに合わせて安定供給",
      "栄養情報やアレルギー表記など、食品ブランド特有の情報整理をテンプレート化",
      "ファミリー層を意識した配色・図版ガイドラインを踏まえ、安心感のあるデザインを実現",
      "マーケチームからの文言・価格修正依頼に当日対応できるフローを構築",
    ],
    techStack: ["HTML", "SCSS", "JavaScript", "Node.js", "Gulp"],
  },
  "kikkoman-official": {
    title: "キッコーマン公式サイト",
    role: "役割: Webエンジニア — LP制作専任",
    intro:
      "Kikkoman公式サイト向けにレシピ紹介やキャンペーン施策に合わせたLP制作を担当しました。親しみやすく分かりやすいデザインで、ブランドメッセージとレシピ導線を両立しています。",
    outcomes: [
      "季節のレシピ特集や限定キャンペーンに合わせてLPを短納期で公開",
      "料理初心者にも伝わりやすい情報設計で、レシピの手順と材料を整理",
      "食品ブランド特有の注意事項や栄養情報をテンプレート化し、校正工数を削減",
      "マーケティングチームと連携し、キャンペーン期間中の更新依頼に即日対応",
    ],
    techStack: ["HTML", "SCSS", "JavaScript", "Node.js", "Gulp"],
  },
  "react-weather-app": {
    title: "React Weather App",
    role: "役割: フロントエンドエンジニア — 設計・実装",
    intro:
      "React と JavaScript を使用し、天気・座標APIと連携したリアルタイム天気アプリを開発。\n直感的なUIで都市間をスムーズに移動し、気象パターンを探索できます。",
    responsibilitiesHeading: "主な内容",
    responsibilities: [
      "天気・位置情報APIの統合とデータ取得",
      "都市検索と結果のバリデーション/エラーハンドリング",
      "レスポンシブUIとアクセシビリティの考慮",
      "コンポーネント分割と状態管理の整理",
    ],
    outcomes: [
      "APIレスポンスに応じたスムーズなUI更新を実現",
      "読み込み体験の改善と不要な再レンダリングの削減",
      "小規模でも保守しやすい構成に最適化",
    ],
    techStack: ["React", "JavaScript", "天気API", "位置情報API", "CSS"],
  },
  "iphone14-clone-3d": {
    title: "3D iPhone Product Page",
    role: "役割: フロントエンドエンジニア — 設計・実装",
    intro:
      "React と JavaScript を使用し、3DモデルをWeb上でインタラクティブに表示する製品紹介ページを開発。\nスクロール連動のカメラアニメーションで製品の特徴を段階的に見せ、直感的な体験を提供。",
    responsibilitiesHeading: "主な内容",
    responsibilities: [
      "3Dビューア（WebGi）の組み込みと初期化",
      "スクロール連動カメラ制御の実装（GSAP/ScrollTrigger）",
      "プレビュー/通常表示の切替とUI制御",
      "レスポンシブ対応（モバイル最適化）",
      "アセット管理と読み込み体験の調整",
    ],
    outcomes: [
      "スクロールに合わせた滑らかな3D体験を実現",
      "視認性と操作性の両立で製品訴求力を向上",
      "メンテしやすいコンポーネント構成を確立",
    ],
    techStack: ["React", "JavaScript", "WebGi（3D）", "GSAP / ScrollTrigger", "CSS", "Vite"],
  },
  "guardians-of-the-moon": {
    title: "GUARDIANS OF THE MOON",
    role: "役割: Unity (C#) エンジニア — 設計・実装",
    intro:
      "Unity（C#）を用いて、VR対応のアステロイド射撃ミニゲーム向けスクリプト群を開発。アステロイドの生成・挙動、レイキャスト射撃、スコア／タイマー管理、ポップアップ表示、XRグラブとハプティクスなどを実装し、直感的なプレイ体験を提供。",
    responsibilitiesHeading: "主な内容",
    responsibilities: [
      "アステロイドのスポーン制御（範囲指定・周期スポーン、Gizmos表示）",
      "アステロイド挙動（ランダム速度・回転、移動処理）",
      "レイキャスト射撃処理（アニメーション・SFX 再生、当たり判定）",
      "被弾処理とスコア計算（距離ベースのボーナス、ポップアップ生成）",
      "ゲームループ管理（タイマー、スコア表示、ハイスコア保存、BGM切替）",
      "VR連携（XRGrabInteractable を用いたリリース時の復帰、コントローラハプティクス）",
      "UI／ポップアップ（TextMeshPro を用いたスコア表示、カメラ向き制御）",
    ],
    outcomes: [
      "VR 操作に対応した直感的な射撃体験を実現",
      "距離に応じた動的スコア・ポップアップでゲーム性を強化",
      "機能ごとに分割されたスクリプト構成で再利用性と可読性を確保",
    ],
    techStack: [
      "C#",
      "Unity（UnityEngine / UnityEngine.UI）",
      "TextMeshPro",
      "XR Interaction Toolkit",
      "Animator（アニメーション制御）",
      "AudioSource / AudioClip（BGM・SFX）",
      "プレハブ / Gizmos",
    ],
  },
  "dickies-official": {
    title: "Dickies公式サイト",
    role: "役割: Webエンジニア — 運用・保守・LP制作",
    intro:
      "Dickies Japan公式サイトの運用・保守を担当しました。新商品のLPやキャンペーンページを制作し、実用性を重視したデザインをマルチデバイス対応で実装しました。",
    outcomes: [
      "月に複数本のLPを制作し、新商品やキャンペーン告知をサポート",
      "定期的なニュース更新で最新情報を発信",
      "マルチデバイス対応で、スマートフォンからデスクトップまで最適な表示を実現",
      "実用性を重視したデザインで、ユーザビリティを向上",
    ],
    techStack: ["HTML", "SCSS", "JavaScript", "Node.js", "Gulp"],
  },
};

export async function getProjectDetails(slug: string): Promise<ProjectDetails | null> {
  return detailsMap[slug] ?? null;
}
