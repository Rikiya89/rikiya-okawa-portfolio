// app/en/project/ProjectDetail.tsx
"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useModalControl } from "@/components/common/Modal";
import { getEnProject } from "@/lib/siteProjectsEn";

export default function EnProjectDetail({ slug, inModal = false }: { slug: string; inModal?: boolean }) {
  const router = useRouter();
  const modalCtl = useModalControl();
  const p = getEnProject(slug);
  if (!p) return <div className="text-white">Loading...</div>;

  const handleClose = () => {
    if (inModal && modalCtl) {
      modalCtl.closeWith(() => router.replace("/en"));
    } else {
      router.replace("/en");
    }
  };

  return (
    <article>
      <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden">
        <Image src={p.src} alt={p.title} fill className="object-cover" />
      </div>
      <h1 className="mt-6 text-3xl font-semibold text-white text-center">{p.title}</h1>
      <p className="mt-3 text-white/80 leading-7 text-center">{p.description}</p>
      <div className="mt-6 flex gap-3 justify-center">
        <a
          href={p.url}
          target="_blank"
          rel="noopener noreferrer"
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[220px] font-panno text-lg inline-block px-6"
        >
          Visit Website
        </a>
        <button
          onClick={handleClose}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] font-panno text-lg inline-block px-6"
        >
          Close
        </button>
      </div>
    </article>
  );
}
