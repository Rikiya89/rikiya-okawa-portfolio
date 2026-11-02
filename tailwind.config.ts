import type { Config } from "tailwindcss";

const JP_FALLBACK = [
  '"Hiragino Kaku Gothic ProN"',
  '"Hiragino Sans"',
  '"Noto Sans JP"',
  '"Yu Gothic"',
  "Meiryo",
  "sans-serif",
];

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        paper: "rgb(var(--c-paper) / <alpha-value>)",
        ink: {
          DEFAULT: "rgb(var(--c-ink) / <alpha-value>)",
          2: "rgb(var(--c-ink-2) / <alpha-value>)",
        },
        mute: "rgb(var(--c-mute) / <alpha-value>)",
        signal: "rgb(var(--c-signal) / <alpha-value>)",
        plate: "rgb(var(--c-plate) / <alpha-value>)",
        rule: "var(--rule)",
      },
      fontFamily: {
        panno: ["var(--font-panno)", ...JP_FALLBACK],
        sans: ["var(--font-sans)", ...JP_FALLBACK],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "Menlo", ...JP_FALLBACK],
      },
    },
    screens: {
      'sm': '375px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
};

export default config;
