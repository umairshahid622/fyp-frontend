import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
      textColor: {
        primary: "#1B4332",
      },
      colors: {
        primary: "#1B4332",
        platinum: "#D9D9D9",
        maroon: "#352626",
        gray: "#808080",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      borderColor: {
        primary: "#1B4332",
      },
      backgroundImage: {
        gradientDark:
          "linear-gradient(270deg, rgba(53, 38, 38, 1) 15%, rgba(33, 24, 37, 1) 52%, rgba(2, 0, 35, 1) 100%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
