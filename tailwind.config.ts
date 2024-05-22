import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx,html}",
    "./src/components/*.{js,ts,jsx,tsx,mdx,html}",
    "./src/components/*/*.{js,ts,jsx,tsx,mdx,html}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx,html}",
  ],
  theme: {
    colors: {
      "gray": "rgb(49, 49, 49)",
      "white": "rgb(255 255 255)",
      "black": "rgb(0 0 0)",
      "red": "rgb(220 38 38);"

    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
