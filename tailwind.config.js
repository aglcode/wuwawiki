/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#0A0F1C',
        'navy': '#141B2D',
        'teal': {
          DEFAULT: '#00FFD1',
          light: '#7AFFEB',
          dark: '#00B396',
        },
        'electric-blue': '#00C2FF',
        'accent': {
          DEFAULT: '#FF2E63',
          dark: '#CC1744',
        },
        'neon': {
          pink: '#FF2E63',
          blue: '#00C2FF',
          purple: '#BD00FF',
          yellow: '#FFD600',
        },
        'cyber': {
          black: '#0A0F1C',
          darker: '#141B2D',
          dark: '#1F2A44',
          gray: '#2C3A5A',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { textShadow: '0 0 10px rgba(0,255,209,0.5)' },
          '100%': { textShadow: '0 0 20px rgba(0,255,209,0.8), 0 0 30px rgba(0,255,209,0.6)' },
        }
      },
    },
  },
  plugins: [],
}