/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#1C1F26',
        surface: '#2D3545',
        accent: '#F8E84F',
        muted: '#3A4456',
        foreground: '#F5F3EE',
        dark: '#111317',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        drama: ['Playfair Display', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}
