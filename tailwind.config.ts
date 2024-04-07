import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
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
        '0%': { height: '0%' },
        '100%': { height: '100%' },
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
