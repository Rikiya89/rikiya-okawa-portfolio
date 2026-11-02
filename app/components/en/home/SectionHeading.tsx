import React from "react";

type Props = {
  title: string;
  intro?: React.ReactNode;
  /** Two-digit section number shown in signal red on the running bar */
  index?: string;
  /** Right-hand metadata on the running bar (count, status) */
  meta?: React.ReactNode;
};

// Running bar (index + title on a hairline) above an oversized headline; the intro
// sits in the right-hand columns. Colors inherit from the surrounding section.
const SectionHeading = ({ title, intro, index, meta }: Props) => (
  <div className="page-grid mb-10 md:mb-14">
    <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-x-[var(--gutter)]">
      <div className="col-span-4 md:col-span-8 lg:col-span-12 section-head__bar type-label">
        <span>
          {index ? <span className="section-head__index">{index}</span> : null}
          {title}
        </span>
        {meta ? <span className="fg-2">{meta}</span> : null}
      </div>
      <h2 className="col-span-4 md:col-span-6 lg:col-span-7 type-headline pt-8 md:pt-12 text-[13vw] md:text-[9vw] lg:text-[clamp(64px,7vw,112px)]">
        {title}
      </h2>
      {intro ? (
        <p className="col-span-4 md:col-span-5 lg:col-span-4 lg:col-start-9 lg:self-end type-body fg-2 pt-6 md:pt-8 max-w-[46ch] text-jp-wrap">
          {intro}
        </p>
      ) : null}
    </div>
  </div>
);

export default SectionHeading;
