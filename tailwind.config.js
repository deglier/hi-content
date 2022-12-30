// eslint-disable-next-line @typescript-eslint/no-var-requires
const { fontFamily } = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-raleway)', ...fontFamily.sans],
        highlight: ['var(--font-yesenin)', ...fontFamily.serif],
      },
      spacing: {
        15: '3.75rem',
      },
      lineHeight: {
        snug: 1.36,
      },
      colors: {
        primary: {
          base: '#F0D07E',
          medium: '#FFEDBD',
          light: '#FFFCF3',
        },
        secondary: {
          base: '#292929',
          dark: '#454545',
          medium: '#666666',
          light: '#8D8D8D',
        },
        neutral: {
          high: {
            base: '#FFFFFF',
            dark: '#CCCCCC',
          },
        },
        footer: {
          1: '#F6ECE8',
          2: '#F7EDE4',
        },
      },
      height: {
        5.5: '1.375rem',
        18: '4.5rem',
        22: '5.5rem',
        25: '6.25rem',
        27: '6.75rem',
        28: '7rem',
      },
      width: {
        27: '6.75rem',
      },
      padding: {
        22: '5.5rem',
        23: '5.75rem',
        25: '6.25rem',
        27: '6.75rem',
      },
      backgroundImage: {
        hero: "url('/uploads/noise-overlay.png')",
        noise: "url('/uploads/noise-overlay.webp')",
      },
      aspectRatio: {
        '10/8': '10 / 8',
        '10/12': '10 / 12',
      },
      keyframes: {
        'draw-svg': {
          to: { 'stroke-dashoffset': '0' },
        },
        movingRibbon: {
          '0%': { transform: 'translate(0,0)' },
          '100%': {
            transform: 'translate(calc((var(--ribbonWidth) / 2 ) * -1),0)',
          },
        },
        movingBrands: {
          '0%': { transform: 'translate(0,0)' },
          '100%': {
            transform: 'translate(calc((var(--brandsWidth) / 2 ) * -1),0)',
          },
        },
        ribbonFirst: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-100%)' },
          '50.1%': { transform: 'translateX(-100%)' },
          '50.2%': { transform: 'translateX(100%)' },
          '50.3%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        ribbonLast: {
          '0%': { transform: 'translateX(100%)' },
          '50%': { transform: 'translateX(0)' },
          '99.7%': { transform: 'translateX(-100%)' },
          '99.8%': { transform: 'translateX(-100%)' },
          '99.9%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        'ribbon-first': 'ribbonFirst 60s linear .5s infinite',
        'ribbon-last': 'ribbonLast 60s linear .5s infinite',
        'draw-svg': '600ms ease-in-out 300ms forwards running draw-svg',
        movingRibbon: 'movingRibbon 20s linear infinite normal none running',
        movingBrands: 'movingBrands 25s linear infinite normal none running',
      },
      zIndex: {
        ripple: 9999,
        modal: 999999,
      },
      minWidth: {
        container: '72.75rem',
      },
      maxWidth: {
        container: '72.75rem',
      },
      opacity: {
        64: '0.64',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
