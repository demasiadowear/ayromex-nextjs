/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'ay-bg': '#fbfbfb',    // Sfondo Shah-style
        'ay-black': '#0a0a0a', // Nero profondo per i testi
        'ay-orange': '#FF4D00', // IL TUO ARANCIONE (regola il hex se necessario)
      },
      fontFamily: {
        // Usa Inter (standard Next.js) o un font Grotesk se lo hai installato
        sans: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
