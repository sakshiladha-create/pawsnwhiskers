import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: "#DA8A70",
        ink: "#111111",
        cream: "#FFF8EF",
        beige: "#F2DEC7",
        peach: "#F8C4B5",
        mint: "#CFE8D5",
        skysoft: "#CFE8F6",
        lavender: "#DDD3F1",
        plum: "#461E34"
      },
      boxShadow: {
        soft: "0 18px 50px rgba(17, 17, 17, 0.09)",
        card: "0 14px 35px rgba(31, 22, 18, 0.08)"
      },
      borderRadius: {
        blob: "32px"
      }
    }
  },
  plugins: []
};

export default config;
