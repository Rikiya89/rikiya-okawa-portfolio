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
    <main className="container mx-auto px-5 pt-20 pb-16 sm:pt-24 sm:pb-20 text-white">
      <PageTransition>
        <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden mb-8">
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
          <h1 className="text-3xl font-semibold font-panno">{details?.title ?? p.title}</h1>
          {details?.role && <p className="mt-2 text-lg text-white/80 font-panno">{details.role}</p>}
        </div>

        <p className="text-lg text-white/80 leading-8 mb-6 font-panno whitespace-pre-line">
          {details?.intro ?? p.description}
        </p>

        {details?.responsibilities && details.responsibilities.length > 0 && (
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 font-panno">Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-2 text-lg text-white/85 font-panno">
              {details.responsibilities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {details?.outcomes && details.outcomes.length > 0 && (
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 font-panno">Achievements</h2>
            <ul className="list-disc pl-6 space-y-2 text-lg text-white/85 font-panno">
              {details.outcomes.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {details?.techStack && details.techStack.length > 0 && (
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-3 font-panno">Technologies</h2>
            <div className="flex flex-wrap gap-2">
              {details.techStack.map((t, i) => (
                <span key={i} className="rounded-full border border-white/15 px-3 py-1 text-base text-white/85 font-panno">
                  {t}
                </span>
              ))}
            </div>
          </section>
        )}

        <DescriptionActions slug={slug} visitHref={p.url ?? undefined} />
      </PageTransition>
    </main>
  );
}
