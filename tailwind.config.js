/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  darkMode: ['class'],
  prefix: '',
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
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },

    /**
     * Extend the default Tailwind CSS theme here
     */
    extend: {
      // Extend borderRadius
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },

      // START: extend colors
      colors: {
        light: '#FEFDED',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
          light: '#FF204E',
          dark: '#A0153E',
          darker: '#5D0E41',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
          light: '#77B0AA',
          dark: '#135D66',
          darker: '#003C43',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      // END: extend colors

      // START: extend typography
      fontSize: {
        small: '14px',
        normal: '16px',
        subtitle: '20px',
        title: '24px',
      },

      lineHeight: {
        normal: '24px',
      },
      // END: extend typography

      // START: extend margin, padding, width, height, left, right, top, bottom
      spacing: {
        0: '0px',
        1: '1px',
        2: '2px',
        4: '4px',
        8: '8px',
        12: '12px',
        16: '16px',
        32: '32px',
      },
      // END: extend margin, padding, width, height, left, right, top, bottom

      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },

      // Extend screens
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
  plugins: [import('tailwindcss-animate')],
}
