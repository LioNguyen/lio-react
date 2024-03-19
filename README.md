**Table of Contents | Vite Boilerplate**

- [1. Overview](#1-overview)
  - [1.1 Resources](#11-resources)
  - [1.2 What does this boilerplate have?](#12-what-does-this-boilerplate-have)
- [2. How to init?](#2-how-to-init)
  - [2.1 Install library](#21-install-library)
  - [2.2 Config \& Setup](#22-config--setup)
    - [2.2.1 tailwind.config.js](#221-tailwindconfigjs)
    - [2.2.2 index.css](#222-indexcss)

# 1. Overview

## 1.1 Resources

- [Install Tailwind CSS with Vite | Official Document](https://tailwindcss.com/docs/guides/vite)

## 1.2 What does this boilerplate have?

- [Init project](#21-init-project-with-vite) with Vite
- [Unit test](#3-how-to-setup-test)
- [Eslint & Prettier](#4-how-to-setup-prettier)
- [Husky & lint-staged](#5-how-to-setup-husky--lint-staged)
- Automatically generate file with [Plop](#6-how-to-setup-plop)

# 2. How to init?

## 2.1 Install library

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
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

### 2.2.2 index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
