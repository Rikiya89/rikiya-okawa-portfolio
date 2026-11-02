import type { Metadata } from "next";
import Navbar from "@/components/en/main/Navbar";

// Client work sits behind Basic Auth in middleware.ts; keep these pages out of static/CDN caching.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Client Work — Rikiya Okawa",
  description:
    "Production front-end for brands in Japan: campaign sites, landing pages and ongoing site operations for Timberland, VANS, Dickies, Lacoste, Meiji and Kikkoman.",
  keywords: [
    "大川力也", "大川 力也", "おおかわ りきや", "オオカワ リキヤ",
    "おおかわりきや", "オオカワリキヤ", "Rikiya Okawa", "Ricky Okawa", "Ricky O'kawa"
  ],
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div lang="en">
      <Navbar />
      {children}
      {/* Parallel route slot for intercepted modal */}
      {modal}
    </div>
  );
}
