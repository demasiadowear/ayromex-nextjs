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
        // AYROMEX Brand Palette 2025
        'ay-orange':       '#FF6A00',
        'ay-orange-hover': '#E65C00',
        'ay-orange-light': '#FFF1E6',
        'ay-orange-dark':  '#CC5500',
        'ay-black':        '#080808',
        'ay-surface':      'rgba(255,255,255,0.03)',
        // Legacy
        'ay-bg':           '#f8f6f2',
        'ay-bg-dark':      '#080808',
        'ay-text':         '#f0ece4',
        dark: {
          900: '#111111',
          950: '#080808',
        },
        light: {
          50: '#f9f9f9',
        },
      },
      fontFamily: {
        sans:    ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        body:    ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-syne)', 'system-ui', 'sans-serif'],
        brand:   ['var(--font-gugi)', 'sans-serif'],
        mono:    ['var(--font-jetbrains-mono)', 'ui-monospace', 'monospace'],
      },
      animation: {
        'fade-up':      'fadeUp 0.6s ease-out forwards',
        'fade-in':      'fadeIn 0.4s ease-out forwards',
        'grid-scroll':  'gridScroll 20s linear infinite',
        'marquee':      'marquee 28s linear infinite',
        'marquee2':     'marquee2 28s linear infinite',
        'pulse-glow':   'pulseGlow 4s ease-in-out infinite',
        'dot-pulse':    'dotPulse 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        gridScroll: {
          '0%':   { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '60px 60px' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marquee2: {
          '0%':   { transform: 'translateX(50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%':      { opacity: '0.7', transform: 'scale(1.08)' },
        },
        dotPulse: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%':      { opacity: '0.4', transform: 'scale(0.7)' },
        },
      },
    },
  },
  plugins: [],
}
