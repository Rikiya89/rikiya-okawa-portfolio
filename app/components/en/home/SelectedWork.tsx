import React from "react";
import { selectedWork } from "@/lib/homeEn";
import { getEnProject } from "@/lib/siteProjectsEn";
import { getProjectDetails } from "@/lib/projectDetails";
import SectionHeading from "./SectionHeading";
import WorkCard from "./WorkCard";

const SelectedWork = async () => {
  const items = await Promise.all(
    selectedWork.map(async (slug) => ({
      project: getEnProject(slug),
      details: await getProjectDetails(slug),
    })),
  );

  return (
    <section id="work" className="relative section-space scroll-mt-[var(--nav-h)]">
      <SectionHeading index="01" meta="case studies" title="Selected Work" intro="Case studies — the question, the decisions, the code." />
      <div className="page-grid flex flex-col gap-12 md:gap-16 lg:gap-20">
        {items.map(({ project, details }, i) =>
          project ? (
            <WorkCard
              key={project.slug}
              index={i}
              slug={project.slug}
              title={project.title}
              question={details?.question}
              tags={details?.techStack?.slice(0, 3) ?? []}
              src={project.src}
              liveUrl={details?.liveUrl ?? (project.url || undefined)}
              codeUrl={details?.codeUrl}
            />
          ) : null,
        )}
      </div>
    </section>
  );
};

export default SelectedWork;
