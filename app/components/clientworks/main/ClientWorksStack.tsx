import React from "react";
import { clientStack } from "@/lib/homeEn";
import SectionHeading from "@/components/en/home/SectionHeading";

const ClientWorksStack = ({ intro = "What these client sites were built and run with." }: { intro?: string }) => (
  <section id="stack" className="relative section-space section-space--end scroll-mt-[var(--nav-h)]">
    <SectionHeading index="02" title="Stack" intro={intro} />
    <div className="page-grid grid grid-cols-1 md:grid-cols-3 gap-x-[var(--gutter)] gap-y-12">
      {clientStack.map((group) => (
        <div key={group.title}>
          <h3 className="section-head__bar border-ink type-label">
            <span>{group.title}</span>
            <span className="fg-2" aria-hidden="true">{String(group.items.length).padStart(2, "0")}</span>
          </h3>
          <ul>
            {group.items.map((item) => (
              <li key={item} className="border-b border-[var(--rule)] py-2.5 type-body">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default ClientWorksStack;
