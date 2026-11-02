import "@/globals.css";
import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Display grotesk. Keeps the legacy `--font-panno` variable so every existing
// `font-panno` utility switches over without touching markup.
const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["500"], // every display/heading style is set at 500
  variable: "--font-panno",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"], // labels and buttons only use 400
  variable: "--font-mono",
  display: "swap",
});

// Shared <html>/<body> for the (en) and (jp) root layouts. Each route group sets its own
// lang statically, so no page has to read request headers just to pick it.
export default function RootDocument({
  lang,
  children,
}: {
  lang: "en" | "ja";
  children: React.ReactNode;
}) {
  return (
    <html lang={lang}>
      <body
        className={`${inter.variable} ${interTight.variable} ${jetbrainsMono.variable} bg-[var(--bg-void)] text-ink overflow-y-scroll overflow-x-hidden`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
