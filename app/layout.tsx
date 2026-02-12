import "./globals.css";
import { Agdasima, Inter } from "next/font/google";
import { headers } from "next/headers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const agdasima = Agdasima({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-panno",
  display: "swap",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headerList = await headers();
  const docLang = headerList.get("x-doc-lang") === "ja" ? "ja" : "en";

  return (
    <html lang={docLang}>
      <body
        className={`${inter.variable} ${agdasima.variable} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
