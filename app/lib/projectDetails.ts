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
    role: "役割: Webエンジニア — 運用・保守・LP制作",
    intro: "VANS Japan公式ECサイトの運用・改善を担当しました。主な業務内容は以下の通りです：",
    responsibilities: [
      "季節キャンペーンやニュース記事の更新・管理",
      "新商品ローンチやプロモーションのためのLP制作",
      "クロスブラウザ対応とレスポンシブデザインの調整",
      "SCSS/JavaScriptのリファクタリングによる保守性向上",
      "Node.js / Gulp を用いたワークフロー自動化",
    ],
    outcomes: [
      "短納期でのキャンペーンLPや更新を安定して納品",
      "フロントエンド構造の改善により、ページパフォーマンス向上とエラー削減を実現",
      "デザイナーやコンテンツ担当と連携し、ブランド一貫性を保持",
    ],
    techStack: ["HTML", "SCSS", "JavaScript", "Node.js", "Gulp"],
  },
};

export async function getProjectDetails(slug: string): Promise<ProjectDetails | null> {
  return detailsMap[slug] ?? null;
}

