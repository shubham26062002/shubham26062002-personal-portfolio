/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'midnight-gray': '#121212',
        'midnight-black': '#0b0b0b',
        'sea-green': '#38aa76',
        'coral-pink': '#d37d7c',
      },
      fontFamily: {
        gliker: ['var(--font-gliker)'],
      },
      backgroundImage: {
        'hero-image': "url('/images/hero-image.png')",
      }
    },
  },
  plugins: [],
}
