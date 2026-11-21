import { Socials } from "@/constants";
import { siteUrl } from "@/lib/siteUrl";

// schema.org Person: ties the kanji and romaji spellings to one entity for search engines.
export default function PersonJsonLd({ lang }: { lang: "en" | "ja" }) {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: lang === "ja" ? "大川力也" : "Rikiya Okawa",
    alternateName: lang === "ja"
      ? ["Rikiya Okawa", "大川 力也", "おおかわりきや", "オオカワリキヤ"]
      : ["大川力也", "大川 力也", "おおかわりきや", "オオカワリキヤ"],
    url: `${siteUrl}/${lang === "ja" ? "jp" : "en"}`,
    jobTitle: lang === "ja" ? "フロントエンドエンジニア" : "Front-end Engineer / Creative Developer",
    sameAs: Socials.map((s) => s.link),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, "\\u003c") }}
    />
  );
}
