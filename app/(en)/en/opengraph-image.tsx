import { renderOgCard } from "@/utils/ogImage";

export const alt = "Rikiya Okawa — Creative Developer. I build generative systems and interactive prototypes for brands.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return renderOgCard({
    eyebrow: "Creative Developer / Creative Technologist",
    before: "I build",
    accent: "generative systems",
    after: "and interactive prototypes for brands.",
  });
}
