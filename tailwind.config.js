/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: '#174B49',
          dark: '#123D3B',
          deep: '#0E2E2C',
        },
        ivory: '#F6F7F2',
        sage: '#B8CCBF',
        mint: '#D9E8E4',
        charcoal: '#252D2B',
        muted: '#5F6A66',
      },
      fontFamily: {
        sans: ['"DM Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"DM Serif Display"', 'ui-serif', 'Georgia', 'serif'],
      },
      boxShadow: {
        soft: '0 18px 50px -24px rgba(18, 61, 59, 0.35)',
        card: '0 30px 80px -40px rgba(18, 61, 59, 0.45)',
      },
    },
  },
  plugins: [],
}
