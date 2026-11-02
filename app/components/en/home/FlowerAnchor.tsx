import type { Ref } from "react";

const FlowerAnchor = ({ ref }: { ref: Ref<HTMLDivElement> }) => (
  <div ref={ref} aria-hidden="true" className="hidden xl:block xl:min-h-[var(--flower-size)]" />
);

export default FlowerAnchor;
