import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#071B2F',
        'navy-light': '#0E2A45',
        'navy-mid': '#132F4C',
        'brand-blue': '#0066A2',
        cyan: {
          DEFAULT: '#00B8D4',
          glow: '#00E5FF',
        },
        ice: '#EAF6F9',
        surface: '#F2F7F9',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['IBM Plex Sans', 'sans-serif'],
      },
      fontSize: {
        '7xl': ['4.5rem', { lineHeight: '1.05' }],
        '8xl': ['6rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'cyan-glow': '0 0 40px rgba(0, 184, 212, 0.25)',
        'cyan-strong': '0 0 60px rgba(0, 229, 255, 0.4)',
        'card': '0 4px 24px rgba(7, 27, 47, 0.12)',
        'glass': '0 8px 32px rgba(7, 27, 47, 0.2)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'mesh-navy':
          'radial-gradient(at 40% 20%, #0E2A45 0%, transparent 50%), radial-gradient(at 80% 0%, #132F4C 0%, transparent 50%), radial-gradient(at 0% 50%, #071B2F 0%, transparent 50%)',
      },
      animation: {
        'scroll-left': 'scroll-left 30s linear infinite',
        'pulse-dot': 'pulse-dot 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        'scroll-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(1.3)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%) skewX(-12deg)' },
          '100%': { transform: 'translateX(200%) skewX(-12deg)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
