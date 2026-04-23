/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1440px',
    },
    extend: {
      colors: {
        // AYROMEX Design Tokens 2026
        'ay-accent':       '#FF6B00',
        'ay-accent-hover': '#E65C00',
        'ay-accent-tint':  '#FFF1E6',
        'ay-bg':           '#0A0A0A',
        'ay-surface':      '#141414',
        'ay-text':         '#FAFAFA',
        'ay-text-muted':   '#A1A1AA',
        'ay-border':       '#27272A',
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
        'grain':        'grain 8s steps(10) infinite',
        'scroll-pulse': 'scrollPulse 2s ease-in-out infinite',
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
        grain: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '10%':      { transform: 'translate3d(-2%, -1%, 0)' },
          '20%':      { transform: 'translate3d(1%, -2%, 0)' },
          '30%':      { transform: 'translate3d(-1%, 2%, 0)' },
          '40%':      { transform: 'translate3d(2%, 1%, 0)' },
          '50%':      { transform: 'translate3d(-2%, 2%, 0)' },
          '60%':      { transform: 'translate3d(1%, -1%, 0)' },
          '70%':      { transform: 'translate3d(-1%, -2%, 0)' },
          '80%':      { transform: 'translate3d(2%, -1%, 0)' },
          '90%':      { transform: 'translate3d(-1%, 1%, 0)' },
        },
        scrollPulse: {
          '0%':   { transform: 'translateY(-100%)', opacity: '0' },
          '20%':  { opacity: '1' },
          '80%':  { opacity: '1' },
          '100%': { transform: 'translateY(400%)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
