/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        shrine: {
          primary: '#1e3a8a',
          secondary: '#c7a44a',
          light: '#f8fafc',
          dark: '#1e293b'
        }
      },
      fontFamily: {
        serif: ['Crimson Text', 'serif'],
      }
    },
  },
  plugins: [],
}