/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,tsx,ts,jsx,mdx}",
    "./src/components/**/*.{js,tsx,ts,jsx,mdx}",
    "./src/app/**/*.{js,tsx,ts,jsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slide: {
          "0%": { transform: "translateX(-200px)", opacity: 0 },
          "100%": { transform: "translateX(0px)", opacity: 1 },
        },
      },
      animation: {
        slide: "slide 0.7s ease-in-out",
      },
    },
  },
  plugins: [],
};
