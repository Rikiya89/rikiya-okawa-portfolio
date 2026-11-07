import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RxLockClosed } from "react-icons/rx";
import { clientFeatured, clientNames } from "@/lib/homeEn";
import { projects } from "@/lib/projects";
import SectionHeading from "./SectionHeading";

const ClientWorkTeaser = () => {
  const featured = projects.find((p) => p.slug === clientFeatured);

  return (
    <section id="client-work" className="relative section-space scroll-mt-[var(--nav-h)]">
      <SectionHeading index="03" title="Client Work" intro="Production front-end for brands in Japan." meta={"Password protected"} />
      <div className="page-grid flex flex-col">
        {featured && (
          <Link
            href={`/clientworks/${featured.slug}`}
            prefetch={false}
            className="work-card work-card__link grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-x-[var(--gutter)] gap-y-6 border-t border-ink pt-3"
          >
            <div className="col-span-4 md:col-span-8 lg:col-span-12 flex items-baseline gap-4 type-label">
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
                <span className="link-arrow type-label">Case study →</span>
                <span className="type-label inline-flex items-center gap-1.5 fg-2">
                  <RxLockClosed aria-hidden="true" className="h-3.5 w-3.5" />
                  Password protected
                </span>
              </span>
            </div>
          </Link>
        )}
        <p className="mt-14 border-t border-[var(--rule)] pt-5 type-body fg-2 max-w-[72ch] text-jp-wrap">
          Also: campaign sites and maintenance for {clientNames.join(", ")}.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
          <Link href="/clientworks" prefetch={false} className="link-arrow type-label w-fit">
            All client work →
          </Link>
          <span className="type-label inline-flex items-center gap-1.5 fg-2">
            <RxLockClosed aria-hidden="true" className="h-3.5 w-3.5" />
            Password protected — credentials on request
          </span>
        </div>
      </div>
    </section>
  );
};

export default ClientWorkTeaser;
