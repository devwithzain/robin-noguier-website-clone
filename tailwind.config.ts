import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./container/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3D6681",
        secondary: "#272727",
      },
    },
    fontFamily: {
      silkaRegular: ["silkaRegular", "sans-serif"],
      silkaBold: ["silkaBold", "sans-serif"],
      ekselldisplayLarge: ["ekselldisplayLarge", "sans-serif"],
      ekselldisplaySmall: ["ekselldisplaySmall", "sans-serif"],
    }
  },
  plugins: [],
};
export default config;
