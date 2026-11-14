import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#10b981",
        accent: "#f43f5e",
        surface: "#0f172a",
        bgDark: "#090d16",
      },
      fontFamily: {
        serif: ["Playfair Display, serif"],
        sans: ["Inter, sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
