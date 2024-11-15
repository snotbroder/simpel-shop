/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        noto: ["Noto", "sans-serif"],
      },
      colors: {
        actionColor: "#DFEBD1",
        gray: "#879EAF",
        darkgray: "#5D6D79",
        primary: "#1A2A34",
        accent: "#7189FF",
        accent2: "#D9E0FF",
        secondary: "#D9D9D9",
        bg: "#F2F2F2",
      },
    },
  },
  plugins: [],
};
