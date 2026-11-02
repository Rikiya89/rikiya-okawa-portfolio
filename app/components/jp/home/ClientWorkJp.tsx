import React from "react";
import Image from "next/image";
import Link from "next/link";
import { clientFeatured, clientNames } from "@/lib/homeEn";
import { jpClientProjects } from "@/lib/clientProjectsJp";
import SectionHeading from "@/components/en/home/SectionHeading";
import ProtectedLabel from "./ProtectedLabel";

const ClientWorkJp = () => {
  const featured = jpClientProjects.find((p) => p.slug === clientFeatured);

  return (
    <section id="client-work" className="relative section-space scroll-mt-[var(--nav-h)]">
      <SectionHeading index="03" title="Client Work" intro="国内外ブランドのフロントエンド制作・運用。" meta={<ProtectedLabel />} />
      <div className="page-grid flex flex-col">
        {featured && (
          <Link
            href={`/clientworks_jp/${featured.slug}`}
            prefetch={false}
            className="work-card work-card__link grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-x-[var(--gutter)] gap-y-6 border-t border-ink pt-3"
          >
            <div className="col-span-4 md:col-span-8 lg:col-span-12 flex items-baseline gap-4 type-label">
              <span className="work-card__index">01</span>
              <span className="fg-2">Featured</span>
            </div>
            <div className="work-card__media plate relative block aspect-[16/10] col-span-4 md:col-span-8 lg:col-span-7">
              <Image
                src={featured.src}
                alt={featured.alt ?? featured.title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 58vw, 100vw"
              />
            </div>
            <div className="col-span-4 md:col-span-8 lg:col-span-5 flex flex-col">
              <h3 className="work-card__title type-headline text-[30px] md:text-[40px] lg:text-[clamp(32px,3vw,44px)] text-jp-wrap">{featured.title}</h3>
              <p className="mt-5 type-body fg-2 text-jp-wrap">{featured.description}</p>
              <span className="mt-8 lg:mt-auto lg:pt-10 flex flex-wrap items-center gap-x-5 gap-y-2">
                <span className="link-arrow type-label">詳細を見る →</span>
                <ProtectedLabel />
              </span>
            </div>
          </Link>
        )}
        <p className="mt-14 border-t border-[var(--rule)] pt-5 type-body fg-2 max-w-[72ch] text-jp-wrap">
          そのほか、{clientNames.join("、")} などのキャンペーンサイト制作・運用を担当。
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
          <Link href="/clientworks_jp" prefetch={false} className="link-arrow type-label w-fit">
            すべてのクライアントワーク →
          </Link>
          <span className="flex w-full flex-col items-start gap-1 md:w-auto md:flex-row md:items-center">
            <ProtectedLabel />
            <span className="type-label fg-2 text-jp-wrap">— ID・パスワードはお問い合わせください</span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default ClientWorkJp;
