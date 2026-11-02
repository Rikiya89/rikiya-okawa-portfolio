import type { Metadata } from "next";
import RootDocument from "@/components/common/RootDocument";
import { siteUrl } from "@/lib/siteUrl";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
};

export default function JpRootLayout({ children }: { children: React.ReactNode }) {
  return <RootDocument lang="ja">{children}</RootDocument>;
}
