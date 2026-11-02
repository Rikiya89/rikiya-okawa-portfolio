// app/lib/projectDetails_jp.ts
export type ProjectDetails = {
  title: string;
  intro?: string;
  question?: string;
  modalIntro?: string;
  role?: string;
  responsibilities?: string[];
  responsibilitiesHeading?: string;
  outcomes?: string[];
  techStack?: string[];
};

const detailsMap: Record<string, ProjectDetails> = {
  "generative-brand-system": {
    title: "SEED : Generative Brand System",
    question: "ブランド名ひとつを種に、アイデンティティ全体を育てられるか？",
    role: "役割: 企画・デザイン・開発（Next.js / TypeScript / SVG）",
    intro:
      "ブランド名と一文の意図から、アイデンティティ一式を生成する1ページのツールを作りました。神聖幾何学のマークとそのモーション、コントラスト比つきの OKLCH パレット、書体スタイル、ロックアップ、1080×1350 のポスター、アプリアイコンまでを一度に描きます。\nすべてのパラメータに操作 UI があるので、生成された結果をデザイナーが好みに調整でき、その状態は共有リンクでそのまま渡せます。",
    responsibilitiesHeading: "主な内容",
    responsibilities: [
      "マーク・パレット・書体・モーションにまたがる17項目の「ゲノム」を設計",
      "名前と意図を FNV-1a → mulberry32 でハッシュ化し、同じ入力から常に同じシステムを生成",
      "シード・共有 URL・スライダーの値をすべて、厳密な1つの正規化関数に通してから描画。範囲外の値は描画まで届かない",
      "ロゼット、ヴェシカ、{n/m} 星形のジオメトリを、固定の外枠に必ず収まるように実装",
      "breathe / orbit / unfold のモーションを、継ぎ目なくループするように実装。画面外では停止し、prefers-reduced-motion にも対応",
      "OKLCH から sRGB への変換を実装。色域外の色は、彩度を二分探索して色域内に収める",
      "先に仕様を文書にまとめ、その計画をもとに Claude Code で実装",
    ],
    outcomes: [
      "状態がすべて共有 URL に収まり、同じボードをそのまま再現できる",
      "メインカラーは WCAG の非テキスト基準 3:1 を満たし、文字色と背景色は常に 7:1 以上",
      "線幅を光学的に補正し、32px のアプリアイコンでも線が潰れない",
      "環境変数や API キーがなくても動く",
    ],
    techStack: ["Next.js", "TypeScript", "SVG", "OKLCH", "React", "SCSS Modules"],
  },
  "shibuya-french-festival-2026": {
    title: "渋谷フレンチフェスティバル2026 Webサイト",
    role: "役割: フロントエンド開発 — レスポンシブUI実装／インタラクティブ機能開発／WordPressフォーム連携",
    modalIntro: "渋谷フレンチフェスティバル2026の、レスポンシブな複数ページ構成のWebサイトを開発しました。イベントページ、ナビゲーション、カルーセル、タブ、アコーディオン、開閉式カード、データ駆動の会場コンテンツを、セマンティックHTML、SCSS、JavaScriptで実装しています。レストランウィークの店舗一覧では、構造化データから56店舗のカードと各店舗のワインペアリングを生成し、Swiperでレスポンシブなページネーションを組み、アクセシビリティの状態も管理しています。共通のヘッダー・フッター・FAQにはServer Side Includesを使い、専用のWordPressテーマにはGravity Formsを組み込んで、入力検証、確認、AJAX送信、完了ページへの遷移を実装しました。",
    intro: "フェスティバルの概要、屋内・屋外プログラム、レストランウィーク、リテールプロモーション、協賛情報、FAQ、お問い合わせまでを扱う、レスポンシブなイベントサイトを開発しました。情報量の多いキャンペーンページは静的に配信し、フォーム処理が必要なページだけ、用途を絞ったWordPressテーマで動かす構成です。レストランや出展者の情報は構造化したJavaScriptデータから表示し、共通のSSIパーツとSCSSの共通基盤で、ページ間の統一感を保っています。レスポンシブなナビゲーション、カルーセル、タブ、アコーディオン、開閉式プロフィール、スクロール連動のアニメーション、ネイティブdialog要素によるモーダルを実装し、アクセシビリティと「動きを減らす」設定にも対応しました。",
    responsibilitiesHeading: "主な業務",
    responsibilities: [
      "セマンティックHTML、BEMに沿ったSCSS、バニラJavaScriptで、レスポンシブなイベントページを開発",
      "8つの会場グループにまたがる56店舗を描画し、112件のワインペアリングを紐づける構造化データ層を構築",
      "アクセシビリティに配慮したカルーセル、タブ、アコーディオン、開閉式カード、ナビゲーション、ネイティブdialogモーダルを実装",
      "共通のヘッダー・フッター・FAQ、デザイン変数、ブレークポイント、アニメーション処理を、再利用しやすい形に整理",
      "クラシックWordPressテーマにGravity Formsを組み込み、環境別のフォームID、入力検証、確認、AJAX送信、完了ページへの遷移を実装",
      "GulpでSCSSをコンパイルする環境と、WordPress・MariaDB・ローカルメールテストを含むDocker環境を構築"
    ],
    outcomes: [
      "店舗ごとに繰り返していたマークアップを、1か所に集約したデータからの自動描画に置き換え",
      "キーボード操作、ARIA状態の更新、非表示スライドの制御、「動きを減らす」設定に対応した、レスポンシブなカルーセルを実装",
      "共通SSIコンポーネントとSCSSの共通基盤で、ページ間の統一感を向上",
      "WordPressの利用は動的なお問い合わせページだけにとどめ、キャンペーンコンテンツは静的配信のままにするハイブリッド構成",
      "環境に応じて切り替わるフォーム連携と、共有アセットをWordPressテーマへ同期するスクリプトを用意"
    ],
    techStack: [
      "HTML5",
      "SCSS",
      "JavaScript (ES6)",
      "WordPress",
      "PHP",
      "Gravity Forms",
      "Swiper.js",
      "Server Side Includes (SSI)",
      "Gulp",
      "Dart Sass",
      "Docker",
      "MariaDB"
    ]
  },
  "emotional-echoes-p5js": {
    title: "Emotional Echoes: Multilingual Typography Experiment",
    question: "言葉を理解する前に、感情は読み取れるのか？",
    role: "役割: Creative Coding / Generative Art（p5.js）— 企画・ビジュアル設計・インタラクション設計・実装",
    intro:
      "6つの感情（happy / anxious / peaceful / angry / sad / hopeful）を、多言語のタイポグラフィと動きで表現した p5.js 作品です。キャンバスをクリックすると感情が順に切り替わり、中央リングの単語にホバーすると文字のパーティクルが弾けます。右上の感情ホイールからは、好きな感情へ直接移れます。本作は p5.js 公式 Community ページに掲載され、p5.js Community Sketch 2025 Open Call の「Multilingual Typography & Text Experiments with p5.js 2.0」というテーマに沿って制作しました。",
    responsibilitiesHeading: "主な内容",
    responsibilities: [
      "複数の言語・文字体系で感情を表現する、タイポグラフィ体験を設計",
      "キャンバスクリック、ホバー時のパーティクル、感情ホイールの3つの操作を実装",
      "タイポグラフィと配色の変化で、感情の移り変わりを伝える演出を構成",
      "p5.js 2.0 で制作し、アクセシビリティのため describe() を実装",
      "p5.js Community Sketch 2025 Open Call（多言語タイポグラフィ／テキスト実験）の趣旨に沿って制作",
    ],
    outcomes: [
      "p5.js 公式 Community ページに掲載（2025年7月8日公開）",
      "多言語タイポグラフィの実験として、p5.js コミュニティの Open Call に沿った形で公開",
      "ジェネラティブアート、インタラクション設計、Creative Coding の取り組みを、コミュニティの場で公開",
      "感情ホイールを使った表現で、メンタルヘルスをテーマにした企画ともつなげた",
    ],
    techStack: [
      "p5.js",
      "JavaScript",
      "Creative Coding",
      "Generative Art",
      "インタラクションデザイン",
    ],
  },
  "portfolio-website": {
    title: "ポートフォリオサイト",
    role: "役割: Webエンジニア — 企画・設計・実装・ビルド環境構築",
    intro:
      "自分の制作実績とプロフィールをまとめたポートフォリオサイトを作りました。SCSSとGulp/webpackで開発環境を整え、保守しやすく更新しやすい構成にしています。JavaScriptによるアニメーションで自分のイメージに合った雰囲気を出しつつ、PCでもモバイルでも見やすいUIにしました。",
    techStack: ["HTML", "SCSS", "JavaScript", "Node.js", "Gulp", "webpack", "Babel"],
  },
  "udemy-business": {
    title: "Udemy Interview メディアサイト",
    role: "役割: WordPress開発 — テーマ改修／検索・絞り込み機能実装／Udemy REST API連携／開発環境整備（Nginx）",
    intro:
      "WordPress/ACFでインタビュー記事サイトを開発しました。カスタム投稿タイプとフィールドを設計し、4つのタクソノミーを組み合わせた絞り込みと、本文とACFの柔軟コンテンツを対象にしたフリーワード検索を実装。さらに、講座IDからUdemy REST APIでタイトル・画像・URLを取得し、記事内に自動表示する仕組みも作りました。あわせてNginxのリバースプロキシ設定とリライトルールを整え、開発環境のルーティングを安定させました。",
    responsibilitiesHeading: "主な業務",
    responsibilities: [
      "カスタム投稿タイプ／ACFフィールド設計とWordPressテーマ改修",
      "4つのタクソノミー（年代・性別・職種・カテゴリ）を組み合わせた絞り込みを実装",
      "ACFの柔軟コンテンツを含む、本文とカスタムフィールドを横断した検索ロジックを実装",
      "Udemy REST APIと連携し、講座情報を自動で取得して記事に表示",
      "URLをすっきりさせるためのWordPressリライトルールを整備",
      "Nginxのリバースプロキシ設定で、開発環境のルーティングを調整",
    ],
    outcomes: [
      "講座IDを入れるだけで講座情報が自動表示されるようにし、入力の手間を削減",
      "本文とACFを横断するフリーワード検索で、記事を探しやすく",
      "複数のタクソノミーによる絞り込みの導線を整理し、目的の記事にたどり着きやすく",
      "検索処理と表示ロジックを整理し、保守しやすく",
    ],
    techStack: ["WordPress", "PHP", "ACF Pro", "MySQL", "Docker", "WP-CLI", "Nginx", "Udemy REST API", "Node.js", "Gulp"],
  },
  "timerland-official": {
    title: "Timberland公式サイト",
    role: "役割: Webエンジニア — 運用・保守・LP制作",
    intro:
      "Timberland Japan公式サイトの運用・保守を担当しました。シーズンごとのキャンペーンLPを平均3日以内の短納期で制作し、ニュースは即日更新。安定した運用と素早い情報発信を続けました。ブランドの世界観を保ちつつ、PCでもモバイルでも見やすいUIを設計しました。",
    outcomes: [
      "シーズンごとのLPを平均3日以内に制作",
      "ニュースを当日中に更新し、素早く情報を発信",
      "安定した運用で、ブランドの信頼性を維持",
      "レスポンシブデザインで、さまざまなデバイスに対応",
    ],
    techStack: ["HTML", "SCSS", "JavaScript", "Node.js", "Gulp"],
  },
  "vans-official": {
    title: "VANS公式サイト",
    role: "役割: Webエンジニア — 運用・保守・LP制作",
    intro:
      "VANS Japan公式サイトの運用・保守を担当しました。トレンドを意識したキャンペーンLPを短納期で制作し、ニュースも素早く更新して、常に新しい情報を届けました。安定した運用とビジュアルの質を両立し、ブランドサイトとしての信頼性を保ちました。",
    outcomes: [
      "シーズンLPやキャンペーンページを短納期で制作",
      "ニュースを素早く更新し、鮮度の高い情報を発信",
      "トレンドを意識したUIで、ブランドの魅力を伝える",
      "安定した運用のもとで、継続的に改善",
    ],
    techStack: ["HTML", "SCSS", "JavaScript", "Node.js", "Gulp"],
  },
  "vans-news": {
    title: "VANS ニュース開発システム",
    role: "担当領域: フロントエンド開発 — システム設計／Astro実装／レガシー連携／ビルド自動化",
    intro:
      "VANS Japanのニュースページを制作・確認するための、Astroベースの開発・プレビューシステムを設計・実装しました。レガシーなHTML、SCSS、画像・動画アセットを整理したワークフローで管理しつつ、既存の公開環境と互換性のある出力を保っています。",
    responsibilitiesHeading: "主な業務",
    responsibilities: [
      "ニュース記事のプレビューとビルドに使うAstro静的サイトを設計",
      "レガシーHTMLをもとに、スラッグ単位で静的ルートを生成する仕組みを実装",
      "SCSSのコンパイルとアセット同期のワークフローを構築",
      "PNG・JPG・JPEGをWebPへ自動変換し、参照パスを補正する処理を実装",
      "ライブプレビュー、自動リロード、単一記事だけを対象にする開発モードを統合",
      "ビルド出力で、レガシーSSIと本番用アセットパスの互換性を維持",
    ],
    outcomes: [
      "VANS Japanのニュースページを制作・確認・公開するための、再利用できるワークフローを整備",
      "繰り返し発生する画像の準備と、ビルド出力の同期を自動化",
      "編集するソースと生成ファイルを分け、保守しやすく",
    ],
    techStack: ["Astro", "TypeScript", "Node.js", "Sass / SCSS", "Sharp", "HTML", "JavaScript"],
  },
  "lacoste-official": {
    title: "Lacoste公式サイト",
    role: "役割: Webエンジニア — LP制作専任",
    intro:
      "Lacoste Japan公式オンラインストア向けに、キャンペーンLPを制作しました。ブランドの洗練されたトーンを守りながら、限られた制作期間でもクオリティを落とさないことを心がけました。",
    outcomes: [
      "シーズンキャンペーンやセールのLPを最短2日で制作し、開始日に合わせて公開",
      "ブランドガイドラインに沿ったタイポグラフィと配色で、世界観を維持",
      "公開前のQAを徹底し、主要デバイスでの表示崩れを防止",
      "マーケティング/ECチームと連携し、価格やバナーの差し替えを同日中に対応",
    ],
    techStack: ["HTML", "SCSS", "JavaScript", "Node.js", "Gulp"],
  },
  "mhd-official": {
    title: "MHD公式サイト",
    role: "担当領域: フロントエンドエンジニアリング（パフォーマンス最適化・保守）",
    intro:
      "既存サイトのパフォーマンス最適化を担当しました。JavaScriptでキャッシュ制御を実装して、ページ表示の安定性と速度を高め、あわせてリソースやブラウザの挙動も調整し、ユーザー体験の改善に取り組みました。",
    outcomes: [
      "JavaScriptによるキャッシュ制御を実装し、ページ表示の安定性を向上",
      "リソースとブラウザの挙動を調整し、読み込み速度を改善",
      "パフォーマンスチューニングで、全体的なユーザー体験を改善",
      "最適化後のパフォーマンスを保ち、サイトを安定して運用",
    ],
    techStack: ["JavaScript", "HTML", "CSS", "Node.js", "Gulp"],
  },
  "meiji-official": {
    title: "明治公式サイト",
    role: "役割: Webエンジニア — LP制作専任",
    intro:
      "明治公式サイト向けに、新商品や季節キャンペーンのLP制作を担当しました。安心感と親しみやすさを前面に出し、ブランドメッセージが伝わりやすい構成を意識しました。",
    outcomes: [
      "商品特集LPを週次で公開し、販促スケジュールに合わせて安定して提供",
      "栄養情報やアレルギー表記など、食品ブランド特有の情報をテンプレート化して整理",
      "ファミリー層を意識した配色・図版のガイドラインに沿って、安心感のあるデザインに",
      "マーケティングチームからの文言・価格の修正依頼に、当日対応できるフローを整備",
    ],
    techStack: ["HTML", "SCSS", "JavaScript", "Node.js", "Gulp"],
  },
  "kikkoman-official": {
    title: "キッコーマン公式サイト",
    role: "役割: Webエンジニア — LP制作専任",
    intro:
      "Kikkoman公式サイト向けに、レシピ紹介やキャンペーン施策に合わせたLPを制作しました。親しみやすく分かりやすいデザインで、ブランドメッセージとレシピへの導線を両立しています。",
    outcomes: [
      "季節のレシピ特集や限定キャンペーンに合わせて、LPを短納期で公開",
      "料理初心者にも伝わるよう、レシピの手順と材料を整理した情報設計",
      "食品ブランド特有の注意事項や栄養情報をテンプレート化し、校正の工数を削減",
      "マーケティングチームと連携し、キャンペーン期間中の更新依頼に即日対応",
    ],
    techStack: ["HTML", "SCSS", "JavaScript", "Node.js", "Gulp"],
  },
  "react-weather-app": {
    title: "React Weather App",
    role: "役割: フロントエンドエンジニア — 設計・実装",
    intro:
      "React と JavaScript で、天気・座標APIと連携したリアルタイム天気アプリを開発しました。\n直感的なUIで都市を切り替えながら、気象パターンを調べられます。",
    responsibilitiesHeading: "主な内容",
    responsibilities: [
      "天気・位置情報APIの統合とデータ取得",
      "都市検索と、結果のバリデーション／エラーハンドリング",
      "レスポンシブUIとアクセシビリティへの配慮",
      "コンポーネント分割と状態管理の整理",
    ],
    outcomes: [
      "APIのレスポンスに合わせて、UIがスムーズに更新される",
      "読み込み体験の改善と不要な再レンダリングの削減",
      "小規模でも保守しやすい構成に整理",
    ],
    techStack: ["React", "JavaScript", "天気API", "位置情報API", "CSS"],
  },
  typevision: {
    title: "TypeVision",
    question: "タイピング練習アプリが、視線の行き先に気づけたら？",
    role: "役割: フロントエンドエンジニア — 設計・実装",
    intro:
      "JavaScript で、英語・日本語の練習と任意の視線追跡に対応した、ブラウザで動くタイピング学習アプリを開発しました。\n集中しやすい UI で、WPM と正確率のリアルタイム表示、チャレンジの共有、進捗のローカル保存までまとめて使えます。",
    responsibilitiesHeading: "主な内容",
    responsibilities: [
      "Practice / Challenge / Progress の各モードのゲーム進行を実装",
      "英語の文章生成、日本語表示の切り替え、ローマ字入力への対応を設計",
      "MediaPipe FaceMesh による任意の視線追跡と、キャリブレーションを組み込み",
      "スコア、実績、目標、設定を localStorage に保存",
    ],
    outcomes: [
      "バックエンド不要で、プライバシーに配慮した構成",
      "レスポンシブ UI、フォーカスモード、ライブ分析で使いやすさを向上",
      "UI、ゲームロジック、保存、翻訳を分離し、保守しやすい構成に整理",
    ],
    techStack: ["JavaScript", "HTML", "CSS", "Vite", "MediaPipe FaceMesh", "localStorage", "p5.js"],
  },
  "iphone14-clone-3d": {
    title: "3D iPhone Product Page",
    role: "役割: フロントエンドエンジニア — 設計・実装",
    intro:
      "React と JavaScript で、3D モデルを Web 上で動かせる製品紹介ページを開発しました。\nスクロールに合わせたカメラアニメーションで製品の特徴を順に見せ、直感的に体験できます。",
    responsibilitiesHeading: "主な内容",
    responsibilities: [
      "3Dビューア（WebGi）の組み込みと初期化",
      "スクロール連動のカメラ制御を実装（GSAP/ScrollTrigger）",
      "プレビュー表示と通常表示の切り替え、UI制御",
      "レスポンシブ対応（モバイル向けの最適化）",
      "アセット管理と、読み込み体験の調整",
    ],
    outcomes: [
      "スクロールに合わせた、滑らかな3D体験",
      "見やすさと操作性を両立し、製品の魅力が伝わりやすく",
      "メンテナンスしやすいコンポーネント構成",
    ],
    techStack: ["React", "JavaScript", "WebGi（3D）", "GSAP / ScrollTrigger", "CSS", "Vite"],
  },
  "guardians-of-the-moon": {
    title: "GUARDIANS OF THE MOON",
    question: "AR/VR施設での体験を、デモではなく“ミッション”に変えるには？",
    role: "役割: Unity (C#) エンジニア — 設計・実装",
    intro:
      "Unity（C#）で、VR対応の小惑星射撃ミニゲーム向けスクリプト群を開発しました。小惑星の生成と挙動、レイキャストによる射撃、スコアとタイマーの管理、ポップアップ表示、XRグラブとハプティクスなどを実装しています。",
    responsibilitiesHeading: "主な内容",
    responsibilities: [
      "小惑星のスポーン制御（範囲指定・周期スポーン、Gizmos表示）",
      "小惑星の挙動（ランダムな速度・回転、移動処理）",
      "レイキャストによる射撃処理（アニメーション・SFX 再生、当たり判定）",
      "被弾処理とスコア計算（距離に応じたボーナス、ポップアップ生成）",
      "ゲームループの管理（タイマー、スコア表示、ハイスコア保存、BGM切り替え）",
      "VR連携（XRGrabInteractable を使った、手放したときの復帰処理、コントローラのハプティクス）",
      "UI／ポップアップ（TextMeshPro でのスコア表示、カメラの向きの制御）",
    ],
    outcomes: [
      "VR 操作に合った、直感的な射撃体験",
      "距離に応じて変わるスコアとポップアップで、ゲーム性を高めた",
      "機能ごとにスクリプトを分け、再利用しやすく読みやすい構成",
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
      "Dickies Japan公式サイトの運用・保守を担当しました。新商品のLPやキャンペーンページを制作し、実用性を重視したデザインを、スマートフォンからPCまで対応する形で実装しました。",
    outcomes: [
      "月に複数本のLPを制作し、新商品やキャンペーンの告知を支援",
      "ニュースを定期的に更新し、最新情報を発信",
      "マルチデバイス対応で、スマートフォンからデスクトップまで見やすく表示",
      "実用性を重視したデザインで、使いやすさを向上",
    ],
    techStack: ["HTML", "SCSS", "JavaScript", "Node.js", "Gulp"],
  },
};

export async function getProjectDetails(slug: string): Promise<ProjectDetails | null> {
  return Object.hasOwn(detailsMap, slug) ? detailsMap[slug] : null;
}
