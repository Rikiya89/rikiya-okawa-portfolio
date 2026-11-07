import React from "react";
import { toolkit } from "@/lib/homeEn";
import SectionHeading from "./SectionHeading";

type Props = {
  groups?: typeof toolkit;
  id?: string;
  title?: string;
  index?: string;
};

const Toolkit = ({ groups = toolkit, id = "toolkit", title = "Toolkit", index = "04" }: Props) => (
  <section id={id} className="relative section-space section-space--end scroll-mt-[var(--nav-h)]">
    <SectionHeading index={index} title={title} />
    <div className="page-grid grid grid-cols-1 md:grid-cols-3 gap-x-[var(--gutter)] gap-y-12">
      {groups.map((group) => (
        <div key={group.title}>
          <h3 className="section-head__bar border-ink type-label">
            <span>{group.title}</span>
            <span className="fg-2">{group.items.length} {group.items.length === 1 ? "tool" : "tools"}</span>
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

export default Toolkit;
