// app/lib/projectDetails.ts
export type ProjectDetails = {
  title: string;
  intro?: string;
  role?: string;
  responsibilities?: string[];
  outcomes?: string[];
  techStack?: string[];
};

const detailsMap: Record<string, ProjectDetails> = {
  "timerland-official": {
    title: "Timberland公式サイト",
    role: "役割: Webエンジニア — 運用・保守・LP制作",
    intro:
      "Timberland Japan公式サイトの運用・保守を担当しました。シーズンごとのキャンペーンLPを短納期で制作し、ニュースを即日更新することで、安定した運用を実現しました。",
    outcomes: [
      "シーズンごとのLPを平均3日以内に制作",
      "ニュースを当日中に更新し、迅速な情報発信を実現",
      "安定した運用で、ブランドの信頼性を維持",
      "マルチデバイス対応で最適な表示を提供",
    ],
    techStack: ["HTML", "SCSS", "JavaScript", "Node.js", "Gulp"],
  },
  "vans-official": {
    title: "VANS公式サイト",
    role: "役割: Webエンジニア — 運用・LP制作・ニュース更新",
    intro:
      "VANS Japan公式ECサイトの運用・改善を担当しました。スケートカルチャーや音楽フェスなどトレンド性の高いキャンペーンを中心に、スピーディーな対応が求められる案件が多く、最新情報を逃さず反映することを重視しました。",
    outcomes: [
      "月に3〜4本のLPを短納期で制作し、新商品やイベント告知をサポート",
      "週2〜3本のニュースを即日更新し、ブランドのトレンド発信を支援",
      "SCSSのリファクタリングで、デザイン表現の自由度を高めながら保守性を向上",
      "デザイナーと連携し、ストリート感のあるビジュアルを正確に再現",
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
      "React と JavaScript を使用し、天気・座標APIと連携したリアルタイム天気アプリを開発。直感的なUIで都市間をスムーズに移動し、気象パターンを探索できます。",
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
