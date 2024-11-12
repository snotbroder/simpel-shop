/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        actionColor: "#DFEBD1",
        gray: "#C0C7CC",
        primary: "#1A2A34",
        accent: "7189FF",
        secondary: "D9D9D9",
        bg: "#F2F2F2",
      },
    },
  },
  plugins: [],
};
