import { renderOgCard } from "@/utils/ogImage";

export const alt = "Rikiya Okawa — Front-end Engineer / Creative Developer. Fast, accessible front-end for brands that ship often.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return renderOgCard({
    eyebrow: "Front-end Engineer / Creative Developer",
    before: "Fast, accessible",
    accent: "front-end",
    after: "for brands that ship often.",
  });
}
