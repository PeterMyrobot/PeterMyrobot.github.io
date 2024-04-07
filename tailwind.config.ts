import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      black: '#000000',
      bluedark: '#031926',
      c1: '#49586e',
      c2: '#FBFBFB',
      c3: '#9E4770',
      c4: '#f42c04',
    },
    animation: {
      'x-scrolling': 'slider 40s linear infinite',
      menuContentOpen: 'menuContentOpen 0.5s linear',
      menuOpen: 'menuOpen 5s linear',
    },
    keyframes: {
      slider: {
        '100%': { transform: 'translateX(calc(-150px * 17))' },
      },
      menuOpen: {
        '0%': { width: '0%' },
        '100%': { width: '100%' },
      },
      menuContentOpen: {
        '0%': { transform: 'scaleY(0)' },
        '100%': { transform: 'scaleY(1)' },
      },
    },
  },
  plugins: [],
};
export default config;
