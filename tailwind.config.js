/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
],
  theme: {
    extend: {
      colors: {
        // AYROMEX Brand Colors
        orange: {
          50: '#FFF4ED',
          100: '#FFE4D1',
          500: '#FF6B35',  // PRIMARY
          600: '#E85A2B',
          700: '#C94721',
        },
        dark: {
          950: '#0B0F14',  // Main BG
          900: '#151A21',  // Elevated
          800: '#1F2937',  // Cards
          700: '#374151',  // Borders
        },
        light: {
          50: '#F9FAFB',
          100: '#F3F4F6',
        },
      },
      fontFamily: {
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero-xl': ['clamp(3rem, 8vw, 6rem)', { lineHeight: '1.1', fontWeight: '700' }],
        'hero-lg': ['clamp(2.5rem, 6vw, 4.5rem)', { lineHeight: '1.15', fontWeight: '700' }],
        'display': ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.2', fontWeight: '600' }],
        'title': ['clamp(1.5rem, 3vw, 2.5rem)', { lineHeight: '1.3', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
      },
      maxWidth: {
        'container': '1400px',
        'content': '1200px',
        'narrow': '800px',
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #0B0F14 0%, #1F2937 50%, #0B0F14 100%)',
        'gradient-card': 'linear-gradient(180deg, rgba(255,107,53,0.05) 0%, transparent 100%)',
        'gradient-glow': 'radial-gradient(circle at center, rgba(255,107,53,0.15), transparent 70%)',
      },
      animation: {
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255,107,53,0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(255,107,53,0.5)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
