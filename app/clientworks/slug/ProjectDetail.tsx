// app/clientworks/[slug]/ProjectDetail.tsx
import Image from "next/image";
import Link from "next/link";
import { getProject } from "@/lib/projects";

export default async function ProjectDetail({ slug }: { slug: string }) {
  const p = await getProject(slug);
  return (
    <article>
      <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden">
        <Image src={p.src} alt={p.title} fill className="object-cover" priority />
      </div>
      <h1 className="mt-6 text-3xl font-semibold">{p.title}</h1>
      <p className="mt-3 text-white/80 leading-7">{p.description}</p>
      <div className="mt-6 flex gap-3">
        {p.url && (
          <Link href={p.url} target="_blank" className="rounded-lg border border-white/15 px-4 py-2 hover:bg-white/10">
            Visit
          </Link>
        )}
        <Link href="/clientworks" className="rounded-lg border border-white/15 px-4 py-2 hover:bg-white/10">
          Back to list
        </Link>
      </div>
    </article>
  );
}