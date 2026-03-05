/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: '#11254d',
        accent: '#0693e3',
        warm: '#e8a435',
        dark: '#32373c',
        light: '#f5f5f5',
        sage: '#cdcfc1',
      },
      fontFamily: {
        sans: ['"PT Sans"', 'sans-serif'],
        heading: ['"Antic Slab"', 'serif'],
      },
    },
  },
  plugins: [],
};
