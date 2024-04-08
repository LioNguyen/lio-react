/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    /**
     * Overwrite the default Tailwind CSS theme here
     * Spacing is applied to padding, margin, width, minWidth, maxWidth, height, minHeight, maxHeight, gap, inset, space, translate, scrollMargin, and scrollPadding
     */
    // colors: {},
    // fontFamily: {},
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

    spacing: {
      1: '4px',
      2: '8px',
    },

    /**
     * Extend the default Tailwind CSS theme here
     */
    extend: {
      colors: {
        primary: {
          light: '#FF204E',
          dark: '#A0153E',
          darker: '#5D0E41',
        },
        secondary: {
          light: '#77B0AA',
          dark: '#135D66',
          darker: '#003C43',
        },
        light: '#FEFDED',
      },
      screens: {
        tablet: [
          { min: '640px', max: '767px' },
          { min: '768px', max: '1023px' },
        ],
        laptop: { min: '1024px', max: '1279px' },
        desktop: { min: '1280px', max: '1535px' },
        xs: '475px',
        '3xl': '1600px',
      },
    },
  },
  plugins: [],
}
