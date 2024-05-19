import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/preline/preline.js",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        primary: "#76C1B0",
        "primary-hover": "#669592",
      },
    },
  },
  plugins: [require("preline/plugin")],
};
export default config;
