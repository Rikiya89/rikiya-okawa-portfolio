import "./globals.css";
import { Agdasima, Inter } from "next/font/google";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${agdasima.variable} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
