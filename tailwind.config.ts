import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1920px",
    },
    extend: {
      colors: {
        navy: "#030A3C",
        mist: "#EEF1F6",
        slate: "#56637F",
        white: "#FFFFFF",
      },
      fontFamily: {
        display: ["var(--font-prata)", "Georgia", "serif"],
        sans: ["var(--font-namu)", "Arial", "sans-serif"],
      },
      fontSize: {
        h1: ["clamp(44px, 6vw, 88px)", { lineHeight: "1.05" }],
        h2: ["clamp(32px, 4vw, 56px)", { lineHeight: "1.1" }],
        h3: ["clamp(24px, 2vw, 30px)", { lineHeight: "1.15" }],
      },
      maxWidth: {
        measure: "68ch",
      },
      transitionTimingFunction: {
        concert: "cubic-bezier(.22,.61,.36,1)",
      },
    },
  },
  plugins: [],
};

export default config;
