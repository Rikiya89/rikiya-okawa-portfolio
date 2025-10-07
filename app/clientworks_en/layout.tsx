import type { Metadata } from "next";
import { Inter, Cedarville_Cursive } from "next/font/google";
import "../globals.css";
import dynamic from "next/dynamic";
const StarsCanvas = dynamic(() => import("@/components/aboutme/main/StarBackground"), { ssr: false });
import Navbar from "@/components/clientworks/main/Navbar";

const inter = Inter({ subsets: ["latin"] });
const cedarville = Cedarville_Cursive({ subsets: ["latin"], weight: "400", variable: "--font-cursive" });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: "Rikiya Okawa Portfolio | Client Works EN",
  description:
    "Client work case studies by web developer Rikiya Okawa. Seasonal campaigns, LP production, and daily site operations for global and domestic brands.",
  keywords: [
    "Rikiya Okawa","client works","landing page production","web developer","campaign launch"
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/aid6kcc.css" />
      </head>
      <body className={`${inter.className} ${cedarville.variable} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
        <StarsCanvas />
        <Navbar languageHref="/clientworks_jp" />
        {children}
      </body>
    </html>
  );
}

