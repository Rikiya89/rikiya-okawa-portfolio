import type { Metadata } from "next";
import { getEnProject } from "@/lib/siteProjectsEn";
import { getProjectDetails } from "@/lib/projectDetails";
import Image from "next/image";
import { PageTransition } from "@/components/common/PageTransition";
import DescriptionActions from "@/components/en/DescriptionActions";
import { notFound } from "next/navigation";

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const base = getEnProject(slug);
  if (!base) {
    return { title: "Projects", description: "Project not found" };
  }
  const details = await getProjectDetails(slug);
  const title = details?.title ?? base.title;
  const desc = base.description;
  return {
    title: `${title} | Project Description`,
    description: desc,
    openGraph: {
      title: `${title} | Project Description`,
      description: desc,
      url: `/en/project/${slug}/description`,
      siteName: "Rikiya Okawa Portfolio",
      images: [{ url: base.src }],
      locale: "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Project Description`,
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
  const p = getEnProject(slug);
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
          {details?.question && (
            <p className="mt-5 text-[20px] md:text-[24px] leading-[1.4] text-ink max-w-[36ch] border-l-2 border-signal pl-4">{details.question}</p>
          )}
          {(details?.role || details?.year) && (
            <p className="type-mono mt-4 text-ink-2 max-w-[80ch]">
              {[details?.role, details?.year].filter(Boolean).join(" · ")}
            </p>
          )}
        </div>

        <p className="text-[16px] md:text-[17px] leading-[1.8] text-ink-2 mb-12 max-w-[68ch] whitespace-pre-line">
          {details?.intro ?? p.description}
        </p>

        {details?.process && details.process.length > 0 && (
          <section className="mb-12">
            <h2 className="accent-section-heading text-[22px] md:text-[26px] mb-4">Process</h2>
            <ol className="max-w-[72ch]">
              {details.process.map((step, i) => (
                <li key={i}>
                  <h3 className="type-title text-[18px] md:text-[20px] text-ink border-t border-[var(--rule)] pt-3"><span className="type-label text-ink-2 mr-3">{String(i + 1).padStart(2, "0")}</span>{step.title}</h3>
                  <p className="mt-1.5 mb-5 text-[15px] md:text-[16px] leading-[1.7] text-ink-2 whitespace-pre-line">{step.body}</p>
                </li>
              ))}
            </ol>
          </section>
        )}

        {details?.decisions && details.decisions.length > 0 && (
          <section className="mb-12">
            <h2 className="accent-section-heading text-[22px] md:text-[26px] mb-4">Technical decisions</h2>
            <ul className="accent-list list-disc pl-5 space-y-2.5 text-[15px] md:text-[16px] leading-[1.7] text-ink-2 max-w-[72ch]">
              {details.decisions.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {details?.responsibilities && details.responsibilities.length > 0 && (
          <section className="mb-12">
            <h2 className="accent-section-heading text-[22px] md:text-[26px] mb-4">Responsibilities</h2>
            <ul className="accent-list list-disc pl-5 space-y-2.5 text-[15px] md:text-[16px] leading-[1.7] text-ink-2 max-w-[72ch]">
              {details.responsibilities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {details?.outcomes && details.outcomes.length > 0 && (
          <section className="mb-12">
            <h2 className="accent-section-heading text-[22px] md:text-[26px] mb-4">Achievements</h2>
            <ul className="accent-list list-disc pl-5 space-y-2.5 text-[15px] md:text-[16px] leading-[1.7] text-ink-2 max-w-[72ch]">
              {details.outcomes.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {details?.techStack && details.techStack.length > 0 && (
          <section className="mb-10">
            <h2 className="accent-section-heading text-[22px] md:text-[26px] mb-4">Technologies</h2>
            <div className="flex flex-wrap gap-2">
              {details.techStack.map((t, i) => (
                <span key={i} className="accent-chip px-2.5 py-1">
                  {t}
                </span>
              ))}
            </div>
          </section>
        )}

        {details?.next && (
          <section className="mb-10">
            <h2 className="accent-section-heading text-[22px] md:text-[26px] mb-4">What I&apos;d do next</h2>
            <p className="text-[15px] md:text-[16px] leading-[1.7] text-ink-2 max-w-[68ch] whitespace-pre-line">{details.next}</p>
          </section>
        )}

        <DescriptionActions
          slug={slug}
          visitHref={details?.liveUrl ?? (p.url || undefined)}
          codeHref={details?.codeUrl}
        />
      </PageTransition>
    </main>
  );
}
