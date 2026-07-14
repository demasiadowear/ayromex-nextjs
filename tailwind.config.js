/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', 'class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  	screens: {
  		sm: '375px',
  		md: '768px',
  		lg: '1440px'
  	},
  	extend: {
  		colors: {
  			'ay-accent': '#FF6A00',
  			'ay-accent-hover': '#E65C00',
  			'ay-accent-tint': '#FFF1E6',
  			'ay-bg': '#FAFAF7',
  			'ay-surface': '#FFFFFF',
  			'ay-text': '#1C1B16',
  			'ay-text-muted': '#6E6B60',
  			'ay-border': '#E8E5DC',
  			'ay-cream': '#FFF4EC',
  			'ay-blue': '#0284C7',
  			'ay-lime': '#16A34A',
  			'ay-text-bright': '#1C1B16',
  			'ay-text-soft': '#4A483F',
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 4px)',
  			sm: 'calc(var(--radius) - 8px)'
  		},
  		fontFamily: {
  			sans: [
  				'var(--font-dm-sans)',
  				'system-ui',
  				'sans-serif'
  			],
  			body: [
  				'var(--font-dm-sans)',
  				'system-ui',
  				'sans-serif'
  			],
  			display: [
  				'var(--font-syne)',
  				'system-ui',
  				'sans-serif'
  			],
  			brand: [
  				'var(--font-gugi)',
  				'sans-serif'
  			],
  			mono: [
  				'var(--font-jetbrains-mono)',
  				'ui-monospace',
  				'monospace'
  			]
  		},
  		animation: {
  			'fade-up': 'fadeUp 0.6s ease-out forwards',
  			'fade-in': 'fadeIn 0.4s ease-out forwards',
  			'grid-scroll': 'gridScroll 20s linear infinite',
  			marquee: 'marquee 28s linear infinite',
  			marquee2: 'marquee2 28s linear infinite',
  			'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
  			'dot-pulse': 'dotPulse 2s ease-in-out infinite',
  			grain: 'grain 8s steps(10) infinite',
  			'scroll-pulse': 'scrollPulse 2s ease-in-out infinite',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'rise-in': 'riseIn 0.9s cubic-bezier(0.22,1,0.36,1) both',
  			'fade-up-soft': 'fadeUpSoft 0.7s cubic-bezier(0.22,1,0.36,1) both'
  		},
  		keyframes: {
  			fadeUp: {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(24px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
  			fadeIn: {
  				'0%': {
  					opacity: '0'
  				},
  				'100%': {
  					opacity: '1'
  				}
  			},
  			gridScroll: {
  				'0%': {
  					backgroundPosition: '0 0'
  				},
  				'100%': {
  					backgroundPosition: '60px 60px'
  				}
  			},
  			marquee: {
  				'0%': {
  					transform: 'translateX(0%)'
  				},
  				'100%': {
  					transform: 'translateX(-50%)'
  				}
  			},
  			marquee2: {
  				'0%': {
  					transform: 'translateX(50%)'
  				},
  				'100%': {
  					transform: 'translateX(0%)'
  				}
  			},
  			pulseGlow: {
  				'0%, 100%': {
  					opacity: '0.4',
  					transform: 'scale(1)'
  				},
  				'50%': {
  					opacity: '0.7',
  					transform: 'scale(1.08)'
  				}
  			},
  			dotPulse: {
  				'0%, 100%': {
  					opacity: '1',
  					transform: 'scale(1)'
  				},
  				'50%': {
  					opacity: '0.4',
  					transform: 'scale(0.7)'
  				}
  			},
  			grain: {
  				'0%, 100%': {
  					transform: 'translate3d(0, 0, 0)'
  				},
  				'10%': {
  					transform: 'translate3d(-2%, -1%, 0)'
  				},
  				'20%': {
  					transform: 'translate3d(1%, -2%, 0)'
  				},
  				'30%': {
  					transform: 'translate3d(-1%, 2%, 0)'
  				},
  				'40%': {
  					transform: 'translate3d(2%, 1%, 0)'
  				},
  				'50%': {
  					transform: 'translate3d(-2%, 2%, 0)'
  				},
  				'60%': {
  					transform: 'translate3d(1%, -1%, 0)'
  				},
  				'70%': {
  					transform: 'translate3d(-1%, -2%, 0)'
  				},
  				'80%': {
  					transform: 'translate3d(2%, -1%, 0)'
  				},
  				'90%': {
  					transform: 'translate3d(-1%, 1%, 0)'
  				}
  			},
  			scrollPulse: {
  				'0%': {
  					transform: 'translateY(-100%)',
  					opacity: '0'
  				},
  				'20%': {
  					opacity: '1'
  				},
  				'80%': {
  					opacity: '1'
  				},
  				'100%': {
  					transform: 'translateY(400%)',
  					opacity: '0'
  				}
  			},
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  			riseIn: {
  				from: {
  					transform: 'translateY(44px)'
  				},
  				to: {
  					transform: 'none'
  				}
  			},
  			fadeUpSoft: {
  				from: {
  					opacity: '0',
  					transform: 'translateY(20px)'
  				},
  				to: {
  					opacity: '1',
  					transform: 'none'
  				}
  			}
  		}
  	}
  },
  plugins: [require('tailwindcss-animate')],
}
