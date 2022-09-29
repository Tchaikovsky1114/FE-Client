/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        basic: '0 0 8px 0 rgba(0, 0, 0, 0.18)'
      },
      dropShadow: {
        basic: '0 0 8px rgba(0, 0, 0, 0.18)'
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        lenssisSky: '#abc8df',
        lenssisDeepSky: '#92c8ed',
        lenssisDark: '#1B304A',
        lenssisGray: '#7a7a7a',
        lenssisDeepGray: '#5a5a5a',
        lenssisLightGray: '#f4f4f4',
        lenssisStroke: '#d3d3d3',
        lenssisEmphasis: '#FF7B02'
      },
      fontFamily: {},
      keyframes: {
        toast: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0%)' }
        },
        drop: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0%)' }
        },
        left: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' }
        },
        click: {
          '0%': { transform: 'scale(1.5)' },
          '100%': { transform: 'scale(1)' }
        }
      },
      animation: {
        toast: 'toast .6s ease-in-out',
        drop: 'drop .6s ease-in-out',
        left: 'left .2s ease',
        click: 'click 1s ease-in-out'
      }
    },
    screens: {
      'xs-max': { max: '440px' },
      'xs': '440px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    }
  },
  plugins: []
}
