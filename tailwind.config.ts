import type { Config } from "tailwindcss";
import Library from "animation-ship-components";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/animation-ship-components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: Library.Themes.primeX,
  plugins: [],
};
export default config;
