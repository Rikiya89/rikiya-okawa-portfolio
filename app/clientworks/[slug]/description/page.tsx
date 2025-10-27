import type { Metadata } from "next";
import { getProject } from "@/lib/projects";
import { getProjectDetails } from "@/lib/projectDetails";
import Link from "next/link";
import Image from "next/image";
import { PageTransition, TransitionLink } from "@/components/common/PageTransition";
import DescriptionActions from "@/components/clientworks/DescriptionActions";
import { notFound } from "next/navigation";

type Params = { params: { slug: string } };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  try {
    const base = await getProject(params.slug);
    const details = await getProjectDetails(params.slug);
    const title = details?.title ?? base.title;
    const desc = base.description;
    return {
      title: `${title} | Project Description`,
      description: desc,
      openGraph: {
        title: `${title} | Project Description`,
        description: desc,
        url: `/clientworks/${params.slug}/description`,
        siteName: "Rikiya Okawa Portfolio",
        images: [{ url: base.src }],
        type: "article",
      },
      twitter: {
        card: "summary_large_image",
        title: `${title} | Project Description`,
        description: desc,
        images: [base.src],
        creator: "@rikiya_okawa",
      },
    };
  } catch {
    return { title: `Client Works`, description: `Project not found` };
  }
}

export default async function DescriptionPage({ params }: Params) {
  let p;
  try {
    p = await getProject(params.slug);
  } catch {
    notFound();
  }
  const details = await getProjectDetails(params.slug);
  const visitHref = p.slug === "vans-official" ? "https://www.vans.co.jp/" : p.url;

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
        {details?.role && <p className="mt-2 text-white/80">{details.role}</p>}
      </div>

      {details?.intro && <p className="text-white/80 leading-7 mb-6">{details.intro}</p>}

      {details?.responsibilities && details.responsibilities.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 font-panno">Responsibilities</h2>
          <ul className="list-disc pl-6 space-y-1 text-white/85">
            {details.responsibilities.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      {details?.outcomes && details.outcomes.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 font-panno">Achievements</h2>
          <ul className="list-disc pl-6 space-y-1 text-white/85">
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
              <span key={i} className="rounded-full border border-white/15 px-3 py-1 text-sm text-white/85">
                {t}
              </span>
            ))}
          </div>
        </section>
      )}

      <DescriptionActions slug={params.slug} visitHref={visitHref ?? undefined} />
      </PageTransition>
    </main>
  );
}
