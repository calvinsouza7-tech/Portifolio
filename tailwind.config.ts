import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00D4AA',
        'primary-dark': '#00B894',
        secondary: '#0F0F1A',
        accent: '#6C5CE7',
      },
      fontFamily: {
        sans: ['var(--font-outfit)'],
        grotesk: ['var(--font-space-grotesk)'],
      },
      spacing: {
        '0.75': '3px',
        '1.25': '5px',
        '3.75': '15px',
      },
    },
  },
  plugins: [],
}

export default config
