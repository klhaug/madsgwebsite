import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        image: "url('/static/bg-hero.jpg')",
        burger: "url('/static/hamburger-bg.png')",
      },
      fontFamily: {
        main: 'var(--font-ebGaramond)',
        sec: 'var(--font-montserrat)',
        mono: 'var(--font-cutiveMono)'
      },
      colors: {
        blue: {
          main: '#012A4A',
          sec: '#065695',
          hover: '#034761'
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
