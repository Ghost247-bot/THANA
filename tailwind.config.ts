import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        sand: '#f7f4ef',
        charcoal: '#2f2b28',
        clay: '#ab8061',
        mist: '#ece8e1'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 16px 40px rgba(35, 25, 20, 0.1)'
      }
    }
  },
  plugins: []
};

export default config;
