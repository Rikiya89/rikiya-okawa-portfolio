import type { Metadata } from "next";
import { getJpProject } from "@/lib/siteProjectsJp";
import { getProjectDetails } from "@/lib/projectDetails_jp";
import Image from "next/image";
import { PageTransition } from "@/components/common/PageTransition";
import DescriptionActionsJp from "@/components/jp/DescriptionActions";
import { notFound } from "next/navigation";

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const base = getJpProject(slug);
  if (!base) {
    return { title: "プロジェクト", description: "プロジェクトが見つかりませんでした" };
  }
  const details = await getProjectDetails(slug);
  const title = details?.title ?? base.title;
  const desc = base.description;
  return {
    title: `${title} | プロジェクト詳細`,
    description: desc,
    openGraph: {
      title: `${title} | プロジェクト詳細`,
      description: desc,
      url: `/jp/project/${slug}/description`,
      siteName: "Rikiya Okawa Portfolio",
      images: [{ url: base.src }],
      locale: "ja_JP",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | プロジェクト詳細`,
      description: desc,
      images: [base.src],
      creator: "@rikiya_okawa",
    },
    alternates: {
      languages: {
        en: `/en/project/${slug}/description`,
        ja: `/jp/project/${slug}/description`,
      },
    },
  };
}

export default async function DescriptionPage({ params }: Params) {
  const { slug } = await params;
  const p = getJpProject(slug);
  if (!p) notFound();
  const details = await getProjectDetails(slug);

  return (
    <main id="main" className="page-grid max-w-[1100px] pt-[calc(var(--nav-h)+32px)] pb-20 md:pt-[calc(var(--nav-h)+48px)] md:pb-28 text-ink">
      <PageTransition>
        <div className="plate relative aspect-[16/9] w-full mb-8 md:mb-12">
          <Image
            src={p.src}
            alt={p.title}
            fill
            className="object-cover"
            priority
            sizes="(min-width: 1280px) 1024px, (min-width: 640px) calc(100vw - 2.5rem), 100vw"
          />
        </div>
        <div className="mb-8">
          <h1 className="type-headline text-[36px] md:text-[56px] lg:text-[64px] text-balance">{details?.title ?? p.title}</h1>
          {details?.role && <p className="type-mono mt-4 text-ink-2 max-w-[80ch]">{details.role}</p>}
        </div>

        <p className="text-[16px] md:text-[17px] leading-[1.8] text-ink-2 mb-12 max-w-[68ch] whitespace-pre-line">
          {details?.intro ?? p.description}
        </p>

        {details?.responsibilities && details.responsibilities.length > 0 && (
          <section className="mb-12">
            <h2 className="accent-section-heading text-[22px] md:text-[26px] mb-4">
              {details.responsibilitiesHeading ?? "主な業務"}
            </h2>
            <ul className="accent-list list-disc pl-5 space-y-2.5 text-[15px] md:text-[16px] leading-[1.7] text-ink-2 max-w-[72ch]">
              {details.responsibilities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {details?.outcomes && details.outcomes.length > 0 && (
          <section className="mb-12">
            <h2 className="accent-section-heading text-[22px] md:text-[26px] mb-4">成果</h2>
            <ul className="accent-list list-disc pl-5 space-y-2.5 text-[15px] md:text-[16px] leading-[1.7] text-ink-2 max-w-[72ch]">
              {details.outcomes.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {details?.techStack && details.techStack.length > 0 && (
          <section className="mb-10">
            <h2 className="accent-section-heading text-[22px] md:text-[26px] mb-4">使用技術</h2>
            <div className="flex flex-wrap gap-2">
              {details.techStack.map((t, i) => (
                <span
                  key={i}
                  className="accent-chip px-2.5 py-1"
                >
                  {t}
                </span>
              ))}
            </div>
          </section>
        )}

        <DescriptionActionsJp slug={slug} visitHref={p.url ?? undefined} />
      </PageTransition>
    </main>
  );
}
