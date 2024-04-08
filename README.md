**Table of Contents | Vite Boilerplate**

- [1. Overview](#1-overview)
  - [1.1 Resources](#11-resources)
  - [1.2 What can you learn?](#12-what-can-you-learn)
- [2. How to init?](#2-how-to-init)
  - [2.1 Install library](#21-install-library)
  - [2.2 Config \& Setup](#22-config--setup)
    - [2.2.1 tailwind.config.js](#221-tailwindconfigjs)
    - [2.2.2 src/globals.css](#222-srcglobalscss)
- [3. How to setup base and components style using Functions and Directives?](#3-how-to-setup-base-and-components-style-using-functions-and-directives)
  - [3.1 base](#31-base)
  - [3.2 components](#32-components)
- [4. How to use Tailwind?](#4-how-to-use-tailwind)
  - [4.1 Colors](#41-colors)
    - [4.1.1 Basic usage](#411-basic-usage)
    - [4.1.2 How to override or create new colors?](#412-how-to-override-or-create-new-colors)

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

### 2.2.1 tailwind.config.js

```js
// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 2.2.2 src/globals.css

```css
/* src/globals.css */

@tailwind base;
@tailwind components;
@tailwind utilities;
```

# 3. How to setup base and components style using Functions and Directives?

- [Functions and Directives](https://tailwindcss.com/docs/functions-and-directives)

## 3.1 base

- Injects Tailwind's base styles and any base styles registered by plugins.
- Use `@layer base`
- Use `@apply` to reuse tailwind style

```css
/* src/globals.css */

@layer base {
  * {
    margin: 0;
    padding: 0;
    @apply border-border box-border overflow-x-hidden;
  }
  html {
    @apply bg-light text-secondary-darker;
  }
  h3 {
    @apply text-2xl text-primary-darker font-semibold;
  }
}
```

## 3.2 components

- Injects Tailwind's component classes and any component classes registered by plugins.
- Use `@layer components`
- Use `@apply` to reuse tailwind style

```css
/* src/globals.css */

@layer components {
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
    },
  },
}
```
