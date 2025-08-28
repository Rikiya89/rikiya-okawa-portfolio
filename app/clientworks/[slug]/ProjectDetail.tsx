// app/clientworks/[slug]/ProjectDetail.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { getProject } from "@/lib/projects";
import { useRouter } from "next/navigation";
import { useModalControl } from "@/components/common/Modal";
import { useEffect, useState } from "react";

export default function ProjectDetail({ slug, inModal = false }: { slug: string; inModal?: boolean }) {
  const [project, setProject] = useState<any>(null);
  const router = useRouter();
  const modalCtl = useModalControl();

  useEffect(() => {
    getProject(slug).then(setProject);
  }, [slug]);

  const handleVisit = () => {
    const go = () => router.push(`/clientworks/${slug}/description${inModal ? "?from=modal" : ""}`);
    if (inModal && modalCtl) modalCtl.closeWith(go); else go();
  };

  const handleBackToList = () => {
    if (inModal && modalCtl) {
      // Close modal and navigate to plain list page
      modalCtl.closeWith(() => router.replace("/clientworks"));
    } else {
      // From direct page, just go to list page without modal
      router.replace("/clientworks");
    }
  };

  if (!project) return <div className="text-white">Loading...</div>;

  const p = project;
  return (
    <article>
      <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden">
        <Image src={p.src} alt={p.title} fill className="object-cover" priority />
      </div>
      <h1 className="mt-6 text-3xl font-semibold text-white">{p.title}</h1>
      <p className="mt-3 text-white/80 leading-7">{p.description}</p>
      <div className="mt-6 flex gap-3">
        {inModal ? (
          <button
            onClick={handleVisit}
            className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] font-panno text-lg inline-block px-6"
          >
            Visit
          </button>
        ) : (
          <Link
            href={`/clientworks/${slug}/description`}
            className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] font-panno text-lg inline-block px-6"
          >
            Visit
          </Link>
        )}
        <button
          onClick={handleBackToList}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] font-panno text-lg inline-block px-6"
        >
          Back to list
        </button>
      </div>
    </article>
  );
}
