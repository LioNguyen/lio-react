**Table of Contents | Vite Boilerplate**

- [1. Overview](#1-overview)
  - [1.1 Resources](#11-resources)
  - [1.2 What can you learn?](#12-what-can-you-learn)
- [2. How to init?](#2-how-to-init)
  - [2.1 Install library](#21-install-library)
  - [2.2 Config \& Setup](#22-config--setup)
    - [2.2.1 Config theme via tailwind.config.js](#221-config-theme-via-tailwindconfigjs)
    - [2.2.2. How to create styles?](#222-how-to-create-styles)
      - [2.2.2.1 base](#2221-base)
      - [2.2.2.2 components](#2222-components)
- [4. How to use Tailwind?](#4-how-to-use-tailwind)
  - [4.1 Colors](#41-colors)
    - [4.1.1 Basic usage](#411-basic-usage)
    - [4.1.2 How to override or create new colors?](#412-how-to-override-or-create-new-colors)
  - [4.2 Typography](#42-typography)
    - [4.2.1 Basic usage](#421-basic-usage)
    - [4.2.2 How to override or create typography style?](#422-how-to-override-or-create-typography-style)

# 1. Overview

## 1.1 Resources

- [Tailwind Tutorial | Youtube](https://youtu.be/ft30zcMlFao?si=0s21lfVzf8L2IdVt)
- [Install Tailwind CSS with Vite | Official Document](https://tailwindcss.com/docs/guides/vite)
- [Install Shadcn/UI | Official Document](https://ui.shadcn.com/docs/installation/vite)

## 1.2 What can you learn?

- TailwindCSS
- Shadcn/UI

# 2. How to init?

## 2.1 Install library

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Install Shadcn/UI (if needed)
npx shadcn-ui@latest init
```

## 2.2 Config & Setup

### 2.2.1 Config theme via tailwind.config.js

- Some theme options to extend: `colors, fontSize, lineHeight, spacing`

```js
// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // START: extend colors
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
    },
  },
  plugins: [],
}
```

### 2.2.2. How to create styles?

- [Functions and Directives](https://tailwindcss.com/docs/functions-and-directives)

#### 2.2.2.1 base

- Injects Tailwind's base styles and any base styles registered by plugins.
- Use `@layer base` to style for `element selector`
- Use `@apply` to reuse tailwind style

```css
/* src/globals.css */

@layer base {
  * {
    margin: 0;
    padding: 0;
    @apply border-border box-border overflow-x-hidden;
  }
  body {
    @apply bg-background text-foreground;
  }
  h1 {
    @apply text-4xl font-bold text-primary-darker;
  }
  h2 {
    @apply text-3xl font-bold text-primary-darker;
  }
  h3 {
    @apply text-2xl font-semibold text-secondary-darker;
  }
}
```

#### 2.2.2.2 components

- Injects Tailwind's component classes and any component classes registered by plugins.
- Use `@layer components` to style for `class selector`
- Use `@apply` to reuse tailwind style
- We can use `nested style like scss` to style for each component module

```css
/* src/components/organisms/navbar/styles.css */

@tailwind components;

@layer components {
  .nav-item {
    @apply pb-2;

    a {
      @apply text-secondary-dark relative;
      &.active {
        @apply text-secondary-darker font-bold;
      }
      &::after {
        @apply bg-secondary-dark absolute left-0 -bottom-4 w-0 h-1 transition-all duration-500 ease-in-out;
        content: '';
      }
      &:hover {
        &::after {
          @apply w-full;
        }
      }
    }
  }
}
```

# 4. How to use Tailwind?

## 4.1 Colors

### 4.1.1 Basic usage

```js
// src/components/molecules/colors/index.tsx

<p className="text-secondary-light mb-1">Secondary light color text</p>
<p className="text-[#F2613F] mb-2">Custom color text</p>
```

### 4.1.2 How to override or create new colors?

```js
// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    /**
     * Overwrite the default Tailwind CSS theme here
     */
    colors: {},

    /**
     * Extend the default Tailwind CSS theme here
     */
    extend: {
      // START: extend colors
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
      // END: extend colors
    },
  },
}
```

## 4.2 Typography

### 4.2.1 Basic usage

- Use `font-[family]` for `font-family`
- Use `font-[weight]` for `font-weight`
- Use `text-[size]` for `font-size`
- Use `leading-[...]` for `line-height`
- Use `line-clamp` for `ellipsis` in multi-line

```js
// src/components/molecules/typography/index.tsx

export const Typography: FC<TypographyProps> = ({ className, ...props }) => {
  return (
    <div className={clsx('typography', className)} {...props}>
      <h3 className="title font-mono">Typography</h3>
      <h3 className="text-xl">Title 3</h3>
      <p className="text-base">A regular paragraph</p>
      <p className="text-sm">A description paragraph</p>
      <p className="text-xs">A little note</p>
      <p className="text-normal leading-normal line-clamp-3 w-[500px]">
        Nulla dolor velit adipisicing duis excepteur esse in duis nostrud
        occaecat mollit incididunt deserunt sunt. Ut ut sunt laborum ex occaecat
        eu tempor labore enim adipisicing minim ad. Est in quis eu dolore
        occaecat excepteur fugiat dolore nisi aliqua fugiat enim ut cillum.
        Labore enim duis nostrud eu. Est ut eiusmod consequat irure quis
        deserunt ex. Enim laboris dolor magna pariatur. Dolor et ad sint
        voluptate sunt elit mollit officia ad enim sit consectetur enim.
      </p>
    </div>
  )
}
```

### 4.2.2 How to override or create typography style?

```js
// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    /**
     * Overwrite the default Tailwind CSS theme here
     */
    fontSize: {},
    lineHeight: {},

    /**
     * Extend the default Tailwind CSS theme here
     */
    extend: {
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
    },
  },
}
```
