/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          50:  '#FFF4ED',
          100: '#FFE4D1',
          300: '#FFB088',
          400: '#FF8C5A',
          500: '#FF6B35',
          600: '#E85A2B',
          700: '#C94721',
        },
        dark: {
          950: '#07090d',
          900: '#0e1014',
          800: '#1a1d24',
          700: '#2a2e38',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        body:    ['var(--font-body)',    'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero-xl': [
          'clamp(3.5rem, 9vw, 7.5rem)',
          { lineHeight: '0.95', fontWeight: '800', letterSpacing: '-0.03em' },
        ],
        'hero-lg': [
          'clamp(2.5rem, 6vw, 5rem)',
          { lineHeight: '1.05', fontWeight: '700', letterSpacing: '-0.025em' },
        ],
        display: [
          'clamp(2rem, 4vw, 3.75rem)',
          { lineHeight: '1.1', fontWeight: '700', letterSpacing: '-0.02em' },
        ],
        title: [
          'clamp(1.5rem, 3vw, 2.5rem)',
          { lineHeight: '1.2', fontWeight: '600', letterSpacing: '-0.015em' },
        ],
      },
      maxWidth: {
        container: '1440px',
        content:   '1200px',
        narrow:    '800px',
      },
      animation: {
        marquee: 'marquee 32s linear infinite',
      },
    },
  },
  plugins: [],
}
