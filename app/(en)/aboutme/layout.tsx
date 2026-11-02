import type { Metadata } from "next";
import Navbar from "@/components/en/main/Navbar";

export const metadata: Metadata = {
  title: "About — Rikiya Okawa",
  description:
    "Rikiya Okawa is a Tokyo-based front-end engineer and creative developer. He studied digital arts in San Diego and UI/UX at Digital Hollywood Tokyo, and builds responsive, performant websites alongside real-time graphics work.",
  keywords: ["大川力也", "大川 力也", "おおかわ りきや", "オオカワ リキヤ", "おおかわりきや", "オオカワリキヤ", "Rikiya Okawa", "Ricky Okawa", "Ricky O'kawa"]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div lang="en">
      <Navbar />
      {children}
    </div>
  );
}
