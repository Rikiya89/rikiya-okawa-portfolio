import React from "react";
import { selectedWork } from "@/lib/homeEn";
import { getJpProject } from "@/lib/siteProjectsJp";
import { getProjectDetails } from "@/lib/projectDetails_jp";
import { getProjectDetails as getEnProjectDetails } from "@/lib/projectDetails";
import SectionHeading from "@/components/en/home/SectionHeading";
import WorkCard from "@/components/en/home/WorkCard";

const JP_LABELS = { case: "詳細を見る →", caseAria: "詳細", live: "サイト ↗", code: "コード ↗" };

const SelectedWorkJp = async () => {
  const items = await Promise.all(
    selectedWork.map(async (slug) => ({
      project: getJpProject(slug),
      details: await getProjectDetails(slug),
      enDetails: await getEnProjectDetails(slug),
    })),
  );

  return (
    <section id="work" className="relative section-space scroll-mt-[var(--nav-h)]">
      <SectionHeading index="01" meta={`${String(items.length).padStart(2, "0")} case studies`} title="Selected Work" intro="ケーススタディ : 問い、設計判断、コード。" />
      <div className="page-grid flex flex-col gap-12 md:gap-16 lg:gap-20">
        {items.map(({ project, details, enDetails }, i) =>
          project ? (
            <WorkCard
              key={project.slug}
              index={i}
              slug={project.slug}
              title={project.title}
              question={details?.question}
              tags={details?.techStack?.slice(0, 3) ?? []}
              src={project.src}
              liveUrl={project.url || undefined}
              codeUrl={enDetails?.codeUrl}
              caseHref={`/jp/project/${encodeURIComponent(project.slug)}/description`}
              labels={JP_LABELS}
            />
          ) : null,
        )}
      </div>
    </section>
  );
};

export default SelectedWorkJp;
