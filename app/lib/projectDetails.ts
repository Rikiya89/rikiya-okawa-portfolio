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
  "iphone14-clone-3d": {
    title: "iPhone 14 Clone 3D Website",
    role: "役割: フロントエンドエンジニア — UI/モーション設計",
    intro:
      "iPhone 14 をテーマにした 3D 表現の React サイト。インタラクションに合わせてモーションが連動し、製品の美学と機能性を表現します。",
    responsibilities: [
      "インタラクション設計とモーションのチューニング",
      "セクション切り替え時のスムーズなトランジション",
      "レスポンシブ最適化と視認性の確保",
    ],
    outcomes: [
      "操作に追従する一貫したアニメーション体験を実現",
      "視覚負荷を抑えつつ表現力を維持する構成に",
      "ブランド感を損なわない配色とタイポグラフィ",
    ],
    techStack: ["React", "JavaScript", "CSS"],
  },
};

export async function getProjectDetails(slug: string): Promise<ProjectDetails | null> {
  return detailsMap[slug] ?? null;
}
