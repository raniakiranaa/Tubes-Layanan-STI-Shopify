import {nextui} from "@nextui-org/react";
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { poppins: ["Poppins", "sans-serif", "system-ui"] },
      colors: {
        kGreen: {
          100: "#E5FFE6",
          200: "#61B566",
          300: "#3DD598",
        },
        kGrey: {
          100: "#ACACAC",
          200: "#F5F5F5",
          300: "#858585",
          400: "#6A6A6A",
          500: "#1E1E1E",
        },
        kYellow: "#F3B33E",
        kRed: "#FF4329",
        disable: "#ACACAC",
        kHeadTable: "#F5F5F5",
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
// export default config
