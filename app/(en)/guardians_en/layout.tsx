import type { Metadata } from "next";
import Navbar from "@/components/en/main/Navbar";

export const metadata: Metadata = {
  title: "Guardians of the Moon — Rikiya Okawa",
  description:
    "Guardians of the Moon: a graduation project pairing a Unity VR asteroid shooter with a TouchDesigner installation for an AR/VR centre. Rikiya Okawa built the Unity (C#) gameplay — spawning, raycast shooting, scoring and XR haptics.",
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
