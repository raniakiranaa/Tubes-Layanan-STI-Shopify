import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
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
  plugins: [],
}
export default config
